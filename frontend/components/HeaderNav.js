import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
  }
};

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button>Settings</Button>
      </div>
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderNav);
