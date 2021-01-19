import React, {useRef} from 'react';
import styled from 'styled-components';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { device } from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';
import { FiMenu, FiMoreHorizontal, FiRefreshCcw } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row } from 'antd';
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
import { CreateAppointmentForm } from './CreateAppointmentForm';
import { CreateAppointmentFormEmpty } from './CreateAppointmentFormEmpty';

const localizer = momentLocalizer(moment)


const now = new Date()

const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 24,
    title: 'Session with Femi Marcus',
    start:  new Date(2021, 0, 20, 18, 30, 0),
    end: new Date(2021, 0, 20, 19, 30, 0),
  },
  {
    id: 24,
    title: 'Session with Femi Marcus',
    start:  new Date(2021, 0, 1, 18, 30, 0),
    end: new Date(2021, 0, 1, 19, 30, 0),
  },
]



export const ScheduleCalendar = (props) => {
    const history = useHistory();


    const handleSwitch = () => {
        history.goBack()
    }

    const onCreateAppointment = () => {
        history.push('/provider-module/schedule/create-appointment');
    }
   
    return (
        <>
        <StyledActionButtons>
        <StyledSwitch onClick={handleSwitch}>
          <StyledFiRefreshCcw />
          <p>Switch to Table view</p>
        </StyledSwitch>
        <IconBorder
            onClick={onCreateAppointment}
            icon={<StyledMdAddCircle />}
            large={true}
            borderColor='#CEDCE2'
            color={theme.secondaryColor}
        />
      </StyledActionButtons>
        <StyledContainer xs={{span: 24}} >

        <StyledMyCalendar>
            <StyledCalendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{}}
            />
            
        </StyledMyCalendar>
        </StyledContainer>
        </>
    );
};

const StyledActionButtons = styled.div`
    display: flex;
    margin-left: auto;
    margin-bottom: 20px;
`
const StyledContainer = styled(Col)`
    background-color: #fff;
    border-radius: 13.3855px;
    padding-bottom: 40px;
`
const StyledMyCalendar = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #fff;
`

const StyledCalendar = styled(Calendar)`
     height: 100%;
     width: 100%;

     & .rbc-header{
         padding-top: 40px;
         background-color: #F7FCFE;
     }
     & .rbc-header + .rbc-header{
         padding-top: 40px;
         padding-bottom: 40px;
         border-right: none;
         border-left: none;
         background-color: #F7FCFE;
     }


     & rbc-ellipsis, .rbc-event-label, .rbc-row-segment .rbc-event-content, .rbc-show-more{
         background-color: #EBF8FE;
         color: #41748A;
         font-weight: bolder;
         font-family: ${fontFamily.body};
         font-size: 12px;
       

     }

     & .rbc-event{
         background-color: transparent;
        
         
     }

     & .rbc-toolbar button:active, .rbc-toolbar button.rbc-active{
         background-color: #F6A851;
         color: #000;
         border: 1px solid #F6A851;
         font-family: ${fontFamily.heading};
         
     }

     & .rbc-toolbar button:focus, .rbc-toolbar button.rbc-active{
         outline: none;
         border: 1px solid #F6A851;
     }

     & .rbc-btn-group button + button, .rbc-toolbar button{
        font-family: ${fontFamily.heading};
        background-color: #fff;
     }

     & .rbc-toolbar .rbc-toolbar-label{
         font-size: 20px;
         font-family: ${fontFamily.heading};
         color: #1C1D21;
         font-weight: 700;
     }

     & .jQTuZS rbc-ellipsis, .jQTuZS .rbc-event-label, .jQTuZS .rbc-row-segment .rbc-event-content, .jQTuZS .rbc-show-more {
         height: 100px;
     }
`

const StyledSwitch = styled.div`
  border: 1.11546px solid #cedce2;
  border-radius: 11.1546px;
  display: flex;
  align-items: center;
  font-size: 14.22px;
  background-color: #fff;
  padding: 10px 15px;
  margin-right: 20px;
  cursor: pointer;

  & p {
      margin-bottom: 0px;
    margin-left: 10px;
    font-family: ${fontFamily.body};
    font-weight: 500;
    color: #5d6d74;
  }
`

const StyledFiRefreshCcw = styled(FiRefreshCcw)`
  color: #5d6d74;
  font-size: 21px;
`
const StyledMdAddCircle = styled(MdAddCircle)`
  font-size: 22px;

  @media ${device.laptop} {
    font-size: 1.4vw;
  }
`