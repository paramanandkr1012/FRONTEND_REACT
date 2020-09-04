import React ,{useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,useHistory} from 'react-router-dom';
import bankImage from '../images/bank1.png'
import axios from 'axios';


function Login () {
const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');
const [statusCode,setStatusCode] = useState(200);

console.log(userName.toString()+"   -- "+password);
    const history = useHistory();

    const handleInput = event => {
        setUserName(event.target.value);
      };
       const handleLogin = ()=>{
        axios.get('https://localhost:8080/username='+userName+'&password='+password) //to be configured
  .then(response => {
      const status = response.data;
      setStatusCode(status);
    console.log(status);
  })
  .catch(error => {
    console.log(error);
  });
        statusCode==200?history.push("/home"):console.log("error");
        }

   return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${bankImage})`,height:"100%"}}>
    <div className="inner-box">
    <div className="background-header"> 
    
      <h1>Loan Management</h1>
    
    </div>
    
    <div className="auth-inner">
<form>
<div className="errorMsg" >
   { statusCode==401?<label>Invalid Username or Password</label>:<div></div>}
</div>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" className="form-control" placeholder="Email address"  value={userName} onChange={event=>setUserName(event.target.value)}/>
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" value={password}  onChange={event=>setPassword(event.target.value)}/>
        <div className="small-Text">
        <div className="d-flex justify-content-between">
            <div >
            <input type="checkbox" />
            <label style={{paddingLeft:"5px"}}>Remember Me</label>
            </div>
            <Link to ="/forgotPassword">Forgot Password?</Link>
        </div>
        </div>
    <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin} >Submit</button>
   <div className="register-link"> <h6>Don't have an account? <Link to="/register">register</Link></h6></div>
    </div>
</form>
</div>
</div>
</div>



    )
}


export default Login;