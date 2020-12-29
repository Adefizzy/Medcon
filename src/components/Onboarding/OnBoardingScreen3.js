import React from 'react';
import { OnBoardingScaffold } from './layout/OnBoardingScaffold';
import sideImage4 from '../../globalAccets/images/sideImage4.png';
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


export const OnBoardingScreen3 = (props) => {
    return (
        <OnBoardingScaffold
            segment = 'Provider'
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
                <PrimaryButtonComponent buttonText='Proceed to Pay'/>
                <BackButton/> 
              
        </OnBoardingScaffold>
    );
};


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