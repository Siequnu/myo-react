import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import './Activity.css'

import useSWR from 'swr'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import ActivityIntroduction from './ActivityIntroduction';
import ActivityCarousel from './ActivityCarousel';

import config from '../../config';

export default function Activity(props) {

    let { activityId } = useParams();

    const [showActivityIntroduction, setShowActivityIntroduction] = useState(true)
    
    const startActivity = () => setShowActivityIntroduction(false)
    
    const { data } = useSWR(`${config.activityGetUrl}${activityId-1}`)

    const override = css`display: block; margin: 0 auto;`;
    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={override} size={100} />

    return (
        <div className="Activity">
            { showActivityIntroduction && !props.skipIntro ?
                (
                    <ActivityIntroduction activityId={activityId} activity={data.activity} handleStartActivity={startActivity}/>
                )
                :
                (
                    <ActivityCarousel activityId={activityId} activity={data.activity}/>
                )
            }  
        </div>
    )
}