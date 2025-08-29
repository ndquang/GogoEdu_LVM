folder_Resource = '/data/trac_nghiem_dia_li_5_12';
var cntQst = 14;
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
	SetText("", "_cauhoi", replaceStr(aContent[0], "\r\n", ""));
	for (var k = 0; k < 4; k++) {
		SetText("", "_" + k, "  " + replaceStr(aContent[k + 1], "\r\n", ""));
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
	var _cauhoi = CreText('_cauhoi', 1, 85, 747, 84, "", '#dfffff', '#ffffff', '#000000', '#000000', '', 18, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#dfffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_cauhoi.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		Speak(GetText("", ""), "VN");
		return;
	}
	);
	var title = CreText('title', 106, 9, 637, 75, "Công nghiệp", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 26, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#008000', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var _1 = CreText('_1', 85, 257, 624, 50, "Phần lớn dân số sống ở nông thôn nước ta\r\n|Làm ruộng\r\n|Làm nghề thủ công\r\n|Chăn nuôi\r\n|Làm nghề nông|3", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var _2 = CreText('_2', 85, 316, 624, 50, "Xe tăng của ta tiến vào Dinh Độc lập vào\r\n|Ngày 27-1-1975\r\n|Ngày 26-4-1975\r\n|Ngày 30-4-1975\r\n|Ngày 25-4-1976|2", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var _3 = CreText('_3', 85, 376, 624, 50, "Chiến dịch Hồ Chí Minh kết thúc vào\r\n|Ngày 7-5-1954\r\n|Ngày 17-1-1960\r\n|Ngày 27-1-1973\r\n|Ngày 30-4-1975|3", 'rgba(0,0,0,0)', '#ffffff', '#004080', '#ffffff', '', 18, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChonDA();
		return;
	}
	);
	var Text_6 = CreText('Text_6', 20, 376, 59, 46, "D.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', -1, 15, 134, 34, "Bài 12", 'rgba(0,0,0,0)', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#dff9f9', '0', '0', '#0080c0', '0', '0', '4', '1', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_3 = CreText('Text_3', 20, 198, 59, 46, "A.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 20, 257, 59, 46, "B.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 15, 319, 59, 46, "C", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, _cauhoi, title, index, check, msg, txtFinish, _0, _1, _2, _3, Text_6, Text_1, Text_3, Text_2, Text_4);
	stage.add(Page_1);
	InitLacVietScript();
};
