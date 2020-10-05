//#region Imports

// Import react styled components
import styled from 'styled-components';
import ShippingApp from '../images/ShippingApp.jpg'

//#endregion 

//#region Exported Styled Components

export const Layout = styled.section`
    margin: 5%;
    display: flex;
    justify-content: center;
`

export const Heading = styled.h1`
    color: white;
    margin-bottom: 30px;
`

export const ShippingLink = styled.div`
    font-size: 1.5em;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    margin-bottom: 10px;
    min-height: 50px;
    vertical-align: middle;
    :hover{
        background-color: #333444;
        cursor: pointer;
    }
`

export const ShippingLinkText = styled.p`
    margin: 15px;
    text-align: center;
`

export const BackgroundElement = styled.div`    
    background: url(${ShippingApp}) center center / cover no-repeat fixed;
    position: fixed;
    top: 0px;
    filter: saturate(0.05) opacity(0.1);
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: -1;
`

//#endregion 