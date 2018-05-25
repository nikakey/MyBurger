import React, {Component} from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler';

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }

  componentDidMount () {
    axios.get('/orders.json')
      .then(res => {
        const fetchOrder = [];
        for (let key in res.data) {
          fetchOrder.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({loading: false, orders: fetchOrder});
      })
      .catch(err => {
        this.setState({loading: false});
      });
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);