
import  React from 'react';
import styled from 'styled-components';
import {TiArrowRight} from 'react-icons/ti';
import { theme } from '../../../globalAccets/theme';

export const ArrowButton = (props) => {
    return (
    
   
        <StyledArrowRight onClick={props.onClick}>
            <TiArrowRight/>
        </StyledArrowRight>
   
    );
};


const StyledArrowRight = styled.div`
    height: fit-content;
    width: fit-content;
    background-color: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    font-size: 18px;
    font-weight: 700;

`