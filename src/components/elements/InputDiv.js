import React from 'react';
import styled from 'styled-components';
import { device } from './../../globalAccets/breakbpoints';
import { theme } from './../../globalAccets/theme';
import {fontFamily} from './../../globalAccets/fontFamily';
import { FiChevronLeft} from 'react-icons/fi';

export const InputDiv = (props) => {
    return (
        <StyledInputDiv>
            {props.children}
        </StyledInputDiv>
    )
}

const StyledInputDiv = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:1px solid #C6CDD6;
    border-radius: 10px;
    padding: 5px 14px;
    min-width: fit-content;

    @media ${device.laptop}{
        width: 50%;

    }

    @media ${device.desktopL}{
        padding: 20px 17px;
    } 
`