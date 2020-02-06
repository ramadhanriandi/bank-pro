import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.css';

function Transaction(props) {
  const {
    date, type, amount, account,
  } = props;

  const formatMoney = (x) => x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="transaction-wrapper">
      <div className="row">
        <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
          <div className={`transaction-${type}`}>
            { type }
          </div>
          <div className="transaction-date">
            { date }
          </div>
        </div>
        <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-right">
          <div className="transaction-amount">
            IDR
            {' '}
            { formatMoney(amount) }
          </div>
          <div className="transaction-account">
            { account }
          </div>
        </div>
      </div>
    </div>
  );
}

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  account: PropTypes.string,
};

Transaction.defaultProps = {
  account: '',
};

export default Transaction;
