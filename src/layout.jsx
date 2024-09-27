import React, { Component } from 'react'
import styled from 'styled-components';
import Header from './component/Header'

const lay = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default class layout extends Component {
    render() {
        return (
            <lay>
                <Header />
            </lay>
        )
    }
}
