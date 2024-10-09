const userChoice = document.querySelectorAll('.user div .elements');
const compChoice = document.querySelector('.comp .elements');
const compScoreEle = document.querySelector('.compScore');
const userScoreEle = document.querySelector('.userScore');
const note = document.querySelector('.notes p');
const arrGame = ['👊', '🤚', '✌️'];
let compScore = 0;
let userScore = 0;

function updateScore(userScore, compScore){
    compScoreEle.innerText = `Computer : ${compScore}`;
    userScoreEle.innerText = `You : ${userScore}`;
}
function message(compChoice1, userChoice1, winner){
    console.log(arrGame[compChoice1], arrGame[userChoice1],winner);
    compChoice.innerText = '.';
    compChoice.innerText = arrGame[compChoice1];
    if(winner == 0){
        note.innerHTML = `You won the Match<br> ${arrGame[userChoice1]} beat ${arrGame[compChoice1]}`;
    }else if(winner == 1){
        note.innerHTML = `Computer won the Match<br> ${arrGame[compChoice1]} beat ${arrGame[userChoice1]}`;
    }else{
        note.innerHTML = `draw match`;
    }
}

userChoice.forEach((element) =>{
    element.addEventListener('click', () =>{
        userChoice.forEach((el) =>{
            el.classList.remove('selected');
        });
        element.classList.add('selected');
        let randomNum = Math.floor(Math.random() * 3);
        let temp1 = userScore;
        let temp2 = compScore;
        if(randomNum != element.getAttribute('id')){
            if(randomNum== 1){
                element.getAttribute('id') == 2 ? winner = 0 : winner = 1;
            }else if(randomNum== 2){
                element.getAttribute('id') == 3 ? winner = 0 : winner = 1;
            }else{
                element.getAttribute('id')  == 1 ? winner = 0 : winner = 1;
            }
        }else{
            winner = 2;
        }
        if(winner == 0){
            userScore++;
        }else if(winner == 1){
            compScore++;
        }
        console.log(winner);
        updateScore(userScore, compScore);
        message(randomNum, element.getAttribute('id'), winner);
        // console.log(`Comp:- ${arrGame[randomNum]} user:-${arrGame[element.getAttribute('id')]}`);
        // console.log(`comp:${compScore} user:${userScore}`);
    });
});

function restart(){
    compScore = 0;
    userScore = 0;
    updateScore(userScore, compScore);
    userChoice.forEach((el) =>{
        el.classList.remove('selected');
    });
    note.innerHTML = `Let's play`;
}