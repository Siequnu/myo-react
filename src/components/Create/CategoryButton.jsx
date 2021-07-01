import React from 'react';
import './CategoryButton.css';

export default function CategoryButton(props) {

    const activity = props.activities[Math.floor(Math.random()*props.activities.length)];
    const thumbnail = `/activities/${activity.activityId}/${activity.thumbnail}`

    return (
        <div className="CategoryButton" style={{ backgroundImage: `url("${thumbnail}"` }} onClick={props.onClick}>
            <div className="CategoryButtonContent" style={{ 'background': `linear-gradient(90deg,  rgba(241,152,32,0) 0%, rgba(0,0,0,1) 100%)` }}>
                <h1 style={{'mix-blend-mode': 'color-dodge'}}>{props.category.icon} {props.category.title}</h1>
                <p style={{'mix-blend-mode': 'color-dodge'}}>{props.category.description}</p>
            </div>
        </div>
    )
}