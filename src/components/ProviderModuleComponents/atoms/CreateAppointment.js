import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { theme } from '../../../globalAccets/theme';
import {fontFamily } from '../../../globalAccets/fontFamily';
import {
  IoMdPeople,
} from 'react-icons/io';
import laughingHeads from '../../../globalAccets/images/laughingHeads.png';
import fileIcon from '../../../globalAccets/images/fileIcon.png';

export const CreateAppointment = (props) => {
  return (
    <>
      <StyledTablet>
        <StyledSkeleton>
          <div></div>
          <div></div>
        </StyledSkeleton>
        <div>
          <img src={laughingHeads} alt='' />
        </div>
      </StyledTablet>
      <StyledTablet>
        <StyledSkeleton>
          <div></div>
          <div></div>
        </StyledSkeleton>
        <div>
          <img src={fileIcon} alt='' />
        </div>
      </StyledTablet>
      <StyledUpcomingEventFooter>
        <h1>Create an Appointment</h1>
        <p>
          An appointment easily allows you to find
          <br /> the perfect time for your patient sessions
        </p>
        <StyledMediumButton>
          <StyledSmallIoMdPeople />
          <p>Add New Appointment</p>
        </StyledMediumButton>
      </StyledUpcomingEventFooter>
    </>
  );
};

const StyledTablet = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  box-shadow: 0px 8.49057px 16.9811px rgba(169, 174, 181, 0.21);
  border-radius: 6.1597px;
  padding: 10px 20px;

  &:nth-child(2) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
  & > div:nth-child(2) {
    width: 30%;
    object-fit: contain;
    & img {
      width: 80%;

      height: auto;
    }
  }

 



  @media ${device.tablet} {
    width: 30vw;
  }

  @media ${device.laptop} {
    width: 20vw;
  }

  @media ${device.laptopL} {
    width: 17vw;
  }
`

const StyledSkeleton = styled.div`
  width: 70%;
  & > div {
    background-color: #dfe5ec;
    border-radius: 6.2px;
    height: 11px;

    &:first-child {
      width: 60%;
    }

    &:nth-child(2) {
      width: 80%;
      margin-top: 10px;
      opacity: 0.5;
    }
  }
`

const StyledUpcomingEventFooter = styled.div`
  text-align: center;
  width: 70vw;
  display: grid;
  place-items: center;


  & h1{
        font-family: ${fontFamily.heading};
        font-weight: 600;
        font-size: 20px;
    }

    & p{
        font-family: ${fontFamily.body};
        font-weight: 400;
        font-size: 12px;
        color: #7A8593;
    }

    @media ${device.laptop}{
        & h1{
       
        font-size:1.4vw;
        }

    & p{
        font-size: 0.8vw;
 
    }
    }

  @media ${device.tablet} {
    width: 50vw;
  }

  @media ${device.laptop} {
    width: 25vw;
  }

  @media ${device.laptopL} {
    width: 20vw;
  }
`

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

  & p {
    margin: 0px;
    margin-left: 5px;
  }

  @media ${device.laptop} {
    font-size: 0.95vw;
    padding: 8px 17px;
  }
`

const StyledMediumButton = styled(StyledButton)`
  border-radius: 6px;
  color: #fff;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    ${theme.secondaryColor},
    ${theme.secondaryColor_lighter}
  );
  margin-top: 20px;
  & > p{
    color: #fff !important;
    font-size: 10px;
    margin-left: 5px;
  }

  @media ${device.laptop} {
    & p {
      font-size: 0.7vw;
    }
  }
`

const StyledIoMdPeople = styled(IoMdPeople)`
  font-size: 24px;
  transform: rotateY(180deg);

  @media ${device.laptop} {
    font-size: 1.7vw;
  }
`

const StyledSmallIoMdPeople = styled(StyledIoMdPeople)`
  font-size: 10px;

  @media ${device.laptop} {
    font-size: 0.9vw;
  }
`
