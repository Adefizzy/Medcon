import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import bgImg from '../../../globalAccets/images/bgImg.png';
import {device} from '../../../globalAccets/breakbpoints';
import { Logo } from '../../../globalAccets/svgs/Logo';
import {fontFamily} from '../../../globalAccets/fontFamily'
import { theme } from '../../../globalAccets/theme';


export const OnBoardingScaffold = (props) => {
    
    return (
        <StyledOnBoardingScaffold>
            <StyledLeftContainer>
                <StyledTopDiv>
                     <Logo/>
                    {props.topItem}
                </StyledTopDiv>
                
                <StyledCategoryButtonSection>
                    {props.children}
                </StyledCategoryButtonSection>
        
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledTopDiv>

                </StyledTopDiv>
                <StyledImageDiv>
                     <img src={props.sideImage} alt=''/> 
                </StyledImageDiv> 
            </StyledRightContainer>
        </StyledOnBoardingScaffold>
    );
};



const StyledOnBoardingScaffold = styled.main`
    display: flex;
    background-color: #fff;
    width: 100vw;
`

const StyledLeftContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 30px;


    @media ${device.laptop}{
        min-width: 62.5%;
    }
`



const StyledRightContainer = styled.section`
    display: none;
    background-image: url(${bgImg});
    background-size: cover;
    min-height: 100vh;


    

    @media ${device.laptop}{
        display: block;
        min-width: 37.5%;
    }
`




const StyledCategoryButtonSection = styled.section`
    max-height: 70%;
    padding-top: 60px;
    width: 90%;
    margin:0 auto;

    @media ${device.laptop}{
        width: 85%;
        margin: 0;
        margin-left: auto;

    }

    @media ${device.desktopL}{
        padding-top: 100px;
    }  
`

const StyledTopDiv = styled.section`
    min-height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    width: 85%;
    margin:0 auto;

    @media ${device.laptop}{
        margin: 0;
        margin-left: auto;

    }

`

const StyledImageDiv = styled.section`
    min-height: 60%;
    margin-top: 70px;
    & img{
        min-width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: contain;
        
    }

`

/* 
const StyledButtonText = styled.p`
    margin-bottom: 0px;
    font-family: ${fontFamily.heading};
    color: ${theme.black};
` */