folder_Resource = '/data/tim_phan_so_cua_mot_so';
var _score = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = [""];
function InitScore() {
    _score = GetVer();
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
    SetDigitEditText("", "in_0", "number");
    _index = _score + 1;
    _bTestAndCreat = false;
    SetText("", "score", _score);

}

function CreateQuestion() {
    if (_score > 10) {
        SetText("", "msg", "Bạn đã hoàn thành bài học này.");
        SetShowObject("", "msg", 1);
        InvalidateObj("", "");
        return;
    }
    var strCh = GetTextFromID("ID_C" + _index);

    arrayKq = strCh.split("|");

    SetText("", "index", "Bài " + _index);
    SetText("", "_cauhoi", arrayKq[0]);
    SetText("", "don_vi", arrayKq[2]);

    AllowEditText("", "in_0", 1);
    SetShowObject("", "in_0", 1);
    SetText("", "in_0", "");
    SetFontColor("", "in_0", "#000000");
    _score = GetVer();
    SetText("", "check", "Submit");
    _bTestAndCreat = false;
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");

}

function ChamDiem() {
    var kq = true;
    if (GetText("", "in_0") == arrayKq[1])
        SetFontColor("", "in_0", "#00ff00");
    else {
        SetFontColor("", "in_i", "#ff0000");
        kq = false;;
    }
    AllowEditText("", "in_0", 0);


    if (kq == true) {
        _score++;
        PlaySound("sound_good");
        SetText("", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");
        UpdateScore(_score);
    }
    else {
        SetText("", "msg", "Không chính xác: " + arrayKq[1]);
        PlaySound("sound_not");
    }
    SetText("", "score", _score);
    _index = _index + 1;
    if (_index > 9) {
        _index = _score;
    }
    if (_score > 10) {
        SetText("", "msg", "Bạn đã hoàn thành bài học này.");
    }
    _bTestAndCreat = true;
    SetText("", "check", "Next");
    SetShowObject("", "msg", 1);
    InvalidateObj("", "");
}
function Page_1() {
    InitScore();
    CreateQuestion();
    return;
}


window.onload = function () {
    var canvas = document.createElement('canvas');
    if (!canvas.getContext) {
        alert("Trinh duyet khong ho tro");
        return;
    }
    document.getElementById("Doc").textContent = "";
    stage = new Kinetic.Stage({
        container: "Doc",
        width: 600,
        height: 400
    });

    var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
    var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 600, 400, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
    var don_vi = CreText('don_vi', 422, 193, 136, 30, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var title = CreText('title', 0, 0, 599, 64, "Tìm phân số của một số", '#8b8b00', '#ffffff', '#ffffff', '#ffffff', '', 26, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#8b8b00', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var _cauhoi = CreText('_cauhoi', 22, 97, 569, 88, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var in_0 = CreText('in_0', 350, 193, 65, 30, "", 'rgba(0,0,0,0)', '#ffffff', '#282828', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'bottom', 0, '0.00', '0', '0', 2, '#0000ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var Text_4 = CreText('Text_4', 222, 193, 116, 30, "Đáp số", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 20, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var check = CreText('check', 248, 248, 118, 44, "Submit", '#8b8b00', '#ffffff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#7f7f7f', '#8b8b00', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        if (_bTestAndCreat)
            CreateQuestion();
        else
            ChamDiem();
        return;
    }
    );
    var index = CreText('index', 10, 68, 89, 29, "Bài 1", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score = CreText('score', 540, 7, 47, 47, "2", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 48, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var msg = CreText('msg', 3, 313, 595, 88, "good job", 'rgba(187,187,0,1.02)', '#ffffff', '#ffffff', '#ffffff', '', 28, 'Arial', 'Bold Italic', 'center', 'middle', 0, '0.00', '0', '0', 2, '#ffff00', 'rgba(187,187,0,1.02)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    msg.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        CreateQuestion();
        return;
    }
    );
    var Image_1 = CreText('Image_1', 518, 151, 65, 65, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE1.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
    Image_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Speak(GetText("", "_cauhoi"), "VN");
        return;
    }
    );
    Page_1.add(Page_1_Backrounnd, don_vi, title, _cauhoi, in_0, Text_4, check, index, score, msg, Image_1);
    stage.add(Page_1);
    InitLacVietScript();
};
