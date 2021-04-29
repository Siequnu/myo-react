import React from "react";
import { Button } from '@material-ui/core';

import './ActivityIntroduction.css';

export default function ActivityIntroduction(props) {
    return (
        <div className="ActivityIntroduction">
            <img src={'/activities/' + (props.activityId) + '/' + props.activity.thumbnail} alt="Header decoration" />
            <h1>{props.activity.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.activity.description }}></p>
            <Button variant="contained" color="primary" onClick={props.handleStartActivity}>
                Start now
                </Button>
        </div>
    )
}
