//#region Imports

// Import react styled components
import styled from 'styled-components';
import Cargo4You from '../images/cargo4you.jpg'
import ShipFaster from '../images/shipfaster.jpg'
import MaltaShip from '../images/maltaship.jpg'

//#endregion 

//#region Exported Styled Components

export const Layout = styled.section`
    margin: 5%;
    display: flex;
    justify-content: center;
`

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
`

//#endregion 