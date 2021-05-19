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

    const gatherData = () => {
        props.onSubmit()
    }

    const [feedback, setFeedback] = React.useState('');

    return (
        <Dialog  onClose={props.onClose} open={props.open} disableEnforceFocus>
            <DialogTitle align="center" id="dialog-title">Congratulations! 🎉</DialogTitle>
            <DialogContent align="center"  className="ReviewDialogContent">
                <DialogContentText>
                    How did you feel?
                        <FeedbackSlider />
                </DialogContentText>
                <DialogContentText>
                    How would you rate this activity?
                        <br />
                    <Rate />
                </DialogContentText>
                <DialogContentText>

                    <TextField
                        fullWidth
                        align="center" 
                        id="feedbackText"
                        multiline
                        name="feedbackText"
                        label="Any notes to yourself?"
                        value={feedback}
                        onChange={event => setFeedback(event.target.value)}
                    />
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Link component={RouterLink} to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                    <Button onClick={props.onClose}>
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