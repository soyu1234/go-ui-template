import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link, AppBar, Toolbar } from "@material-ui/core";

import "./header.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headerContainer: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330",
    color: theme.palette.type === "light" ? "#37474f" : "#5F9CA6"
  },
  title: {
    flexGrow: 1
  },
  orbitLogo: {
    marginLeft: "2%",
    [theme.breakpoints.up("md")]: {
      width: "60px",
      height: "60px"
    },
    [theme.breakpoints.down("md")]: {
      width: "45px",
      height: "45px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%"
    },
    [theme.breakpoints.up(700)]: {
      marginLeft: "2%"
    }
  },
  content: {
    marginRight: "2%",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px"
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "12px"
    },
    [theme.breakpoints.up(700)]: {
      fontSize: "16px"
    }
  },
  orbitText: {
    flexGrow: 1,
    marginLeft: "2%",
    // fontSize: "18px",
    [theme.breakpoints.down(400)]: {
      marginLeft: "0%",
      visibility: "hidden"
    },
    [theme.breakpoints.up(700)]: {
      marginLeft: "2%"
    }
  }
}));

const Header = props => {
  const classes = useStyles();
  const { orbitLogo, headerContainer, content, orbitText } = classes;
  const { themeMode } = props;
  const array = [1, 2, 3, 4];
  return (
    <div>
      <AppBar position="static" color="inherit" className={headerContainer}>
        <Toolbar variant="dense">
          <img
            className={orbitLogo}
            src={
              themeMode === "light"
                ? "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-512.png"
                : "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-light.png"
            }
          />
          <span className={orbitText}>Orbit</span>
          {array.map(item => (
            <Link
              color="inherit"
              style={{ textDecoration: "none" }}
              className={`header-item ${content}`}
              href="#"
            >
              Button {item.toString()}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
