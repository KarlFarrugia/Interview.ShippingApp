//#region Imports

// Import react styled components
import styled from 'styled-components';
import Cargo4You from '../images/cargo4you.jpg'
import ShipFaster from '../images/shipfaster.jpg'
import MaltaShip from '../images/maltaship.jpg'

//#endregion 

//#region Exported Styled Components

export const Layout = styled.section`
    margin-top: 5%;
    margin-bottom: 2%;
`

export const HeadingText = styled.h3`
    color: #17224c;
`

export const ParagraphText = styled.p`
    color: white;
    padding-left: 30px;

    span{
        vertical-align: super;
        font-size: 0.5em;
    }
`

export const ParagraphTextHead = styled.p`
    color: #b9aa06;
    font-weight: bold;
`


export const ParagraphSection = styled.p`
    color: white;
`

export const CalculationHeading = styled.h4`
    color: #17224c;
`

export const CompanyText = styled.div`
    margin-bottom: 5%;
`

export const SuperText = styled.span``

export const Cargo4YouBackgroundElement = styled.div`    
    background: url(${Cargo4You}) center center / cover no-repeat fixed;
    position: fixed;
    top: 0px;
    filter: saturate(0.05) opacity(0.1);
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: -1;
`

export const ShipFasterBackgroundElement = styled.div`    
    background: url(${ShipFaster}) center center / cover no-repeat fixed;
    position: fixed;
    top: 0px;
    filter: saturate(0.05) opacity(0.1);
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: -1;
`

export const MaltaShipBackgroundElement = styled.div`    
    background: url(${MaltaShip}) center center / cover no-repeat fixed;
    position: fixed;
    top: 0px;
    filter: saturate(0.05) opacity(0.1);
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: -1;
`

export const Logo = styled.img`
    height: 270px;
    width: 270px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

//#endregion 