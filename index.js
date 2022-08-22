// code your solution here

function superbowlWin(record){


    const winningYear= record.find(records=>records.result==="W");
   
   
  if( winningYear){
    return winningYear.year
  }

}
