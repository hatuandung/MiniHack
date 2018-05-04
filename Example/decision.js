// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  var pre = history.length - 1;
  var myChoice  = true;
  var count = 0;
  var count2 = 0;
for(var i = 0; i < pre; i++){
  if(history[i].theirs == true){
    myChoice = false;
  }
  if(history[i].theirs == false){
    myChoice = true;
  }
  if(history[i].yours == false ){
    count = count + 1;
  }
  if(history[i].yours == true){
    count2 = count2 + 1;
  }
  if(history[i].yours == false && count > 20){
    myChoice = true;
  }else if(history[i].yours == true && count > 20){
    myChoice = Math.random();
    
  }else if (history[i].yours == true && history[i].theirs == true){
    myChoice = false;
  }else if (history[i].yours == true && history [i].theirs == true){
    myChoice = false;
    count = 0;
  }
  /*if(count2 - count1 == 10){
    myChoice = false;
  }

  
  /*if(history[i].yours == true && history[i].theirs == fail){
    myChoice = fail;
  }*/
  //if(p1Answer == true )
  
  
}
  

  return myChoice;
}

module.exports = decide;