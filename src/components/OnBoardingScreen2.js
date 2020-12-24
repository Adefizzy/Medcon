import React from 'react';
import { OnBoardingScaffold } from './../components/layout/OnBoardingScaffold';
import sideImage3 from './../globalAccets/images/sideImage3.png';
import styled from 'styled-components';
import { device } from './../globalAccets/breakbpoints';
import buttonIcon from './../globalAccets/images/buttonIcon.png';
import {FiChevronRight} from 'react-icons/fi';
import manIcon from './../globalAccets/images/man.png';
import { theme } from './../globalAccets/theme';
import {fontFamily} from './../globalAccets/fontFamily';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {SelectInput} from './elements/SelectInput';
import {BackButton} from './elements/BackButton';
import {useHistory} from 'react-router-dom';

export const OnBoardingScreen2 = (props) => {
    const history = useHistory();
    const handleProceedToPay = () => {
        history.push('/onboarding-provider-2');
    }
    return (
        <OnBoardingScaffold
            segment = 'Provider'
            sideImage={sideImage3}>
                <InputComponent
                    title='SELECT PROVIDER'
                    input={<SelectInput/>}
                />
                <PrimaryButtonComponent onClick={handleProceedToPay} buttonText='Proceed to Pay'/>
                <BackButton/> 
              
        </OnBoardingScaffold>
    );
};

