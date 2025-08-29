folder_Resource = '/data/chu_A_va_nhung_nguoi_ban';
var m_color = "";
var _score = 0;
var _reply = 0;
var array_input = ["tạo ra những cuốn sách hay", "vui", "giận", "ngạc nhiên", "buồn", "Em rất vui vì đã đạt được điểm 10.", "Em cảm thấy rất buồn vì bị điểm kém."];
var array_input_init = ["", "", "", "", "", "Em rất vui vì đã...", "Em cảm thấy rất buồn vì..."];
// 
var drag_cnt = 0;
function ClickPlus() {
	var tt = GetText("", "");
	if (tt == "" || tt == 4)
		tt = 1;
	else tt++;
	SetText("", "", tt);
	PlaySound("MOVE_OK");
	InvalidateObj("", "");
}

function InitTracNghiem() {

	// Bai 1
	for (var i = 1; i <= 4; i++) {
		SetText("", "_" + i, "");
		SetFontColor("", "_" + i, "#000000");
	}
	for (i = 0; i < 7; i++) {
		AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#0080ff");
		SetText("", "input_" + i, array_input_init[i]);
	}
	// bai 3
	for (i = 0; i < 4; i++) {
		SetMoveView("", "gr0_" + i, 1);
		SetMoveView("", "gr1_" + i, 1);
		MoveObjectTo("", "gr0_" + i, -1, -1);
		MoveObjectTo("", "gr1_" + i, -1, -1);
	}
	drag_cnt = 0;

	// Bai 4
	for (i = 0; i < 3; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}

	SetText("", "msg", "");
	_reply = 0;
	_score = GetVer();
	SetText("", "diem", "Chấm Điểm");
	PlaySound("SND_CREATE");
}


function MoveUp3() {

	if (GetMoveView("", "") == 0)
		return;
	var cur_name = GetName("");
	var left3 = leftStr(cur_name, 3);
	if ((RectInRect("", "gr0", "") && left3 == "gr0") || (RectInRect("", "gr1", "") && left3 == "gr1")) {
		SetMoveView("", "", 0);
		drag_cnt++;
		PlaySound("MOVE_OK");
	}

	else {
		MoveObjectTo("", "", -1, -1);
		PlaySound("MOVE_ERROR");
	}
}

function ChamDiem() {
	var _diem = 0;
	//bai 1
	for (var i = 1; i < 5; i++) {
		if (GetText("", "_" + i) == i) {
			_diem = _diem + 0.5;
			SetFontColor("", "_" + i, "#3b8b26");

		}
		else SetFontColor("", "_" + i, "#ff0000");
	}


	for (i = 0; i < 7; i++) {
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

	_diem = _diem + drag_cnt;
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
		height: 900
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 900, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var gr1 = CreText('gr1', 364, 437, 214, 100, "Từ ngữ chỉ cảm xúc", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'top', 3, '0.00', '3', '75', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var gr0 = CreText('gr0', 94, 438, 237, 98, "Từ ngữ chỉ hoạt động", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'top', 3, '0.00', '3', '75', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var xxx1 = CreText('xxx1', 193, 116, 129, 97, "Chữ A nhận ra vai trò của các bạn B, C, Đ, E ...", '#cce6ff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '10', '0', 1, '#0080ff', '#cce6ff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 61, 64, 559, 39, "Sắp xếp các ý sau theo đúng trình tự của bài đọc(đánh số 1, 2, 3, 4 vào ô trống ở dưới)\r\n", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 35, 63, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var xxx0 = CreText('xxx0', 44, 116, 129, 97, "Chữ A mơ ước tự mình làm ra một cuốn sách", '#cce6ff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '10', '0', 1, '#0080ff', '#cce6ff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var xxx2 = CreText('xxx2', 493, 116, 129, 97, "Chữ A nói về vị trí của mình trong bảng chữ cái tiếng Việt", '#cce6ff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '10', '0', 1, '#0080ff', '#cce6ff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var xxx3 = CreText('xxx3', 342, 116, 129, 97, "Chữ A nhắn nhủ các bạn nhỏ chăm chỉ đọc sách", '#cce6ff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '10', '0', 1, '#0080ff', '#cce6ff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var _3 = CreText('_3', 242, 199, 31, 26, "3", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickPlus();
		return;
	}
	);
	var _1 = CreText('_1', 542, 199, 31, 26, "1", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickPlus();
		return;
	}
	);
	var _4 = CreText('_4', 391, 199, 31, 26, "4", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickPlus();
		return;
	}
	);
	var Text_11 = CreText('Text_11', 0, 0, 641, 45, "CHỮ A VÀ NHỮNG NGƯỜI BẠN", '#0080c0', '#ffffff', '#ffffff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#0080c0', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 35, 237, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_13 = CreText('Text_13', 61, 237, 566, 21, "Viết tiếp để có lời cảm ơn của chữ A với các bạn chữ.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 35, 556, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 66, 552, 519, 28, "Viết từ ngữ chỉ cảm xúc phù hợp với từng gương mặt sau:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 0, 837, 641, 65, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 241, 813, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 35, 333, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 67, 329, 519, 28, " Xếp các từ ngữ dưới đây vào nhóm thích hợp.(3đ)", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var gr1_1 = CreText('gr1_1', 224, 400, 92, 27, "ngạc nhiên", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr1_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr0_0 = CreText('gr0_0', 230, 362, 92, 27, "nhắc", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr0_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr0_1 = CreText('gr0_1', 337, 362, 92, 27, "nói", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr0_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr1_0 = CreText('gr1_0', 123, 362, 92, 27, "gặp", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr1_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr1_2 = CreText('gr1_2', 325, 400, 92, 27, "sửng sốt", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr1_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr1_3 = CreText('gr1_3', 444, 360, 92, 27, "vui sướng", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr1_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var gr0_2 = CreText('gr0_2', 123, 400, 92, 27, "làm ra", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr0_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var abc_0 = CreText('abc_0', 87, 261, 500, 27, "Cảm ơn các bạn! Nhờ có các bạn, chúng ta đã…", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '10', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_5 = CreText('Text_5', 550, 1, 41, 44, "CHỮ A VÀ NHỮNG NGƯỜI BẠN\r\nTôi là chữ A. Từ lâu, tôi đã nổi tiếng. Hễ nhắc đến tên tôi, ai cũng biết. Khi vui sướng quá, người ta thường reo lên tên tôi. Khi ngạc nhiên, sủng sốt, người ta cũng gọi tên tôi.\r\nTôi đứng đầu bảng chữ cái tiếng Việt. Trong bảng chữ cái của nhiều nước, tôi cũng được người ta trân trọng xếp ở đầu hàng. Hằng năm, cứ đến ngày khai trường, rất nhiều trẻ em làm quen với tôi trước tiên.\r\nTôi luôn mơ ước chỉ mình tôi làm ra một cuốn sách. Nhưng rồi, tôi nhận ra rằng, nếu chỉ một mình, tôi chẳng thể nói được với ai điều gì. Một cuốn sách chỉ toàn chữ A không thể là cuốn sách mà mọi người muốn đọc. Để có cuốn sách hay, tôi cần các bạn B, C, D, Đ, E,...\r\nChúng tôi luôn ở bên nhau và cần có nhau trên những trang sách. Các bạn nhỏ hãy gặp chúng tôi hằng ngày nhé!", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var _2 = CreText('_2', 93, 199, 31, 26, "2", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickPlus();
		return;
	}
	);
	var gr0_3 = CreText('gr0_3', 430, 397, 92, 27, "làm quen", '#ffffff', '#ffffff', '#000000', '#000000', '', 16, 'Arial', 'Normal', 'center', 'middle', 11, '0.00', '10', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	gr0_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		MoveUp3();
		return;
	}
	);
	var Image_2 = CreText('Image_2', 77, 586, 519, 94, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE3.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var input_2 = CreText('input_2', 216, 677, 107, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 92, 289, 489, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 92, 677, 107, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_3 = CreText('input_3', 340, 677, 107, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_6 = CreText('Text_6', 42, 718, 21, 21, "5.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 73, 714, 519, 28, "Viết 2 câu có sử dụng từ ngữ ở bài tập 4.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 464, 677, 107, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_5 = CreText('input_5', 95, 743, 483, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_6 = CreText('input_6', 95, 774, 484, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, gr1, gr0, xxx1, Text_1, Text_2, xxx0, xxx2, xxx3, _3, _1, _4, Text_11, Text_12, Text_13, Text_28, Text_29, msg, diem, Image_1, Text_3, Text_4, gr1_1, gr0_0, gr0_1, gr1_0, gr1_2, gr1_3, gr0_2, abc_0, Text_5, _2, gr0_3, Image_2, input_2, input_0, input_1, input_3, Text_6, Text_7, input_4, input_5, input_6);
	stage.add(Page_1);
	InitLacVietScript();
};
