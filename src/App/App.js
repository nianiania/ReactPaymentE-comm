import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Payment from '../payment/payment';
import ProductPayment from '../product_payment/product_payment';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <div className="container App-main">
            <div className="row">
               <ProductPayment className="col-sm-6" price="12.000.000" title="Macbook Pro" imgUrl="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" />
               <Payment className="col-sm-6"/>
            </div>
          
          </div>
      </div>
    );
  }
}

export default App;
