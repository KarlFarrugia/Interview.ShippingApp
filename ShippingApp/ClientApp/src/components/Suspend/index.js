//#region Imports

// Import react components
import React, { Suspense } from 'react';

// Import custom components
import Load from '../Load'

//#endregion

/**
 * Suspend Constant
 *  
 * Wraps a React.Suspend, passed from App.js, around the passed Component. As a suspense fallback a custom spinner is being used.
 * 
 * @name Suspend
 * @component
 * @param {ReactElement} Component 
 */

const Suspend = Component => {
    return props => (
        <Suspense fallback={<Load />}>
            <Component {...props} />
        </Suspense>
    );
}

export default Suspend;