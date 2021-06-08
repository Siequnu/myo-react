import React from 'react';
import { withRouter } from 'react-router-dom';

import './UserOnboarding.css'
import 'animate.css'

import useSWR from 'swr'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import { List, ListItem, ListItemText, Stepper, Step, StepLabel, Button } from '@material-ui/core';

import OnboardingLoading from './OnboardingLoading';
import OnboardingHero from './OnboardingHero';

import config from '../../config';

import { postApiData } from '../../services/api.service';
import { SnackbarContext } from '../../App';

function UserOnboarding(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    // Visual state of onboarding
    const [showIntroHero, setShowIntroHero] = React.useState(true)
    const [questionsDone, setQuestionsDone] = React.useState(false)

    // Store the steps in state
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = config.onboardingSteps;

    // Store questions in state
    const questions = config.onboardingQuestions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswerIndices, setSelectedAnswerIndices] = React.useState([]);
    const [questionAnswerObject, setQuestionAnswerObject] = React.useState([]);

    // If the current question index changes, save the answer
    React.useEffect(() => {
        if (!selectedAnswerIndices.length) return

        console.log('indice changed');
        console.log(selectedAnswerIndices);

        const newQuestionAnswerObject = {
            questionIndex: currentQuestionIndex,
            question: questions[currentQuestionIndex].question,
            answer: selectedAnswerIndices
        }

        setQuestionAnswerObject ([...questionAnswerObject, newQuestionAnswerObject])
        setSelectedAnswerIndices([]);

        if (questions[currentQuestionIndex].type !== 'multiple') goToNextQuestion();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAnswerIndices]);

    const goToNextQuestion = () => {
        const nextQuestion = currentQuestionIndex + 1;
        const nextPercentage = nextQuestion * 100 / questions.length;
        const nextStep = Math.ceil(nextPercentage * steps.length / 100);
        if (currentQuestionIndex < (questions.length - 1)) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswerIndices([]);
            setActiveStep (nextStep);
        } else {
            handleSaveOnboarding(JSON.stringify(questionAnswerObject))
            setQuestionsDone(true)
        }
    }

    const handleQuestionClick = (index) => {
        setSelectedAnswerIndices([...selectedAnswerIndices, index]);
    };

    const handleSaveOnboarding = (json) => {
        postApiData('/onboarding/save', {onboarding_json: json}).then(
          response => setSnackbar({
            text: response.success || response.error,
            open: (response.error),
            severity: (response.success ? 'success' : 'error')
          })
        )
      };

    // Checks the current question index and returns a list item
    const renderQuestion = () => {
        return (
            <List component="nav" aria-label="Onboarding answers">
            {questions[currentQuestionIndex].answers.map((answer, i) =>
                <ListItem
                    selected={selectedAnswerIndices.includes(i)}
                    onClick={() => handleQuestionClick(i)}
                    button key={i}
                >
                    <ListItemText align="center" primary={answer} />
                </ListItem>
            )}
            {questions[currentQuestionIndex].type === 'multiple' ? 
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={goToNextQuestion}
                    disabled={!selectedAnswerIndices.length}>Next</Button>
                : null
            }
            </List>
        )
    }

    // ☑️ Check and redirect if user has already done onboarding
    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.onboardingStatusUrl)
    if (!data) return <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />
    if (data.hasOwnProperty('success')) props.history.push(props.onComplete);
    
    // At the start, show the onboarding intro
    if (showIntroHero) return <OnboardingHero onClick={() => setShowIntroHero(false)} />
    
    // If the questions are done, show the post-loading screen
    if (questionsDone) return <OnboardingLoading onComplete={props.onComplete}/>

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