import React from "react";
import { Button } from '@material-ui/core';

import './ActivityIntroduction.css';

export default function ActivityIntroduction(props) {
    return (
        <div className="ActivityIntroduction">
            {(props.activity.thumbnail.split('.').pop() === 'mp4') ? (
                <video src={'/activities/' + (props.activityId) + '/' + props.activity.thumbnail} alt="Header decoration" />
            ) : (
                <img src={'/activities/' + (props.activityId) + '/' + props.activity.thumbnail} alt="Header decoration" />
            )}
            <h1>{props.activity.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.activity.description }}></p>
            <Button variant="contained" color="primary" onClick={props.handleStartActivity}>
                I'm ready
                </Button>
        </div>
    )
}
