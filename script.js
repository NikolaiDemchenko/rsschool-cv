window.addEventListener("DOMContentLoaded", () => {
    let btns = document.querySelectorAll(".btns");

    let firstNumber = "",
        secondNumber = "",
        input = document.querySelector("input"),
        operation = "",
        iterator = true;

    window.addEventListener("click", (event) => {

        if (event.target.classList.contains("number") || event.target.classList.contains("point")) {
            if (iterator == true) {
                firstNumber += event.target.textContent;
                input.value = firstNumber;
            }
            else {
                secondNumber += event.target.textContent;
                input.value = secondNumber;
            }
        }

        if (event.target.classList.contains("operation")) {
            operation = event.target.textContent;
            iterator = false;
        }



        if (event.target.classList.contains("equal")) {

            if (operation === "+") {
                if (firstNumber !== "" && secondNumber !== "") {}
                    firstNumber = +firstNumber + +secondNumber;  
            }
            if (operation === "*") {
                if (firstNumber !== "" && secondNumber !== "") {}
                    firstNumber = +firstNumber * +secondNumber; 
            }
            if (operation === "/") {
                if (firstNumber !== "" && secondNumber !== "") {}
                    firstNumber = +firstNumber / +secondNumber; 
            }
            if (operation === "-") {
                if (firstNumber !== "" && secondNumber !== "") {}
                    firstNumber = +firstNumber - +secondNumber; 
            }
            input.value = firstNumber;
            secondNumber = "";
            operation = "";
        }

        if (event.target.classList.contains("clear")) {
            input.value = "0";
            firstNumber = "";
            secondNumber = "";
            operation = "";
            iterator = true;
        }
    });
});
