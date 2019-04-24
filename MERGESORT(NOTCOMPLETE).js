function mergesort(array) {
  
  //var left_index = Math.round(array.length/2) 
  //var right_index = array.length - left_index
  const left_index = 1;
  var right_index = array.length;
  
  if (array.length == 1) {
    return array
  }
  
  if (left_index < right_index) {
    var m = left_index + (right_index-left_index)/2
    return m
    return mergesort(array.slice(0,left_index)) + mergesort(array.slice(right_index+1))

  }
  
  
  

}

console.log(mergesort([1,2,3,4,5]))
