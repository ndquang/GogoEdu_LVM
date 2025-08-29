folder_Resource = '/data/khi_trang_sach_mo_ra';
var m_color = "";
var obj_down = "";
var obj_up = "";
var _score = 0;
var _reply = 0;
var array_a = ["✔", ""];
//
var array_input = ["Khoảng trời xa", "cỏ dại", "cánh chim", "trẻ con", "người lớn", "gắn", "gắng", "gắng", "nắng", "nắn", "nắn", "vần", "vầng", "vầng", "vân", "vâng", "vân"];
// 
var a_paint_obj = ["a_0", "a_a", "b_1", "b_b", "c_2", "c_c"];
var a_paint = [0, 0, 0];

var akq3 = [0, 1, 1, 1, 0, 1, 1, 0];
var kq3 = 0;
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
	for (var i = 0; i < 12; i++) {
		var cl = SetBorder("", "dong_tu_" + i, "#000000", 0);
	}

	// Bài paint
	for (i = 0; i < 3; i++) {
		a_paint[i] = 0;
	}
	SetColorEx("", "obj_paint", -1);


	// Bai 1
	for (i = 0; i < 2; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}
	for (i = 0; i < 17; i++) {
		AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#0080ff");
		SetText("", "input_" + i, "");
	}
	SetText("", "msg", "");
	_reply = 0;
	_score = GetVer();
	SetText("", "diem", "Chấm Điểm");
	PlaySound("SND_CREATE");
}



function StartObj() {
	var i = 0;
	var b_e = false;
	while (i < 6 && b_e == false) {
		if (PosInObj(a_paint_obj[i])) {
			b_e = true;
			obj_down = a_paint_obj[i];
		}
		i = i + 1;
	}
}

function EndObj() {
	var i = 0;
	var b_e = false;
	while (i < 6 && b_e == false) {
		if (PosInObj(a_paint_obj[i])) {
			b_e = true;
			obj_up = a_paint_obj[i];
		}
		i++;
	}
	if (b_e == true && obj_down != obj_up) {
		var _d = leftStr(obj_down, 1);
		var _u = leftStr(obj_up, 1);
		var _index = StringtoNumber(obj_down + obj_up);
		if (_d == _u && a_paint[_index] == 0) {
			SaveObject("", "obj_paint");
			a_paint[_index] = 1;
			PlaySound("MOVE_OK");
			return;
		}
	}
	PlaySound("MOVE_ERROR");

}
function ChamDiem() {
	var _diem = 0;

	// bài 2
	for (var i = 0; i < 3; i++) {
		if (a_paint[i] == 1) {
			_diem = _diem + 0.5;
		}
	}
	for (i = 0; i < 12; i++) {
		var cl = GetBorderWidth("", "dong_tu_" + i);
		if (cl >= 1)
			_diem = _diem + 0.5;
	}

	//bài 1
	var _dunghet = true;
	var chuachon = false;
	for (i = 0; i < 7; i++) {
		var isCheck = GetText("", "check_" + i);
		if (isCheck == "✔")
			chuachon = true;
		if (array_a[i] == isCheck) {
			SetFontColor("", "check_" + i, "#3b8b26");
			_diem = _diem + 0.5;
		}
		else {
			SetFontColor("", "check_" + i, "#FF0000");
			_dunghet = false;
		}
		if (array_a[i] == "✔")
			SetFontColor("", "abc" + i, "#3b8b26");
	}
	if (chuachon == false) {
		SetText("", "msg", "⚠ Bạn chưa hoàn thành bài tâp");
		return;
	}
	// bai nhap text
	for (i = 0; i < 17; i++) {
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
		height: 950
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 950, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_13 = CreText('Text_13', 41, 367, 587, 35, "Câu thơ Trang sách không nói được/ Sao em nghe điều gì có nghĩa là:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_11 = CreText('Text_11', 119, 5, 352, 43, "KHI TRANG SÁCH MỞ RA", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 9, 374, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 9, 54, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 38, 636, 586, 28, "Nối từ ngữ ở cột A với từ ngữ ở cột B để tạo câu nói về cô giáo trong bài đọc.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_0 = CreText('a_0', 59, 710, 182, 31, "Bàn học của Bống", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_2 = CreText('c_2', 59, 796, 182, 31, "Cục tẩy", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 239, 841, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 11, 638, 21, 21, "5.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_0 = CreText('abc_0', 105, 400, 588, 28, "Trang sách không biết nói như con người nhưng vẫn cho ta biết nhiều điều", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_1 = CreText('abc_1', 109, 434, 493, 28, "Trang sách không biết nói nhưng em vẫn nghe thấy điều gì đó", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_0 = CreText('check_0', 75, 403, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_1 = CreText('check_1', 75, 437, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_5 = CreText('Text_5', 480, 5, 38, 43, "KHI TRANG SÁCH MỞ RA\r\n\r\nKhi trang sách mở ra\r\nKhoảng trời xa xích lại\r\nBắt đầu là cỏ dại\r\nThứ đến là cánh chim\r\nSau nữa là trẻ con\r\nCuối cùng là người lớn\r\n\r\nTrong trang sách có biển\r\nEm thấy những cánh buồm\r\nTrong trang sách có rừng\r\nVới bao nhiêu là gió\r\n\r\nTrang sách còn có lửa\r\nMà giấy chẳng cháy đâu\r\nTrang sách có ao sâu\r\nMà giấy không hề ướt\r\n\r\nTrang sách không nói được\r\nSao em nghe điều gì\r\nDạt dào như sóng vỗ\r\nMột chân trời đang đi.", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var b_1 = CreText('b_1', 59, 753, 183, 31, "Cuốn vở", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var b_b = CreText('b_b', 278, 709, 262, 31, "thơm mùi giấy mới", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_a = CreText('a_a', 278, 750, 262, 31, "lúc nào cũng ngăn nắp gọn gàn", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_c = CreText('c_c', 277, 792, 262, 31, "nhỏ xíu như một viên kẹo", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_4 = CreText('Text_4', 39, 50, 619, 28, "Dựa vào khổ thơ thứ nhất trong bài đọc, điền từ ngữ còn thiếu vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 90, 661, 36, 36, "A", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 358, 661, 36, 36, "B", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var obj_paint = CreText('obj_paint', 43, 702, 525, 129, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, '#7f7f7f', 0, 1.50);
	obj_paint.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		EndObj();
		SetTimerPage(100);
		return;
	}
	);
	obj_paint.on('mousedown touchstart', function (evt) {
		m_pgObjCaller = this;
		StartObj();
		return;
	}
	);
	var Text_1 = CreText('Text_1', 35, 249, 519, 28, "Gạch chân các từ ngữ chỉ sự vật trong hai khổ thơ sau:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 9, 253, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_8 = CreText('Text_8', 62, 285, 220, 86, "Trong trang sách có biển\r\nEm thấy những cánh buồm\r\nTrong trang sách có rừng\r\nVới bao nhiêu là gió.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_9 = CreText('Text_9', 317, 285, 220, 86, "Trang sách còn có lửa\r\nMà giấy chẳng cháy đâu\r\nTrang sách có ao sâu\r\nMà giấy không hề ướt.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dong_tu_0 = CreText('dong_tu_0', 112, 282, 78, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(255,255,255,0.04)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_1 = CreText('dong_tu_1', 214, 282, 40, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_2 = CreText('dong_tu_2', 182, 302, 79, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_6 = CreText('dong_tu_6', 319, 283, 82, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_6.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_7 = CreText('dong_tu_7', 454, 283, 33, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_7.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_8 = CreText('dong_tu_8', 347, 303, 29, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_8.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_9 = CreText('dong_tu_9', 319, 321, 83, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_9.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_10 = CreText('dong_tu_10', 428, 322, 49, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_10.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var Text_10 = CreText('Text_10', 45, 475, 525, 21, "Chọn tiếng trong ngoặc đơn điền vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_14 = CreText('Text_14', 9, 475, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_16 = CreText('Text_16', 65, 86, 293, 24, "Khi trang sách mở ra", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_17 = CreText('Text_17', 212, 111, 134, 24, "xích lại", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_18 = CreText('Text_18', 65, 136, 86, 24, "Bắt đầu là", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_21 = CreText('Text_21', 65, 164, 293, 24, "Thứ đến là", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_22 = CreText('Text_22', 65, 188, 293, 24, "Sau nữa là", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_23 = CreText('Text_23', 66, 214, 293, 24, "Cuối cùng là", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 65, 111, 142, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 147, 136, 143, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_2 = CreText('input_2', 155, 161, 143, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_3 = CreText('input_3', 155, 186, 143, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 163, 214, 143, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_15 = CreText('Text_15', 80, 504, 500, 24, "- (gắn/gắng): ……… bó, cố ……….., …………. sức", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_32 = CreText('Text_32', 80, 536, 500, 24, "- (nắn/nắng): ánh ……….., uốn ……….., ………. nót", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_33 = CreText('Text_33', 80, 570, 500, 24, "- (vần/vầng): ………… thơ, ……… trăng, ………. trán", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_34 = CreText('Text_34', 80, 601, 500, 24, "- (vân/vâng): ……… gỗ, ……… lời, ………. tay", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 1, 881, 638, 68, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_5 = CreText('input_5', 174, 504, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_6 = CreText('input_6', 280, 504, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_7 = CreText('input_7', 364, 504, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_8 = CreText('input_8', 212, 536, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_9 = CreText('input_9', 322, 536, 49, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_10 = CreText('input_10', 384, 536, 57, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_11 = CreText('input_11', 181, 570, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_12 = CreText('input_12', 286, 570, 54, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_13 = CreText('input_13', 387, 570, 55, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_14 = CreText('input_14', 176, 601, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_15 = CreText('input_15', 257, 601, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_16 = CreText('input_16', 344, 601, 61, 24, "g?ng q", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var dong_tu_3 = CreText('dong_tu_3', 110, 319, 79, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_4 = CreText('dong_tu_4', 215, 319, 40, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_5 = CreText('dong_tu_5', 187, 337, 33, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	var dong_tu_11 = CreText('dong_tu_11', 347, 339, 29, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	dong_tu_11.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		FillColor();
		return;
	}
	);
	Page_1.add(Page_1_Backrounnd, Text_13, Text_11, Text_12, Text_28, Text_29, a_0, c_2, diem, Image_1, Text_3, abc_0, abc_1, check_0, check_1, Text_5, b_1, b_b, a_a, c_c, Image_2, Text_4, Text_2, Text_6, obj_paint, Text_1, Text_7, Text_8, Text_9, dong_tu_0, dong_tu_1, dong_tu_2, dong_tu_6, dong_tu_7, dong_tu_8, dong_tu_9, dong_tu_10, Text_10, Text_14, Text_16, Text_17, Text_18, Text_21, Text_22, Text_23, input_0, input_1, input_2, input_3, input_4, Text_15, Text_32, Text_33, Text_34, msg, input_5, input_6, input_7, input_8, input_9, input_10, input_11, input_12, input_13, input_14, input_15, input_16, dong_tu_3, dong_tu_4, dong_tu_5, dong_tu_11);
	stage.add(Page_1);
	InitLacVietScript();
};
