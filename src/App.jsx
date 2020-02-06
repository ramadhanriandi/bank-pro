import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import TransactionPage from './containers/TransactionPage';
import TransferPage from './containers/TransferPage';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} props={{ isAuth, setIsAuth }} />
          <Route path="/login" exact component={LoginPage} props={{ isAuth, setIsAuth }} />
          <Route path="/transaction" exact component={TransactionPage} />
          <Route path="/transfer" exact component={TransferPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
