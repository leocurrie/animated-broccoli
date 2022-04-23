"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const sourceArray = [1, 2, 3, 4, 5];
const numGroups = 3;
const result = (0, index_1.groupArrayElements)(sourceArray, numGroups);
console.log('Source array:', sourceArray);
console.log('Number of groups', numGroups);
console.log('Result:', result);
