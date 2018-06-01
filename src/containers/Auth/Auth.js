import React, {Component} from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends Component {
  
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address',
          valuetype: 'email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
          valuetype: 'password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  }

  validityCheck (value, rules) {
    let isValid = true;

    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if(rules.isEmail) {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      isValid = pattern.test(value) && isValid
    }

    if(rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;

  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.validityCheck(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };
    this.setState({controls: updatedControls});
  } 
  
  render () {

    const formElArray = [];

    for(let key in this.state.controls) {
      formElArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElArray.map(formEl => (
      <Input
        key={formEl.id}
        elementType={formEl.config.elementType}
        elementConfig={formEl.config.elementConfig}
        value={formEl.config.value}
        invalid={!formEl.config.valid}
        shouldValidate={formEl.config.validation}
        touched={formEl.config.touched}
        valuetype={formEl.config.elementConfig.valuetype}
        changed={(event) => this.inputChangedHandler(event, formEl.id)} />
    ));

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;