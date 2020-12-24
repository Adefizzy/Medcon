import React from 'react';
import styled from 'styled-components';
import { device } from './../../globalAccets/breakbpoints';
import { theme } from './../../globalAccets/theme';
import {fontFamily} from './../../globalAccets/fontFamily';
import { FiChevronLeft} from 'react-icons/fi';
import {InputDiv} from './InputDiv';
import {Input} from 'antd';

export const TextInput = () => {
    return (
        <InputDiv>
            <StyledTextInput placeholder='email@example.com' bordered={false}/>
        </InputDiv>
    )
}

const StyledTextInput = styled(Input)`
    width: 100%;
`