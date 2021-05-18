import React from 'react';
import { withRouter } from 'react-router-dom';

import { authenticationService } from '../../services';

import { SnackbarContext } from '../../App';

import { Button } from '@material-ui/core';

import config from '../../config';

function Logout(props) {
    const { setSnackbar } = React.useContext(SnackbarContext);

    const handleClick = () => {

        setSnackbar({
            text: `You have logged out.`,
            open: true,
            severity: 'success'
        })

        authenticationService.logout();
        props.history.push(config.afterLogout);
    }

    return (
        <Button variant="contained" onClick={() => handleClick()}>
            Logout
        </Button>
    )
}

export default withRouter (Logout);