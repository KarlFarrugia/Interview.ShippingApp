//#region Imports

// Import react components
import React from 'react';

// Import custom components
import Navbar from '../Navbar';

// Import styled components
import { NavigationLine } from '../../assets/StyledComponents/Navigation';
import { HeaderContainer } from '../../assets/StyledComponents/Header'

//#endregion 

/**
 * Header function
 *  
 * This function uses styled component from the assets folder to wrap 2 different navigation bars and then returns it as a styled component
 * 
 * @name Header
 * @function
 * @returns {StyledComponent} A styled header component to be used to render navigation and filtering components at the top of the page
 */
export default function Header (){
    return (
        <HeaderContainer>
          <Navbar />
          <br />
          <NavigationLine />
        </HeaderContainer>
    );
}