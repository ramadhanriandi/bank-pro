import Navbar from '../../components/Navbar';
import OuterWrapper from '../../components/wrapper/OuterWrapper';
import InnerWrapper from '../../components/wrapper/InnerWrapper';
import Menu from '../../components/Menu';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './HomePage.css';

const XMLParser = require('react-xml-parser');

function HomePage() {
  const url = 'http://localhost:8080/WS-Bank/getDataRekening';
  const xmls = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bank="http://bank.com/">\n<soapenv:Header/>\n<soapenv:Body>\n<bank:getDataRekening>\n<account>1234567890</account>\n</bank:getDataRekening>\n</soapenv:Body>\n</soapenv:Envelope>';
 
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [bank, setBank] = useState('BNI');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios.post(url, xmls, {
      headers: {'Content-Type':'text/xml'}
    })
    .then(function (response) {
      const datas = new XMLParser().parseFromString(response.data).getElementsByTagName('return');
      console.log(new XMLParser().parseFromString(response.data).getElementsByTagName('return'));
      setName(datas[datas.length-1]['children'][0].value);
      setBalance(datas[datas.length-1]['children'][1].value);
      setAccount(datas[datas.length-1]['children'][2].value);
    })
    .catch(function (error) {
      console.log(error.response);
      return null;
    });
  }, []);

  return (
    <div>
      <Navbar />
      <OuterWrapper>

        <div className="home-title w-100">
          Welcome
          <br />
          <span>{ name }</span>
        </div>
        <div className="w-100">
          <InnerWrapper>
            <div className="row account-detail">
              <div className="col col-lg-5 col-md-5 col-xs-5 detail-title">
              Account Number
              </div>
              <div className="col col-lg-7 col-md-7 col-xs-7">
              :  { account }
              </div>
            </div>
            <br />
            <div className="row account-detail">
              <div className="col col-lg-5 col-md-5 col-xs-5 detail-title">
              Balance
              </div>
              <div className="col col-lg-7 col-md-7 col-xs-7">
              :  IDR { balance }
              </div>
            </div>
            <br />
            <div className="row account-detail">
              <div className="col col-lg-5 col-md-5 col-xs-5 detail-title">
              Bank
              </div>
              <div className="col col-lg-7 col-md-7 col-xs-7">
              :  { bank }
              </div>
            </div>
          </InnerWrapper>
        </div>
        <br />
        <div className="row">
          <div className="col col-lg-6 col-md-6 col-xs-6">
            <InnerWrapper>
              <Menu image="money-transfer.png" title="Money Transfer" link="/transfer" />
            </InnerWrapper>
          </div>
          <div className="col col-lg-6 col-md-6 col-xs-6">
            <InnerWrapper>
              <Menu image="history.png" title="Transaction History" link="/transaction" />
            </InnerWrapper>
          </div>
        </div>
      </OuterWrapper>
    </div>
  );
}

export default HomePage;
