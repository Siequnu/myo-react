import React, { useEffect, useState } from "react";
import { prominent } from 'color.js'

import './ActivityBubble.css'

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

function ActivityBubble(props) {

    const getActivityId = () => {
        return props.activityId + 1;
    }

    const fullThumbnailPath = '/static/activities/' + getActivityId() + '/' + props.thumbnail;
    const thumbnailUrl = "url('" + fullThumbnailPath + "')";

    const [backgroundColour, setBackgroundColour] = useState('#eee')

    useEffect(() => {
        getProminentColour(fullThumbnailPath);
    }, [fullThumbnailPath])

    const getProminentColour = (image) => {
        prominent(image, { amount: 1, format: 'hex', sample: 12000 }).then(colour => {
            setBackgroundColour(colour + 'd0');
        })
    }

    return (
        <Link component={RouterLink}
            to={{
                pathname: "/activity/" + getActivityId(),
            }}
            className="ActivityBubble"
            style={{ backgroundColor: backgroundColour, textDecoration: 'none' }}>
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

export default ActivityBubble;