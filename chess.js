// Inisialisasi papan catur
const cfg = {
    draggable: true,
    position: 'start',
    onChange: onChange,
    onDragStart: onDragStart,
    onDrop: onDrop
};

const board = ChessBoard('board', cfg);
const chess = new Chess();

function onChange() {
    // Update UI atau state permainan jika diperlukan
}

function onDragStart (source, piece, position, orientation) {
    // Mencegah gerakan buah catur yang tidak sah
    if (chess.game_over()) return false;
}

function onDrop (source, target) {
    const move = chess.move({
        from: source,
        to: target,
        promotion: 'q' // Promosi otomatis menjadi ratu
    });

    removeGreySquares();
    renderMoveHistory(chess.history());
    
    if (move === null) return 'snapback';

    renderMoveHistory(chess.history());

    if (chess.game_over()) {
        alert('Game over');
    }
}

function removeGreySquares() {
    $('#board .square-55d63').css('background', '');
}

function renderMoveHistory(moves) {
    let historyElement = $('#move-history').empty();
    for (let i = 0; i < moves.length; i++) {
        historyElement.append('<span>' + (i + 1) + '. ' + moves[i] + '</span><br>')
    }
}
