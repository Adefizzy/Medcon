
import React from 'react';
import {FiClock} from 'react-icons/fi';
import styled from 'styled-components';
import {device} from '../../../globalAccets/breakbpoints';
import { IconBorder } from './IconBorder';

export const TimeIcon = (props) => {
    return(
        <IconBorder 
            color={props.color} 
            borderColor={props.borderColor} 
            large={props.large}
            icon={ <FiClock/>} 
        />
    )
};

