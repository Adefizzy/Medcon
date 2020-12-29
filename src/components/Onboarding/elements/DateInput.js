import React from 'react';
import styled from 'styled-components';
import {InputDiv} from './InputDiv';
import { DatePicker} from 'antd';
import calendaIcon from '../../../globalAccets/images/calendaIcon.png';

export const DateInput = () => {
    return (
        <InputDiv>
            <StyledDatePicker suffixIcon={''}  bordered={false} />
            <img src={calendaIcon} alt=''/>
        </InputDiv>
    )
}

const StyledDatePicker = styled(DatePicker)`
    width: 90%;
`