let numberOfProcess = 0;
let seconds = 0; 
let tens = 0;
let totaltime = 0;
let totaltime2 = 0;
let Interval ;
let avgbpm;
let time_btwn_note = [];
let bpm_per_note = [];

const num = document.querySelector('.num');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const instantbpm = document.getElementById("instantbpm");

const clickHandler = () => {
  numberOfProcess++;
  num.innerHTML = numberOfProcess;
};

buttonStart.addEventListener('click',() => {
	numberOfProcess++;
  num.innerHTML = numberOfProcess;
  if (numberOfProcess != 1){
  bpm_per_note.push(numberOfProcess * 60 / ((totaltime - totaltime2) / 100));
  time_btwn_note.push(totaltime - totaltime2);
  }
  instantbpm.innerHTML = numberOfProcess * 60 / (totaltime / 100);
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  totaltime2 = totaltime
  
});
  
buttonStop.addEventListener('click',() => {
  clearInterval(Interval);
  let len = time_per_note.length;
  avgbpm = (totaltime / 100) * 60 / numberOfProcess;
	  
});

buttonReset.onclick = () => {
	clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  num.innerHTML = 0;
  numberOfProcess = 0;
  instantbpm.innerHTML = 0;
  totaltime = 0;
  time_btwn_note.length = 0;
  bpm_btwn_note.length = 0;
  
}
  
function startTimer () {
	tens++; 
  totaltime++;
    
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
