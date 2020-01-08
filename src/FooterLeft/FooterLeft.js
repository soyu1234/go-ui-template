import React, {useState, useEffect0} from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import {Link} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import logo from '../assets/orbit-logo-512.jpg';
import conditionsLogo from '../assets/conditions.svg';
// import LockIcon from '@material-ui/icons/Lock';
import PrivacyPolicyLogo from '../assets/collateral.svg';
import PrivacyReviewLogo from '../assets/search.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
    images: {
        width: '75px',
        height:'75px',
        '&:hover': {
            transition: 'all 1s ease-out',
            opacity:'0.6',
            cursor:'pointer',
        },
        transition:'opacity 1s'
    },
    footerGrid: {
        fontFamily:"'Acme', sans-serif",
        color:'#37474f',
        fontWeight:'550',
    }
}));

const Copyright = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{fontWeight:'500'}}>
        {'Copyright © '}
        <Link color="inherit" href={"gamedistribution.com"} >
                Game Distribution
            </Link>{' '}
            {new Date().getFullYear()}
        </Grid>
    );
}

const PrivacyPolicy = () => {
    return( 
    <Grid item>
        Privacy policy
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
            Terms & Conditions
        </Grid>
    );
}

const ReviewPrivacyTerms = () => {
    return(
        <Grid item>
            Review privacy preferences
        </Grid>
    )
}

function FooterGrid(props) {
    const { images, footerGrid } = props;
    return (
        <Grid className={footerGrid} container  direction="row" justify="center" alignItems="center">
            <Grid container justify="center" alignItems="center" direction="column" md={3} sm={6}>
                <img className={images} src={PrivacyPolicyLogo}/>
                {/* <PrivacyPolicyLogo fill="red" className={images} width={50} height={50} /> */}
                &nbsp;
                <PrivacyPolicy/>
                &nbsp;
            </Grid>
            <Grid  container justify="center" alignItems="center" direction="column" md={3} sm={6} >
                <img className={images} src={conditionsLogo}/>
                &nbsp;
                <ReviewAndTerms/>
                &nbsp;
            </Grid>

            <Grid  container justify="center" alignItems="center" direction="column" md={3} sm={6}>
                <img className={images} src={PrivacyReviewLogo}/>
                &nbsp;
                <ReviewPrivacyTerms/>
                &nbsp;
            </Grid>
            <Grid container justify="center" alignItems="center" direction="column">
                &nbsp;
                <FooterLogo/>
                <Copyright/>
                </Grid>
        </Grid>
    );
}

const FooterLeft = () => {
    const classes = useStyles();
    const { footer, images, footerGrid } = classes;
    // const {}
    return(
        <footer className={footer}>
                <FooterGrid images={images} footerGrid={footerGrid}/>
        </footer>
    )
}

export default FooterLeft;