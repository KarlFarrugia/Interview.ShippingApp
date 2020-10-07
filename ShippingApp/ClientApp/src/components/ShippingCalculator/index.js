import React, {useState} from 'react';
import { Link } from "react-router-dom";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import material ui components
import FormControl from "@material-ui/core/FormControl";

// Import styled components
import {StyledTextField, StyledButton} from '../../assets/StyledComponents/Shipping'
import {ParagraphSection, CalculationHeading} from "../../assets/StyledComponents/Pages";

// Import debounce for delaying search from loadsh
import { debounce } from 'lodash';

// Import helper functions
import { CalculateVolume, CreateParcelState } from '../../helpers'

import Api from '../../api';

function ShippingCalculator ({ parcel, setParcel, clearParcel, logo, weightValidations, dimensionsValidations, weightPrice, dimensionPrice }) {
    function ExecuteUpdate (eventData){
        setParcel(eventData);
        Api(eventData);
    }
    
    // Debounce the search for half a second and then update the redux store using the movie_search action
    const delayedHandleChange = debounce(eventData => ExecuteUpdate(eventData), 3000);

    const parcelObject = CreateParcelState(parseInt(parcel[0]), parseInt(parcel[1]), parseInt(parcel[2]), parseInt(parcel[3]));

    // Get the translation and language switching components
    const { t, i18n } = useTranslation("");

    // Store a local version of the search value using useState
    const [valid, SetValid] = useState(false);
    const [weight, SetWeight] = useState(parcelObject.weight);
    const [volume, SetVolume] = useState(CalculateVolume(parcelObject.width, parcelObject.depth, parcelObject.height));
    const [width, SetWidth] = useState(parcelObject.width);
    const [depth, SetDepth] = useState(parcelObject.depth);
    const [height, SetHeight] = useState(parcelObject.height);
    const [price, SetPrice] = useState(Math.max(weightPrice(parcelObject.weight), dimensionPrice(CalculateVolume(parcelObject.width, parcelObject.depth, parcelObject.height))));
        
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
            SetValid(true);
            SetPrice(Math.max(weightPrice(parcel.weight), dimensionPrice(volume)))
            delayedHandleChange(parcel);
        } else {            
            SetValid(false);
        }
    }

    return(
        <GridContainer
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <GridItem xs={4}>
                <CalculationHeading>{t("shipping_page:insert_dimension")}</CalculationHeading>
                <br />
                <FormControl>
                    <StyledTextField 
                        autoFocus 
                        value={width} 
                        label={t("metric:width")} 
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
                        label={t("metric:depth")} 
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
                        label={t("metric:height")} 
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
            <GridItem xs={4}>
                <CalculationHeading>{t("shipping_page:insert_weight")}</CalculationHeading>
                <br />
                <StyledTextField 
                    autoFocus 
                    value={weight} 
                    label={t("metric:weight")} 
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
            <GridItem xs={4}>
                <CalculationHeading>{t("shipping_page:totals")}</CalculationHeading>
                <br />
                <ParagraphSection>{t("shipping_page:total_weight")}: {weight}</ParagraphSection>
                <ParagraphSection>{t("shipping_page:total_volume")}: {volume}</ParagraphSection>
                <ParagraphSection>{t("shipping_page:cost")}: €{price}</ParagraphSection>
            </GridItem>
            <GridItem xs={12}>
                <StyledButton onClick={() => clearParcel()}variant="contained" disabled={!valid}>
                    {t("shipping_page:post_button")}
                </StyledButton>
            </GridItem>
        </GridContainer>
    );
}

export default ShippingCalculator;
