window.addEventListener("load",loaded,false);
 
function loaded(){
  var som = document.getElementById("som");
  var invoer = document.getElementById("invoer");
  var plaatje = document.getElementById("plaatje");
  var button = document.getElementById("button");
 
 
var a = Math.floor(Math.random()*9+1);
var b = Math.floor(Math.random()*9+1);
var opgave = a + " * " + b;
var score;
var myScore,myTime;
var hiScores = [];
 
 
som.innerHTML = opgave;
button.addEventListener("click",clicked,false);
function clicked(){
  if(invoer.value == eval(opgave)){
    plaatje.src = "goed.jpg";
 
    loaded();
  } else {
    plaatje.src = "fout.jpg";
    }
  }
  var wage = document.getElementById("invoer");
  invoer.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) { 
          clicked(e);
      }
  });
}
