let ul; 
function getData(){
    ul = document.getElementById("ul");
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        ul.innerHTML = `<li><img src = ${data.message} alt"Random dog photos"></li>`;
    })
    .catch(error => console.log(error));
}

document.getElementById("button").addEventListener("click",getData);

window.onload = getData;
