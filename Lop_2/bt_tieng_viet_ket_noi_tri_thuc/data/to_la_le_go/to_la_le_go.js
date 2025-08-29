folder_Resource = '/data/to_la_le_go';
var m_color = "";
var _score = 0;
var _reply = 0;
var obj_down = "";
var obj_up = "";
var array_check = ["", "✔", ""];
//
var array_input = ["khối nhỏ đầy màu sắc, hình viên gạch, hình nhân vật tí hon", "Lê – gô là những khối nhỏ đầy màu sắc. Hầu hết chúng có hình viên gạch.", "ng", "ngh", "Ng", "ng", "ng", "ngh", "tr", "ch", "ch", "ch", "tr", "chuông gió", "chuồn chuồn", "cuộn chỉ", "siêu nhân, đất nặn, cá ngựa, búp bê, đồ hàng, diều, lê gô, bập bênh, rô bốt"];
// 
var a_paint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
	else if (curText == ch1) {
		SetText("", "", ch2);

	}
	PlaySound("MOVE_OK");
	InvalidateObj("", "");

}
function StartObj() {
	var i = 0;
	var b_e = false;
	while (i < 10 && b_e == false) {
		if (PosInObj("s_" + i)) {
			b_e = true;
			obj_down = "s_" + i;
		}
		i = i + 1;
	}
}

function EndObj() {
	var i = 0;
	var b_e = false;
	while (i < 10 && b_e == false) {
		if (PosInObj("e_" + i)) {
			b_e = true;
			obj_up = "e_" + i;
		}
		i++;
	}
	if (b_e == true && obj_down != obj_up) {
		var _d = rightStr(obj_down, 1);
		var _u = rightStr(obj_up, 1);
		if (_d == _u && a_paint[_u] == 0) {
			SaveObject("", "obj_paint");
			a_paint[_d] = 1;
			PlaySound("MOVE_OK");
			return;
		}
	}
	PlaySound("MOVE_ERROR");

}

function InitTracNghiem() {

	for (var i = 0; i < 3; i++) {
		SetText("", "check_" + i, "");
		SetFontColor("", "check_" + i, "#000000");
		SetFontColor("", "abc" + i, "#000000");
	}

	for (i = 0; i < 17; i++) {
		SetText("", "input_" + i, "");
		SetFontColor("", "input_" + i, "#0080ff");
		if (i < 2)
			AllowEditText("", "input_" + i, 1);
	}
	AllowEditText("", "input_16", 1);
	// Bài paint
	for (i = 0; i < 10; i++) {
		a_paint[i] = 0;
	}
	SetColorEx("", "obj_paint", -1);
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
	//
	for (i = 0; i < 8; i++) {
		if (a_paint[i] == 1)
			_diem = _diem + 0.5;
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
	PaintColor("", "obj_paint", "#06b150");
	InitTracNghiem();
	InvalidateObj("", "");
	SetTimerPage(300);
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
		height: 1220
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 1220, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_8 = CreText('Text_8', 84, 436, 505, 27, "Mấy cậu bạn đang ........ó ..............iêng tìm chỗ chơi đá cầu.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_1 = CreText('Text_1', 84, 407, 490, 23, " ......ười không học như ......ọc không mài.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_16 = CreText('Text_16', 84, 361, 520, 43, "Dù ai nói ......ả nói ......iêng\r\nLòng ta vẫn vững như kiềng ba chân.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 27, 163, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 27, 44, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 1, 1129, 639, 68, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_1 = CreText('Image_1', 521, 120, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_5 = CreText('Text_5', 477, 5, 38, 35, "TỚ LÀ LÊ-GÔ\r\nTớ là lê-gô. Nhiều bạn gọi tớ là đồ chơi lắp ráp. Các bạn có nhận ra tớ không?\r\nĐể tớ giới thiệu với các bạn về gia đình của tớ nhé. Tớ có rất nhiều anh chị em. Chúng tớ là những khối nhỏ đầy màu sắc. Hầu hết chúng tớ có hình viên gạch. Một số thành viên có hình nhân vật tí hon và các hình xinh xắn khác.\r\nTừ những mảnh ghép nhỏ bé, chúng tớ kết hợp với nhau để tạo ra cả một thế giới kì diệu. Các bạn có thể lắp ráp nhà cửa, xe cộ, người máy,... theo ý thích. Sau đó, các bạn tháo rời ra để ghép thành những vật khác.\r\nChúng tớ giúp các bạn có trí tưởng tượng phong phú, khả năng sáng tạo và tính kiên nhẫn. Nào, các bạn đã sẵn sàng chơi cùng chúng tớ chưa?", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var abc_0 = CreText('abc_0', 102, 75, 465, 25, "Trí tưởng tượng phong phú, khả năng sáng tạo và sự vui vẻ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_1 = CreText('abc_1', 103, 102, 500, 25, "Trí tưởng tượng phong phú, khả năng sáng tạo và tính kiên nhẫn", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_2 = CreText('abc_2', 102, 130, 481, 25, "Trí tưởng tượng phong phú, khả năng sáng tạo và sự chăm chỉ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_11 = CreText('Text_11', 83, 4, 388, 37, "TỚ LÀ LÊ-GÔ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 27, 163, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 27, 44, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 58, 34, 574, 42, "Theo bài đọc, những từ ngữ nào chỉ lợi ích của trò lê-gô? (đánh dấu ✔ vào ô trống trước đáp án đúng)", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var msg = CreText('msg', 1, 1129, 639, 68, "Bạn chưa hoàn thành câu 4", '#c0ffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#000000', '#c0ffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var diem = CreText('diem', 240, 1105, 155, 40, "Chấm Điểm", '#afeeee', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#000000', '#c0ffff', '4', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 27, 470, 21, 21, "5.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 60, 162, 519, 28, "Viết lại từ ngữ tả khối lê - gô có trong bài đọc.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_5 = CreText('Text_5', 477, 5, 38, 35, "TỚ LÀ LÊ GÔ\r\nTớ là lê gô. Nhiều bạn gọi tớ là đồ chơi lắp ráp. Các bạn có nhận ra tớ không?\r\nĐể tớ giới thiệu với các bạn về gia đình của tớ nhé. Tớ có rất nhiều anh chị em. Chúng tớ là những khối nhỏ đầy màu sắc. Hầu hết chúng tớ có hình viên gạch. Một số thành viên có hình nhân vật tí hon và các hình xinh xắn khác.\r\nTừ những mảnh ghép nhỏ bé, chúng tớ kết hợp với nhau để tạo ra cả một thế giới kì diệu. Các bạn có thể lắp ráp nhà cửa, xe cộ, người máy,... theo ý thích. Sau đó, các bạn tháo rời ra để ghép thành những vật khác.\r\nChúng tớ giúp các bạn có trí tưởng tượng phong phú, khả năng sáng tạo và tính kiên nhẫn. Nào, các bạn đã sẵn sàng chơi cùng chúng tớ chưa?", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var edit = CreText('edit', 50, 328, 593, 28, "Điền ng hoặc ngh vào chố trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var check_0 = CreText('check_0', 71, 79, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_1 = CreText('check_1', 71, 104, 25, 23, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_2 = CreText('check_2', 71, 129, 25, 23, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var input_3 = CreText('input_3', 217, 359, 36, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var input_2 = CreText('input_2', 148, 359, 35, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var Text_22 = CreText('Text_22', 27, 330, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 65, 190, 527, 28, "khối nhỏ đầy màu sắc, hình viên gạch, hình nhân vật tí hon", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 26, 704, 21, 21, "6. ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_18 = CreText('Text_18', 52, 701, 474, 26, "a. Khoanh vào tên gọi các đồ chơi có trong ô chữ.\r\n", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_20 = CreText('Text_20', 30, 227, 21, 21, "3. ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_21 = CreText('Text_21', 57, 225, 489, 28, "Viết 2 – 3 câu có sử dụng từ ngữ vừa tìm được ở bài tập 2", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 86, 403, 32, 23, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("Ng", "Ngh");
		return;
	}
	);
	var input_5 = CreText('input_5', 260, 406, 34, 23, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var input_6 = CreText('input_6', 223, 436, 42, 27, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_6.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var Text_19 = CreText('Text_19', 56, 357, 23, 21, "a.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_24 = CreText('Text_24', 56, 405, 23, 21, "b.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_25 = CreText('Text_25', 56, 437, 23, 21, "c.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_17 = CreText('Text_17', 85, 496, 528, 22, "......ung thu;      ......ung sức;      ......ong ......óng;       ......ong xanh", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_3 = CreText('Image_3', 83, 561, 103, 89, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE8.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Image_4 = CreText('Image_4', 227, 564, 103, 89, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE9.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Image_5 = CreText('Image_5', 365, 562, 111, 88, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE10.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var input_8 = CreText('input_8', 84, 495, 28, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_8.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("tr", "ch");
		return;
	}
	);
	var input_9 = CreText('input_9', 196, 495, 33, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_9.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("tr", "ch");
		return;
	}
	);
	var input_10 = CreText('input_10', 315, 495, 39, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_10.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("tr", "ch");
		return;
	}
	);
	var input_11 = CreText('input_11', 472, 495, 39, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_11.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("tr", "ch");
		return;
	}
	);
	var input_12 = CreText('input_12', 381, 495, 34, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_12.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("tr", "ch");
		return;
	}
	);
	var input_14 = CreText('input_14', 211, 666, 145, 22, "ch... ch...", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_14.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("chuồn chuồn", "chuồng chuồng");
		return;
	}
	);
	var input_13 = CreText('input_13', 77, 666, 116, 22, "ch...... gió", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_13.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("chuôn gió", "chuông gió");
		return;
	}
	);
	var input_15 = CreText('input_15', 377, 666, 93, 22, "c... chỉ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_15.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("cuộn chỉ", "cuộng chỉ");
		return;
	}
	);
	var Text_13 = CreText('Text_13', 57, 466, 438, 29, "a. Điền ch hoặc tr vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 68, 526, 361, 31, "b. Điền uôn hoặc uông vào chỗ trống.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 65, 251, 527, 69, "Lê – gô là những khối nhỏ đầy màu sắc. Hầu hết chúng có hình viên gạch.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_7 = CreText('input_7', 290, 436, 57, 27, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_7.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar("ng", "ngh");
		return;
	}
	);
	var s_8 = CreText('s_8', 126, 742, 35, 31, "S", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_0 = CreText('s_0', 161, 742, 35, 31, "X", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_23 = CreText('Text_23', 196, 742, 35, 31, "Ú", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_26 = CreText('Text_26', 231, 742, 35, 31, "C", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_27 = CreText('Text_27', 266, 742, 35, 31, "X", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_30 = CreText('Text_30', 301, 742, 35, 31, "Ắ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_0 = CreText('e_0', 336, 742, 35, 31, "C", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_32 = CreText('Text_32', 371, 742, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_33 = CreText('Text_33', 126, 774, 35, 31, "I", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_34 = CreText('Text_34', 161, 774, 35, 31, "A", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_1 = CreText('s_1', 196, 774, 35, 31, "Đ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_36 = CreText('Text_36', 231, 774, 35, 31, "Ấ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_37 = CreText('Text_37', 266, 774, 35, 31, "T", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_38 = CreText('Text_38', 301, 774, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_39 = CreText('Text_39', 336, 774, 35, 31, "Ặ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_1 = CreText('e_1', 371, 774, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_41 = CreText('Text_41', 126, 806, 35, 31, "Ê", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_2 = CreText('s_2', 161, 806, 35, 31, "C", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_43 = CreText('Text_43', 196, 806, 35, 31, "Á", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_44 = CreText('Text_44', 231, 806, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_45 = CreText('Text_45', 266, 806, 35, 31, "G", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_46 = CreText('Text_46', 301, 806, 35, 31, "Ự", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_2 = CreText('e_2', 336, 806, 35, 31, "A", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_9 = CreText('s_9', 371, 806, 35, 31, "R", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_49 = CreText('Text_49', 126, 838, 35, 31, "U", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_3 = CreText('s_3', 161, 838, 35, 31, "B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_51 = CreText('Text_51', 196, 838, 35, 31, "Ú", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_52 = CreText('Text_52', 231, 838, 35, 31, "P", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_53 = CreText('Text_53', 266, 838, 35, 31, "B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_3 = CreText('e_3', 301, 838, 35, 31, "Ê", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_55 = CreText('Text_55', 336, 838, 35, 31, "S", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_56 = CreText('Text_56', 371, 838, 35, 31, "Ô", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_57 = CreText('Text_57', 126, 870, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_4 = CreText('s_4', 161, 870, 35, 31, "Ð", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_59 = CreText('Text_59', 196, 870, 35, 31, "Ồ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_60 = CreText('Text_60', 231, 870, 35, 31, "H", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_61 = CreText('Text_61', 266, 870, 35, 31, "À", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_62 = CreText('Text_62', 301, 870, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_4 = CreText('e_4', 336, 870, 35, 31, "G", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_64 = CreText('Text_64', 371, 870, 35, 31, "B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_65 = CreText('Text_65', 126, 902, 35, 31, "H", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_66 = CreText('Text_66', 161, 902, 35, 31, "V", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_5 = CreText('s_5', 196, 902, 35, 31, "D", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_68 = CreText('Text_68', 231, 902, 35, 31, "I", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_69 = CreText('Text_69', 266, 902, 35, 31, "Ề", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_5 = CreText('e_5', 301, 902, 35, 31, "U", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_71 = CreText('Text_71', 336, 902, 35, 31, "Ề", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_72 = CreText('Text_72', 371, 902, 35, 31, "Ố", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_73 = CreText('Text_73', 126, 934, 35, 31, "Â", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_74 = CreText('Text_74', 161, 934, 35, 31, "E", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_75 = CreText('Text_75', 196, 934, 35, 31, "S", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '5', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_6 = CreText('s_6', 231, 934, 35, 31, "L", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_77 = CreText('Text_77', 266, 934, 35, 31, "Ê", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_78 = CreText('Text_78', 301, 934, 35, 31, "G", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_6 = CreText('e_6', 336, 934, 35, 31, "Ô", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_9 = CreText('e_9', 371, 934, 35, 31, "T", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_8 = CreText('e_8', 126, 967, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var s_7 = CreText('s_7', 161, 967, 35, 31, "B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_83 = CreText('Text_83', 196, 967, 35, 31, "Ậ", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_84 = CreText('Text_84', 231, 967, 35, 31, "P", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_85 = CreText('Text_85', 266, 967, 35, 31, "B", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_86 = CreText('Text_86', 301, 967, 35, 31, "Ê", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_87 = CreText('Text_87', 336, 967, 35, 31, "N", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var e_7 = CreText('e_7', 371, 967, 35, 31, "H", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var obj_paint = CreText('obj_paint', 120, 735, 291, 267, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 2, '#0080ff', 'rgba(255,255,255,0.00)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, '#7f7f7f', 0, 1.50);
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
	var Text_9 = CreText('Text_9', 64, 1016, 474, 26, "b. Viết lại các từ đã tìm được ở bài a.\r\n", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_16 = CreText('input_16', 87, 1044, 513, 50, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#7f7f7f', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Page_1.add(Page_1_Backrounnd, Text_8, Text_1, Text_16, Text_12, Text_28, msg, Image_1, Text_5, Image_2, abc_0, abc_1, abc_2, Text_11, Text_12, Text_28, Text_29, msg, diem, Image_1, Text_3, Text_4, Text_5, edit, Image_2, check_0, check_1, check_2, input_3, input_2, Text_22, input_0, Text_7, Text_18, Text_20, Text_21, input_4, input_5, input_6, Text_19, Text_24, Text_25, Text_17, Image_3, Image_4, Image_5, input_8, input_9, input_10, input_11, input_12, input_14, input_13, input_15, Text_13, Text_2, input_1, input_7, s_8, s_0, Text_23, Text_26, Text_27, Text_30, e_0, Text_32, Text_33, Text_34, s_1, Text_36, Text_37, Text_38, Text_39, e_1, Text_41, s_2, Text_43, Text_44, Text_45, Text_46, e_2, s_9, Text_49, s_3, Text_51, Text_52, Text_53, e_3, Text_55, Text_56, Text_57, s_4, Text_59, Text_60, Text_61, Text_62, e_4, Text_64, Text_65, Text_66, s_5, Text_68, Text_69, e_5, Text_71, Text_72, Text_73, Text_74, Text_75, s_6, Text_77, Text_78, e_6, e_9, e_8, s_7, Text_83, Text_84, Text_85, Text_86, Text_87, e_7, obj_paint, Text_9, input_16);
	stage.add(Page_1);
	InitLacVietScript();
};
