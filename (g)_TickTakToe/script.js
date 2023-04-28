console.log("Welcome to Tik Tak Toe")
let music = new Audio('./elements/music.mp3')
let yourturn = new Audio("./elements/ting.mp3")
let gameover = new Audio('./elements/gameover.mp3')
let turn = 'X'
let isgameover = false

// function to change the yourturn
const changeturn = () => {
    return turn === "X" ? "0" : 'X'
}

// function to check winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
        }
    })
}

// game logic
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn()
            yourturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }

    })
})

// add onclick listner to reset button
reset.addEventListener('click', () => {
    let boxtexts  ;
})

