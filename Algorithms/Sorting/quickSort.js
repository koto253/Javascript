function swap(arr, firstIndex, secondIndex) {
   let temp = arr[firstIndex];
   arr[firstIndex] = arr[secondIndex];
   arr[secondIndex] = temp;
}