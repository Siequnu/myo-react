import React, { useState } from "react";
import { Link as RouterLink, useParams } from 'react-router-dom';

import { Link, Button } from '@material-ui/core';

import './Activity.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';

import useSWR from 'swr'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

SwiperCore.use([Navigation, Pagination, A11y]);

function Activity() {

    let { activityId } = useParams();

    const [activityCompleted, setActivityCompleted] = useState(false)
    const [showActivityIntroduction, setShowActivityIntroduction] = useState(true)

    const startActivity = () => setShowActivityIntroduction(false)
    const finishedActivity = () => setActivityCompleted(true)

    const { data } = useSWR(`/activities/api/get/${activityId-1}`)

    const override = css`display: block; margin: 0 auto;`;
    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={override} size={100} />

    return (
        <div>
            { showActivityIntroduction ?
                (
                    <div className="Activity">
                        <div className="ActivityIntroduction">
                            <img src={'/activities/' + (activityId) + '/' + data.activity.thumbnail} alt="Header decoration" />
                            <h1>{data.activity.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: data.activity.description }}></p>
                            <Button variant="contained" color="primary" onClick={startActivity}>
                                Start now
                            </Button>
                        </div>
                    </div>
                )
                :
                (
                    <div className="ActivityCarousel">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true, type: 'progressbar', }}
                            onReachEnd={finishedActivity}
                        >
                            {data.activity.pages.map((page, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img src={encodeURI('/activities/' + (activityId) + '/' + page.thumbnail)} alt="Header decoration" />
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
        </div>
    )
}

export default Activity;