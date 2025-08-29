folder_Resource ='data/to_mau_phan_so';
var _score = 0;
var _cSubmit=0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["",""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msgtext",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
       var so1 = Random(9)+2;
       var so0 = Random(so1)+1; 
      arrayKq[0] = so0;	
      arrayKq[1] = so1;	
     for(var i =1; i<=10;i++)
	{
		if(i<=so1)
			SetShowObject("","c"+i,1);	
		else
			SetShowObject("","c"+i,0);
		SetColorEx("","c"+i,"#ffffff");	
	}
        
       SetText("","in_0",arrayKq[0]);
      SetText("","in_1",arrayKq[1]);
               		_score =GetVer();					
		SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msgtext",0);	
             	InvalidateObj("","");
}

function  ChamDiem()
{	
	var kq = true;
	var lenkq=  0;
	for(var i=1;i<=arrayKq[1];i++)
	{
		  var cur = GetColor("","c"+i,"value");
		   if(cur == "#0080ff")
			lenkq = lenkq+1;
	}

	if(lenkq ==arrayKq[0]){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msgtext", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		SetFontColor("","msgtext","#28B463");
		UpdateScore( _score);
	         }
	else{
		SetText("","msgtext","Không chính xác, bạn phải tô màu " +arrayKq[0] + " ô vuông");
		PlaySound("sound_not");
		SetFontColor("","msgtext","#FF5733");		
		_score--;			
		}
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetShowObject("","msgtext",1);
	InvalidateObj("","");
}

function  ChangeColor()
{
   if(_bTestAndCreat== true)
	return;
    var cur = GetColor("","","value");
    if(cur == "#ffffff")
	SetColorEx("","","#0080ff");
    else SetColorEx("","","#ffffff");
InvalidateObj("","");

}
function Page_1()
{
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',277,63,52,83,"",'rgba(244,244,244,0.89)','#ebebeb','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c6e2ff','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c1 = CreText('c1',249,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c2 = CreText('c2',302,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c3 = CreText('c3',196,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c4 = CreText('c4',355,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c5 = CreText('c5',143,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c6 = CreText('c6',408,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c7 = CreText('c7',90,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c8 = CreText('c8',461,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var c9 = CreText('c9',37,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var title = CreText('title',0,0,598,58,"  Tô màu phân số",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',278,70,52,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',248,236,116,39,"Submit",'#80ff00','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var score = CreText('score',545,6,47,47,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',278,108,52,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c10 = CreText('c10',515,164,52,51,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeColor();
  return;
}
 );
var Text_2 = CreText('Text_2',36,90,224,32,"Tô màu phân số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',351,71,56,57,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(arrayKq[0]+ " phần "+ arrayKq[1],"VN")
  return;
}
 );
var msgtext = CreText('msgtext',106,155,394,69,"good job",'rgba(255,255,224,1.02)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#009300','rgba(255,255,224,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msgtext.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,c1,c2,c3,c4,c5,c6,c7,c8,c9,title,in_0,check,score,in_1,c10,Text_2,sound,msgtext);
stage.add(Page_1);
InitLacVietScript();
};
