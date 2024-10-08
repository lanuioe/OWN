import React from 'react';
import { Reset } from "styled-reset";
import styled from 'styled-components'
import {colors, fontSize} from '../styles'
import introArrow from '../assets/brandingIntro/intro_arrow.svg'
import ownRepre from '../assets/brandingIntro/own.svg'
import estBg1 from '../assets/brandingIntro/est_bg_1.png'
import estBg2 from '../assets/brandingIntro/est_bg_2.png'
import estBg3 from '../assets/brandingIntro/est_bg_3.png'
import tiredLifeRelax from '../assets/brandingIntro/tiredRelax.png'

const IntroBrandingWrap = styled.div`
    margin: 0 10.2vw;
`
const MainButton = styled.button`
    margin: 0 0 0 2.6vh;
    width: 8.3vw;
    height: 8.3vw;
    background-color: ${colors.smallBlack};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 6vh;
        height: 6vh;
    }
`
const MainTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    div.main_text_1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2.9vw 0 0;
    }
    h2:nth-child(2){
        margin : 0 0 0 14.7vw;
    }
    h2:nth-child(4){
        text-align: right;
    }
    p{
        font-size: ${fontSize.kSizeText};
        text-align: right;
    }
`
const MainText = styled.h2`
    font-size: ${fontSize.eSizeHead};
    font-weight: 500;
`

const CoreValueWrap = styled.div`
    margin : 18.64vw 6.87vw 0 6.87vw;;
    display: flex;
    flex-direction: column;
    
`
const CoreValueText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 1.9vw;
    }
    h3{
        font-size: 3.125vw;
        color : ${colors.mainOrange};
        padding: 0.52vw 0 2.4vw 0;
        span{
            font-weight: 500;
        }
    }
    p{
        font-size: ${fontSize.kSizeText};
        text-align: center;
        line-height: 1;
    }
`
const CoreValueImg = styled.div`
    /* padding: 0 6.8vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.56vw;
    div{
        width: 27.7vw;
        height: 29.1vw;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        position: relative;
        span{
            font-size: ${fontSize.kSizeText};
            position: absolute;
            bottom: 1.9vw;
            // 정확한 마진을 피그마에서 알수없어서 일단 보류
        }
        p{
            font-size: 1.66vw;
            font-weight: 500;
            position: absolute;
            bottom: 0;
        }
    }
`

const TiredLifeRelaxWrap = styled.div`
    margin-top: 20.9vw;
    width: 100%;
    height: 105vw;
    background-image: url(${tiredLifeRelax});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.smallBlack};
    padding: 17.39vw 10.42vw 0 10.42vw ;
    p{
        font-size: 6.25vw;
        span{
            font-size: 6.25vw; 
            margin-right: 4.47vw;
        }
    }
    p.orange_type{
        text-align: right;
    }
    span.tired_relax_k{
        font-size:${fontSize.kSizeText};
        display: block; 
        text-align: center;
    }
`
const OwnColorWrap = styled.div`
        margin-top: 19.89vw;
        h2{
            font-size: ${fontSize.introNum};
        }
        p{
            font-size: 1.25vw;
        }
        h4{
            font-size: ${fontSize.introHead};
        }
        h4:nth-child{
            grid-column: 5;
        }
`
const OwnColorText = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 0 10vw 0 5.14vw;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            margin: 0 10.67vw 0 8.28vw;
        }
    }
`
const OwnColor = styled.div`
`
const IntroBranding = () => {
    return (
        <>
            <Reset />
            <IntroBrandingWrap>
                <MainTextWrap>
                    <div className="main_text_1">
                        <MainButton type="button"> <img src={introArrow} /> </MainButton>
                        <MainText> BRANDING OF </MainText>
                    </div>
                    <MainText> OWN </MainText>
                    <MainText> TO FIND </MainText>
                    <MainText> YOUR REST </MainText>
                    <p> 사람들은 바쁘게 흘러가는 현대사회로 인해, 쉴 수 없어지면서 점점 휴식을 잊어버리게 <br/> 
                        되었습니다. 오운은 여러분이 휴식을 취하면서 스스로를 찾아 나갈 수 있도록 돕습니다.</p>
                </MainTextWrap>
                <div className="intro_main_bg">

                </div>
            </IntroBrandingWrap>
            <CoreValueWrap>
                <CoreValueText>
                    <img src={ownRepre} />
                    <h3> WE HAVE <span> ESTABLISH </span> CORE VALUE </h3>
                    <p>삶에 지쳐 무엇을 해야할지, 어떻게 쉬어야할지 모르는 사람들에게 제대로 된 휴식을 알려주고, 스스로를 <br />
                    찾아나갈 수 있는 기회를 제공합니다. OWN 서비스를 이용한 사람들은 앞으로의 삶에 있어 제대로 된 <br/>
                    휴식을 취하고, 스스로가 원하는 미래를 그려나갈 수 있도록 합니다.</p>
                </CoreValueText>
                <CoreValueImg>
                    <div style={{backgroundImage : `url(${estBg1})`}}>
                        <span> CORE VALUE 01</span>
                        <p> ANALOGUE </p>
                    </div>
                    <div style={{backgroundImage : `url(${estBg2})`}}>
                        <span> CORE VALUE 02 </span>
                        <p> REST </p>
                    </div>
                    <div style={{backgroundImage : `url(${estBg3})`}}>
                        <span> CORE VALUE 03</span>
                        <p> EXPERIENCE </p>
                    </div>
                </CoreValueImg>
            </CoreValueWrap>
            <TiredLifeRelaxWrap>
                <p>WE HELP PEOPLE WHO ARE </p>
                <p className="orange_typo"> TIRED OF LIFE RELAX </p>
                <p> <span> AND, </span> FIND THEMSELVES.</p>
                <span className="tired_relax_k"> 우리는 삶에 지친 사람들이 휴식을 소유하며, 자신을 찾아나갈 수 있도록 돕습니다. </span>
            </TiredLifeRelaxWrap>
            <OwnColorWrap>
                <OwnColorText>
                    <div>
                        <h2> (01) </h2>
                        <p> 오운의 컬러는 친환경적인 초록과 아날로그적인 베이지, 생기 넘치는 <br/>
                            오렌지 포인트를 바탕으로 다채로운 컬러를 활용하여 오운의 사용자들에게 <br/>
                            활기찬 느낌을 전달합니다.  </p>
                        <h4> OWN'S </h4>
                    </div>
                    <h4> NATURAL COLORS </h4>
                </OwnColorText>
                <OwnColor>

                </OwnColor>
            </OwnColorWrap>
        </>
    );
};

export default IntroBranding;