var kq = 0;

var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var ch[3] = { "Các đường thẳng này có vuông góc với nhau không?", "Các đường thẳng này có song song với nhau không?", "Các đường thẳng này có cắt nhau không?" };
var denta = 0;
CreateQuestion()
{
    RotateObj("", "truc_x", 0);
    RotateObj("", "truc_y", 0);
    var angle[15] = { 0, 30, 45, 60, 90, 120, 150, 45, 45, 90, 90, 60, 60, 120, 120 };

    var x = angle[Random(15)];
    var y = angle[Random(15)];
    var denta_new = abs(x - y);
    while (denta_new == denta) {
        x = angle[Random(15)];
        y = angle[Random(15)];
        denta_new = abs(x - y);
    }
    denta = denta_new;
    RotateObj("", "truc_x", -x);
    RotateObj("", "truc_y", -y);
    var abcd = Random(3);
    SetText("", "ch", ch[abcd]);
    kq = 0;
    switch (abcd) {
        case 0:
            {
                if (denta == 90)
                    kq = 1;
                break;
            }
        case 1:
            {
                if (denta == 0)
                    kq = 1;
                break;
            }
        case 2:
            {
                if (denta != 0 || denta != 90)
                    kq = 1;
                break;
            }
    }
    _bTestAndCreat = false;
    for (var k = 0; k < 2; k++) {
        SetColorEx("", "ch_" + k, "#f2f2f2");
    }
    SetShowObject("", "btSubmit", 0);
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
    return;
}
/*----------------------------------*/
var tl = "";
var Select(var yn)
    {
        if(_bTestAndCreat)
return;

tl = yn;
for (var k = 0; k < 2; k++) {
    SetColorEx("", "ch_" + k, "#f2f2f2");
}
_bTestAndCreat = false;
SetColorEx("", "", "#33ccff");
SetShowObject("", "btSubmit", 1);
SetText("", "btSubmit", "OK");
InvalidateObj("", "");

}
/*----------------------------------*/

var InitScore()
{
    for (var i = 1; i <= 10; i++) {
        SetColorEx("", "score" + i, "#dddddd");
        SetText("", "score" + i, "");
    }
    _score = GetVer();
    SetText("", "score1", _score);
    _cSubmit = 0;
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
}
var ChamDiem()
{
    if (tl == kq) {
        _cSubmit++;
        SetFontColor("", "msg", _trueColor);
        _score++;
        SetText("", "msg", "Đúng ☺☺☺.\r\n" + _score + " Điểm");
        SetColorEx("", "score" + _cSubmit, _trueColor);
        SetText("", "score" + _cSubmit, _score);
        PlaySound("sound_good");

    }
    else {
        SetFontColor("", "msg", _falseColor);
        PlaySound("sound_bad");
        SetText("", "msg", "Sai ☻☻☻");
        _score--;
        SetColorEx("", "score" + _cSubmit, "#dddddd");
        SetText("", "score" + _cSubmit, "");
        _cSubmit--;

    }
    UpdateScore(_score);
    if (_cSubmit == 0 || _score < 0 || _cSubmit > 10) {
        InitScore();
    }
    _bTestAndCreat = true;
    SetText("", "btSubmit", "Next");
    SetShowObject("", "msg", 1);
    InvalidateObj("", "");

}
/*----------------------------------*/