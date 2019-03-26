function triangleType(){

var sides = []
sides.push(document.getElementById('hypotenuse').value);
sides.push(document.getElementById('adjascent').value);
sides.push(document.getElementById('opposite').value);

var hypotenuse=sides[0]
var adjascent=sides[1]
var opposite=sides[2]

/* console.log(sides); */
if (isNaN(hypotenuse) || isNaN(adjascent) || isNaN(opposite)){
  output.innerHTML=("wrong content entered")
}
else if (hypotenuse===adjascent  &&  adjascent===opposite){
output.innerHTML=("equilateral triangle")
}

else if (hypotenuse===adjascent  &&  hypotenuse!==opposite || hypotenuse===opposite  &&  hypotenuse!==adjascent|| adjascent===opposite  &&  adjascent!==hypotenuse){
output.innerHTML=("isosceles triangle")
}

else if(hypotenuse!==adjascent && adjascent!==opposite && hypotenuse!==opposite){
output.innerHTML=("scalene triangle")
}
else if(hypotenuse>=adjascent+opposite||adjascent>=hypotenuse+opposite||opposite>=hypotenuse+adjascent){
output.innerHTML=("NOT a triangle")
}
}
