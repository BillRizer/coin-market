import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FooterComponent } from "../components/Footer";

export const LoggedLayoutContainer = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <FooterComponent isLogged={true}></FooterComponent>
    </div>
  );
};
