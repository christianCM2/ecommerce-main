import React from 'react';
import  Navbar  from '../navbar/index';
import  Main  from '../main/index';
import { Switch, Route, Redirect } from 'react-router-dom';



export const DashboardRoutes = () => {
 
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                  
                <Route exact path="/" component={ Main } />
                    <Redirect to="/" />
                </Switch>
            </div>


        </>
    )
}
