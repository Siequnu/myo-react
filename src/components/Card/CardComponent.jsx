import React from 'react';
import './CardComponent.css'

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CardComponent(props) {
    
    const getActivityId = (iteration) => {
        return iteration + 1;
    }
    
    return (
        <div className="cardComponent">
            {props.cards.map((card, i) => (
                
                <div className="card" key={i}>
                    
                    <div className="card-image">
                        <img src={'/static/activities/' + getActivityId(i) + '/' + card.thumbnail} alt="Header decoration" />
                    </div>
                    
                    <div className="content">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                    
                    <Link component={RouterLink}
                        to={{
                            pathname: "/activity/" + getActivityId(i),
                            state: { activityId: props.activityId }
                        }}
                        className="read-more"
                        style={{ textDecoration: 'none' }}>
                       <span>Start activity <ChevronRightIcon className="chevron-right" /></span>
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default CardComponent;