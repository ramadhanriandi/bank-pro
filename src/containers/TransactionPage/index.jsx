import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import OuterWrapper from '../../components/wrapper/OuterWrapper';
import Title from '../../components/Title';
import Transaction from '../../components/Transaction';


import './TransactionPage.css';

const XMLParser = require('react-xml-parser');

function TransactionPage() {
  const url = 'http://localhost:8080/WS-Bank/TransactionHistory';
  const xmls = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bank="http://bank.com/">\n<soapenv:Header/>\n<soapenv:Body>\n<bank:getTransHist>\n<!--Optional:-->\n<account>1234567890</account>\n</bank:getTransHist>\n</soapenv:Body>\n</soapenv:Envelope>';

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post(url, xmls, {
      headers: { 'Content-Type': 'text/xml' },
    })
      .then((response) => {
        const datas = new XMLParser().parseFromString(response.data).getElementsByTagName('transHist');
        console.log(datas);
        setData(datas);
      })
      .catch((error) => {
        console.log(error.response);
        return null;
      });
  }, []);

  const renderTransaction = () => data.map((transaction) => (
    <Transaction
      date={transaction.children[5].value}
      type={transaction.children[2].value}
      amount={transaction.children[3].value}
      account={transaction.children[6].value}
    />
  ));

  return (
    <div>
      <Navbar />
      <OuterWrapper>
        <Title title="Transaction History" />
        {renderTransaction()}
      </OuterWrapper>
    </div>
  );
}

export default TransactionPage;
