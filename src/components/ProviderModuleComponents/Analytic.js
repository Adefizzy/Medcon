import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';
import statIcon1 from '../../globalAccets/images/statIcon1.png';
import statIcon2 from '../../globalAccets/images/statIcon2.png';
import statIcon3 from '../../globalAccets/images/statIcon3.png';
import { FiChevronDown, FiSearch} from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti'
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row, Pagination , Input, Select, DatePicker} from 'antd';
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
import { analyticData } from './data/analyticData';
import moment from 'moment';
import {Table} from './atoms/Table';
import { AnalyticTableRow} from './atoms/AnalyticTableRow';

const { Option } = Select;



const title = ['session title', 'location', 'patient', 'timestamp', 'amount paid']
export const Analytic = (props) => {
    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
   
   
  

    const { setCurrentPageName } = useScreenNameContext()


    useEffect(() => {
        setCurrentPageName('Analytic');


        let extractedData = analyticData.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])


    const tableRow = currentData.map((item, index) => {
        return <AnalyticTableRow
                    key={index}
                    data={item}
                />
    })


    const handlePaginationChange = (page, pageSize) => { 
        let end = (page * pageSize) + 1;
        let start = ((page - 1) * pageSize ) + 1;
        let extractedData = analyticData.slice(start, end);
        setCurrentData(extractedData);
        setPageSize(pageSize);
        setCurrentPage(page);
        setStart(start);
    }


    return (
        <>
        <StyledStatContainer>
            <div>
                <StyledStatCard>
                    <StatTablet icon={statIcon2} title='Total Session' count='20, 039' color='#D8F3FF'/>
                    <StyledDivider>
                        <Divider />
                    </StyledDivider>
                    <SessionCount title='Walk-in-Sessions' count='1,039' color='#4C6FFF'/>
                    <SessionCount title='Teleconsult Sessions' count='1,039' color='#308CB4'/>
                    <SessionCount title='Accepted Sessions' count='1,039' color='#219653'/>
                    <SessionCount title='Declined Sessions' count='1,039' color='#BC1818'/>
                </StyledStatCard>
            </div>
            <div>
                <StyledStatCard>
                    <StatTablet icon={statIcon3} title='Total co-pay' count='$90,000,000' color='#DEFFEE'/>
                </StyledStatCard>
                <StyledStatCard>
                    <StatTablet icon={statIcon1} title='Session Durations(hr)' count='200' color='#FBF1E6'/>
                </StyledStatCard>
            </div>
        </StyledStatContainer>
        <Table
            sessionName='Session Performance'
            tableRow={tableRow}
            tableTitle={title}
            tableName='All Provider Sessions'
            showLocationFilter={true}
            showDateFilter={true}
            handlePaginationChange={handlePaginationChange}
            data={analyticData}
            pageSize={pageSize}
            start={start}
            currentPage={currentPage}
            isActive={true}
        />
      </>
    )
}

const StatTablet = (props) => {
    return (
        <StyledStatTablet>
            <div style={{backgroundColor: props.color}}>
                <div>
                    <img src={props.icon} alt=''/>
                </div>
            </div>
            <div>
                <p>{props.title}</p>
                <h1>{props.count}</h1>
            </div>
        </StyledStatTablet>
    )
}

const SessionCount = (props) => {
    return (
        <StyledSessionCount>
            <p style={{color: props.color}}>{props.title}</p>
            <h4>{props.count}</h4>
        </StyledSessionCount>
    )
}

const StyledStatContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    & > div{
        flex-basis: 48.5%;
    }

    & > div:last-child{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const StyledStatCard = styled.div`
    box-shadow: 0px 0px 1.73853px rgba(12, 26, 75, 0.24), 0px 5.2156px 13.9083px -1.73853px rgba(50, 50, 71, 0.05);
    border-radius: 16px;
    background: #FFFFFF;
    width: 100%;
    padding: 40px 0px;
`

const StyledStatTablet = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;

    & > div:first-child{
        display: grid;
        place-items: center;
        height: 80px;
        width:80px;
        border-radius: 14.4762px;

        &>div{
            width: 40%;

            & img{
                width: 100%;
                height: auto;
            }
        }
    }


    & > div:nth-child(2){
        font-family: ${fontFamily.body};
        margin-left: 30px;
        & p{
            font-weight: 500;
            font-size: 18px;
            color: #A9AEB5;
            margin: 0px;
        }

        & h1{
            font-weight: 600;
            font-size: 32px;
            color: #16192C;
        }
    }

    @media ${device.laptop}{

        & > div:first-child{
            height: 6vw;
            width:6vw;
        }


        & > div:nth-child(2){
           
            & p{
            
                font-size: 1.25vw;
                
            }

            & h1{
              
                font-size: 2.3vw;
            
            }
        }

    }
`

const StyledDivider = styled.div`
    width: 85%;
    margin: 0 auto;
`


const StyledSessionCount = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: ${fontFamily.body};
    margin-bottom: 15px;

    &:last-child{
        margin-bottom: 0px;
    }

    & p{
        font-size: 15px;
        margin: 0;
    }

    & h4{
        color: ${theme.black};
        font-size: 18px;
        font-weight: 500;
        margin: 0px;
    }

    @media ${device.laptop}{
        & p{
            font-size: 1.05vw;

        }

        & h4{
    
            font-size: 1.25vw;
        
        }
    }
`

const StyledOtherStats = styled.div`    
    width: 50%;
`