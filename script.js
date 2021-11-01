let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Generating target number between 0 and 9
const generateTarget = ()=>{
    return  Math.floor(Math.random() * 10);
};

//comparing user,computer guesses with target and getting closest
const   compareGuesses = (humanGuess,computerGuess,targetNumber) =>{

    if (humanGuess >=0 && humanGuess <=9){   
        const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
        const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);
        
        return humanDifference <= computerDifference;
    }else{
        return alert('Number you guessed is out of range!! Please enter number between 0 and 9');
    }
};

const getAbsoluteDistance = (num1,num2) =>{
    return Math.abs(num1 - num2);
};
const updateScore = winner =>{
    switch(winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    }
};

const advanceRound = () => currentRoundNumber++;

