import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import './Activity.css'

import useSWR from 'swr'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import ActivityIntroduction from './ActivityIntroduction';
import ActivityCarousel from './ActivityCarousel';
import ReviewDialog from './ReviewDialog';

import { postApiData } from '../../services/api.service';

export default function Activity() {

    let { activityId } = useParams();

    const [showActivityIntroduction, setShowActivityIntroduction] = useState(true)

    const [reviewDialogOpen, setReviewDialogOpen] = React.useState(true)
    const handleClose = () => setReviewDialogOpen (false)

    // API handlers for order deletion
    const handleSubmitFeedback = (feedback) => postApiData('/api/orders/delete', { feedback: feedback })
    
    const startActivity = () => setShowActivityIntroduction(false)
    
    const { data } = useSWR(`/activities/api/get/${activityId-1}`)

    const override = css`display: block; margin: 0 auto;`;
    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={override} size={100} />

    return (
        <div className="Activity">
            { showActivityIntroduction ?
                (
                    <ActivityIntroduction activityId={activityId} activity={data.activity} handleStartActivity={startActivity}/>
                )
                :
                (
                    <ActivityCarousel activityId={activityId} activity={data.activity}/>
                )
            }

            { reviewDialogOpen ? 
                <ReviewDialog open={reviewDialogOpen} onSubmit={handleSubmitFeedback} onClose={handleClose} />
            : null }
        </div>
    )
}