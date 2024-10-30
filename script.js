let bubb = "";
let rn;
let rn1;
let time =0;
let time2=5;
let score = 0;
let pbtm= document.querySelector('#pbtm');
let btn= document.querySelector(".btn1");
let hit= document.querySelector('#hitt');
let sc=document.querySelector('#scoree');

btn.addEventListener('click',()=>{
    btn.style.visibility='hidden'; 
    btn.style.transition="none";
    time=30;
    timer();
    bubble();
    hitval();
    sc.textContent='0'
    score=0; 
});

  pbtm.addEventListener('click', function (dets) {
    let clickedval = Number(dets.target.textContent);
    if (clickedval === rn1) {
        scoreincrease();
        bubble();
        hitval();
       
    }
})
 function intialinstruction(){
    let interval2=setInterval(function(){
  if(time2>=0)
  {    time2--;
    pbtm.innerHTML =`<h1>This is a bubble game. Here you have to hit the number shown on the hit option and the score will increase by 10 and the time will be 30 seconds</h1>`;
  }else{
    clearInterval(interval2);
    time=30;
    timer();
    bubble();
    hitval();
  }
},1000)
 }

function scoreincrease() {
    score += 10;
   sc.textContent = score;
}
function bubble() {
    for (let i = 0; i < 105; i++) {

        rn = Math.floor(Math.random() * 10);
        bubb += `<div class="bubble" >${rn} </div>`;

    }
     pbtm.innerHTML = bubb;
    bubb = "";

}
function timer() {
    let inter = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector('#timerr').textContent = time;
        }
        else {
            clearInterval(inter);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over and your score is ${score}🏆</h1>`;
          hit.innerHTML = 'Now take rest 😊';
          btn.style.visibility='visible';  
          btn.style.transition="  all ease 0.9s";
        }
    }, 1000);
}
function hitval() {
    rn1 = Math.floor(Math.random() * 10);
    document.querySelector('#hitt').textContent = rn1;
}
intialinstruction();

// timer();
// bubble(); 
