//#region Imports

// Import react styled components
import styled from 'styled-components';
import Cargo4You from '../images/cargo4you.jpg'

//#endregion 

//#region Exported Styled Components

export const Layout = styled.section`
    margin: 5%;
    display: flex;
    justify-content: center;
`

export const BackgroundElement = styled.div`    
    background: url(${Cargo4You}) center center / cover no-repeat fixed;
    position: fixed;
    top: 0px;
    filter: saturate(0.05) opacity(0.1);
    width: 100%;
    max-width: 100%;
    height: 100%;
    z-index: -1;
`

export const Logo = styled.img``

//#endregion 