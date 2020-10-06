import React, {useState} from 'react';
import { Link } from "react-router-dom";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import material ui components
import FormControl from "@material-ui/core/FormControl";

// Import styled components and the styled component from react as it is needed for the backdrop
import {Layout, Heading} from "../../assets/StyledComponents/Shipping";

// Import styled components
import {StyledTextField} from '../../assets/StyledComponents/Shipping'

// Import debounce for delaying search from loadsh
import { debounce } from 'lodash';

// Import helper functions
import { CalculateVolume, CreateParcelState } from '../../helpers'

function ShippingCalculator ({ parcel, setParcel, clearParcel, logo, weightValidations, dimensionsValidations, weightPrice, dimensionPrice }) {
    const parcelObject = {
        depth: parseInt(parcel[0]),
        height: parseInt(parcel[1]),
        width: parseInt(parcel[2]),
        weight: parseInt(parcel[3]), 
    }
    // Get the translation and language switching components
    const { t, i18n } = useTranslation("");

    // Store a local version of the search value using useState
    const [weight, SetWeight] = useState(parcelObject.weight);
    const [volume, SetVolume] = useState(CalculateVolume(parcelObject.width, parcelObject.depth, parcelObject.height));
    const [width, SetWidth] = useState(parcelObject.width);
    const [depth, SetDepth] = useState(parcelObject.depth);
    const [height, SetHeight] = useState(parcelObject.height);
    const [price, SetPrice] = useState(Math.max(weightPrice(parcelObject.weight), dimensionPrice(CalculateVolume(parcelObject.width, parcelObject.depth, parcelObject.height))));
        
    // Debounce the search for half a second and then update the redux store using the movie_search action
    const delayedHandleChange = debounce(eventData => setParcel(eventData), 500);

    const handleChange = event => {
        let parcel = {}

        switch(event.target.id){
            case "weight-input" : 
                SetWeight(event.target.value);
                parcel = CreateParcelState(depth, height, width, event.target.value);
                break;
            case "width-input" : 
                SetWidth(event.target.value);
                parcel = CreateParcelState(depth, height, event.target.value, weight);
                break;
            case "height-input" : 
                SetHeight(event.target.value);
                parcel = CreateParcelState(depth, event.target.value, width, weight);
                break;
            case "depth-input" : 
                SetDepth(event.target.value);
                parcel = CreateParcelState(event.target.value, height, width, weight);
                break;
            default:
                break;
        }

        const volume = CalculateVolume(parcel.width, parcel.depth, parcel.height);
        SetVolume(volume);
        //if min dimension is unset and the volume is less than or equal to max
        //if max dimension is unset and the volume is greater than or equal to min
        //if volume is between min and max
        if(
            (dimensionsValidations.min < 0 && volume <= dimensionsValidations.max) ||
            (dimensionsValidations.max < 0 && volume >= dimensionsValidations.min) ||
            (dimensionsValidations.min <= volume || volume <= dimensionsValidations.max)        
        ){
            SetPrice(Math.max(weightPrice(parcel.weight), dimensionPrice(volume)))
            delayedHandleChange(parcel);
        }
    }

    return(
        <div>
            <GridContainer
                direction="row"
                justify="space-around"
                alignItems="flex-start"
            >
                <GridItem xs={6}>
                    Insert Parcel Dimensions
                    <br />
                    <FormControl>
                        <StyledTextField 
                            autoFocus 
                            value={width} 
                            label="Width" 
                            id="width-input" 
                            type="number"
                            InputProps={{
                                inputProps: { 
                                    min: 0 
                                }
                            }}
                            onChange={handleChange} 
                        />
                        <StyledTextField 
                            autoFocus 
                            value={depth} 
                            label="Depth" 
                            id="depth-input" 
                            type="number"
                            InputProps={{
                                inputProps: { 
                                    min: 0 
                                }
                            }}
                            onChange={handleChange} 
                        />
                        <StyledTextField
                            autoFocus 
                            value={height} 
                            label="Height" 
                            id="height-input" 
                            type="number"
                            InputProps={{
                                inputProps: { 
                                    min: 0 
                                }
                            }}
                            onChange={handleChange} 
                        />
                    </FormControl>
                </GridItem>
                <GridItem xs={6}>
                    Insert Parcel Weight
                    <br />
                    <StyledTextField 
                        autoFocus 
                        value={weight} 
                        label="Weight" 
                        id="weight-input" 
                        type="number"
                        InputProps={{
                            inputProps: { 
                                max: weightValidations.max, min: weightValidations.min 
                            }
                        }}
                        onChange={handleChange} 
                    />
                </GridItem>
            </GridContainer>
            <GridContainer
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <GridItem xs={12}>
                    <br />
                    Total Weight: {weight}
                    <br />
                    Total Volume: {volume}
                </GridItem>
                <GridItem xs={12}>
                    <br />
                    This would cost Euros {price}
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default ShippingCalculator;
