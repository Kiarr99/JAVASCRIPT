function insertionsort(array) {
  
  var i;
  var j;
  for (i = 0; i < array.length-1 ;i++) {
    if (array[i] > array[i+1]) {
      
      for (j = i; j >= 0; j--) {
        
        var save_value = array[j];
        array[j] = array[j+1];
        array[j+1] = save_value;
        
      }

      
    }
  }
  
  
  return array
  
}


console.log(insertionsort([]))
