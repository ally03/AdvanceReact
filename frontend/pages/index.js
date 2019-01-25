import Link from "next/link"; // import link componets from the next
import React from "react";
import Button from "@material-ui/core/Button";

const Home = (
  props // no need to import as next will take care of it.
) => (
  // V  down link to route to the another page
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
); // this is a function components

export default Home; // export the home compoents
