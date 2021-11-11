"use strict"

function split2(e){

    if(e.shiftKey){
        this.parentNode.addEventListener("click",split2)
        this.parentNode.innerHTML=''
    }
    else{

    
    addQuarter(this)
    addQuarter(this)
    }
    volume-=0.02// turns volume down 2% each time it is clicked
    if(volume<0){
        volume=0
    }
    audio.volume=volume
     
    e.stopPropagation()
}


function addQuarter(intoDiv){
    let q = document.createElement("div")

    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split2)

    intoDiv.appendChild(q)

}

document.body.addEventListener("click",split2)



let timer=0


  
let bestTime=parseInt(localStorage.getItem("timer"))
document.getElementById("best-time").innerText=bestTime
let volume=0.5
let audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "Sounds/sam.mp3"
audio.volume=volume
document.body.addEventListener("mousemove", function () {
audio.play()
})
  


function getLouder(){
    volume+=0.005 // increases volume by.5%
    document.getElementById("volume").innerHTML= Math.floor(volume*100)
}

setInterval(getLouder,100) // calls get louder 10* per second(every 100 milliseconds)

function timeUp(){
    timer+=1
    document.getElementById("timer").innerHTML= timer

    if(timer>bestTime){
        localStorage.setItem("timer",timer)
    }

}
setInterval(timeUp,1000)


