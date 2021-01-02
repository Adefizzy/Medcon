import React, {useState} from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage4 from '../../globalAccets/images/sideImage4.png';
import paymentHeaderImage from '../../globalAccets/images/paymentHeaderImage.png';
import masterCardImage from '../../globalAccets/images/masterCardImage.png';
import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import docIcon from '../../globalAccets/images/docIcon.png';
import {FiUser, FiLayout} from 'react-icons/fi';
import { theme } from '../../globalAccets/theme';
import {fontFamily} from '../../globalAccets/fontFamily';
import {InputComponent} from './elements/InputComponent';
import { PrimaryButtonComponent } from './elements/PrimaryButtonComponent';
import {SelectInput} from './elements/SelectInput';
import {BackButton} from './elements/BackButton';
import {OnBoardingTopText} from './elements/OnBoardingTopText';
import { useHistory } from 'react-router-dom';
import { Modal, Divider, Input, DatePicker } from 'antd';
import {InputDiv} from './elements/InputDiv';
const { TextArea } = Input;

export const OnBoardingScreen3 = (props) => {
    const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
    const history = useHistory();

    const handleSuccess = () => {
       setPaymentModalVisible(true);
    }

    const handlePayment = () => {
        history.push('/onboarding-success'); 
    }

    const handleFailed = () => {
        history.push('/onboarding-failed');
    }

    const handlePaymentModalCancel = () => {
        setPaymentModalVisible(false);
    }

    return (
        <OnBoardingScaffold
            topItem={<OnBoardingTopText prefixText='Select' segment = 'Provider'/>}
            sideImage={sideImage4}>
                <InputComponent
                    title='SELECT PROVIDER'
                    input={<SelectInput/>}
                />
                <BillPane>
                    <StyledBillTitle>
                        <img src={docIcon} alt=''/>
                        <p>Your session fee:</p>
                    </StyledBillTitle>
                    <StyledPrice>
                        $2,000.00
                    </StyledPrice>
                    
                </BillPane>
                <BillPane>
                    <StyledBillTitle>
                        <StyledFiUser/>
                        <p>Patient Name:</p>
                    </StyledBillTitle>
                    <StyledBillText>
                        Adeyemi Marcus
                    </StyledBillText>
                </BillPane>
                <BillPane>
                    <StyledBillTitle>
                        <StyledFiLayout/>
                        <p>Appointment Date:</p>
                    </StyledBillTitle>
                    <StyledBillText>
                        Mon. 25th Dec, 2020 <span>10:00am</span>
                    </StyledBillText>
                </BillPane>
                <PrimaryButtonComponent onDoubleClick={handleFailed} onClick={handleSuccess} buttonText='Proceed to Pay'/>
                <BackButton/> 
                <Modal 
                    visible={isPaymentModalVisible} 
                    onCancel={handlePaymentModalCancel}
                    footer={false}
                    centered={false}
                    style={{top: '10px'}}
                >
                    <StyledPaymentHeader>
            
                        <img src={paymentHeaderImage} alt=''/>
            
                        <div>
                            <h1>Medcon Payment</h1>
                            <p>You can use your debit cards</p>
                        </div>
                    </StyledPaymentHeader>
                    <Divider/>
                    <StyledPaymentForm>
                    <InputComponent
                                    input = {<InputDiv width='100%'>
                                    <img src={masterCardImage} alt=''/>
                                    <Input bordered={false} placeholder='3726 3772 4662 4772'/>
                                </InputDiv>}
                                    title='Card number'
                                    small={true}
                                />
                        
                        <StyledInputCollection>
                         <InputComponent
                            input = {<DateInput/>}
                            title='Expiry Date'
                            small={true}
                         />
                        <InputComponent
                            input = {<PasswordInput placeholder='123'/>}
                            title='CVV'
                            small={true}
                         />
                        </StyledInputCollection>
                        <Divider style={{marginTop: '0px'}}/>
                        <StyledBillingAddress>
                            <h1>Billing Address</h1>
                            <StyledInputCollection>
                                <InputComponent
                                    input = {<TextInput/>}
                                    title='First name'
                                    small={true}
                                />
                                <InputComponent
                                    input = {<TextInput/>}
                                    title='Last name'
                                    small={true}
                                />
                            </StyledInputCollection>
                            <InputComponent
                                input = {<TextAreaInput/>}
                                title='Full Address'
                                small={true}
                            />
                            <InputComponent
                                input = {<TextInput/>}
                                title='Zip Code'
                                small={true}
                            />
                            </StyledBillingAddress>
                        
                    <PrimaryButtonComponent onClick={handlePayment} width={'100%'}  buttonText='Pay $2,000'/>
                    </StyledPaymentForm>
                </Modal>
              
        </OnBoardingScaffold>
    );
};

const TextInput = (props) => {
    return (
        <InputDiv width='100%'>
            <Input  bordered={false} placeholder={props.placeholder}/>
        </InputDiv>
    )
}

const PasswordInput = (props) => {
    return (
        <InputDiv width='100%'>
            <Input.Password  bordered={false} placeholder={props.placeholder}/>
        </InputDiv>
    )
}

const DateInput = (props) => {
    return (
        <InputDiv width='100%'>
            <StyledDatePicker placeholder='MM/YY' format='MM/YY' picker='month' suffixIcon={''} bordered={false} />
        </InputDiv>
    )
}

const TextAreaInput = (props) => {
    return (
        <InputDiv width='100%'>
            <TextArea   bordered={false} autoSize={{ minRows: 2, maxRows: 6 }}/>
        </InputDiv>
    )
}


const BillPane = (props) => {
    return (
        <StyledBillPane>
            {props.children}
        </StyledBillPane>
    )
}

const StyledBillPane = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 13px;
    min-width: fit-content;
    border-bottom : 1px dashed ${theme.mutedColor};
    margin-bottom: 30px;

    @media ${device.laptop}{
        width: 50%;

    }

    @media ${device.desktopL}{
        padding: 20px 0px;
    } 
`

const StyledBillTitle = styled.div`
    font-family: ${fontFamily.heading};
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;

    & p{
        margin-bottom: 0px;
        margin-left: 10px;
    }


    @media ${device.laptop}{
        font-size: 0.9vw;
    }
`

const StyledPrice = styled.p`
    font-family: ${fontFamily.body};
    font-weight: 600;
    font-size: 14px;
    color: #0F9F7D;
    margin-bottom: 0px;


    @media ${device.laptop}{
        font-size: 1vw;
    }

`

const StyledFiLayout = styled(FiLayout)`
    font-size: 18px;
    color: ${theme.mutedColor};

    @media ${device.laptop}{
        font-size: 1.3vw;
    }
`

const StyledBillText = styled.p`
    font-family: ${fontFamily.body};
    font-weight: 400;
    font-size: 12px;
    color: ${theme.black};
    margin-bottom: 0px;

    & span{
        color: ${theme.mutedColor};
    }

    @media ${device.laptop}{
        font-size: 0.9vw;
    }
`

const StyledFiUser = styled(FiUser)`
    font-size: 18px;
    color: ${theme.mutedColor};

    @media ${device.laptop}{
        font-size: 1.3vw;
    }
`

const StyledPaymentHeader = styled.div`
    display: flex;

    

    /* & > div:first-child{
        display: flex;
        place-items: center;
        width: fit-content;

    } */

    & img{
        width: 13%;
        object-fit: contain;
        height: auto;
        margin-right: 20px;
    }

    & > div{
        & h1{
            font-family: ${fontFamily.heading};
            font-size: 24px;
            font-weight: 500;
            margin: 0px;
        }

        & p{
            color: ${theme.mutedColor};
            margin: 0px;
            font-family: ${fontFamily.body};
            font-weight: 400;
            font-size: 14px;
        }
    }



    @media ${device.laptop}{
        & > div{
            & h1{
                font-size: 2.2vw;
            }

            & p{
                font-size: 0.9vw;
            }
        }
    }
`

const StyledPaymentForm = styled.div`
    width: 100%;

    & div{
        border-radius: 4px;
    }
`

const StyledInputCollection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    & > div{
        flex-basis: 48%;
    }
`

const StyledDatePicker = styled(DatePicker)`
    width: 100% !important;
`

const StyledBillingAddress = styled.div`
    width: 100%;

    & h1{
        font-family: ${fontFamily.heading};
        font-size: 24px;
        font-weight: 500;
        margin: 0px;
    }

    @media ${device.laptop}{
            & h1{
                font-size: 2vw;
            }

    }
`
