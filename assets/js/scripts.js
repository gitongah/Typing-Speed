const testWrapper = document.querySelector('.test-wrapper');
const testArea = document.querySelector('#test-area');
const originText= document.querySelector('#origin-text p').innerHTML;
const resetButton= document.querySelector('#reset');
const theTimer= document.querySelector('.timer');

let timer = [0,0,0,0];
let interval;
let timeRunning=false;


// add leading zero to numbers 9 or below(purely for asthetics)
function leadingZero(time) {
    if (time<=9){
        time='0'+time;

    }
    return time;
}

function runTimer(){
    currentTime= leadingZero(timer[0])+ ':' + leadingZero(timer[1]) +':' + leadingZero(timer[2]) ;
    theTimer.innerHTML=currentTime;
    timer[3]++
    timer[0]= Math.floor((timer[3]/100)/60);
    timer[1]= Math.floor((timer[3]/100)- (timer[0]*60));
    timer[2]= Math.floor((timer[3])- (timer[1]*100)-(timer[0]*6000));

}
function checkSpelling(){
    let textEntered=testArea.value;

    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText){
        clearInterval(interval)
        // testWrapper.style.borderColor='#429890';
        console.log('Good JOB');
    }else{
        if (textEntered== originTextMatch){
            // testWrapper.style.borderColor='#65CCf3';
            console.log('Almost there');
        }else{
            // testWrapper.style.borderColor='#E95D0F'
            console.log('ooops!');
        }
    }
    // console.log(textEntered);
}

function start(){
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timeRunning){
        timeRunning=true;
        interval=setInterval(runTimer,10);
    }
    console.log(textEnteredLength);
}

function reset(){

    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timeRunning=false;

    testArea.value='';
    theTimer.innerHTML='00:00:00'
    // console.log('The reset button has been pressed');

}




testArea.addEventListener('keypress',start,false);

testArea.addEventListener('keyup',checkSpelling,false);

resetButton.addEventListener('click', reset,false);