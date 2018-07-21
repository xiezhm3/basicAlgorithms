"use strict";

const swap = function (array, i, k) {
    let t = array[i];
    array[i] = array[k];
    array[k] = t;
};

const sort = function (array) {
    const len = arr.length;
    if (!arr || !len) {
        return;
    }
    if (len === 1) {
        return arr;
    }

    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            } else {
                break;
            }
        }
    }

    return array;
};

// 减少交换次数
const insertionSort = function (array) {
    const len = arr.length;
    if (!arr || !len) {
        return;
    }
    if (len === 1) {
        return arr;
    }

    for (let i = 1; i < len; i++) {
        let temp = array[i];
        for (let j = i; j >= 0; j--) {
            if (array[j - 1] > temp) {
                array[j] = array[j - 1];
            } else {
                array[j] = temp;
                break;
            }
        }
    }

    return array;
};
// 使用二分查找可以较少比较次数