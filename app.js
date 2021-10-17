const btn=document.querySelector("#submit");
const outputEl = document.querySelector("#output");
var url="https://dog.ceo/api/breeds/image/random/3";
var height="50%"
btn.addEventListener("click", clickHandler);

function clickHandler(){
    console.log("Hello World!!");
    fetch(url).then(function(response){
    response.json().then(function(data) {
        console.log(data);
        outputEl.innerHTML = `<img src=${data.message[0]} width=${height} height=${height} /><img src=${data.message[1]} width=${height} height=${height} /><img src=${data.message[2]} width=${height} height=${height} />`
    });
    }).catch(function(error) {
    console.log('Fetch Error:', error);
    });
    //while using the below code, i am getting an error
    //fetch(url)
    // .then(response => response.json)
    // .then(json => console.log(json))
}