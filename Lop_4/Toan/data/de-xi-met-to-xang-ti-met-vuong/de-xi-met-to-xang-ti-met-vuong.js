folder_Resource ='/data/de-xi-met-to-xang-ti-met-vuong';
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var m_limit= 100000;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var kq =0;
function  CreateGame()
{
	
	var so0 = Random(100)+1;
              	var x = Random(3);
	var y = Random(2);

	if(x==0) // m=>dm
		{		
		if(y==0)
		{
		SetText("","so0",so0 + "m² ");
		SetText("","so1", "dm² ");
		kq=so0*100;
		}
		else
		{
			kq=so0;
			so0=so0*100;
			SetText("","so0",so0 + "dm² ");
			SetText("","so1", "m² ");
		}
	}
	else if(x==1) //m => cm

		{
			if(y==0)
			{
				SetText("","so0",so0 + "m² ");
				SetText("","so1", "cm² ");
				kq=so0*1000;
			}
			else
			{
				kq=so0;
				so0=so0*1000;
				SetText("","so0",so0 + "cm² ");
				SetText("","so1", "m² ");			
			}

		}
	else // dm = cm
	{
		if(y==0)
		{
			SetText("","so0",so0 + "dm² ");
			SetText("","so1", "cm² ");
			kq=so0*100;
		}
		else
		{
		  	kq=so0;
			so0=so0*100;
			SetText("","so0",so0 + "cm² ");
			SetText("","so1", "dm² ");	
		}
	}
	_bTestAndCreat = false;
	SetText("","so2","");
	SetShowObject("","msg",0);
	SetFontColor("","so2","#0000FF");
	SetText("","btSubmit","OK");	
	SetShowObject("","btSubmit",1);
	AllowEditText("","so2",1);
	InvalidateObj("","");
}


window.callBackGetVer = function callBackGetVer(_score,_note)
{
	
	if (_note != "undefined" &&  typeof _score != "undefined" && _note !== null && _note !== "" && _note !== 0)
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
	CreateGame();
}


function  CheckKQ()
{	
if(_bTestAndCreat)
{
CreateGame();
return;
}
var tl = GetText("","so2");
	if(tl=="")
	{
		SetText("", "msg", "Bạn chưa nhập câu trả lời.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}

		if(tl==kq)
			{	
					_cDung++;
        SetFontColor("", "msg", _trueColor);
        SetText("", "msg", "✔  Đúng");
        PlaySound("sound_good");
			//Speak("Đúng","VN");
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
		SetShowObject("","msg",1);
SetText("","btSubmit","Next");	
		InvalidateObj("","");
}
function Page_1_OnKeyDown()
{

var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","so2",textarea.value);	 
		}
		CheckKQ()();
	}
}
function Page_1()
{
GetVer("callBackGetVer");
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
 width: 480,
 height: 250 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,480,250,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var so0 = CreText('so0',76,95,151,32,"123456",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',356,95,79,32,"4",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',224,95,32,32,"=",'rgba(0,0,0,0)','#ffffff','#0000ff','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',259,93,83,32,"",'#ffffff','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',10,55,306,27,"Nhập số thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,0,479,41,"Đổi m² sang dm²  và cm²",'#008040','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',365,27,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',403,27,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',441,27,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',82,134,319,50,"good job",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold Italic','center','middle',12,'0.00','2','2',0,'rgba(0,0,0,0)','rgba(0,128,192,0.89)','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
	InvalidateObj("","");

  return;
}
 );
var btSubmit = CreText('btSubmit',182,209,116,29,"OK",'#009300','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,so0,so1,dau,so2,title,Text_1,cau_dung,cau_sai,diem,msg,btSubmit);
stage.add(Page_1);
InitLacVietScript();
};
