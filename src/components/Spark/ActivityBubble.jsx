import React from 'react';
import { prominent } from 'color.js'

import './ActivityBubble.css'

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

class ActivityBubble extends React.Component {

    constructor(props) {
        super(props);
        this.fullThumbnailPath = '/static/activities/' + (this.props.activityId + 1) + '/' + this.props.thumbnail;
        this.thumbnailUrl = "url('" + this.fullThumbnailPath + "')";
        this.state = {
            backgroundColour: '#eee',
        }
    }

    componentDidMount() {
        this.getProminentColour(this.fullThumbnailPath);
    }

    getProminentColour(image) {
        prominent(image, { amount: 1, format: 'hex', sample: 9000 }).then(colour => {
            this.setState({ backgroundColour: colour + 'd0' });
        })
    }

    render() {
        return (
            <Link component={RouterLink}
                to={{
                    pathname: "/activities",
                    state: { activityId: this.props.activityId }
                }}
                className="ActivityBubble"
                style={{ backgroundColor: this.state.backgroundColour, textDecoration: 'none' }}>
                <div className="ActivityDetails" style={{
                    opacity: this.props.bubbleSize > 50 ? 1 : 0,
                    transition: "opacity 0.1s ease",
                }}>
                    <div className="ActivityThumbnail" style={{ backgroundImage: this.thumbnailUrl }}>
                    </div>
                    <h1>{this.props.title}</h1>
                </div>
            </Link>
        )
    }
}

export default ActivityBubble;