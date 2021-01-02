import React from 'react';
import styled from 'styled-components';
import {fontFamily} from '../../../globalAccets/fontFamily';
import {theme} from '../../../globalAccets/theme';
import {device} from '../../../globalAccets/breakbpoints'


export const OnBoardingTopText = (props) => {
    return (
        <StyledOnBoardingTopText>
            <h1>{props.prefixText} <span>{props.segment}</span></h1>
            <p>See your provider from anywhere, access better<br/> healthcare from the comfort of your home. </p>
        </StyledOnBoardingTopText>
    )   
}

const StyledOnBoardingTopText = styled.div`
    margin-top: 40px;
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

    @media ${device.laptop}{
        margin-top: 70px;
    }

    @media ${device.desktop}{
        & p{
            font-size: 1vw;
        }
    }

`