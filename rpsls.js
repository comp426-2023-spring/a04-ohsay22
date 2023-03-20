export function rps(shot) {
  const choices = ["rock", "paper", "scissors"];
  
  if(shot == null){
    return{"player": choices[Math.floor(Math.random() * choices.length)]};
  }
  const opp = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (shot === opp) {
    result = "tie";
  } else if (
    (shot === "rock" && opp === "scissors") ||
    (shot === "paper" && opp === "rock") ||
    (shot === "scissors" && opp === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  
  return `You chose ${playerChoice}, computer chose ${opp}. ${result}`;
}

export function rpsls(shot) {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  
  if(shot == null){
    return{"player": choices[Math.floor(Math.random() * choices.length)]};
  }
  const opp = choices[Math.floor(Math.random() * choices.length)];
  
  if(!hand.includes(shot)){
        console.log("Argument out of range!");
        console.error();
  }
  let result;
  if (shot === opp) {
    result = "tie";
  } else if (
    (shot === "rock" && (opp === "scissors" || opp === "lizard")) ||
    (shot === "paper" && (opp === "rock" || opp === "spock")) ||
    (shot === "scissors" && (opp === "paper" || opp === "lizard")) ||
    (shot === "lizard" && (opp === "paper" || opp === "spock")) ||
    (shot === "spock" && (opp === "rock" || opp === "scissors"))
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  return `You chose ${shot}, computer chose ${opp}. ${result}`;
}
