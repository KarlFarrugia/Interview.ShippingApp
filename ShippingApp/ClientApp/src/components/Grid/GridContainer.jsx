//#region Imports

// Import react components
import React from "react";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

//#endregion

// Style wrapper to be used using the withStyle
const style = {
  grid: {
    width: "100%"
  }
};

/**
 * GridContainer function
 *  
 * This function imports the GridContainer component from material UI to be used as bootstrap and render grid like objects. The GridContainer will require Grid components from 
 * material UI to properly style the respective divs in the DOM.
 * 
 * @name GridContainer
 * @function
 * @param {...Object} props All the props required to styled the grid component
 * @returns {GridContainer} A styled GridContainer component which will host several different Grid objects
 */
function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

//The GridContainer is exported and styled with the withStyles Material UI object
export default withStyles(style)(GridContainer);