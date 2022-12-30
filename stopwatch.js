let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval = null
let status = "stopped"

function stopWatch() {
  ms++;
  
 if(ms === 100){
  ms = 0;
  seconds++;
  
   if(seconds === 60){
    seconds = 0;
    minutes++;
    
     if(minutes === 60){
      minutes = 0;
      hours++
     }
    }
  }
  
seconds < 10 ? displaySeconds = "0" + seconds.toString() : displaySeconds = seconds;

minutes < 10 ? displayMinutes = "0" + minutes.toString() : displayMinutes = minutes;

hours < 10 ? displayHours = "0" + hours.toString() : displayHours = hours;

 document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + ms;

}

function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

function reset(){
   window.clearInterval(interval);
   ms = 0;
   seconds = 0;
   displaySeconds = 0;
   minutes = 0;
   hours = 0;
   document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}

function lapF(){
     time =  displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + ms ; 
     document.getElementById("lapCounter").innerHTML= document.getElementById("lapCounter").innerHTML + "<ul>" + time + "</ul>";
}

function plzclear(){
  document.getElementById("lapCounter").innerHTML= " ";
}



