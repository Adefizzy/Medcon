import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { theme } from '../../../globalAccets/theme';
import {fontFamily} from '../../../globalAccets/fontFamily';


export const PrimaryButtonComponent = (props) => {
    return (
        <StyledButton style = {{width: props.width}} isActive={props.isActive} onKeyDown={props.onDoubleClick} onMouseDown={props.onMouseDown} onClick={props.onClick}>{props.buttonText}</StyledButton>
    );
};

const StyledButton = styled.button`
    border-radius: 10px;
    padding: 13px 14px;
    background-color: ${props => props.isActive? theme.mutedColor:theme.primaryColor };
    color: ${props => props.isActive? '#5D6064' :theme.black};
    font-family: ${fontFamily.body};
    font-weight: 500;
    border: none;
    font-size: 16px;
    cursor: pointer;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.08);
    width: 100%;
    letter-spacing: 0.2px;

    &:hover, &:focus{
        background-color: ${props => props.isActive? theme.mutedColor:theme.primaryColor };
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

