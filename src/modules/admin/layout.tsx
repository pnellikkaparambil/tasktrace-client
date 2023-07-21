import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export class AdminLayout extends Component {
  render() {
    return (
      <div>
        Hello world
        <div className="bg-red-400 p-5">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default AdminLayout;
