import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs(props) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setCurrentTab(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={props.currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="My account" />
                <Tab label="Awards" />
            </Tabs>
        </Paper>
    );
}