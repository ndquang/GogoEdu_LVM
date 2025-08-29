folder_Resource = '/data/so_la_ma';
var _score = 0;
var _cSubmit = 0;
var _reply = 0;
var a_lama = ["", "I", "II", "III", "VI", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XVIII", "XXIX", "XXX"];
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
    kq = Random(30) + 1;
    SetText("", "input", "");
    // chux= docso(kq);
    // Speak(chux,"VN");
    chux = kq;
    SetText("", "chu", chux);
    SetText("", "msg", "");
    _reply = 0;
    SetText("", "bt_check", "OK");
    PlaySound("SND_CREATE");
}
function CheckKQ() {
    var temp = toUpperCase(GetText("", "input"));
    if (a_lama[kq] == temp) {
        _cSubmit++;
        _score++;
        SetText("", "msg", "✅ Bạn làm tốt lắm\r\n" + _score + " Điểm");
        PlaySound("SND_TRUE");
        SetColorEx("", "score" + _cSubmit, "#80ff00");
        SetText("", "score" + _cSubmit, _score);

    }
    else if (temp != "") {
        _score--;
        SetText("", "msg", "❌ Không chính xác \r\n Số đúng là: " + a_lama[kq]);
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
/* start delete 
var mangso = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
function dochangchuc(so,daydu)
{
    var chuoi = "";
    chuc = Math.floor(so/10);
    donvi = so%10;
    if (chuc>1) {
        chuoi = " " + mangso[chuc] + " mươi";
        if (donvi==1) {
            chuoi += " mốt";
        }
    } else if (chuc==1) {
        chuoi = " mười";
        if (donvi==1) {
            chuoi += " một";
        }
    } else if (daydu && donvi>0) {
        chuoi = " lẻ";
    }
    if (donvi==5 && chuc>=1) {
        chuoi += " lăm";
    } else if (donvi>1||(donvi==1&&chuc==0)) {
        chuoi += " " + mangso[ donvi ];
    }
    return chuoi;
}
function docblock(so,daydu)
{
    var chuoi = "";
    tram = Math.floor(so/100);
    so = so%100;
    if (daydu || tram>0) {
        chuoi = " " + mangso[tram] + " trăm";
        chuoi += dochangchuc(so,true);
    } else {
        chuoi = dochangchuc(so,false);
    }
    return chuoi;
}
function dochangtrieu(so,daydu)
{
    var chuoi = "";
    trieu = Math.floor(so/1000000);
    so = so%1000000;
    if (trieu>0) {
        chuoi = docblock(trieu,daydu) + " triệu";
        daydu = true;
    }
    nghin = Math.floor(so/1000);
    so = so%1000;
    if (nghin>0) {
        chuoi += docblock(nghin,daydu) + " nghìn";
        daydu = true;
    }
    if (so>0) {
        chuoi += docblock(so,daydu);
    }
    return chuoi;
}
function docso(so)
{
        if (so==0) return mangso[0];
    var chuoi = "", hauto = "";
    do {
        ty = so%1000000000;
        so = Math.floor(so/1000000000);
        if (so>0) {
            chuoi = dochangtrieu(ty,true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty,false) + hauto + chuoi;
        }
        hauto = " tỷ";
    } while (so>0);
    return chuoi;
}  
end delete*/
function Page_1() {
    InitScore();
    AllowEditText("", "input", 1);
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
        height: 320
    });

    var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
    var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 320, '', '#005e5e', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#005e5e', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
    var msg = CreText('msg', 82, 148, 475, 139, "Sai.", 'rgba(0,168,168,0.44)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '20', '0', 1, '#7f7f7f', 'rgba(0,168,168,0.44)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var chu = CreText('chu', 144, 87, 125, 26, "", '#00a8a8', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#00a8a8', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var title = CreText('title', 331, 57, 128, 26, "Số la mã:", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var Text_1 = CreText('Text_1', 121, 1, 396, 38, "GHI SỐ LA MÃ", 'rgba(0,0,0,0)', '#ffffff', '#e6e6fa', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var input = CreText('input', 330, 87, 113, 26, "", '#00aeae', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#00aeae', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score1 = CreText('score1', 141, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score2 = CreText('score2', 178, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score3 = CreText('score3', 215, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score4 = CreText('score4', 252, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score5 = CreText('score5', 289, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score6 = CreText('score6', 326, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score7 = CreText('score7', 363, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score8 = CreText('score8', 400, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score9 = CreText('score9', 437, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var score10 = CreText('score10', 478, 274, 25, 26, "", '#c0c0c0', '#c0c0c0', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'middle', 2, '0.00', '0', '0', 2, '#c0c0c0', '#c0c0c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    var bt_check = CreText('bt_check', 265, 133, 96, 30, "OK", '#009393', '#ffffff', '#ffff00', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#000000', '#00bfbf', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
    var Text_2 = CreText('Text_2', 145, 57, 128, 26, "Số tự nhiên:", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
    Page_1.add(Page_1_Backrounnd, msg, chu, title, Text_1, input, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, bt_check, Text_2);
    stage.add(Page_1);
    InitLacVietScript();
};
