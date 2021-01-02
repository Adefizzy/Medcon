import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage4 from '../../globalAccets/images/sideImage4.png';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {SelectInput} from './elements/SelectInput';
import {BackButton} from './elements/BackButton';
import {useHistory} from 'react-router-dom';
import failedImage from '../../globalAccets/images/failedImage.png';
import styled from 'styled-components';
import {device} from '../../globalAccets/breakbpoints';
import { fontFamily } from '../../globalAccets/fontFamily';

export const OnBoardingFailed = (props) => {
    const history = useHistory();
    const handleProceedToPay = () => {
        history.push('/onboarding-provider-2');
    }
    return (
        <OnBoardingScaffold
            topItem={<StyledImage src={failedImage} alt=''/>}
            sideImage={sideImage4}>
                <StyledTopText>Oops!</StyledTopText>
                <StyledFooterText>
                    We couldn’t find your account details in order to connect you to your provider. Kindly contact our support desk.
                </StyledFooterText>
               
                <PrimaryButtonComponent onClick={handleProceedToPay} buttonText='Contact us'/>      
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
