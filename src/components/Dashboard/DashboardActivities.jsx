import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import { ListItemAvatar, Avatar } from '@material-ui/core';

import config from '../../config';

export default function DashboardActivities() {

    const columns = [
        { field: 'activityId', headerName: 'ID', width: 70 },
        {
            field: "thumbnail",
            headerName: "Picture",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <ListItemAvatar>
                        <Avatar>
                            <img className="ShoppingListImage" src={`/activities/${params.row.activityId}/${params.value}`} alt="Product illustration" />
                        </Avatar>
                    </ListItemAvatar>
                )
            }
        },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'description', headerName: 'Description', width: 300 },
    ];


    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.activitiesListUrl, { refreshInterval: 2 })
    if (!data) return <BounceLoader color={"#10253E"} loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="DashboardActivities">

            <h1>Activities</h1>

            <div className="DataGridContainer" style={{ height: '600px' }}>
                <DataGrid
                    autoPageSize
                    rows={data.activities}
                    columns={columns}
                    pageSize={10}
                    className="ActivitiesGrid"
                />
            </div>

        </div>
    );
}