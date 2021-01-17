import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';
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
        {/* <StyledTableMainHeader>
            <h1>Session Performance</h1>
            <StyledFilterDiv>
                <StyledFilterLocation>
                    <p>Location:</p>
                    <StyledSelect defaultValue='All' bordered={false} suffixIcon={<TiArrowSortedDown/>}>
                        <Option value='All'>All</Option>
                        <Option value='Brooklyn'>Brooklyn</Option>
                        <Option value='Madison'>Madison</Option>
                    </StyledSelect>
                </StyledFilterLocation>
                <DateInput/> <span className='dateDivider'>:</span>
                <DateInput/>
                <StyledFilterLocation>
                    <p>Sort by:</p>
                    <StyledSelect defaultValue='All' bordered={false} suffixIcon={<TiArrowSortedDown/>}>
                        <Option value='All'>Latest</Option>
                        <Option value='Brooklyn'>oldest</Option>
                    </StyledSelect>
                </StyledFilterLocation>
                <StyledExport>Export CSV</StyledExport>
            </StyledFilterDiv>
        </StyledTableMainHeader> 
        <StyledContainer>   
        <StyledHeader>
            <div>
                <p>All Provider Sessions</p>
                {true && <StyledShowType>
                    <p>Show:</p>
                    <StyledSelect defaultValue='This Month'  bordered={false} suffixIcon={<TiArrowSortedDown/>}>
                        <Option value= 'All'>All</Option>
                        <Option value='This Year'>This Year</Option>
                        <Option value='This Month'>This Month</Option>
                        <Option value='This Week'>This Week</Option>
                    </StyledSelect>
                </StyledShowType>}
            </div>
            
            {props.showSearch && <StyledSearchInput>
                <StyledInput placeholder='Search...' prefix={<StyledFiSearch/>} bordered={false}/>
            </StyledSearchInput>}
            
        </StyledHeader>
        <StyledTable>
            <StyledTableHead>
                <tr>
                    <th>session title</th>
                    <th>location</th>
                    <th>patient</th>
                    <th>timestamp</th>
                    <th>amount paid</th>
                </tr>
            </StyledTableHead>
            <StyledTableBody>
                {tableRow}
               
            </StyledTableBody>
        </StyledTable> 
        <StyledTableFooter>
        <p>{`Showing ${start} - ${currentPage * pageSize} items out  of ${analyticData.length} result found`}</p>
        <StyledPagination  
            onChange={handlPaginationChange} 
            pageSize={pageSize} 
            current={currentPage} 
            defaultCurrent={1} 
            total={analyticData.length}
            showSizeChanger={false}
            size="small"

        />
        </StyledTableFooter>
        </StyledContainer> */}
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

/* const StyledTiArrowSortedDown = styled(TiArrowSortedDown)`
    border-left: 1px solid #7A7A9D;
    padding-left: 5px;
    font-size: 16px;
` */