import React from 'react';
import styled from 'styled-components';
import {device} from '../../../globalAccets/breakbpoints';
import { FiMenu, FiX,  FiTrendingUp, FiBookmark, FiUsers, FiLogOut, FiSettings, FiBell, FiLayout,  FiPlus, FiCheckSquare, FiClock} from 'react-icons/fi';
import { Drawer, Divider, Badge, Statistic, Avatar, Col, Row, Popover} from 'antd';
import {theme} from '../../../globalAccets/theme';


export const Alert = (props) => {
    return (
        <StyledPopover placement='bottomRight' content={props.popContent} title={props.popTitle}>
            <StyledAlertAndButtondiv isProvider={props.isProvider}  onClick={props.onClick}>
                <StyledAlertDiv style={{marginRight: '30px'}}>
                    <StyledFiBell/>
                    <Badge count={23} style={{padding:'0px 11px 0px 11px', backgroundColor: props.isProvider? '#DBEDE3' :'#FFE6E4', color: props.isProvider?'#27AE60':'#F16063', fontWeight: '700', borderColor: props.isProvider? '#DBEDE3' :'#FFE6E4'}}/>
                </StyledAlertDiv>
            </StyledAlertAndButtondiv>
        </StyledPopover>
    );
};


/* const StyledBadge = styled(Badge)`
    padding:0px 11px 0px 11px;
    background-color: #FFE6E4;
    color: #F16063;
    font-weight: 700;
    border-color: #FFE6E4;
` */

const StyledPopover = styled(Popover)`
    border-radius: 10px;
`

const StyledAlertAndButtondiv = styled.div`
    display:${props => props.isProvider? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    @media ${device.laptop}{
        display: flex;
    }
`

const StyledAlertDiv = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;

`

const StyledFiBell = styled(FiBell)`
    color: ${theme.mutedColor};
    margin-right: 10px;
`