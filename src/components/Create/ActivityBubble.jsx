import React from "react";

import './ActivityBubble.css'

export default function ActivityBubble(props) {

    const getActivityId = () => {
        return props.activityId + 1;
    }

    const fullThumbnailPath = '/activities/' + getActivityId() + '/' + props.thumbnail;
    const thumbnailUrl = "url('" + fullThumbnailPath + "')";

    return (
        <div
            className="ActivityBubble"
            style={{ backgroundColor: props.backgroundColour + 'd0', textDecoration: 'none' }}
            onClick={() => props.onClick(props.activityId)}
        >
            <div className="ActivityDetails" style={{
                opacity: props.bubbleSize > 50 ? 1 : 0,
                transition: "opacity 0.1s ease",
            }}>
                <div className="ActivityThumbnail" style={{ backgroundImage: thumbnailUrl }}>
                </div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )

}