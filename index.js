function theBeatlesPlay(musicians, instruments){
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for (var i=0; i<4; i++){
    return musicians[i] + " plays " + instruments[i] + "!";
    //var obj=[musicians[i]+" plays "+ instruments[i] + "!"];
    //return obj;
    }
  }
  
  
  
/*function johnLennonFacts(){
 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
    ];
    facts[i] = 0;
    while (facts[i] < 4){
      facts[i] ++;
      return facts[i]+"!!!";
    }
}*/
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  //var array = [];
  //for(var i=0; i<4; i++){
  //fact = facts[i] + "!!!"
  //}
     n=0;
     while (n<4) {
     fact = facts[n] + "!!!";
     n++;
     //array.push(fact)
     }
  return fact;  
}

function iLoveTheBeatles(i){
  do {
    test= "I love the Beatles!";
    i++;
  }
  while(i<15);
}