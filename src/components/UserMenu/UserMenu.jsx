import React from 'react';
import './UserMenu.css';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import UserHero from './UserHero';

import config from '../../config';

export default function UserMenu() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.activitiesListUrl)
    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="UserMenu">
            <UserHero activities={data.activities}/>              
        </div>
    )
}