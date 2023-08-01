/** @format */

// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrapper = "*") {
  // Implement the function logic here
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
