import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {  useSelector } from "react-redux";
import  Login  from '../login/index';
import { DashboardRoutes } from './DashboardRouters';


export const AppRouter = () => {
    
    const token = useSelector((state) => {
        return state.login.token;
      });
    

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login } 
                        isAuthenticated={ token }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ token }
                    />
                </Switch>
            </div>
        </Router>
    )
}
