var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-txt");
var outputText = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
    outputText.innerText = "Translated : " + inputText.value;

})