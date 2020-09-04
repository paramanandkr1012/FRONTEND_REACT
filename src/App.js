import React from 'react';
import logo from './logo.svg';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import { createBrowserHistory } from 'history';



function App() {
   const history = createBrowserHistory();
  return (
    <div>
      <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/forgotPassword" component={ForgotPassword} />
                            <Route path="/home" component={Home} />

                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
    </div>
  );
}

export default App;
