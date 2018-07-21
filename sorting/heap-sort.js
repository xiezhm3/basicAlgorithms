"use strict";

const swap = function (array, i, k) {
    let t = array[i];
    array[i] = array[k];
    array[k] = t;
};

/**
 * Check the heap is max heap or not from the 'index' postion
 * @array
 * @index
 * @heapSize
 */
const maxHeapify = function (array, index, heapSize) {
    let iMax = index,
        iLeft = 2 * index + 1,
        iRight = 2 * (index + 1);

    if (iLeft < heapSize && array[index] < array[iLeft]) {
        iMax = iLeft;
    }

    if (iRight < heapSize && array[iMax] < array[iRight]) {
        iMax = iRight;
    }

    if (iMax !== index) {
        swap(array, iMax, index);
        maxHeapify(array, iMax, heapSize);
    }
};

/**
 * from the bottom to the top building the max heap
 * @param {*} array 
 * @param {*} heapSize 
 */
const buildMaxHeap = function (array, heapSize) {
    let iParent = Math.floor((heapSize - 1) / 2); // get the current element's parent index

    for (let i = iParent; i >= 0; i--) {
        maxHeapify(array, i, heapSize);
    }
};

/**
 * 
 * @param {*} arr 
 */
const heapSort = function (arr) {
    const len = arr.length;
    if (!arr || !len) {
        return;
    }
    if (len === 1) {
        return arr;
    }

    buildMaxHeap(arr, len); // change the arr to the max heap data structure

    for (let i = len - 1; i > 0; i--) {
        swap(arr, 0, i);
        maxHeapify(arr, 0, i); // 'i' is the key
    }

    return arr;
};
// bubkoo.com/2014/01/14/sort-algorighm/heap-sort
module.default = {};