folder_Resource = '/data/on_tap_giua_hk1_tiet_5678';
var m_color = "";
var obj_down = "";
var obj_up = "";
var _score = 0;
var _reply = 0;
var array_check = ["", "", "✔", "", "✔", "", "✔", "", "", "", "✔", "", "✔", "", ""];
//
var array_input = [""];
var array_input_init = ["Đồ vật em muốn giới thiệu là gì?\r\nĐồ vật đó từ đâu mà có?\r\nEm có suy nghỉ gì về lợi ích của đồ vật đó?"];

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

	// Bài paint
	for (var i = 0; i < 3; i++) {
		a_paint[i] = 0;
	}
	SetColorEx("", "obj_paint", -1);


	// Bai 1
	for (i = 0; i < 15; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}
	for (i = 0; i < 1; i++) {
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
	for (i = 0; i < 15; i++) {
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
	for (i = 0; i < 1; i++) {
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
		height: 1050
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 1050, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_13 = CreText('Text_13', 41, 255, 632, 35, "Dựa vào bài đọc Câu chuyện bó đũa, đánh dấu ✔ vào ô trống trước đáp án đúng.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_11 = CreText('Text_11', 81, 5, 451, 42, "ÔN TẬP GIỮA HỌC KỲ I (5678)", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 9, 262, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 17, 803, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 40, 47, 586, 28, "Nối từ ngữ cột A phù hợp với ý nghĩa cột B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_0 = CreText('a_0', 61, 121, 161, 31, "Hòa thuận", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_2 = CreText('c_2', 61, 207, 161, 31, "Buồn phiền", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 239, 949, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 13, 49, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var b_1 = CreText('b_1', 61, 164, 161, 31, "Yêu thương", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var c_c = CreText('c_c', 288, 120, 273, 31, "buồn và lo nghĩ không yên lòng", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var a_a = CreText('a_a', 288, 161, 273, 31, "êm ấm không có xích mích", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var b_b = CreText('b_b', 288, 203, 273, 39, "có tình cảm gắn bó tha thiết, quan tâm chăm sóc hết lòng", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_4 = CreText('Text_4', 47, 799, 619, 28, "Viết 3-4 câu giới thiệu 1 đồ chơi hoặc một đồ dùng gia đình", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 92, 72, 36, 36, "A", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 360, 72, 36, 36, "B", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 20, 'Arial', 'Bold', 'center', 'middle', 2, '0.00', '0', '0', 2, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var obj_paint = CreText('obj_paint', 48, 118, 520, 126, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, '#7f7f7f', 0, 1.50);
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
	var input_0 = CreText('input_0', 79, 831, 526, 104, "Đồ vật em muốn giới thiệu là gì?\r\nĐồ vật đó từ đâu mà có?\r\nEm có suy nghỉ gì về lợi ích của đồ vật đó?", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '1', 1, '#c0c0c0', 'rgba(230,230,250,0.89)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 3, 987, 638, 60, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 60, 353, 556, 24, "b. Người cha nghĩ ra cách gì để khuyên bảo các con?", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_3 = CreText('abc_3', 159, 380, 264, 28, "Gọi các con lại và khuyên bảo", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_3 = CreText('check_3', 126, 383, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_4 = CreText('abc_4', 159, 413, 374, 28, "Thử thách các con bằng việc bẻ bó đũa", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_4 = CreText('check_4', 126, 414, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_5 = CreText('abc_5', 159, 442, 161, 28, "Cho các con tiền", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_5 = CreText('check_5', 126, 445, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_20 = CreText('Text_20', 59, 473, 556, 24, "c. Vì sao bốn người con không bẻ gãy được bó đũa?", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_6 = CreText('abc_6', 158, 499, 264, 28, "Vì họ cầm cả bó đũa rồi bẻ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_6 = CreText('check_6', 125, 502, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_6.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_7 = CreText('abc_7', 158, 532, 374, 28, "Họ không đủ sức khỏe", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_7 = CreText('check_7', 125, 533, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_7.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_8 = CreText('abc_8', 158, 561, 161, 28, "Vì bó đũa rất cứng", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_8 = CreText('check_8', 125, 564, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_8.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_32 = CreText('Text_32', 62, 600, 556, 24, "d. Người cha bẻ gãy bó đũa bằng cách nào?", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_9 = CreText('abc_9', 161, 626, 264, 28, "Cầm cả bó đũa rồi bẻ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_9 = CreText('check_9', 128, 629, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_9.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_10 = CreText('abc_10', 161, 659, 374, 28, "Cởi bó đũa ra và bẻ từng chiếc một", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_10 = CreText('check_10', 128, 660, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_10.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_11 = CreText('abc_11', 161, 688, 161, 28, "Lấy dao chặt bó đũa", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_11 = CreText('check_11', 128, 691, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_11.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_16 = CreText('Text_16', 59, 287, 556, 24, "a. Khi lớn lên, tình cảm giữa anh và em trong câu chuyện như thế nào?", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_0 = CreText('abc_0', 107, 315, 108, 28, "hòa thuận", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_0 = CreText('check_0', 77, 318, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_1 = CreText('abc_1', 293, 315, 160, 28, "không thay đổi", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_1 = CreText('check_1', 260, 318, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_2 = CreText('abc_2', 475, 315, 161, 28, "không hòa thuận", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_2 = CreText('check_2', 444, 318, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_39 = CreText('Text_39', 66, 726, 556, 24, "e. Người cha muốn khuyên các con điều gì", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_12 = CreText('abc_12', 114, 754, 142, 28, "Cần phải đoàn kết", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_12 = CreText('check_12', 84, 757, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_12.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_13 = CreText('abc_13', 300, 754, 160, 28, "Cần phải bẻ đũa", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_13 = CreText('check_13', 267, 757, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_13.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var abc_14 = CreText('abc_14', 482, 754, 161, 28, "Nên chia nhỏ ra", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_14 = CreText('check_14', 451, 757, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_14.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var Text_46 = CreText('Text_46', 509, 5, 47, 42, "CÂU CHUYỆN BÓ ĐŨA\r\nNgày xưa, ở một gia đình kia, có hai anh em. Lúc nhỏ, anh em rất hòa thuận. Khi lớn lên, anh có vợ, em có chồng, tuy mỗi người một nhà, nhưng vẫn hay va chạm.\r\nThấy các con không yêu thương nhau, người cha rất buồn phiền. Một hôm, ông đặt một bó đũa và một túi tiền trên bàn, rồi gọi các con, cả trai, gái, dâu, rể lại và bảo :\r\n- Ai bẻ gãy được bó đũa này thì cha thưởng cho túi tiền. \r\n   Bốn người con lần lượt bẻ bó đũa. Ai cũng cố hết sức mà không sao bẻ gãy được. Người cha bèn cởi bó đũa ra, rồi thong thả bẻ gãy từng chiếc một cách dễ dàng.\r\nThấy vây, bốn người con cùng nói :\r\n- Thưa cha, lấy từng chiếc mà bẻ thì có khó gì !\r\n  Người cha liền bảo :\r\n- Đúng. Như thế các con đều thấy rằng chia lẻ ra thì yếu, hợp lại thì mạnh. Vậy các con phải biết thương yêu, đùm bọc lẫn nhau. Có đoàn kết thì  mới có sức mạnh. ", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_46.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	Page_1.add(Page_1_Backrounnd, Text_13, Text_11, Text_12, Text_28, Text_29, a_0, c_2, diem, Image_1, Text_3, b_1, c_c, a_a, b_b, Image_2, Text_4, Text_2, Text_6, obj_paint, input_0, msg, Text_7, abc_3, check_3, abc_4, check_4, abc_5, check_5, Text_20, abc_6, check_6, abc_7, check_7, abc_8, check_8, Text_32, abc_9, check_9, abc_10, check_10, abc_11, check_11, Text_16, abc_0, check_0, abc_1, check_1, abc_2, check_2, Text_39, abc_12, check_12, abc_13, check_13, abc_14, check_14, Text_46);
	stage.add(Page_1);
	InitLacVietScript();
};
