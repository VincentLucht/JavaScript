let mainDiv = document.querySelector(".mainDiv");

for (let i = 1; i <= 16; i++){
    let divContainer = document.createElement("div");
    divContainer.className = "container"
    for (let j = 1; j <= 16; j++) {
        let div = document.createElement("div");
        div.textContent = i;

        addHoverEffect(element=div);
        clickChangeColor(element=div);

        divContainer.appendChild(div)
        mainDiv.appendChild(divContainer);
    }
}

function addHoverEffect(element) {
    element.addEventListener("mouseover", function() {
        if (element.style.backgroundColor != "red") {
            element.style.backgroundColor = "blue";
        }
    });
    element.addEventListener("mouseout", function() {
        if (element.style.backgroundColor != "red") {
            element.style.backgroundColor = "";
        }
    });
}


function clickChangeColor(element) {
    element.addEventListener("click", function() {
        if (element.style.backgroundColor == "red") {
            element.style.backgroundColor = "";
        } else {
            element.style.backgroundColor = "red";
        }
    })
}