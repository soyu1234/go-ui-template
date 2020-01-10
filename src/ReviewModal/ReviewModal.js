import React, { useState } from "react";
import {
  Grid,
  Link,
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  orbitLogo: {
    width: "75px",
    height: "75px",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  dialogTitle: {
    "& > h2": {
      fontSize: "24px",
      fontWeight: "550"
    },
    borderBottom: "1px solid #ffb447",
    boxShadow: "0 2px #ffb447"
  },
  dialogContainer: {
    fontFamily: "'Lato', sans-serif;",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330"
  },
  dialogContent: {
    "& > h3": {
      color: theme.palette.type === "light" ? "#37474f" : "#5F9CA6"
    }
  },
  dialogContentText: {
    color: theme.palette.type === "light" ? "black" : "#C0A080"
  },
  dialogActions: {
    alignItems: "center",
    justify: "center",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330"
  },
  buttons: {
    display: "inline-flex;",
    height: "40px;",
    width: "150px;",
    border: "2px solid #FFC247;",
    margin: " 20px 20px 20px 20px;",
    color: " #FFC247;",
    textTransform: "uppercase;",
    textDecoration: "none",
    fontSize: ".8em",
    letterSpacing: "1.5px;",
    alignItems: "center;",
    justifyContent: "center;",
    overflow: "hidden;",
    position: "relative",
    transition: "all .3s ease-Out;",
    fontWeight: "550",
    "&:hover": {
      left: 0,
      backgroundColor: "#FFC247",
      color: "#fff"
    }
  }
}));

const ReviewModal = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { modalToggle, handleClose } = props;
  const {
    orbitLogo,
    dialogTitle,
    dialogContainer,
    dialogContent,
    dialogContentText,
    dialogActions,
    buttons
  } = classes;

  return (
    <div>
      <Dialog
        open={modalToggle}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={dialogContainer}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{
              backgroundColor: "#ffb447",
              boxShadow: "0px 1px 5px",
              borderTop: "15px solid #ffc247"
            }}
          >
            <img
              src="https://storage.googleapis.com/orbit-static/orbit/orbit-logo-512.png"
              alt="orbit"
              className={orbitLogo}
            />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <DialogTitle className={dialogTitle}>
              Your choices regarding privacy on GameOrbit
            </DialogTitle>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <DialogContent className={dialogContent}>
              <h3>Information storage and access</h3>
              <DialogContentText className={dialogContentText}>
                The storage of information, or access to information that is
                already stored, on your device such as advertising identifiers,
                device identifiers, cookies, and similar technologies.
                <Grid
                  item
                  style={{
                    // border: "2px solid #01ADEF",
                    color: "#3D7E84",
                    paddingLeft: "20px",
                    marginTop: "20px",
                    // boxShadow: "inset 0 0 10px",
                    borderLeft: "2px dotted"
                  }}
                >
                  <h4>Example</h4>
                  <p>Example sentence</p>
                </Grid>
              </DialogContentText>
            </DialogContent>

            <DialogContent className={dialogContent}>
              <h3>Personalisation</h3>
              <DialogContentText className={dialogContentText}>
                The collection and processing of information about your use of
                this service to subsequently personalise advertising and/or
                content for you in other contexts, such as on other websites or
                apps, over time. Typically, the content of the site or app is
                used to make inferences about your interests, which inform
                future selection of advertising and/or content.
              </DialogContentText>
            </DialogContent>

            <DialogContent className={dialogContent}>
              <h3>Ad selection, delivery, reporting</h3>
              <DialogContentText className={dialogContentText}>
                The collection of information, and combination with previously
                collected information, to select and deliver advertisements for
                you, and to measure the delivery and effectiveness of such
                advertisements. This includes using previously collected
                information about your interests to select ads, processing data
                about what advertisements were shown, how often they were shown,
                when and where they were shown, and whether you took any action
                related to the advertisement, including for example clicking an
                ad or making a purchase. This does not include personalisation,
                which is the collection and processing of information about your
                use of this service to subsequently personalise advertising
                and/or content for you in other contexts, such as websites or
                apps, over time.
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>

        <DialogActions className={dialogActions}>
          <Button
            onClick={handleClose}
            className={buttons}
            color="inherit"
            autoFocus
          >
            Accept All
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
