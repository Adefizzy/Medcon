import React from 'react';
import { OnBoardingScaffold } from './../components/layout/OnBoardingScaffold';
import sideImage3 from './../globalAccets/images/sideImage3.png';
import styled from 'styled-components';
import { device } from './../globalAccets/breakbpoints';
import buttonIcon from './../globalAccets/images/buttonIcon.png';
import {FiChevronRight} from 'react-icons/fi';
import manIcon from './../globalAccets/images/man.png';
import { theme } from './../globalAccets/theme';
import {fontFamily} from './../globalAccets/fontFamily'

export const OnBoardingScreen2 = (props) => {
    return (
        <OnBoardingScaffold
            segment = 'Provider'
            sideImage={sideImage3}>       
              
        </OnBoardingScaffold>
    );
};
