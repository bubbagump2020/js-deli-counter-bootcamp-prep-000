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
  }
  var lines = [];

   else{
  for (var i = 0, i < line.length, i++) {
    lines.push(i+1 "." + line[1]);
  }
  console.log("The line is currently:" + lines)
}
}