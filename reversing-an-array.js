const reverseArray = function (list) {
    newArray = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newArray.push(list[i]);
    }
    return newArray;
}

const reverseArrayInPlace = function (list) {
    let newArray = [];
     for (let i = list.length - 1; i >= 0; i--) {
        newArray.push(list[i]);
        list.pop();
    }
    for (let i of newArray) {
        list.push(i)
    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);