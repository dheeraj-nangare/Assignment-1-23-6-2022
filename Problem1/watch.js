function showdate() {
  let todayDate = new Date ()
  document.getElementById("datecontainer").innerText = todayDate.toDateString();

}
showdate()

function showTime(){
  let todayDate = new Date();
  let hours = todayDate.getHours();
  let minutes = todayDate.getMinutes(); 
  let seconds = todayDate.getSeconds();
  let session='AM'
  if(hours == 0){
    hours = 12
  }
else if(hours > 12){
  session = 'PM'
  hours = hours - 12
}

hours = hours < 10 ? 0 + "" + hours : hours
minutes = minutes < 10 ? 0 + "" + minutes : minutes
seconds = seconds < 10 ? 0 + "" + seconds : seconds


let clockTime = hours + " : " + minutes + " : " + seconds + " " + session
document.getElementById("clockcontainer").innerText =  clockTime;

}

let intervalref;
function startClock(){
 intervalref = setInterval(showTime, 1000);
}

function stopClock(){
  clearInterval( intervalref)
}
