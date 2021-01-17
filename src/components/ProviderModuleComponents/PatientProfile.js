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
        console.log(name);
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


const DateInput = (props) => {
    return (
        <StyledFilterLocation>
            <StyledDatePicker placeholder='10-06-2021' suffixIcon={<FiChevronDown/>} bordered={false} format={moment().format('DD-MM-YYYY')}/>
        </StyledFilterLocation>
    )
}

/* const AnalyticTableRow = (props) => {
    return (
        <tr>
            <StyledBlackTd>{props.data.sessionTitle}</StyledBlackTd>
            <StyledfadeTd>{props.data.location}</StyledfadeTd>
            <td>{props.data.patient}</td>
            <StyledSpecialFontTd className='specialFont'>{props.data.timeStamp}</StyledSpecialFontTd>
            <td> <StyledFancyTd>{props.data.amountPaid}</StyledFancyTd></td>
        </tr>
    )
} */


const StyledSpace = styled.div`
    height: 40px;
`



const StyledContainer = styled.div`
     width: 100%;
    background-color: #fff;
    border-radius: 16px; 
     overflow: hidden;
     box-shadow: inset 0px -1px 0px #EDF2F7;
     border: 1px solid #EDF2F7;
`
const StyledTable = styled.table`
    width: 100%;
    background-color: #fff;
`

const StyledTableHead = styled.thead`
    background-color: #FAFAFB;
    text-transform: uppercase;

    & tr{
    
        & th{
            padding-top: 24px;
            padding-bottom: 24px;
            font-family: ${fontFamily.heading};
            color: #8492A6;
            font-weight: 500;
            font-size: 10px;

            &:first-child{
                padding-left: 24px;
            }
        }
    }

    @media ${device.laptop}{
        & tr{
            & th{
                font-size: 0.7vw;
            }
        }
    }
`
const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px 20px 24px;

    

    & > div:first-child{
        display: flex;
        align-items: center;

        & > p{
        font-weight: 500;
        font-family: ${fontFamily.heading};
        font-size: 14px;
        color: #1F2D3D;
        margin: 0px;
        }
    }

    @media ${device.laptop}{

        & > div:first-child{
            & > p{
                
                font-size: 0.97vw;
            
            }
        }
    }
`


const StyledTableBody = styled.tbody`
    & tr{
        
    }

    & td{
        padding-top: 16px;
        padding-bottom: 16px;
        font-size: 14px;
        font-family: ${fontFamily.heading};
        border-bottom: 1px solid #EDF2F7;


        &:first-child{
            padding-left: 24px;
        }
    }

    & .specialFont{
        font-family: ${fontFamily.body};
        font-weight: 400;
        color: #425466;
    }

    @media ${device.laptop}{
        & td{
            font-size: 0.97vw;
        }
    }
`

const StyledSpecialFontTd = styled.td`
    font-family: ${fontFamily.Inter} !important;
    font-weight: 400;
`

const StyledBlackTd = styled.td`
    color: #27272E;
    font-weight: 500;
`

const StyledfadeTd = styled.td`
    color: ${theme.secondaryColor};
`



const StyledFancyTd = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #DEFFEE;
    padding: 4px 10px;
    color: #66CB9F;
`

const StyledTableFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    padding-top: 50px;


    & p{
        font-family: ${fontFamily.Inter};
        font-weight: 400;
        font-size: 14px;
        color: #7A7A9D;
        margin: 0px;
    }

    @media ${device.laptop}{
        & p{
       
            font-size: 0.97vw;
        
        }
    }
`

const StyledPagination = styled(Pagination)`
    & .anticon svg {
        border: 1px solid ${theme.mutedColor};
        font-size: 25px;
        padding: 5px;
        border-radius: 5px;
        margin-right: 10px;
        margin-left: 10px;
    }

    & .ant-pagination-item a {
        color: ${theme.mutedColor};
        font-family: ${fontFamily.body};
    }

    & .ant-pagination-item-active a{
        color: ${theme.secondaryColor};
        font-weight: bolder;
    }

    &.ant-pagination-item-active{
        background-color: transparent;
        border-color: transparent;

        &:hover, &:active, &:focus{
            background-color: transparent;
            border-color: transparent;
        }

    }

    @media ${device.laptop}{
        & .anticon svg {
            font-size: 1.9vw;
        }
    }
`

const StyledSearchInput = styled.div`
    border: 1px solid #E7E8E9;
    border-radius: 5px;
    min-width: 18vw;
`
const StyledFiSearch = styled(FiSearch)`
    color: #92929D;
    font-size: 16px;

    @media ${device.laptop}{
        font-size: 1.1vw;
    }
`

const StyledInput = styled(Input)`
    font-family: ${fontFamily.body};
    font-weight: 400;
    font-size: 10.76px;

    @media ${device.laptop}{
        font-size: 1.06vw;
    }
`

const StyledShowType = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: center;
    font-family: ${fontFamily.heading};
    font-size: 11px;
    margin-left: 20px;

    & p{
        margin: 0px;
        color: #7A7A9D;
    }


    @media ${device.laptop}{
        font-size: 0.9vw; ;
    }
`

const StyledSelect = styled(Select)`
    font-size: 11px;
    color: ${theme.black};
    font-weight: 500;
    width: 100px;

    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        padding: 0px 0px 0px 2px !important;
    }

    @media ${device.laptop}{
        font-size: 0.7vw;
        width: 7vw;
    }

`

const StyledTableMainHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    & h1{
        font-family: ${fontFamily.heading};
        font-weight: 700;
        font-size: 18px;
        color: #27272E;
        margin: 0px;
    }
`

const StyledFilterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .dateDivider{
        color: #7A7A9D;
        font-size: 18px;
        margin-left: 10px;
    }
`

const StyledFilterLocation = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    border: 0.725px solid #E2E2EA;
    cursor: pointer;


    background-color: #fff;
    border-radius: 5px;

    font-family: ${fontFamily.body};
    font-size: 11px;
    padding-left: 5px;

    & p{
        margin: 0px;
        color: #7A7A9D;
    }
`

const StyledDatePicker = styled(DatePicker)`
    font-family: ${fontFamily.body};
    padding: 7px 5px;
    
    & .ant-picker-input > input:placeholder-shown{
        font-size: 11px;
       
    }

    & .ant-picker-input > input{
        color: #030229;
        font-size: 11px;
    }
`

const StyledExport = styled(StyledFilterLocation)`
    justify-content: center;
    font-family: ${fontFamily.body};
    font-weight: 600;
    color: #16192C;
    padding: 7px 10px;
`

