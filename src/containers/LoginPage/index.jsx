// import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NonNavbarWrapper from '../../components/wrapper/NonNavbarWrapper';
import Button from '../../components/Button';
import Label from '../../components/Label';

import './LoginPage.css';

// const XMLParser = require('react-xml-parser');

function LoginPage(props) {
  // const [valid, setValid] = useState(false);
  const [account, setAccount] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // const url = 'http://localhost:8080/WS-Bank/ValidasiNoRekening';
    // const xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bank="http://bank.com/">\n<soapenv:Header/>\n<soapenv:Body>\n<bank:validasinorekening>\n<!--Optional:-->\n<norek>${account}</norek>\n</bank:validasinorekening>\n</soapenv:Body>\n</soapenv:Envelope>`;

    if (account !== '') {
      console.log('Redirected');
      props.history.push('/');
      // axios.post(url, xmls, {
      //   headers: { 'Content-Type': 'text/xml' },
      // })
      //   .then((response) => {
      //     console.log(new XMLParser().parseFromString(response.data).getElementsByTagName('return'));
      //     return <Redirect to="/" />;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  };

  return (
    <div>
      <NonNavbarWrapper>
        <div className="login-logo w-100">
          Bank
          {' '}
          <span>PRO</span>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="form-group">
            <Label htmlFor="account">Account Number</Label>
            <input
              type="text"
              className="form-control"
              id="account"
              placeholder="Insert account number"
              onChange={
                (e) => setAccount(e.target.value)
              }
            />
          </div>
          <Button text="Login" />
        </form>
      </NonNavbarWrapper>
    </div>
  );
}

export default LoginPage;
