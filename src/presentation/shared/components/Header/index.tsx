import React, { ReactPropTypes, useEffect, useState } from "react";
import * as S from "./style";
import IconBrand from "../../../../assets/icons/brand.svg";
import IconHamburguer from "../../../../assets/icons/icon-hamb.svg";
import IconLogOff from "../../../../assets/icons/icon-logoff.svg";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../Button";
import { MarqueeCotationCryptComponent } from "../MarqueeCotationCrypt";
import {
  Col,
  Container,
  Hidden,
  Row,
  Visible,
  useScreenClass,
} from "react-grid-system";
import { AvatarComponent } from "./Avatar";
import { useAuth } from "../../../../application/hook/useAuth";
import { SidebarComponent } from "../Sidebar";

interface Props {
  isLogged: boolean;
}

export const NavComponent = ({ isLogged }: Props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { user,signOut } = useAuth();
  const [cacheUser, setCacheUser] = useState<any>();

  useEffect(() => {
    setCacheUser(user);
  }, [user]);

  const screenClass = useScreenClass();
  const HamburguerComponent = () => {
    let styleInvertIcon = {};
    if (!isLogged && screenClass === "sm") {
      styleInvertIcon = { order: 2 };
    }
    return (
      <S.Hamburger
        style={styleInvertIcon}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={IconHamburguer} alt="menu toggle" />
      </S.Hamburger>
    );
  };
  // const HamburguerComponent = () => {};
  // const HamburguerComponent = () => {};
  return (
    <>
      <Container fluid={isLogged}>
        <Row>
          <Col lg={12}>
            <S.Navigation isLogged={isLogged}>
              <Visible sm={true} md={isLogged}>
                <HamburguerComponent />
              </Visible>

              <S.Brand
                className={`${isLogged ? "is-logged" : ""} ${
                  screenClass !== "lg" ? "center" : ""
                }`}
              >
                <img src={IconBrand} alt="brand logo" />
              </S.Brand>

              {isLogged === true && (
                <S.Item>
                  <AvatarComponent
                    isCompact={screenClass === "sm"}
                    image={cacheUser?.avatar || ""}
                    name={cacheUser?.name || ""}
                    options={[
                      {
                        icon: IconLogOff,
                        label: "logoff",
                        callback: () => {
                          signOut()
                        },
                      },
                    ]}
                  ></AvatarComponent>
                </S.Item>
              )}
              {isLogged === false && (
                <S.Line>
                  <Hidden sm>
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

                    <Visible lg>
                      <S.Item style={{ maxWidth: "300px" }}>
                        <MarqueeCotationCryptComponent size="compact"></MarqueeCotationCryptComponent>
                      </S.Item>
                    </Visible>
                    <S.Item>
                      <Link className="p" to={""}>
                        Sign in
                      </Link>
                      <ButtonComponent color="primary" size="small">
                        Sign up
                      </ButtonComponent>
                    </S.Item>
                  </Hidden>
                </S.Line>
              )}
            </S.Navigation>
          </Col>
        </Row>
        {isNavExpanded && (
          <S.MenuSidebarContainer>
            <SidebarComponent isResponsive={false} defaultIsOpen={true} ></SidebarComponent>
          </S.MenuSidebarContainer>
        )}
      </Container>
      {isLogged === false && (
        <div>
          <Hidden lg>
            <MarqueeCotationCryptComponent size="full"></MarqueeCotationCryptComponent>
          </Hidden>
        </div>
      )}
    </>
  );
};
