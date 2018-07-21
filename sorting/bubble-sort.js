"use strict";
/**
 * @thoughts:
 *     as the name says.
 * @param {Array} list 
 */
function bubbleSort(list) {
    if (!list || !list.length) {
        return [];
    }
    const length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < lengt; j++) {
            if (list[i] < list[j]) {
                swap(list[i], list[j]);
            }
        }
    }
    return list;
}

function swap(item1, item2) {
    let t = item1;
    item1 = item2;
    item2 = t;
}