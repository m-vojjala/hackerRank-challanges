function birthdayCakeCandles(candles) {
  // Write your code here
  let highestNum = Math.max(...candles);
  // console.log(highestNum)
  const NumOfCandles= candles.filter(element=>element === highestNum);
  return NumOfCandles.length;
}
console.log(birthdayCakeCandles([3,2,1,3]))