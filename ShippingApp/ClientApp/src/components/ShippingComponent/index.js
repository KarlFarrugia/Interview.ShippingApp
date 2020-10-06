import * as React from 'react';

import ShippingCalculator from "../ShippingCalculator";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import styled components and the styled component from react as it is needed for the backdrop
import {Logo} from "../../assets/StyledComponents/Pages";

function Cargo4You ({ parcel, setParcel, clearParcel, logo, weightValidations, dimensionsValidations, weightPrice, dimensionPrice }) {
    return(
        <GridContainer
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        >
            <GridItem xs={6}>
                <Logo src={logo} />
            </GridItem>
            <GridItem xs={6}>
                <p>We ship parcels that satisfy the below conditions</p>
                <p>Size Up to 20kg</p>
                <p>Parcel Volume Up to 2000cm3</p>
            </GridItem>
            <ShippingCalculator 
                parcel={parcel} 
                setParcel={setParcel} 
                clearParcel={clearParcel}
                weightValidations={weightValidations}
                dimensionsValidations={dimensionsValidations}
                weightPrice={weightPrice}
                dimensionPrice={dimensionPrice}
            />
        </GridContainer>
    );
}

export default Cargo4You;