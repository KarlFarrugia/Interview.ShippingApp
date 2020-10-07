// Import logging components
import * as Sentry from "@sentry/react";
 
//#endregion

/**
 * Calculates the volume given the 3 cardinal dimensions of width, depth, height
 * 
 * @function
 * 
 * @param {Float16Array} width the width dimension
 * @param {Float16Array} depth the depth dimension
 * @param {Float16Array} height the height dimension
 * @returns The calulated volume
 */
export function CalculateVolume (width = 0, depth = 0, height = 0) {
    try {
        return width * depth * height;
    } catch(e) {
        Sentry.captureException(e, `An error was encountered while calculating the volume of ${width} ${depth} ${height}`);
        return -1;
    }
}

export function CreateParcelState(depth, height, width, weight){
    try {
        return { 
            depth: parseFloat(depth),
            height: parseFloat(height),
            width: parseFloat(width),
            weight: parseFloat(weight), 
        };
    } catch(e) {
        Sentry.captureException(e, `An error was encountered while creating the parcel object ${width} ${depth} ${height} ${weight}`);
        return { 
            depth: 0,
            height: 0,
            width: 0,
            weight: 0, 
        };
    }
}