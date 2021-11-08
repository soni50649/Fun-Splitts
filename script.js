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


let audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "Sounds/sam.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})
    
document.getElementById("sound").play()