// create a loop that creates a 16x16 grid
let mainDiv = document.querySelector(".mainDiv");

for (let i = 1; i <= 16; i++){
    let divContainer = document.createElement("div");
    divContainer.className = "container"
    for (let j = 1; j <= 16; j++) {
        let div = document.createElement("div");
        div.textContent = i;
        divContainer.appendChild(div)
        mainDiv.appendChild(divContainer);
    }
}