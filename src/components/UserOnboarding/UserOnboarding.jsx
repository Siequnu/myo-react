import React from 'react';
import { withRouter } from 'react-router-dom';

import './UserOnboarding.css'
import 'animate.css'

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import OnboardingLoading from './OnboardingLoading';
import OnboardingHero from './OnboardingHero';


function UserOnboarding(props) {

    const [showIntroHero, setShowIntroHero] = React.useState(true)
    const [questionsDone, setQuestionsDone] = React.useState(false)
    
    function getSteps() {
        return ['About yourself', 'You and art', 'Final details'];
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const questions = [
        {
            question: "What kind of creative activity are you most interested in?",
            answers:[
                "Drawing",
                "Writing",
                "Painting",
                "Crafts",
                "Photography"
            ]
        },
        {
            question: "What would you like to use Myo for?",
            answers :[
                "To relax",
                "To learn new skills",
                "To use my imagination",
                "To better express myself",
                "To discover new arts"
            ]
        },
        {
            question: "What would you like Myo to offer?",
            answers: [
                "Breadth of activities",
                "In depth skill building",
                "Global perspectives",
                "Interaction with artists & users"
            ]
        },
        {
            question: "What skills are you most interested in developing?",
            answers: [
                "Imagination",
                "Persistence",
                "Discipline",
                "Inquisitiveness",
                "Collaboration"
            ]
        },
        {
            question: "Generally, how often do you engage in creative activities?",
            answers: [
                "Everyday",
                "Two or three times a week",
                "Once every now and again",
                "Never!"
            ]
        },
        {
            question: "How often would you like to engage in creative activities?",
            answers: [
                "Everyday",
                "Two or three times a week",
                "Once every now and again",
                "Never!"
            ]
        },
        {
            question: "For how long?",
            answers: [
                "No more than 5mins at a time",
                "5mins to 10mins",
                "10mins to 20mins",
                "20mins to 40mins",
                "Sky’s the limit!"
            ]
        },
        {
            question: "How ‘experienced’ do you think you are?",
            answers: [
                "Complete beginner",
                "Want to take it easy",
                "I like a challenge!",
                "Experience grrrr!!"
            ]
        },
        {
            question:"What materials do you have access to?",
            answers: [
                "Pens and paper only",
                "Own some pencils",
                "Watercolour paints",
                "Acrylic paints",
                "General arts & crafts stuff",
                "Camera (phone will do)"
            ],
            type: 'multiple'
        }
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswerIndices, setSelectedAnswerIndices] = React.useState([]);
    const [questionAnswerObject, setQuestionAnswerObject] = React.useState([]);

    React.useEffect(() => {
        const newQuestionAnswerObject = {
            questionIndex: currentQuestionIndex,
            question: questions[currentQuestionIndex].question,
            answer: selectedAnswerIndices
        }
        setQuestionAnswerObject ([...questionAnswerObject, newQuestionAnswerObject])
        setSelectedAnswerIndices([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestionIndex]);

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR('/auth/onboarding')
    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />

    // Redirect if we have already done onboarding
    if (data.hasOwnProperty('success')) props.history.push('/');

    const handleQuestionClick = (event, index) => {
        setSelectedAnswerIndices([...selectedAnswerIndices], index);
        nextQuestion();
    };

    const nextQuestion = () => {
        setTimeout(() => {
            if (currentQuestionIndex < (questions.length - 1)) {
                const nextQuestion = currentQuestionIndex + 1;

                const nextPercentage = nextQuestion * 100 / questions.length;
                const nextStep = Math.ceil(nextPercentage * getSteps().length / 100);

                setCurrentQuestionIndex(nextQuestion);
                setSelectedAnswerIndices([]);
                setActiveStep (nextStep);
            } else {
                console.log(questionAnswerObject)
                setQuestionsDone(true)
            }
        }, 500);
    }

    const renderQuestion = (question) => {
        if (question.hasOwnProperty('answers')) {
            return (
                <List component="nav" aria-label="Onboarding answers">
                {questions[currentQuestionIndex].answers.map((answer, i) =>
                    <ListItem
                        selected={selectedAnswerIndices.includes(i)}
                        onClick={(event) => handleQuestionClick(event, i)}
                        button
                        key={i}
                    >
                        <ListItemText align="center" primary={answer} />
                    </ListItem>
                )}
                </List>
            )
        }
    }

    if (showIntroHero) {
        return (
            <OnboardingHero onClick={() => setShowIntroHero(false)} />
        )
    }
    
    if (questionsDone) {
        return (
            <OnboardingLoading />
        )
    }

    return (
        <div className="UserOnboarding">
            <Stepper activeStep={activeStep} alternativeLabel style={{'backgroundColor': 'transparent'}}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <h2>{questions[currentQuestionIndex].question}</h2>

            {renderQuestion(questions[currentQuestionIndex])}
        </div>
    )
}

export default withRouter(UserOnboarding);