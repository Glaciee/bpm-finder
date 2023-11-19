let numberOfProcess = 0;
let seconds = 0; 
let tens = 0;
let Interval ;

const num = document.querySelector('.num');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

const clickHandler = () => {
  numberOfProcess++;
  num.innerHTML = numberOfProcess;
};

buttonStart.addEventListener('click',() => {
	numberOfProcess++;
  num.innerHTML = numberOfProcess;
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});
  
buttonStop.addEventListener('click',() => {
  clearInterval(Interval);
});

buttonReset.onclick = () => {
	clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  num.innerHTML = 0;
  numberOfProcess = 0;
}
  
function startTimer () {
	tens++; 
    
  if(tens <= 9){
  	appendTens.innerHTML = "0" + tens;
  }
    
  if (tens > 9){
  	appendTens.innerHTML = tens;
  } 
    
  if (tens > 99) {
  	console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
    
  if (seconds > 9){
  	appendSeconds.innerHTML = seconds;
  }
  
}
