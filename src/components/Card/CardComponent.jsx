import React from 'react';
import './CardComponent.css'

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CardComponent(props) {
    
    return (
        <div className="cardComponent">
            {props.activities.map((card, i) => (
                
                <div className="card" key={i}>
                    
                    <div className="card-image">
                        <img src={`/activities/${card.activityId}/${card.thumbnail}`} alt="Header decoration" />
                    </div>
                    
                    <div className="content">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                    
                    <Link component={RouterLink}
                        to={{pathname: `/activity/${card.activityId}`}}
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