// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let min = arr[0]
for(let i = 0 ; i < arr.length ; i++){
 if(arr[i] < min){
   console.log(arr[i])
 }
}

}
console.log(miniMaxSum([1, 2, 3, 0, 5]))