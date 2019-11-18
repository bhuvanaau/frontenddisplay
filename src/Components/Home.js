import React, { Component } from 'react';

// import './App.css';



class Home extends Component {
    render() {
        return (
            <div>
            <div class="container">
                <div className ="col-md-2 col-xs-2 col-lg-2 col-sm-2">
                    <div className ="well well-info text-center">DEL<span id="common" className ="size">916</span></div>
                </div>
                <div className ="col-md-2 col-xs-2 col-lg-2 col-sm-2">
                    <div className ="well well-info text-center">INT <span  id="common" className ="size">232</span></div>
                </div>
                <div className ="col-md-2 col-xs-2 col-lg-2 col-sm-2">
                    <div className ="well well-info text-center">OOD <span id="common" className ="size">342</span></div>
                </div>
                <div className ="col-md-2 col-xs-2 col-lg-2 col-sm-2">
                    <div className ="well well-info text-center">DEX <span id="common" className ="size">916</span></div>
                </div>
                <div className ="col-md-2 col-xs-2 col-lg-2 col-sm-2">
                    <div className ="well well-info text-center">NFI <span id="common" className ="size">916</span></div>
                </div>
            </div>
          <div className ="row">
            <div className ="col-md-6 col-xs-12 col-lg-4 col-sm-6">
                <table class ="table-bordered">
                <ul>
	                 <li class="selected">
                       <span>DAY 3</span>
	                     <div class ="well">Delivered  21/10/2019  4:45</div>
	               </li>
                   <li>
                       <span>DAY 3</span>
	                      <div class ="well">Out for delivery  8/07/2019  8:00</div>
	               </li>
                   <li>
                       <span>DAY 2</span>
	                      <div class ="well">Arrived at mysore  6/07/2019 10:54</div>
	               </li>
                   <li>
                       <span>DAY 2</span>
	                      <div class ="well">Arrived at Bangalore  5/07/2019  11:20</div>
	               </li>
                   <li>
                       <span>DAY 1</span>
	                      <div class ="well">transist to next HUB  4/07/2019  11:54</div>
	               </li>
	           </ul>
             </table>
            </div>
          

            
                <div className = "row" >
                    <div className =" col-md-6">
                    <table className ="table table-fixed table-striped table-hover table-bordered table-responsive">
                        <thead class="text-center">
                            <th>AWB NUMBER</th>
                            <th>TRANSPORTER</th>
                            <th>SOURCE</th>
                            <th>DESTINATION</th>
                            <th>BRAND</th>
                            <th>START DATE</th>
                            <th>ETD</th>
                            <th>STATUS</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                            <tr>
                                <td>#2731263751</td>
                                <td>DTDC</td>
                                <td>Bangalore</td>
                                <td>Delhi</td>
                                <td>USPA</td>
                                <td>01/07/2019</td>
                                <td>01/07/2019</td>
                                <td class="success">Delivery</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;