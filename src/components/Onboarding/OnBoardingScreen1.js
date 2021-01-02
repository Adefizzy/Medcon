import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage2 from '../../globalAccets/images/sideImage2.png';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {BackButton} from './elements/BackButton';
import { TextInput} from './elements/TextInput';
import {DateInput} from './elements/DateInput';
import {useHistory} from 'react-router-dom';
import {OnBoardingTopText} from './elements/OnBoardingTopText';


export const OnBoardingScreen1 = (props) => {
    const history = useHistory();

    const handleClick = () => {
        console.log('here')
        history.push(`/onboarding-provider`);
    }

    return (
        <OnBoardingScaffold
            topItem = {<OnBoardingTopText prefixText='Welcome to' segment = 'Patients'/>}
            sideImage={sideImage2}> 
                <InputComponent
                title='EMAIL'
                input={<TextInput/>}
               />

               <InputComponent
                title='DATE OF BIRTH'
                input={<DateInput/>}
               />
               <PrimaryButtonComponent onClick={handleClick} buttonText='Continue'/>
               <BackButton/>
        </OnBoardingScaffold>
    );
};












