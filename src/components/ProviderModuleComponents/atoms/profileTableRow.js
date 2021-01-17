import React from 'react';
import {StyledBlackTd, StyledfadeTd, StyledSpecialFontTd , StyledFancyTd} from '../tableRowStyle';


export const ProfileTableRow = (props) => {
    return (
        <tr>
            <StyledBlackTd>{props.data.name}</StyledBlackTd>
            <StyledfadeTd>{props.data.serviceRendered}</StyledfadeTd>
            <td>{props.data.sessionCount}</td>
            <StyledSpecialFontTd className='specialFont'>{props.data.nextAppointment}</StyledSpecialFontTd>
            <td> <StyledFancyTd>{props.data.ammountPaid}</StyledFancyTd></td>
        </tr>
    )
}