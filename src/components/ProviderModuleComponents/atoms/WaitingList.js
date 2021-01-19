import React from 'react';
import { TitledCard } from './TitleCard';


export const WaitingList = (props) => {   
    return (
        <TitledCard  title='Wait List (09)' titleFooter='Track your patient waitlist'>
            {props.children}
        </TitledCard>
    )
}

