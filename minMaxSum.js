function miniMaxSum(arr) {
  const totalSum = arr.reduce((total,num)=> total+num,0
  )
  console.log(totalSum);
  console.log(totalSum-Math.max(...arr),totalSum - Math.min(...arr))
  // arr= arr.sort();
  // let min;
  // let max;
  // // Write your code here
  // for(let num of arr){
  //  min = arr[0] + arr[1] + arr[2] +arr[3] ;
  //  max = arr[1] + arr[2] + arr[3] +arr[4] 
  
  // }
  // return [min,max]
}

console.log(miniMaxSum([1,2,3,4,5]))