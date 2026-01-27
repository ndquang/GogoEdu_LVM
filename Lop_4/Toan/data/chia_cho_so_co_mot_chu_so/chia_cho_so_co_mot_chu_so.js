folder_Resource ='/data/chia_cho_so_co_mot_chu_so';
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var a_input=["","","","","",""];
var i_input=0;
function  CreateGame()
{
	var sc = Random(7)+3;
	var sbc = (Random(sc-1)+1)*100000 + Random(9 )*10000+ Random(9 )*1000 + Random(9 )*100 + Random(9 )*10+Random(9 );
	
	SetText("","sbc",sbc);
	SetText("","sc",sc );

	 a_input[0] = subString(sbc,0,2)%sc +""+ subString(sbc,2,1);	
	 a_input[1]=  a_input[0] %sc +""+ subString(sbc,3,1);	
	 a_input[2]=  a_input[1]%sc +""+ subString(sbc,4,1);		
	 a_input[3]=  a_input[2]%sc +""+ subString(sbc,5,1);
	a_input[4]= a_input[3]%sc;
	a_input[5]= floor(sbc /sc);

	SetShowObject("","msg",0);

	for(var i=0;i<6;i++)
	{
		SetFontColor("","in_"+i,"#FFFFFF");
		AllowEditText("","in_"+i,0);
		SetText("","in_"+i, a_input[i]);
	}
	 i_input = Random(6);
	var len = Length(trimStr(a_input[i_input]));
	SetFontColor("","in_"+i_input,"#FFF237");
	var tam = "";
	for(var k=0;k<len;k++)
	tam = tam + "?";	
	SetText("","in_"+ i_input,tam );
	
	_bTestAndCreat = false;
	AllowEditText("","in_"+i_input,1);
	SetText("","btSubmit","Submit");
	InvalidateObj("","");
}
function  CheckKQ()
{	
		if(_bTestAndCreat)
{
CreateGame();
return;
}
		var kq = true;
		if(GetText("","in_"+i_input)==a_input[i_input])			
			SetFontColor("","in_"+i_input,"#00ff00");	
		else {
			SetFontColor("","in_"+i_input,"#ff0000");
			 kq = false;;
		       }
		AllowEditText("","in_"+i_input,0);
				
		if(kq == true)
			{	
				_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔  Đúng");
			}
		else {		
		SetFontColor("", "msg", _falseColor);
      		SetText("","msg","❌ Sai, số đúng là: " +a_input[i_input]);
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

function Page_1_OnKeyDown()
{
var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","in_"+i_input,textarea.value);	 
		}
		CheckKQ();
	}
  return;
}

function Page_1()
{
SetDigitEditText("","so2","number");
SetDigitEditText("","so3","number");
SetDigitEditText("","so4","number");
GetVer("callBackGetVer");
SetMoveView("","msg",1);
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
 width: 550,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,550,450,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var sc = CreText('sc',271,103,100,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_5 = CreText('in_5',271,132,100,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_3 = CreText('Text_3',3,56,389,26,"Điền số còn thiếu vào dấu '?'",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',173,128,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var sbc = CreText('sbc',157,103,102,29,"193456",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,550,56,"Chia cho số có một chữ số",'rgba(255,255,255,0.22)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',209,363,110,36,"Kiểm tra",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#e2e2e2','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var in_1 = CreText('in_1',190,158,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_2 = CreText('in_2',206,188,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_3 = CreText('in_3',222,218,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_4 = CreText('in_4',222,248,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var cau_dung = CreText('cau_dung',422,42,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',465,41,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',507,43,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',85,293,362,50,"good job",'rgba(0,0,0,0)','#ffffff','#80ff00','#ffffff','',24,'Arial','Bold Italic','center','middle',12,'0.00','2','2',0,'rgba(0,0,0,0)','#ffffff','0','0','#e6e6fa','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,sc,in_5,Text_3,in_0,sbc,Text_1,btSubmit,in_1,in_2,in_3,in_4,cau_dung,cau_sai,diem,msg);
stage.add(Page_1);
InitLacVietScript();
};
