folder_Resource = '/data/cach_ghi_cac_so_tu_nhien';
var _score = 0;
var _cSubmit = 0;
var _reply = 0;
function InitScore() {
    for (var i = 1; i <= 10; i++) {
        SetColorEx("", "score" + i, "#dddddd");
        SetText("", "score" + i, "");
    }
    _score = GetVer();
    SetText("", "score1", _score);
    _cSubmit = 0;
}

var kq = 92823;
var chux = "";
function CreateGame() {
    kq = Random(2000000000) + 10000;
    SetText("", "input", "");
    chux = docso(kq);
    // Speak(chux,"VN");
    SetText("", "chu", chux);
    SetText("", "msg", "");
    _reply = 0;
    SetText("", "bt_check", "OK");
    PlaySound("SND_CREATE");
}
function CheckKQ() {
    var temp = GetText("", "input");
    if (kq == temp) {
        _cSubmit++;
        _score++;
        SetText("", "msg", "✅ Bạn làm tốt lắm\r\n" + _score + " Điểm");
        PlaySound("SND_TRUE");
        SetColorEx("", "score" + _cSubmit, "#80ff00");
        SetText("", "score" + _cSubmit, _score);

    }
    else if (temp != "") {
        _score--;
        SetText("", "msg", "❌ Không chính xác \r\n Số đúng là: " + kq);
        PlaySound("SND_FALSE");
        SetColorEx("", "score" + _cSubmit, "#dddddd");
        SetText("", "score" + _cSubmit, "");
        _cSubmit--;
    }
    else {
        SetText("", "msg", "⚠ Bạn chưa nhập số");
        return;
    }
    UpdateScore(_score);
    if (_cSubmit == 0 || _score < 0)
        InitScore();
    _reply = 1;
    SetText("", "bt_check", "NEXT");

}

var mangso = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
function dochangchuc(so, daydu) {
    var chuoi = "";
    chuc = Math.floor(so / 10);
    donvi = so % 10;
    if (chuc > 1) {
        chuoi = " " + mangso[chuc] + " mươi";
        if (donvi == 1) {
            chuoi += " mốt";
        }
    } else if (chuc == 1) {
        chuoi = " mười";
        if (donvi == 1) {
            chuoi += " một";
        }
    } else if (daydu && donvi > 0) {
        chuoi = " lẻ";
    }
    if (donvi == 5 && chuc >= 1) {
        chuoi += " lăm";
    } else if (donvi > 1 || (donvi == 1 && chuc == 0)) {
        chuoi += " " + mangso[donvi];
    }
    return chuoi;
}
function docblock(so, daydu) {
    var chuoi = "";
    tram = Math.floor(so / 100);
    so = so % 100;
    if (daydu || tram > 0) {
        chuoi = " " + mangso[tram] + " trăm";
        chuoi += dochangchuc(so, true);
    } else {
        chuoi = dochangchuc(so, false);
    }
    return chuoi;
}
function dochangtrieu(so, daydu) {
    var chuoi = "";
    trieu = Math.floor(so / 1000000);
    so = so % 1000000;
    if (trieu > 0) {
        chuoi = docblock(trieu, daydu) + " triệu";
        daydu = true;
    }
    nghin = Math.floor(so / 1000);
    so = so % 1000;
    if (nghin > 0) {
        chuoi += docblock(nghin, daydu) + " nghìn";
        daydu = true;
    }
    if (so > 0) {
        chuoi += docblock(so, daydu);
    }
    return chuoi;
}
function docso(so) {
    if (so == 0) return mangso[0];
    var chuoi = "", hauto = "";
    do {
        ty = so % 1000000000;
        so = Math.floor(so / 1000000000);
        if (so > 0) {
            chuoi = dochangtrieu(ty, true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty, false) + hauto + chuoi;
        }
        hauto = " tỷ";
    } while (so > 0);
    return chuoi;
}

function Page_1() {
    InitScore();
    AllowEditText("", "input", 1);
    SetDigitEditText("", "input", "number");
    CreateGame();
    InvalidateObj("", "");
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
        width: 640,
        height: 370
    });

    var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
    var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 370, '', '#005e5e', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#005e5e', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
    var msg = CreText('msg', 78, 212, 475, 139, "Sai.", 'rgba(0,168,168,0.44)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '20', '0', 1, '#7f7f7f', 'rgba(0,168,168,0.44)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var chu = CreText('chu', 14, 48, 611, 80, "", '#00a8a8', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '10', '0', 1, '#ffffff', '#00a8a8', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var title = CreText('title', 122, 143, 275, 42, "Ghi số tự nhiên trên:", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var Text_1 = CreText('Text_1', 121, 1, 396, 38, "GHI SỐ TỰ NHIÊN", 'rgba(0,0,0,0)', '#ffffff', '#e6e6fa', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var input = CreText('input', 400, 141, 218, 42, "", '#00aeae', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#00aeae', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score1 = CreText('score1', 137, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score2 = CreText('score2', 174, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score3 = CreText('score3', 211, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score4 = CreText('score4', 248, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score5 = CreText('score5', 285, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score6 = CreText('score6', 322, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score7 = CreText('score7', 359, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score8 = CreText('score8', 396, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score9 = CreText('score9', 433, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score10 = CreText('score10', 474, 338, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var bt_check = CreText('bt_check', 261, 197, 96, 30, "OK", '#009393', '#ffffff', '#ffff00', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#000000', '#00bfbf', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    bt_check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
        m_pgObjCaller = this;
        if (_reply == 0)
            CheckKQ();
        else
            CreateGame();
        InvalidateObj("", "");
        return;
    }
    );
    Page_1.add(Page_1_Backrounnd, msg, chu, title, Text_1, input, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, bt_check);
    stage.add(Page_1);
    InitLacVietScript();
};
