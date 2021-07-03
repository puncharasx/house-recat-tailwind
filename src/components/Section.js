import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title, description, backgroundImage, leftBtnText, rightBtnText}) => {
    return (
        <Warp bgImage={backgroundImage}>
        <Fade left>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
            <Button>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RightButton>
                    {rightBtnText}
                    </RightButton>
                 }
                
            </ButtonGroup>
            </Fade>
            <DownArrow>V</DownArrow>
            </Button>
        </Warp>
    )
}

export default Section

const Warp = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertial
    align-items: center; // horizontal
    background-image: ${props => `url("${props.bgImage}")`}

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const Button = styled.div`

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }



`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.div`
    color:wihte;
    animation: animateDown infinite 1.5s;


`