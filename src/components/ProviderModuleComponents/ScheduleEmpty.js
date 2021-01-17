import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {  Col} from 'antd';

import { ScheduleBarComponentScaffold } from './atoms/ScheduleBarComponentScaffold';
import {CreateAppointment} from './atoms/CreateAppointment';

export const ScheduleEmpty = (props) => {
    return (
        <Col xs={{ span: 24 }} style={{marginTop: '30px'}}>
                <ScheduleBarComponentScaffold day='Monday' otherDate='January 3, 2021' displaySwitchButton={true} hideSwitch={true}>
                    <StyledSceduleBar>
                        <CreateAppointment/>
                    </StyledSceduleBar>
                </ScheduleBarComponentScaffold>
        </Col>
    );
};




const StyledSceduleBar = styled.div`
  background-color: #fff;
  border-radius: 13.3855px;
  width: 100%;
  min-height: 70vh;
  margin-bottom: 10px;
  display: grid;
  place-items: center;
`