folder_Resource = '/data/sap_xep_so_thap_phan';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["", "", "", ""];
var xDown, yDown, iDown;
function InitScore() {
    _score = GetVer();
    InvalidateObj("", "");
    _index = 1;
    _bTestAndCreat = false;
    SetText("", "score", _score);
}
function GetPosIndex() {
    var i = 0;
    while (i < 4) {
        var objectTo = "so_" + i;
        if (RectInRect("", "", objectTo)) {
            return i;
        }
        else i++;
    }
    return "";
}
/*----------------------------------*/
function Select() {
    if (_bTestAndCreat)
        return;
    var curName = GetName("");
    var i = 0;
    var bExit = false;
    while (i < 4 && !bExit) {
        var objectTo = "in_" + i;
        if (RectInRect("", "", objectTo) && curName != objectTo) {
            var xto = GetLeft("", objectTo);
            var yto = GetTop("", objectTo);
            MoveObjectTo("", curName, xto, yto, 50, 5);
            MoveObjectTo("", objectTo, xDown, yDown, 50, 5);
            var iUp = GetPosIndex();
            bExit = true;
            arrayKq[iDown] = GetText("", objectTo);
            arrayKq[iUp] = GetText("", curName);
        }
        else i++;
    }
    if (bExit == false)
        MoveObjectTo("", "", xDown, yDown, 50, 5);
    _bTestAndCreat = false;
    InvalidateObj("", "");
}
function genRand(min, max, decimalPlaces) {
    var rand = Math.random() * (max - min) + min;
    var power = pow(10, decimalPlaces);
    return floor(rand * power) / power;
}
function DownObject() {
    xDown = GetLeft("", "");
    yDown = GetTop("", "");
    iDown = GetPosIndex();
}
/*----------------------------------*/
var min_max = 0;
function CreateQuestion() {
    var num = Random(100);
    for (var k = 0; k < 4; k++) {
        arrayKq[k] = genRand(num, num + 3, Random(3) + 1);
        SetText("", "in_" + k, arrayKq[k]);
        MoveObjectTo("", "in_" + k, -1, -1);
        SetMoveView("", "in_" + k, "bound");
    }

    SetText("", "check", "Submit");
    SetShowObject("", "check", 1);
    SetShowObject("", "msg", 0);
    SetShowObject("", "score", 0);

    _bTestAndCreat = false;
    SetText("", "msg", "");
    min_max = Random(2);
    if (min_max == 0)
        SetText("", "min_max", "bé đến lớn");
    else SetText("", "min_max", "lớn đến bé");
    InvalidateObj("", "");
}


function ChamDiem() {
    var kq = true;
    if (min_max == 0) {
        for (var i = 0; i < 3; i++) {
            if (arrayKq[i] > arrayKq[i + 1]) {
                kq = false;
                break;
            }
        }
    }
    else {
        for (var i = 0; i < 3; i++) {
            if (arrayKq[i] < arrayKq[i + 1]) {
                kq = false;
                break;
            }
        }

    }
    if (kq == true) {
        _score++;
        PlaySound("sound_good");
        SetText("", "msg", "Bạn làm tốt lắm.");
        SetFontColor("", "msg", "#00ff00");
        UpdateScore(_score);
    }
    else {

        arrayKq.sort();
        if (min_max == 1)
            arrayKq.reverse();
        SetFontColor("", "msg", "#ff0000");
        SetText("", "msg", "Không chính xác.\r\n" + arrayKq.toString());
        PlaySound("sound_not");
        _score--;
    }
    if (_score < 0)
        _score = 0;
    SetText("", "score", _score);
    SetShowObject("", "msg", 1);
    SetShowObject("", "score", 1);
    _bTestAndCreat = true;
    SetText("", "check", "Next");
    SetShowObject("", "check", 1);
    for (var k = 0; k < 4; k++) {
        SetMoveView("", "in_" + k, 0);
    }

    InvalidateObj("", "");
}
function Page_1() {
    InitScore();
    CreateQuestion();
    return;
}

function Page_1_OnTimer() {
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
        width: 500,
        height: 300
    });

    var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
    var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 500, 300, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
    var msg = CreText('msg', 9, 177, 486, 87, "good job", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#000000', '', 20, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#008040', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 5, 1.50);
    var bound = CreText('bound', 53, 81, 392, 62, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var so_3 = CreText('so_3', 359, 93, 68, 38, "1.43", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    so_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select(GetText("", ""));
        return;
    }
    );
    var so_2 = CreText('so_2', 266, 93, 68, 38, "5.5", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    so_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select(GetText("", ""));
        return;
    }
    );
    var so_1 = CreText('so_1', 170, 93, 68, 38, "3.5", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    so_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select(GetText("", ""));
        return;
    }
    );
    var so_0 = CreText('so_0', 75, 93, 68, 38, "1.4", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    so_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select(GetText("", ""));
        return;
    }
    );
    var title = CreText('title', 0, 0, 502, 68, "Sắp xếp các số sau đây theo thứ tự từ", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 5, 1.50);
    var score = CreText('score', 439, 202, 39, 39, "2", '#ffad5b', '#ffffff', '#000000', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'bottom', 8, '0.00', '33', '75', 1, '#000000', '#ffad5b', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var in_0 = CreText('in_0', 75, 93, 68, 38, "1.4", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 2, '#ffffff', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    in_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select();
        return;
    }
    );
    in_0.on('mousedown touchstart', function (evt) {
        m_pgObjCaller = this;
        DownObject();
        return;
    }
    );
    var in_1 = CreText('in_1', 170, 93, 68, 38, "3.5", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 2, '#ffffff', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    in_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select();
        return;
    }
    );
    in_1.on('mousedown touchstart', function (evt) {
        m_pgObjCaller = this;
        DownObject();
        return;
    }
    );
    var in_2 = CreText('in_2', 266, 93, 68, 38, "5.5", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 2, '#ffffff', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    in_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select();
        return;
    }
    );
    in_2.on('mousedown touchstart', function (evt) {
        m_pgObjCaller = this;
        DownObject();
        return;
    }
    );
    var check = CreText('check', 201, 159, 103, 33, "Submit", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#7f7f7f', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        if (_bTestAndCreat)
            CreateQuestion();
        else
            ChamDiem();
        return;
    }
    );
    var in_3 = CreText('in_3', 359, 93, 68, 38, "1.43", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 2, '#ffffff', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    in_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        Select();
        return;
    }
    );
    in_3.on('mousedown touchstart', function (evt) {
        m_pgObjCaller = this;
        DownObject();
        return;
    }
    );
    var min_max = CreText('min_max', 161, 31, 182, 30, " nhỏ đến lớn", 'rgba(0,0,0,0)', '#ffffff', '#ffff00', '#ffffff', '', 22, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    Page_1.add(Page_1_Backrounnd, msg, bound, so_3, so_2, so_1, so_0, title, score, in_0, in_1, in_2, check, in_3, min_max);
    stage.add(Page_1);
    InitLacVietScript();
};
