let cells = document.querySelectorAll(".cell")
let resBtn = document.querySelector("#restart")
let msgContainer = document.querySelectorAll(".msg-container")
let newMsg = document.querySelector("#msg")


let turnO = true;
let gameOver = false;

const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(gameOver || cell.classList.contains("clicked")) return;
        if(turnO === true) {
            cell.innerText = "O"
            turnO = false;
        } else {
            cell.innerText = "X"
            turnO = true;
        }
        cell.classList.add("clicked")
        checkWinner();
    })
})

checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = cells[pattern[0]].innerText
        let val2 = cells[pattern[1]].innerText
        let val3 = cells[pattern[2]].innerText

       if(val1 != "" && val2 != "" && val3 != "") {
        if(val1 === val2 && val2 === val3) {
            gameOver = true;
            showWinner(val1);
        }
       }
    }
}

const showWinner = (winner) => {
    newMsg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const newGame = () => {
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.classList.remove("clicked")
        newMsg.innerText = "";
        gameOver = false;
    })
   
}

resBtn.addEventListener("click", () => {
    newGame();
})


