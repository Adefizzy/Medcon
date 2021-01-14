import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage1 from '../../globalAccets/images/sideImage1.png';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import buttonIcon from '../../globalAccets/images/buttonIcon.png';
import {FiChevronRight} from 'react-icons/fi';
import manIcon from '../../globalAccets/images/man.png';
import { theme } from '../../globalAccets/theme';
import {fontFamily} from '../../globalAccets/fontFamily'
import {useHistory, useRouteMatch} from 'react-router-dom';
import {OnBoardingTopText} from './elements/OnBoardingTopText';

export const OpeningScreening = (props) => {
    const {path, url} = useRouteMatch();
    const history = useHistory();

    const onProviderClick = () => {
        history.push(`/provider-module/Overview`);
    }

    const onPatientClick = () => {
        history.push(`/onboarding-patient`);
    }
    return (
        <OnBoardingScaffold
            topItem = {<OnBoardingTopText prefixText='Welcome to' segment = 'MedCon'/>}
            sideImage={sideImage1}>       
                <CategoryButton onClick={onProviderClick} icon={buttonIcon} buttonText='I’m a health provider'/>
                <CategoryButton onClick={onPatientClick} icon={manIcon} buttonText='I’m a patient'/>
        </OnBoardingScaffold>
    );
};

const CategoryButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}> 
            <div> <img src={props.icon} alt=''/>{props.buttonText}</div>
            <div>Select <StyledFiChevronRight/></div>
        </StyledButton> 
    )
}

const StyledButton = styled.div`
        
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    min-width: fit-content;
    border:1px solid #C6CDD6;
    background-color: transparent;
    border-radius: 10px;
    padding: 13px 14px;
    cursor: pointer;

    &:hover{
        border: 1px solid ${theme.primaryColor};
    }

    &:nth-child(2){
        margin-top: 20px;
    }

    & div{
        &:nth-child(1){
            margin-bottom: 0px;
            font-family: ${fontFamily.heading};
            color: ${theme.normalText};
            font-size: 16px;
            place-items: center;
            display: flex;

            & img{
                margin-right: 23px;
                width: 16px;
            }
        }

        &:nth-child(2){
            color: ${theme.mutedColor};
            place-items: center;
            display: flex;
            font-size: 12px;
        }
       
    }

    @media ${device.tablet}{
        width: 90%;
    }

    @media ${device.laptop}{
        width: 45%;
        & div:first-child{
            font-size: 1.1vw;

            & img{
                width: 1.1vw;
            }
        }

        & div:nth-child(2){
            font-size: 0.9vw;
        }
    }

    @media ${device.desktopL}{
        padding: 20px 17px;
    }    
`

const StyledFiChevronRight = styled(FiChevronRight)`
    margin-left: 5px;
`