import React from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../../globalAccets/fontFamily';
import { device } from '../../../globalAccets/breakbpoints';
import { theme } from '../../../globalAccets/theme';

export const ActionButtons = (props) => {
    return (
        <StyledActionButtons>
            <StyledAcceptButton>Accept</StyledAcceptButton>
            <StyledDeclineButton>Decline</StyledDeclineButton>
        </StyledActionButtons>
    )
}


const StyledSmallButton = styled.button`
    border: none;
    font-size: 9px;
    font-weight: bold;
    font-family: ${fontFamily.manrope};
    background-color: ${theme.secondaryColor};
    border-radius: 4.21302px;
    padding: 5px 15px;
    cursor: pointer;
    color: #fff;
    &:nth-child(2){
        margin-left: 10px;
        
    }


    @media ${device.laptop}{
        font-size: 0.7vw;
    }
`

const StyledActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledDeclineButton = styled(StyledSmallButton)`
    background-color: ${theme.red};
`

const StyledAcceptButton = styled(StyledSmallButton)`
    background-color: ${theme.secondaryColor};
`