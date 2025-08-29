folder_Resource ='data/tim_hai_so_khi_biet_tong_va_hieu_co_loi_van';
var lstQuestion = ["",""];
var cntQst = 0;
var _score = 0;
var _textSpeak="";
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
function  InitScore()
{	
	_score =GetVer();
	for(var i= 1; i<=_score;i++){
	SetColorEx("","score"+i,_trueColor);
	SetText("","score"+i,i);
	}
	for(i= _score+1; i<=cntQst ;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,i);
	}
	SetShowObject("","msg",0);
	InvalidateObj("","");	
}

var soTong, soHieu;
var i0,i1,i2,i3,i4;
var aAnswer = ["","","","",""];
var aAnswer1 = ["","","","",""];
var aAnswer2 = ["","","","",""];
var _bTestAndCreat = false;
function  ChamDiem()
{
	if(_score==cntQst){
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
			SetFontColor("","msg",_trueColor);		
			_score++;
			SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
			SetColorEx("","score"+_score,_trueColor);			
			PlaySound("sound_good");
			UpdateScore( _score);
		}
		else {//sai
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_not");
			SetText("","msg","Không chính xác");			
							
		 }	
	_bTestAndCreat  = true;
	SetText("","btSubmit","Câu tiếp »");	
	SetShowObject("","btSubmit",1);	
	SetShowObject("","msg",1);
	InvalidateObj("","");

}

function  CreateQuestion()
{
	if(_score==cntQst){
		SetText( "", "msg", "Bạn đã hoàn thành bài học này.");	
		SetShowObject("","msg",1);
		return;
	}
	var _allStrQuestion = lstQuestion[_score];
        var res = "";//_allStrQuestion.split("|");
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
// var s_content = $("#idContent").text().trim();
//lstQuestion = s_content.match(/[^\r\n]+/g);
cntQst = Length(lstQuestion );
InitScore();
CreateQuestion();
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
var _cauhoi = CreText('_cauhoi',20,4,570,109,"Tổng của hai số là %. Hiệu của hai số là %. Tìm hai số đó?",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#b3e7ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
_cauhoi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak( GetText("",""),"VN");
  return;
}
 );
var score1 = CreText('score1',120,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',157,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',194,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',231,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',268,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',305,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',342,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',379,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',416,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',457,553,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_1.add(Page_1_Backrounnd,_cauhoi,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,Text_1,c_1,c_2,c_3,c_4,i_1,i_2,i_3,i_4,c_0,i_0,Text_3,dv_0,dv_1,dv_2,dv_3,dv_4,msg);
stage.add(Page_1);
InitLacVietScript();
};
