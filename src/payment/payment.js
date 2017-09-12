import React, {Component} from 'react';
import './payment.css';

class Payment extends Component{
    render(){
        return(
            <div className="container">

                <div className="card product">
                    <img className="card-img-top" alt="Product" ></img>
                    <div className="card-block">
                        <h4 className="card-title">Macbook</h4>
                        <p className="card-text">Price: Rp</p>
                    </div>
                </div>

                <div className="card payment">
                    <div className="card-block">
                        <form>
                          <div className="form-group">
                            <label>
                            Nomor Kartu
                            <input type="text" name="name" />
                            </label>
                          </div>
                          <div className ="form-inline">
                                <label for="exampleSelect1">Waktu Kadaluarsa</label>
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Bulan
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                      <a className="dropdown-item" href="#">1</a>
                                      <a className="dropdown-item" href="#">2</a>
                                      <a className="dropdown-item" href="#">3</a>
                                      <a className="dropdown-item" href="#">4</a>
                                      <a className="dropdown-item" href="#">5</a>
                                      <a className="dropdown-item" href="#">6</a>
                                      <a className="dropdown-item" href="#">7</a>
                                      <a className="dropdown-item" href="#">8</a>
                                      <a className="dropdown-item" href="#">9</a>
                                      <a className="dropdown-item" href="#">10</a>
                                      <a className="dropdown-item" href="#">11</a>
                                      <a className="dropdown-item" href="#">12</a>
                                    </div>
                                </div>
                                <div className="btn-group" role="group">
                                 <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Tahun
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                      <a className="dropdown-item" href="#">2017</a>
                                      <a className="dropdown-item" href="#">2018</a>
                                      <a className="dropdown-item" href="#">2019</a>
                                      <a className="dropdown-item" href="#">2020</a>
                                      <a className="dropdown-item" href="#">2021</a>
                                      <a className="dropdown-item" href="#">2022</a>
                                      <a className="dropdown-item" href="#">2023</a>
                                      <a className="dropdown-item" href="#">2024</a>
                                      <a className="dropdown-item" href="#">2025</a>
                                      <a className="dropdown-item" href="#">2026</a>
                                      <a className="dropdown-item" href="#">2027</a>
                                      <a className="dropdown-item" href="#">2028</a>
                                      <a className="dropdown-item" href="#">2029</a>
                                      <a className="dropdown-item" href="#">2030</a>
                                      <a className="dropdown-item" href="#">2031</a>
                                      <a className="dropdown-item" href="#">2032</a>
                                    </div>
                                </div>
                                
                                <label>
                                CVV
                                <input type="text" name="name" />
                                </label>
                                

                          </div>

                          <div className ="form-inline">
                          <button type="submit" class="btn btn-primary">Cancel</button>
                          <button type="submit" class="btn btn-primary">Pay</button>
                          </div>

                    </form>
                    </div>
                </div>

        </div>


         // <form className="form-inline">
         //      <label className="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
         //      <select className ="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
         //        <option selected>Choose...</option>
         //        <option value="1">One</option>
         //        <option value="2">Two</option>
         //        <option value="3">Three</option>
         //      </select>

         //      <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                
         //        <span className="custom-control-indicator"></span>
         //        <span className="custom-control-description">Remember my preference</span>
         //      </label>

         //      <button type="submit" class="btn btn-primary">Submit</button>
         //      <label>
         //         Name:
         //        <input type="text" name="name" />
         //    </label>
         // </form>
        );
    }
}


export default Payment;