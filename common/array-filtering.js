const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {

    return num % 2 == 0;
};

const filterArray = (arrayToFilter, filterFn) => {
    const filteredArr = [];

    
    arrayToFilter.forEach(numb => {
        if (filterFn(numb)) {
            filteredArr.push(numb);
        }
    });
    return filteredArr;
}
console.log(filterArray(mixedArray, isEven));