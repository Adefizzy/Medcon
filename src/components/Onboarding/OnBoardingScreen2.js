import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage3 from '../../globalAccets/images/sideImage3.png';
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

