import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {device} from '../../../globalAccets/breakbpoints';
import {fontFamily} from '../../../globalAccets/fontFamily'
import { theme } from '../../../globalAccets/theme';
import { IoMdCalendar } from 'react-icons/io';



export const TitledCard = (props) => {
    return (
        <StyledMainStat>
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.titleFooter}</p>
                </div>
                {props.showCalender && <div>
                    <IoMdCalendar/>
                    <p>View schedule</p>
                </div>}
            </div>
            {props.children}
        </StyledMainStat>
    )
}


const StyledMainStat = styled.div`
   width: 100%;
    background-color: #fff;
    border-radius: 16px;
    padding: 22px;
    margin-bottom: 20px;
    height: 100%;
    

    

    & > div:first-child{
        display: flex;
        justify-content: space-between;

        & div:first-child{
            & p{
                margin: 0px;
                font-family: ${fontFamily.body};
                font-weight: 400;
                font-size: 12px;
                color: ${theme.mutedColor};
            }

            & h2{
                margin: 0px;
                font-family: ${fontFamily.heading};
                font-weight: 500;
                font-size: 16px;
            }
        }

        & div:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${theme.secondaryColor};
            height: fit-content;

            & p{
                margin: 0px;
                margin-left: 10px;
            }
        }
    }


    @media ${device.laptop}{
         

    & > div:first-child{
        display: flex;
        justify-content: space-between;

        & div:first-child{
            & p{
                font-size: 0.85vw;

            }

            & h2{
                font-size: 1.2vw;
            }
        }
    }
       
       
    }
`