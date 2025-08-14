function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  let fine_with_total = fare + fare * (20 / 100) + 30;
  return fine_with_total;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let new_str = str.trim().split(" ").join("").toUpperCase();
  return new_str;
}

function bestTeam(player1, player2) {
  if (typeof player1 && typeof player2 !== "object") {
    return "Invalid";
  }
  let Player1 = player1.foul + player1.cardY + player1.cardR;
  let Player2 = player2.foul + player2.cardY + player2.cardR;
  if (Player1 < Player2) {
    return player1.name;
  } else if (Player1 > Player2) {
    return player2.name;
  } else if (Player1 === Player2) {
    return "Tie";
  }
}

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) {
      return false;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let total = 0;
  let pass = 0;
  let fail = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] >= 40) {
      pass += 1;
    } else {
      fail += 1;
    }
  }
  let finalScore = Math.round(total / marks.length);
  return { finalScore, pass, fail };
}
