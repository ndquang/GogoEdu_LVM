folder_Resource ='data/chia_mot_cho_mot_tich';
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var a_input=["",""];
function CreateQuestion()
{

var a = Random(9)+1;
var b = Random(9)+1;
while(a == b)
	b = Random(9)+1;

 a_input[0] = Random(9)+1;
var c =  a_input[0]* a *b;

SetText("","ch", c + " : " + "("+a +" x " + b + ") = ");
for(var i =0 ; i< 1;i++)
	{
		SetFontColor("","in_"+i,"#ffffff");
		AllowEditText("","in_"+i,1);
		SetText("","in_"+i,"");
	}

_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",1);		
SetText("","btSubmit","Submit");	       

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
	var kq = true;
	for(var i =0 ; i< 1;i++)
	{
		if(GetText("","in_"+i)==a_input[i])			
			SetFontColor("","in_"+i,"#00ff00");	
		else {
			SetFontColor("","in_"+i,"#ff0000");
			 kq = false;;
		       }
		AllowEditText("","in_"+i,0);
	}

	if(kq == true)
	{
			_cSubmit ++;
			SetFontColor("","msg",_trueColor);		
			_score++;
			SetText( "", "msg", "☺Đúng ☺\r\n" + _score + " Điểm");	
			SetColorEx("","score"+_cSubmit,_trueColor);
			SetText("","score"+_cSubmit,_score);
			PlaySound("sound_good");

	}
	else
	{
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_bad");
			SetText("","msg","Sai, kết quả đúng là:\r\n" + GetText("","ch") +" "+ a_input[0]);
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
SetDigitEditText("","in_0","number");
SetDigitEditText("","in_1","number");
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
 width: 450,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,320,'','#8080c0','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8080c0','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',1,0,449,60,"Tính giá trị của biểu thức",'#424284','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#424284','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch = CreText('ch',69,104,236,39,"90 : 8 = ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',315,104,71,39,"99",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',152,155,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score1 = CreText('score1',38,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',75,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',112,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',149,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',186,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',223,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',260,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',297,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',334,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',375,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',70,212,340,77,"good job",'rgba(66,66,132,1.02)','#ffffff','#80ff00','#ffffff','',22,'Arial','Normal','center','middle',12,'0.00','2','2',1,'#ffffff','rgba(66,66,132,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,ch,in_0,btSubmit,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,msg);
stage.add(Page_1);
InitLacVietScript();
};
