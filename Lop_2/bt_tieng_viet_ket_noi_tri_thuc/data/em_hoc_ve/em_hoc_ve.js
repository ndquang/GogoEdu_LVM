folder_Resource = '/data/em_hoc_ve';
var m_color = "";
var obj_down = "";
var obj_up = "";
var _score = 0;
var _reply = 0;
var array_check = ["", "✔", ""];
//
var array_input = ["Những vì sao lung linh", "Ngọn gió vi vu", "Tiếng ve kêu râm ran", "rùa", "gió", "dưa"];
// 
var akq_ch = ["ngh", "ng", "?", "?", ".", ".", "."];
var a_ch_init = ["", "", "", "", "", "cua", "nhưng", "cưa", "mơ", "Môi", "ngu"];
var a_word = ["lớp học", "giấy", "bút", "bầu trời", "sao", "ông trăng", "ngõ", "cánh diều", "biển", "con thuyền", "cánh buồm", "mặt trời", "sóng", "phượng đỏ", "sân trường", "ve"];
function ClickCheck() {
	if (GetText("", "") != "✔") {
		SetText("", "", "✔");
	}
	else {
		SetText("", "", "");
	}
	PlaySound("MOVE_OK");
	InvalidateObj("", "");

}
function ChangeChar(ch1, ch2) {
	var curText = GetText("", "");
	if (curText == "" || curText == ch2) {
		SetText("", "", ch1);
	}
	else {
		SetText("", "", ch2);

	}
	PlaySound("MOVE_OK");
	InvalidateObj("", "");

}

function InitTracNghiem() {

	for (var i = 0; i < 3; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}
	for (i = 0; i < 6; i++) {
		SetText("", "input_" + i, "");
		AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#000000");
	}
	SetText("", "input_text", a_word[0] + ",");
	AllowEditText("", "input_text", 1);
	SetFontColor("", "input_text", "#000000");

	for (i = 0; i < 7; i++) {
		SetText("", "ch_" + i, "");
		SetFontColor("", "ch_" + i, "#0080ff");
	}

	SetText("", "msg", "");
	_reply = 0;
	_score = GetVer();
	SetText("", "diem", "Chấm Điểm");
	PlaySound("SND_CREATE");
}

function ChamDiem() {
	var _diem = 0;
	var _dunghet = true;
	var chuachon = false;
	for (var i = 0; i < 3; i++) {
		var isCheck = GetText("", "check_" + i);
		if (isCheck == "✔")
			chuachon = true;
		if (array_check[i] == isCheck) {
			SetFontColor("", "check_" + i, "#3b8b26");
			_diem = _diem + 0.5;
		}
		else {
			SetFontColor("", "check_" + i, "#FF0000");
			_dunghet = false;
		}
		if (array_check[i] == "✔")
			SetFontColor("", "abc" + i, "#3b8b26");
	}
	if (chuachon == false) {
		SetText("", "msg", "⚠ Bạn chưa hoàn thành bài tập");
		return;
	}

	var textnotfound = "";
	var txtWorrd = GetText("", "input_text");
	var myArray = txtWorrd.split(",");
	var notfound = false;
	for (var i = 0; i < myArray.length; i++) {
		if (a_word.includes(myArray[i].trim())) {
			_diem = _diem + 0.5;
		}
		else {
			notfound = true;
			textnotfound = textnotfound + myArray[i]
		}
	}
	if (notfound) {
		SetText("", "input_text", GetText("", "input_text") + "=> " + textnotfound)
	}


	for (i = 0; i < 6; i++) {
		var txt = GetText("", "input_" + i);
		if (txt == array_input[i]) {
			_diem = _diem + 0.5;
			SetFontColor("", "input_" + i, "#3b8b26");
		}
		else {
			SetFontColor("", "input_" + i, "#FF0000");
			SetText("", "input_" + i, txt + " => " + array_input[i]);
		}
	}
	//
	for (i = 0; i < 7; i++) {
		var txt = GetText("", "ch_" + i);
		if (txt == akq_ch[i]) {
			_diem = _diem + 0.5;
			SetFontColor("", "ch_" + i, "#3b8b26");
		}
		else {
			SetFontColor("", "ch_" + i, "#FF0000");
		}
	}

	if (_diem > _score) {
		_score = _diem;
		SetText("", "msg", "✅  Điểm của bạn: " + _score);
		UpdateScore(_score);
		PlaySound("SND_TRUE");
	}
	else {
		PlaySound("SND_FALSE");
		SetText("", "msg", "❌ Em cần xem lại các bài sai");
	}
	_reply = 1;
	SetText("", "diem", "Làm lại");


}
function Page_1() {
	InitTracNghiem();
	InvalidateObj("", "");
	return;
}
function Page_1_OnTimer() {
	InvalidateObj("", "");
	SetCursor("", "obj_paint", "ID_PEN");
	KillTimerPage();
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
		height: 1000
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 1000, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_8 = CreText('Text_8', 131, 568, 404, 20, "b. Có công mài sắt có ……ày nên kim.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_17 = CreText('Text_17', 222, 879, 181, 20, "- Cảm ơn cậu", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_26 = CreText('Text_26', 94, 746, 474, 30, "Điền dấu chấm hoặc dấu chấm hỏi vào ô trống.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_14 = CreText('Text_14', 118, 402, 89, 24, "- Lung linh:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_11 = CreText('Text_11', 120, 3, 388, 37, "EM HỌC VẼ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 57, 195, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_13 = CreText('Text_13', 92, 366, 543, 35, "Viết câu nêu đặc điểm có sử dụng từ:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 50, 44, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 82, 40, 519, 38, "Bức tranh cảnh biển của bạn nhỏ trong bài đọc có gì? (đánh dấu ✔  vào ô trống trước đáp án đúng).\r\n", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 1, 933, 639, 68, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 240, 909, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	diem.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (_reply == 0) {
			ChamDiem();
		}
		else {
			InitTracNghiem();
		}
		InvalidateObj("", "");
	}
	);
	var Image_1 = CreText('Image_1', 521, 120, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_3 = CreText('Text_3', 64, 373, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 83, 193, 519, 28, "Viết những từ ngữ chỉ sự vật có trong bài đọc.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_5 = CreText('Text_5', 477, 5, 38, 35, "Em học vẽ\r\nHôm nay trong lớp học\r\nVới giấy trắng, bút màu\r\nNắn nót em ngồi vẽ\r\nLung linh bầu trời sao.\r\n\r\nVẽ ông trăng trên cao\r\nRải ánh vàng đầy ngõ\r\nVẽ cánh diều no gió\r\nVi vu giữa trời xanh.\r\n\r\nVẽ biển cả long lanh\r\nCó một con thuyền trắng\r\nGiương cánh buồm đỏ thắm\r\nĐang rẽ sóng ra khơi.\r\n\r\nVẽ cả ông mặt trời\r\nVà những chùm phượng đỏ\r\nTrên sân trường lộng gió\r\nGọi ve về râm ran.", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var edit = CreText('edit', 109, 508, 475, 28, "Điền ng hoặc ngh vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var samp = CreText('samp', 109, 599, 474, 30, "Viết vào chỗ trống tiếng bắt đầu bằng r, d hoặc gi.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var abc_0 = CreText('abc_0', 139, 87, 435, 28, "cánh diều, con thuyền trắng, cánh buồm đỏ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_1 = CreText('abc_1', 139, 119, 444, 28, "con thuyền trắng, cánh buồm đỏ, sóng", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_2 = CreText('abc_2', 139, 151, 529, 28, "sóng, con thuyền trắng, bầu trời sao", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_0 = CreText('check_0', 109, 87, 25, 28, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_1 = CreText('check_1', 109, 118, 25, 28, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_2 = CreText('check_2', 109, 149, 25, 28, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var xxx2 = CreText('xxx2', 118, 439, 89, 24, "- Vi vu:", 'rgba(0,0,0,0)', '#ccffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ccffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_2 = CreText('input_2', 222, 473, 336, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 222, 398, 336, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 222, 435, 336, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 131, 544, 404, 20, "a. Trăm ……e không bằng một thấy.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 222, 784, 404, 20, "- Tẩy ơi cậu giúp tớ một chút được không", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 222, 807, 278, 20, "- Cậu muốn tớ giúp gì nào", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_15 = CreText('Text_15', 222, 830, 265, 20, "- Tớ muốn xóa hình vẽ này", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_16 = CreText('Text_16', 222, 853, 181, 20, "- Tớ sẽ giúp cậu", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var ch_0 = CreText('ch_0', 177, 543, 53, 20, "ngh", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '1', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var ch_1 = CreText('ch_1', 275, 567, 54, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '1', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var ch_4 = CreText('ch_4', 427, 829, 22, 22, "", '#ffffff', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?");
		return;
	}
	);
	var ch_6 = CreText('ch_6', 330, 878, 22, 22, "", '#ffffff', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_6.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?");
		return;
	}
	);
	var ch_5 = CreText('ch_5', 352, 852, 22, 22, "", '#ffffff', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?");
		return;
	}
	);
	var ch_2 = CreText('ch_2', 537, 783, 22, 22, "", '#ffffff', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?");
		return;
	}
	);
	var ch_3 = CreText('ch_3', 423, 806, 22, 22, "", '#ffffff', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	ch_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?");
		return;
	}
	);
	var Text_21 = CreText('Text_21', 125, 476, 89, 24, "- Râm ran:", 'rgba(0,0,0,0)', '#ccffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ccffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_22 = CreText('Text_22', 70, 510, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 70, 601, 21, 21, "5.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_9 = CreText('Text_9', 132, 642, 117, 24, "- Chậm như", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_10 = CreText('Text_10', 132, 672, 106, 24, "- Nhanh như", 'rgba(0,0,0,0)', '#ccffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ccffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_23 = CreText('Text_23', 132, 709, 333, 24, "- Nắng tốt                 mưa tốt lúa", 'rgba(0,0,0,0)', '#ccffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ccffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_3 = CreText('Image_3', 390, 632, 53, 33, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE4.JPG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Image_4 = CreText('Image_4', 390, 662, 53, 33, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE9.JPG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Image_5 = CreText('Image_5', 390, 702, 53, 33, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE10.JPG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var input_3 = CreText('input_3', 227, 639, 124, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 235, 671, 124, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_5 = CreText('input_5', 213, 703, 60, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_27 = CreText('Text_27', 73, 749, 21, 21, "6.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_18 = CreText('Text_18', 75, 784, 125, 203, "Bút chì:\r\nTẩy:\r\nBút chì:\r\nTẩy:\r\nBút chì:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Italic', 'right', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.80);
	var input_text = CreText('input_text', 111, 220, 494, 137, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, Text_8, Text_17, Text_26, Text_14, Text_11, Text_12, Text_13, Text_28, Text_29, msg, diem, Image_1, Text_3, Text_4, Text_5, edit, samp, Image_2, abc_0, abc_1, abc_2, check_0, check_1, check_2, xxx2, input_2, input_0, input_1, Text_7, Text_1, Text_2, Text_15, Text_16, ch_0, ch_1, ch_4, ch_6, ch_5, ch_2, ch_3, Text_21, Text_22, Text_6, Text_9, Text_10, Text_23, Image_3, Image_4, Image_5, input_3, input_4, input_5, Text_27, Text_18, input_text);
	stage.add(Page_1);
	InitLacVietScript();
};
