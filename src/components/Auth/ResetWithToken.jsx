import React from 'react';
import { withRouter, useParams } from 'react-router-dom';

import { useFormik } from 'formik';

import { Button, TextField } from '@material-ui/core';

import './Auth.css';

import { SnackbarContext } from '../../App';

import config from '../../config';

function ResetWithToken(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    const { token } = useParams();

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        //validationSchema: validationSchema,
        onSubmit: (values) => {
            // Add in the token
            values.token = token;

            // Fetch the data
            fetch(config.resetWithToken, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.hasOwnProperty('error')) {
                        throw data.error;
                    }
                    setSnackbar({
                        text: data.success,
                        open: true,
                        severity: 'success'
                    })
                    
                    // Show the login screen
                    props.history.push('/login');
                })
                .catch(function (error) {
                    setSnackbar({
                        text: error,
                        open: true,
                        severity: 'error'
                    })
                })
        },
    });

    // Display a password reset form
    return (
        <div className="AuthForm">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="New password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="contained" fullWidth type="submit">
                    Set new password
                </Button>
            </form>
        </div>
    )
}

export default withRouter(ResetWithToken)