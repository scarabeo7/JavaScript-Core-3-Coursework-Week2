let divEl; 
function getData(){
    divEl = document.getElementById("div");
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
        data
        divEl.innerHTML = `<h3>${data.title}</h3><img src = ${data.img} alt"">`;
    })
    .catch(error => console.log(error));
}

window.onload = getData;
