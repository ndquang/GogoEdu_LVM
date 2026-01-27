folder_Resource ='/data/duong_thang_song_song';
var kq = 0;

var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var ch = ["Các đường thẳng này có song song với nhau không?", "Các đường thẳng này có vuông góc với nhau không?", "Các đường thẳng này có cắt nhau không?"];
var denta = 0;
function  CreateQuestion()
{
    RotateObj("", "truc_x", 0);
    RotateObj("", "truc_y", 0);
    var angle = [ 0, 30, 45, 60, 90, 120, 150, 180];

    var x = angle[Random(8)];
    var y = angle[Random(8)];
    var denta_new = abs(x - y);

	
   if(denta_new ==0) //  song song
	denta_new = "=";
   else if(denta_new ==90) //vuong goc
	denta_new = "+";
   else //vuong goc
	denta_new = "x";

    while (denta_new == denta) {
        x = angle[Random(8)];
        y = angle[Random(8)];
        denta_new = abs(x - y);	
	if(denta_new ==0)
	denta_new = "=";
   else if(denta_new ==90)
	denta_new = "+";
   else 	denta_new = "x";
    }
    denta = denta_new;
    RotateObj("", "truc_x", -x);
    RotateObj("", "truc_y", -y);     
    kq = Random(2);
	if (denta == "=") // song song
	{
		if(kq==1)
		SetText("", "ch", ch[0]);
		else SetText("", "ch", ch[Random(2) +1]);
	}
  	else if (denta == "+") // vuong goc
	{
		if(kq==1)
		SetText("", "ch", ch[1]);
		else SetText("", "ch", ch[0]);
	}
	else { // cat nhau x
		if(kq==1)
		SetText("", "ch", ch[2]);
		else SetText("", "ch", ch[Random(2)]);
	}
	
    _bTestAndCreat = false;
    for (var k = 0; k < 2; k++) {
        SetColorEx("", "ch_" + k, "#f2f2f2");
    }
    SetShowObject("", "btSubmit", 0);
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
    return;
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	
	if (typeof _score != "undefined" && _note !== null && _note !== "" && _note !== 0)
	{
		_Diem = _score
		let arrNote= _note.split("|");
		_cDung = arrNote[0];
		_cSai = arrNote[1];
	}
	SetText("","cau_dung",_cDung);
    SetText("","cau_sai",_cSai);
    SetText("","diem",_Diem);
	SetShowObject("","msg",0);
	CreateQuestion();
	InvalidateObj("","");
}

/*----------------------------------*/
var tl = "";
function   Select( yn)
    {
        if(_bTestAndCreat)
return;

tl = yn;
for (var k = 0; k < 2; k++) {
    SetColorEx("", "ch_" + k, "#f2f2f2");
}
_bTestAndCreat = false;
SetColorEx("", "", "#33ccff");
SetShowObject("", "btSubmit", 1);
SetText("", "btSubmit", "OK");
InvalidateObj("", "");

}
/*----------------------------------*/

function   InitScore()
{
    GetVer("callBackGetVer");
}
function   ChamDiem()
{
    if (tl == kq) {
        _cDung++;
        SetFontColor("", "msg", _trueColor);
        SetText("", "msg", "✔  Đúng");
        PlaySound("sound_good");

    }
    else {
        SetFontColor("", "msg", _falseColor);
        PlaySound("sound_bad");
        SetText("", "msg", "❌ Sai");
            _cSai++;

    }
    _Diem = _cDung - _cSai;
    SetText("","cau_dung",_cDung);
    SetText("","cau_sai",_cSai);
    SetText("","diem",_Diem);
    UpdateScore(_Diem,_cDung+"|"+_cSai);
    _bTestAndCreat = true;
    SetText("", "btSubmit", "Next");
    SetShowObject("", "msg", 1);
    InvalidateObj("", "");

}
function Page_1()
{
SetShowObject("","btSubmit",0);	
InitScore();
  return;
}
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 650,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,650,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var ch = CreText('ch',-1,-1,650,60,"Tam giác này là tam giác gì?",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',155,252,127,38,"No",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(0);
  return;
}
 );
var ch_1 = CreText('ch_1',370,251,127,38,"Yes",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(1);
  return;
}
 );
var btSubmit = CreText('btSubmit',260,318,147,35,"OK",'#0080ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var diem = CreText('diem',607,44,32,34,"10",'#ffffff','#c0c0c0','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',491,44,32,34,"5",'#ffffff','#c0c0c0','#009300','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',549,44,32,34,"3",'#ffffff','#c0c0c0','#ff0000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var truc_y = CreText('truc_y',244,133,167,14,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var truc_x = CreText('truc_x',213,179,167,14,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',77,122,496,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,ch,ch_0,ch_1,btSubmit,diem,cau_dung,cau_sai,truc_y,truc_x,msg);
stage.add(Page_1);
InitLacVietScript();
};
