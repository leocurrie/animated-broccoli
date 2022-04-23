import { groupArrayElements } from './index';

const sourceArray = [1, 2, 3, 4, 5];
const numGroups = 3;

const result = groupArrayElements(sourceArray, numGroups);

console.log('Source array:', sourceArray);
console.log('Number of groups', numGroups);
console.log('Result:', result);
