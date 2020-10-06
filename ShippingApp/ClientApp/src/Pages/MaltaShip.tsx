import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as Sentry from "@sentry/react";

import {ParcelState, SetParcelCountAction, ClearParcelCountAction} from "../store/Parcel";
import {ApplicationState} from "../store";

// Import styled components and the styled component from react as it is needed for the backdrop
import {MaltaShipBackgroundElement, Layout} from "../assets/StyledComponents/Pages";

import ShippingComponent from '../components/ShippingComponent'; 
import MaltaShipLogo from '../assets/images/MaltaShipLogo.png';

import {COURIER_CONFIGURATIONS} from '../config';

function CalculateWeightPrice( weight: number ) {
  try{
    switch(true){
      case (weight <= 2):
        return COURIER_CONFIGURATIONS.Cargo4You.Price.Weight.Less_Than_2kg;
      case (weight > 2 && weight <= 15):
        return COURIER_CONFIGURATIONS.Cargo4You.Price.Weight.Between_2kg_and_15kg;
      case (weight > 15 && weight <= 20):
        return COURIER_CONFIGURATIONS.Cargo4You.Price.Weight.Between_15kg_and_20kg;
      default:
        throw new Error("Error calculating the weight price");
    }
  } catch (e) {
    Sentry.captureException(e);
    return -1;
  }
}

function CalculateDimensionPrice( dimension: number ) {
  try{
    switch(true){
      case (dimension <= 1000):
        return COURIER_CONFIGURATIONS.Cargo4You.Price.Dimensions.Less_Than_1000cm3;
      case (dimension > 1000 && dimension <= 2000):
        return COURIER_CONFIGURATIONS.Cargo4You.Price.Dimensions.More_Than_1000cm3_Less_Than_2000cm3;
      default:
        throw new Error("Error calculating the dimension price");
    }
  } catch (e) {
    Sentry.captureException(e);
    return -1;
  }
}

// states to be retrieved from the redux store
const mapState = (state: ApplicationState) => ({
  parcel: state.parcel as ParcelState
});

// actions to be retrieved from the reducers
const mapDispatch = {
  set_parcel: (parcel: ParcelState) => ({ type: 'SET_PARCEL', payload: parcel } as SetParcelCountAction),
  clear_parcel: () => ({ type: 'CLEAR_PARCEL' } as ClearParcelCountAction)
}

const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  parcel: ParcelState
}

const ShipFaster = (props: Props) => (
  <Layout>
    <MaltaShipBackgroundElement />
    <ShippingComponent 
      parcel = {[props.parcel.depth, props.parcel.height, props.parcel.width, props.parcel.weight]} 
      setParcel = {props.set_parcel} 
      clearParcel = {props.clear_parcel}
      logo = {MaltaShipLogo}
      weightValidations = {{min: COURIER_CONFIGURATIONS.Cargo4You.Validations.Weight.Min, max: COURIER_CONFIGURATIONS.Cargo4You.Validations.Weight.Max}}
      dimensionsValidations = {{min: COURIER_CONFIGURATIONS.Cargo4You.Validations.Dimensions.Min, max: COURIER_CONFIGURATIONS.Cargo4You.Validations.Dimensions.Max}}
      weightPrice = {CalculateWeightPrice}
      dimensionPrice = {CalculateDimensionPrice}
    />
  </Layout>
);

export default connector(ShipFaster);
