folder_Resource = '/data/quang_duong_toan_lop5';
var cntQst = 10;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var arrayRes = ["", "", "", ""];
var _bTestAndCreat = false;
var arrayKq = ["", ""];
var strFinshed = "";
var cntQue = 1;
function InitScore() {
	_score = GetVer();
	SetShowObject("", "gr_msg", 0);
	SetMoveView("", "gr_msg", 1);
	InvalidateObj("", "");
	SetDigitEditText("", "in_0", "number");
	SetDigitEditText("", "in_1", "number");
	_index = 1;
	_bTestAndCreat = false;
	strFinshed = LoadLesson().SubmitContent;
	if (strFinshed == null)
		strFinshed = "";
	SetText("", "txtFinish", strFinshed);
}

function CreateQuestion() {

	if (strFinshed != null) {
		var aFinish = strFinshed.split(" ");
		while (aFinish.includes(trimStr(_index)) == true && _index <= cntQst)
			_index++;
	}

	if (_index >= cntQst + 1) {
		if (_score == cntQst) {
			SetText("", "msg", "Bạn đã hoàn thành bài học này, " + _score + " điểm.");
			SetShowObject("", "msg", 1);
		}
		else {
			InitScore();
			CreateQuestion();
		}

		InvalidateObj("", "");
		return;
	}

	var strCh = GetTextFromID("ID_C" + _index);
	SetText("", "index", "Bài " + _index);
	var aContent = ["", "", "", ""];
	aContent = strCh.split("*");
	SetText("", "_cauhoi", aContent[0]);
	cntQue = Length(aContent) - 1;
	for (var k = 1; k < cntQue + 1; k++) {
		arrayRes = aContent[k].split("|");
		var i = k - 1;
		AllowEditText("", "in_" + i, 1);
		AllowEditText("", "tt_" + i, 1);
		SetText("", "in_" + i, "");
		SetText("", "tt_" + i, "");
		SetBorder("", "in_" + i, "#000000");
		SetBorder("", "tt_" + i, "#000000");
		SetText("", "lg_" + i, replaceStr(arrayRes[0], "\r\n", ""));
		SetText("", "dv_" + i, arrayRes[2]);
		arrayKq[i] = arrayRes[1];
		SetShowObject("", "Group_" + i, 1);
	}

	_score = GetVer();
	_bTestAndCreat = false;
	SetText("", "check", "Nộp bài");
	SetShowObject("", "check", 1);
	SetShowObject("", "gr_msg", 0);
	InvalidateObj("", "");

}

function ChamDiem() {
	var strResult = "";
	var kq = true;
	for (var i = 0; i < cntQue; i++) {
		var tt = replaceStr(GetText("", "tt_" + i), ":", "/");
		tt = replaceStr(tt, "x", "*");

		if (GetText("", "in_" + i) == arrayKq[i]) {
			SetBorder("", "in_" + i, "#00ff00");
		}
		else {
			SetBorder("", "in_" + i, "#ff0000");
			kq = false;
		}
		var re = ExecAsThread(tt);

		if (re != false && typeof re != "undefined") {
			var decimal = trimStr(re).split(".");
			if (Length(decimal) > 1) {
				if (Length(decimal[1]) > 3)
					re = parseFloat(re.toFixed(3));
			}
		}

		if (re == arrayKq[i]) {
			SetBorder("", "tt_" + i, "#00ff00");
		}
		else {
			SetBorder("", "tt_" + i, "#ff0000");
			kq = false;
		}
		AllowEditText("", "in_" + i, 0);
		AllowEditText("", "tt_" + i, 0);
		strResult = strResult + arrayKq[i] + "\r\n";
	}

	if (kq == true) {
		_score++;
		SetColorEx("", "score" + _cSubmit, "#71dd13");
		SetText("", "score" + _cSubmit, _score);
		PlaySound("sound_good");
		SetText("", "msg", "\r\nBạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("", "msg", "#0b5394");
		strFinshed = strFinshed + _index + " ";
		SetText("", "txtFinish", strFinshed);
		UpdateScore(_score);
		SaveLesson(strFinshed);
	}
	else {
		PlaySound("sound_not");
		_score--;
		SetFontColor("", "msg", "#f05c5c");
		strResult = trimStr(strResult, "\r\n");
		SetText("", "msg", "Không chính xác.\r\n" + strResult);
	}
	_index++;
	_bTestAndCreat = true;
	SetShowObject("", "check", 0);
	SetText("", "next", "Câu " + _index);
	SetShowObject("", "gr_msg", 1);
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
		width: 750,
		height: 540
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 750, 540, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var dv_0 = CreText('dv_0', 450, 259, 199, 37, "%", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 0, 0, 749, 49, "Quãng đường", '#008000', '#ffffff', '#ffffff', '#ffffff', '', 26, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#008000', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var in_0 = CreText('in_0', 343, 259, 85, 37, "", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var sound = CreText('sound', 681, -13, 68, 67, "", '#ffffff', '#ffffff', '#000000', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#000000', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	sound.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		Speak(GetText("", "_cauhoi"), "VN");
		return;
	}
	);
	var lg_0 = CreText('lg_0', 32, 204, 716, 41, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var index = CreText('index', 30, 60, 62, 25, "Bài 1", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '1', 2, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 27, 162, 85, 30, "Bài giải", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var tt_0 = CreText('tt_0', 103, 259, 183, 37, "", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_5 = CreText('Text_5', 306, 259, 47, 37, "=", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 20, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check = CreText('check', 230, 320, 175, 50, "Nộp bài", '#009300', '#ffffff', '#ffffff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#000000', '#009300', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		else
			ChamDiem();
		return;
	}
	);
	var Text_3 = CreText('Text_3', 13, 503, 278, 30, "Bạn đã làm đúng các câu:", 'rgba(0,0,0,0)', '#ffffff', '#666666', '#000000', '', 18, 'Arial', 'Italic', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#00b95c', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var txtFinish = CreText('txtFinish', 286, 503, 347, 30, "", 'rgba(0,0,0,0)', '#c0c0c0', '#666666', '#ffffff', '', 18, 'Arial', 'Italic', 'left', 'middle', 3, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#00b95c', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Group_0 = new Kinetic.Group({ name: 'Group_0', x: 0, y: 0, width: 774, height: 80 });
	Group_0.add(dv_0, in_0, lg_0, tt_0, Text_5);
	var _cauhoi = CreText('_cauhoi', 19, 88, 726, 70, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 18, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 175, 332, 373, 135, "", '#e6e6fa', '#ccffff', '#282828', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'top', 11, '0.00', '10', '0', 1, '#000000', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var next = CreText('next', 294, 426, 138, 35, "Câu tiếp", '#009300', '#0080ff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#000000', '#009300', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	next.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		return;
	}
	);
	var title = CreText('title', 193, 303, 336, 30, "https://gogoedu.vn", '#008000', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#008000', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var gr_msg = new Kinetic.Group({ name: 'gr_msg', x: 0, y: 0, width: 377, height: 168 });
	gr_msg.add(msg, title, next);
	Page_1.add(Page_1_Backrounnd, Text_1, sound, index, Text_2, check, Text_3, txtFinish, Group_0, _cauhoi, gr_msg);
	stage.add(Page_1);
	InitLacVietScript();
};
