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

    if (!props.activities) return null

    props.activities.map((activity, i) => props.activities[i].id = i + 1)

    const pickRandom = (count = 3) => {
        let _arr = [...props.activities];
        return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
    }

    const getThumbnail = (thumbnail, itemId) => {
        return `/activities/${itemId}/${thumbnail}`
    }

    return (
        <Grid item>
            <div>
                <List dense={false}>
                    {pickRandom().map((item, i) => (
                        <div key={i}>
                            <Link component={RouterLink}
                                to={{ pathname: `/activity/${item.id}` }}
                                style={{ textDecoration: 'none', color: '#333' }}>

                                <ListItem className="ListItem" >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img className="ShoppingListImage" src={getThumbnail(item.thumbnail, item.id)} alt="Activity illustration" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={item.description}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end">
                                            <NavigateNextIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Link>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </div>
        </Grid>


    );
}
