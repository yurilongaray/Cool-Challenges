
const inputValues = 'SRRSPSRPPRSSSR';
const scisor = 'S';
const rock = 'R';
const paper = 'P';
let draws = 0;

const player = {
    1: {
        plays: [],
        points: 0
    },
    2: {
        plays: [],
        points: 0
    }
}

function splitValuesBetweenPlayers(inputValues) {

    return Array.from(inputValues).map((value, index) => index % 2 === 0
        ? player[1].plays.push(value)
        : player[2].plays.push(value)
    );
}

function compareValues() {

    return player[1].plays.map((play, index) => {

        if (play === player[2].plays[index]) {

            return draws++;
        }

        return calculator[play](player[2].plays[index]);
    });
}

const calculator = {
    [scisor]: (oposition) => {

        return distributePoints(oposition === paper);
    },
    [rock]: (oposition) => {

        return distributePoints(oposition === scisor);
    },
    [paper]: (oposition) => {

        return distributePoints(oposition === rock);
    }
}

function distributePoints(playerOneWon) {

    return playerOneWon ? player[1].points++ : player[2].points++;
}

function printResults() {

    let winner = 1;
    let looser = 2;

    if (player[1].points === player[2].points) {

        return console.log('O jogo empatou');
    }

    if (player[1].points < player[2].points) {
        
        winner = 2;
        looser = 1;
    }

    return console.log(`O jogador ${winner} ganhou de ${player[winner].points} a ${player[looser].points}. Quantidade de empates de ${draws}`)
}

splitValuesBetweenPlayers(inputValues);
compareValues();
printResults();

// console.log('player[1]', player[1]);
// console.log('player[2]', player[2]);
// console.log('draws', draws);
