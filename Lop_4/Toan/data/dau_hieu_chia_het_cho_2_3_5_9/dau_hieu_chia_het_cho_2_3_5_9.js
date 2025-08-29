folder_Resource ='data/dau_hieu_chia_het_cho_2_3_5_9';
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var adiv =[2,3,5,6,9] ;
var adivText =["Các số có tận cùng là 0,2,4,6,8 thì chia hết cho 2","Các số có tổng các chữ số chia hết cho 3 thì chia hết cho 3","Các số có tận cùng là không hoặc 5 thì chia hết cho 5","Các số chia hết cho 2 và cho 3 thì số đó chia hết cho 6","Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9"] ;
var k  =0;
var numbertrue="";
function CreateQuestion()
{

k = Random(5);
SetText("","cau_hoi","Trong các số sau số nào chia hết cho " + adiv[k] + "?");

numbertrue = Random(9000) + 1000;
 while(numbertrue%adiv[k]!=0 )
          {
	 numbertrue = Random(9000) + 1000;
          }
var index = Random(4);
SetText("","ch_"+index ,numbertrue);

for(var i =0 ; i< 4 ; i++)
{
      if(i!=index)
	{
		var xxx = Random(9000) + 1000;			
		while(xxx % adiv[k] ==0)
		{							 
			xxx = Random(9000) + 1000;
		}
		SetText("","ch_"+i ,xxx);
	}
        SetColorEx("","ch_"+i,"#f2f2f2");
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

tl= GetText("","");
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
	if(Number(tl)%adiv[k]==0)
	{
			_cSubmit ++;
			SetFontColor("","title",_trueColor);		
			_score++;
			SetText( "", "title", "☺ Đúng ☺.");	
			SetText("","so_dung", _score + " Điểm");
			SetColorEx("","score"+_cSubmit,_trueColor);
			SetText("","score"+_cSubmit,_score);
			PlaySound("sound_good");
	}
	else
	{
		SetFontColor("","title",_falseColor);
		PlaySound("sound_bad");
		SetText("","title","☻Sai ☻");
		var txt = "";
		
		if( adiv[k] ==3 ||  adiv[k]==9)
		{
		for(var i= 0; i<4;i++)
		  txt = txt + subString(numbertrue,i,1) + " + ";
		txt  = trimStr(txt);
		txt  = rtrimStr(txt,'+');
		var sumN = ExecAsThread(txt);		
		txt  = txt  + " = " + sumN + " : " + adiv[k] + " = " + sumN/ adiv[k] + " dư 0.";
		}	
		if (adiv[k] == 2)
		     txt = "là số chẵn";	
		if (adiv[k] == 6)
		     txt = "chia hết cho 2 và cho 3";
		if (adiv[k] == 5)
		     txt = "tận cùng là số " + subString(numbertrue,3,1);		

		SetText("","so_dung","Số đúng là: " + numbertrue +" : "+txt);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;

	}
	SetText("","help",adivText[k]);	

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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,650,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var abcdef = CreText('abcdef',-1,-1,650,60,"Dấu hiệu chia hết cho 2, 3, 5, 6, 9",'#8000ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',38,148,127,38,"60°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_1 = CreText('ch_1',189,149,127,38,"135°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_2 = CreText('ch_2',340,148,127,38,"90°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var ch_3 = CreText('ch_3',491,148,127,38,"30°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var btSubmit = CreText('btSubmit',253,206,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var title = CreText('title',47,258,581,143,"good job",'#ffffe0','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','top',11,'0.00','10','0',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var cau_hoi = CreText('cau_hoi',27,84,601,43,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var help = CreText('help',61,298,561,55,"Các số có tận cùng là 0,2,4,6,8 thì chia hết cho 2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_dung = CreText('so_dung',74,342,528,48,"1234",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:585,height:174});
msg.add(title,help,so_dung);
Page_1.add(Page_1_Backrounnd,abcdef,ch_0,ch_1,ch_2,ch_3,btSubmit,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,cau_hoi,msg);
stage.add(Page_1);
InitLacVietScript();
};
