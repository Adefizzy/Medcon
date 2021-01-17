import styled from 'styled-components';
import { device } from '../../globalAccets/breakbpoints';
import { fontFamily } from '../../globalAccets/fontFamily';
import { theme } from '../../globalAccets/theme';


export const StyledBlackTd = styled.td`
    color: #27272E;
    font-weight: 500;
`

export const StyledfadeTd = styled.td`
    color: ${theme.secondaryColor};
`

export const StyledSpecialFontTd = styled.td`
    font-family: ${fontFamily.Inter} !important;
    font-weight: 400;
`

export const StyledFancyTd = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #DEFFEE;
    padding: 4px 10px;
    color: #66CB9F;
`