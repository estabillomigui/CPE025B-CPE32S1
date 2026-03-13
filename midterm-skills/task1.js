function sumDeepStrictNumbers(arr) {
    let sum = 0;

    for (let elem of arr){
        if(Array.isArray(elem)){
            sum += sumDeepStrictNumbers(elem);
        }

        else if(typeof elem === 'number' && !Number.isNaN(elem)){
            sum += elem;
        }
    }

    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));