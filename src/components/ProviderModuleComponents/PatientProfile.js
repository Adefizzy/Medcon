import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';
import { FiChevronDown, FiSearch} from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti'
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row, Pagination , Input, Select, DatePicker, Space} from 'antd';
import {
  Link,
  useRouteMatch,
  Route,
  useHistory,
  Switch,
  useParams
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
import { performanceData } from './data/performanceData';
import { profileData } from './data/profileData';
import moment from 'moment';
import {Table} from './atoms/Table';
import { PerformanceTableRow} from './atoms/performanceTableRow';
import { ProfileTableRow} from './atoms/profileTableRow';
import { BackButton } from './atoms/BackButton';
import { UpcomingEvents } from './atoms/UpcomingEvent';
import { SingleSchedule } from './atoms/SingleSchedule';
import { ArrowButton } from './atoms/ArrowButton';

const { Option } = Select;



const title = ['Full name', 'total sessions', 'Next appointment', 'Provider', 'Last activity', 'Total paid'];
const sessionPerformanceTitle= ['session title', 'session type', 'provider', 'timestamp', 'amount paid'];
const profileTitle = ['name', 'service rendered', 'session count', 'next appointment', 'amount paid']
const sessionTitles = [
    {
        name: 'Session Performance', isActive: true,
    }, 
    {
        name: 'All Provider', isActive: false,
    }
]

export const PatientProfile = (props) => {
    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const [sessionTitleState, setSessionTitle] = useState(sessionTitles);
    const [activeData, setActiveData] = useState(performanceData)
    const [tableTitleState, setTableTitle] = useState(sessionPerformanceTitle);
   
    const { setCurrentPageName } = useScreenNameContext()
    const {id} = useParams();


    useEffect(() => {
        let extractedData = activeData.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [activeData])

    useEffect(() => {
        setCurrentPageName(`${id}'s Profile`);
    }, [id])

    const viewPatientProfile = (name) => {
        
    }

    const tableRow = currentData.map((item, index) => {
        if(sessionTitleState[0].isActive){
            return <PerformanceTableRow
                    key={index}
                    data={item}
                />
        }else {
            return <ProfileTableRow
                    key={index}
                    data={item}
                    />
        }
        
    })


    const handlePaginationChange = (page, pageSize) => { 
        let end = (page * pageSize) + 1;
        let start = ((page - 1) * pageSize ) + 1;
        let extractedData = activeData.slice(start, end);
        setCurrentData(extractedData);
        setPageSize(pageSize);
        setCurrentPage(page);
        setStart(start);
    }

    const handleSessionClicked = (name) => {

        const newSessionTitleState = sessionTitleState.map(item => {
            if(item.name === name){
                item.isActive = true;
                return item;
            }
            item.isActive = false;
            return item;
        })

        if(name === sessionTitleState[0].name){
            setActiveData(performanceData);
            setTableTitle(sessionPerformanceTitle)
        }else{
            setActiveData(profileData);
            setTableTitle(profileTitle)
        }
        setSessionTitle(newSessionTitleState);

    }

    return (
        <>
        <BackButton/>
        <Col xs={{span: 24}}>
            <StyledSpace></StyledSpace>
        </Col>

        <StyledStatContainer>
            <StyledStatCard>
                <StyledNameContainer>
                    <StyledAbbr>
                        <p>PA</p>
                    </StyledAbbr>
                    <StyledName>
                        <h1>{id}</h1>
                        <p>Ahmed@gmail.com,</p>
                    </StyledName>
                </StyledNameContainer>
                <Divider/>
                <StyledUserInfoContainer>
                    <StyledUserInfo>
                        <p>Phone number</p>
                        <h4>09038372924</h4>
                    </StyledUserInfo>
                    <StyledUserInfo>
                        <p>Date of birth</p>
                        <h4>10/11/1991</h4>
                    </StyledUserInfo>
                    <StyledUserInfo>
                        <p>Total sessions</p>
                        <h4>11</h4>
                    </StyledUserInfo>
                </StyledUserInfoContainer>
                <Divider style={{marginBottom: '0px'}}/>
                <StyledSessionStat>
                    <div>
                        <h4>10</h4>
                        <p>Complete sessions</p>
                    </div>
                    <div>
                        <h4 style={{color: '#F59292'}}>01</h4>
                        <p>Declined sessions</p>
                    </div>
                    <div>
                        <h4 style={{color: theme.secondaryColor}}>$142.00</h4>
                        <p>Total paid</p>
                    </div>
                </StyledSessionStat>
            </StyledStatCard>
            <div style={{width: '49%'}}>

            <UpcomingEvents>
                <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<ArrowButton/>}/>
                <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<ArrowButton/>}/>
                <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<ArrowButton/>}/>
                <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<ArrowButton/>}/>
            </UpcomingEvents>

            </div>
            
        </StyledStatContainer>
        
        <Table
            tableRow={tableRow}
            tableTitle={tableTitleState}
            tableName={`All ${id.split(' ')[0]}'s Sessions`}
            showDateFilter={false}
            handlePaginationChange={handlePaginationChange}
            data={activeData}
            pageSize={pageSize}
            showCalenderFilter={true}
            showSearch={true}
            start={start}
            currentPage={currentPage}
            sessionName={sessionTitleState[0].name}
            SecondSessionName={sessionTitleState[1].name}
            isActive={sessionTitleState[0].isActive}
            isActive2={sessionTitleState[1].isActive}
            handleSessionClicked={handleSessionClicked}

        />
        </>
    
    )
}





const StyledSpace = styled.div`
    height: 40px;
`

const StyledStatContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    justify-content: space-between;
`

const StyledStatCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 16px;   
    width: 49%; 
    padding-top: 36px;
`

const StyledNameContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
`

const StyledAbbr = styled.div`
    height: 4vw;
    width: 4vw;
    border-radius: 16px;
    background-color: ${theme.secondaryColor};
    display: grid;
    place-items: center;


    & p{
        margin: 0px;
        font-weight: 700;
        font-family: ${fontFamily.Inter};
        color: #fff;
        font-size: 17px;
    }
`

const StyledName = styled.div`
    margin-left: 20px;
    & h1{
        font-size: 18px;
        font-family: ${fontFamily.heading};
        font-weight: 700;
        color: #2D3743;
    }

    & p{
        font-family: ${fontFamily.body};
        font-weight: 400;
        font-size: 12px;
    }
`

const StyledUserInfoContainer = styled.div`
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: space-between;
`

const StyledUserInfo = styled.div`
    font-family: ${fontFamily.body};
    text-align: center;

    & p{
        
        font-weight: 400;
        font-size: 12px;
        color: #8F92A1;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    & h4{
        font-weight: 600;
        color: #2D3743;
        font-size: 14px;
    }

    @media ${device.laptop}{
        & p{
    
        font-size: 0.9vw;
       
    }

    & h4{
        font-weight: 600;
        color: #2D3743;
        font-size: 0.97vw;
    }
    }
`

const StyledSessionStat = styled.div`
    display: flex;
    font-family: ${fontFamily.body};
    /* width: 85%;
    margin: 0 auto; */

    & div{
        height: 100%;
        flex-basis:33.33%;
        padding: 36px 0px;
        text-align: center;
        display: grid;
        place-items: center;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.06);

        & h4{
            font-size: 18px;
            color: #219653;
            font-weight: 600;
        }

        & p{
            margin: 0px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #8F92A1;
            font-size: 12px;
        }


        &:last-child{
            border-right: none;
        }
    }


    @media ${device.laptop}{


    & div{
    

        & h4{
            font-size: 1.3vw;
            
        }

        & p{
           
            font-size: 0.86vw;
        }
    }

    }

`
