import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage5 from '../../globalAccets/images/sideImage5.png';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {SelectInput} from './elements/SelectInput';
import {BackButton} from './elements/BackButton';
import {useHistory} from 'react-router-dom';
import successImage from '../../globalAccets/images/successImage.png';
import styled from 'styled-components';
import {device} from '../../globalAccets/breakbpoints';
import { fontFamily } from '../../globalAccets/fontFamily';

export const OnBoardingSuccess = (props) => {
    const history = useHistory();
    const handleWaitinRoom = () => {
        history.push('/waiting-room');
    }
    return (
        <OnBoardingScaffold
            topItem={<StyledImage src={successImage} alt=''/>}
            sideImage={sideImage5}>
                <StyledTopText>Your Session with <span>Dr Spring</span><br/> has been booked.</StyledTopText>
                <StyledFooterText>
                    We are here to help guide you on your unique journey to personal growth. You can access the waiting room by clicking the button below
                </StyledFooterText>
               
                <PrimaryButtonComponent onClick={handleWaitinRoom} buttonText='Go to Waiting Room'/>      
        </OnBoardingScaffold>
    );
};

const StyledImage = styled.img`
    width: 30vw;
    height: auto;
    margin-top: 40px; 


    @media ${device.tablet}{
        width: 20vw; 
        margin-top: 70px;   
    }

    @media ${device.laptop}{
        width: 10vw; 
        margin-top: 70px;   
    }
`

const StyledTopText = styled.p`
    font-size: 36px;
    font-family: ${fontFamily.heading};
    font-weight: 500;
    color: #101625;
    margin-bottom: 30px;
    
    
    & span{
        color: #336CFF;
    }

    @media ${device.laptop}{
        font-size: 2.4vw;  
    }
`
const StyledFooterText = styled.p`
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
    font-family: ${fontFamily.body};
    font-weight: 400;

    @media ${device.tablet}{
        width: 70%;
    }

    @media ${device.laptop}{
        width: 60%;
        font-size: 1.4vw;
    }
`
