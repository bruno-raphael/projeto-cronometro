

const minutes1 = document.querySelector("#minutes")
const seconds1 = document.querySelector("#seconds")
const milleSeconds1 = document.querySelector("#milleseconds")
const buttonStart = document.querySelector("#start")
const buttonStop = document.querySelector("#stop")
const buttonReturn = document.querySelector("#return")
const buttonReset = document.querySelector("#reset")

let interval;
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let isPaused = false;


buttonStart.addEventListener("click", starTimer)
buttonStop.addEventListener("click", stopTimer)
buttonReturn.addEventListener("click", returnTimer)
buttonReset.addEventListener("click", resetTimer)

function starTimer (){

    interval= setInterval(()=>{
        if(!isPaused){
            milleseconds += 10;

            if(milleseconds===1000){

                seconds++;
                milleseconds=0;
                }
            if (seconds ===60){
                minutes++;
                seconds=0;

            }    
            minutes1.textContent =formaTime (minutes);
            seconds1.textContent = formaTime (seconds);
            milleSeconds1.textContent = formatMilliseconds (milleseconds);


        }

        
    }, 10);

    buttonStart.style.display = "none";
    buttonStop.style.display = "block";

}
function stopTimer (){

    isPaused =true;
    buttonStop.style.display = "none";
    buttonReturn.style.display = "block";


}

function returnTimer (){

    isPaused =false;
    buttonStop.style.display = "block";
    buttonReturn.style.display = "none";


}

function resetTimer (){

    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milleseconds = 0;

    minutes1.textContent="00"
    seconds1.textContent = "00"
    milleSeconds1.textContent ="000"

    buttonStart.style.display = "block";
    
    buttonStop.style.display = "none";
    buttonReturn.style.display = "none";


}
function formaTime(time){
    return time <10 ? `0${time}` :time;
}

function formatMilliseconds (time){
    return time <100 ? `${time}` .padStart(3, "0") :time;


}

