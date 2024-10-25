import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import vwCalc from "../util/vwCalc";
import ImgBox from "./ImgBox";
import SoundBtn from "./SoundButton";
import logoOrange from "../assets/logo/own_logo.svg";
import logoWhite from "../assets/logo/own_logo_white.svg";
import { useColor } from "../ColorContext";
import { colors } from "../styles";

const MAIN_ORANGE = colors.mainOrange;

const HeaderWrap = styled.header`
  display: flex;
  position: ${(props) => (props.isRoot ? "absolute" : "fixed")};
  padding: ${vwCalc(37)} ${vwCalc(80)} 0;
  top: 0;
  width: 100vw;
  height: ${vwCalc(92)};
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  color: ${(props) => props.color};
`;

const ContentListWrap = styled.div`
  padding: ${vwCalc(12)} 0;
  width: ${vwCalc(792)};
  border: ${vwCalc(1)} solid ${(props) => props.color};
  border-radius: ${vwCalc(45)};
`;

const HeaderContentList = styled.ol`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 ${vwCalc(56)};
  gap: ${vwCalc(60)};

  li {
    font-size: 1.25vw;
    color: ${(props) => props.color};
  }
  li:hover {
    font-weight: 600;
  }
`;

const Header = () => {
  const location = useLocation();
  const [isRoot, setIsRoot] = useState(
    location.pathname === "/" || location.pathname === "/#"
  );

  useEffect(() => {
    setIsRoot(location.pathname === "/" || location.pathname.includes("/#"));
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { color } = useColor();
  let Logo = color === MAIN_ORANGE ? logoOrange : logoWhite;

  return (
    <HeaderWrap isRoot={isRoot} color={color}>
      <Link to="/">
        <ImgBox src={Logo} alt="OWN 로고" width={110} height={33} />
      </Link>
      <ContentListWrap color={color}>
        <HeaderContentList color={color}>
          <li>
            <Link to="/introbranding">ABOUT</Link>
          </li>
          <li>
            <Link to="/">BRANDING</Link>
          </li>
          <li>
            <Link to="/">SERVICE</Link>
          </li>
          <li>
            <Link to="/">ANALOG</Link>
          </li>
        </HeaderContentList>
      </ContentListWrap>
      <SoundBtn />
    </HeaderWrap>
  );
};

export default Header;
