import React, { useState, useEffect } from "react";
import { makeStyles, Container, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
import conditionsLogoDark from "../assets/conditions.svg";
import conditionsLogoLight from "../assets/conditions-light.svg";
import PrivacyPolicyLogoDark from "../assets/collateral.svg";
import PrivacyPolicyLogoLight from "../assets/collateral-light.svg";
import PrivacyReviewLogoDark from "../assets/search.svg";
import PrivacyReviewLogoLight from "../assets/search-light.svg";
import { Samy, SvgProxy } from "react-samy-svg";

import "./footerLeft.css";

//#1F1A24
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330",
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(6, 0),
    color: theme.palette.type === "light" ? "#37474f" : "#5F9CA6"
  },
  images: {
    [theme.breakpoints.down("md")]: {
      width: "50px",
      height: "50px"
    },
    [theme.breakpoints.up("md")]: {
      width: "60px",
      height: "60px"
    }
  },
  footerGrid: {
    fontWeight: "550",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px"
    }
  },
  footerLogo: {
    [theme.breakpoints.down("md")]: {
      width: "45px",
      height: "45px"
    },
    [theme.breakpoints.up("md")]: {
      width: "64px",
      height: "64px"
    }
  }
}));

const Copyright = props => {
  const { website, url } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ fontWeight: "500" }}
    >
      {"Copyright ©"} &nbsp;
      <Link color="inherit" href={url} target="_blank" rel="noopener">
        {website}
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Grid>
  );
};

const PrivacyPolicy = props => {
  const classes = useStyles();
  const { content } = classes;
  const { privacyUrl } = props;
  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        className="content"
        href={privacyUrl}
        target="_blank"
        rel="noopener"
      >
        Privacy policy
      </Link>
    </Grid>
  );
};

const FooterLogo = props => {
  const theme = useTheme();
  const { footerLogo } = props;
  return (
    <Grid item>
      <img
        className={footerLogo}
        src={
          theme.palette.type === "light"
            ? "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-512.png"
            : "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-light.png"
        }
      />
    </Grid>
  );
};

const ReviewAndTerms = props => {
  const { termsAndConditionsUrl } = props;
  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        className="content"
        href={termsAndConditionsUrl}
        target="_blank"
        rel="noopener"
      >
        Terms & Conditions
      </Link>
    </Grid>
  );
};

const ReviewPrivacyTerms = () => {
  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        className="content"
        href="#"
      >
        Review privacy preferences
      </Link>
    </Grid>
  );
};

function FooterGrid(props) {
  const theme = useTheme();
  const {
    images,
    footerGrid,
    website,
    title,
    url,
    footerLogo,
    privacyUrl,
    termsAndConditionsUrl
  } = props;
  return (
    <Grid
      className={footerGrid}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        item
        md={3}
        sm={6}
      >
        <img
          src={
            theme.palette.type === "light"
              ? PrivacyPolicyLogoDark
              : PrivacyPolicyLogoLight
          }
          alt="privacy-policy"
          className={images}
        />
        &nbsp;
        <PrivacyPolicy privacyUrl={privacyUrl} />
        &nbsp;
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        item
        md={3}
        sm={6}
      >
        <img
          src={
            theme.palette.type === "light"
              ? conditionsLogoDark
              : conditionsLogoLight
          }
          alt="privacy-policy"
          className={images}
        />
        &nbsp;
        <ReviewAndTerms termsAndConditionsUrl={termsAndConditionsUrl} />
        &nbsp;
      </Grid>

      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        item
        md={3}
        sm={6}
      >
        <img
          src={
            theme.palette.type === "light"
              ? PrivacyReviewLogoDark
              : PrivacyReviewLogoLight
          }
          alt="privacy-policy"
          className={images}
        />
        &nbsp;
        <ReviewPrivacyTerms />
        &nbsp;
      </Grid>
      <Grid container justify="center" alignItems="center" direction="column">
        &nbsp;
        <FooterLogo footerLogo={footerLogo} />
        <Copyright website={website} url={url} />
      </Grid>
    </Grid>
  );
}

export default function FooterLeft(props) {
  const classes = useStyles();
  const { footer, images, footerGrid, footerLogo } = classes;
  const { website, url, privacyUrl, termsAndConditionsUrl } = props;
  return (
    <footer className={footer}>
      <FooterGrid
        images={images}
        footerGrid={footerGrid}
        website={website}
        url={url}
        footerLogo={footerLogo}
        privacyUrl={privacyUrl}
        termsAndConditionsUrl={termsAndConditionsUrl}
      />
    </footer>
  );
}
