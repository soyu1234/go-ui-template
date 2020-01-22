import React, { useState } from "react";
import { makeStyles, useTheme, Container } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headerContainer: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#212121",
    color: theme.palette.type === "light" ? "#37474f" : "#5F9CA6",
    boxShadow: "none"
  },
  title: {
    flexGrow: 1
  },
  orbitLogo: {
    [theme.breakpoints.up("md")]: {
      width: "40px",
      height: "40px"
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px"
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
  },
  searchInput: {
    width: "100%",
    border: "none",
    fontFamily: "Helvetica",
    // fontSize: "14px",
    color: "inherit",
    background: "transparent",
    outlineWidth: "0px"
  },
  searchLabel: {
    display: "inline-block",
    position: "relative",
    height: "20px",
    width: "20px",
    boxSizing: "border-box",
    /* margin: 0px 8px 7px 0px;
    padding: 7px 9px 0px 9px; */
    border: "3px solid #37474f",
    borderRadius: "25px",
    transition: "all 275ms ease",
    cursor: "pointer",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "3px",
      height: "13px",
      right: "-4px",
      top: "13px",
      background: "#37474f",
      borderRadius: "3px",
      transform: "rotate(-45deg)",
      transition: "all 350ms ease"
    },
    "&:hover": {
      borderColor: `${theme.palette.type === "dark" ? "#AAA5B5" : "#ffab40"}`
    },
    "&:hover:after": {
      background: `${theme.palette.type === "dark" ? "#AAA5B5" : "#ffab40"}`
    }
  },
  searchBox: {
    // top: "1px",
    [theme.breakpoints.down(450)]: {
      width: "200px"
    },
    [theme.breakpoints.down(400)]: {
      width: "150px"
    },
    width: "250px",
    height: "35px",
    padding: "7px 9px 0px 9px",
    paddingTop: " 3px",
    marginRight: "0px",
    // bottom: "5px",
    border: `3px solid ${
      theme.palette.type === "dark" ? "#AAA5B5" : "#ffab40"
    }`,
    "&:after": {
      height: "0px"
    }
  }
}));

const SearchBar = ({ setSearch, search }) => {
  const [clickedSearchBar, setClickedSearchBar] = useState(false);
  const classes = useStyles();
  const { searchInput, searchLabel, searchBox } = classes;
  return (
    <div
      onClick={() => setClickedSearchBar(true)}
      onBlur={() => setClickedSearchBar(false)}
    >
      <label
        className={
          !clickedSearchBar ? searchLabel : `${searchLabel} ${searchBox}`
        }
        // style={hoveredSearchBar ? { borderColor: "red" } : null}
        // htmlFor="inpt_search"
      >
        {clickedSearchBar ? (
          <input
            className={searchInput}
            placeholder="Search the text..."
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        ) : null}
      </label>
    </div>
  );
};

const Header = ({ logo, name }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { orbitLogo, headerContainer, orbitText } = classes;
  const array = [1, 2, 3, 4];
  const [search, setSearch] = useState("");
  return (
    <Container maxWidth="xl">
      <AppBar color="inherit" className={headerContainer}>
        <Toolbar>
          <img className={orbitLogo} src={logo} />
          <span className={orbitText}>{name}</span>
          <SearchBar setSearch={setSearch} search={search} />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
