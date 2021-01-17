import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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

const data = [
  { date: { day: 'Monday', otherDate: 'January 3, 2021' }, schedule: [1, 2] },
  { date: { day: 'Tuesday', otherDate: 'January 4, 2021' }, schedule: [1, 2] },
  {
    date: { day: 'Wednesday', otherDate: 'January 3, 2021' },
    schedule: [1, 2, 3],
  },
];

export const Schedule = (props) => {
    const {url, path} = useRouteMatch();
    const history = useHistory();
    const { setCurrentPageName } = useScreenNameContext()

    useEffect(() => {
        setCurrentPageName('Schedule')
    }, [])

    const handleCreateAppointment = () => {
        history.push(`${url}/create-appointment`)
    }

    const scheduleList = data.map((item, index) => {
        if (index === 0) {
        return (
            <ScheduleBarComponent
            key={index}
            day={item.date.day}
            otherDate={item.date.otherDate}
            data={item.schedule}
            displaySwitchButton={true}
            onClick = {handleCreateAppointment}
            />
        );
        }
        return (
                <ScheduleBarComponent
                    key={index}
                    day={item.date.day}
                    otherDate={item.date.otherDate}
                    data={item.schedule}
                /> 
        );
    });

  return (
    <Switch>
    <Route  exact path={`${path}`}>
    <Col xs={{ span: 24 }} style={{marginTop: '30px'}}>{scheduleList}</Col>
    </Route>
    <Route path={`${path}/create-appointment`}>
        <CreateAppointmentForm/>
    </Route>
    <Route path={`${path}/create-appointment-empty`}>
        <CreateAppointmentFormEmpty/>
    </Route>
    </Switch> 
  );
};


const ScheduleBarComponent = (props) => {
  const scheduleBars = props.data.map((item, index) => {
    return <ScheduleBar key={index} />;
  });
  return (
    <ScheduleBarComponentScaffold onClick={props.onClick} day = {props.day} otherDate={props.otherDate} displaySwitchButton={props.displaySwitchButton} >
      {scheduleBars}
    </ScheduleBarComponentScaffold>
  );
};

const ScheduleBar = (props) => {
  const [timeDivWidth, setTimeDivWidth] = useState(0);
  const timeRef = useRef();

  useEffect(() => {
    setTimeDivWidth(timeRef?.current?.getBoundingClientRect().width);
    window.addEventListener('resize', () => {
      setTimeDivWidth(timeRef?.current?.getBoundingClientRect().width);
    });

    return () =>
      window.removeEventListener('resize', () => {
        setTimeDivWidth(timeRef?.current?.getBoundingClientRect().width);
      });
  }, []);
  return (
   
    <StyledSceduleBar>
      <StyledUpperDiv>
        <StyledTimeDiv ref={timeRef}>
          <TimeIcon large={true} borderColor='#ECEEF5' color='#8083A3' />
          <p>
            <span>1:00</span> 2:00
          </p>
        </StyledTimeDiv>

        <StyledProviderName>
          <h2>Femi Marcus Physiotherapy Checkup</h2>
        </StyledProviderName>

        <StyledNameDiv>
          <img src={avatar2} alt='' />
          <p>Femi Marcus</p>
          <IconBorder
            icon={<FiMoreHorizontal />}
            large={true}
            borderColor='#ECEEF5'
            color='#8083A3'
          />
        </StyledNameDiv>
      </StyledUpperDiv>
      <StyledFooter otherWidth={timeDivWidth}>
        <StyledFiMenu />
        <p>Fem1i4i872@gmail.com, 080837262672</p>
      </StyledFooter>
    </StyledSceduleBar>
   
  );
};

const StyledSceduleBar = styled.div`
  background-color: #fff;
  border-radius: 13.3855px;
  width: 100%;

  padding: 20px;
  padding-bottom: 30px;

  margin-bottom: 10px;
`

const StyledUpperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
const StyledTimeDiv = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0px;
    margin-left: 10px;
    font-family: ${fontFamily.heading};
    font-size: 15.62px;
    font-weight: lighter;

    & span {
      font-weight: 700;
      margin-right: 8px;
    }
  }

  @media ${device.laptop} {
    & p {
      font-size: 1.1vw;
    }
  }
`

const StyledProviderName = styled.div`
  margin-left: 6vw;
  & h2 {
    color: ${theme.secondaryColor};
    font-family: ${fontFamily.body};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }

  & p {
    margin: 0px;
  }

  @media ${device.laptop} {
    margin-left: 6vw;
    & h2 {
      font-size: 1.1vw;
    }
  }
`

const StyledNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  & img {
    width: 12px;
    height: auto;
    object-fit: contain;
    display: inline;
  }

  & p {
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 3vw;

    font-family: ${fontFamily.body};
    font-size: 14px;
    font-weight: 400;
    color: #2d3743;
  }

  @media ${device.laptop} {
    & img {
      width: 6%;
    }
    & p {
      font-size: 1vw;
    }
  }
`

const StyledFiMenu = styled(FiMenu)`
  color: ${theme.mutedColor};
  font-size: 15px;

  @media ${device.laptop} {
    font-size: 1.2vw;
  }
`

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  margin-left: calc(6vw + ${(props) => props.otherWidth}px);
  margin-top: 5px;
  & p {
    font-size: ${fontFamily.body};
    font-size: 12px;
    font-weight: 400;
    margin: 0px;
    margin-left: 15px;
    color: #2d3743;
  }

  @media ${device.laptop} {
    & p {
      font-size: 0.81vw;
    }
  }
`

const StyledDateDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  & p {
    margin: 0px;
  }

  & > p {
    font-family: ${fontFamily.heading};
    font-size: 18px;
    font-weight: 700;
    color: #1a1c1d;
    margin-left: 15px;

    & span {
      font-weight: 400;
    }
  }

  & > div {
    display: flex;
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

  & p {
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

const StyledScheduleBarComponent = styled.div`
  margin-bottom: 50px;
`
