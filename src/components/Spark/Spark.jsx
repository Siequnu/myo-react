import React from 'react';

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

import ActivityBubble from "./ActivityBubble";

import "./Spark.css";

class Spark extends React.Component {
    constructor(props) {
        super(props);

        this.options = {
            size: 165,
            minSize: 20,
            gutter: 10,
            provideProps: true,
            numCols: 5,
            fringeWidth: 120,
            yRadius: 200,
            xRadius: 100,
            cornerRadius: 50,
            showGuides: false,
            compact: true,
            gravitation: 5
        }

        this.state = {
            activities: [],
        }

    }

    componentDidMount() {
        this.getActivities();
    }


    getActivities = () => {
        fetch('/activities/api/get').then(res => res.json()).then(data => {
            this.setState({ activities: data.activities });
        })
    }

    render() {
        return (
            <BubbleUI options={this.options} className="sparkBubbleUi">
                { this.state.activities.map((activity, i) => {
                    return (
                        <ActivityBubble key={i} activityId={i} title={activity.title} thumbnail={activity.thumbnail}/>
                    )
                })}
            </BubbleUI>
        )
    }
}

export default Spark;