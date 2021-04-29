import React from "react"
import useSWR from 'swr'
import './ViewActivitiesComponent.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import CardComponent from '../Card/CardComponent';
import Onboarding from '../Onboarding/Onboarding'


export default function ViewActivitiesComponent() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    const { data } = useSWR('/activities/api/list')

    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="ViewActivitiesComponent">
            <Onboarding />
            <CardComponent cards={data.activities} />
        </div>
    )
}