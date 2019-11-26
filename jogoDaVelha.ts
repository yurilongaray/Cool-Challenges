
const inputValues = [
    ['X', 'O', 'O'],
    ['X', 'O', 'O'],
    ['O', 'O', 'X']
];
let winner: string;

function checkRowValuesAndChooseWinner(row) {

    if (row.every(value => value === row[0])) {

        winner = row[0]
    }
}

function checkHorizontalRows() {

    for (const row of inputValues) {

        checkRowValuesAndChooseWinner(row);
    }
}

function checkVerticalRows() {

    for (let row = 0; row < inputValues.length; row++) {

        const verticalValues = [];

        for (let index = 0; index < inputValues.length; index++) {

            verticalValues.push(inputValues[index][row]);
        }

        checkRowValuesAndChooseWinner(verticalValues);
    }
}

function checkLeftToRight() {

    const leftToRighValues = inputValues.map((value, index) => value[index]);

    checkRowValuesAndChooseWinner(leftToRighValues);
}

function checkRightToLeft() {

    let descIndex = 2;
    const rightToLeft = [];

    for (let index = 0; index < inputValues.length; index++) {

        rightToLeft.push(inputValues[index][descIndex]);
        descIndex--;
    }

    checkRowValuesAndChooseWinner(rightToLeft);
}

function checkDiagonalRows() {

    checkLeftToRight();

    checkRightToLeft();
}

function getResult() {

    checkHorizontalRows();

    checkVerticalRows();

    checkDiagonalRows();

    if (winner) {

        return console.log(`O vencedor é o jogador que usou ${winner}`);
    }
    
    return console.log('O jogo empatou');
}

getResult();