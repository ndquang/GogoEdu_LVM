folder_Resource = '/data/chia_so_do_thoi_gian';
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

	var strCh = 1;//Random(6);
	var a0, b0, c0 = 0;
	switch (strCh) {
		case 0: // nam thang
			{
				a0 = Random(10) + 1;
				b0 = Random(10) + 1;
				c0 = Random(10) + 1;

				SetText("", "dv_0", "năm");
				SetText("", "dv_1", "tháng");
				SetText("", "_cauhoi", a0 + " năm " + b0 + " tháng");
				SetText("", "_so", c0);

				arrayKq[1] = (b0 * c0) % 12;
				arrayKq[0] = a0 * c0 + (b0 * c0 - arrayKq[1]) / 12;

				break;
			}

		case 1:
			{
				a0 = Random(12) + 1;
				b0 = Random(60) + 1;
				c0 = Random(10) + 1;
				while ((a0 * 60 + b0) % c0 != 0) {
					a0 = Random(12) + 1;
					b0 = Random(60) + 1;
					c0 = Random(10) + 1;
				}
				SetText("", "dv_0", "giờ");
				SetText("", "dv_1", "phút");
				SetText("", "_cauhoi", a0 + " giờ " + b0 + " phút");
				SetText("", "_so", c0);
				var phut = ((a0 * 60 + b0) / c0);
				arrayKq[1] = phut % 60;
				arrayKq[0] = (phut - arrayKq[1]) / 60;
				break;
			}
		case 2: //phut- giay
			{
				a0 = Random(12) + 1;
				b0 = Random(12) + 1;
				c0 = Random(10) + 1;

				SetText("", "dv_0", "phút ");
				SetText("", "dv_1", "giây");
				SetText("", "_cauhoi", a0 + " phút " + b0 + " giây");
				SetText("", "_so", c0);

				arrayKq[1] = (b0 * c0) % 60;
				arrayKq[0] = a0 * c0 + (b0 * c0 - arrayKq[1]) / 60;

				break;
			}
		case 3: //tuần- ngày
			{
				a0 = Random(10) + 1;
				b0 = Random(7) + 1;
				c0 = Random(10) + 1;

				SetText("", "dv_0", "tuần");
				SetText("", "dv_1", "ngày");
				SetText("", "_cauhoi", a0 + " tuần " + b0 + " ngày");
				SetText("", "_so", c0);

				arrayKq[1] = (b0 * c0) % 7;
				arrayKq[0] = a0 * c0 + (b0 * c0 - arrayKq[1]) / 7;

				break;
			}
		case 4: //thế kỷ, năm 
			{
				a0 = Random(5) + 1;
				b0 = Random(100) + 1;
				c0 = Random(10) + 1;

				SetText("", "dv_0", "thế kỷ");
				SetText("", "dv_1", "năm");
				SetText("", "_cauhoi", a0 + " thế kỷ " + b0 + " năm");
				SetText("", "_so", c0);

				arrayKq[1] = (b0 * c0) % 100;
				arrayKq[0] = a0 * c0 + (b0 * c0 - arrayKq[1]) / 100;

				break;
			}
		case 5: //ngày giờ
			{
				a0 = Random(10) + 1;
				b0 = Random(24) + 1;
				c0 = Random(10) + 1;

				SetText("", "dv_0", "ngày ");
				SetText("", "dv_1", "giờ");
				SetText("", "_cauhoi", a0 + " ngày " + b0 + " giờ");
				SetText("", "_so", c0);

				arrayKq[1] = (b0 * c0) % 24;
				arrayKq[0] = a0 * c0 + (b0 * c0 - arrayKq[1]) / 24;

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
		SetBorder("", "in_" + k, "#b2b2b2");
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
		width: 640,
		height: 400
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 400, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_2 = CreText('Text_2', 297, 120, 76, 49, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '10', '0', 2, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 0, 0, 641, 49, "Chia số đo thời gian với một số", '#008080', '#ffffff', '#ffffff', '#ffffff', '', 26, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#008080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _score = CreText('_score', 550, 2, 86, 44, "0", '#ffffff', '#ffffff', '#008080', '#ffffff', '', 36, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _so = CreText('_so', 297, 75, 217, 46, "3", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '10', '1', 2, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dv_0 = CreText('dv_0', 361, 128, 50, 43, "giờ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var in_1 = CreText('in_1', 407, 128, 50, 43, "15", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _cauhoi = CreText('_cauhoi', 126, 77, 169, 48, "3 giờ 5 phút", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var in_0 = CreText('in_0', 307, 128, 50, 43, "20", 'rgba(213,234,255,0.22)', '#ffffff', '#282828', '#000000', '', 24, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', 'rgba(213,234,255,0.22)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dv_1 = CreText('dv_1', 462, 128, 131, 43, "phút", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#000000', '', 24, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check = CreText('check', 230, 240, 175, 50, "Submit", '#008080', '#ffffff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#ffffff', '#008080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		else
			ChamDiem();
		return;
	}
	);
	var msg = CreText('msg', 122, 221, 373, 135, "", '#e6e6fa', '#ccffff', '#282828', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'top', 11, '0.00', '10', '0', 1, '#0080ff', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var next = CreText('next', 241, 302, 138, 48, "Câu tiếp", '#008080', '#0080ff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 11, '0.00', '10', '0', 1, '#ffffff', '#008080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	next.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_bTestAndCreat)
			CreateQuestion();
		return;
	}
	);
	var Text_4 = CreText('Text_4', 141, 187, 336, 32, "https://gogoedu.vn", '#008080', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#008080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var gr_msg = new Kinetic.Group({ name: 'gr_msg', x: 0, y: 0, width: 377, height: 167 });
	gr_msg.add(msg, Text_4, next);
	Page_1.add(Page_1_Backrounnd, Text_2, Text_1, _score, _so, dv_0, in_1, _cauhoi, in_0, dv_1, check, gr_msg);
	stage.add(Page_1);
	InitLacVietScript();
};
