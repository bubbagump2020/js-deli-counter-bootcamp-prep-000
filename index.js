var katzDeliLine = []

function takeANumber(currentLine, personName){
  currentLine.push(personName)
  return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    console.log("The line is currently empty.");
  } else {
     return `The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`
  }
}