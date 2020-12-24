import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import bgImg from './../../globalAccets/images/bgImg.png';
import {device} from './../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import {fontFamily} from './../../globalAccets/fontFamily'
import { theme } from '../../globalAccets/theme';
import buttonIcon from './../../globalAccets/images/buttonIcon.png';
import {FiChevronRight} from 'react-icons/fi';
import manIcon from './../../globalAccets/images/man.png';
import sideImage1 from './../../globalAccets/images/sideImage1.png';


export const OnBoardingScaffold = (props) => {
    const [logoDimention, setLogoDimention] = useState({width: '113', height: '31'});
 
     useEffect(() => {
        window.addEventListener('load', () => {
            if(window.innerWidth >= 1024){
                let width = window.innerWidth * (10/100);
                let height = window.innerHeight * (10/100);
    
                setLogoDimention({width, height});
            }
        });

        return () => window.removeEventListener('load', () => {
            if(window.innerWidth >= 768){
                let width = window.innerWidth * (10/100);
                let height = window.innerHeight * (10/100);
    
                setLogoDimention({width, height});
            }
        });
    }, [])  
    return (
        <StyledOnBoardingScaffold>
            <StyledLeftContainer>

                <StyledTopDiv>
                     <Logo width={logoDimention.width} height={logoDimention.height}/>
            
                    <StyledOnBoardingTopText>
                        <h1>Welcome to <span>{props.segment}</span></h1>
                        <p>See your provider from anywhere, access better<br/> healthcare from the comfort of your home. </p>
                    </StyledOnBoardingTopText>
                </StyledTopDiv>
                
                <StyledCategoryButtonSection>
                    {/* <StyledButton> 
                        <div> <img src={buttonIcon} alt=''/> I’m a health provider </div>
                        <div>Select <StyledFiChevronRight/></div>
                    </StyledButton>
                    <StyledButton> 
                        <div> <img src={manIcon} alt=''/> I’m a patient </div>
                        <div>Select <StyledFiChevronRight/></div>
                    </StyledButton> */}
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

const StyledOnBoardingTopText = styled.div`
    & h1{
        padding: 0;
        margin: 0;
        font-size: 48px;
        font-family: ${fontFamily.heading};
        font-weight: 500;

      & span{
        font-weight: 900;
        color: ${theme.secondaryColor}
      }
    }

    & p{
        font-family: ${fontFamily.body};
        font-weight: 400;
        color: ${theme.normalText};
        font-size: 16px;
        margin: 0;
    }

    @media ${device.tablet}{
    
        & h1{
            font-size: 3.3vw;
        }

       
    }

    @media ${device.desktop}{
        & p{
            font-size: 1vw;
        }
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
    padding-top: 35px;
    width: 85%;
    margin:0 auto;

    @media ${device.laptop}{
        margin: 0;
        margin-left: auto;

    }

`

const StyledImageDiv = styled.section`
    min-height: 60%;
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