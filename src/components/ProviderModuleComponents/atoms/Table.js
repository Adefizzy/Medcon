import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { fontFamily } from '../../../globalAccets/fontFamily';
import { theme } from '../../../globalAccets/theme';
import { FiChevronDown, FiSearch} from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti'
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row, Pagination , Input, Select, DatePicker} from 'antd';

import moment from 'moment';

const { Option } = Select;




export const Table = (props) => {
    const tableTitle = props.tableTitle.map((item, index) => {
        return <th key={index}>{item}</th>
        
    })

    return (
        <>
        <StyledTableMainHeader>
            <StyledSessionNameDiv>
                <h1 onClick={() => props.handleSessionClicked(props.sessionName)} style={{fontWeight: props.isActive? '700': 'normal', color:  props.isActive? '#27272E': theme.mutedColor}} activeState={1}>{props.sessionName}</h1>
                <h1 onClick={() => props.handleSessionClicked(props.SecondSessionName)} style={{fontWeight:  props.isActive2? '700': 'normal', color:  props.isActive2? '#27272E': theme.mutedColor}}>{props.SecondSessionName}</h1>
            </StyledSessionNameDiv>
            
            <StyledFilterDiv>
                {props.showLocationFilter &&<StyledFilterLocation>
                    <p>Location:</p>
                    <StyledSelect defaultValue='All' bordered={false} suffixIcon={<TiArrowSortedDown/>}>
                        <Option value='All'>All</Option>
                        <Option value='Brooklyn'>Brooklyn</Option>
                        <Option value='Madison'>Madison</Option>
                    </StyledSelect>
                </StyledFilterLocation>}
                {props.showDateFilter && <DateInput/>} {props.showDateFilter && <span className='dateDivider'>:</span>}
                {props.showDateFilter &&  <DateInput/>}
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
                <p>{props.tableName}</p>
                {props.showCalenderFilter && <StyledShowType>
                    <p>Show:</p>
                    <StyledSelect defaultValue='This Month' bordered={false} suffixIcon={<TiArrowSortedDown/>}>
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
                    {tableTitle}
                </tr>
            </StyledTableHead>
            <StyledTableBody>
                {props.tableRow}
            </StyledTableBody>
        </StyledTable> 
        <StyledTableFooter>
        <p>{`Showing ${props.start} - ${props.currentPage * props.pageSize} items out  of ${props.data.length} result found`}</p>
        <StyledPagination  
            onChange={props.handlePaginationChange} 
            pageSize={props.pageSize} 
            current={props.currentPage} 
            defaultCurrent={1} 
            total={props.data.length}
            showSizeChanger={false}
            size="small"
        />
        </StyledTableFooter>
        </StyledContainer>
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

   /*  & >div:first-child{
        display: flex;
        align-items: center;
        & h1{
            font-family: ${fontFamily.heading};
            font-weight: ${props => props.activeState? 700: 'normal'};
            font-size: 18px;
            color: ${props => props.activeState? '#27272E': theme.mutedColor};
            margin: 0px;
            cursor: pointer;


            &:last-child{
                margin-left: 30px;
            }
        }
    }

    @media ${device.laptop}{
        & >div:first-child{
            & h1{
                font-size: 1.3vw;
            }
        }
    } */
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


const StyledSessionNameDiv = styled.div`

        display: flex;
        align-items: center;
        & h1{
            font-family: ${fontFamily.heading};
            font-weight: ${props => props.activeState? 700: 'normal'};
            font-size: 18px;
            color: ${props => props.activeState? '#27272E': theme.mutedColor};
            margin: 0px;
            cursor: pointer;


            &:last-child{
                margin-left: 30px;
            }
        }

    @media ${device.laptop}{

            & h1{
                font-size: 1.3vw;
            }
    }
`
/* const StyledTiArrowSortedDown = styled(TiArrowSortedDown)`
    border-left: 1px solid #7A7A9D;
    padding-left: 5px;
    font-size: 16px;
` */