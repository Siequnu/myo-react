import React from 'react';
import { withRouter } from 'react-router-dom';

import './OnboardingLoading.css'
import 'animate.css'

import Goo from 'gooey-react'

import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

function OnboardingLoading(props) {

    const [loadingDone, setLoadingDone] = React.useState(false);
    
    const [progress, setProgress] = React.useState(0);
    const [text, setText] = React.useState('')

    const titles = [
        'Myo is AI creativity in your pocket',
        `Right now, we're analysing the experience of 35,892 users`,
        'To make sure your plan fits you perfectly',
        'Your personalised creativity plan is almost ready. Are you?'
    ]

    const getText = (percent) => {
        const titleIndex = Math.floor(percent * titles.length / 100)
        return titles[titleIndex]
    }
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setLoadingDone(true)
                }
                const diff = Math.random() * 6;
                const newProgress =  Math.min(oldProgress + diff, 100);
                
                if (newProgress > 95) {
                    setLoadingDone(true)
                }
                
                setText(getText(newProgress));
                return newProgress;
            });
            }, 500);

            return () => {
                clearInterval(timer);
            };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingDone) {
        return (
            <div>
                <h2 className="animate__animated animate__backInDown">Your custom training plan is ready</h2>
                <Button 
                    style={{ animation: 'pulse 3s ease infinite', 'margin': '20px 0' }} 
                    className="StartButton animate__animated animate__fadeIn animate__delay-1s"
                    variant="contained" size="large" color="primary" 
                    onClick={()=> props.history.push(props.onComplete)}
                >
                Let's go
                </Button>
            </div>
        )
    }

    return (
        <div style={{'margin': '0 20px'}}>
            <h3 className="animate__animated animate__backInDown animate__delay-1s" >{text}</h3>
            <LinearProgress className="animate__animated animate__fadeIn" variant="determinate" value={progress} />
            
            <Goo className="animate__animated animate__fadeIn goo" intensity="strong"> 
                <svg width="500" height="500">
                    <circle cx="29%" cy="50%" fill="sandybrown" r="49" style={{ animation: 'right 3s ease infinite' }} />
                    <circle cx="44%" cy="34%" fill="palevioletred" r="23" style={{ animation: 'left 7s linear infinite' }} />
                    <circle cx="34%" cy="74%" fill="orchid" r="59" style={{ animation: 'left 4s linear infinite' }} />
                    <circle cx="56%" cy="59%" fill="mediumorchid" r="46" style={{ animation: 'right 5s ease infinite' }} />
                </svg>
            </Goo>
        </div>
    )
}

export default withRouter(OnboardingLoading);