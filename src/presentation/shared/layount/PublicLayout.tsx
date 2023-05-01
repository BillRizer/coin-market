import React from "react";
import { Outlet } from "react-router-dom";
import { PublicNavComponent } from "../components/Navs/PublicNav";
import { FooterComponent } from "../components/Footer";

export const PublicLayoutContainer = () => {
  return (
    <div>
      <PublicNavComponent></PublicNavComponent>
      <Outlet />
      <FooterComponent isLogged={false}></FooterComponent>
    </div>
  );
};
