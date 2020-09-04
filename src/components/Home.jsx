import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Register from '../components/Register';
import backgroundImage from '../images/bank3.jpg'
import Item from '../components/Item';

function Home () {
  const loanDetails= [
    { BorrowerName: 'Sam', LoanAmount:20000,LoanNumber:12345},
    { BorrowerName: 'Bala', LoanAmount:30000,LoanNumber:12346},
    { BorrowerName: 'Jai', LoanAmount:40000,LoanNumber:12347},
    { BorrowerName: 'Bharat', LoanAmount:50000,LoanNumber:12348},
    { BorrowerName: 'Ram', LoanAmount:60000,LoanNumber:12349},

];
   return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${backgroundImage})`,resizeMode:'stretch' }}>
    
    
    
    <div className="home-inner">
<div className="home-banner" >
  <div><label>Search</label></div>
  <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          Name
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Borrower Name" />
                    
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          #
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Loan Number" />
                   
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        ₹
                        </span>
                      </div >
                      <input type="text" className="form-control" placeholder="Loan Amount"  />
                <div>      <button type="submit" className="btn btn-primary btn-block"  >Search</button></div>

                    </div>                 
                    <div className="gridItems">

                    <div className="d-flex justify-content-around" >

   
<p>Loan number</p>


<p>Borrower Name </p>
<p>Loan Amount (₹) </p>



</div>
                    {loanDetails.map((item) =>
    <Item key={item.LoanNumber} item={item}/>
)}
                    </div>
                    
</div>
</div>
</div>


    )
}


export default Home;