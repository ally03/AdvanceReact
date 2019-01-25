import Link from "next/link"; // import link componets from the next
import React from "react";
import Button from "@material-ui/core/Button";

const Home = (
  props // no need to import as next will take care of it.
) => (
  // V  down link to route to the another page
  <div>
    <Header
      brand="Primary Color"
      color="primary"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink + " " + classes.navLinkActive}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <Explore className={classes.icons} /> Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <AccountCircle className={classes.icons} /> Profile
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <Icon className={classes.icons}>settings</Icon> Settings
            </Button>
          </ListItem>
        </List>
      }
    />
  </div>
); // this is a function components

export default Home; // export the home compoents
