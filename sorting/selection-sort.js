"use strict";
const swap = function (array, i, k) {
    let t = array[i];
    array[i] = array[k];
    array[k] = t;
};

const sort = function (array) {
    let len = array.length;
    if (!array || !len) {
        return [];
    }
    if (len === 1) {
        return array;
    }
    for (let i = 1; i < len; i++) {
        let temp = array[i - 1];
        for (let j = i; j < len; j++) {
            if (array[j] < temp) {
                swap(array, i - 1, j);
            }
        }
    }
    return array;
};
// better version of selection sort
const betterVersionSort = function (array) {
    let len = array.length;
    if (!array || !len) {
        return [];
    }
    if (len === 1) {
        return array;
    }
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        let minValue = array[i];
        for (let j = i + 1; j < len; j++) {
            if (array[j] < minValue) {
                minIndex = j;
                minValue = array[j];
            }
        }
        // swap
        // make the swap operation outside the inner for loop helps improving the efficiency.
        let temp = array[i];
        array[i] = minValue;
        array[minIndex] = temp;
    }
    return array;
};