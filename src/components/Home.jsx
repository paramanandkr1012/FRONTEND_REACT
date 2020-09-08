import React ,{useState} from "react";
import HomeBackgrdImage from '../images/bank5.png';
import BannerBackgrdImage from '../images/bank6.jpg';

import Item from '../components/Item';
import axios from 'axios';


function Home (props) {
  const [borrowerName,setBorrowerName] = useState('');
  const [loanAmount,setLoanAmount] = useState(0);
  const [loanNumber,setLoanNumber] = useState(0);
  const [result,setResult] = useState({});

  
const handleSearch = ()=>{

  axios.post('',{}) //to be configured
.then(response => {
const status = response.data;
setResult(status);
console.log(status);
})
.catch(error => {
console.log(error);
});
  //statusCode==200?history.push("/home"):console.log("error");
  }

  const loanDetails= [
    { BorrowerName: 'Sam', LoanAmount:20000,LoanNumber:12345},
    { BorrowerName: 'Bala', LoanAmount:30000,LoanNumber:12346},
    { BorrowerName: 'Jai', LoanAmount:40000,LoanNumber:12347},
    { BorrowerName: 'Bharat', LoanAmount:50000,LoanNumber:12348},
    { BorrowerName: 'Ram', LoanAmount:60000,LoanNumber:12349},

];
   return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${HomeBackgrdImage})`,height:"100%"}}>
    
    
    
    <div className="home-inner">
<div className="home-banner" style={{backgroundImage:`url(${BannerBackgrdImage})`}}>
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
                <div>      <button type="submit" className="btn btn-primary btn-block" onClick={handleSearch} >Search</button></div>

                    </div>
                    </div>                 
                    {loanDetails.map((item) =>
    <Item key={item.LoanNumber} item={item}/>
)}
                    
</div>
</div>



    )
}


export default Home;