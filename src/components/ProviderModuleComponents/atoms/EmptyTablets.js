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
import fileIcon2 from '../../../globalAccets/images/fileIcon2.png';

export const EmptyTablets = (props) => {
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
                <img src={props.greenIcon? fileIcon2 : fileIcon} alt='' />
                </div>
            </StyledTablet>
        </>
    );
};

const StyledTablet = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  box-shadow: 0px 8.49057px 16.9811px rgba(169, 174, 181, 0.21);
  border-radius: 6.1597px;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;

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