import React from 'react';
import './HeroList.css';

import ActivityAvatarList from './ActivityAvatarList';

export default function HeroList(props) {
    
    // Split the array in half
    const half = Math.ceil(props.activities.length / 2);    
    const firstHalf = props.activities.splice(0, half)
    const secondHalf = props.activities.splice(-half)

    return (
        <div className="HeroList">
            <h1>{props.title}</h1>
            <div className="HeroListContent">
                <ActivityAvatarList className="ActivityAvatarList" activities={firstHalf} />
                <ActivityAvatarList className="ActivityAvatarList" activities={secondHalf} />
            </div>
        </div>
    )
}