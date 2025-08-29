folder_Resource = '/data/to_nho_cau';
var m_color = "";
var obj_down = "";
var obj_up = "";
var _score = 0;
var _reply = 0;
var array_check = ["✔", "✔", ""];
//
var array_input = ["kiến không biết phải làm sao cho sóc biết mình rất nhớ bạn.", "con cua", "con công", "con kì đà", "con kiến", "yêu quý, thương yêu, thân thiết, mến thương", "thân thiết", "nhớ", "vui đùa", "?", ".", "!"];
// 
var van_en = "en,èn,én,ẻn,ẽn,ẹn";
var van_eng = "eng,éng,èng,ẻng,ẽng,ẹng";
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
function ChangeChar(ch1, ch2, ch3) {
	var curText = GetText("", "");
	if (curText == "" || curText == ch3) {
		SetText("", "", ch1);
	}
	else if (curText == ch1) {
		SetText("", "", ch2);

	}
	else if (curText == ch2) {
		SetText("", "", ch3);

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
	for (i = 0; i < 12; i++) {
		SetText("", "input_" + i, "");
		if (i < 9)
			AllowEditText("", "input_" + i, 1);
		SetFontColor("", "input_" + i, "#0080ff");
	}
	for (i = 0; i < 2; i++) {
		SetText("", "van_" + i, "");
		AllowEditText("", "van_" + i, 1);
		SetFontColor("", "van_" + i, "#000000");
	}
	SetText("", "error_text", "");
	SetText("", "msg", "");
	_reply = 0;
	_score = GetVer();
	SetText("", "diem", "Chấm Điểm");
	PlaySound("SND_CREATE");
}

function Kiem_Tra_Van(object_name, text_van) {
	var cnt = 0;
	var textnotfound = "";
	var txtWord = GetText("", object_name);
	var lstWord = txtWord.split(",");
	var notfound = false;
	var lst_van = text_van.split(",");

	for (var i = 0; i < lstWord.length; i++) {
		var j = 0;
		while (j < lst_van.length) {
			if (lstWord[i].includes(lst_van[j].trim())) {
				cnt++;
				break;
			}
			else {
				j++;
			}
		}
		if (j == lst_van.length) {
			textnotfound = textnotfound + lstWord[i] + ",";
		}
	}
	SetText("", "error_text", GetText("", "error_text") + " | " + textnotfound);

	return cnt;
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
	_diem = _diem + Kiem_Tra_Van("van_0", van_en) / 2;
	_diem = _diem + Kiem_Tra_Van("van_1", van_eng) / 2;
	for (i = 0; i < 12; i++) {
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
		height: 1200
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 640, 1200, '', '#ffffff', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#ffffff', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var Text_15 = CreText('Text_15', 60, 876, 553, 97, "Cá nhỏ và nòng nọc là đôi bạn ……………. Hằng ngày, chúng cùng nhau bơi lội. Thế rồi nòng nọc trở thành ếch. Nó phải lên bờ để sinh sống. Nhưng nó vẫn ……….. cá nhỏ. Thỉnh thoảng, nó nhảy xuống ao …………….. cùng cá nhỏ.\r\n", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_6 = CreText('Image_6', 109, 352, 445, 107, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE5.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var Text_11 = CreText('Text_11', 120, 3, 388, 37, "TỚ NHỚ CẬU", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#ffffff', '', 24, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_17 = CreText('Text_17', 76, 1027, 446, 20, "b. Tớ nướng rất nhiều bánh đến nỗi không đếm xuể", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_26 = CreText('Text_26', 50, 826, 474, 28, "Chọn từ ngữ trong ngoặc đơn điền vào chỗ trống.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_12 = CreText('Text_12', 27, 195, 21, 21, "2.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_13 = CreText('Text_13', 50, 314, 593, 35, "Viết từ có tiếng bắt đầu bằng c hoặc k gọi tên mỗi con vật trong hình.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_28 = CreText('Text_28', 27, 44, 21, 21, "1.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_29 = CreText('Text_29', 50, 40, 557, 38, "Dựa vào bài đọc, đánh dấu ✔  vào ô trống trước những câu là lời của kiến.", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
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
	var Text_3 = CreText('Text_3', 27, 321, 21, 21, "3.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 50, 193, 519, 28, "Viết tiếp để hoàn thành câu:", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_5 = CreText('Text_5', 477, 5, 38, 35, "TỚ NHỚ CẬU\r\nKiến là bạn thân của sóc. Hằng ngày, hai bạn thường rủ nhau đi học. Thế rồi nhà kiến chuyển đến một khu rừng khác. Lúc chia tay, kiến rất buồn. Kiến nói: “Cậu phải thường xuyên nhớ tớ đấy.”. Sóc gật đầu nhận lời.\r\nMột buổi sáng, sóc lấy một tờ giấy và viết thư cho kiến. Sóc nắn nót ghi: “Tớ nhớ cậu.”. Một cơn gió đi ngang qua mang theo lá thư. Chiều hôm đó, kiến đi dạo trong rừng. Một lá thư nhè nhẹ bay xuống. Kiến reo lên: “A, thư của sóc!”.\r\nHôm sau, kiến ngồi bên thềm và viết thư cho sóc. Kiến không biết làm sao cho sóc biết mình rất nhớ bạn. Cậu viết: |Chào sóc!|. Nhưng kiến không định chào sóc. Cậu bèn viết một lá thư khác: |Sóc thân mến!|. Như thế vẫn không đúng ý của kiến. Lấy một tờ giấy mới, kiến ghi: |Sóc ơi!|. Cứ thế, cậu cặm cụi viết đi viết lại trong nhiều giờ liền.\r\nKhông lâu sau, sóc nhận được một lá thư do kiến gửi đến. Thư viết: |Sóc ơi, tớ cũng nhớ cậu!|.\r\n", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE1.PNG', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_5.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var text = GetText("", "");
		Speak(text, "VN");
		return;
	}
	);
	var edit = CreText('edit', 50, 500, 593, 28, "Viết tiếp các từ ngữ vào cột phù hợp, mỗi từ cách nhau bởi dấu phẩy(,)", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Image_2 = CreText('Image_2', 490, 624, 0, 0, '', 'rgba(0,0,0,0)', '', '', '', '', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	var abc_0 = CreText('abc_0', 107, 87, 281, 28, "Cậu phải thường xuyên nhớ tớ đấy", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_1 = CreText('abc_1', 107, 119, 175, 28, "A! Thư của Sóc", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var abc_2 = CreText('abc_2', 107, 151, 206, 28, "Sóc ơi! Tớ cũng nhớ cậu", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var check_0 = CreText('check_0', 77, 87, 25, 28, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_0.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_1 = CreText('check_1', 77, 118, 25, 28, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var check_2 = CreText('check_2', 77, 149, 25, 28, "", '#ffffff', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	check_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ClickCheck();
		return;
	}
	);
	var input_3 = CreText('input_3', 356, 453, 115, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_1 = CreText('input_1', 87, 454, 115, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_2 = CreText('input_2', 222, 454, 115, 26, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var error_text = CreText('error_text', 79, 675, 528, 53, "", 'rgba(0,0,0,0)', '#ffffff', '#ff0000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_2 = CreText('Text_2', 154, 853, 278, 20, "(thân thiết, nhớ, vui đùa)", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_16 = CreText('Text_16', 76, 997, 480, 20, "a. Sóc ơi, cậu có làm nhiều bánh sinh nhật mời bọn tớ không", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_8 = CreText('input_8', 63, 931, 90, 18, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_10 = CreText('input_10', 472, 1021, 22, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_10.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?", "!");
		return;
	}
	);
	var input_9 = CreText('input_9', 539, 993, 22, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_9.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?", "!");
		return;
	}
	);
	var input_6 = CreText('input_6', 297, 875, 83, 18, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_7 = CreText('input_7', 219, 912, 60, 18, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_22 = CreText('Text_22', 27, 502, 21, 21, "4.", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_9 = CreText('Text_9', 78, 534, 262, 32, "Từ ngữ có tiếng chứa en", '#afeeee', '#0080ff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#afeeee', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_10 = CreText('Text_10', 346, 534, 262, 32, "Từ ngữ có tiếng chứa eng", '#afeeee', '#0080ff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#afeeee', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var van_0 = CreText('van_0', 78, 566, 262, 100, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#7f7f7f', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var van_1 = CreText('van_1', 345, 566, 262, 101, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#7f7f7f', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_27 = CreText('Text_27', 27, 737, 21, 21, "5. ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_0 = CreText('input_0', 83, 242, 494, 58, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#808080', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_19 = CreText('Text_19', 78, 220, 461, 24, "Kiến phải viết lại nhiều lần lá thư gửi cho sóc vì...", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_4 = CreText('input_4', 493, 451, 115, 26, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '1', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_5 = CreText('input_5', 81, 768, 527, 51, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'top', 0, '0.00', '0', '0', 1, '#c0c0c0', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_7 = CreText('Text_7', 27, 828, 21, 21, "6. ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_18 = CreText('Text_18', 50, 733, 474, 30, "Viết từ ngữ chỉ tình cảm bạn bè.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_20 = CreText('Text_20', 30, 963, 21, 21, "7. ", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Bold', 'center', 'bottom', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_21 = CreText('Text_21', 57, 961, 489, 28, "Điền dấu chấm, dấu chấm hỏi, dấu chấm than vào ô trống.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Bold', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_23 = CreText('Text_23', 76, 1057, 446, 20, "c. Tuyệt vời quá", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var input_11 = CreText('input_11', 200, 1055, 22, 22, "", 'rgba(0,0,0,0)', '#ffffff', '#0080ff', '#0080ff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#0080ff', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	input_11.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		ChangeChar(".", "?", "!");
		return;
	}
	);
	Page_1.add(Page_1_Backrounnd, Text_15, Image_6, Text_11, Text_17, Text_26, Text_12, Text_13, Text_28, Text_29, msg, diem, Image_1, Text_3, Text_4, Text_5, edit, Image_2, abc_0, abc_1, abc_2, check_0, check_1, check_2, input_3, input_1, input_2, error_text, Text_2, Text_16, input_8, input_10, input_9, input_6, input_7, Text_22, Text_9, Text_10, van_0, van_1, Text_27, input_0, Text_19, input_4, input_5, Text_7, Text_18, Text_20, Text_21, Text_23, input_11);
	stage.add(Page_1);
	InitLacVietScript();
};
