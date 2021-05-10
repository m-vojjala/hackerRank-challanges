function twoStrings(s1, s2) {
  // Write your code here
  s1=s1.split('');
  s2 = s2.split('');
  for(let substring of s1){
     if(s2.includes(substring)){  
      return "YES"
     } 
  }
  return "NO"

}

console.log(twoStrings("hi","world"));
