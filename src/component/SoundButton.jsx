import React from 'react';
import styled from 'styled-components'
import music from '../assets/Mirage melody - Patrick Patrikios.mp3'

const SoundBtnWrap = styled.div`
    display: flex;
    align-items: center;
`

const SoundBtn = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: none;
    background-color: #FD4525;
    cursor: pointer;
    position: relative;

;
`

const SoundButton = () => {
    return (
        <SoundBtnWrap>
            <SoundBtn>
                <audio src={music} autoplay />
            </SoundBtn>
        </SoundBtnWrap>
    );
};

export default SoundButton;