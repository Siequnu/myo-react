import React from 'react';
import './UserHero.css';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';

import Logout from '../Auth/Logout';

import config from '../../config';

export default function UserHero(props) {

    const { data } = useSWR(config.userProfileUrl)
    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    if (!props.activities) return null;
    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={bounceLoaderCss} size={100} />

    const activity = props.activities.pop()
    const thumbnail = `/activities/${activity.activityId}/${activity.thumbnail}`

    return (
        <div className="UserHero" style={{ backgroundImage: `url("${thumbnail}"` }}>
            <div className="UserHeroContent" style={{ 'background': `linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)` }}>
                
                <Logout className="UserHeroLink" />
                <h1>{data.username}</h1>
                <p><AccountCircleIcon className="Icon" /> Member since:</p>
                <p className="caption">{data.registered}</p>

                <p><LocalActivityIcon className="Icon" /> Total activities:</p>
                <p className="caption">52</p>
                <span className="stamp is-nope">Super member</span>
                
            </div>
        </div>
    )
}