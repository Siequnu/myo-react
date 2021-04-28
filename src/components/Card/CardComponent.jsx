import React from 'react';
import './CardComponent.css'

import EmojiObjectsOutlined from '@material-ui/icons/EmojiObjectsOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Badge from '@material-ui/core/Badge'

class CardComponent extends React.Component {    
    render() {
        return (
            <div className="cardComponent">
                {this.props.cards.map((card, i) => (
                    <div className="card" key={i}>
                        <div className="card-image">
                            <img src={'/static/activities/' + (i + 1) + '/' + card.thumbnail} alt="Header decoration" />
                        </div>
                        <div className="content">
                            {card.badgeNumber ? (
                                <div className="likes">
                                    <Badge badgeContent={card.badgeNumber} color="error">
                                        <EmojiObjectsOutlined />
                                    </Badge>
                                </div>
                            ) : (
                                <p></p>
                            )}
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                        <div className="read-more">
                            <span onClick={() => this.props.callback (i)}>Start activity <ChevronRightIcon className="chevron-right" /></span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CardComponent;