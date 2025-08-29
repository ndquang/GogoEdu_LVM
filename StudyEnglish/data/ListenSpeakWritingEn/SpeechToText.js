
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
}
catch (e) {
    console.error(e);
    alert("Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening In Google Chrome.");

    //  SetText("", "title", "Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening In Google Chrome.");
    //  SetText("", "content", "Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening In Google Chrome.");
}
recognition.continuous = true;

recognition.onresult = function (event) {

    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    //  var transcript = event.results= new Array);
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
    //  var mobileRepeatBug = (current == 1 && transcript == event.results= new Array);
    if (!mobileRepeatBug) {
        final_transcript += " " + transcript;
    }
    SetText("", "content", final_transcript);
    InvalidateObj("", "");
};

recognition.onstart = function () {
    recognition.lang = "en-GB";
    //instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function () {
    //instructions.text('You were quiet for a while so voice recognition turned itself off.');    
    var compairstr = similarity(final_transcript, GetText("", "title"));
    if (compairstr > 0.7) {
        SetFontColor("", "content", "#2ECC71");
        SetFontColor("", "m_diem", "#2ECC71");
    }
    else {
        SetFontColor("", "content", "#EB1B07");
        SetFontColor("", "m_diem", "#EB1B07");
    }
    SetText("", "ww_title", "gogoedu.vn");
    SetText("", "wrong_word", "");
    SetText("", "m_diem", ceil(compairstr * 100) + "%");
    diemRecord[indexSpeak] = ceil(compairstr * 100);
    SetShowObject("", "bt_Repeat", 1);
    SetShowObject("", "bt_Next", 1);
    SetShowObject("", "bt_NextWrite", 0);
    SetShowObject("", "ketqua", 1);
    PlaySound("ID_SOUND_END_RECORD");
    SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
    recognizing = false;
}

recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
        //instructions.text('No speech was detected. Try again.');  
    };
}
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
