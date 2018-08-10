

function changeSRC(){
    document.getElementById('gameContainer').src = document.getElementById('gameUrl').value;
}

function send(message) {
    document.getElementById('gameContainer').contentWindow.postMessage(message,'*');
}
