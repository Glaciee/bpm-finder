let numberOfProcess = 0;

const add = document.getElementById('myClickButton');
const num = document.querySelector('.num');
let seconds = 0; 
let tens = 0; 
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

const clickHandler = () => {
  numberOfProcess++;
  num.innerHTML = numberOfProcess;
};

buttonStart.addEventListener('click', function() {
      numberOfProcess++;
  num.innerHTML = numberOfProcess;
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  });
  
buttonStop.addEventListener('click', function() {
  clearInterval(Interval);
});
  
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
  
add.addEventListener('click', clickHandler);

