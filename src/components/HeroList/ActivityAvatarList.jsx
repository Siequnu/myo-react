import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import './ActivityAvatarList.css';

export default function ActivityAvatarList(props) {

    const getThumbnail = (thumbnail, itemId) => `/activities/${itemId}/${thumbnail}`

    return (
        <Grid item>
            <List dense={false}>
                {props.activities.map((activity, i) => (
                    <Link 
                        key={i} 
                        component={RouterLink}
                        to={{ pathname: `/activity/${activity.activityId}` }}
                        style={{ textDecoration: 'none', color: '#333' }}
                    >
                        <ListItem className="ListItem" >
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={getThumbnail(activity.thumbnail, activity.activityId)} alt="Activity illustration" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={activity.title}
                                secondary={activity.description}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end">
                                    <NavigateNextIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        
                        <Divider variant="inset" component="li" />
                    </Link>
                ))}
            </List>
        </Grid>
    );
}
