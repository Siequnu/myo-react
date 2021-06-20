import React from "react"
import { Redirect } from 'react-router-dom';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import config from '../../config';

import DashboardTabs from './DashboardTabs';
import MemoizedDashboardActivities from './DashboardActivities';
import MemoizedUserList from './DashboardUsers';
import DashboardStats from './DashboardStats';

export default function Dashboard(props) {

    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabContent, setCurrentTabContent] = React.useState(null)

    React.useEffect(() => {
        const tabContent = () => {
            switch (currentTab) {
                case 0:
                    return <MemoizedDashboardActivities />
                case 1:
                    return <DashboardStats />
                case 2:
                    return <MemoizedUserList />
                default:
                    return <MemoizedDashboardActivities />
            }
        }
        setCurrentTabContent (tabContent)
    }, [currentTab])
    
    const { data: isAdmin } = useSWR(config.getRoles)
    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    if (!isAdmin) return <BounceLoader color={"#F19820"} loading={true} css={bounceLoaderCss} size={100} />

    if (!isAdmin.admin) {
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }

    return (
        <div style={{height: '-webkit-fill-available', padding: '15px'}}>
            <DashboardTabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {currentTabContent}
        </div>
    )
}