import * as React from 'react';
import { connect } from 'react-redux';

import ShippingCalculator from "../components/ShippingCalculator";

// Import grid components
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";

// Import styled components and the styled component from react as it is needed for the backdrop
import {BackgroundElement, Layout,Logo} from "../assets/StyledComponents/Cargo4You";
import Cargo4YouLogo from '../assets/images/Cargo4YouLogo.png'

function Cargo4You () {
  return(
    <Layout>
      <BackgroundElement />
      <GridContainer
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <GridItem xs={6}>
          <Logo src={Cargo4YouLogo} />
        </GridItem>
        <GridItem xs={6}>
          <p>We ship parcels that satisfy the below conditions</p>
          <p>Size Up to 20kg</p>
          <p>Parcel Volume Up to 2000cm3</p>
        </GridItem>
        <ShippingCalculator/>
      </GridContainer>
    </Layout>
  );
}

export default connect()(Cargo4You);
