function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let apple_count = apples.filter(apple=>apple + a >= s && apple + a <= t).length;
  let orange_count = oranges.filter(orange=>orange + b >= s && orange + b <= t).length;
 console.log(apple_count,orange_count)
}
console.log(countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]))