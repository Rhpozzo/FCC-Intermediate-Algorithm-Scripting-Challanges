function destroyer(arr) {
    let nArr = arr;
    let arrV = [];
    let result = [];

    for (let i = 1; i < arguments.length; i++) {
        arrV.push(arguments[i])
    }

    for (let diff of nArr) {
        if (arrV.indexOf(diff) == -1) {
            result.push(diff)
        }
    }
    return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))