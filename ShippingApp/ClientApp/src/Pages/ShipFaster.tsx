import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as Sentry from "@sentry/react";

// Import multilanguage component
import { useTranslation } from "react-i18next";

import {ParcelState, SetParcelCountAction, ClearParcelCountAction} from "../store/Parcel";
import {ApplicationState} from "../store";

// Import styled components and the styled component from react as it is needed for the backdrop
import {ShipFasterBackgroundElement, Layout, HeadingText, ParagraphText, ParagraphTextHead, CompanyText, SuperText} from "../assets/StyledComponents/Pages";

import ShippingComponent from '../components/ShippingComponent'; 
import ShipFasterLogo from '../assets/images/ShipFasterLogo.png';

import {COURIER_CONFIGURATIONS} from '../config';

function CalculateWeightPrice( weight: number ) {
  try{
    switch(true){
      case (weight > 10 && weight <= 15):
        return COURIER_CONFIGURATIONS.ShipFaster.Price.Weight.Between_10kg_and_15kg;
      case (weight > 15 && weight <= 25):
        return COURIER_CONFIGURATIONS.ShipFaster.Price.Weight.Between_15kg_and_25kg;
      case (weight > 25):
        return COURIER_CONFIGURATIONS.ShipFaster.Price.Weight.Over_25kg + ((weight - 25) * COURIER_CONFIGURATIONS.ShipFaster.Price.Weight.Per_kg_over_25);
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
        return COURIER_CONFIGURATIONS.ShipFaster.Price.Dimensions.Less_Than_1000cm3;
      case (dimension > 1000 && dimension <= 1700):
        return COURIER_CONFIGURATIONS.ShipFaster.Price.Dimensions.More_Than_1000cm3_Less_Than_1700cm3;
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

function ShipFaster(props: Props){
  // Get the translation and language switching components
  const { t, i18n } = useTranslation("");

  //[TODO]:: Populate prices from config file
  function companyText (){
    return(
      <CompanyText>
        <HeadingText>{t("shipping_page:heading_notice")}</HeadingText>
        <br />
        <ParagraphText>{t("notice:parcel_weight")} {t("notice:min")} 10kg {t("notice:max")} 30kg</ParagraphText>
        <ParagraphText>{t("notice:parcel_volume")} {t("notice:max")} 1700cm<SuperText>3</SuperText></ParagraphText>
        <br />
        <HeadingText>{t("shipping_page:heading_notice2")}</HeadingText>
        <br />
        <ParagraphTextHead>{t("notice:based_weight")}</ParagraphTextHead>
        <ParagraphText>{t("notice:parcel_weight")} {t("notice:min")} 10kg {t("notice:max")} 15kg {t("notice:costs")} €16.50</ParagraphText>
        <ParagraphText>{t("notice:parcel_weight")} {t("notice:min")} 15kg {t("notice:max")} 25kg {t("notice:costs")} €36.50</ParagraphText>
        <ParagraphText>{t("notice:parcel_weight")} {t("notice:max")} 25kg {t("notice:max")} €40 {t("notice:plus").replace("{Rate}","0.417")}</ParagraphText>
        <ParagraphTextHead>{t("notice:based_dimension")}</ParagraphTextHead>
        <ParagraphText>{t("notice:parcel_volume")} {t("notice:max")} 1000cm<SuperText>3</SuperText> {t("notice:costs")} €11.99</ParagraphText>
        <ParagraphText>{t("notice:parcel_volume")} {t("notice:min")} 1000cm<SuperText>3</SuperText> {t("notice:max")} 1700cm<SuperText>3</SuperText> {t("notice:costs")} €21.99</ParagraphText>
      </CompanyText>
    );
  }

  return(
    <Layout>
      <ShipFasterBackgroundElement />
      <ShippingComponent 
        companyText = {companyText()}
        parcel = {[props.parcel.depth, props.parcel.height, props.parcel.width, props.parcel.weight]} 
        setParcel = {props.set_parcel} 
        clearParcel = {props.clear_parcel}
        logo = {ShipFasterLogo}
        weightValidations = {{min: COURIER_CONFIGURATIONS.Cargo4You.Validations.Weight.Min, max: COURIER_CONFIGURATIONS.Cargo4You.Validations.Weight.Max}}
        dimensionsValidations = {{min: COURIER_CONFIGURATIONS.Cargo4You.Validations.Dimensions.Min, max: COURIER_CONFIGURATIONS.Cargo4You.Validations.Dimensions.Max}}
        weightPrice = {CalculateWeightPrice}
        dimensionPrice = {CalculateDimensionPrice}
      />
    </Layout>
  );
}

export default connector(ShipFaster);
