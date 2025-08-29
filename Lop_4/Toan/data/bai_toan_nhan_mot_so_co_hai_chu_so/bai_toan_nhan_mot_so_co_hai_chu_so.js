folder_Resource ='/data/bai_toan_nhan_mot_so_co_hai_chu_so';
var lstQuestion = ["",""];
var kq = "";
var cntQst = 0;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _index = 0;
function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","_kq","number");
	_cSubmit =0;
	
}
var autoCreateTimeout ="";
function  ChamDiem()
{
	SetShowObject("","btSubmit",0);	
	AllowEditText("","_kq",0);
	if(GetText("","_kq")==kq){
		_cSubmit ++;
		SetFontColor("","msg","#009933");		
		_score++;
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");		
 		autoCreateTimeout  = Delay("CreateQuestion()",3500);
		
		}
	else{
		SetFontColor("","msg","#ff3300");
		PlaySound("sound_not");
		SetText("","msg","Không chính xác: "+kq);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		 autoCreateTimeout  = Delay("CreateQuestion()",5000);
	}
	_index++;
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
function CreateQuestion()
{
      if(_index==cntQst+1)
	{
		SetFontColor("","msg","#F7DC6F");		
		SetText("","msg","Bạn đã hoàn thành bài học này, "+ _score + " điểm.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}
       var strCh = lstQuestion[_index];
       var _end = indexOf(strCh,"?",0);
         var _idv = indexOf(strCh,"|",0);

       if( _end>=0)
	   {
		_score =GetVer();
		 var ch = subString(strCh,0, _end +1);
		 SetText("","_cauhoi",ch);
		 kq  = subString(strCh,_end+1,_idv - _end -1);	
		var dv = subString(strCh,_idv +1 );	
		 SetText("","_dv",dv);
		 _textSpeak = ch;	
	 SetText("","_kq","");
	SetShowObject("","btSubmit",1);	
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	clearTimeout(autoCreateTimeout);
             InvalidateObj("","");		
	   }	
}
function Page_1()
{
//var s_content = $("#idContent").text().trim();
 var s_content = GetTextFromID("ID_TEXT_DATA");
lstQuestion = s_content.match(/[^\r\n]+/g);
cntQst = Length(lstQuestion );
SetDigitEditText("","_kq","number");
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var _dv = CreText('_dv',357,200,185,41,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,2,599,64,"Bài toán: Nhân một số với số có hai chữ số",'#006464','#ffffff','#fcc82c','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#006464','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,89,552,124,"Để lát nền một căn phòng có diện tích là ...m² ta cần bao nhiên viên gạch hình vuông có cạnh là ... cm, biết diện tích phần mạch vữa không đáng kể?\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',177,201,172,42,"44",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffd700','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',117,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',154,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',191,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',228,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',265,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',302,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',339,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',376,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',413,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',454,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',196,254,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var msg = CreText('msg',43,121,513,88,"good job",'rgba(255,255,255,1.02)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(255,255,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var sound = CreText('sound',536,-2,65,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(_textSpeak,"VN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,_dv,Text_1,_cauhoi,_kq,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,msg,sound);
stage.add(Page_1);
InitLacVietScript();
};
