import React ,{useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bankImage from '../images/bank1.png'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import {useAuth} from '../context/Auth';
import {  Redirect } from "react-router-dom";

function Login (props) {
  const [isLoggedIn, setLoggedIn] = useState(false);

const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');
const [statusCode,setStatusCode] = useState(200);
const [errorMessage,setErrorMessage] = useState('');
const [isEmailValid,setIsEmailValid] = useState(false);
const { setAuthToken } = useAuth();

const user = {
  email:userName,
  password:password,
}

const validateEmail =() =>{
 

  const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);
   const result = regExp.test(userName);
   setIsEmailValid(result);
   }


const handleLogin = ()=>{
console.log(user);
//   axios.post('https://localhost:8071/',user) //to be configured

// .then(response => {
//   if (response.status === 200) {
//     setAuthTokens(response.headers.token);
//     setLoggedIn(true);
//   } else {
//     setErrorMessage("Invalid Username and Password");
//   }
// }).catch(err =>{
//   console.log("ERRRRROR:")
//   console.log(err.message);
// setErrorMessage(err.message)})

setAuthToken("someToken");
setLoggedIn(true);
}

  
console.log(userName.toString()+"   -- "+password);

if (isLoggedIn) {
  console.log("Logged in ")
  return <Redirect to="/home" />;
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
   { errorMessage!==''?<Alert severity="error" >{errorMessage}</Alert>:<div></div>}
</div>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" required="required" className="form-control" placeholder="Email address" onBlur = {validateEmail}   value={userName} onChange={event=>setUserName(event.target.value)}/>
        <label>Password</label>
        <input type="password" required="required" className="form-control" placeholder="Password" value={password}  onChange={event=>setPassword(event.target.value)}/>
        <div className="small-Text">
        <div className="d-flex justify-content-between">
            {/* <div >
            <input type="checkbox" />
            <label style={{paddingLeft:"5px"}}>Remember Me</label>
            </div> */}
            {/* <Link to ="/forgotPassword">Forgot Password?</Link> */}
        </div>
        </div>
        {(userName!==''&&password!=='' &&isEmailValid)? 
    <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin} >Submit</button>
    :    <button type="submit" className="btn btn-primary btn-block" disabled>Submit</button>
}

   {/* <div className="register-link"> <h6>Don't have an account? <Link to="/register">register</Link></h6></div> */}
    </div>
</form>
</div>
</div>
</div>



    )
}


export default Login;