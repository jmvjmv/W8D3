// Array# bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm
// String# substrings - receives a string, returns an array of all substrings

Array.prototype.bubbleSort = function(){
    let sorted = false;
    while (!sorted){
        sorted = true;
        for (let i = 0; i < this.length -1; i++){
            if (this[i] > this[i+1]) {
                [this[i], this[i + 1]] = [this[i+1], this[i]]
                sorted = false;
            }
        }
    }
    return this
}

// console.log([1,6,4,6,3,8,2].bubbleSort())


String.prototype.substrings = function(){
    let arr = [];
    for (let i = 0; i < this.length; i++){
        for (let j = i + 1; j <= this.length; j++){
            arr.push(this.slice(i, j))
        }
    }
    return arr;
}

// console.log("hello".substrings())