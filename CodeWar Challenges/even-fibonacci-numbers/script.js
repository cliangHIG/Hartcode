// fibonacci sequence under a value
// check to see if each value is even
// sum the even ones


// Opt 1 using while loop
function fibonacciVariables (limit) {
    let sum = 0;
    let first = 1;
    let second = 1;
    let evenSum = 0;

    while (first + second <= limit) {
        sum = first + second;
        first = second;
        second = sum;
        if (sum % 2 === 0) evenSum += sum ;
    }
    return evenSum;
}

console.log(fibonacciVariables(4000000));

//Opt 2 using array

function sumLastTwoItems(arr) {
    return arr[arr.length - 1] + arr[arr.length -2]
}

function fibonacciArray(limit) {
    let sequence = [1, 1];

    while (sumLastTwoItems(sequence) <= limit) {
        sequence.push(sumLastTwoItems(sequence));
    }

return sequence;
    
}

function findSumEvenValues(arr) {
    let sum = 0;
    arr.forEach(item => {
        if (item % 2 === 0) sum += item;     
    });
    return sum;
}

let fibonacciSequence = fibonacciArray(400);
console.log(findSumEvenValues(fibonacciSequence));
