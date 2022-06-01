window.addEventListener('keydown', function(e){
// console.log(e.keyCode);
const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
if(!audio) return; //stop the function from running all together(will not execute next lines)
// console.log(audio);
audio.currentTime = 0;  //rewind to start
audio.play();  //if call .play on audio element that is already playing it wont play it again
// console.log(key);
// key.addClass('playing'); //jQuery
key.classList.add("playing"); // Vanilla js
});

function removeTransition(e) {
    if(e.propertyName !== "transform") return; //skip if its not transform (transfor cause it is taking longest time and coming at last)
    this.classList.remove("playing");
    // console.log(e.propertyName);
    // console.log(this);
}

const keys=document.querySelectorAll(".key-btn");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(keys);
console.log("hi");