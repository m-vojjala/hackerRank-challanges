function chiefHopper(arr) {
  // Write your code here
  let energy = 0;
  let newEnergy; 
  for(let num of arr.reverse()){
    // newEnergy = energy - num+energy;
    // newEnergy = 2* energy - num;
    // energy = newEnergy + num /2
    energy = Math.ceil((energy + num)/2);
  }
  return energy;

}
console.log(chiefHopper([1,6,4]))