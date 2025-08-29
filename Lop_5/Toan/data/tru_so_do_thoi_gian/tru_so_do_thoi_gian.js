folder_Resource = '/data/tru_so_do_thoi_gian';
var cntQst = 10;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["", ""];
var strFinshed = "";
function InitScore() {

	SetShowObject("", "gr_msg", 0);
	SetMoveView("", "gr_msg", 1);

	SetDigitEditText("", "in_0", "number");
	SetDigitEditText("", "in_1", "number");
	_index = 1;
	_bTestAndCreat = false;

	_score = GetVer();
	SetText("", "_score", _score);
	InvalidateObj("", "");

}

function CreateQuestion() {

	var strCh = Random(6);
	var a0, a1, b0, b1 = 0;
	switch (strCh) {
		case 0: // nam thang
			{
				SetText("", "dv_0", "năm");
				a0 = Random(10) + 1;
				b0 = Random(a0) + 1;

				SetText("", "dv_1", "tháng");
				a1 = Random(20) + 1;
				b1 = Random(20) + 1;
				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(10) + 1;
						b0 = Random(a0) + 1;
					}
				}
				SetText("", "_cauhoi", a0 + " năm " + a1 + " tháng - " + b0 + " năm " + b1 + " tháng");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 12;
				}
				arrayKq[1] = (a1 - b1) % 12;
				arrayKq[0] = a0 - b0 + ((a1 - b1) - arrayKq[1]) / 12;

				break;
			}

		case 1:
			{
				a0 = Random(12) + 1;
				b0 = Random(a0) + 1;

				a1 = Random(60) + 1;
				b1 = Random(60) + 1;

				SetText("", "dv_0", "giờ");
				SetText("", "dv_1", "phút");

				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(12) + 1;
						b0 = Random(a0) + 1;
					}
				}
				SetText("", "_cauhoi", a0 + " giờ " + a1 + " phút - " + b0 + " giờ " + b1 + " phút");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 60;
				}
				arrayKq[1] = (a1 - b1) % 60;
				arrayKq[0] = a0 - b0 + ((a1 - b1) - arrayKq[1]) / 60;
				break;
			}
		case 2: //phut- giay
			{
				a0 = Random(12) + 1;
				b0 = Random(a0) + 1;

				a1 = Random(60) + 30;
				b1 = Random(60) + 30;
				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(12) + 1;
						b0 = Random(a0) + 1;
					}
				}
				SetText("", "_cauhoi", a0 + " phút " + a1 + " giây - " + b0 + " phút " + b1 + " giây");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 60;
				}

				SetText("", "dv_0", "phút ");
				SetText("", "dv_1", "giây");

				arrayKq[1] = (a1 - b1) % 60;
				arrayKq[0] = a0 - b0 - ((a1 - b1) - arrayKq[1]) / 60;
				break;
			}
		case 3: //tuần- ngày
			{
				a0 = Random(10) + 1;
				b0 = Random(a0) + 1;

				a1 = Random(14) + 1;
				b1 = Random(14) + 1;

				SetText("", "dv_0", "tuần");
				SetText("", "dv_1", "ngày");

				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(10) + 1;
						b0 = Random(a0) + 1;
					}
				}
				SetText("", "_cauhoi", a0 + " tuần " + a1 + " ngày - " + b0 + " tuần " + b1 + " ngày");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 7;
				}

				arrayKq[1] = (a1 - b1) % 7;
				arrayKq[0] = a0 - b0 + ((a1 - b1) - arrayKq[1]) / 7;
				break;
			}
		case 4: //thế kỷ, năm 
			{
				a0 = Random(5) + 1;
				b0 = Random(a0) + 1;

				a1 = Random(200) + 1;
				b1 = Random(a1) + 1;

				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(5) + 1;
						b0 = Random(a0) + 1;
					}
				}

				SetText("", "dv_0", "thế kỷ");
				SetText("", "dv_1", "năm");
				SetText("", "_cauhoi", a0 + " thế kỷ " + a1 + " năm - " + b0 + " thế kỷ " + b1 + " năm");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 100;
				}
				arrayKq[1] = (a1 - b1) % 100;
				arrayKq[0] = a0 - b0 + ((a1 - b1) - arrayKq[1]) / 100;
				break;
			}
		case 5: //ngày giờ
			{
				a0 = Random(10) + 1;
				b0 = Random(a0) + 1;

				a1 = Random(48) + 1;
				b1 = Random(48) + 1;

				SetText("", "dv_0", "ngày ");
				SetText("", "dv_1", "giờ");
				if (a1 < b1) {
					while (a0 == b0) {
						a0 = Random(10) + 1;
						b0 = Random(a0) + 1;
					}
				}
				SetText("", "_cauhoi", a0 + " ngày " + a1 + " giờ - " + b0 + " ngày " + b1 + " giờ");
				if (a1 < b1) {
					a0 = a0 - 1;
					a1 = a1 + 24;
				}
				arrayKq[1] = (a1 - b1) % 24;
				arrayKq[0] = a0 - b0 + ((a1 - b1) - arrayKq[1]) / 24;
				break;
			}

		default:
			{
				Message("Không thể tạo câu hỏi.");
				break;
			}
	}
	SetText("", "index", "Bài " + _index);
	for (var k = 0; k < 2; k++) {
		AllowEditText("", "in_" + k, 1);
		SetBorder("", "in_" + k, "#000000");
		SetText("", "in_" + k, "");
	}
	var preIndex = _index - 1;
	_bTestAndCreat = false;
	SetText("", "check", "Submit");
	SetShowObject("", "check", 1);
	SetShowObject("", "gr_msg", 0);
	InvalidateObj("", "");

}

function ChamDiem() {
	var strResult = "";
	var kq = true;
	for (var i = 0; i < 2; i++) {
		if (GetText("", "in_" + i) == arrayKq[i]) {
			SetBorder("", "in_" + i, "#00ff00");
		}
		else {
			SetBorder("", "in_" + i, "#ff0000");
			kq = false;
		}

		AllowEditText("", "in_" + i, 0);
	}

	if (kq == true) {
		_score++;
		PlaySound("sound_good");
		SetText("", "msg", "\r\nBạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("", "msg", "#33ff33");
	}
	else {
		_score--;
		if (_score < 0) _score = 0;
		PlaySound("sound_not");
		SetFontColor("", "msg", "#f05c5c");
		strResult = arrayKq[0] + " " + GetText("", "dv_0") + " " + arrayKq[1] + " " + GetText("", "dv_1");
		SetText("", "msg", "\r\nKhông chính xác.\r\n" + strResult);
	}
	SetText("", "_score", _score);
	UpdateScore(_score);
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
		height: 400
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 750, 400, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var dv_0 = CreText('dv_0', 277, 162, 99, 45, "tháng", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 0, 0, 750, 59, "Trừ số đo thời gian", '#ff0080', '#ffffff', '#ffffff', '#ffffff', '', 26, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ff0080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var in_1 = CreText('in_1', 375, 162, 85, 45, "", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _cauhoi = CreText('_cauhoi', 24, 85, 702, 60, "Tỉ số của diện tích trồng hoa hồng và diện tích vườn hoa là:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var in_0 = CreText('in_0', 175, 162, 96, 45, "", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dv_1 = CreText('dv_1', 469, 162, 163, 45, "năm", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check = CreText('check', 248, 236, 175, 50, "Submit", '#ff0080', '#ffffff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#ffffff', '#ff0080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		else
			ChamDiem();
		return;
	}
	);
	var msg = CreText('msg', 164, 171, 373, 135, "", '#e6e6fa', '#ccffff', '#282828', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'top', 11, '0.00', '10', '0', 1, '#0080ff', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var next = CreText('next', 283, 252, 138, 48, "Câu tiếp", '#ff0080', '#0080ff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#ffffff', '#ff0080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	next.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		return;
	}
	);
	var Text_4 = CreText('Text_4', 183, 137, 336, 32, "https://gogoedu.vn", '#ff0080', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ff0080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var gr_msg = new Kinetic.Group({ name: 'gr_msg', x: 0, y: 0, width: 377, height: 167 });
	gr_msg.add(msg, Text_4, next);
	var _score = CreText('_score', 660, 4, 86, 52, "0", '#ffffff', '#ffffff', '#ff0080', '#ffffff', '', 36, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, dv_0, Text_1, in_1, _cauhoi, in_0, dv_1, check, gr_msg, _score);
	stage.add(Page_1);
	InitLacVietScript();
};
