import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { NavComponent } from "../components/Header";
import { SidebarComponent } from "../components/Sidebar";

interface Props {
  isLogged: boolean;
}
export const LayoutContainer = ({ isLogged }: Props) => {
  return (
    <div>
      <NavComponent isLogged={isLogged}></NavComponent>
      {isLogged ? (
        <SidebarComponent>
          <Outlet />
        </SidebarComponent>
      ) : (
        <Outlet />
      )}
      <FooterComponent isLogged={isLogged}></FooterComponent>
    </div>
  );
};
