import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../styles";
import vwCalc from "../util/vwCalc";
import ImgBox from "./ImgBox";
import SoundBtn from "./SoundButton";
import logo from "../assets/logo/own_logo.svg";

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
`;
const ContentListWrap = styled.div`
  padding: ${vwCalc(12)} 0;
  width: ${vwCalc(792)};
  border: ${vwCalc(1)} solid ${MAIN_ORANGE};
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
    color: ${MAIN_ORANGE};
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

  return (
    <HeaderWrap isRoot={isRoot}>
      <Link to="/">
        <ImgBox src={logo} alt="OWN 로고" width={110} height={33} />
      </Link>
      <ContentListWrap>
        <HeaderContentList>
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
