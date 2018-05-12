import React, {Component} from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case('onion'):
        ingredient = (
          <div className={classes.Onion}>
            <div className={classes.Onion1}></div>
            <div className={classes.Onion2}></div>
          </div>
        );
        break;
      case('cucumbers'):
        ingredient = (
          <div className={classes.Cucumbers}>
            <div className={classes.Cucumber1}></div>
            <div className={classes.Cucumber2}></div>
          </div>
        );
        break;
      case('tomato'):
        ingredient = <div className={classes.Tomato}></div>;
        break;
      default:
        ingredient = null;
    }
    
    return ingredient;
  }
  
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;