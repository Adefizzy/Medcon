import React from 'react';
import styled from 'styled-components';
import {InputDiv} from './InputDiv';
import { DatePicker} from 'antd';
import calendaIcon from './../../globalAccets/images/calendaIcon.png';
import { Select } from 'antd';

const { Option } = Select;

export const SelectInput = () => {
    return (
        <InputDiv>
            <StyledSelect defaultValue="Dr Spring Nelson" bordered={false}>
                <Option value="jack">Jack</Option>
                <Option value="Dr Spring Nelson">Dr Spring Nelson</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </StyledSelect>
        </InputDiv>
    )
}

const StyledSelect = styled(Select)`
    width: 100%;
`