var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-txt");
var outputText = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function translationURL(text) {
    return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("Error occured: " + error);
}

function clickHandler() {
    var input = inputText.value;

    fetch(translationURL(input))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickHandler);