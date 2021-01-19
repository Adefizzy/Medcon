import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';
import { FiCornerUpLeft } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row, Input, Select, DatePicker, TimePicker} from 'antd';
import {
  Link,
  useRouteMatch,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import {
  IoMdCalendar,
  IoIosArrowRoundForward,
  IoIosPlay,
  IoMdPeople,
} from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import { TiArrowRight } from 'react-icons/ti';
import { MdAddCircle } from 'react-icons/md';
import { Overview } from './Overview';
import { OverviewEmpty } from './OverviewEmpty';
import { AppointmentWaitingIcon } from '../../globalAccets/svgs/AppointmentWaitingIcon';
import { TimeIcon } from './atoms/TimeIcon';
import avatar2 from '../../globalAccets/images/avatar2.png';
import { IconBorder } from './atoms/IconBorder';
import { ScheduleBarComponentScaffold } from './atoms/ScheduleBarComponentScaffold';
import {useScreenNameContext} from '../context/screenNameContext';
import { PrimaryButtonComponent } from '../Onboarding/elements/PrimaryButtonComponent';
import moment from 'moment';
import { BackButton } from './atoms/BackButton';

const { Option } = Select;

export const CreateAppointmentForm = (props) => {
    const { setCurrentPageName } = useScreenNameContext()
    const history = useHistory();
    useEffect(() => {
        setCurrentPageName('Create Appointment')
    }, [])


    const onCreateAppointment = () => {
        history.push('/provider-module/schedule/create-appointment-empty');
     
    }

   
    return (
        <Col xs={{span: 24}} lg={{span: 16}}>
            <BackButton/>
        <StyledCreateAppointmentForm>
            <h1>Enter Details</h1>
            <div>
            <TextInput label='ENTER PATIENT NAME(S)' placeholder='Full name'/>
                <SelectInput 
                    data={['ade', 'fisayo']} 
                    placeholder='Select Service' 
                    defaultlValue='ade'
                    label='REQUEST SERVICE'
                />
                <DateInput label='Date of Appointment'/>
                <TextInput label='AMOUNT (USD)' placeholder='Enter Amount'/>
                <TimeInput label='START TIME'/>
                <TimeInput label='FINISH TIME'/>
                <SelectInput 
                    data={['ade', 'fisayo']} 
                    placeholder='Select Location' 
                    defaultlValue='ade'
                    label='LOCATION'
                />
                <TextInput label='SEASON TITLE' placeholder='Enter Title of the Season'/>
                
            </div>

           <PrimaryButtonComponent buttonText='Create Appointment' width='100%' onClick={onCreateAppointment}/>
        </StyledCreateAppointmentForm>
        </Col>
    );
};


const InputWrapper = (props) => {
    return (
        <StyledInputWrapper>
        <StyledInputLable>{props.label}</StyledInputLable>
        <StyledInputContainer>
            {props.children}
        </StyledInputContainer>
        </StyledInputWrapper>
    )
}


const SelectInput = (props) => {
    const optionList = props.data.map((item, index) => {
        return <Option key={index} value={`${item}`}>{item}</Option>
    })

    return (
        <InputWrapper label={props.label}>
            <StyledSelect placeholder={<StyledPlaceholder>{props.placeholder}</StyledPlaceholder>} defaultlValue={props.defaultlValue} bordered={false}>
                {optionList}
            </StyledSelect>
        </InputWrapper>
    )
}


const TextInput = (props) => {
    return(
        <InputWrapper label={props.label}>
            <StyledInput bordered={false} placeholder={props.placeholder}/>
        </InputWrapper>
    )
}

const DateInput = (props) => {
    return(
        <InputWrapper label={props.label}>
           <StyledDatePicker format={moment().format('DD/MM/YYYY')} placeholder="DD/MM/YYYY" suffixIcon='' onChange={props.onChange} bordered={false}/>
        </InputWrapper>
    )
}


const TimeInput = (props) => {
    return(
        <InputWrapper label={props.label}>
           <StyledTimePicker showNow={true} placeholder="Select Time" suffixIcon='' onChange={props.onChange} bordered={false}/>
        </InputWrapper>
    )
}

const StyledCreateAppointmentForm = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding: 51px;
    margin-top: 30px;
   

    & h1{
        color: #131523;
        font-size: 16px;
        font-family: ${fontFamily.Inter};
        font-weight: 700;
    }

    &>div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 10px;
        flex-wrap: wrap;
    }

    @media ${device.laptop}{
        & h1{
            font-size: 1.2vw;
        }
    }
`

const StyledInputContainer = styled.div`
    border: 1px solid rgba(23, 62, 103, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    min-width: fit-content;
    width: 100%;
`

const StyledSelect = styled(Select)`
    width: 100%;
`

const StyledInputLable = styled.p`
    font-family: ${fontFamily.manrope};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin-bottom: 18px;
`

const StyledInputWrapper =  styled.div`
    flex-basis: 45%;
    min-width: 45%;
    margin-bottom: 30px;
`

const StyledPlaceholder = styled.p`
    font-family: ${fontFamily.manrope};
    font-size: 14px;
    font-weight: 500;
    color: rgba(23, 62, 103, 0.4);

    @media ${device.laptop}{
        font-size: 1vw;
    }
`

const StyledInput = styled(Input)`
    &::placeholder{
        font-family: ${fontFamily.manrope};
    font-size: 14px;
    font-weight: 500;
    color: rgba(23, 62, 103, 0.4);
    }


    @media ${device.laptop}{
       &::placeholder{
        font-size: 1vw;
       }
    }
`

const StyledDatePicker = styled(DatePicker)`
    width: 100%;

    &::placeholder{
        color: red !important;
    }
`

const StyledTimePicker = styled(TimePicker)`
 width: 100%;
`

const StyledBackButton = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;

    width: fit-content;
    padding: 10px;
    font-family: ${fontFamily.body};
    font-weight: 400;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;

    & p{
        margin-bottom: 0px;
        margin-left: 10px;
    }

    @media ${device.laptop}{
        font-size: 1vw;
    }
`

const StyledFiCornerUpLeft = styled(FiCornerUpLeft)`
    margin: 0px;
    font-size: 24px;
    font-weight: bolder;
`