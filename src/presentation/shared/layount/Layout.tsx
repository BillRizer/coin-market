import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { NavComponent } from "../components/Header";
import { SidebarComponent } from "../components/Sidebar";
import * as S from './style'
interface Props {
  isLogged: boolean;
}
export const LayoutContainer = ({ isLogged }: Props) => {
  return (
    <div>
      <NavComponent isLogged={isLogged}></NavComponent>
      {isLogged ? (
        <S.Container>
          <SidebarComponent />
          <Outlet />
        </S.Container>
      ) : (
        <Outlet />
      )}
      <FooterComponent isLogged={isLogged}></FooterComponent>
    </div>
  );
};
