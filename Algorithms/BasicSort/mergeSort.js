function mergeSort(arr1, arr2){

   let newArr = [];
   let i = 0;
   let j = 0;

   while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
         newArr.push(arr1[i]);
         i++;
      } else {
         newArr.push(arr2[j]);
         j++;
      }
   }
   while(i < arr1.length) {
      newArr.push(arr1[i]);
      i++;
   }
   while(j < arr1.length) {
      newArr.push(arr1[j]);
      j++;
   }


   return newArr;

}

console.log(mergeSort([1,3,7,8], [2,4,5,6]));