import Navbar from '../../components/Navbar';
import OuterWrapper from '../../components/wrapper/OuterWrapper';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Title from '../../components/Title';
import axios from 'axios';
import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

import './TransferPage.css';

const XMLParser = require('react-xml-parser');

function TransferPage() {
  const [origin, setOrigin] = useState('1234567890');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTransfer = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/WS-Bank/Transfer';
    const xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bank="http://bank.com/">\r<soapenv:Header/>\n<soapenv:Body>\n<bank:Transfer>\n<!--Optional:-->\n<asal>${origin}</asal>\n<!--Optional:-->\n<tujuan>${destination}</tujuan>\n<!--Optional:-->\n<nominal>${amount}</nominal>\n</bank:Transfer>\n</soapenv:Body>\n</soapenv:Envelope>`;  

    if (amount !== 0) {
      axios.post(url, xmls, {
        headers: {'Content-Type':'text/xml'}
      })
      .then(function (response) {
        console.log(new XMLParser().parseFromString(response.data).getElementsByTagName('return'));
        alert('Transfer Berhasil');
        return <Redirect to="/" />;
      })
      .catch(function (error) {
        alert(error);
      });
    }
  }

  return (
    <div>
      <Navbar />
      <OuterWrapper>
        <Title title="Money Transfer" />
        <form onSubmit={e => handleTransfer(e)}>
          <div className="form-group">
            <Label htmlFor="bank">Bank</Label>
            <select className="form-control" id="bank">
              <option>BNI</option>
              <option>BRI</option>
              <option>BCA</option>
              <option>Mandiri</option>
            </select>
          </div>
          <div className="form-group">
            <Label htmlFor="destination">Destination Account Number</Label>
            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} className="form-control" id="destination" placeholder="Insert destination account number" />
          </div>
          <div className="form-group">
            <Label htmlFor="amount">Amount of Transfer</Label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="currency">IDR</span>
              </div>
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" id="amount" placeholder="eg: 100000" aria-describedby="currency" />
            </div>
          </div>
          <Button text="Transfer" type="submit" />
        </form>
      </OuterWrapper>
    </div>
  );
}

export default TransferPage;
