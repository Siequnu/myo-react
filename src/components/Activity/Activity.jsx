import React from 'react';
import './Activity.css'

import Button from '@material-ui/core/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

class Activity extends React.Component {
    constructor() {
        super()
        this.state = {
            activityCompleted: false,
            showActivityIntroduction: true
        };
    }


    startActivity = () => {
        this.setState({ showActivityIntroduction: false })
    }

    finishedActivity = () => {
        this.setState({ activityCompleted: true })
    }

    render() {
        return (
            <div className="Activity">
                { this.state.showActivityIntroduction ? (
                    <div className="ActivityIntroduction">
                        <img src={'/static/activities/' + (this.props.activityId + 1) + '/' + this.props.activityObject.thumbnail} alt="Header decoration" />
                        <h1>{this.props.activityObject.title}</h1>
                        <p>{this.props.activityObject.description}</p>
                        <Button variant="contained" color="primary" onClick={this.startActivity}>
                            Start now
                         </Button>
                    </div>
                ) : (
                    <div className="ActivityCarousel">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true, type: 'progressbar', }}
                            onReachEnd={this.finishedActivity}
                        >
                            {this.props.activityObject.pages.map(page => {
                                return (
                                    <SwiperSlide>
                                        <img src={'/static/activities/' + (this.props.activityId + 1) + '/' + page.thumbnail} alt="Header decoration" />
                                        <h1>{page.title}</h1>
                                        <p>{page.description}</p>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                        { this.state.activityCompleted ? (
                            <Button variant="contained" color="primary" onClick={() => this.props.exitCallback()}>
                                Done
                            </Button>
                        ) : null}
                    </div>
                )}
            </div>
        )
    }
}

export default Activity;