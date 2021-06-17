import React from 'react';

import UserOnboarding from 'react-user-onboarding'
import 'react-user-onboarding/dist/index.css'

class Onboarding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: (localStorage.getItem('onboardingComplete') === null)
        }

        this.story = [
            {
                component: 'modal',
                intro: true,
                children: (
                    <p>Hey there! Welcome to Myo. As this is your first time, could we show you around?</p>
                ),
                className: 'introModal'
            },
            {
                component: 'speech-bubble',
                attachToId: 'HomeNavbarIcon',
                children: (
                    <>
                        <p>This is the <strong>Home</strong> tab, where you can view all our activities.</p> 
                        <p><strong>Spark</strong> is our custom AI creative journey.</p>
                        <p>In the <strong>Create</strong> section, you'll find our exercises, organised by theme.</p>
                    </>
                )
            },
            {
                component: 'modal',
                intro: false,
                children: (
                    <p>Spark is an AI powered creativity tutor. Once you've answered a few questions, we will design a <strong>custom</strong> creativity journey for you.</p>
                )
            },
            {
                component: 'modal',
                intro: false,
                children: (
                    <p>We regularly add more exercises. Good luck with your creativity journey!</p>
                )
            }
        ]
    }

    handleClose = () => {
        localStorage.setItem('onboardingComplete', true);
        this.setState({ isVisible: false })
    }

    render() {
        return (
            <UserOnboarding style={{color: 'black'}}
                story={this.story}
                isVisible={this.state.isVisible}
                onClose={this.handleClose}
            />
        )
    }
}

export default Onboarding;