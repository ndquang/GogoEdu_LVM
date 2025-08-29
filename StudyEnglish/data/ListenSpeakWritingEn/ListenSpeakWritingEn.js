folder_Resource = '/data/ListenSpeakWritingEn';
var doan_van = "";
var cau_van = "";
var myString = "";
var laplai = 2;
var s_title = "";
var s_content = "";
var dem_doc = 0;
var m_delay = 1000;
var m_seconds = 0;
var bStop = false;
var valueRate = 0.8;
var arrayOfLines;
var indexSpeak = 0;
var diemRecord = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var iTypeWork = 0; // 0 init, 1 listen; 2 write, 3 read
var txt_Translate = "";
var arr_Translate = [];
var curentDiem = 0;
function KhoiTao() {
	myString = s_content;
	dem_doc = 0;
	m_seconds = 0;
	SetMoveView("", "ketqua", 1);
	SetShowObject("", "ketqua", 0);
	SetMoveView("", "btSlide", "sliderRect");
	SetShowObject("", "bt_mic", 0);
	SetText("", "title", s_title);
	SetShowObject("", "xtimer", 0);
	SetShowObject("", "msg", 0);
	SetShowObject("", "grRead", 0);
	AllowEditText("", "content", 0);
	iTypeWork = 1;
}
function OnEndSpeak() {
	if (bStop)
		return;
	if (indexSpeak == Length(arrayOfLines)) {
		SetText("", "content", s_content);
		InvalidateObj("", "");
		return;
	}
	if (dem_doc > laplai) {
		SetShowObject("", "bt_Check", 1);
		dem_doc = 0;
		PlaySound("ID_SOUND_ALERT");
		SetText("", "msg", "");
		SetText("", "xtimer", "");
		KillTimerPage();
		InvalidateObj("", "");
		return;
	}
	SetTimerPage(1000);
}

var imported = document.createElement('script');
imported.src = folder_Resource + "/SpeechToText.js";
document.head.appendChild(imported);

// writeting
var txtRead = "";
function InitWrite() {
	var lineString = s_content;
	arrayOfLines = lineString.match(/[^\r\n|.]+/g);
	KhoiTao();
	indexSpeak = 0;
	dem_doc = 0;
	SetText("", "content", "");
	AllowEditText("", "content", 1);
	SetShowObject("", "bt_Check", 0);
	SetText("", "bt_Check", "Check");
	SetShowObject("", "xtimer", 1);
	SetShowObject("", "msg", 1);
	SetShowObject("", "grRead", 0);
	SetText("", "m_diem", "Listen and type");
	SetText("", "wrong_word", "");
	SetShowObject("", "bt_NextWrite", 1);
	SetShowObject("", "bt_Repeat", 0);
	SetShowObject("", "bt_Next", 0);
	SetShowObject("", "content1", 0);
	SetShowObject("", "vn_1", 0);
	SetShowObject("", "vn_2", 0);
	SetShowObject("", "image_man", 0);
	StopSound();
	txtRead = "";
	iTypeWork = 2;
	PlaySound("ID_SOUND_START");
	SetShowObject("", "ketqua", 1);
	if (recognizing) {
		recognition.stop();
		SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
	}
}
function DocViet() {
	if (bStop || iTypeWork != 2)
		return;
	if (dem_doc == 0) {
		if (indexSpeak == Length(arrayOfLines)) {
			cau_van = s_title + s_content;
			KillTimerPage();
			PlaySound("ID_SOUND_END");
			SetText("", "xtimer", "");
			SetText("", "msg", "");
			SetShowObject("", "grRead", 1);
			SetText("", "title", "");
			InvalidateObj("", "");
			return;
		}
		var n = indexOf(arrayOfLines[indexSpeak], ':');
		cau_van = arrayOfLines[indexSpeak].substr(n + 1);
		txtRead = txtRead + cau_van + "\r\n";
		SetText("", "title", cau_van);
		SetShowObject("", "ketqua", 0);
		SetText("", "content", "");
		SetShowObject("", "bt_check", 0);
		curentDiem = GetVer();
	}

	if (recognizing) {
		recognition.stop();
		SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
	}
	dem_doc++;
	if (wordCountStr(cau_van) > 0 && cau_van != "") {
		m_delay = wordCountStr(cau_van) * 1500;
		Speak(cau_van, "EN", "{pitch:1,rate: " + valueRate + ", volume: 1,onstart: OnStartSpeak, onend: OnEndSpeak}");
		m_seconds = ceil(m_delay / 1000);
		SetText("", "xtimer", m_seconds);
		SetText("", "msg", "Reading... " + dem_doc);
	}
	else {
		dem_doc = 0;
		Delay("DocViet()", 1);
	}
	InvalidateObj("", "");
}

function OnStartSpeak() {
	KillTimerPage();
}
var markWrite = 0;
var markRead = 0;
function CheckWrite() {

	var txtWrite = GetText("", "content");
	txtRead = GetText("", "title");
	var compairstr = similarity(txtWrite, txtRead);
	var countwrite = wordCountStr(txtWrite);
	var index;
	var wordSources = txtRead.match(/[^\s|\r\n|.]+/g);
	var wordInputs = txtWrite.match(/[^\s|\r\n|.]+/g);
	var outWordError = [];
	for (var i = 0; i < wordInputs.length; i++) {
		index = wordSources.indexOf(wordInputs[i]);
		if (index == -1) {
			outWordError.push(wordInputs[i]);
		}
	}
	SetText("", "ww_title", "You wrote wrong " + outWordError.length + " error");
	SetText("", "wrong_word", outWordError.toString());
	SetText("", "m_diem", formatNumber(compairstr * 10, 2) + "%");
	markWrite = round(compairstr * 10);
	UpdateScore(curentDiem + markWrite + markRead, "Write: " + markWrite + ", Read: " + markRead);
	SetShowObject("", "ketqua", 1);
	SetShowObject("", "bt_Repeat", 0);
	SetShowObject("", "bt_Next", 0);
	indexSpeak++;
	dem_doc = 0;

}
function InitReading() {
	bStop = true;
	KhoiTao();
	StopSound();
	SetText("", "xtimer", "");
	SetText("", "msg", "");
	SetText("", "content", "");
	SetText("", "content1", "");
	SetShowObject("", "grRead", 1);
	SetShowObject("", "content1", 1);
	SetShowObject("", "vn_1", 1);
	SetShowObject("", "vn_2", 1);
	SetShowObject("", "image_man", 1);
	SetShowObject("", "ketqua", 0);
	indexSpeak = 0;
	iTypeWork = 1;
	KillTimerPage();
	PlaySound("ID_SOUND_START");
	InvalidateObj("", "");
	return;
}

function DocNamNu() {
	if (!bStop) {
		Stop("", "", "");
		SetRsc("", "l_play", "ID_PLAY");
		bStop = true;
		return;
	}
	bStop = false;
	var lineString = s_content;
	arrayOfLines = lineString.match(/[^\r\n]+/g);
	if (txt_Translate != "")
		arr_Translate = txt_Translate.match(/[^\r\n]+/g);
	var n = arrayOfLines[indexSpeak].indexOf(":");
	var textSpeak = arrayOfLines[indexSpeak].substr(n + 1);
	SetText("", "content", textSpeak);
	if (txt_Translate != "")
		SetText("", "vn_1", arr_Translate[indexSpeak]);
	Speak(textSpeak, "EN", "{pitch: 1, rate:" + valueRate + ",onend: EndCallbackSpeak}");

	SetText("", "content1", "");
	SetText("", "vn_2", "");
	InvalidateObj("", "");
	SetRsc("", "l_play", "ID_PAUSE");
	return;
}

function EndCallbackSpeak() {
	if (bStop) {
		return;
	}
	indexSpeak++;
	if (indexSpeak >= arrayOfLines.length || iTypeWork != 1) {
		PlaySound("ID_SOUND_END");
		indexSpeak = 0;
		SetRsc("", "l_play", "ID_PLAY");
		bStop = true;
		return;
	}
	var n = arrayOfLines[indexSpeak].indexOf(":");
	var textSpeak = arrayOfLines[indexSpeak].substr(n + 1);
	if (indexSpeak % 2 == 0) {
		SetText("", "content", textSpeak);
		SetText("", "content1", "");
		SetText("", "vn_2", "");
		if (txt_Translate != "")
			SetText("", "vn_1", arr_Translate[indexSpeak]);
		Speak(textSpeak, "EN", "{pitch: 1, rate:" + valueRate + ",onend: EndCallbackSpeak}");
	}

	else {
		SetText("", "content1", textSpeak);
		if (txt_Translate != "")
			SetText("", "vn_2", arr_Translate[indexSpeak]);
		Speak(textSpeak, "UK English Male", "{pitch: 1, rate: " + valueRate + ",onend: EndCallbackSpeak}");
	}
	InvalidateObj("", "");
}

function SpeakAgain() {
	if (indexSpeak <= 0) {
		indexSpeak = 0;
	}

	if (indexSpeak >= arrayOfLines.length || iTypeWork != 1) {
		indexSpeak = arrayOfLines.length - 1;
	}
	bStop = true;
	Stop("", "", "");
	var n = arrayOfLines[indexSpeak].indexOf(":");
	var textSpeak = arrayOfLines[indexSpeak].substr(n + 1);
	if (indexSpeak % 2 == 0) {
		if (txt_Translate != "")
			SetText("", "vn_1", arr_Translate[indexSpeak]);

		Speak(textSpeak, "EN", "{pitch: 1, rate:" + valueRate + "}");
		SetText("", "content", textSpeak);
		SetText("", "content1", "");
		SetText("", "vn_2", "");
	}
	else {
		if (txt_Translate != "")
			SetText("", "vn_2", arr_Translate[indexSpeak]);
		Speak(textSpeak, "UK English Male", "{pitch: 1, rate: " + valueRate + "}");
		SetText("", "content1", textSpeak);
	}
	InvalidateObj("", "");
}
var bShowHideText = false;
function HideShowText() {
	if (!bShowHideText) {
		SetFontColor("", "title", "#004080");
		SetText("", "bt_shText", "Show text");
	}
	else {
		SetFontColor("", "title", -1);
		SetText("", "bt_shText", "Hide text");
	}
	if (iTypeWork != 1)
		SetFontColor("", "content", "#000000");
	bShowHideText = !bShowHideText;
	InvalidateObj("", "");
}
var final_transcript = '';
// Recording 

function RecordIndex() {
	if (recognizing) {
		recognition.stop();
		SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
		recognizing = !recognizing;
		InvalidateObj("", "");
		return;
	}

	if (indexSpeak >= Length(arrayOfLines)) {
		SetText("", "ww_title", "You have finished the reading.");
		SetText("", "wrong_word", "You have finished the reading.");
		SetFontColor("", "content", "#000000");
		var sum = 0;
		for (var i = 0; i < arrayOfLines.length; i++) {
			sum += parseInt(diemRecord[i], 10); //don't forget to add the base
		}
		var avg = sum / arrayOfLines.length;
		SetText("", "m_diem", ceil(avg) + "%");

		if (avg > 50) SetFontColor("", "m_diem", "#2ECC71");
		else SetFontColor("", "m_diem", "#EB1B07");

		markRead = ceil(avg);
		UpdateScore(curentDiem + markWrite + markRead, "Write: " + markWrite + ", Read: " + markRead);
		SetShowObject("", "bt_Repeat", 0);
		SetShowObject("", "bt_Next", 0);
		SetShowObject("", "ketqua", 1);
		return;
	}
	var n = arrayOfLines[indexSpeak].indexOf(":");
	var textSpeak = arrayOfLines[indexSpeak].substr(n + 1);
	SetText("", "title", textSpeak);
	SetText("", "content", "");
	Speak(textSpeak, "EN", "{pitch: 1, rate:" + valueRate + ",onend: StartStopRecord}");
	SetShowObject("", "ketqua", 0);
}

function InitRecord() {
	KillTimerPage();
	StopSound();
	SetShowObject("", "bt_mic", 1);
	SetShowObject("", "xtimer", 0);
	SetShowObject("", "msg", 0);
	SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
	SetText("", "content", "");
	SetText("", "title", s_title);
	PlaySound("ID_SOUND_START");

	AllowEditText("", "content", 0);
	bShowHideText = false;
	iTypeWork = 3;
	var lineString = myString;
	arrayOfLines = lineString.match(/[^\r\n]+/g);
	indexSpeak = 0;
	curentDiem = GetVer();
	SetShowObject("", "bt_check", 0);
	SetShowObject("", "grRead", 0);
	SetShowObject("", "ketqua", 0);
	SetShowObject("", "content1", 0);
	SetShowObject("", "vn_1", 0);
	SetShowObject("", "vn_2", 0);
	SetShowObject("", "image_man", 0);
	SetText("", "bt_Check", "Delete");
	SetShowObject("", "bt_Check", 1);
}
var recognizing = false;

function StartStopRecord() {
	if (!recognizing) {
		recognition.start();
		SetRsc("", "bt_mic", "IMAGE_MIC_REC");
		final_transcript = "";
		SetText("", "content", final_transcript);
		SetFontColor("", "content", "#000000");
	}
	else {
		recognition.stop();
		SetRsc("", "bt_mic", "IMAGE_MIC_OFF");
	}
	recognizing = !recognizing;
	InvalidateObj("", "");
}

function Page_1() {

	s_title = $("#idTitle").clone().children().remove().end().text();
	s_content = $("#idContent").text().trim();

	var i_pos = lastIndexOf(s_content, "_____", 0);
	if (i_pos > 0) {
		txt_Translate = trimStr(subString(s_content, i_pos + 6));
		i_pos = indexOf(s_content, "_____", 0);
		s_content = trimStr(subString(s_content, 0, i_pos - 1));
	}
	SetText("", "content", s_content);
	SetText("", "title", s_title);
	SetShowObject("", "bt_check", 0);
	KhoiTao();
	InitReading();
	InvalidateObj("", "");
	return;
}
function Page_1_OnTimer() {
	if (bStop)
		return;
	m_seconds--;
	SetText("", "xtimer", m_seconds);
	if (m_seconds < 0) {
		KillTimerPage();
		DocViet();
	}
	InvalidateObj("", "");
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
		width: 500,
		height: 300
	});

	var Page_1 = new Kinetic.Layer({ name: 'Page_1', callback: 'Page_1()' });
	var Page_1_Backrounnd = CreText('Page_1_Backrounnd', 0, 0, 500, 300, '', '#004f9d', '', '', '', '', 12, 'Times New Roman', '', 'left', 'center', 0, '0.00', '0', 0, '0', 0, '#004f9d', '0', '0', '0', '', '0', '0', '0', '0', 0, 0, '');
	var title = CreText('title', 0, 37, 500, 48, "What’s your favorite sport?", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	title.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (iTypeWork >= 2)
			SpeakEN("", "");
		return;
	}
	);
	var bt_mic = CreText('bt_mic', 455, 42, 43, 38, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 16, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#000000', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_mic.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		RecordIndex();
		return;
	}
	);
	var vn_2 = CreText('vn_2', 72, 217, 372, 38, "", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 12, 'Arial', 'Normal', 'center', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var vn_1 = CreText('vn_1', 69, 131, 366, 40, "", 'rgba(0,0,0,0)', '#ffffff', '#ffffff', '#ffffff', '', 12, 'Arial', 'Normal', 'center', 'top', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var content1 = CreText('content1', 68, 173, 377, 43, "", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 12, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '8', '0', 0, '#000000', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var content = CreText('content', 68, 88, 368, 43, "A: Please let me introduce myself? I’m Quang.\r\nB: I’m John Smith. Please to meet you.\r\nA: Are you Australian?\r\nB: No, I am American.\r\nA: Do you like Ha Noi?\r\nB: Yes, I like it very much.\r\nA: Are you here on vacation?\r\nB: No, I’m not. I’m here working.", '#ffffff', '#ffffff', '#000000', '#ffffff', '', 12, 'Arial', 'Normal', 'center', 'middle', 3, '0.00', '8', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.70);
	var sliderRect = CreText('sliderRect', 359, 279, 136, 17, "Slow                           Fast", '#ff0000', '#ffffff', '#ffffff', '#ffffff', '', 10, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#00008b', '4', '1', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var Text_4 = CreText('Text_4', 289, 1, 101, 36, "Speak  ", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_4.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		InitRecord();
		return;
	}
	);
	var Text_2 = CreText('Text_2', 187, 1, 93, 36, "Write  ", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		bStop = false;
		InitWrite();
		return;
	}
	);
	var Text_3 = CreText('Text_3', 189, 3, 31, 31, "2. Writing", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE_WRITE.PNG', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 2, 'rgba(0,0,0,0)', '#e6e6fa', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_3.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		bStop = false;
		InitWrite();
		DocViet();
		return;
	}
	);
	var msg = CreText('msg', 365, 137, 82, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#ffff00', '#ffffff', '', 10, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var xtimer = CreText('xtimer', 314, 137, 46, 20, "", 'rgba(0,0,0,0)', '#ffffff', '#ffff00', '#ffffff', '', 10, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#ffffff', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var txtDiem = CreText('txtDiem', 294, 4, 31, 31, "3. Speaking", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE_SPEAK.PNG', 16, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 2, 'rgba(0,0,0,0)', '#e6e6fa', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	txtDiem.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		InitRecord();
		return;
	}
	);
	var wrong_word = CreText('wrong_word', 127, 143, 257, 106, "", '#e6e6fa', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'top', 3, '0.00', '5', '0', 1, '#0000ff', '#e6e6fa', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 5, 1.50);
	var ww_title = CreText('ww_title', 127, 125, 257, 19, "https://gogoedu.vn", 'rgba(0,128,192,1.04)', '#ffffff', '#ffffff', '#ffffff', '', 14, 'Arial', 'Normal', 'left', 'middle', 0, '0.00', '0', '0', 1, '#666666', 'rgba(0,128,192,1.04)', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var btClose = CreText('btClose', 367, 127, 15, 15, "X", '#ff0000', '#ffffff', '#ffffff', '#ffffff', '', 10, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#ff0000', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	btClose.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		SetShowObject("", "ketqua", 0);
		return;
	}
	);
	var Text_1 = CreText('Text_1', 82, 1, 96, 36, "Listen  ", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 16, 'Arial', 'Normal', 'right', 'middle', 0, '0.00', '0', '0', 1, '#c0c0c0', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	Text_1.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		InitReading();
	}

	);
	var bt_Listen = CreText('bt_Listen', 84, 3, 35, 31, "Listen", '#ffffff', '#ffffff', 'rgba(0,0,0,0)', '#ffffff', 'ID_IMAGE_LISTEN.PNG', 16, 'Arial', 'Normal', 'left', 'middle', 3, '0.00', '5', '0', 0, 'rgba(0,0,0,0)', '#e6e6fa', '2', '2', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_Listen.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		InitReading();
	}
	);
	var btSlide = CreText('btSlide', 418, 279, 18, 17, "|", '#c0c0c0', '#ffffff', '#ff0000', '#ffffff', '', 14, 'Arial', 'Normal', 'center', 'bottom', 0, '0.00', '1', '1', 1, '#c0c0c0', '#f4f4f4', '4', '1', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	btSlide.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		var wCenterBt = GetWidth("", "") / 2;
		var leftSlide = GetLeft("", "sliderRect") + wCenterBt;
		var posRect = GetLeft("", "") + wCenterBt - leftSlide;
		valueRate = posRect * 1.5 / (GetWidth("", "sliderRect") - wCenterBt * 2);
		return;
	}
	);
	var bt_Next = CreText('bt_Next', 271, 219, 78, 23, "Next", 'rgba(255,255,255,0.89)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#0000ff', 'rgba(155,205,255,0.89)', '4', '1', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_Next.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		indexSpeak++;
		RecordIndex();
		return;
	}
	);
	var bt_Repeat = CreText('bt_Repeat', 154, 219, 78, 23, "Repeat", 'rgba(255,255,255,0.89)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#0000ff', 'rgba(155,205,255,0.89)', '4', '1', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_Repeat.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		RecordIndex();
	}
	);
	var l_play = CreText('l_play', 150, 253, 42, 43, '', 'rgba(0,0,0,0)', '', '', '', 'ID_PLAY.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	l_play.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		DocNamNu();
		return;
	}
	);
	var l_repeat = CreText('l_repeat', 200, 253, 42, 43, '', 'rgba(0,0,0,0)', '', '', '', 'ID_CUR.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	l_repeat.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		SpeakAgain()
		return;
	}
	);
	var l_next = CreText('l_next', 250, 253, 42, 43, '', 'rgba(0,0,0,0)', '', '', '', 'ID_NEXT.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	l_next.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		indexSpeak++;
		SpeakAgain();
		return;
	}
	);
	var l_pre = CreText('l_pre', 300, 253, 42, 43, '', 'rgba(0,0,0,0)', '', '', '', 'ID_PRE.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	l_pre.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		indexSpeak--;
		SpeakAgain();
		return;
	}
	);
	var bt_shText = CreText('bt_shText', 439, 14, 62, 23, "Hide text", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 12, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 1, '#ffffff', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_shText.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		HideShowText();
		return;
	}
	);
	var bt_NextWrite = CreText('bt_NextWrite', 220, 219, 78, 23, "OK", 'rgba(255,255,255,0.89)', '#ffffff', '#000000', '#ffffff', '', 14, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '5', '0', 1, '#0000ff', 'rgba(155,205,255,0.89)', '4', '1', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_NextWrite.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		DocViet();
	}
	);
	var image_man = CreText('image_man', 440, 174, 57, 46, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE2.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	image_man.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		Speak(GetText("", "content1"), "UK English Male");
		return;
	}
	);
	var Image_2 = CreText('Image_2', 4, 90, 61, 52, '', 'rgba(0,0,0,0)', '', '', '', 'ID_IMAGE3.PNG', 0, '', '', '', '', 0, '0.00', '0', '0', 1, 'rgba(0,0,0,0)', '', '2', '2', '', '0', '0', '4', '0', 0, 0, '#808080');
	Image_2.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		Speak(GetText("", "content"), "EN");
		return;
	}
	);
	var grRead = new Kinetic.Group({ name: 'grRead', x: 0, y: 0, width: 196, height: 47 });
	grRead.add(l_play, l_repeat, l_next, l_pre);
	var bt_check = CreText('bt_check', 441, 88, 56, 43, "Check", '#004080', '#ffffff', '#ffffff', '#ffffff', '', 12, 'Arial', 'Bold', 'center', 'middle', 3, '0.00', '3', '0', 1, '#ffffff', '#004080', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	bt_check.on('mouseup touchend dragend', function (evt)/*---dragend---*/ {
		m_pgObjCaller = this;
		if (iTypeWork == 2)
			CheckWrite();
		else if (iTypeWork == 3) {
			final_transcript = "";
			SetText("", "content", "");
			InvalidateObj("", "");
		}
		return;
	}
	);
	var m_diem = CreText('m_diem', 127, 145, 256, 76, "", 'rgba(0,0,0,0)', '#ffffff', '#000000', '#ffffff', '', 20, 'Arial', 'Normal', 'center', 'middle', 0, '0.00', '0', '0', 0, 'rgba(0,0,0,0)', '#7fffd4', '0', '0', 'rgba(0,0,0,0)', '0', '0', '4', '0', 0, 0, 'rgba(0,0,0,0)', 0, 1.50);
	var ketqua = new Kinetic.Group({ name: 'ketqua', x: 0, y: 0, width: 261, height: 128 });
	ketqua.add(wrong_word, ww_title, btClose, bt_Repeat, bt_NextWrite, bt_Next, m_diem);
	Page_1.add(Page_1_Backrounnd, title, bt_mic, vn_2, vn_1, content1, content, sliderRect, Text_4, Text_2, Text_3, msg, xtimer, txtDiem, Text_1, bt_Listen, btSlide, bt_shText, image_man, Image_2, grRead, bt_check, ketqua);
	stage.add(Page_1);
	InitLacVietScript();
};
