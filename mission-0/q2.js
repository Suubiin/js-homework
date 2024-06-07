function getNumberAtArray(arr, index) {
  if(Array.isArray(arr)){
    if(index >= 0 && index < arr.length){
      return arr[index];
    }
    else{
      return 'Error!';
    }
  }
  else{
    return 'Error!';
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!