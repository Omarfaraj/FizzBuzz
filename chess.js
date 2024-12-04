function createChessboard(size) {
    let chessboard = "";

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            chessboard += (row + col) % 2 === 0 ? "#" : " ";
        }
        chessboard += "\n";
    }
    return chessboard;
}

const size = 8;
console.log(createChessboard(size));