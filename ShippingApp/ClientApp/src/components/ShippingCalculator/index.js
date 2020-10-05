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

function ShippingCalculator () {
    // Store a local version of the search value using useState
    const [weight, SetWeight] = useState();
    const [width, SetWidth] = useState();
    const [depth, SetDepth] = useState();
    const [height, SetHeight] = useState();
    const [price, SetPrice] = useState(0);

    // Get the translation and language switching components
    const { t, i18n } = useTranslation("");
    
    // Debounce the search for half a second and then update the redux store using the movie_search action
    const delayedHandleChange = debounce(eventData => console.log(eventData), 500);

    const handleChange = event => {
        switch(event.target.id){
            case "weight-input" : 
                SetWeight(event.target.value);
                break;
            case "width-input" : 
                SetWidth(event.target.value);
                break;
            case "depth-input" : 
                SetDepth(event.target.value);
                break;
            case "height-input" : 
                SetHeight(event.target.value);
                break;
            default:
                break;
        }
        let eventData = { id: event.id, target: event.target };
        SetWidth(eventData.target.value);
        delayedHandleChange(eventData);
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
                                    max: 100, min: 10 
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
                                    max: 100, min: 10 
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
                                    max: 100, min: 10 
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
                                max: 100, min: 10 
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
                    This would cost Euros {price}
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default ShippingCalculator;
