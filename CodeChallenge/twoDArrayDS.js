

function hourglassSum(arr) {
   // Write your code here
   let maxSum = -63;
   for (let i = 0; i < arr.length - 2; i++) {
       for (let j = 0; j < arr.length - 2; j++) {
           let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
           let mid = arr[i+1][j+1];
           let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
           
           let sum = top + mid + bottom;
           maxSum = Math.max(maxSum, sum); 
       }
   }
   // The function should return an INTEGER!! 
   return maxSum;
}