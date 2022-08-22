
function superbowlWin(record){

  let yearWin=record.find(record=>record.result==="W")
if(yearWin){
  return yearWin.year
}
 
}