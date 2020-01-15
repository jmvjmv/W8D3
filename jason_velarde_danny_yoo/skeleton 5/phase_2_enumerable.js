// Array# myEach(callback) - receives a callback
// function and executes the callback
// for each element in the array

Array.prototype.myEach = function(func){
    for (let i = 0; i < this.length; i++){
        func(this[i]);
    }
};

// Array# myMap(callback) - receives a callback
// function, returns a new array of the results of calling the callback
// function on each element of the array
// should use myEach and a closure


Array.prototype.myMap = function(func) {
    const mappedArray = [];

    this.myEach(function(ele) {
        mappedArray.push(func(ele));
    })
    
    return mappedArray;
};

// console.log([1,2,3,4,5,6].myMap(num => num + 2));


// Array# myReduce(callback[, initialValue]) - (like Ruby 's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

//         initialValue is optional and should
//         default to the first element of the array
//         if not provided


Array.prototype.myReduce = function (callback, initialValue){

    if (initialValue === undefined){
        initialValue = this.shift();
    }
    //We jus wanna call that call back on every ele and add that result to the inital value if given
    let returnVal = initialValue;

    this.myEach(function (ele) {
        returnVal = callback(returnVal, ele)
    })

    return returnVal

}


console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25)); // => 31


console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
})); // => 6