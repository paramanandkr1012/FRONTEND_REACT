import React ,{useState} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from './context/Auth';


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("token"));
  const [authToken, setAuthToken] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthToken(data);
  }

   const history = createBrowserHistory();
//console.log("App.js");
  return (
    <AuthContext.Provider value={{authToken,setAuthToken:setTokens}}>
      <Router history={history}> 
                     <Switch>
                          <Route  exact path="/" component={Login} />
                            <PrivateRoute  path="/home" component={Home} />
                            </Switch>
                    </Router>
    </AuthContext.Provider>
  );
}

export default App;
