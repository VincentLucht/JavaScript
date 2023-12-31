// create a loop that creates a 16x16 grid
let mainDiv = document.querySelector(".mainDiv");

for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++) {
        let div = document.createElement("div");
        div.textContent = j;
        div.style.width = "50px";
        div.style.height = "50px";
        mainDiv.appendChild(div);
    }
}

// use css to break the line