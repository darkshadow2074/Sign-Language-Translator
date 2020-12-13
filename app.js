var textarea = document.querySelector("#text-translate");
var button = document.querySelector(".btn-submit");
var translated = document.querySelector("#text-translated");
var reset = document.querySelector(".reset");
var about = document.querySelector("#about");
var aboutDiv = document.querySelector(".about");
var translate = document.querySelector("#translate");
var translateDiv = document.querySelector("#translatorDiv"); 
about.addEventListener("click" ,()=>{
        aboutDiv.style.display="block";
        textarea.style.display="none";
        button.style.display="none";
        reset.style.display = "none";
        textarea.value = "";
        translated.value="";
        translated.style.display="none";
})
translate.addEventListener("click",()=>{
    aboutDiv.style.display="none";
    textarea.style.display="block";
    button.style.display="block";
})
button.addEventListener("click", clickHandler);
reset.addEventListener("click", resetHandler);

function generateURL(value){
    var url = "https://api.funtranslations.com/translate/english-contraction.json" + "?" + "text=" + value;
    return url;
}

function clickHandler(){
    var value = textarea.value;
    if(value.length===0){
        alert("Please Enter The Text");
    }else{
        fetch(generateURL(value)).then(response=> response.json()).then(res=> {translated.textContent = res.contents.translated})
        button.style.display="none";   
        reset.style.display = "block";
        translated.style.display="block";
    }
}
function resetHandler(){
    reset.style.display = "none";
    textarea.value = "";
    translated.style.display = "none";
    button.style.display="block";
}



function errorHandler(error){
    alert("Error Detected : " + error);
}