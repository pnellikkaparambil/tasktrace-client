import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export class AuthLayout extends Component {
  render() {
    return (
      <div>
        AuthLayout
        <Outlet />
      </div>
    );
  }
}

export default AuthLayout;
