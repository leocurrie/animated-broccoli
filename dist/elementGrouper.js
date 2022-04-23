"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupArrayElements = void 0;
/**
 * Takes an array of length >= 0, and a positive integer N and returns the contents of the array divided into N
 * equally sized arrays.
 * Where the size of the original array cannot be divided equally by N, the final part should have a length equal
 * to the remainder.
 * @param sourceArray the array to operate on
 * @param numGroups the number of groups to split the array into
 */
function groupArrayElements(sourceArray, numGroups) {
    // input validation
    if (!sourceArray) {
        throw new Error('sourceArray cannot be null');
    }
    if (!Number.isInteger(numGroups) || numGroups < 1) {
        throw new Error('numGroups must be positive integer');
    }
    // calculate the number of elements to put in each group
    const elementsPerGroup = Math.ceil(sourceArray.length / numGroups);
    // slice out a section of the source array for each group
    const result = [];
    for (let groupIndex = 0; groupIndex < numGroups; groupIndex++) {
        const sourceIndex = groupIndex * elementsPerGroup; // offset into source array
        result.push(sourceArray.slice(sourceIndex, sourceIndex + elementsPerGroup));
    }
    return result;
}
exports.groupArrayElements = groupArrayElements;
