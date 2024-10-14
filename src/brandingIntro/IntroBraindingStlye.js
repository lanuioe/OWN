const IntroBrandingWrap = styled.div`
    margin: 0 10.2vw;
`
const MainButton = styled.button`
    width: 8.3vw;
    height: 8.3vw;
    background-color: ${colors.smallBlack};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 6vw;
        height: 6vw;
    }
`
const MainTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    div.main_text_1{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const MainText = styled.h2`
    font-size: ${fontSize.eSizeHead};
    font-weight: 500;
`