/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'

import { withRouter } from 'react-router-dom';

import ActivityPreviewDialog from './ActivityPreviewDialog';

const url = (name, wrap) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

var leftMargin = (window.innerWidth > 600 ? 150 : window.innerWidth / 6);
const progressiveLeftMargin = () => {
  leftMargin += (window.innerWidth > 600 ? 250 : window.innerWidth / 4);
  return leftMargin
}

const topMargins = ['30vh', '40vh', '50vh', '60vh', '65vh', '60vh', '50vh', '45vh', '40vh', '35vh', '40vh', '50vh', '60vh', '65vh', '60vh', '50vh', '40vh', '35vh', '40vh', '45vh']

const Page = ({ activities, offset, gradient, handleClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={0} speed={0} factor={3} style={{
        backgroundImage: url('stars', true),
        backgroundSize: 'cover',
      }}
    />

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={0} speed={0.3}>
      <span>Spark</span>
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.description}`} offset={0} speed={0.3}>
      <p>Your personalised creative journey</p>
    </ParallaxLayer>

    <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 0.2 }}>
      <img src={url('cloud')} style={{ display: 'block', width: '10%', marginBottom: '34%' }} />
      <img src={url('cloud')} style={{ display: 'block', width: '20%', marginBottom: '50%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.7} speed={-0.1} style={{ opacity: 0.4 }}>
      <img src={url('cloud')} style={{ display: 'block', width: '20%', marginBottom: '26%' }} /> 
    </ParallaxLayer>

    <ParallaxLayer offset={1.5} speed={0.4} style={{ opacity: 0.6 }}>
      <img src={url('cloud')} style={{ display: 'block', width: '20%', marginBottom: '30%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={2.0} speed={0.4} style={{ opacity: 1}}>
      <h1>“Every child is an artist. The problem is how to remain an artist once he grows up.” </h1>
    </ParallaxLayer>
    
    <ParallaxLayer offset={2.0} speed={0.4} style={{ opacity: 0.6 }}>
      <p>- Pablo Picasso</p>
    </ParallaxLayer>

    {activities.map((activity, i) => (
      (offset === 0 ?

        <ParallaxLayer 
          key={i} 
          className={`${styles.activityIcon}`} 
          style={{ marginTop: topMargins[i], marginLeft: progressiveLeftMargin() , backgroundImage: `url("/activities/${activity.activityId}/${activity.thumbnail}"` }} 
          offset={0} speed={1} 
          onClick={() => handleClick(i)}>
            <span></span>
        </ParallaxLayer>
        : null
      )
    ))}

  </>
)

function ParallaxView(props) {

  const activities = props.activities
  
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState([])
  
  const handleClick = (i) => {
    setSelectedActivity (activities[i])
    setDialogOpen(true)
  }

  // Reset left margin if we are not refreshing the page
  leftMargin = (window.innerWidth > 600 ? 150 : window.innerWidth / 6);

  const parallax = useRef(null)

  return (
    <div style={{ background: '#dfdfdf' }}>
      <ActivityPreviewDialog activity={selectedActivity} open={dialogOpen} onClose={() => setDialogOpen(false)}/>

      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <Page handleClick={handleClick} activities={activities} offset={0} gradient="pink" />
        <Page handleClick={handleClick} activities={activities} offset={1} gradient="teal" />
        <Page handleClick={handleClick} activities={activities} offset={2} gradient="tomato" />
      </Parallax>
    </div>
  )
}

export default withRouter(ParallaxView)