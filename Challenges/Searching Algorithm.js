function linearSearch(arr, value) {
    // loop through each element of the array
    let result;
    for(let i = 0; i < arr.length;) {
        if(arr[i] === value)  result = i;
        i++ 
    }
    result===[] ? console.log(-1) : console.log(result);
    // check if the arr element === value
    // if yes print i
    // if not print -1 
}

linearSeach([10, 15, 20 , 25], 15);


