import React from 'react';
import { OnBoardingScaffold } from './../components/layout/OnBoardingScaffold';
import sideImage2 from './../globalAccets/images/sideImage2.png';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {BackButton} from './elements/BackButton';
import { TextInput} from './elements/TextInput';
import {DateInput} from './elements/DateInput';

export const OnBoardingScreen1 = (props) => {
    return (
        <OnBoardingScaffold
            segment = 'Patients'
            sideImage={sideImage2}> 
                <InputComponent
                title='EMAIL'
                input={<TextInput/>}
               />

               <InputComponent
                title='DATE OF BIRTH'
                input={<DateInput/>}
               />
               <PrimaryButtonComponent buttonText='Continue'/>
               <BackButton/>
        </OnBoardingScaffold>
    );
};












