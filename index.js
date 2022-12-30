const conEl=document.querySelector(".container");
const career=["Engineer","Web Developer","Student","Football Player"];
let index=0;
let characterIndex=0;
upDateText();
function upDateText(){
    characterIndex++;
    conEl.innerHTML=`<h1>I am ${career[index].slice(0,1)==="E" ? "an":"a" } ${career[index].slice(0,characterIndex)}</h1>`
    
    if(characterIndex===career[index].length) {
        index++;
        characterIndex=0;
    }
    if(index===career.length){
        index=0;
    }
    setTimeout(upDateText,400);
}
