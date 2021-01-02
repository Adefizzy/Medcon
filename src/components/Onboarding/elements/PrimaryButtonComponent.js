import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { theme } from '../../../globalAccets/theme';
import {fontFamily} from '../../../globalAccets/fontFamily';


export const PrimaryButtonComponent = (props) => {
    return (
        <StyledButton style = {{width: props.width}} inActive={props.inActive} onKeyDown={props.onDoubleClick} onMouseDown={props.onMouseDown} onClick={props.onClick}>{props.buttonText}</StyledButton>
    );
};

const StyledButton = styled.button`
    border-radius: 10px;
    padding: 13px 14px;
    background-color: ${props => props.inActive? theme.mutedColor:theme.primaryColor };
    color: ${theme.black};
    font-family: ${fontFamily.manrope};
    font-weight: bold;
    border: none;
    font-size: 16px;
    cursor: pointer;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.08);
    width: 100%;

    &:hover, &:focus{
        background-color: ${props => props.inActive? theme.mutedColor:theme.primaryColor };
        color: ${theme.black};
        outline: none;
       
    }

    &:hover{
        box-shadow: none;
    }

    @media ${device.laptop}{
        width: 50%;
        font-size: 1.2vw;

    }

    @media ${device.desktopL}{
        padding: 20px 17px;
    } 
`

