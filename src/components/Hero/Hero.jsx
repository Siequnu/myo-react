import React from 'react';
import './Hero.css';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

export default function Hero(props) {
    const cards = props.cards

    const randIndex = Math.floor(Math.random() * cards.length)
    const activity = cards[randIndex]
    const thumbnail = `/activities/${randIndex + 1}/${cards[randIndex].thumbnail}`
    const pathname = `/activity/${randIndex + 1}`

    return (
        <div className="Hero" style={{ backgroundImage: `url("${thumbnail}"`}}>
            <div className="HeroContent" style={{'background': `linear-gradient(90deg, rgba(241,152,32,1) 35%, rgba(255,255,255,0) 64%)`}}>
                <h1>{activity.title}</h1>
                <p>{activity.description}</p>

                <Link component={RouterLink}
                    to={{
                        pathname: pathname,
                        state: { activityId: props.activityId }
                    }}
                    className="HeroLink"
                    style={{ textDecoration: 'none' }}>
                    <button className="HeroButton" >Start now</button>
                </Link>

            </div>
        </div>
    )

}