import React from 'react';
import {StyledBlackTd, StyledfadeTd, StyledSpecialFontTd , StyledFancyTd} from '../tableRowStyle';


export const PerformanceTableRow = (props) => {
    return (
        <tr>
            <StyledBlackTd>{props.data.sessionTitle}</StyledBlackTd>
            <StyledfadeTd>{props.data.sessionType}</StyledfadeTd>
            <td>{props.data.provider}</td>
            <StyledSpecialFontTd className='specialFont'>{props.data.timeStamp}</StyledSpecialFontTd>
            <td> <StyledFancyTd>{props.data.amountPaid}</StyledFancyTd></td>
        </tr>
    )
}