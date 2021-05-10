function jumpingOnClouds(c) {
  let jumps  = 0;
  // Write your code here
  console.log(c.length)
  for(let i = 0; i < c.length-1 ; i++){
 if(c[(i+2)] < c.length && c[(i+2)] === 0){
  jumps += 1;
  console.log("-------------",i)
  i++;
  console.log(i)
 }else{
  jumps +=1;
 }
  }
return jumps
}

console.log(jumpingOnClouds([0,0,0,0,1,0]))