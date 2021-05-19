import React, { useState } from "react";
import { Button } from '@material-ui/core';

import './ActivityCarousel.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';

import ReviewDialog from './ReviewDialog';

import { postApiData } from '../../services/api.service';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function ActivityCarousel(props) {

    const [reviewDialogOpen, setReviewDialogOpen] = React.useState(false)
    const handleClose = () => setReviewDialogOpen (false)

    const [activityCompleted, setActivityCompleted] = useState(false)
    const finishedActivity = () => setActivityCompleted(true)

    // API handlers for order deletion
    const handleSubmitFeedback = (feedback) => {
        setReviewDialogOpen(false)
        postApiData('/api/orders/delete', { feedback: feedback })
    }

    return (
        <div className="ActivityCarousel">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, type: 'progressbar', }}
                onReachEnd={finishedActivity}
            >
                {props.activity.pages.map((page, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {(page.thumbnail.split('.').pop() === 'mp4') ? (
                                <video className="ActivityVideo" autoPlay muted loop playsInline controls >
                                    <source src={`/activities/${props.activityId}/${page.thumbnail}`} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={encodeURI('/activities/' + (props.activityId) + '/' + page.thumbnail)} alt="Header decoration" />
                            )}
                            
                            <div className="text">
                                <h1>{page.title}</h1>
                                <p dangerouslySetInnerHTML={{ __html: page.description }}></p>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            {activityCompleted ? (
                    <Button variant="contained" onClick={() => setReviewDialogOpen(true)} color="primary">Finish</Button>
            ) : null
            }

            { reviewDialogOpen ? 
                <ReviewDialog open={reviewDialogOpen} onSubmit={handleSubmitFeedback} onClose={handleClose} />
            : null }
        </div >
    )
}
