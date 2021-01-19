import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { fontFamily } from '../../../globalAccets/fontFamily';
import { theme } from '../../../globalAccets/theme';
import { FiRefreshCcw } from 'react-icons/fi';
import { MdAddCircle } from 'react-icons/md';
import { IconBorder } from './IconBorder';

export const ScheduleBarComponentScaffold = (props) => {
    return (
        <StyledScheduleBarComponent>
          <StyledDateDiv>
            <p>
              {props.day}, <span>{props.otherDate}</span>
            </p>
            {props.displaySwitchButton && (
              <div>
                {!props.hideSwitch && <StyledSwitch onClick={props.handleSwitch}>
                  <StyledFiRefreshCcw />
                  <p>Switch to Calendar view</p>
                </StyledSwitch>}
                <IconBorder
                    onClick={props.onClick}
                    icon={<StyledMdAddCircle />}
                    large={true}
                    borderColor='#CEDCE2'
                    color={theme.secondaryColor}
                />
              </div>
            )}
          </StyledDateDiv>
    
          {props.children}
        </StyledScheduleBarComponent>
      );
};

const StyledScheduleBarComponent = styled.div`
  margin-bottom: 50px;
`

const StyledDateDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  & p {
    margin: 0px;
  }

  & > p {
    font-family: ${fontFamily.heading};
    font-size: 18px;
    font-weight: 700;
    color: #1a1c1d;
    margin-left: 15px;

    & span {
      font-weight: 400;
    }
  }

  & > div {
    display: flex;
  }
`

const StyledSwitch = styled.div`
  border: 1.11546px solid #cedce2;
  border-radius: 11.1546px;
  display: flex;
  align-items: center;
  font-size: 14.22px;
  background-color: #fff;
  padding: 10px 15px;
  margin-right: 20px;
  cursor: pointer;

  & p {
    margin-left: 10px;
    font-family: ${fontFamily.body};
    font-weight: 500;
    color: #5d6d74;
  }
`

const StyledFiRefreshCcw = styled(FiRefreshCcw)`
  color: #5d6d74;
  font-size: 21px;
`

const StyledMdAddCircle = styled(MdAddCircle)`
  font-size: 22px;

  @media ${device.laptop} {
    font-size: 1.4vw;
  }
`