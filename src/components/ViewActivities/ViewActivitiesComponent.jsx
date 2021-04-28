import React from "react"
import useSWR from 'swr'
import './ViewActivitiesComponent.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import CardComponent from '../Card/CardComponent';
import Onboarding from '../Onboarding/Onboarding'


function ViewActivitiesComponent() {

    const override = css`display: block; margin: 0 auto;`;

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data } = useSWR('/activities/api/get', fetcher)

    if (!data) return <BounceLoader color={"#F19820"} loading={true} css={override} size={100} />

    return (
        <div className="ViewActivitiesComponent">
            <Onboarding />
            <CardComponent cards={data.activities} />
        </div>
    )
}

export default ViewActivitiesComponent;