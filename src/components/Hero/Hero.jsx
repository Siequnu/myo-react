import React from 'react';
import './Hero.css';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

export default function Hero(props) {

    const activity = props.activities[Math.floor(Math.random()*props.activities.length)];

    const thumbnail = `/activities/${activity.activityId}/${activity.thumbnail}`
    const pathname = `/activity/${activity.activityId}`

    return (
        <div className="Hero" style={{ backgroundImage: `url("${thumbnail}"`}}>
            <div className="HeroContent" style={{'background': `linear-gradient(90deg, rgba(241,152,32,1) 35%, rgba(255,255,255,0) 64%)`}}>
                <h1>{activity.title}</h1>
                <p>{activity.description}</p>

                <Link component={RouterLink}
                    to={{
                        pathname: pathname,
                        state: { activityId: activity.activityId }
                    }}
                    className="HeroLink"
                    style={{ textDecoration: 'none' }}>
                    <button className="HeroButton" >Start now</button>
                </Link>

            </div>
        </div>
    )
}