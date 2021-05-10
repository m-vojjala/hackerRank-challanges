function timeConversion(s) {
  // Write your code here
  let AMPM =s.slice(-2);
  console.log(AMPM)
  s = s.slice(0,-2).split(":");
if(AMPM === "AM" && s[0] === "12"){
  s[0] = "00";
}else if(AMPM === "PM"){
  console.log(typeof(s[0]))
   s[0] = Number(s[0]%12) +  12;
}
return s.join(':')
}
console.log(timeConversion("07:05:45PM"))
