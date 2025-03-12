import React from "react";
import './General.css';

const TotalPrice = ({ total }) => {
  if (total === 0) return null;

  return (
    <div className="total-price">
      <h2 className="main-text">Total price: £{total}</h2>
    </div>
  );
};

export default TotalPrice;
