import React from "react";

const orderSumary = props => {
  const ingredientsSumary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>{ingredientsSumary}</ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default orderSumary;
