import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Auth.css';

import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { authenticationService } from '../../services';

import { SnackbarContext } from '../../App';

function Login(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    if (authenticationService.currentUserValue) {
        props.history.push('/');
    }


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            authenticationService.login(values.username, values.password)
                .then(
                    (user) => {
                        const { from } = props.location.state || { from: { pathname: "/" } };
                        props.history.push(from);

                        setSnackbar({
                            text: `Welcome, ${values.username}`,
                            open: true,
                            severity: 'success'
                        })
                    }
                );
        }
    });


    return (
        <div className="AuthForm">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button className="SubmitButton" color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
                <Button component={Link} to="/reset" className="ResetPasswordButton">
                    Forgot password
                </Button>
                <Button component={Link} to="/register">
                    New account
                </Button>
            </form>
        </div>
    )
}

export default withRouter(Login);