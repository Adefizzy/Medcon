import React from 'react';
import {TitledCard} from './TitleCard';

export const UpcomingEvents = (props) => {
    return (
        <TitledCard  title='Upcoming events' titleFooter='Schedule meetings and calls'>
            {props.children}
        </TitledCard>
    )
}