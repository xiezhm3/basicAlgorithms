(function () {
    "use strict";
    /**
     * 
     * 缺点是，它需要Ω(n)的额外存储空间，也就跟归并排序一样不好。
     * 额外需要的存储器空间配置，在实际上的实现，也会极度影响速度和高速缓存的性能 
     */
    var quick = function (dataList) { // TODO add a chart to display the whole work flow
        if (dataList.length <= 1) {
            return dataList;
        }
        var pivotIndex = Math.floor(dataList.length / 2);
        var pivot = dataList.splice(pivotIndex, 1)[0]; // the select of pivot is randomly, usually choose the middle one

        var left = [],
            right = [];

        for (var t of dataList) {
            if (t < pivot) {
                left.push(t);
            } else {
                right.push(t);
            }
        }
        return quick(left).concat([pivot], quick(right));
    };

    var swap = function (array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    var partition = function (array, left, right) {
        var partitionIndex = left;
        var pivot = array[right];
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, i, right);
                partitionIndex++;
            }
        }
        swap(array, partitionIndex, right); // get the right position of partition index
        return partitionIndex;
    };

    /*
     * in place partition
     */
    var sort = function (array, left, right) {
        if (left > right) {
            return;
        }
        var partitionIndex = partition(array, left, right);
        sort(array, left, partition - 1);
        sort(array, partition + 1, right);
    };

    var sortBtn = document.getElementsByClassName("sort")[0];
    sortBtn.addEventListener("click", function () {
        var dataList = document.getElementsByClassName("list")[0].value.split(",");
        var sortedList = quick(dataList).join(",");
        var sorted = document.getElementsByClassName("sorted")[0];
        sorted.innerHTML = "Output: [ " + sortedList + " ]";
    }, false);

})();