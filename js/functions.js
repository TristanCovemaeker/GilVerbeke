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

    console.log(pre_test_stim_random);
    splitSounds(pre_test_stim_random);
}

function splitSounds(array) {
    pre_test_stim_temp = [];

    stimuliInTrial = 2;
    numberOfTrials = 2;//array.length / stimuliInTrial;

    for (var i = 0; i < numberOfTrials; i++) {
        pre_test_stim_temp[i] = array.splice(0, stimuliInTrial);
    }
}

function checkForm() {
    var inputs = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select');

    if (inputs[0].value != '' && inputs[1].value != '' && inputs[2].value != '') {
        var json = '{"age":"' + inputs[0].value + '", "gender":"' + select[0].value + '", "province":"' + inputs[1].value + '", "studies":"' + inputs[2].value + '"';
        localStorage.setItem('json', json);
        
        toPage('/GilVerbeke/pages/audio_test.html');
    } else {
        alert('Gelieve alle velden in te vullen.');
    }
}

function checkAudioTest() {
    var inputs = document.getElementsByTagName('input');

    if (inputs[0].value != '') {
        var json = localStorage.getItem('json');
        json += ', "headset":"' + inputs[0].value + '"}';
        localStorage.setItem('json', json);
        
        toPage('/GilVerbeke/pages/pre_test.html');
    } else {
        console.log(json);
        alert('Gelieve alle velden in te vullen.');
    }
}