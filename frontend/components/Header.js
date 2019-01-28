// import Link from "next/link";
// import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Menu from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
// import HeaderNav from "./HeaderNav";
import Explore from "@material-ui/icons/Explore";
import AccountCircle from "@material-ui/icons/AccountCircle";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// const Logo = styled.h1`
//   font-size: 4rem;
//   margin-left: 2rem;
//   position: relative;
//   z-index: 2;
//   transform: skew(-7deg);
//   line-height: 30px;
//   a {
//     padding: 0.5rem 1rem;
//     background: ${props => props.theme.red};
//     color: white;
//     text-transform: uppercase;
//     text-decoration: none;
//   }
//   p {
//     padding: 0.5rem 1rem;
//     font-size: 13px;
//     color: black;
//     text-transform: uppercase;
//     text-decoration: none;
//   }
//   @media (max-width: 1300px) {
//     margin: 0;
//     text-align: center;
//   }
// `;

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Shop Now
            </Typography>
            {/* <Nav /> */}
            <div />
            <div>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </div>
            <Button
              href="#pablo"
              className={classes.navLink + " " + classes.navLinkActive}
              onClick={e => e.preventDefault()}
            >
              <Explore className={classes.icons} /> Discover
            </Button>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
            >
              <AccountCircle className={classes.icons} /> Profile
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
          {/* <HeaderNav /> */}
        </AppBar>
      </div>
    );
    // <Logo>
    // </Logo>
    //
    // <Search />
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
