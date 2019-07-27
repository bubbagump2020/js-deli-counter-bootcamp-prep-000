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

function currentLine(katzDeliLine){
  var currentLine = []
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++){
      katzDeliLine.push(i+1 "." )
    }
    
  }
  
  
}