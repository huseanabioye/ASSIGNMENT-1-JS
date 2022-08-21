

// ASSIGNMENT
const dumebiFrisScore = 96;
const dumebiScondScore = 108;
const dumebiThridScore = 89;
const dumebiAveragescore = (dumebiFrisScore +dumebiScondScore + dumebiThridScore)/3;
console.log("Dumebi Team average score is" + " " + dumebiAveragescore)

const ciromaFrisScore = 88;
const ciromaScondScore = 91;
const ciromaThridScore = 110;
const ciromaAveragescore = (ciromaFrisScore +ciromaScondScore + ciromaThridScore)/3;
console.log("Ciroma Team average score is" + " " +ciromaAveragescore)
// console.log(dumebiFineRound+ciromaFineRound);
if(ciromaAveragescore > dumebiAveragescore){
  console.log("Ciroma Team's is the winner");
}else if(dumebiAveragescore >ciromaAveragescore ){
   console.log("Dumbi Team's is the winner");
}else{
  console.log("The team's are draw");
}
 /* *********DATA1************  */


const dumebiFritScoreBonus1 = 97;
const dumebiSecondScoreBonus1 = 112;
const dumebiThirdScoreBonus1 = 101;
const dumebiAverageScoreBonus1 = (dumebiFritScoreBonus1 +dumebiSecondScoreBonus1 + dumebiThirdScoreBonus1)/3;
console.log(`DumebiAverageScore For bonus 1 is ${dumebiAverageScoreBonus1}`)


const ciromaFristScoreBonus1 = 109;
const ciromaScondScoreBonus1 = 95;
const ciromaThirdScoreBonus1 = 123;
const ciromaAverageScoreBonus1 = (ciromaFristScoreBonus1 + ciromaScondScoreBonus1 + ciromaThirdScoreBonus1)/3;
console.log(`CiromaAverageScore For bonus 1 is ${ciromaAverageScoreBonus1}`)
if(ciromaAverageScoreBonus1 >= 100 &&  ciromaAverageScoreBonus1 > dumebiAverageScoreBonus1){
  console.log(`Ciroma Team's is winner ${ciromaAverageScoreBonus1}`);
}else if(dumebiAverageScoreBonus1  >= 100 && dumebiAverageScoreBonus1 > ciromaAverageScoreBonus1){
   console.log(`Dumbi Team's is winner${dumebiAverageScoreBonus1}`);
}else{
  console.log("The team's are draw");
}
 /* *********DATA2************  */


const dumebiFristScoreBonus2 = 97;
const dumebiSecondScoreBonus2 = 112;
const dumebiThirdScoreBonus2 = 101;
const dumebiAverageBonusScore = (dumebiFristScoreBonus2 +dumebiSecondScoreBonus2 + dumebiThirdScoreBonus2)/3;
console.log(`DumebiAverageScore For bonus 2 is ${dumebiAverageBonusScore}`)

const ciromaFristScoreBonus2 = 109;
const ciromaSecondScoreBonus2 = 95;
const ciromaThirdScoreBonus2 = 106;
const ciromaAverageBonusScore = (ciromaFristScoreBonus2 +ciromaSecondScoreBonus2 +ciromaThirdScoreBonus2 )/3;
console.log(`C iromaAverageScore For bonus 2 is ${ciromaAverageBonusScore}`)
if(ciromaAverageBonusScore >= 100 &&  ciromaAverageBonusScore > dumebiAverageBonusScore){
  console.log(`Ciroma Team's is winner ${ciromaAverageBonusScore}`)
}else if(dumebiAverageBonusScore  >= 100 && dumebiAverageBonusScore > ciromaAverageBonusScore){
   console.log(`Dumbi Team's is winner ${dumebiAverageBonusScore}`);
}else{
  console.log(`The team's are draw `);
}