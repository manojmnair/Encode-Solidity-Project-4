import React from 'react';
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import  HomePage  from "../pages/home.page";
import  LoginPage  from "../pages/login.page";
import  SignupPage  from "../pages/signup.page";
//import { ProtectedRoute } from "./protected-route.component";
function Routes() {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
/*           <ProtectedRoute>
            <HomePage />
          </ProtectedRoute> */
          <HomePage />
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
