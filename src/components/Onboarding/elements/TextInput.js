import React from 'react';
import styled from 'styled-components';
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