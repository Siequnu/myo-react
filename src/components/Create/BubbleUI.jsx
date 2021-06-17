import React from 'react';
import { withRouter } from 'react-router-dom';

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

import ActivityBubble from "./ActivityBubble";
import ActivityPreviewDialog from '../ActivityPreviewDialog/ActivityPreviewDialog';
import CreateHero from './CreateHero';



import "./BubbleUI.css";

function CreateBubbleUI(props) {

    const options = {
        size: 165,
        minSize: 20,
        gutter: 10,
        provideProps: true,
        numCols: 5,
        fringeWidth: 120,
        yRadius: 200,
        xRadius: 100,
        cornerRadius: 20,
        showGuides: false,
        compact: true,
        gravitation: 5
    }

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [selectedActivity, setSelectedActivity] = React.useState([])
    
    const handleClick = (i) => {
      setSelectedActivity (props.activities[i])
      setDialogOpen(true)
    }

    return (
        <>
        <CreateHero category={props.category} handleBack={props.handleBack} activities={props.activities}/>
        <ActivityPreviewDialog activity={selectedActivity} open={dialogOpen} onClose={() => setDialogOpen(false)}/>
        <BubbleUI options={options} className="CreateBubbleUi">
            {props.activities.map((activity, i) => {
                return (
                    <ActivityBubble onClick={handleClick} key={i} activityId={i} title={activity.title} thumbnail={activity.thumbnail} backgroundColour={activity.background_colour} />
                )
            })}
        </BubbleUI>
        </>
    )

}

export default withRouter(CreateBubbleUI);