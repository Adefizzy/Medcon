import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import waitingImage from '../../globalAccets/images/waitingImage.png';
import blogImage1 from '../../globalAccets/images/blogImage1.png';
import blogImage2 from '../../globalAccets/images/blogImage2.png';
import blogImage3 from '../../globalAccets/images/blogImage3.png';
import waitingAvatar from '../../globalAccets/images/waitingAvatar.png';
import blogHeaderImage from '../../globalAccets/images/blogHeaderImage.png';
import {device} from '../../globalAccets/breakbpoints';
import { WhiteLogo } from '../../globalAccets/svgs/WhiteLogo';
import { WaitingRoomAvatar } from '../../globalAccets/svgs/WaitingRoomAvatar';
import {fontFamily} from '../../globalAccets/fontFamily'
import { theme } from '../../globalAccets/theme';
import { Avatar, Input, Modal, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import moment from 'moment';
import {FiX} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import { MiddleIcon } from '../../globalAccets/svgs/MiddleIcon';
import { WaitingRoomIcon2 } from '../../globalAccets/svgs/WaitingRoomIcon2';

const text = `At Humantold, we believe everyone has the right to compassionate mental health care that can help equip, empower, guide, and support you in cultivating the life you want.With so many therapy options available, why choose us? We have conscientiously built Humantold upon the premise that every one of us is deserving of kindness and dignified care. We are dedicated to using our work to help create a better world, and we hope you'll join us in the work of doing so.We strive to create a safe space for your journey of personal growth and empowerment, and we believe that starts with a solid foundation within the organization.Huamantold's leadership team (Christina Jeffrey, Rachel Landman, and myself ) have endeavored (and, I think, succeeded) to create an ethical workplace that nurtures every professional. We take every individual's concerns into account with compassion and care while maintaining clear and firm boundaries. In essence: our goal is to model healthy relationship structures in our work environment so that others may witness them and possibly adopt them within their own families and communities.In a world characterized by increased experiences of dehumanization and depersonalization, we are all struggling to maintain our sanity. At Humantold, we want to be`

export const WaitingRoom = (props) => {
    const [diameter, setDiameter] = useState(44.5);
    const [sessionDuration, setSessionDuration] = useState('3:00');
    const [isBlogModalVisible, setBlogModalVisible] = useState(false);
    const [buttonWidth, setButtonWidth] = useState('100%');
    const [videoButtonWidth, setVideoButtonWith] = useState('50%')
    const history = useHistory();


    useEffect(() => {
        let a = moment({ year :2010, month :3, day :5, hour :15, minute :13, second :3, millisecond :123});
        let b = moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
        let diffTime =  a.diff(b, 'milliseconds');
        var interval = 1000;

        let intervalToken =  setInterval(() => {
            diffTime = moment.duration(diffTime - interval, 'milliseconds');
            console.log(diffTime);
            console.log(`${diffTime.minutes()}:${diffTime.seconds()}`)

            setSessionDuration(`${diffTime.minutes()}:${diffTime.seconds()}`);

            if(diffTime.minutes() === 0 && diffTime.seconds() === 0){
                clearInterval(intervalToken);
            }
            
        }, 1000);
        
    }, [])

    useEffect(() => {
    
        window.addEventListener('load', () => {
            if(window.innerWidth >= 1024){
           
                let width = window.innerWidth * (6.3/100);
        
                setButtonWidth('70%');
                setVideoButtonWith('35%')
                setDiameter(width);
            }
        });
 
        return () => window.removeEventListener('load', () => {
            if(window.innerWidth >= 1024){

                let width = window.innerWidth * (6.3/100);
        
                setButtonWidth('70%');
                setVideoButtonWith('35%')
                setDiameter(width);
            }
        });
    }, []) 


    const handleBlogModalCancel = () => {
        setBlogModalVisible(false);
    }

    const onBlogModalOpen = () => {
        setBlogModalVisible(true);
    }

    const goToChatRoom = (e) => {
        e.preventDefault();

        history.push('/chat-room');
    }
    
    return (
        <Row>
            <Col lg={{span: 15}}>
            <StyledLeftContainer>
                <StyledTopDiv>
                     <WhiteLogo/>
                    <StyledHeaderText>Welcome to the waiting room!</StyledHeaderText>
                </StyledTopDiv>
                
                <StyledCategoryButtonSection>
                    <StyledNotificationDiv>
                        <StyledHeaderNotification>
                         <StyledImage>
                            <WaitingRoomAvatar/>
                         </StyledImage>
                         <StyledInput value='Adeyemi Marcus'/>
                        
                         <StyledDemacator>
                            <MiddleIcon/>
                         </StyledDemacator>
                        </StyledHeaderNotification>
                        <StyledfooterNotification>
                            <h1>Your provider will join you shortly</h1>
                            <p>Your doctor will be joining you in a less than 3mins.</p>
                            <PrimaryButtonComponent width={buttonWidth} onClick={sessionDuration === '0:0' && goToChatRoom} isActive={!(sessionDuration === '0:0')} buttonText={`Join full session ${sessionDuration === '0:0'? 'now' :'in'} ${sessionDuration === '0:0' ? '': `(${sessionDuration})`}`}/>  
                        </StyledfooterNotification>
                    </StyledNotificationDiv>

                    <StyledFooter>
                        <div>
                            <WaitingRoomIcon2/>
                            <h1>Welcome to MedCon Virtual Guide</h1>
                        </div>
                        <p>
                        Welcome to care that meets your needs. See how we’re building a better experience for people just like you. Medcon offers a unique virtual care experience from the comfort of your home, at work, or on-the-go, by video chat or phone. We bring Primary and Urgent Care clinicians to you, by phone or video chat, in as little as 10 minutes.
                        </p>

                    </StyledFooter>
                </StyledCategoryButtonSection>
        
            </StyledLeftContainer>
            </Col>
            <Col lg={{span: 9}}>
            <StyledRightContainer>

                <StyledBlogContainer>
                    <h1>From Our Blog</h1>
                    
                    <Blog 
                        title='The Mechanics of Managing Stress &amp; Anxiety'
                        image={blogImage1}
                        onClick={onBlogModalOpen}
                    />
                    <Blog 
                        title='Helpful Hints to Navigate Adolescence with Attunement'
                        image={blogImage2}
                        onClick={onBlogModalOpen}
                    />
                    <Blog 
                        title='Why We Can’t Go Back: The Lasting Effects of Collective Trauma'
                        image={blogImage3}
                        onClick={onBlogModalOpen}
                    />
                </StyledBlogContainer>
                <StyledVideoDiv>
                    <StyledVideo  controls={true}>
                        <source src="https://www.youtube.com/embed/QCO0tXeFFEo" type="video/mp4"/>
                        <source src="mov_bbb.ogg" type="video/ogg"/>   
                    </StyledVideo>
                    <StyledVideoButtonDiv>
                        <PrimaryButtonComponent onClick={onBlogModalOpen} width={videoButtonWidth}  isActive={false} buttonText='Play Video'/>
                    </StyledVideoButtonDiv>
                </StyledVideoDiv> 
            </StyledRightContainer>
            </Col>
            <StyledModal 
                visible={isBlogModalVisible} 
                onCancel={handleBlogModalCancel}
                footer={false}
                closable={false}
                width={window.innerWidth > 768?window.innerWidth - 400 : window.innerWidth}
                centered={false}
                style={{top: '5px'}}
                
            >
                <StyledFullBlog>
                    <div>
                        <StyledCancel onClick={handleBlogModalCancel}>
                            <StyledFiX/>
                        </StyledCancel>
                    </div>
                    <PrimaryButtonComponent onClick={sessionDuration === '0:0' && goToChatRoom} isActive={!(sessionDuration === '0:0')} buttonText={`Join full session ${sessionDuration === '0:0'? 'now' :'in'} (${sessionDuration})`}/>
                    <StyledBlogArticle>
                        <img src={blogHeaderImage} alt=''/>
                        <h1>What Makes Humantold Unique</h1>
                        <p>{text}</p>
                    </StyledBlogArticle>

                </StyledFullBlog>
                
            </StyledModal>
        </Row>
    );
};


const Blog = (props) => {
    return (
        <StyledBlogSummary onClick={props.onClick}>
            <div>
                <img src={props.image} alt=''/>
            </div>
            <div>
                <h1>{props.title}</h1>
                <p>Read time: 5mins</p>
            </div>
        </StyledBlogSummary>
    )
}



const StyledOnBoardingScaffold = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    background-color: #fff;
    width: 100vw;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    
    /* border: 2px solid yellow; */

    @media ${device.laptop}{
        flex-wrap: nowrap;
    }


`

const StyledLeftContainer = styled.section`
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    background-color: ${theme.secondaryColor_darker};
    color: #fff;
    /* border: 1px solid red; */


    /* @media ${device.laptop}{
        min-width: 62.5%;
    } */
`



const StyledRightContainer = styled.section`
    /* display: none; */
    background-color: #fff;
    background-size: cover;
    /* min-height: 100vh; */
    padding: 10px;
    width: 100%;
   /*  border: 1px solid red; */


   @media ${device.tablet}{
        padding: 30px;
        width: 100%
    }

    @media ${device.laptop}{
        display: block;
       /*  min-width: 37.5%; */
       width: 100%

    }
`




const StyledCategoryButtonSection = styled.section`
    min-height: 70%;
    padding-top: 10px;
    width: 90%;
    margin:0 auto;
  /*   border: 1px solid purple; */

    @media ${device.laptop}{
        width: 85%;
        margin: 0;
        margin-left: auto;

    }

    @media ${device.desktopL}{
        padding-top: 20px;
    }  
`

const StyledTopDiv = styled.section`
    min-height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    width: 85%;
    margin:0 auto;

    @media ${device.laptop}{
        margin: 0;
        margin-left: auto;

    }

`

const StyledVideoDiv = styled.section`
    height: 40vh;
    margin-top: 70px;
    width: 100%auto;
    background-color: #122309;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
`

const StyledHeaderText = styled.h1`
    font-family: ${fontFamily.heading};
    font-weight: 500;
    font-size: 36px;
    color: #fff;
    margin-top: 60px;

    @media ${device.laptop}{
        font-size: 2.4vw;
    }
`

const StyledNotificationDiv = styled.section`
    width: 100%;
    @media ${device.laptop}{
        width: 88%;
    }

    @media ${device.laptopL}{
        width: 76%;
    }
`

const StyledHeaderNotification = styled.div`
    width: 100%;
    background-color: #EFFAF3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0px 0px;
    padding: 35px 0px 35px 0px;
    position: relative;


    @media ${device.tablet}{
        justify-content: flex-start;
    }
`

const StyledfooterNotification = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-family: ${fontFamily.body};
    padding: 20px;
    border-radius: 0px 0px 8px 8px;

    & h1{
        font-size: 26.32px;
        font-weight: 600;
        margin: 0px;
    }

    & p{
        font-size: 16px;
        color: ${theme.mutedColor};
        margin-bottom: 40px;
    }

    @media ${device.tablet}{
        padding-top: 4vw;
    }

    @media ${device.laptop}{
        padding-top: 3vw;
    }
`

const StyledDemacator = styled.div`
     position: absolute;
     bottom: -14%;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`

const StyledInput = styled(Input)`
    width: 60%;
    margin-left: 20px;
    font-size: 14px;
    font-family: ${fontFamily.manrope};
    padding: 10px;
    border-radius: 8px;

    &:focus, &:hover{
        border: 1px solid ${theme.primaryColor};
        outline: none;
        box-shadow: none;
    }

    @media ${device.tablet}{
        width: 60%;
    }

    @media ${device.laptop}{
        font-size: 1vw;
    }

`

const StyledBlogContainer = styled.div`
    width: 100%;
    box-shadow: 0px 10.886px 21.772px rgba(138, 149, 158, 0.2);
    border-radius: 5.44299px;
    padding: 23px;
    margin-bottom: 30px;

    & > h1{
        margin-bottom: 40px;
    }

    & h1{
        font-size: 18px;
        font-family: ${fontFamily.manrope};
        font-weight: 600;
    }

    @media ${device.laptop}{
        & h1{
            font-size: 1.4vw;
        }
    }
`

const StyledBlogSummary = styled.div`
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;
    justify-content: space-between;

    & img{
        width: 100%;
        height: auto;
        border-radius: 5.44299px;
       
    }

    & > div:first-child{
        flex-basis: 20%;
        margin-right: 20px;
    }

    & > div:nth-child(2){
        flex-basis: 75%;
        & p{
            font-size: 14px;
            color: ${theme.mutedColor};
            font-family: ${fontFamily.body};
        }


        & h1{
            font-size: 16px;
            font-family: ${fontFamily.body};
            font-weight: 500;
        }
    }

    @media ${device.laptop}{
        & > div{
            & p{
                font-size: 0.9vw;
            }

            & h1{
            font-size: 1.1vw;
            
        }
       }
    }
`

const StyledFullBlog = styled.div`
    text-align: center;
   /*  overflow: auto;
    height: 90vh; */
   
    

    & > div:first-child{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 40px;
    }

    @media ${device.laptop}{
        /* & button{
            width: 30%;
        } */
    }
`

const StyledModal = styled(Modal)`
  /*   width: 80vw; */
`

const StyledFiX = styled(FiX)`
    color: #FF6666;
`

const StyledCancel = styled.div`
    border: 1px solid #FF6666;
    width: fit-content;
    padding: 7px;
    place-items: center;
    display: flex;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;

    @media ${device.laptop}{
        font-size: 1.4vw;
    }
`

const StyledBlogArticle = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    text-align:left;
    font-family: ${fontFamily.body};

    & img{
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    & h1{
        margin-top: 20px;
        font-size: 34px;
        font-weight: 500;
    }

    & p{
        font-size: 14px;
        font-weight: 400px;
    }

    @media ${device.laptop}{
        width: 80%;
        & h1{
        font-size: 2.3vw;
        }

        & p{
            font-size: 1vw;
        }
    }
`

const StyledImage = styled.div`
    margin-left: 0px;
    @media ${device.tablet}{
        margin-left: 30px;
    }
`
const StyledFooter = styled.footer`
     width: 100%;
     font-family: ${fontFamily.body};

     margin-top: 50px;
     & > div:first-child{
         display: flex;
         

         & h1{
            color: ${theme.primaryColor};
            margin-left: 20px;
          
            font-weight: 600;
            font-size: 18px;
         }
     }


     & p{
         font-weight: 400;
         font-size: 13px;
         color: #AFC4CD;
         margin-top: 10px;
     }

    @media ${device.laptop}{
        width: 88%;
        & p{
         
         font-size: 0.9vw;
      
        }
    }

    @media ${device.laptopL}{
        width: 76%;
    }
`

const StyledVideoButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 40% ;
`

const StyledVideoButton = styled(PrimaryButtonComponent)`
    width: 35% !important;

`
const StyledVideo = styled.video`
    height: 100%;
    width: 100%
`
