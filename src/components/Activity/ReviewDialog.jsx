import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Link, Button, TextField } from '@material-ui/core';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

import FeedbackSlider from './Slider';

import './ReviewDialog.css';

export default function ReviewDialog(props) {

    const [feelingSliderValue, setFeelingSliderValue] = React.useState(70);
    const [sliderValue, setSliderValue] = React.useState(0);
    const [userFeedback, setUserFeedback] = React.useState('');

    const handleSliderChange = (event, value) => setFeelingSliderValue(value)

    const gatherData = () => {
        const feedback = 
            {
                feeling: feelingSliderValue,
                slider: sliderValue,
                userFeedback: userFeedback
            }

        props.onSubmit(feedback)
    }

    const submitWithoutData = () => {
        const feedback = {}
        props.onSubmit(feedback)
    }

    return (
        <Dialog  onClose={submitWithoutData} open={props.open} disableEnforceFocus>
            <DialogTitle align="center" id="dialog-title">Congratulations! 🎉</DialogTitle>
            <DialogContent align="center"  className="ReviewDialogContent">
                <DialogContentText>
                    How did you feel?
                        <FeedbackSlider value={feelingSliderValue} onChange={handleSliderChange}/>
                </DialogContentText>
                <DialogContentText>
                    How would you rate this activity?
                        <br />
                    <Rate value={sliderValue} onChange={setSliderValue}/>
                </DialogContentText>
                <DialogContentText>

                    <TextField
                        fullWidth
                        align="center" 
                        id="feedbackText"
                        multiline
                        name="feedbackText"
                        label="Any notes to yourself?"
                        value={userFeedback}
                        onChange={event => setUserFeedback(event.target.value)}
                    />
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Link component={RouterLink} to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                    <Button onClick={submitWithoutData}>
                        Skip
                    </Button>
                </Link>
                <Link component={RouterLink} to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" onClick={gatherData} color="primary" type="submit">
                    Done
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    )
}