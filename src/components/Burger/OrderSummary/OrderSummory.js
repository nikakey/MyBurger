import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummory = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}:</span> {props.ingredients[ingKey]}</li>
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Contunue to Checkout?</p>
      <button>Cansel</button>
      <button>Continue</button>
    </Aux>
  );
};

export default orderSummory;