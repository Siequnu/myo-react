import React from 'react';
import './OnboardingHero.css';

import Button from '@material-ui/core/Button';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export default function OnboardingHero(props) {

    return (
        <div className="OnboardingHero" style={{ backgroundImage: `url("/activities/20/Thumbnail.jpeg"` }}>
            <div className="UserHeroContent" style={{ 'background': `linear-gradient(90deg, rgba(241,152,32,1) 40%, rgba(255,255,255,0) 90%)` }}>
                
                <h2>Spark is a totally custom creativity journey, designed for you.</h2>
                <p><EmojiObjectsIcon className="Icon" /> To get started, we need to know a little bit more about you.</p>
                <Button className="OnboardingHeroButton" onClick={props.onClick}>Next</Button>
                
            </div>
        </div>
    )
}