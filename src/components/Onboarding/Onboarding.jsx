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
                    <p>This is the Home tab, where you can view all our activities, or you can click Spark, to start your custom creative journey.</p>
                )
            },
            {
                component: 'modal',
                intro: false,
                children: (
                    <p>The main feature of Myo is a custom curated journey of creativity exercises, that adapts and matches what you need.</p>
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
            <UserOnboarding
                story={this.story}
                isVisible={this.state.isVisible}
                onClose={this.handleClose}
            />
        )
    }
}

export default Onboarding;