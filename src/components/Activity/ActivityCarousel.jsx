import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link, Button } from '@material-ui/core';

import './ActivityCarousel.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function ActivityIntroduction(props) {

    const [activityCompleted, setActivityCompleted] = useState(false)
    const finishedActivity = () => setActivityCompleted(true)

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
                            <img src={encodeURI('/activities/' + (props.activityId) + '/' + page.thumbnail)} alt="Header decoration" />
                            <h1>{page.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: page.description }}></p>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            {activityCompleted ?
                (
                    <Link component={RouterLink}
                        to={{ pathname: "/", }}
                        style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">Done</Button>
                    </Link>
                )
                : null
            }
        </div >
    )
}
