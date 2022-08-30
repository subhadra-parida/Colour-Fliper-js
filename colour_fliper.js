const char = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random()*char.length)
}
console.log(getRandomNumber())

btn.addEventListener("click",function(){
    let hexcolour = "#"
    for (let i=0;i<6;i++){
        hexcolour += char[getRandomNumber()]
    }
    color.textContent = hexcolour;
    document.body.style.background=hexcolour
})