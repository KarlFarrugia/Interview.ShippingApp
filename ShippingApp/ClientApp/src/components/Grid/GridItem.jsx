//#region Imports

// Import react components
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

//#endregion

// Style wrapper to be used using the withStyle
const style = {
  grid: {
    padding: "0 30px !important"
  }
};

/**
 * GridItem function
 *  
 * This function imports the Grid component from material UI to be used as bootstrap and render the passed children within it. The Grid component will require a parent
 * GridContainer component from material UI to properly wrap the respective Grid components.
 * 
 * @name GridItem
 * @function
 * @param {...Object} props All the props required to styled the grid component and the respective children the Grid item will be wrapped around
 * @returns {Grid} A styled grid component which will host the passed children components
 */
function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

//The Grid is exported and styled with the withStyles Material UI object
export default withStyles(style)(GridItem);