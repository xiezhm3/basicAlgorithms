(function () {
    "use strict";

    var quick = function (dataList) { // TODO add a chart to display the whole work flow
        if (dataList.length <= 1) {
            return dataList;
        }
        var pivotIndex = Math.floor(dataList.length / 2);
        var pivot = dataList.splice(pivotIndex, 1)[0];  // the selec of pivot is randomly, usually choose the middle one

        var left = [], right = [];

        dataList.forEach(function (t) {
           if (t < pivot) {
               left.push(t);
           } else {
               right.push(t);
           }
        });
        return quick(left).concat([pivot], quick(right));
    };

    var sortBtn = document.getElementsByClassName("sort")[0];
    sortBtn.addEventListener("click", function () {
        var dataList = document.getElementsByClassName("list")[0].value.split(",");
        var sortedList = quick(dataList).join(",");
        var sorted = document.getElementsByClassName("sorted")[0];
        sorted.innerHTML= "Output: [ " + sortedList + " ]";
    }, false);

})();