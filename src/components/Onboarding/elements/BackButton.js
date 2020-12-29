import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { theme } from '../../../globalAccets/theme';
import {fontFamily} from '../../../globalAccets/fontFamily';
import { FiChevronLeft} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }


    return (
        <StyledBackButton onClick={handleBackClick}>
            <StyledFiChevronLeft/>
            <p>Back</p>
        </StyledBackButton>
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

const StyledBackButton = styled(StyledInputDiv)`
    justify-content: center;
    align-items: center;
    padding: 13px 14px;
    font-size: 14px;
    margin-top: 20px;

    & p{
        margin-bottom: 0;
        margin-left: 6px;
        color: ${theme.black};
        font-family: ${fontFamily.manrope};
        font-weight: bold;
    }

    @media ${device.laptop}{
        font-size: 1vw;
    }
`

const StyledFiChevronLeft = styled(FiChevronLeft)`
    color: ${theme.mutedColor};
    font-size: 16px;

    @media ${device.laptop}{
        font-size: 1.2vw;
    }
`