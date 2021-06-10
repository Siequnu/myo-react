import React from 'react';
import { withRouter } from 'react-router-dom';

import useSWR from 'swr'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import UserOnboarding from '../UserOnboarding/UserOnboarding'
import Deck from './Deck';

import "./Spark.css";

import config from '../../config';

function Spark() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    // Check if user has completed onboarding
    var { data: onboarding, mutate } = useSWR(config.onboardingStatusUrl);
    var { data: activities } = useSWR(config.activitiesListUrl);

    if (!onboarding) return <BounceLoader color="#F19820" loading={true} css={bounceLoaderCss} size={100} />
    if (!activities) return <BounceLoader color="#F19820" loading={true} css={bounceLoaderCss} size={100} />


    if (onboarding.hasOwnProperty('error')) {
        return (
            <UserOnboarding onComplete={mutate} />
        )
    }

    return (
        <div className="Spark">
            <Deck activities={activities.activities} />
        </div>
    )

}

export default withRouter(Spark);