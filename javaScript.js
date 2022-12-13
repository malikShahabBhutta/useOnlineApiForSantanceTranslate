
var btntranslate=document.querySelector("#tex-trans")
var textinput=document.querySelector("#txt-area")
var output=document.querySelector("#result-area")

        var serverURL="https://api.funtranslations.com/translate/groot.json";

        

    function getTranslationsURL(text){
        return serverURL+"?"+"text="+text;
    }
    function errorHandler(error){
        console.log("error occured",error);
        alert("something went wrong with server plz try later");
    }

function clickHandler(){
    
    //taking input
    var inputText=textinput.value
    fetch(getTranslationsURL(inputText))
    .then(response=>response.json())
    .then(json=>{ 
        var translatedText=json.contents.translated
        output.innerText=translatedText;
    })
    .catch(errorHandler);
    
    
};
btntranslate.addEventListener("click", clickHandler);

