import React from 'react';
import { withRouter, useParams } from 'react-router-dom';

import { authenticationService } from '../../services';

import { SnackbarContext } from '../../App';

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

function ConfirmEmail(props) {

    const { setSnackbar } = React.useContext(SnackbarContext);

    const { token } = useParams();
     
    authenticationService.confirmEmail(token)
        .then((result) => {
            const message = ( result ? `Your email has been confirmed. You can now log-in.` : `We could not confirm your email.`)
            setSnackbar({
                text: message,
                open: true,
                severity: ( result ? 'success' : 'error')
            })  
            props.history.push('/login');    
        })

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;

    return (
        <BounceLoader color='#F19820' loading={true} css={bounceLoaderCss} size={100} />
    )
}

export default withRouter(ConfirmEmail);