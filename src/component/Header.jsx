import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles'
import logo from '../assets/logo/own_logo.svg'
import SoundBtn from './SoundButton'

const HeaderWrap = styled.header`
    width: 100vw;
    height: 92px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    
`
const ContentListWrap = styled.div`
    border: 1px solid ${colors.mainOrange};
    padding: 10px 0;
    border-radius: 45px;
`
const HeaderContentList = styled.ol`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    padding-right: 56px;
    padding-left: 56px;
    gap: 60px;    

    li{
        font-size: 1.25vw;
        color: #FD4525;
    }
    li:hover{
        font-weight: 600;
    }
`

const Header = () => {
    return (

        <HeaderWrap>
            <div> <img src={logo} /></div>
            <ContentListWrap> 
                <HeaderContentList>
                    <li> ABOUT </li>
                    <li> BRANDING </li>
                    <li> SERVICE </li>
                    <li> ANALOG </li>
                </HeaderContentList>
            </ContentListWrap>
            <div> <SoundBtn /> </div>
        </HeaderWrap>
    );
};

export default Header;