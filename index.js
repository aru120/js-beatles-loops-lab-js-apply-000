// add solution here
const musician = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"];
const instrument = ["Guitar","Bass Guitar","Head Guitar","Drums"];
const theyplay =[];
function theBeatlesPlay (musician,instrument){
  for (let i=0; i<musician.length;i++){
    const str = musician[i] + " plays " + instrument[i];
    theyplay.push(str);
  }
  return theyplay;
}

 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts){
 let i=0;
 const excla = [];
 while (facts.length < i){
    excla[i] = facts[i]+"!!!";
    
 }
 return excla;
}



