// package imports
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainRoot: {
    height: "100%",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    resize: "both",
    overflow: "hidden"
  },
  cardRoot: {
    resize: "both",
    alignItems: "center",
    width: "600px",
    height: "600px",
    "&:after": {
      content: "'",
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#ccc",
      top: "50%",
      transform: "translateY(-50%)"
    }
  },
  topLeft: {
    width: "50%",
    height: "50%",
    backgroundColor: "black",
    maxWidth: "50%"
  },
  topRight: {
    width: "50%",
    height: "50%",
    backgroundColor: "purple"
  },
  bottomLeft: {
    width: "50%",
    height: "50%",
    backgroundColor: "yellow"
  },
  bottomRight: {
    width: "50%",
    height: "50%",
    backgroundColor: "orange"
  },
  circle: {
    position: "absolute",
    zIndex: 1,
    top: "100px",
    left: "100px",
    // marginTop: "-6px",
    opacity: 1,
    borderRadius: "300px",
    transition: "opacity 0.75s",
    overflow: "hidden",
    // width: "170px",
    backgroundColor: theme.palette.type === "dark" ? "white" : "#303030"
  }
}));

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

const CardComponent = props => {
  const classes = useStyles();
  const {
    cardRoot,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    mainRoot,
    circle
  } = classes;
  return (
    <main className={mainRoot}>
      <Grid container direction="row" className={cardRoot}>
        <Grid className={`${topLeft}`} item></Grid>
        <Grid className={`${topRight} `} item></Grid>
        <Grid className={`${bottomLeft} `} item></Grid>
        <Grid className={`${bottomRight} `} item></Grid>
        <Portal>
          <div
            style={{ width: "300px", height: "300px", backgroundColor: "cyan" }}
            className={circle}
          ></div>
        </Portal>
      </Grid>
    </main>
  );
};

export default CardComponent;
