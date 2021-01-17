import React from 'react';
import {FiClock} from 'react-icons/fi';
import styled from 'styled-components';
import {device} from '../../../globalAccets/breakbpoints';


export const IconBorder = (props) => {
    return (
        <StyledAppointmentsIcon onClick={props.onClick} large={props.large} color={props.color} borderColor={props.borderColor}>
            {props.icon}
        </StyledAppointmentsIcon>
    )
}


const StyledAppointmentsIcon = styled.div`
    color: ${props => props.color};
    font-size: 13px;
    border-radius: 2px;
    display: grid;
    place-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${props => props.borderColor};
    background-color: #fff;

    &:hover{
        cursor: pointer;
    }
    @media ${device.laptop}{
        font-size: ${props => props.large? '1.2vw': '1.1vw'};
    }
`