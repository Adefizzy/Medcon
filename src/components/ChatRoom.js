import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import incomingVideoImage from '../globalAccets/images/incomingVideoImage.png';
import videoBgImage from '../globalAccets/images/videoBgImage.png';
import {device} from '../globalAccets/breakbpoints';
import { Logo } from '../globalAccets/svgs/Logo';
import { MiddleIcon } from '../globalAccets/svgs/MiddleIcon';
import {fontFamily} from '../globalAccets/fontFamily'
import { theme } from '../globalAccets/theme';
import { FaWifi} from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { MdGroup, MdCallEnd, MdVideocam, MdSettings, MdVideocamOff, MdOpenInBrowser } from 'react-icons/md';
import { IoMdShareAlt, IoIosMic , IoIosMicOff} from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Alert } from './ProviderModuleComponents/atoms/Alert';
import { AppointmentDetail } from './ProviderModuleComponents/atoms/SingleSchedule';
import { ActionButtons } from './ProviderModuleComponents/atoms/ActionButtons';
import { Space } from 'antd';





export const ChatRoom = (props) => {
    const videoRef = useRef();
    const audioRef = useRef();
    const chatBoxRef = useRef();
    const controlsRef = useRef();

    const [videoVisible, setVideoVisible] = useState(true);
    const [pauseAudio, setPauseAudio] = useState(true);
    const [frontCamera, setFrontCamera] = useState(true);
    const [chatBoxWidth, setChatBoxWidth] = useState(200)
    const [controlsWidth, setControlsWidth] = useState(100);
    const [toolBarType, setToolBarType] = useState('large');
    const [callStatus, setCallStatus] = useState('visible');
    const [videoHeight, setVideoHeight] = useState(0);

   const  stop = (e) => {
        var stream = videoRef.current.srcObject;

        if(stream !== null){
            var tracks = stream.getTracks();
      
            tracks.forEach( track => {
                track.stop();
            })
        
            videoRef.current.srcObject = null;
        }
        
    }

    const muteVideo = (e) => {
        if(callStatus === 'visible'){
            stop(e);
            setCallStatus('muted');
        }
        
    }

    const closeVideo = (e) => {
        if(callStatus === 'visible'){
            stop(e);
            setCallStatus('close');
            setPauseAudio(false);
        }
        
    }

    const start = () => {
        setCallStatus('visible');
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({audio: {
                echoCancellation: true,
                noiseSuppression: true}, video:{width:{ min: 1024, ideal: 1280, max: 1920 },
                height: { min: 576, ideal: 720, max: 1080 }}})
              .then((stream) => {
                videoRef.current.srcObject = stream;
                audioRef.current.srcObject = stream;
                audioRef.current.volume = 0.01;
                videoRef.current.volume = 0;
                videoRef.current.muted = 0;
                audioRef.current.play()
                videoRef.current.play()
              })
              .catch(function (err0r) {
                console.log("Something went wrong!");
              });
          }
    }

    const pauseAudioControl = () => {

        if(pauseAudio){
            audioRef.current.pause()
            setPauseAudio(false)
        }else{
            audioRef.current.play()
            setPauseAudio(true)
        }
        
        
    }

    useEffect(() => {
        setVideoHeight(window.innerHeight * 80/100);
        if(window.innerWidth > 768){
            setToolBarType('large')
        }else if( window.innerWidth < 768){
            setToolBarType('small')
        }else{
            setToolBarType('medium')
        }
    }, [])

    useEffect(() => {

        console.log(videoRef.current);
        setChatBoxWidth((window.innerWidth/2) -  controlsRef?.current?.getBoundingClientRect().width/2);

         if (navigator.mediaDevices.getUserMedia) {
             navigator.mediaDevices.getUserMedia({audio:  {
                 echoCancellation: true,
                 noiseSuppression: true}, video:{width: { min: 1024, ideal: 1280, max: 1920 },
                 height: { min: 576, ideal: 720, max: 1080 }}})
               .then(function (stream) {
                
     
                 videoRef.current.srcObject = stream;
                 audioRef.current.srcObject = stream;
                 audioRef.current.volume = 0.01;
                 videoRef.current.volume = 0;
                 videoRef.current.muted = 0;
                 audioRef.current.play()
                 videoRef.current.play()
               })
               .catch(function (err) {
                 console.log("Something went wrong!");
                 console.log(err)
               });
           }


          
     }, [])


     const popTitle = (
         <StyledPopTitle>
             <StyledAiFillCheckCircle/>
             <h4>You have 3 Patients on waitlist</h4>
         </StyledPopTitle>
     )

     const popContent = (
         <>
         <StyledSingleNotification>
             <AppointmentDetail isProvider={true}/>
             <ActionButtons/>
         </StyledSingleNotification>
         <StyledSingleNotification>
             <AppointmentDetail isProvider={true}/>
             <ActionButtons/>
         </StyledSingleNotification>
         <StyledSingleNotification>
             <AppointmentDetail isProvider={true}/>
             <ActionButtons/>
         </StyledSingleNotification>
         </>
     )
    return (
            <>
            {
                toolBarType === 'large'? 
                <LargeToolBar popContent={popContent}  popTitle={popTitle} isActive={callStatus === 'visible' || callStatus === 'muted'}/>
                : toolBarType === 'medium'? 
                <MediumToolBar popContent={popContent}  popTitle={popTitle} isActive={callStatus === 'visible' || callStatus === 'muted'}/>
                :<MiniToolBar popContent={popContent}  popTitle={popTitle} isActive={callStatus === 'visible' || callStatus === 'muted'}/>
            }
            <StyledChatBox ref={chatBoxRef} >
                {callStatus === 'muted'?
                     <StyledVideoBg src={videoBgImage} alt=''/>
                : callStatus === 'close'?
                    <CallEnded/>
                :
                    <StyledVideo height={videoHeight} ref={videoRef}></StyledVideo>}
                   {/*  <StyledVideo width={375} height={800} ref={videoRef}></StyledVideo> */}
                <audio  style={{display: 'none'}} controls ref={audioRef}></audio>
               {(callStatus === 'visible' || callStatus === 'muted' ) && <>  
                <StyledMainControls ref={controlsRef} >
                    <div>
                    <StyledMicroPhone onClick={pauseAudioControl}>
                        {pauseAudio?  <IoIosMic/> : <IoIosMicOff/>}
                    </StyledMicroPhone>
                    <StyledCall onClick={closeVideo}>
                        <MdCallEnd/>
                    </StyledCall>
                    <StyledVideoIconDiv onClick={callStatus === 'visible'? muteVideo: callStatus === 'muted' && start}>
                        {callStatus === 'visible'?  <MdVideocam/> : <MdVideocamOff/>}
                    </StyledVideoIconDiv>
                    </div>
                 
                </StyledMainControls>
                <StyledSettings>
                    <MdSettings/>
                </StyledSettings>
                <StyledIncomingVideo>
                    <StyledIcomingImg src={incomingVideoImage} alt=''/>
                </StyledIncomingVideo>
                <StyledIMenu>
                    <FiMoreVertical/>
                </StyledIMenu>
                <StyledIUpload>
                    <MdOpenInBrowser/>
                </StyledIUpload>
                </>}
            </StyledChatBox>
        </>
    );
};



const MediumToolBar = (props) => {
    return (
        <StyledToolBar>
        <div style={{width: '100%', marginLeft: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>Dr Spring Session</h1>
        <div>
        <Alert popContent={props.popContent}  isProvider={true} popTitle={props.popTitle}  onClick={props.onClick}/>
        </div>
        
        </div>
        <div style={{marginLeft: '0px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px'}}>
        <StyledWifi isActive = {props.isActive}>
            <FaWifi/>
            <p>{props.isActive? 'Live': 'Ended'}</p>
        </StyledWifi>
        <StyledMemberCounts>
            <StyledMdGroup/>
            <p>2</p>
        </StyledMemberCounts>
        <StyledURLLink >
            <IoMdShareAlt/>
            <p>https://medcon.live/patient-accessShare</p>
        </StyledURLLink>
        <StyledCountDown>
            <p>10:00</p>
        </StyledCountDown>
        </div>
       {/*  <div style={{marginLeft: 'auto'}}></div> */}
    </StyledToolBar>
    )
}

const LargeToolBar = (props) => {

    return (
        <StyledToolBar>
        <h1>Dr Spring Session</h1>
        <StyledWifi isActive = {props.isActive}>
            <FaWifi/>
            <p>{props.isActive? 'Live': 'Ended'}</p>
        </StyledWifi>
        <StyledMemberCounts>
            <StyledMdGroup/>
            <p>2</p>
        </StyledMemberCounts>
        <StyledURLLink >
            <IoMdShareAlt/>
            <p>https://medcon.live/patient-accessShare</p>
        </StyledURLLink>
        <StyledCountDown>
            <p>10:00</p>
        </StyledCountDown>
        <div style={{marginLeft: 'auto'}}></div><Alert popContent={props.popContent}  popTitle={props.popTitle}  isProvider={true} onClick={props.onClick}/>
    </StyledToolBar>
    )

}

const MiniToolBar = (props) => {
    return (
    <StyledToolBar>
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '0px'}}>
        <h1>Dr Spring Session</h1>
       
        <Alert popTitle={props.popTitle} popContent={props.popContent}  isProvider={true}  onClick={props.onClick}/>
        </div>
        <div style={{marginTop: '20px', width:'100%',display: 'flex', alignItems: 'center' , marginLeft: '0px', justifyContent: 'space-between'}}>
        <StyledWifi isActive = {props.isActive}>
            <FaWifi/>
            <p>{props.isActive? 'Live': 'Ended'}</p>
        </StyledWifi>   
        <StyledMemberCounts>
            <StyledMdGroup/>
            <p>2</p>
        </StyledMemberCounts>
        <StyledCountDown>
            <p>10:00</p>
        </StyledCountDown>
        </div>
        <StyledURLLink style={{width: '100%', marginLeft: '0px', marginTop: '20px'}}>
            <IoMdShareAlt/>
            <p>https://medcon.live/patient-accessShare</p>
        </StyledURLLink>
        {/* <div style={{marginLeft: 'auto'}}></div> */}<Alert popTitle={props.popTitle} popContent={props.popContent}  isProvider={true}  onClick={props.onClick}/>
    </StyledToolBar>
    )
}

const CallEnded = () => {
    return (
        <StyledCallEnded>
            <StyledCallEndedNotification>
                <div>
                    <div>
                        <MiddleIcon/>
                    </div>
                </div>
                <div>
                    <h1>Session Ended</h1>
                    <p>We hope you benefit from the <br/>professional advices. See you soon!</p>
                    <div>
                        <StyledHomePageButton>Return to Homepage</StyledHomePageButton>
                        <StyledSignOutButton>Sign out</StyledSignOutButton>
                    </div>
                </div>
            </StyledCallEndedNotification>

        </StyledCallEnded>
    )
}

const StyledChatRoom = styled.div`
    width: 90%;
    margin: 0 auto;
    min-height: 100vh;
    padding-bottom: 100px;
    padding-top: 20px;

    @media ${device.laptop}{
        width: 80%;
    }

    /* border: 1px solid red; */
`

const StyledToolBar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;

    & h1{
        font-size: 24px;
        font-family: ${fontFamily.heading};
        font-weight: 500;
        margin: 0px;
    }

    & > div{
        margin-left: 30px;
    }

    @media ${device.laptop}{
        flex-wrap: nowrap;
    }
`

const StyledWifi = styled.div`
    display: flex;
    color: ${props => props.isActive? '#EB5757': theme.mutedColor} ;
    align-items: center;
    justify-content: center;
    height: fit-content;
    font-weight: 500;
    font-family: ${fontFamily.body};

    & p{
        margin: 0px;
        margin-left: 8px;
    }
`

const StyledMemberCounts = styled.div`
    background: rgba(228, 228, 228, 0.25);
    border-radius: 10.5299px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.mutedColor};
    padding: 10px 20px;

    & p{
        margin: 0px;
        margin-left: 10px;
        font-size: 11px;
        font-weight: 500;
        font-family: ${fontFamily.body};
    }

    @media ${device.laptop}{
        & p{
            font-size: 0.9vw;
        }
    }
`

const StyledMdGroup = styled(MdGroup)`
    font-size: 22px;

    @media ${device.laptop}{
        font-size: 1.7vw;
    }
`

const StyledURLLink = styled.div`
    background: rgba(228, 228, 228, 0.25);
    border-radius: 10.5299px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.mutedColor};
    padding: 12px 20px;

    & p{
        margin: 0px;
        font-size: 11px;
        font-family: ${fontFamily.body};
        font-weight: 500;
        margin-left: 20px;
    }
`

const StyledCountDown = styled.div`
    background: #EB5757;
    border-radius: 10.5299px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 8px 20px;
    & p{
        margin: 0px;
        font-size: 16px;
        font-family: ${fontFamily.body};
        font-weight: 500;
    }

`

const StyledChatBox = styled.div`
    height: 80vh;
    width: 100%;
    position: relative;
    margin-top: 20px; 
    border-radius: 20px;
    overflow: hidden;
     
`

const StyledVideo = styled.video`
    height: 80vh;
    width: 100%;
`

const StyledControlButton = styled.button`
    outline: none;
    box-shadow: none;
    border: none;
    background-color: #fff;
    display: flex;
    place-items: center;
    cursor: pointer;
    padding: 12px 12px;
    font-size: 16px;
    border-radius: 4px;


    &:focus, &:hover{
        outline: none;
        box-shadow: none;
        border: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }
`

const StyledMicroPhone = styled(StyledControlButton)`
    margin-right: 10px;
`

const StyledCall = styled(StyledControlButton)`
    color: #fff;
    background-color: #E44E61;
    margin-right: 10px;
`

const StyledMainControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    width: 90vw;


    & div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
    }


    @media ${device.laptop}{
        width: 80vw;
    }
`

const StyledVideoIconDiv = styled(StyledControlButton)`
    margin-right: 10px;
`

const StyledSettings = styled(StyledControlButton)`
    position: absolute;
    bottom: 5%;
    right: 5%;
`

const StyledIMenu = styled(StyledControlButton)`
    position: absolute;
    top: 5%;
    right: 5%;
    background-color: ${theme.black};
    color: ${theme.primaryColor};
`

const StyledIUpload = styled(StyledControlButton)`
    position: absolute;
    top: 5%;
    left: 5%;
    background-color: rgba(77, 76, 172, 0.1);
    color: #6B59CC;
`

const StyledIncomingVideo = styled.div`
    position: absolute;
    bottom: 15% ;
    right: 5%;

    border-radius: 18px;
    height: 20vh;
    width: 20vh;
    background-color: #123765; 
`

const StyledVideoBg = styled.img`
    width: 100%;
    height: 100%;
`

const StyledIcomingImg = styled.img`
    width: 100%;
    height: 100%;
`

const StyledCallEnded = styled.div`
    background-color: #F2F5F8;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledCallEndedNotification = styled.div`
    width: 95%;
    & > div:first-child{
        width: 100%;
        background-color: #F6FAFF;
        height: 10vh;
        border-radius: 10px 10px 0px 0px;
        position: relative;

        & > div{
            position: absolute;
            bottom: -35%;
            height: fit-content;
            width: 100%;
            display: flex;
            justify-content: center;

        }
    }

    & > div:last-child{
        text-align: center;
        background-color: #FFF;
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 20px;
        padding-top: 40px;

        & h1{
            font-weight: 600;
            font-family: ${fontFamily.body};
            font-size: 26px;
        }

        & p{
            font-size: 16px;
            font-family: ${fontFamily.body};
            font-weight: 400;
            color: ${theme.mutedColor};
            margin-bottom: 30px;

        }
        & div{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;

            & button:last-child{
                margin-left: 10px;
            }
        }
    }


    @media ${device.laptop}{
        width: 35%;


        & > div:last-child{
       

            & h1{
                font-weight: 600;
                font-family: ${fontFamily.body};
                font-size: 1.5vw;
            }


            & p{
            font-size: 1.1vw;
        }
        }
    }

    @media ${device.desktop}{
        & > div:first-child{
        height: 7vh;
        

        & > div{
            bottom: -25%;
        }
    }
    }
`

const StyledHomePageButton = styled(StyledControlButton)`
    background-color: ${theme.secondaryColor};
    color: #fff;

`

const StyledSignOutButton = styled(StyledControlButton)`
    background-color: #EB5757;
    color: #fff;
`

const StyledPopTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 20px;

    & h4{
        margin: 0px;
        font-size: 18px;
        font-family: ${fontFamily.heading};
        font-weight: 500;
    }
`

const StyledAiFillCheckCircle = styled(AiFillCheckCircle)`
    color: #219653;
    margin-right: 17px;
    font-size: 30px;
`

const StyledSingleNotification = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 20px;

    & > div:first-child{
        margin-right: 40px;
    }
`