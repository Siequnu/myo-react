import React from 'react';
import useSWR from 'swr'

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

import ActivityBubble from "./ActivityBubble";

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import "./Spark.css";

function Spark() {

    const override = css`display: block; margin: 0 auto;`;
    
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

    const { data } = useSWR('/activities/api/list')

    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={override} size={100} />

    return (
        <div class="Spark">
            <BubbleUI options={options} className="sparkBubbleUi">
                { data.activities.map((activity, i) => {
                    return (
                        <ActivityBubble key={i} activityId={i} title={activity.title} thumbnail={activity.thumbnail} backgroundColour={activity.background_colour} />
                    )
                })}
            </BubbleUI>
        </div>
    )

}

export default Spark;