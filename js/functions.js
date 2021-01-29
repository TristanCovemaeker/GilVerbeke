// General functions
function playAudio() {
    var audio = new Audio('/audio/Pre_test_Tone.mp3');
    audio.play();
}

function toPage(page) {
    window.location = page;
}

function disableButton() {
    var checkbox = document.getElementById('consent');
    var button = document.getElementById('button');

    if (checkbox.checked == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
