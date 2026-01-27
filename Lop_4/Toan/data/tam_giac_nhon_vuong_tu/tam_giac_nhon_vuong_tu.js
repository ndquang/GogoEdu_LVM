folder_Resource ='/data/tam_giac_nhon_vuong_tu';
var kq = 0;
var letters =  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor="#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var denta = 0;
function  getRandomColor() {
   var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[ Random(16)];
  }
  return color;
}
function CreateQuestion()
{
       var x = Random(80)+10;
       var y =  Random(80)+10;
                kq =  Random(3);
   	if (kq==0) // nhon
	{
		if(x<y)
		{
			var tam = x;
			x=y;
			y= tam;
		}
	}
  	else if (kq==1) // vuong goc
	{
		x = y;
	}
	else { // tu
		if(x>y)
		{
			var tam = x;
			x=y;
			y= tam;
		}
	}
       PosX("", "tam_giac", x);
       PosY("", "tam_giac", y);     
    _bTestAndCreat = false;
    for (var k = 0; k < 3; k++) {
        SetColorEx("", "ch_" + k, "#f2f2f2");
    }
    SetColorEx("","tam_giac",getRandomColor());
       SetShowObject("", "btSubmit", 0);
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
    return;
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	
	if (typeof _score != "undefined" && _note !== null && _note !== "" && _note !== 0)
	{
		_Diem = _score;
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
function  Select( yn)
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

function  InitScore()
{
    GetVer("callBackGetVer");
}
function  ChamDiem()
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
/*----------------------------------*/
function Page_1()
{
SetShowObject("","btSubmit",0);	
InitScore();
  return;
}
function Page_1_OnTimer()
{
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
var ch = CreText('ch',-1,-1,650,60,"Tam giác này là tam giác gì?",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',100,252,127,38,"Nhọn",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(0);
  return;
}
 );
var ch_1 = CreText('ch_1',283,252,127,38,"Vuông",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(1);
  return;
}
 );
var btSubmit = CreText('btSubmit',260,318,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau_dung = CreText('cau_dung',513,45,29,29,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',550,45,29,29,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',591,45,29,29,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tam_giac = CreText('tam_giac',180,99,200,116,"",'#00ccff','#00ccff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','37','14',2,'#000000','#00ccff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_2 = CreText('ch_2',451,252,127,38,"Tù",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(2);
  return;
}
 );
var msg = CreText('msg',79,117,496,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,ch,ch_0,ch_1,btSubmit,cau_dung,cau_sai,diem,tam_giac,ch_2,msg);
stage.add(Page_1);
InitLacVietScript();
};
