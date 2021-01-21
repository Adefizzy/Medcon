import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {device} from '../../../globalAccets/breakbpoints';
import { Logo } from '../../../globalAccets/svgs/Logo';
import {fontFamily} from '../../../globalAccets/fontFamily'
import { theme } from '../../../globalAccets/theme';
import { FiMenu, FiX,  FiTrendingUp, FiBookmark, FiUsers, FiLogOut, FiSettings, FiBell, FiLayout,  FiPlus, FiCheckSquare, FiClock} from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import { IoMdCalendar, IoIosArrowRoundForward, IoIosPlay, IoMdPeople } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import { GoCalendar } from 'react-icons/go';

import { AppointmentWaitingIcon } from '../../../globalAccets/svgs/AppointmentWaitingIcon';

export const SingleSchedule = (props) => {
    return (
        <StyledSingleSchedule>
            <TimeAndIcon timeIcon={props.timeIcon} hideTime={props.hideTime}/>
            <AppointmentDetail/>
            {props.button}
        </StyledSingleSchedule>
    )
}

const TimeAndIcon = (props) => {
    return (
        <StyledTimeAndIcon>
           {props.timeIcon}
            {!props.hideTime && <StyledScheduledTime>
                <p>1:00 - 1:45</p>
                <p>45mins</p>
            </StyledScheduledTime>}
        </StyledTimeAndIcon>
    )
}

export const AppointmentDetail = (props) => {
    return (
        <StyledAppointmentDetail>
            <p>Femi Marcus Physiotherapy Checkup</p>
            <div>
                <Avatar size={10} icon={<UserOutlined />} />
                <p>Dr. Adebayo</p>

                <div>
                    <StyledGoCalendar>
                        <GoCalendar/>
                    </StyledGoCalendar>
                  
                    <p>10:01mins</p>
                </div>
            </div>        
        </StyledAppointmentDetail>
    )
}


const StyledAppointmentDetail = styled.div`
    flex-basis: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
   & div{
        display: flex;
        height: fit-content;
        align-items: center;

        & p{
            margin: 0px;
            color: ${theme.mutedColor};
            font-family: ${fontFamily.body};
            font-weight: 400;
            font-size: 10px;
            margin-left: 5px;
        }

        & > div {
            margin-left: auto;
            color: #DA9344;
            & p{
                color: #DA9344;
            }
        }
    }

    

    & > p{
        margin: 0px;
        font-family: ${fontFamily.heading};
        font-size: 14px;
        font-weight: 500;
    }


    @media ${device.laptop}{
        margin: 0px;
        flex-basis: auto;

        & div{
        

        & p{
            
            font-size: 0.75vw;
           
        }
        }

        & > p{
       
        font-size: 0.97vw;
      
    }

    }
`


const StyledSingleSchedule = styled.div`
    margin-top: 30px;
    @media ${device.laptop}{
        display: flex;
        justify-content: space-between;
    }
`

const StyledTimeAndIcon = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 100%;

    @media ${device.laptop}{
        flex-basis: auto;
    }
`

const StyledScheduledTime = styled.div`

        display: flex;
        height: fit-content;
        align-items: center;
        margin-left: 15px;
        & p{
            margin: 0px;
            &:first-child{
                font-family: ${fontFamily.heading};
                font-weight: 500;
                font-size: 14px;
            }
            &:nth-child(2){
                margin-left: 5px;
                font-family: ${fontFamily.body};
                font-weight: 400;
                font-size:10px;
                color: ${theme.mutedColor};
            }
        }


        @media ${device.laptop}{
        
            display: block;
            text-align: left;
            align-items: flex-start;
            justify-content: flex-start;
            & p{
                height: fit-content;
                &:first-child{
                font-size: 0.97vw;
            }

                &:nth-child(2){
                    margin-left: 0px; 
                    font-size:0.75vw;
                }
            }
            
        }
`

const StyledGoCalendar = styled.div`
    border: 1px solid #f4d8ba;
    border-radius: 25px;
    font-size: 5px;
    padding: 3px;
`