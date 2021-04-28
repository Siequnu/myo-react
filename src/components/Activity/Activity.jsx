import React, { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { useParams } from "react-router-dom";
import './Activity.css'

import Button from '@material-ui/core/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

function Activity(props) {
    let { activityId } = useParams();

    const [activity, setActivity] = useState(null)
    const [activityCompleted, setActivityCompleted] = useState(false)
    const [showActivityIntroduction, setShowActivityIntroduction] = useState(true)

    useEffect(() => {
        fetch('/activities/api/get').then(res => res.json()).then(data => {
            setActivity(data.activities[activityId - 1]);
        });
    }, [activityId])

    const startActivity = () => {
        setShowActivityIntroduction(false);
    }

    const finishedActivity = () => {
        setActivityCompleted(true);
    }

    if (activity === null) {
        return null;
    }

    if (showActivityIntroduction) {
        return (
            <div className="Activity">
                <div className="ActivityIntroduction">
                    <img src={'/activities/' + (activityId) + '/' + activity.thumbnail} alt="Header decoration" />
                    <h1>{activity.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: activity.description }}></p>
                    <Button variant="contained" color="primary" onClick={startActivity}>
                        Start now
                         </Button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="ActivityCarousel">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, type: 'progressbar', }}
                    onReachEnd={finishedActivity}
                >
                    {activity.pages.map((page, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={'/activities/' + (activityId) + '/' + page.thumbnail} alt="Header decoration" />
                                <h1>{page.title}</h1>
                                <p dangerouslySetInnerHTML={{ __html: page.description }}></p>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
                { activityCompleted ? (
                    <Link component={RouterLink}
                        to={{pathname: "/",}}
                        style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Done
                    </Button>
                    </Link>

                ) : null
                }
            </div >
        )
    }
}

export default Activity;