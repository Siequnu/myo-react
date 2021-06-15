import React from "react"
import useSWR from 'swr'
import './Create.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import config from '../../config';

export default function Create() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    const { data } = useSWR(config.activitiesListUrl)

    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

    var activities;
    const setActivities = () => {
        activities = [...data.activities]
    }
    setActivities();

    return (
        <div className="Create">
            <h1>Create</h1>
            <ButtonGroup variant="contained" size="large" color="primary">
                <Button>Draw</Button>
                <Button>Write</Button>
            </ButtonGroup>
        </div>
    )
}