folder_Resource = '/data/tha_dieu';
var m_color = "";
var _score = 0;
var _reply = 0;
var array_check = ["✔", "✔", "✔", "✔", "", "", "✔", ""];
var array_input = ["Bầu trời có rất nhiều sao.", "Bố dạy em thả diều.", "Nai vàng muốn tập bay để thấy được những gì sơn ca kể.", "Nhưng nai vàng không thể bay được."];

// 

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
function ClickPlus() {
	var tt = GetText("", "");
	if (tt == "" || tt == 4)
		tt = 1;
	else tt++;
	SetText("", "", tt);
	PlaySound("MOVE_OK");
	InvalidateObj("", "");
}
function FillColor() {
	var cl = GetBorderWidth("", "");
	if (cl == 0.0001)
		SetBorder("", "", "#000000", 1);
	else SetBorder("", "", "#000000", 0);
	InvalidateObj("", "");
	PlaySound("MOVE_OK");
}
function InitTracNghiem() {

	// bai 3
	for (var i = 0; i < 3; i++) {
		var cl = SetBorder("", "dong_tu_" + i, "#000000", 0);
	}

	for (i = 0; i < 8; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}
	for (i = 0; i < 4; i++) {
		AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#000000");
		SetText("", "input_" + i, "");
	}

	SetText("", "msg", "");
	_reply = 0;
	_score = GetVer();
	SetText("", "diem", "Chấm Điểm");
	PlaySound("SND_CREATE");
}


function ChamDiem() {
	var _diem = 0;
	for (var i = 0; i < 3; i++) {
		var cl = GetBorderWidth("", "dong_tu_" + i);
		if (cl >= 1)
			_diem = _diem + 0.5;
	}


	//bài 4
	var _dunghet = true;
	var chuachon = false;
	for (i = 0; i < 6; i++) {
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
		SetText("", "msg", "⚠ Bạn chưa hoàn thành bài tâp");
		return;
	}
	// bai nhap text
	for (i = 0; i < 4; i++) {
		var txt = GetText("", "input_" + i);
		if (txt == array_input[i]) {
			_diem = _diem + 1;
			SetFontColor("", "input_" + i, "#3b8b26");
		}
		else {
			SetFontColor("", "input_" + i, "#FF0000");
			SetText("", "input_" + i, txt + " => " + array_input[i]);
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
	SetPaint("", "obj_paint", 1);
	PaintType("", "obj_paint", 5);
	PaintWidth("", "obj_paint", 3);
	PaintColor("", "obj_paint", "#ff0000");
	InitTracNghiem();
	InvalidateObj("", "");
	SetTimerPage(500);
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
		height: 850
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 850, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Image_3 = CreText('Image_3', 57, 108, 566, 90, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE8.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_11 = CreText('Text_11', 108, 23, 388, 37, "THẢ DIỀU", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 44, 246, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_13 = CreText('Text_13', 71, 246, 547, 40, "Từ ngữ nào được dùng để nói về âm thanh của sáo diều? (đánh dấu ✔ vào ô trống trước đáp án đúng)", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 44, 508, 21, 21, "5.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 71, 504, 519, 28, "Viết 1 – 2 câu về nhân vật em thích trong câu chuyện Chúng mình là bạn.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 2, 781, 636, 66, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 240, 757, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var abc_5 = CreText('abc_5', 115, 292, 98, 27, "no gió", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '3', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_6 = CreText('abc_6', 289, 292, 98, 27, "trong ngần", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '3', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_7 = CreText('abc_7', 461, 292, 98, 27, "uốn cong", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '3', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_0 = CreText('check_0', 106, 205, 25, 25, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_1 = CreText('check_1', 220, 205, 25, 25, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_2 = CreText('check_2', 338, 205, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_5 = CreText('Text_5', 446, 20, 45, 38, "THẢ DIỀU\r\n\r\nCánh diều no gió\r\nSáo nó thổi vang\r\nSao trời trôi qua\r\nDiều thành trăng vàng.\r\n\r\nCánh diều no gió\r\nTiếng nó trong ngần\r\nDiều hay chiếc thuyền\r\nTrôi trên sông Ngân.\r\n\r\nCánh diều no gió\r\nTiếng nó chơi vơi\r\nDiều là hạt cau\r\nPhơi trên nong trời.\r\n\r\nTrời như cánh đồng\r\nXong mùa gặt hái\r\nDiều em – lưỡi liềm\r\nAi quên bỏ lại.\r\n\r\nCánh diều no gió\r\nNhạc trời réo vang\r\nTiếng diều xanh lúa\r\nUốn cong tre làng.", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var check_4 = CreText('check_4', 544, 205, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_5 = CreText('check_5', 84, 293, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_1 = CreText('Text_1', 44, 407, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var edit = CreText('edit', 71, 403, 519, 28, "Viết 1 – 2 câu có sử dụng từ ngữ vừa tìm được ở bài tập 3. ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 103, 437, 482, 24, "Lớp học thoáng mát.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_2 = CreText('Text_2', 44, 65, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 71, 65, 537, 39, "Những sự vật nào giống cánh diều được nhắc tới trong bài đọc? (đánh dấu ✔ vào ô trống dưới hình chỉ đáp án đúng)", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_8 = CreText('Text_8', 71, 328, 519, 28, "Gạch chân từ ngữ chỉ sự vật trong 2 câu thơ dưới đây:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_9 = CreText('Text_9', 44, 332, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_10 = CreText('Text_10', 97, 356, 220, 50, " Sao trời trôi qua\r\n Diều thành trăng vàng.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dong_tu_0 = CreText('dong_tu_0', 101, 353, 62, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(255,255,255,0.04)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_1 = CreText('dong_tu_1', 100, 372, 41, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_2 = CreText('dong_tu_2', 190, 373, 38, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var input_1 = CreText('input_1', 103, 468, 482, 24, "Lớp học nghiêm túc.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_3 = CreText('check_3', 446, 205, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_6 = CreText('check_6', 258, 293, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_6.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_7 = CreText('check_7', 431, 293, 25, 25, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_7.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Image_4 = CreText('Image_4', 110, 536, 420, 133, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE9.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var input_2 = CreText('input_2', 103, 684, 482, 24, "Lớp học thoáng mát.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_3 = CreText('input_3', 103, 715, 482, 24, "Lớp học nghiêm túc.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_3 = CreText('Text_3', 555, 496, 45, 38, "CHÚNG MÌNH LÀ BẠN\r\nẾch ộp, sơn ca và nai vàng chơi với nhau rất thân. Ngày nào ba bạn cũng gặp nhau trò chuyện, vui chơi cùng nhau.\r\nSơn ca cất giọng trong vắt kể cho hai bạn nghe về bao nhiêu chuyện lạ nơi mình đã bay qua. Ếch ộp thì kể chuyện mẹ con nhà cua, nhà cá, chuyện ốc, ba ba,... Nai vàng thì kể chuyện rừng núi hùng vĩ và bí hiểm. Nhờ thế mà cả ba cùng hiểu thêm được bao nhiêu điều thú vị ở khắp mọi nơi.\r\nNhưng ếch ộp, sơn ca, nai vàng muốn tận mắt thấy những cảnh đã được nghe kể. Chúng quyết định đổi chỗ cho nhau: chim sơn ca thì xuống nước, ếch ốp vào rừng, còn nai vàng thì tập bay.\r\nSơn ca dang cánh lao xuống nước, nhưng phải vội ngoi lên bờ ngay, mình mẩy ướt sũng và ho sặc sụa. Nó hiểu ra rằng mình không thể bơi được.\r\nNai vàng trèo lên một mỏm đá cao rồi có chân tung mình vào khoảng không để tập bay. Huỵch! Nó rơi xuống thảm cỏ đau điếng, miệng lẩm bẩm: Mình không thể bay được.\r\nẾch ốp lúc đó cũng nhảy từ trong rừng ra, nói: Các bạn ơi! Tớ đói quá! Tớ chẳng tìm được cái gì ở trong rừng để ăn.\r\nSơn ca nói: Chúng mình mỗi người thuộc về một nơi khác nhau, mỗi người có những khả năng riêng, nhưng chúng ta vẫn mãi mãi là bạn của nhau nhé! Ếch ộp và nai vàng cùng đồng thanh: Tất nhiên rồi!", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	Page_1.add(Page_1_Backrounnd, Image_3, Text_11, Text_12, Text_13, Text_28, Text_29, msg, diem, Image_1, abc_5, abc_6, abc_7, check_0, check_1, check_2, Text_5, check_4, check_5, Text_1, edit, input_0, Image_2, Text_2, Text_6, Text_8, Text_9, Text_10, dong_tu_0, dong_tu_1, dong_tu_2, input_1, check_3, check_6, check_7, Image_4, input_2, input_3, Text_3);
	stage.add(Page_1);
	InitLacVietScript();
};
