import React, {useState, useEffect0} from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import {Link} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import logo from '../assets/orbit-logo-512.jpg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
}));

const Copyright = () => {
    return (
        <Grid item>
        {'Copyright © '}
        <Link color="inherit" href={"gamedistribution.com"}>
                Game Distribution
            </Link>{' '}
            {new Date().getFullYear()}
        </Grid>
    );
}

const PrivacyPolicy = () => {
    return(
        <Grid item>
        &nbsp;|&nbsp; Privacy policy &nbsp;
        </Grid>
    );
}

const FooterLogo = () => {
    return (
        <Grid item>
        <img src={logo} width="64" height="64"/>
        </Grid>
    );
}

const ReviewAndTerms = () => {
    return(
        <Grid item>
        &nbsp;Review privacy preferences &nbsp;-&nbsp; Terms & conditions
        </Grid>
    );
}

function FooterGrid(props) {
    return (
        <Grid style={{color:'rgba(0, 0, 0, 0.54)', fontFamily:'Open Sans, sans-serif'}} container  direction="row" justify="center" alignItems="center">
            <Copyright/>
            <PrivacyPolicy/>
            <FooterLogo/>
            <ReviewAndTerms/>
        </Grid>
    );
}

const Footer = () => {
    const classes = useStyles();
    const { footer } = classes;
    // const {}
    return(
        <footer className={footer}>
                <FooterGrid/>
        </footer>
    )
}

export default Footer;