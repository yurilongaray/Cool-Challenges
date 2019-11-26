var inputValues = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O'],
    ['O', 'X', 'X']
];
var winner;
function checkRowValuesAndChooseWinner(row) {
    if (row.every(function (value) { return value === row[0]; })) {
        winner = row[0];
    }
}
function checkHorizontalRows() {
    for (var _i = 0, inputValues_1 = inputValues; _i < inputValues_1.length; _i++) {
        var row = inputValues_1[_i];
        checkRowValuesAndChooseWinner(row);
    }
}
function checkVerticalRows() {
    for (var row = 0; row < inputValues.length; row++) {
        var verticalValues = [];
        for (var index = 0; index < inputValues.length; index++) {
            verticalValues.push(inputValues[index][row]);
        }
        checkRowValuesAndChooseWinner(verticalValues);
    }
}
function checkLeftToRight() {
    var leftToRighValues = inputValues.map(function (value, index) { return value[index]; });
    checkRowValuesAndChooseWinner(leftToRighValues);
}
function checkRightToLeft() {
    var descIndex = 2;
    var rightToLeft = [];
    for (var index = 0; index < inputValues.length; index++) {
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
        return console.log("O vencedor \u00E9 o jogador que usou " + winner);
    }
    return console.log('O jogo empatou');
}
getResult();
