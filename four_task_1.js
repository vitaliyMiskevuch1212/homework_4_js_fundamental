(function (){
    function sumSliceArray(arr, first, second) {
        if (typeof first !== "number" || typeof second !== "number") {
            throw new Error("На вхідні дані прийшло не число");
        } else if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
            throw new Error("Цих чисел немає в масиві");
        } else {
            return arr[first] + arr[second];
        }
    }

    const arr = [2, "ага", 4, 5, 24, "ого"];

    try {
        console.log(sumSliceArray(arr, 2, 3));
        console.log(sumSliceArray(arr, 1, 5));
        console.log(sumSliceArray(arr, 1, 55));
    } catch (error) {
        console.error(error.message);
    }

})()
