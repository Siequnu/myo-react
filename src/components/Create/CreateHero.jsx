import React from 'react';
import './CreateHero.css';

import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function CreateHero(props) {

    const activity = props.activities[Math.floor(Math.random()*props.activities.length)];
    const thumbnail = `/activities/${activity.activityId}/${activity.thumbnail}`

    return (
        <div className="CreateHero" style={{ backgroundImage: `url("${thumbnail}"` }}>
            <div className="CreateHeroContent" style={{ 'background': `linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)` }}>
                <Fab style={{float: 'left', margin: '12.5px'}} variant="extended" onClick={props.handleBack}><ChevronLeftIcon /> Back</Fab>
                <h1>{props.category.title}</h1>
                <p>{props.category.icon} {props.category.description}</p>
            </div>
        </div>
    )
}