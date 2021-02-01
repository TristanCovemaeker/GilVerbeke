// General functions
function playAudio() {
    var audio = new Audio('/GilVerbeke/audio/Pre_test_Tone.mp3');
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

function randomizeSounds() {
    pre_test_stim_random = [];
    var i = 0;

    var random = Math.floor(Math.random() * pre_test_stim.length);
    pre_test_stim_random.push(pre_test_stim[random]);
    pre_test_stim.splice(random, 1);

    while (pre_test_stim.length > 0) {
        random = Math.floor(Math.random() * pre_test_stim.length);
        var str = pre_test_stim[random].target;
        var pos = str.indexOf('_');
        var str_current = str.slice(0, pos);

        str = pre_test_stim_random[i].target;
        pos = str.indexOf('_');
        var str_previous = str.slice(0, pos);

        if (str_current == str_previous) {
        } else {
            pre_test_stim_random.push(pre_test_stim[random]);
            pre_test_stim.splice(random, 1);
            i++;
        }
    }
}
