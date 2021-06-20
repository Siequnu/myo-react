import React from "react"
import useSWR from 'swr'
import './Create.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import FastForwardIcon from '@material-ui/icons/FastForward';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import BubbleUI from './BubbleUI';
import CategoryButton from './CategoryButton';
import CreateTabs from './CreateTabs';

import config from '../../config';

export default function Create() {

    const [currentCategory, setCurrentCategory] = React.useState(0)
    const categories = [
        {
            title: 'Quick',
            tags: 'quick',
            description: 'Fast exercises you can do in less than five minutes',
            icon: <FastForwardIcon className="Icon" />
        },
        {
            title: 'Skill',
            tags: 'skill',
            description: 'Learn new techniques to improve your creativity',
            icon: <CategoryIcon className="Icon" />
        },
        {
            title: 'Play',
            tags: 'play',
            description: 'Let your mind free and have some fun',
            icon: <EmojiNatureIcon className="Icon" />
        },
        {
            title: 'Expression',
            tags: 'expression',
            description: 'Express yourself in new ways',
            icon: <FingerprintIcon className="Icon" />
        },
        {
            title: 'Imagination',
            tags: 'quick',
            description: 'Cultivate your imagination',
            icon: <EmojiObjectsIcon className="Icon" />
        }
    ]

    const [currentTab, setCurrentTab] = React.useState(0);

    const [viewBubbles, setViewBubbles] = React.useState(false);
    const handleViewBubbles = (i) => {
        setCurrentCategory(i);
        setViewBubbles(!viewBubbles);
    };

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.activitiesListUrl)
    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="CreateContainer">
            {viewBubbles ?
                <BubbleUI category={categories[currentCategory]} activities={data.activities} handleBack={() => setViewBubbles(false)}/> 
                :
                <>
                    <CreateTabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                   
                    {categories.map((category, i) => 
                        <CategoryButton onClick={() => handleViewBubbles(i)} key={i} category={category} activities={data.activities}/>
                    )}
                </>
            }
        </div>
    )
}