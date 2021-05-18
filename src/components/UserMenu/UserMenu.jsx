import React from 'react';
import './UserMenu.css';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import UserHero from './UserHero';

export default function UserMenu() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR('/activities/api/list')
    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

    var activities=[...data.activities]
    activities.map((activity, i) => activities[i].activityId = i+1)

    return (
        <div className="UserMenu">
            <UserHero activities={activities}/>              
        </div>
    )
}