import React from 'react';
import {StyledBlackTd, StyledfadeTd, StyledSpecialFontTd , StyledFancyTd} from '../tableRowStyle';


export const AnalyticTableRow = (props) => {
    return (
        <tr>
            <StyledBlackTd>{props.data.sessionTitle}</StyledBlackTd>
            <StyledfadeTd>{props.data.location}</StyledfadeTd>
            <td>{props.data.patient}</td>
            <StyledSpecialFontTd className='specialFont'>{props.data.timeStamp}</StyledSpecialFontTd>
            <td> <StyledFancyTd>{props.data.amountPaid}</StyledFancyTd></td>
        </tr>
    )
}

