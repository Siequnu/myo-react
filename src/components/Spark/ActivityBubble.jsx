import React from "react";

import './ActivityBubble.css'

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

export default function ActivityBubble(props) {

    const getActivityId = () => {
        return props.activityId + 1;
    }

    const fullThumbnailPath = '/activities/' + getActivityId() + '/' + props.thumbnail;
    const thumbnailUrl = "url('" + fullThumbnailPath + "')";

    return (
        <Link component={RouterLink}
            to={{
                pathname: "/activity/" + getActivityId(),
            }}
            className="ActivityBubble"
            style={{ backgroundColor: props.backgroundColour + 'd0', textDecoration: 'none' }}>
            <div className="ActivityDetails" style={{
                opacity: props.bubbleSize > 50 ? 1 : 0,
                transition: "opacity 0.1s ease",
            }}>
                <div className="ActivityThumbnail" style={{ backgroundImage: thumbnailUrl }}>
                </div>
                <h1>{props.title}</h1>
            </div>
        </Link>
    )

}