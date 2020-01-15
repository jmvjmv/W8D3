// Array#uniq 
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose


Array.prototype.uniq = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i]) === -1) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

// console.log([1,2,2,3,3,3].uniq()) // =>  [1,2,3]

Array.prototype.twoSum = function () {
    let newArr = [];

    for (let i = 0; i < this.length -1; i++) {
        for (let j = i + 1; j < this.length -1; j++) {
            if (this[i] + this[j] === 0) {
                newArr.push([i, j]);
            }
        }
    }
    return newArr;
};


Array.prototype.transpose = function () {

    var newArray = []; // [ [] [] [] ]
    for (var i = 0; i < this.length; i++) {
        newArray.push([]);
    };

    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            newArray[j].push(this[i][j]);
        };
    };

    return newArray;
}

console.log([[1,2,3], [4,5,6], [7,8,9]].transpose())  // --> [[0,1],[0,4],[2,5]]

// - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array

