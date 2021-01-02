import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import {fontFamily} from '../../../globalAccets/fontFamily';


export const InputComponent = (props) => {
    return (
        <StyledInputComponent small={props.small}>
            <p>{props.title}</p>
            {props.input}
        </StyledInputComponent>
    )
}

const StyledInputComponent = styled.div`
    font-family: ${fontFamily.manrope};
    font-weight: 600;
    width: 100%;
    margin-bottom: 30px;
    

    & p{
        font-size: 11px;
        font-style: normal;
        margin-bottom: ${props => props.small? '5px': '15px'};
    }


    @media ${device.laptop}{
        font-size: 0.9vw;
    }
`