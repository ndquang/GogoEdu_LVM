folder_Resource = '/data/thu_tu_trong_tap_hop_so_tu_nhien';
var _score = 0;
var _cSubmit = 0;
var _reply = 0;
var _sta, _end;
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
	var _a = 0;
	var _b = 0;
	_a = Random(80);
	_b = _a + 5;
	SetText("", "input", "");
	var _left = Random(2);
	if (_left == 0) {
		_left = " ≤ ";
		_sta = _a;
	}
	else {
		_left = " < ";
		_sta = _a + 1;
	}

	var _right = Random(2);
	if (_right == 0) {
		_right = " ≤ ";
		_end = _b;
	}
	else {
		_right = " < ";
		_end = _b - 1;
	}
	SetText("", "_ch", "M = { x ∈ N | " + _a + _left + " x " + _right + _b + "}");
	SetText("", "msg", "");
	_reply = 0;
	SetText("", "bt_check", "OK");
	PlaySound("SND_CREATE");
}
function CheckKQ() {
	var temp = GetText("", "input");
	if (temp == "") {
		SetText("", "msg", "⚠ Bạn chưa nhập số");
		return;
	}
	var myArray = temp.split(";");
	var myRe = [0, 0, 0, 0];
	var idx = 0;
	for (var i = _sta; i <= _end; ++i) {
		myRe[idx] = i;
		idx++;
	}
	if (arraysEqual(myRe, myArray)) {
		_cSubmit++;
		_score++;
		SetText("", "msg", "✅ Bạn làm tốt lắm\r\n" + _score + " Điểm");
		PlaySound("SND_TRUE");
		SetColorEx("", "score" + _cSubmit, "#80ff00");
		SetText("", "score" + _cSubmit, _score);

	}
	else {
		_score--;
		SetText("", "msg", "❌ Không chính xác \r\n Số đúng là: " + myRe);
		PlaySound("SND_FALSE");
		SetColorEx("", "score" + _cSubmit, "#dddddd");
		SetText("", "score" + _cSubmit, "");
		_cSubmit--;
	}

	UpdateScore(_score);
	if (_cSubmit == 0 || _score < 0)
		InitScore();
	_reply = 1;
	SetText("", "bt_check", "NEXT");

}

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	// If you don't care about the order of the elements inside
	// the array, you should sort both arrays here.
	// Please note that calling sort on an array will modify that array.
	// you might want to clone your array first.

	for (var i = 0; i < a.length; ++i) {
		if (parseInt(a[i]) !== parseInt(b[i])) return false;
	}
	return true;
}

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
	var title = CreText('title', 119, 93, 70, 26, "M = {", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 66, 4, 492, 38, "THỨ TỰ TRONG TẬP HỢP SỐ TỰ NHIÊN", 'rgba(0,0,0,0)', '#ffffff', '#e6e6fa', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input = CreText('input', 194, 93, 199, 26, "", '#00aeae', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#00aeae', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var _ch = CreText('_ch', 169, 58, 266, 26, "M = { x ∈ N | 10 ≤ x ≤15}", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_3 = CreText('Text_3', 399, 93, 40, 26, "}", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, msg, title, Text_1, input, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, bt_check, _ch, Text_3);
	stage.add(Page_1);
	InitLacVietScript();
};
