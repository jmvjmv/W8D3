// range(start, end) - receives a start and end value, returns an array from start up to end

function range(start, end) {
    if (start === end) {
        return [];
    }

    let arr = range(start, end-1);
    arr.push(end)
    return arr; 
}

// console.log(range(0,10));


// sumRec(arr) - receives an array of numbers and recursively sums them

function sumRec(arr) {
    if (arr.length === 0) {
        return 0; 
    } else {  
        return arr[0] + sumRec(arr.slice(1));
    } 
}

// var sumRec = (array) => (array.length === 0) ? 0 : array[0] + sumRec(array.slice(1));

// console.log(sumRec([1,2,3,4,5])) // => 15

// console.log([1,2,3,4,5].slice(1))



// exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent(base ^ exp)

function exponent(base, exp){
    if (exp === 0) {
        return 1;
    } else {
        return (base * exponent(base, exp-1))
    }
}


// console.log(exponent(3,3)) // => 27

// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

function fibonacci(n) {

    if (n <= 2) {
        return [0, 1].slice(0, n);
    }

    let arr = fibonacci(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    
    return arr;
}


// console.log(fibonacci(10));


// deepDup(arr) - deep dup of an Array!

function deepDup(arr){
    if (!(arr instanceof Array)){
        return arr;
    }
    return arr.map((ele) => {
        return deepDup(ele);
    });
    
}

// const map1 = array1.map(x => x * 2);


// console.log(deepDup([1,2,3,[4,5,[6]]]));

// console.log([] instanceof Array);


