import React from "react";
import {Route, Redirect,Switch} from "react-router-dom";
import {useAuth} from "./context/Auth";

function PrivateRoute  ( {component:Component ,...rest}){
    const authToken = useAuth();
    console.log("PrivateRoute")
    console.log(authToken);
    console.log(rest);
    console.log(Component);
    return (
        <Switch>
    <Route  {...rest} render= {props=>
        authToken?(
        <Component {...props} /> )
        :(
        <Redirect to="/"/>
        
)}
/>
</Switch>
    )
}

export default PrivateRoute;