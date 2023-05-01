import React, { ReactPropTypes, useState } from "react";
import * as S from "./style";
import { IconComponent } from "../../Icon";
import IconBrand from "../../../../../assets/icons/brand.svg";
import IconHamburguer from "../../../../../assets/icons/icon-hamb.svg";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../../Button";
import { MarqueeCotationCryptComponent } from "../../MarqueeCotationCrypt";
import { Hidden, Visible } from "react-grid-system";

interface Props {}

export const PublicNavComponent = ({}: Props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <S.Navigation>
        <S.Brand>
          <img src={IconBrand} alt="brand logo" />
        </S.Brand>
        <S.Hamburger
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src={IconHamburguer} alt="menu toggle" />
        </S.Hamburger>
        <S.Menu className={isNavExpanded ? "expanded" : ""}>
          <ul>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/about">Top Cryptos</Link>
            </li>
          </ul>
        </S.Menu>
        <Hidden xs sm>
          <S.Item style={{ maxWidth: "300px" }}>
            <MarqueeCotationCryptComponent size="compact"></MarqueeCotationCryptComponent>
          </S.Item>
        </Hidden>

        <S.Item>
          <a href="">Sign in</a>
          <ButtonComponent color="primary" size="small">
            Sign up
          </ButtonComponent>
        </S.Item>
      </S.Navigation>
      <div>
        <Visible xs sm>
            <MarqueeCotationCryptComponent size="full"></MarqueeCotationCryptComponent>
        </Visible>
      </div>
    </>
  );
};
