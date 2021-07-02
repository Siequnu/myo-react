import React from 'react';
import './PhotoDividerComponent.css';

export default function PhotoDividerComponent(props) {
    return (
        <div className="PhotoDividerComponent" style={{backgroundImage: `url("${props.thumbnail}"`}}></div>
    )
}