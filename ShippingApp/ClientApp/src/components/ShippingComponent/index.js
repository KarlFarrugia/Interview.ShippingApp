import * as React from 'react';

import ShippingCalculator from "../ShippingCalculator";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import styled components and the styled component from react as it is needed for the backdrop
import {Logo} from "../../assets/StyledComponents/Pages";

function ShippingComponent ({ companyText, parcel, setParcel, clearParcel, logo, weightValidations, dimensionsValidations, weightPrice, dimensionPrice }) {
    return(
        <GridContainer
        direction="row"
        justify="center"
        alignItems="flex-start"
        >
            <GridItem xs={12} sm={6}>
                <Logo src={logo} />
            </GridItem>
            <GridItem xs={12} sm={6}>
                {companyText}
            </GridItem>
            <GridItem xs={12}>
                <ShippingCalculator 
                    parcel={parcel} 
                    setParcel={setParcel} 
                    clearParcel={clearParcel}
                    weightValidations={weightValidations}
                    dimensionsValidations={dimensionsValidations}
                    weightPrice={weightPrice}
                    dimensionPrice={dimensionPrice}
                />
            </GridItem>
        </GridContainer>
    );
}

export default ShippingComponent;