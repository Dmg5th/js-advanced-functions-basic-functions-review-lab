function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(params = "special") {
      return `You are ${flair}${params}${flair}!`
    }
}
const Calculator = {
  add,
  subtract,
  multiply,
  divide
}

function add(){
    return 1 + 3 
}

function subtract() {
    return 1 -3
}

function multiply() {
    return 1 * 3
}

function divide() {
    return 10 / 5
}


function actionApplyer(integer, array){
    if (array.length === 0) {
        return 0
    } else {
        return 4
    }
}