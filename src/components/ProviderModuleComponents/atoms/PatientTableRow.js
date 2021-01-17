import React from 'react';
import styled from 'styled-components';
import { device } from '../../../globalAccets/breakbpoints';
import { fontFamily } from '../../../globalAccets/fontFamily';
import { theme } from '../../../globalAccets/theme';
import {StyledBlackTd, StyledfadeTd, StyledSpecialFontTd , StyledFancyTd} from '../tableRowStyle';


export const PatientTableRow = (props) => {
    return (
        <tr onClick={props.onClick} style={{cursor: 'pointer'}}>
            <StyledBlackTd>{props.data.fullName}</StyledBlackTd>
            <StyledfadeTd>{props.data.totalSession}</StyledfadeTd>
            <StyledfadeTd>{props.data.nextAppointment}</StyledfadeTd>
            <td>{props.data.provider}</td>
            <StyledSpecialFontTd className='specialFont'>{props.data.lastActivity}</StyledSpecialFontTd>
            <td> <StyledFancyTd>{props.data.totalPaid}</StyledFancyTd></td>
        </tr>
    )
}