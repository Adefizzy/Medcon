import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {device} from './../../globalAccets/breakbpoints';
import { Logo } from './../../globalAccets/svgs/Logo';
import {fontFamily} from './../../globalAccets/fontFamily'
import { theme } from './../../globalAccets/theme';
import { FiMenu, FiX,  FiTrendingUp, FiBookmark, FiUsers, FiLogOut, FiSettings, FiBell, FiPlus, FiClock} from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { Drawer, Divider, Badge, Statistic, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import statIcon1 from '../../globalAccets/images/statIcon1.png';
import statIcon2 from '../../globalAccets/images/statIcon2.png';
import statIcon3 from '../../globalAccets/images/statIcon3.png';
import statIcon4 from '../../globalAccets/images/statIcon4.png';
import { IoMdCalendar, IoIosArrowRoundForward, IoIosPlay } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import {TiArrowRight} from 'react-icons/ti';
/* 
const navItems = [
    {name: 'Overview', icon: <HomeIcon/>},
    {name: 'Schedule', icon: <ScheduleIcon/>},
    {name: 'Analytics', icon: <AnalyticIcon/>},
    {name: 'Patients', icon: <PatientIcon/>},
] */





export const UpcomingEventScaffold = (props) => {
    const [visibleSideBar, setVisibleSideBar] = useState(false);
    const [navItems, setNavItems]  = useState([
        {name: 'Overview', icon: <GoHome/>, isActive: true},
        {name: 'Analytics', icon: <FiTrendingUp/>, isActive: false},
        {name: 'Schedule', icon: <FiBookmark/>, isActive: false},
        {name: 'Patients', icon: <FiUsers/>, isActive: false},
    ]);


    const handleOpenSideBar = () => {
        setVisibleSideBar(true);
    }

    const onCloseSideBar = () => {
        setVisibleSideBar(false);
    }

    const sidebarNav = navItems.map((item, index) => 
            <StyledNav isActive={item.isActive} key={index}>
                {item.icon}
                <StyledLink isActive={item.isActive} >{item.name}</StyledLink> 
            </StyledNav> 
    )
    return (
        <StyledUpcomingEventScaffold>
            <StyledSideBar>
                <div style={{marginLeft: '25px', marginTop: '10px', marginBottom: '20px'}}>
                    <Logo/>
                </div>
                {sidebarNav}
            </StyledSideBar>
            <StyledMainContainer>
            <StyledHeader>
                <Logo/>
                <FiMenu onClick={handleOpenSideBar}/>
            </StyledHeader>
            <StyledTitleHeaderDiv>
                <StyledTitle>Overview</StyledTitle>
                <StyledAlertAndButtondiv>
                    <StyledAlertDiv style={{marginRight: '30px'}}>
                        <StyledFiBell/>
                        <Badge count={23} style={{padding:'0px 11px 0px 11px', backgroundColor: '#FFE6E4', color: '#F16063', fontWeight: '700', borderColor: '#FFE6E4'}}/>
                    </StyledAlertDiv>
                    <StyledButton>
                        <FiPlus />
                        <p>Create</p>
                    </StyledButton>
                </StyledAlertAndButtondiv>
            </StyledTitleHeaderDiv>
            <Divider/>
            <StyledHeader>
                <StyledAlertDiv>
                    <StyledFiBell/>
                    <Badge count={23} style={{padding:'0px 11px 0px 11px', backgroundColor: '#FFE6E4', color: '#F16063', fontWeight: '700', borderColor: '#FFE6E4'}}/>
                </StyledAlertDiv>
                <StyledButton>
                    <FiPlus />
                    <p>Create</p>
                </StyledButton>
            </StyledHeader>
            <StyledStatSummaryDiv>
            <TopStatPane
                backgroundColor= '#FFEEF1'
                icon={statIcon1}
                title='Patients'
                figure='20,039'
            />
            <TopStatPane
                backgroundColor= '#E1E8FF'
                icon={statIcon3}
                title='Total Appointments'
                figure='20,300'
            />
            <TopStatPane
                backgroundColor= '#FFEDE3'
                icon={statIcon4}
                title='Completed Session'
                figure='20,300'
            />
             <TopStatPane
                backgroundColor= '#DEFFEE'
                icon={statIcon2}
                title='Average wait time'
                figure='91 secs'
            />
            </StyledStatSummaryDiv>
            <StyledMainStatBody>
                <StyledMainStat>
                    <div>
                        <div>
                            <h2>Upcoming events</h2>
                            <p>Schedule meetings and calls</p>
                        </div>
                        <div>
                            <IoMdCalendar/>
                            <p>View schedule</p>
                        </div>
                    </div>
                    <StyledSingleSchedule>
                        <div>
                            <div>
                                <FiClock/>
                            </div>
                            <div>
                                <p>1:00 - 1:45</p>
                                <p>45mins</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Femi Marcus Physiotherapy Checkup</p>
                                <div>
                                    <Avatar size={10} icon={<UserOutlined />} />
                                    <p>Dr. Adebayo</p>
                                </div>
                            </div>
                            <StyledArrowRight>
                                <TiArrowRight/>
                            </StyledArrowRight>
                        </div>
                    </StyledSingleSchedule>
                    <StyledSingleSchedule>
                        <div>
                            <div>
                                <FiClock/>
                            </div>
                            <div>
                                <p>1:00 - 1:45</p>
                                <p>45mins</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Femi Marcus Physiotherapy Checkup</p>
                                <div>
                                    <Avatar size={10} icon={<UserOutlined />} />
                                    <p>Dr. Adebayo</p>
                                </div>
                            </div>
                            <StyledArrowRight>
                                <TiArrowRight/>
                            </StyledArrowRight>
                        </div>
                    </StyledSingleSchedule>
                    <StyledSingleSchedule>
                        <div>
                            <div>
                                <FiClock/>
                            </div>
                            <div>
                                <p>1:00 - 1:45</p>
                                <p>45mins</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Femi Marcus Physiotherapy Checkup</p>
                                <div>
                                    <Avatar size={10} icon={<UserOutlined />} />
                                    <p>Dr. Adebayo</p>
                                </div>
                            </div>
                            <StyledArrowRight>
                                <TiArrowRight/>
                            </StyledArrowRight>
                        </div>
                    </StyledSingleSchedule>
                    <StyledSingleSchedule>
                        <div>
                            <div>
                                <FiClock/>
                            </div>
                            <div>
                                <p>1:00 - 1:45</p>
                                <p>45mins</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Femi Marcus Physiotherapy Checkup</p>
                                <div>
                                    <Avatar size={10} icon={<UserOutlined />} />
                                    <p>Dr. Adebayo</p>
                                </div>
                            </div>
                            <StyledArrowRight>
                                <TiArrowRight/>
                            </StyledArrowRight>
                        </div>
                    </StyledSingleSchedule>
                </StyledMainStat>
            </StyledMainStatBody>
            <Drawer
                title={<Logo/>}
                placement="left"
                closable={false}
                onClose={onCloseSideBar}
                visible={visibleSideBar}
                closeIcon={<FiX/>}
                bodyStyle={{padding: '0px', position: 'relative'}}
             >
        
                {sidebarNav}
                <Divider />
                <StyledNav isActive={false} >
                    <FiSettings/>
                    <StyledLink isActive={false} >Settings</StyledLink> 
                </StyledNav> 
                <StyledNav style={{position: 'absolute', top: '90%'}} isActive={false} >
                    <FiLogOut/>
                    <StyledLink isActive={false} >Logout</StyledLink> 
                </StyledNav>
            </Drawer>
            </StyledMainContainer>
        </StyledUpcomingEventScaffold>
    );
};
/*  background-color: #FFEEF1; */

const TopStatPane = (props) => {
    return (
        <StyledTopStatPane>
            <StyledImageDiv style={{backgroundColor: props.backgroundColor}}>
                <img src={props.icon} alt=''/>
            </StyledImageDiv>
            <StyledStatNumberDiv>
                <p>{props.title}</p>
               <p>{props.figure}</p>
            </StyledStatNumberDiv>
        </StyledTopStatPane>
    )
}





const StyledUpcomingEventScaffold = styled.main`
    width: 100vw;
    min-height: 100vh;
    background-color: #F7FAFC; 
    margin: 0 auto;
 /*    padding: 20px 0px; */
    display: flex;  

`

const StyledMainContainer = styled.div`
    width: 100%;
    padding: 20px 20px;
    @media ${device.laptop}{
        width: 87%;
        padding: 0px 20px;
    }
`

const StyledSideBar = styled.aside`
    display: none;
    background-color: #fff;
    min-height: 100vh;

    @media ${device.laptop}{
        width: 17%;
        display: inline-block;
    }
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
    height: 50px;
    width: 50px;
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

const StyledStatSummaryDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto; 

    @media ${device.laptop}{
        justify-content: space-between;
    }
`

const StyledTitleHeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
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

const StyledMainStatBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const StyledMainStat = styled.div`
    flex-basis: 100%;
    background-color: #fff;
    height: 80vh;
    border-radius: 16px;
    padding: 22px;
    

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
        flex-basis: 50%;
    }
`
const StyledSingleSchedule = styled.div`
    margin-top: 30px;
    & > div:first-child{
        display: flex;
        align-items: center;
        & div{
            &:first-child{
                color: #36C298;
               /*  border: 1px solid #36C298; */
                /* border-radius: 10px; */
                /* height: 40px;
                width: 40px; */
                font-size: 12px;
                height: fit-content;
                display: flex;
                /* display: flex;
                justify-content: center;
                align-items: center; */
            }

            &:nth-child(2){
                display: flex;
                height: fit-content;
                align-items: center;
                margin-left: 10px;
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

            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        width: 100%;
        justify-content: space-between;

        & > div{
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
        }

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
