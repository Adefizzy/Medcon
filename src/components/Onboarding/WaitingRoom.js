import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import waitingImage from '../../globalAccets/images/waitingImage.png';
import blogImage1 from '../../globalAccets/images/blogImage1.png';
import blogImage2 from '../../globalAccets/images/blogImage2.png';
import blogImage3 from '../../globalAccets/images/blogImage3.png';
import blogHeaderImage from '../../globalAccets/images/blogHeaderImage.png';
import {device} from '../../globalAccets/breakbpoints';
import { WhiteLogo } from '../../globalAccets/svgs/WhiteLogo';
import {fontFamily} from '../../globalAccets/fontFamily'
import { theme } from '../../globalAccets/theme';
import { Avatar, Input, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import moment from 'moment';
import {FiX} from 'react-icons/fi'


const text = `At Humantold, we believe everyone has the right to compassionate mental health care that can help equip, empower, guide, and support you in cultivating the life you want.With so many therapy options available, why choose us? We have conscientiously built Humantold upon the premise that every one of us is deserving of kindness and dignified care. We are dedicated to using our work to help create a better world, and we hope you'll join us in the work of doing so.We strive to create a safe space for your journey of personal growth and empowerment, and we believe that starts with a solid foundation within the organization.Huamantold's leadership team (Christina Jeffrey, Rachel Landman, and myself ) have endeavored (and, I think, succeeded) to create an ethical workplace that nurtures every professional. We take every individual's concerns into account with compassion and care while maintaining clear and firm boundaries. In essence: our goal is to model healthy relationship structures in our work environment so that others may witness them and possibly adopt them within their own families and communities.In a world characterized by increased experiences of dehumanization and depersonalization, we are all struggling to maintain our sanity. At Humantold, we want to be`

export const WaitingRoom = (props) => {
    const [diameter, setDiameter] = useState(44.5);
    const [sessionDuration, setSessionDuration] = useState('3:00');
    const [isBlogModalVisible, setBlogModalVisible] = useState(false);


    const countdown = () => {
       
    }

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

            if(diffTime.minutes() == 0 && diffTime.seconds() == 0){
                clearInterval(intervalToken);
            }
            
        }, 1000);
        
    }, [])

    useEffect(() => {
    
        window.addEventListener('load', () => {
            if(window.innerWidth >= 1024){
           
                let width = window.innerWidth * (4/100);
        
    
                setDiameter(width);
            }
        });
 
        return () => window.removeEventListener('load', () => {
            if(window.innerWidth >= 1024){
                let width = window.innerWidth * (4/100);
        
    
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
    
    return (
        <StyledOnBoardingScaffold>
            <StyledLeftContainer>
                <StyledTopDiv>
                     <WhiteLogo/>
                    <StyledHeaderText>Welcome to the waiting room!</StyledHeaderText>
                </StyledTopDiv>
                
                <StyledCategoryButtonSection>
                    <StyledNotificationDiv>
                        <StyledHeaderNotification>
                         <Avatar size={diameter} icon={<UserOutlined />}/>
                         <StyledInput value='Adeyemi Marcus'/>
                         <StyledImage src={waitingImage} alt=''/>
                        </StyledHeaderNotification>
                        <StyledfooterNotification>
                            <h1>Your provider will join you shortly</h1>
                            <p>Your doctor will be joining you in a less than 3mins.</p>
                            <PrimaryButtonComponent inActive={!(sessionDuration === '0:0')} buttonText={`Join full session ${sessionDuration === '0:0'? 'now' :'in'} (${sessionDuration})`}/>  
                        </StyledfooterNotification>
                       
                    </StyledNotificationDiv>
                </StyledCategoryButtonSection>
        
            </StyledLeftContainer>
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
                {/* <StyledImageDiv>
                     <img src={props.sideImage} alt=''/> 
                    
                </StyledImageDiv>  */}
            </StyledRightContainer>
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
                    <PrimaryButtonComponent inActive={!(sessionDuration === '0:0')} buttonText={`Join full session ${sessionDuration === '0:0'? 'now' :'in'} (${sessionDuration})`}/>
                    <StyledBlogArticle>
                        <img src={blogHeaderImage} alt=''/>
                        <h1>What Makes Humantold Unique</h1>
                        <p>{text}</p>
                    </StyledBlogArticle>

                </StyledFullBlog>
                
            </StyledModal>
        </StyledOnBoardingScaffold>
    );
};


const Blog = (props) => {
    return (
        <StyledBlogSummary onClick={props.onClick}>
            <img src={props.image} alt=''/>
            <div>
                <h1>{props.title}</h1>
                <p>Read time: 5mins</p>
            </div>
        </StyledBlogSummary>
    )
}



const StyledOnBoardingScaffold = styled.main`
    display: flex;
    background-color: #fff;
    width: 100vw;
    
    flex-direction: row;
    flex-wrap: wrap;
    
    /* border: 2px solid yellow; */

    @media ${device.laptop}{
        flex-wrap: nowrap;
    }


`

const StyledLeftContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 30px;
    background-color: ${theme.secondaryColor};
    color: #fff;
    /* border: 1px solid red; */


    @media ${device.laptop}{
        min-width: 62.5%;
    }
`



const StyledRightContainer = styled.section`
    /* display: none; */
    background-color: #fff;
    background-size: cover;
    min-height: 100vh;
    padding: 30px;
    width: 100%;
   /*  border: 1px solid red; */


    

    @media ${device.laptop}{
        display: block;
        min-width: 37.5%;
    }
`




const StyledCategoryButtonSection = styled.section`
    max-height: 70%;
    padding-top: 60px;
    width: 90%;
    margin:0 auto;

    @media ${device.laptop}{
        width: 85%;
        margin: 0;
        margin-left: auto;

    }

    @media ${device.desktopL}{
        padding-top: 100px;
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

const StyledImageDiv = styled.section`
    min-height: 60%;
    margin-top: 70px;
    & img{
        min-width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: contain;
        
    }

`

const StyledHeaderText = styled.h1`
    font-family: ${fontFamily.heading};
    font-weight: 500;
    font-size: 36px;
    color: #fff;

    @media ${device.laptop}{
        font-size: 2.4vw;
    }
`

const StyledNotificationDiv = styled.section`
    width: 100%;
    @media ${device.laptop}{
        width: 80%;
    }
`

const StyledHeaderNotification = styled.div`
    width: 100%;
    background-color: #EFFAF3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0px 0px;
    padding: 40px 0px 40px 0px;
    position: relative;
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
    }

    & p{
        font-size: 16px;
        color: ${theme.mutedColor};
    }

    @media ${device.laptop}{
        padding-top: 2vw;
    }
`

const StyledImage = styled.img`
     position: absolute;
     top: 80%;
     right:43%;
     @media ${device.laptop}{
         width: 3vw;
     }
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

    & img{
        flex-basis: 30%;
        height: auto;
        border-radius: 5.44299px;
        object-fit: contain;
        margin-right: 20px;
    }

    & > div{
        & p{
            font-size: 14px;
            color: ${theme.mutedColor};
            font-family: ${fontFamily.body};
        }
    }

    @media ${device.laptop}{
        & > div{
            & p{
                font-size: 0.9vw;
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
