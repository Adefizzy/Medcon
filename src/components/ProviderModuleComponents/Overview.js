import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {device} from '../../globalAccets/breakbpoints';
import { Logo } from '../../globalAccets/svgs/Logo';
import {fontFamily} from '../../globalAccets/fontFamily'
import { theme } from '../../globalAccets/theme';
import { FiMenu, FiX,  FiTrendingUp, FiBookmark, FiUsers, FiLogOut, FiSettings, FiBell, FiLayout,  FiPlus, FiCheckSquare, FiClock} from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import { IoMdCalendar, IoIosArrowRoundForward, IoIosPlay, IoMdPeople } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import {TiArrowRight} from 'react-icons/ti';
import { MdPeopleOutline } from 'react-icons/md'
import {TimeIcon} from './atoms/TimeIcon';
import {useScreenNameContext} from '../context/screenNameContext';

import { AppointmentWaitingIcon } from '../../globalAccets/svgs/AppointmentWaitingIcon';






export const Overview = (props) => {
    const { setCurrentPageName } = useScreenNameContext()
    const history = useHistory();

    useEffect(() => {
        setCurrentPageName('Overview')
    }, [])
  
    const handleCreateAppointmentNavigation = () => {
        history.push('/provider-module/schedule/create-appointment');
    }

    return (
        <>
        <StatSummarySegment/>
        <StyledMainStatBody xs={{span: 24}}>
                <div>
                    <QuickAction onClick={handleCreateAppointmentNavigation}/>
                    <WaitingList/>
                </div>
                <div>
                    <UpcomingEvents/>
                </div>
                
            </StyledMainStatBody>
        </>
       
    );
};


const TopStatPane = (props) => {
    return (
        <StyledTopStatPane>
            <StyledImageDiv style={{backgroundColor: props.backgroundColor, color: props.iconColor}}>
                {/* <img src={props.icon} alt=''/> */}
                {props.icon}
            </StyledImageDiv>
            <StyledStatNumberDiv>
                <p>{props.title}</p>
               <p>{props.figure}</p>
            </StyledStatNumberDiv>
        </StyledTopStatPane>
    )
}


const StatSummarySegment = () => {
    return (
        <StyledStatSummaryDiv xs={{span: 24}}>
            <TopStatPane
                backgroundColor= '#FFEEF1'
                icon={<MdPeopleOutline/>}
                title='Patients'
                figure='20,039'
                iconColor='#FF6984'
            />
            <TopStatPane
                backgroundColor= '#E1E8FF'
                icon={<FiLayout/>}
                title='Total Appointments'
                figure='20,300'
                iconColor='#4C6FFF'
            />
            <TopStatPane
                backgroundColor= '#FFEDE3'
                icon={<FiCheckSquare/>}
                title='Completed Session'
                figure='20,300'
                iconColor='#F7936F'
            />
             <TopStatPane
                backgroundColor= '#DEFFEE'
                icon={<FiClock/>}
                title='Average wait time'
                figure='91 secs'
                iconColor='#66CB9F'
            />
            </StyledStatSummaryDiv>
    )
}


const WaitingIcon = (props) => {
    return (
        <StyledWaitingIcon>
            <AppointmentWaitingIcon/>
        </StyledWaitingIcon>
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


const AppointmentDetail = (props) => {
    return (
        <StyledAppointmentDetail>
            <p>Femi Marcus Physiotherapy Checkup</p>
            <div>
                <Avatar size={10} icon={<UserOutlined />} />
                <p>Dr. Adebayo</p>
            </div>        
        </StyledAppointmentDetail>
    )
}


const StyledArrowButton = (props) => {
    return (
        <StyledArrowRight onClick={props.onClick}>
            <TiArrowRight/>
        </StyledArrowRight>
    )
}

const AppointmentComponent = (props) => {
    return (
        <StyledMainStat>
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.titleFooter}</p>
                </div>
                {props.showCalender && <div>
                    <IoMdCalendar/>
                    <p>View schedule</p>
                </div>}
            </div>
            
            <SingleSchedule timeIcon={props.timeIcon} hideTime={props.hideTime} button={props.button}/>
            <SingleSchedule timeIcon={props.timeIcon} hideTime={props.hideTime} button={props.button}/>
            <SingleSchedule timeIcon={props.timeIcon} hideTime={props.hideTime} button={props.button}/>
            <SingleSchedule timeIcon={props.timeIcon} hideTime={props.hideTime} button={props.button}/>
            <SingleSchedule timeIcon={props.timeIcon} hideTime={props.hideTime} button={props.button}/>
            <SingleSchedule timeIcon={props.timeIcon}  hideTime={props.hideTime} button={props.button}/>
        </StyledMainStat>
    )
}


const WaitingList = (props) => {   
    return (
        <TitledCard  title='Wait List (09)' titleFooter='Track your patient waitlist'>
            <SingleSchedule timeIcon={<WaitingIcon/>} hideTime={true} button={<ActionButtons/>}/>
            <SingleSchedule timeIcon={<WaitingIcon/>} hideTime={true} button={<ActionButtons/>}/>
            <SingleSchedule timeIcon={<WaitingIcon/>} hideTime={true} button={<ActionButtons/>}/>
            <SingleSchedule timeIcon={<WaitingIcon/>} hideTime={true} button={<ActionButtons/>}/>
        </TitledCard>
    )
}

const UpcomingEvents = (props) => {
    return (
        <TitledCard  title='Upcoming events' titleFooter='Schedule meetings and calls'>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>} button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>}  button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>} button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>} button={<StyledArrowButton/>}/>
            <SingleSchedule timeIcon={<TimeIcon borderColor='#36C298' color='#36C298'/>} button={<StyledArrowButton/>}/>
        </TitledCard>
    )
}

const QuickAction = (props) => {
    return (
        <TitledCard  title='Quick actions' titleFooter='Plan a meeting or start a call'>
           <StyledExtraLargeButton onClick={props.onClick}>
               <StyledIoMdPeople/>
               <p>Add New Appointment</p>
           </StyledExtraLargeButton>
        </TitledCard>
    )
}


const TitledCard = (props) => {
    return (
        <StyledMainStat>
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.titleFooter}</p>
                </div>
                {props.showCalender && <div>
                    <IoMdCalendar/>
                    <p>View schedule</p>
                </div>}
            </div>
            {props.children}
        </StyledMainStat>
    )
}


const SingleSchedule = (props) => {
    return (
        <StyledSingleSchedule>
            <TimeAndIcon timeIcon={props.timeIcon} hideTime={props.hideTime}/>
            <AppointmentDetail/>
            {props.button}
        </StyledSingleSchedule>
    )
}

const ActionButtons = () => {
    return (
        <StyledActionButtons>
            <StyledAcceptButton>Accept</StyledAcceptButton>
            <StyledDeclineButton>Decline</StyledDeclineButton>
        </StyledActionButtons>
    )
}



const StyledUpcomingEventScaffold = styled(Row)`
   /*  width: 100vw;
    min-height: 100vh; */
    background-color: #F7FAFC; 
   /*  margin: 0 auto; */
 /*    padding: 20px 0px; */
    /* display: flex;   */

`

const StyledMainContainer = styled(Col)`
   /*  width: 100%; */

    padding: 20px 20px;


    @media ${device.laptop}{
       /*  width: 87%; */
        padding: 0px 60px 40px 40px;
    

    }
`

const StyledSideBar = styled(Col)`
    display: none;
    background-color: #fff;
    min-height: 100vh;

    @media ${device.laptop}{
        /* width: 17%; */
        display: inline-block;
    }
`

const StyledHeader = styled(Col)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* width: 100%; */

   /*  
    margin: 0 auto; */

    @media ${device.laptop}{
        display: none;
    }  
`

const StyledNav = styled.div`
    background-color: ${props => props.isActive? `${theme.primaryColor}`: 'transparent'};
    width: 70%;
    display: flex;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    color: ${theme.black};
    padding: 5px 0px 5px 25px;
    margin-top: 10px;
    font-size: 14px;

    @media ${device.laptop}{
         font-size: 1.2vw;
         padding: 10px 0px 10px 25px;
         border-radius: 0px 25px 25px 0px;
    }
`

const StyledLink = styled(Link)`
     color: ${theme.black};
     margin-left: 20px;
     font-family: ${fontFamily.manrope};
     font-weight: ${props => props.isActive? '700': 'normal'};
     font-size: 14px;
     &:focus, &:hover{
        color: ${theme.black};
     }

     @media ${device.laptop}{
         font-size: 1vw;
     }
`

const StyledTitle = styled.h1`
    font-family: ${fontFamily.heading};
    color: ${theme.black};
    font-size: 28px;
    text-align: center;
    margin-top: 10px;

    @media ${device.laptop}{
        font-size: 2vw;
    }
`

const StyledAlertDiv = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;

`

const StyledFiBell = styled(FiBell)`
    color: ${theme.mutedColor};
    margin-right: 10px;
`

const StyledTag = styled.div`
    border-radius: 20px 20px 20px 20px;
    background-color: #FFE6E4;
    color: #F16063;
    font-weight: 700;
    font-family: ${fontFamily.manrope};
    font-size: 12px;
    width: fit-content;
    padding: 5px 10px;
`

/* const StyledBadge = styled(Badge)`
    background-color: #FFE6E4;
    color: #F16063;
` */

const StyledButton = styled.button`
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${theme.primaryColor};
    outline: none;
    border: none;
    font-size: 12px;
    color: ${theme.black};
    cursor: pointer;

    & p{
        margin: 0px;
        margin-left: 5px;
    }

    @media ${device.laptop}{
        font-size: 0.95vw;
        padding: 8px 17px;
    }
`

const StyledTopStatPane = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 16px; 
    padding: 27px 5px 27px 24px;   
    margin-top: 20px;
    box-shadow: 0px 0px 4px #F0F3F5, 0px -8px 4px rgba(241, 244, 246, 0.06);
    width: 100%;

    @media ${device.laptop}{
        width: 24%;
    }
`

const StyledImageDiv = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    padding: 12px;

    @media ${device.laptop}{
        font-size: 1.5vw;
    }
`
const StyledStatistic = styled(Statistic)`
    font-family: ${fontFamily.body};
    font-weight: 600;
    color: ${theme.mutedColor} !important;
    margin: 0px;
    font-size: 10px;
    
`

const StyledStatNumberDiv = styled.div`
    margin-left: 20px;
    height: 100%;
    & p{
        font-family: ${fontFamily.body};
        font-weight: 600;
        margin: 0px;
        &:first-child{
            color: ${theme.mutedColor};
            font-size: 12px;
            line-height: 17px;
            margin-bottom: 5px;


        }

        &:nth-child(2){
            font-size: 20px;
            font-weight: 600;
            font-family: ${fontFamily.body}; 
            margin-bottom: 0px;
            line-height: 17px;
         }
    }
`

const StyledStatSummaryDiv = styled(Col)`
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto; 

    @media ${device.laptop}{
        justify-content: space-between;
    }
`

const StyledTitleHeaderDiv = styled(Col)`
    display: flex;
    justify-content: center;
    margin: 0 auto;
   

    @media ${device.laptop}{
        justify-content: space-between;
        margin-top: calc(10px + (1vw))
    }
`

const StyledAlertAndButtondiv = styled.div`
    display:none;
    justify-content: center;
    align-items: center;

    @media ${device.laptop}{
        display: flex;
    }
`

const StyledMainStatBody = styled(Col)`
    margin-top: 20px;

    & > div{
        flex-basis: 100%;

        &:first-child{
            margin-bottom: 20px;
        }
    }

    @media ${device.laptop}{
        display: flex;
        justify-content: space-between;
        & > div{
            flex-basis: 48%;

            &:first-child{
            margin-bottom: 0px;
        }
        }
    }
   
`
const StyledMainStat = styled.div`
   width: 100%;
    background-color: #fff;
    border-radius: 16px;
    padding: 22px;
    margin-bottom: 20px;
    

    

    & > div:first-child{
        display: flex;
        justify-content: space-between;

        & div:first-child{
            & p{
                margin: 0px;
                font-family: ${fontFamily.body};
                font-weight: 400;
                font-size: 12px;
                color: ${theme.mutedColor};
            }

            & h2{
                margin: 0px;
                font-family: ${fontFamily.heading};
                font-weight: 500;
                font-size: 16px;
            }
        }

        & div:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${theme.secondaryColor};
            height: fit-content;

            & p{
                margin: 0px;
                margin-left: 10px;
            }
        }
    }


    @media ${device.laptop}{
        
    }
`
const StyledSingleSchedule = styled.div`
    margin-top: 30px;
    @media ${device.laptop}{
        display: flex;
        justify-content: space-between;
    }
`

const StyledAppointmentDetailWithButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;

        @media ${device.laptop}{
            width: 70%;
        }
`
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
    }
`

const StyledAppointmentsIcon = styled.div`
    color: ${props => props.color};
    font-size: 13px;
    @media ${device.laptop}{
        border-radius: 2px;
        display: grid;
        place-items: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid ${props => props.color};
        font-size: 1.1vw;
        
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
                &:nth-child(2){
                    margin-left: 0px; 
                }
            }
            
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
const StyledArrowRight = styled.div`
    height: fit-content;
    width: fit-content;
    background-color: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    font-size: 18px;
    font-weight: 700;

`

const StyledSmallButton = styled.button`
    border: none;
    font-size: 9px;
    font-weight: bold;
    font-family: ${fontFamily.manrope};
    background-color: ${theme.secondaryColor};
    border-radius: 4.21302px;
    padding: 5px 15px;
    cursor: pointer;
    color: #fff;
    &:nth-child(2){
        margin-left: 10px;
    }
`

const StyledDeclineButton = styled(StyledSmallButton)`
    background-color: ${theme.red};
`

const StyledAcceptButton = styled(StyledSmallButton)`
    background-color: ${theme.secondaryColor};
`

const StyledActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledWaitingIcon = styled(StyledAppointmentsIcon)`
    @media ${device.laptop}{
        padding: 10px 4px;
        border: 1px solid #7188C2;
    }
`

const StyledExtraLargeButton = styled(StyledButton)`
    border-radius: 12px;
    font-size: 14px;
    color: #fff;
    width: 100%;
    justify-content: center;
    background-image: linear-gradient(to right, ${theme.secondaryColor}, ${theme.secondaryColor_lighter});
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;

   

    @media ${device.tablet}{
        font-size: 20px;
        & p{
            margin-left: 20px;
        }
    }
`

const StyledIoMdPeople = styled(IoMdPeople)`
    font-size: 24px;
    transform: rotateY(180deg);
`