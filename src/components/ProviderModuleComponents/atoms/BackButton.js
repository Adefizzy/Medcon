import  React from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import styled from 'styled-components';
import {useScreenNameContext} from '../../context/screenNameContext';
import { device } from '../../../globalAccets/breakbpoints';
import { fontFamily } from '../../../globalAccets/fontFamily';
import {
  
    useHistory,
  
  } from 'react-router-dom';

export const BackButton = (props) => {

    const history = useHistory();
    const { setCurrentPageName } = useScreenNameContext()
    const handleBackNav = () => {
        history.goBack()
        setCurrentPageName('Schedule')
    }

    return (
        <StyledBackButton onClick={handleBackNav}>
            <StyledFiCornerUpLeft/>
            <p>Back</p>
        </StyledBackButton>
    );
};

const StyledBackButton = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;

    width: fit-content;
    padding: 10px;
    font-family: ${fontFamily.body};
    font-weight: 400;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;

    & p{
        margin-bottom: 0px;
        margin-left: 10px;
    }

    @media ${device.laptop}{
        font-size: 1vw;
    }
`

const StyledFiCornerUpLeft = styled(FiCornerUpLeft)`
    margin: 0px;
    font-size: 24px;
    font-weight: bolder;
`