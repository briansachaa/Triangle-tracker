// ........................
var tirangleType = function() {
  var hypotenuse = parsefloat(document.getElementById('hypotenuse').value);
  var adjacent = parsefloat(document.getElementById('adjascent').value);
  var opposite = parsefloat(document.getElementById('opposite').value);

  var output = document.getElementById('output')

  if(hypotenuse === opposite && hypotenuse === hypotenuse && opposite === adjacent){
  output.textContent = "Equilateral";
  }
  else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
  output.textContent = "Isosceles";
  }
  else if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
   output.textContent = "Not a definite triangle";
  else{
  output.textContent = "Scalene";
  }
};
