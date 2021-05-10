function checkMagazine(magazine, note) {
  console.log(typeof(magazine))
magazine = magazine.split(' ');
console.log(magazine)
console.log(typeof(magazine))

note = note.split(' ');
for(let word of note){
  if(magazine.includes(word)){
    magazine.splice(magazine.indexOf(word),1);
    continue;
    // magazine.splice(magazine.indexOf())
    // return "Yes"
  }else{
    return "No"
  }
}
return "Yes"

}

console.log(checkMagazine('give me one grand today night','give one grand today'))