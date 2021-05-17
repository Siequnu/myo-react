import React from "react"
import useSWR from 'swr'
import './ViewActivitiesComponent.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import CardComponent from '../Card/CardComponent';
import Onboarding from '../Onboarding/Onboarding';
import Hero from '../Hero/Hero';
import HeroList from '../HeroList/HeroList';

export default function ViewActivitiesComponent() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    const { data } = useSWR('/activities/api/list')

    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />
    
    const activities = data.activities
    
    activities.map((activity, i) => activities[i].activityId = i+1)

    // Function to remove from the main array ${count} amount of items
    const getRandomActivities = (count=false) => {
        if (!count) {count = activities.length}
        return [...Array(count)].map(() => activities.splice(Math.floor(Math.random() * activities.length), 1)[0]);
    }
    
    return (
        <div className="ViewActivitiesComponent">
            <Onboarding />
            <Hero activities={getRandomActivities(1)}/>
            <HeroList activities={getRandomActivities(4)} title="Activities we love right now"/>
            <CardComponent activities={getRandomActivities(3)} />
            <Hero activities={getRandomActivities(1)}/>
            <HeroList activities={getRandomActivities(4)} title="Trending this week"/>
            <CardComponent activities={getRandomActivities(6)} />
            <Hero activities={getRandomActivities(1)}/>
            <CardComponent activities={getRandomActivities()} />
        </div>
    )
}