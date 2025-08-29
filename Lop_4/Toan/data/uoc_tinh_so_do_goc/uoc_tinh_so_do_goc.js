folder_Resource ='data/uoc_tinh_so_do_goc';
var kq = 0;

var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;

function CreateQuestion()
{
var angle = [30,45,60,90,120,150,180];
RotateObj("","truc_y",0);
var index = Random(7);
kq= angle[index ];

RotateObj("","truc_y",-kq);
var abcd = Random(4);
var cauhoi = ["","","",""];
cauhoi[abcd] = kq;
 angle[index ] = "";
for(var k =0 ; k< 4 ; k++)
{
   if(cauhoi[k]=="")
  {
       var x = Random(7);
        while(angle[x]=="")
	{
		x = Random(7);
	}
         cauhoi[k] = angle[x];
          angle[x] ="";
  }
SetText("","ch_"+k,cauhoi[k]+"°");
SetColorEx("","ch_"+k,"#f2f2f2");
}
_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",0);		       
InvalidateObj("","");
  return;
}
/*----------------------------------*/
var tl = "";
function  Select()
{
if(_bTestAndCreat)
return;

tl= rtrimStr(GetText("",""),"°");
for(var k =0 ; k< 4 ; k++)
{
SetColorEx("","ch_"+k,"#f2f2f2");
}
_bTestAndCreat= false;
SetColorEx("","","#33ccff");
SetShowObject("","btSubmit",1);	
SetText("","btSubmit","OK");
   InvalidateObj("","");

}
/*----------------------------------*/

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
	if(tl==kq)
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
var Text_3 = CreText('Text_3',-1,-1,650,60,"Số đo của góc này là bao nhiêu? Chọn ước tính tốt nhất.",'#8000ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',40,251,127,38,"60°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_1 = CreText('ch_1',191,252,127,38,"135°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_2 = CreText('ch_2',342,251,127,38,"90°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_3 = CreText('ch_3',493,251,127,38,"30°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var truc_y = CreText('truc_y',205,213,200,10,"",'#800080','#800080','#ffffff','#ffffff','ID_IMAGE2.PNG',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#800080','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',466,327,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var truc_x = CreText('truc_x',205,213,200,10,"",'#800080','#800080','#ffffff','#ffffff','ID_IMAGE2.PNG',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#800080','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var dot = CreText('dot',300,213,10,10,"",'#800080','#800080','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#800080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var msg = CreText('msg',61,102,496,88,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,ch_0,ch_1,ch_2,ch_3,truc_y,btSubmit,truc_x,dot,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,msg);
stage.add(Page_1);
InitLacVietScript();
};
