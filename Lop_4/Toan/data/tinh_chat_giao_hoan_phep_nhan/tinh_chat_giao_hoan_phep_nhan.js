folder_Resource ='/data/tinh_chat_giao_hoan_phep_nhan';
var kq = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var tl = "";
function CreateQuestion()
{
var a = Random(9)+1;
var b = Random(9999)+1;
var tem = Random(2);
if(tem ==0)
{
	tem  = a;
	a= b;
	b= tem;
}

SetText("","ch_0",a);
SetText("","ch_1",b);
SetText("","ch_2",b);
SetText("","ch_3",a);
tl  = Random(4);
kq = GetText("","ch_"+tl);
for(var k =0 ; k< 4 ; k++)
{
 AllowEditText("","ch_"+k,0);
SetBorder("","ch_"+k,"#ffffff",0);
SetDigitEditText("","ch_"+k,"number");
  }
SetBorder("","ch_"+tl, _normalColor ,1);
SetText("","ch_"+tl,"");
_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",1);	
AllowEditText("","ch_"+tl,1);	       
InvalidateObj("","");
  return;
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	
	if (_note != "undefined"&& typeof _score != "undefined" && _note !== null && _note !== "" && _note !== 0)
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


function   ChamDiem()
{
var _txt = GetText("","ch_"+tl);
	if(_txt=="")
	{
		SetText("", "msg", "Bạn chưa nhập kết quả.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}
	if(_txt==kq)
	{
		  _cDung++;
        SetFontColor("", "msg", _trueColor);
        SetText("", "msg", "✔  Đúng");
        PlaySound("sound_good");

	}
	else
	{
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
	_bTestAndCreat= true;
	SetText("","btSubmit","Next");	
	SetShowObject("","msg",1);
	InvalidateObj("","");

}
/*----------------------------------*/
function Page_1()
{
SetShowObject("","btSubmit",0);	
SetText("","ch_3","");
GetVer("callBackGetVer");
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
var Text_3 = CreText('Text_3',-1,-1,650,60,"Viết số thích hợp vào ô trống",'#8000ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',84,139,87,38,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_1 = CreText('ch_1',210,139,87,38,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_2 = CreText('ch_2',336,139,87,38,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_3 = CreText('ch_3',464,139,87,38,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',391,304,147,35,"OK",'#8000ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var dot = CreText('dot',173,140,36,36,"x",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',297,139,36,36,"=",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',425,137,36,36,"x",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',84,188,496,88,"good job",'rgba(255,255,255,0.89)','#ffffff','#80ff00','#ffffff','',28,'Arial','Bold Italic','center','middle',12,'0.00','2','2',1,'#0000ff','rgba(255,255,255,0.89)','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
InvalidateObj("","");
  return;
}
 );
var cau_dung = CreText('cau_dung',487,45,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',541,45,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',595,43,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_3,ch_0,ch_1,ch_2,ch_3,btSubmit,dot,Text_1,Text_2,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
