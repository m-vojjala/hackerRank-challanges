// write an algorithm to determine if a number is happy

/* Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers. */

const happyNum = (n) =>{
let sum = 0;
while(n > 0){
  // gives the last digit(ones place value)
let e = n % 10;
// gives the first digit 
n = Math.floor(n/10);
sum += e*e
}
if(sum === 1){
  return true;
}else if(sum > 1 && sum <= 4){
  return false;
}
return happyNum(sum);
}

console.log(happyNum(12))