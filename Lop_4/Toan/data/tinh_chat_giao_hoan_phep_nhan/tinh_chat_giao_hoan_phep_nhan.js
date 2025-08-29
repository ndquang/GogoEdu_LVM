folder_Resource ='data/tinh_chat_giao_hoan_phep_nhan';
var kq = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
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
AllowEditText("","ch_"+tl,1);
SetBorder("","ch_"+tl, _normalColor ,1);
SetText("","ch_"+tl,"");
_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",1);		       
InvalidateObj("","");
  return;
}


function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);	
	_cSubmit =0;
	SetShowObject("","msg",0);	
	InvalidateObj("","");
}
function   ChamDiem()
{
	if(GetText("","ch_"+tl)==kq)
	{
			_cSubmit ++;
			SetFontColor("","msg",_trueColor);		
			_score++;
			SetText( "", "msg", "Đúng ☺☺☺.\r\n" + _score + " Điểm");	
			SetColorEx("","score"+_cSubmit,_trueColor);
			SetText("","score"+_cSubmit,_score);
			PlaySound("sound_good");

	}
	else
	{
		SetFontColor("","msg",_falseColor);
			PlaySound("sound_bad");
			SetText("","msg","Sai ☻☻☻");
			_score--;	
			SetColorEx("","score"+_cSubmit ,"#dddddd");
			SetText("","score"+_cSubmit ,"");
			_cSubmit --;

	}
           UpdateScore( _score);
		if(_cSubmit== 0 || _score<0 || _cSubmit>10){
		InitScore();
	}	
	_bTestAndCreat= true;
	SetText("","btSubmit","Next");	
	SetShowObject("","msg",1);
	InvalidateObj("","");

}
/*----------------------------------*/
function Page_1()
{
SetShowObject("","btSubmit",0);	
InitScore();
CreateQuestion();
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
var ch_0 = CreText('ch_0',84,171,87,38,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_1 = CreText('ch_1',210,171,87,38,"135°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_2 = CreText('ch_2',336,171,87,38,"90°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_3 = CreText('ch_3',464,171,87,38,"9999",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',391,304,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var dot = CreText('dot',173,172,36,36,"x",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',134,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',171,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',208,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',245,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',282,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',319,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',356,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',393,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',430,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',471,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',297,171,36,36,"=",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',425,169,36,36,"x",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',108,145,496,88,"good job",'rgba(230,230,250,0.89)','#ffffff','#80ff00','#ffffff','',48,'Arial','Bold Italic','center','middle',12,'0.00','2','2',1,'#0000ff','rgba(230,230,250,0.89)','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,ch_0,ch_1,ch_2,ch_3,btSubmit,dot,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,Text_1,Text_2,msg);
stage.add(Page_1);
InitLacVietScript();
};
