import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";

//#1F1A24
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#212121",
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1, 0),
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
      width: "30px",
      height: "30px"
    },
    [theme.breakpoints.up("md")]: {
      width: "30px",
      height: "30px"
    }
  },
  content: {
    position: "relative",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.type === "light" ? "#FFAB40" : "#AAA5B5"
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: theme.palette.type === "light" ? "#FFAB40" : "#AAA5B5",
      visibility: "hidden",
      WebkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      WebkitTransition: "all 0.5s ease-in-out 0s",
      transition: "all 0.5s ease-in-out 0s",
      textDecoration: "none"
    },

    "&:hover::before": {
      visibility: "visible",
      WebkitTransform: "scaleX(1)",
      transform: "scaleX(1)"
    }
  }
}));

const Copyright = ({ website, url, footerLogo, logoUrl }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ fontWeight: "500" }}
    >
      {"Copyright © "} &nbsp;{" "}
      <FooterLogo footerLogo={footerLogo} logoUrl={logoUrl} />
      &nbsp;
      <Link color="inherit" href={url} target="_blank" rel="noopener">
        {website}
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Grid>
  );
};

const PrivacyPolicy = ({
  privacyUrl,
  setValue,
  handleOpen,
  privacyAndTermsApi,
  action
}) => {
  const classes = useStyles();
  const { content } = classes;
  const url = privacyAndTermsApi.includes("?")
    ? privacyAndTermsApi + "&type=privacy"
    : privacyAndTermsApi + "?type=privacy";

  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none", cursor: "pointer" }}
        color="inherit"
        className={content}
        href={url}
        target="_blank"
        onClick={action}
      >
        Privacy policy
      </Link>
    </Grid>
  );
};

const FooterLogo = ({ footerLogo, logoUrl }) => {
  const theme = useTheme();
  return (
    <Grid item>
      <img className={footerLogo} src={logoUrl} />
    </Grid>
  );
};

const ReviewAndTerms = ({
  termsAndConditionsUrl,
  setValue,
  handleOpen,
  privacyAndTermsApi
}) => {
  const classes = useStyles();
  const { content } = classes;

  const url = privacyAndTermsApi.includes("?")
    ? privacyAndTermsApi + "&type=terms"
    : privacyAndTermsApi + "?type=terms";

  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none", cursor: "pointer" }}
        color="inherit"
        className={content}
        target="_blank"
        href={url}
      >
        Terms & Conditions
      </Link>
    </Grid>
  );
};

const ReviewPrivacyTerms = ({ handleOpen, setValue, privacyAndTermsApi }) => {
  const classes = useStyles();
  const { content } = classes;
  return (
    <Grid item>
      <Link
        style={{ textDecoration: "none", cursor: "pointer" }}
        color="inherit"
        className={content}
        href="privacy"
        target="_blank"
      >
        Review privacy preferences
      </Link>
    </Grid>
  );
};

function FooterGrid({
  images,
  footerGrid,
  website,
  title,
  url,
  footerLogo,
  privacyUrl,
  termsAndConditionsUrl,
  handleOpen,
  logoUrl,
  setValue,
  privacyAndTermsApi,
  action
}) {
  return (
    <Grid
      className={footerGrid}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      &nbsp;
      <Grid item>
        <PrivacyPolicy
          privacyUrl={privacyUrl}
          setValue={setValue}
          handleOpen={handleOpen}
          privacyAndTermsApi={privacyAndTermsApi}
          action={action}
        />
      </Grid>
      &nbsp; | &nbsp;
      <Grid item>
        <ReviewAndTerms
          termsAndConditionsUrl={termsAndConditionsUrl}
          handleOpen={handleOpen}
          setValue={setValue}
          privacyAndTermsApi={privacyAndTermsApi}
        />
      </Grid>
      {/* &nbsp; | &nbsp;
      <Grid alignItems="center" direction="column" item>
        <ReviewPrivacyTerms
          handleOpen={handleOpen}
          setValue={setValue}
          privacyAndTermsApi={privacyAndTermsApi}
        />
      </Grid> */}
      &nbsp;
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Copyright
            website={website}
            url={url}
            footerLogo={footerLogo}
            logoUrl={logoUrl}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
}

export default function FooterPlain(props) {
  const classes = useStyles();
  const { footer, images, footerGrid, footerLogo } = classes;
  const {
    website,
    url,
    privacyUrl,
    termsAndConditionsUrl,
    logoUrl,
    privacyAndTermsApi,
    action
  } = props;

  const [modalToggle, setModalToggle] = useState(false);
  const [value, setValue] = useState([
    { type: "paragraph", children: [{ text: "", color: "black" }] }
  ]);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleOpen = () => {
    setModalToggle(true);
  };
  const handleClose = () => {
    setModalToggle(false);
  };

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
        handleOpen={handleOpen}
        logoUrl={logoUrl}
        setValue={setValue}
        privacyAndTermsApi={privacyAndTermsApi}
        action={action}
      />
      {/* <ReviewModal
        modalToggle={modalToggle}
        handleClose={handleClose}
        apiValue={value}
      /> */}
    </footer>
  );
}
