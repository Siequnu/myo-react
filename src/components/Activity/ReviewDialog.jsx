import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

import FeedbackSlider from './Slider';

import { Button } from '@material-ui/core';

import './ReviewDialog.css';

export default function ReviewDialog(props) {

    const gatherData = () => {
        props.onSubmit()
    }

    return (
        <Dialog onClose={props.onClose} open={props.open}>
                <DialogTitle id="dialog-title">Congratulations! 🎉</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        How did you feel?
                        <FeedbackSlider />
                    </DialogContentText>
                    <DialogContentText>
                        How would you rate this activity?
                        <br />
                        <Rate />
                    </DialogContentText>

                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>
                        Skip
                     </Button>
                    <Button variant="contained" onClick={gatherData}color="primary" type="submit">
                        Done
                    </Button>
                </DialogActions>
        </Dialog>
    )
}