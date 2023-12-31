let loopLength = 0;
let loop = true;
let mainDiv = document.querySelector(".mainDiv");

button = document.querySelector("#sizeButton");
button.addEventListener("click", function() {
    loop = true;
    while (loop == true) {
        let userInput = parseInt(prompt("How many squares do you want?"));

        if (userInput <= 0) {
            alert("Please enter a value above 0.");
        } else if (userInput > 100) {
            alert("Please enter a lesser value.");
        } else {
            loopLength = userInput;
            loop = false;
            createGrid(loopLength);
            break;
        }
    }
});

function createGrid(loopLength) {
    for (let i = 0; i < loopLength; i++){
        let divContainer = document.createElement("div");
        divContainer.className = "container"
        for (let j = 0; j < loopLength; j++) {
            let div = document.createElement("div");
    
            addHoverEffect(element=div);
            clickChangeColor(element=div);
    
            divContainer.appendChild(div)
            mainDiv.appendChild(divContainer);
        }
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