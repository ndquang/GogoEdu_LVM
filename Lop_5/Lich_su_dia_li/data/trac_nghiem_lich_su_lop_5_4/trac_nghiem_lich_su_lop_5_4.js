folder_Resource = '/data/trac_nghiem_lich_su_lop_5_4';
var cntQst = 21;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var strFinshed = "";
var cntQue = 1;
var aContent = ["", "", "", "", "", ""];
var chon_da = "";
function InitScore() {
	_score = GetVer();
	InvalidateObj("", "");
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
			SetText("", "check", "Hoàn Thành");
			for (var k = 0; k < 4; k++) {
				SetText("", "_" + k, "");
			}
			SetText("", "_cauhoi", "***Chúc mừng bạn đã hoàn thành bài học này***");
			_bTestAndCreat = true;
		}
		else {
			InitScore();
			CreateQuestion();
		}

		InvalidateObj("", "");
		return;
	}

	var strCh = GetTextFromID("ID_C" + _index);
	SetText("", "index", "Câu " + _index);
	aContent = strCh.split("|");
	SetText("", "_cauhoi", aContent[0]);
	for (var k = 0; k < 4; k++) {
		SetText("", "_" + k, "  " + aContent[k + 1]);
		SetColorEx("", "_" + k, "#ffffff");
	}
	_score = GetVer();
	_bTestAndCreat = false;
	SetText("", "check", "OK");
	chon_da = "";
	SetShowObject("", "check", 0);
	InvalidateObj("", "");

}

function ChonDA() {
	if (_bTestAndCreat)
		return;
	chon_da = replaceStr(GetName(""), "_", "");
	for (var k = 0; k < 4; k++) {
		SetColorEx("", "_" + k, "#ffffff");
	}
	SetColorEx("", "", "#A8F2E2");
	SetShowObject("", "check", 1);
	InvalidateObj("", "");
}
function ChamDiem() {
	if (chon_da == "") {
		return;
	}
	if (chon_da == aContent[5]) {
		_score++;
		PlaySound("sound_good");
		strFinshed = strFinshed + _index + " ";
		SetText("", "txtFinish", strFinshed);
		SetColorEx("", "_" + chon_da, "#d3f091");
		UpdateScore(_score);
		SaveLesson(strFinshed);
	}
	else {
		PlaySound("sound_not");
		_score--;
		SetColorEx("", "_" + chon_da, "#f4cccc");
		SetColorEx("", "_" + aContent[5], "#d3f091");
	}
	_index++;
	_bTestAndCreat = true;
	SetText("", "check", "Next →");
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
	var _cauhoi = CreText('_cauhoi', 1, 85, 741, 84, "", '#dfffff', '#ffffff', '#000000', '#000000', '', 18, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#dfffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var title = CreText('title', 43, 9, 749, 49, "Xã hội Việt Nam cuối thế kỉ XIX – Đầu thế kỉ XX", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 26, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#008000', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var sound = CreText('sound', 675, 95, 68, 67, "", '#ffffff', '#ffffff', '#000000', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#000000', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	sound.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		Speak(GetText("", "_cauhoi"), "VN");
		return;
	}
	);
	var index = CreText('index', 20, 58, 82, 28, "Câu 1", '#dff9f9', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#dff9f9', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check = CreText('check', 278, 447, 227, 50, "Nộp bài", '#afeeee', '#ffffff', '#000000', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#000000', '#afeeee', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		else
			ChamDiem();
		return;
	}
	);
	var msg = CreText('msg', 5, 503, 278, 30, "Các câu bạn đã làm", 'rgba(0,0,0,0)', '#ffffff', '#666666', '#000000', '', 18, 'Arial', 'Italic', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#00b95c', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var txtFinish = CreText('txtFinish', 286, 503, 464, 30, "", 'rgba(0,0,0,0)', '#c0c0c0', '#666666', '#ffffff', '', 18, 'Arial', 'Italic', 'left', 'middle', 3, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#00b95c', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _0 = CreText('_0', 85, 194, 624, 50, "", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var _1 = CreText('_1', 85, 257, 624, 50, "Trước cuối thế kỉ XIX xã hội Việt Nam chủ yếu có|Địa chủ phong kiến|Nông dân|Địa chủ phong kiến và nông dân|Nông dân và chủ xưởng nhỏ|2", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var _2 = CreText('_2', 85, 316, 624, 50, "Vào những năm đầu thế kỉ XX, nước ta có khoảng bao nhiêu vạn công nhân?|Khoảng 6 vạn công nhân|Khoảng 10 vạn công nhân|Khoảng 20 vạn công nhân|Khoảng 1 vạn công nhân|1", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var _3 = CreText('_3', 85, 376, 624, 50, "Giai cấp tầng lớp nào có khoảng 10 vạn người vào những năm đầu thế kỉ XX?|Chủ xưởng|Trí thức|Địa chủ|Nông dân|2", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var Text_6 = CreText('Text_6', 20, 376, 59, 46, "D.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', -13, 15, 146, 34, "Bài 4", 'rgba(0,0,0,0)', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#dff9f9', '0', '0', '#0080c0', '0', '0', '4', '1', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_3 = CreText('Text_3', 20, 198, 59, 46, "A.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 20, 257, 59, 46, "B.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 15, 319, 59, 46, "C", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, _cauhoi, title, sound, index, check, msg, txtFinish, _0, _1, _2, _3, Text_6, Text_1, Text_3, Text_2, Text_4);
	stage.add(Page_1);
	InitLacVietScript();
};
