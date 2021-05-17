import React from 'react';
import './HeroList.css';

import ActivityAvatarList from './ActivityAvatarList';

export default function HeroList(props) {

    const activities = props.cards

    return (
        <div className="HeroList">
            <h1>Activities we love right now</h1>
            <div className="HeroListContent">
                <div className="ActivityAvatarList">
                    <ActivityAvatarList activities={activities} />
                </div>
                <div className="ActivityAvatarList">
                    <ActivityAvatarList activities={activities} />
                </div>
            </div>
        </div>
    )
}