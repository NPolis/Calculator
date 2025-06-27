let displayCalc = document.getElementById("displayCalc")
let buttons = document.getElementsByTagName("button")

let numberOne = ""
let numberTwo = ""
let operator = ""
let numberOneEnter = false
let numberTwoEnter = false
let tempResult = ""

for (const element of buttons) {
    element.addEventListener("click", event => {
        if (numberOneEnter === false && event.target.id !== "math") {
            numberOne += event.target.textContent
        }
        if (event.target.id === "math") {
            numberOneEnter = true
            if (operator === "") {
                operator = event.target.textContent
            }
            else {
                if ( numberTwo ==="") {
                    return
                }
                if (operator === "+") {
                    tempResult = Number(numberOne) + Number(numberTwo)
                }
                if (operator === "−") {
                    tempResult = Number(numberOne) - Number(numberTwo)
                }
                if (operator === "÷") {
                    tempResult = Number(numberOne) / Number(numberTwo)
                }
                if (operator === "×") {
                    tempResult = Number(numberOne) * Number(numberTwo)
                }
                
                numberOne = tempResult
                operator = event.target.textContent
                numberTwo = ""
                numberTwoEnter = false
                
            }


        }
        if (numberOneEnter === true && event.target.id !== "math" && event.target.id !== "result") {

            numberTwo += event.target.textContent
        }
        displayCalc.value += event.target.textContent
        if (event.target.id === "result") {
            let res = ""
            if (operator === "+") {
                res = Number(numberOne) + Number(numberTwo)
            }
            if (operator === "−") {
                res = Number(numberOne) - Number(numberTwo)
            }
            if (operator === "÷") {
                res = Number(numberOne) / Number(numberTwo)
            }
            if (operator === "×") {
                res = Number(numberOne) * Number(numberTwo)
            }
            displayCalc.value += res


        }
    });

}
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    displayCalc.value = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
    numberOneEnter = false;
    numberTwoEnter = false;
});