folder_Resource = '/data/on_tap_giua_hk1_tiet_1234';
var m_color = "";
var obj_down = "";
var obj_up = "";
var _score = 0;
var _reply = 0;
var array_a = ["✔", ""];
//
var array_input = ["cái trống", "cái chổi", "cái bảng", "cái bàn", "cái kéo", "khăn mặt", "đồng hồ", "cái thìa", "hộp màu", "cái đĩa", "Cái kéo dùng để cắt.", "Khăn mặt dùng để lau.", "Đồng hồ dùng để xem giờ.", "Cái đĩa dùng để đựng thức ăn."];
var array_input_init = ["", "", "", "", "", "", "", "", "", "", "Cái kéo dùng ...", "Khăn mặt dùng ...", "Đồng hồ dùng ...", "Cái đĩa dùng ..."];
// 
var a_paint_obj = ["a_0", "a_a", "b_1", "b_b", "c_2", "c_c", "d_3", "d_d", "e_4", "e_e"];
var a_paint = [0, 0, 0, 0, 0, 0];

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

	// Bài paint
	for (var i = 0; i < 6; i++) {
		a_paint[i] = 0;
	}
	SetColorEx("", "obj_paint", -1);

	for (i = 0; i < 14; i++) {
		AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#0080ff");
		SetText("", "input_" + i, array_input_init[i]);
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
	while (i < 10 && b_e == false) {
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
	while (i < 10 && b_e == false) {
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
	for (var i = 0; i < 6; i++) {
		if (a_paint[i] == 1) {
			_diem = _diem + 0.5;
		}
	}


	for (i = 0; i < 14; i++) {
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
		height: 1080
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 1080, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Image_3 = CreText('Image_3', 96, 571, 414, 204, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE7.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_13 = CreText('Text_13', 40, 535, 587, 35, "Viết tên đồ vật dưới hình vẽ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_11 = CreText('Text_11', 119, 5, 352, 43, "ÔN TẬP GIỮA HỌC KỲ I", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 9, 542, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 40, 49, 586, 28, "Nối tên bài học tương ứng với nội dung của nó", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_0 = CreText('a_0', 42, 123, 182, 31, "1. Tôi là học sinh lớp 2", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_2 = CreText('c_2', 42, 205, 182, 31, "3. Một giờ học", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 268, 976, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 13, 51, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var b_1 = CreText('b_1', 42, 164, 209, 31, "2. Niềm vui của Bi và Bống", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var b_b = CreText('b_b', 276, 122, 311, 31, "a. Kể về niềm vui của hai anh em", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_e = CreText('e_e', 276, 159, 311, 31, "b. Giới thiệu về sách", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_a = CreText('a_a', 276, 196, 332, 46, "c. Kể về ngày khai trường của một bạn học sinh lớp 2", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_2 = CreText('Text_2', 92, 74, 36, 36, "A", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 360, 74, 36, 36, "B", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 40, 329, 341, 28, "Viết từ ngữ gọi tên đồ vật vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 9, 333, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_10 = CreText('Text_10', 40, 803, 525, 21, "Viết 2 câu nêu công dụng của 2 đồ vật ở bài tập 3.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_14 = CreText('Text_14', 11, 803, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_16 = CreText('Text_16', 347, 368, 168, 63, "Bắt đầu bằng ch\r\nĐồ vật trong nhà\r\nDùng để quét nhà", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '10', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 221, 379, 111, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 517, 379, 111, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_5 = CreText('input_5', 243, 661, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_6 = CreText('input_6', 392, 661, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_34 = CreText('Text_34', 51, 368, 168, 63, "Bắt đầu bằng tr\r\nĐồ vật ở trường\r\nDùng để báo giờ học", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '10', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 1, 1009, 638, 68, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var d_3 = CreText('d_3', 42, 246, 182, 31, "4. Cái trống trường em", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_4 = CreText('e_4', 42, 287, 182, 31, "5. Cuốn sách của em", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var d_d = CreText('d_d', 276, 248, 338, 31, "d. Nói về một đồ vật thân thuộc ở trường học", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_c = CreText('c_c', 276, 287, 337, 31, "e. Kể về cậu bé Quang tự tin nói trước lớp", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var obj_paint = CreText('obj_paint', 28, 106, 603, 225, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, '#7f7f7f', 0, 1.50);
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
	var Text_8 = CreText('Text_8', 50, 461, 168, 63, "Chứa vần ang\r\nĐồ vật trong lớp\r\nDùng để viết", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '10', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_19 = CreText('Text_19', 328, 461, 214, 63, "Chứa vần an\r\nĐồ vật ở góc học tập\r\nDùng để đặt sách vở để viết", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '10', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_3 = CreText('input_3', 547, 472, 92, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_2 = CreText('input_2', 220, 472, 111, 24, "Cậu giỏi quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 2, '#0080ff', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 101, 661, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_8 = CreText('input_8', 244, 766, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_9 = CreText('input_9', 393, 766, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_7 = CreText('input_7', 102, 766, 108, 24, "Cậu giỏi quá", 'rgba(255,255,255,0.67)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', 'rgba(255,255,255,0.67)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_10 = CreText('input_10', 105, 828, 463, 24, "Cái kéo dùng ...", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_11 = CreText('input_11', 105, 862, 463, 24, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_12 = CreText('input_12', 105, 895, 463, 24, "Cậu giỏi quá", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_13 = CreText('input_13', 105, 929, 463, 24, "Cậu giỏi quá", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, Image_3, Text_13, Text_11, Text_12, Text_29, a_0, c_2, diem, Image_1, Text_3, b_1, b_b, e_e, a_a, Image_2, Text_2, Text_6, Text_1, Text_7, Text_10, Text_14, Text_16, input_0, input_1, input_5, input_6, Text_34, msg, d_3, e_4, d_d, c_c, obj_paint, Text_8, Text_19, input_3, input_2, input_4, input_8, input_9, input_7, input_10, input_11, input_12, input_13);
	stage.add(Page_1);
	InitLacVietScript();
};
