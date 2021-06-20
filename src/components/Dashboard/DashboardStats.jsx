import React from 'react';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import config from '../../config';



export default function DashboardStats() {

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.activityStats, { refreshInterval: 2 })
    if (!data) return <BounceLoader color={"#10253E"} loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="DashboardStats">

            <h1>Stats</h1>

            {data.stats.map(statistic => (
                <Card style={{margin: '20px', width: '400px', display: 'inline-block'}}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {statistic.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {statistic.data}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {statistic.description}
                  </Typography>
                </CardContent>
              </Card>
            ))
            
            }

        </div>
    );
}