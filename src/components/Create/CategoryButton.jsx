import React from 'react';
import './CategoryButton.css';

export default function CategoryButton(props) {

    const activity = props.activities[Math.floor(Math.random()*props.activities.length)];
    const thumbnail = `/activities/${activity.activityId}/${activity.thumbnail}`

    return (
        <div className="CategoryButton" style={{ backgroundImage: `url("${thumbnail}"` }} onClick={props.onClick}>
            <div className="CategoryButtonContent" style={{ 'background': `linear-gradient(90deg, rgba(241,152,32,1) 60%, rgba(255,255,255,0) 100%)` }}>
                <h1>{props.category.icon} {props.category.title}</h1>
                <p>{props.category.description}</p>
            </div>
        </div>
    )
}