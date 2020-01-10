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
  }
}));

const ReviewModal = props => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    orbitLogo,
    dialogTitle,
    dialogContainer,
    dialogContent,
    dialogContentText
  } = classes;

  const [modalToggle, setModalToggle] = useState(false);

  const handleOpen = () => {
    setModalToggle(true);
  };
  const handleClose = () => {
    setModalToggle(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => handleOpen()}>
        Open Modal
      </Button>
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

            <DialogContent className={dialogContent}>
              <h3>aaaa</h3>
              <DialogContentText className={dialogContentText}>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
