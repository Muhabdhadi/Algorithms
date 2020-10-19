function countUniqueValues(sortedArray){
    // set two pointers one in 0 index and the other in 1 index
    let pointer1 = 0;
    let pointer2 = 1 ;
    console.log('hey');

    // compare the two pointers  
    for(let i = 0; sortedArray.length; i++) {
        if(sortedArray[i] !== sortedArray[pointer2]) {
            pointer2++;
            sortedArray[i] = sortedArray[pointer2]
        }
    }
    return pointer2 + 1;
    // if the fist pointer = the second pointer then move the second pointer
    // if the first pointer != the second pointer then move the first pointer +1 and set its value to the second pointer value

  }

  countUniqueValues([1,2,2,5,7,7,99])


