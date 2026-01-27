folder_Resource ='/data/tim_hai_so_khi_biet_tong_va_hieu_co_loi_van';
var lstQuestion = ["",""];
var cntQst = 0;
var idQst = 0;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var _textSpeak="";
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";

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

function  InitScore()
{	
	GetVer("callBackGetVer");
}

var soTong, soHieu;
var i0,i1,i2,i3,i4;
var aAnswer = ["","","","",""];
var aAnswer1 = ["","","","",""];
var aAnswer2 = ["","","","",""];
var _bTestAndCreat = false;
function  ChamDiem()
{
	if(idQst==cntQst){
		SetText( "", "msg", "Bạn đã hoàn thành bài học này.");	
		SetShowObject("","msg",1);
		return;
	}
	var _check = true;	
	var ipValue="";	
		for(var k =0 ; k<=4;k++)
		{
		var _i = "i_"+k;		
		ipValue = replaceStr(GetText("",_i)," ",'');
		if(ipValue=="")
		{
		SetFontColor("","msg", _normalColor);
		SetText("","msg","Bạn chưa trả lời hết.");
		SetShowObject("","msg",1);
		return;
		}
		if(ipValue == aAnswer[k] || ipValue == aAnswer1[k] || ipValue == aAnswer2[k])
			SetFontColor("",_i,_trueColor);
		else {
			SetFontColor("",_i,_falseColor);
			_check = false;
		}
		AllowEditText("",_i,0);
		}
									
	if(_check == true)
		{	
			 _cDung++;
      	  SetFontColor("", "msg", _trueColor);
    	    SetText("", "msg", "   Ðúng");
        	PlaySound("sound_good");
		}
		else {//sai
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
	_bTestAndCreat  = true;
	SetText("","btSubmit","Câu tiếp »");	
	SetShowObject("","btSubmit",1);	
	SetShowObject("","msg",1);
	idQst ++;
	InvalidateObj("","");

}

function  CreateQuestion()
{
	if(idQst ==cntQst){
		SetText( "", "msg", "Bạn đã hoàn thành bài học này.");	
		SetShowObject("","msg",1);
		return;
	}
	var _allStrQuestion = lstQuestion[idQst];
        var res = _allStrQuestion.split("|");
        var _index = res[0];
       var _cauhoi = res[1];
       soTong=  StringtoNumber(res[4]);
       soHieu= StringtoNumber(res[5]);
       PlaySound("sound_start");   
    SetText("","_cauhoi", _cauhoi);
	for(var i= 0; i<=4;i++){
	SetFontColor("","i_"+i,_normalColor );
	SetText("","i_"+i,"");
	AllowEditText("","i_"+i,1);
		SetText("","dv_"+i, res[8]);

	}
	   if(_index == 0)
	   {				
		SetText("","c_0","Hai lần "+ res[2]);
		SetText("","c_1",res[2]);
		SetText("","c_2",res[3]);	
		SetText("","c_3",res[6]);	
		SetText("","c_4",res[7]);	

		var tem = soTong + soHieu;
		aAnswer[3]=  tem/2; //so lon
		aAnswer[4] = aAnswer[3]- soHieu; // so be
		aAnswer[0]= soTong + "+" + soHieu + "="+tem;
		aAnswer[1]= tem+ ":" + "2" + "="+aAnswer[3];
		aAnswer[2]= aAnswer[3]+ "-" + soHieu + "="+aAnswer[4];	
		aAnswer1[2]= soTong + "-" + aAnswer[3]+ "="+aAnswer[4];
	   }
		else if(_index == 1)
	   {		
		SetText("","c_0","Hai lần "+ res[2]);
		SetText("","c_1",res[2]);
		SetText("","c_2",res[3]);	
		SetText("","c_3",res[6]);	
		SetText("","c_4",res[7]);	

		var tem = soTong - soHieu;
		aAnswer[3]=  tem/2; //so be
		aAnswer[4] = aAnswer[3]+ soHieu; // so lon
		aAnswer[0]= soTong + "-" + soHieu + "="+tem;
		aAnswer[1]= tem+ ":" + "2" + "="+aAnswer[3];
		aAnswer[2]= aAnswer[3]+ "+" + soHieu + "="+aAnswer[4];
		aAnswer1[2]= soTong + "-" + aAnswer[3]+ "="+aAnswer[4];
		aAnswer2[2]= soHieu + "+" + aAnswer[3]+ "="+aAnswer[4];		
	   }
	  Speak(_cauhoi,"VN");
          	SetShowObject("","msg",0);	
	       SetText("","btSubmit","Kết quả");
	       _bTestAndCreat  = false;
           InvalidateObj("","");

}
function Page_1()
{
var s_content = GetTextFromID("ID_QUETIONS") ;
lstQuestion = s_content.match(/[^\r\n]+/g);
cntQst = Length(lstQuestion );
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
 width: 600,
 height: 600 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,600,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var _cauhoi = CreText('_cauhoi',0,1,601,106,"Tổng của hai số là %. Hiệu của hai số là %. Tìm hai số đó?",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
_cauhoi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak( GetText("",""),"VN");
  return;
}
 );
var cau_dung = CreText('cau_dung',451,88,34,35,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#32cd32','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',500,88,34,35,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',549,88,34,35,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',199,479,168,50,"Kết quả",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_1 = CreText('Text_1',224,124,94,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold Italic','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_1 = CreText('c_1',49,224,543,29,"Số bé là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_2 = CreText('c_2',49,292,543,29,"Số lớn là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_3 = CreText('c_3',62,396,257,29,"xxxxx",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_4 = CreText('c_4',63,434,260,29,"yyyyy",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_1 = CreText('i_1',91,260,198,24,"0000 : 2 = 0000",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_2 = CreText('i_2',91,331,198,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_3 = CreText('i_3',329,396,67,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_4 = CreText('i_4',333,434,67,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_0 = CreText('c_0',49,156,543,29,"Số bé là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_0 = CreText('i_0',91,190,198,24,"0000 + 0000 = 0000",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',180,364,101,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Italic','center','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_0 = CreText('dv_0',297,190,97,24,"(met)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_1 = CreText('dv_1',297,260,97,24,"0000 : 2 = 0000",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_2 = CreText('dv_2',297,331,97,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_3 = CreText('dv_3',410,396,97,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_4 = CreText('dv_4',410,434,97,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',55,248,505,79,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',12,'0.00','2','2',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
  return;
}
 );
Page_1.add(Page_1_Backrounnd,_cauhoi,cau_dung,cau_sai,diem,btSubmit,Text_1,c_1,c_2,c_3,c_4,i_1,i_2,i_3,i_4,c_0,i_0,Text_3,dv_0,dv_1,dv_2,dv_3,dv_4,msg);
stage.add(Page_1);
InitLacVietScript();
};
