import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Config from "./pages/config";

export default function Routes(props) {
    return(
        <BrowserRouter>
            <Switch> 
                <Route path= '/dashboard'>
                    <Dashboard props={props}/>
                </Route>
                <Route path= '/Details'>
                    <Details props={props}/>
                </Route>
                <Route path= '/Config'>
                    <Config props={props}/>
                </Route>
                <Route path= '/'>
                    <Login props={props}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}