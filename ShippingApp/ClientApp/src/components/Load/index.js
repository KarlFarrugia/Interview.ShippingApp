//#region Imports

// Import react components
import React from 'react';
import Loader from 'react-loader-spinner'

// Import styled components
import { LoaderContainer } from '../../assets/StyledComponents/Loader'

// Load css related to the spinner loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//#endregion 

/**
 * Load function
 *  
 * This function uses styled component from the assets folder to wrap a loading spinner within it and then returns it as a styled component
 * 
 * @name Load
 * @function
 * @returns {StyledComponent} A styled spinner component to be used for loading which will be automatically removed after 3 seconds
 */
export default function Load (){
    return (
        <LoaderContainer>
            <Loader
                type="Puff"
                color="#fff"
                height={100}
                width={100}
                timeout={3000}
            />
        </LoaderContainer>
    );
}