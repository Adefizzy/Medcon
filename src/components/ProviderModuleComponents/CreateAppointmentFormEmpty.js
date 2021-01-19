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
import { EmptyTablets } from './atoms/EmptyTablets';
const { Option } = Select;

export const CreateAppointmentFormEmpty = (props) => {
    const { setCurrentPageName } = useScreenNameContext()
    const history = useHistory();
    useEffect(() => {
        setCurrentPageName('Create Appointment')
    }, [])

    const handleBackNav = () => {
        history.goBack()
        setCurrentPageName('Schedule')
    }

    const onViewSchedule = () => {
        history.push('/provider-module/schedule');
    }
    return (
        <Col xs={{span: 24}} lg={{span: 16}}>
            <StyledBackButton onClick={handleBackNav}>
                <StyledFiCornerUpLeft/>
                <p>Back</p>
            </StyledBackButton>
        <StyledCreateAppointmentForm>
            <StyledEmptyContainer>
                <EmptyTablets greenIcon={true}/>
                <h1>Appointment Created</h1>
                <p>Your session with James Marcus has been booked.<br/> 
Make sure you check your full schedule to see your<br/> upcoming appointments.</p>
            </StyledEmptyContainer>
           
           <PrimaryButtonComponent buttonText='View Schedule' width='100%' onClick={onViewSchedule}/>
        </StyledCreateAppointmentForm>
        </Col>
    );
};





const StyledCreateAppointmentForm = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding-top: 51px;
    padding-bottom: 51px;
    padding-left: 10px;
    padding-right: 10px;
    
    margin-top: 30px;
   


    @media ${device.tablet}{
        padding-top: 100px;
        padding-left: 51px;
        padding-right: 51px;
    }
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

const StyledEmptyContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;

    & h1{
        font-family: ${fontFamily.heading};
        font-weight: 700;
        font-size: 28px;
        color: ${theme.secondaryColor}; 
    }

    & p{
        font-family: ${fontFamily.body};
        font-weight: 400;
        font-size: 18px;
        color: ${theme.black};
        margin-top: 20px;
    }


    @media ${device.laptop}{
        & h1{
            font-size: 2vw;
        }

        & p{
            font-size: 1.2vw;
        }
    }
`