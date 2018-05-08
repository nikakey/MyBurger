import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cansel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  );
};

export default orderSummory;