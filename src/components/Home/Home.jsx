/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { withRouter } from 'react-router-dom';

import PhotoDividerComponent from '../PhotoDivider/PhotoDividerComponent';

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import config from '../../config';

import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { Link, Element } from 'react-scroll'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BrushIcon from '@material-ui/icons/Brush';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import './Home.css';

function Home() {


  const bounceLoaderCss = css`display: block; margin: 0 auto;`;
  const { data } = useSWR(config.activitiesListUrl)
  if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

  const getRandomThumbnail = () => {
    const activity = data.activities[Math.floor(Math.random() * data.activities.length)];
    return `/activities/${activity.activityId}/${activity.thumbnail}`

  }

  return (
    <>
      <h1>Myo</h1>
      <p>AI-powered creativity tutor in your pocket</p>
      <img src="/assets/myo-mockup.png" alt="Mockup of Myo on Mac, iPad and iPhone" style={{width: '100%'}}/>
      <Link
        activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500} style={{margin: '100px', display: 'block'}} >
        <Button size="Large" variant="contained" endIcon={<KeyboardArrowDownIcon />}> Learn more </Button>
      </Link>
      
      <PhotoDividerComponent thumbnail={getRandomThumbnail()} style={{margin: '200px', display: 'block'}}/>
      
      <Element name="about" className="element">
        <div class="secondary-text">
          <h2>Powerful tutor, fun exercises</h2>
          <p>Myo helps you improve your creativity, with daily exercises.</p>
          <div class="icon-grid">
            <div class="icon-grid-item">
              <AccountCircleIcon className="icon" />
              <p>Custom plan made uniquely for you</p>
            </div>
            <div class="icon-grid-item">
              <BrushIcon className="icon" />
              <p>Get better at writing, painting, and drawing</p>
            </div>
            <div class="icon-grid-item">
              <ColorLensIcon className="icon" />
              <p>Future-proof your career with transferrable skills</p>
            </div>
            <div class="icon-grid-item">
              <EmojiEmotionsIcon className="icon" />
              <p>Boost your mental health with colourful exercises</p>
            </div>
          </div>
        </div>
      </Element>

      <PhotoDividerComponent thumbnail={getRandomThumbnail()} style={{margin: '200px', display: 'block'}}/>

      <Element name="who" className="element">
        <div class="secondary-text">
          <h2>What is Myo, and who is it for?</h2>
          <p style={{padding: '0 50px'}}>It's a app for learning how to draw, write, and paint. It’s for anyone who is interested in quickly and dramatically improving their creativity.</p>
        </div>
      </Element>


    </>
  )
}

export default withRouter(Home)