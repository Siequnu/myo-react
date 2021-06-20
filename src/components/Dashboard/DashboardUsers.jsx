import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import config from '../../config';

export default function DashboardUsers() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'registered', headerName: 'Registered', width: 300 },
        { field: 'last_seen', headerName: 'Last seen', width: 300 },
    ];


    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.getUsers, { refreshInterval: 2 })
    if (!data) return <BounceLoader color={"#10253E"} loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="DashboardUsers">

            <h1>Users</h1>

            <div className="DataGridContainer" style={{ height: '600px' }}>
                <DataGrid
                    autoPageSize
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    className="UsersGrid"
                />
            </div>

        </div>
    );
}