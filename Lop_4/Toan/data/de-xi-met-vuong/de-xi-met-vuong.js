folder_Resource ='data/de-xi-met-vuong';
var kq = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var denta = 0;

var _clearColor = "#ffffff";
var _moveColor = "#ccebff";
var _upColor = "#0099ff";
var objectDown= "";
var objectUp = "";
var addObject = true;
var x1,y1,x2,y2;
function  DownRec()
{
if(objectDown != "")
return;
  var curColor = GetColor("","","abc");
 if(curColor == _upColor)
	addObject  = false;
  else addObject  = true;
 SetColorEx("", "",_moveColor );

 objectDown = GetName("");
 InvalidateObj("", "");
x1= subString(objectDown,1,1);
y1= rightStr(objectDown,1);
x2= x1;
y2=y1;
}
function  UpRec(){
    objectDown = "";
	  for (var x = x1; x <= x2; x++)
			for (var y = y1; y <= y2; y++) 
		 {
			  if(addObject )
        			SetColorEx("","_"+ x+"_" + y,_upColor);
			else SetColorEx("","_"+ x+"_" + y,_clearColor );
    		}
_bTestAndCreat = false;
SetShowObject("", "btSubmit", 1);
SetText("", "btSubmit", "Submit");
InvalidateObj("", "");
}

function  MoveRec(){
    if(objectDown !="")
	{
		var  curObj= GetName("");
		x1= subString(objectDown,1,1);
		y1= rightStr(objectDown,1);
	
		x2= subString(curObj,1,1);
		y2= rightStr(curObj,1);
		if(x1>x2)
		    {
			var tam = x1;
			x1= x2;
			x2 = tam;
		    }
		if(y1>y2)
		    {
			var tam = y1;
			y1= y2;
			y2 = tam;
		    }
    		   for (var x = 0; x < 10; x++)
		for (var y = 0; y < 10; y++) 
		 {
			var objValidate = "_"+x+"_" + y;
			if(GetColor("",objValidate,"abc")==_moveColor)
        			SetColorEx("", x+"_" + y,_clearColor);
    		}

		  for (x = x1; x <= x2; x++)
			for (y = y1; y <= y2; y++) 
		 {
        			SetColorEx("","_"+ x+"_" + y,_moveColor);
    		}
		InvalidateObj("", "");
	}
}

function  CreateQuestion()
{
            for (var x = 0; x < 10; x++)
	for (var y = 0; y < 10; y++) 
		 {
			SetBorder("", "_"+x+"_" + y, _upColor);
        			SetColorEx("", "_"+x+"_" + y,_clearColor);
    		}
    SetShowObject("", "btSubmit", 0);
    SetShowObject("", "msg", 0);
    kq = (Random(9)+1) * (Random(9)+1)  ;
    SetText("","ch","Vẽ hình chữ nhật, hoặc hình vuông có diện tích "+kq+"cm²");
    InvalidateObj("", "");
     _score = GetVer();
    return;
}


function  InitScore()
{
    for (var i = 1; i <= 10; i++) {
        SetColorEx("", "score" + i, "#dddddd");
        SetText("", "score" + i, "");
    }   
    InvalidateObj("", "");
    SetText("", "score1", _score);
    _cSubmit = 0;
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
}


var tl="";
function  ChamDiem()
{
         var x=0, y=0, bFind = false;
          while(y < 10 && !bFind)
	{
	x=0;
	while(x < 10&&!bFind ) 
		 {
			if(GetColor("","_"+y+"_" + x,"abc")==_upColor)
				{
				       bFind = true;
				       break;;
				}
		   x++;
    		}
	      if(bFind)
		break;
	      y++;
	}
   tl =0;
   for (var j = y; j < 10; j++)
	for (var i = x; i < 10; i++) 
		 {
			if(GetColor("","_"+j+"_" + i,"abc")==_upColor)
				 tl++;
			else break;
    		}
     var countelse = 0;
    for (j = 0; j < 10; j++)
        for (i = 0; i < 10; i++) {
            if (GetColor("", "_" + j + "_" + i, "abc") == _upColor)
                countelse++;          
        }
    if (tl == kq && bFind && countelse==kq ) {
        _cSubmit++;
        SetFontColor("", "msg", _trueColor);
        _score++;
        SetText("", "msg", "Đúng ☺☺☺.\r\n" + _score + " Điểm");
        SetColorEx("", "score" + _cSubmit, _trueColor);
        SetText("", "score" + _cSubmit, _score);
        PlaySound("sound_good");

    }
    else {
        SetFontColor("", "msg", _falseColor);
        PlaySound("sound_bad");
        SetText("", "msg", "Sai ☻☻☻");
        _score--;
        SetColorEx("", "score" + _cSubmit, "#dddddd");
        SetText("", "score" + _cSubmit, "");
        _cSubmit--;
    }
   UpdateScore(_score);
    if (_cSubmit == 0 || _score < 0 || _cSubmit > 10) {
        InitScore();
    }
    _bTestAndCreat = true;
    SetText("", "btSubmit", "Next →");
    SetShowObject("", "msg", 1);
    InvalidateObj("", "");

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
 width: 500,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',339,99,149,269,"→1dm²  = 100 cm² ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',0,0,500,44,"MỘT ĐỀ-XI-MÉT VUÔNG (dm²)",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',355,111,112,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score1 = CreText('score1',74,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',111,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',148,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',185,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',222,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',259,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',296,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',333,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',370,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',411,31,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',5,'0.00','15','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0_0 = CreText('0_0',53,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_1 = CreText('0_1',80,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_2 = CreText('0_2',107,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_3 = CreText('0_3',134,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_4 = CreText('0_4',161,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_5 = CreText('0_5',188,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_6 = CreText('0_6',215,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_7 = CreText('0_7',242,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_8 = CreText('0_8',269,98,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _0_9 = CreText('0_9',296,98,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_0_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_0_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_0 = CreText('1_0',53,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_1 = CreText('1_1',80,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_2 = CreText('1_2',107,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_3 = CreText('1_3',134,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_4 = CreText('1_4',161,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_5 = CreText('1_5',188,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_6 = CreText('1_6',215,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_7 = CreText('1_7',242,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_8 = CreText('1_8',269,125,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _1_9 = CreText('1_9',296,125,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_1_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_1_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_0 = CreText('2_0',53,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_1 = CreText('2_1',80,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_2 = CreText('2_2',107,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_3 = CreText('2_3',134,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_4 = CreText('2_4',161,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_5 = CreText('2_5',188,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_6 = CreText('2_6',215,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_7 = CreText('2_7',242,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_8 = CreText('2_8',269,152,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _2_9 = CreText('2_9',296,152,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_2_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_2_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_0 = CreText('3_0',53,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_1 = CreText('3_1',80,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_2 = CreText('3_2',107,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_3 = CreText('3_3',134,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_4 = CreText('3_4',161,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_5 = CreText('3_5',188,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_6 = CreText('3_6',215,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_7 = CreText('3_7',242,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_8 = CreText('3_8',269,179,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _3_9 = CreText('3_9',296,179,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_3_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_3_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_0 = CreText('4_0',53,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_1 = CreText('4_1',80,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_2 = CreText('4_2',107,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_3 = CreText('4_3',134,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_4 = CreText('4_4',161,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_5 = CreText('4_5',188,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_6 = CreText('4_6',215,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_7 = CreText('4_7',242,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_8 = CreText('4_8',269,206,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _4_9 = CreText('4_9',296,206,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_4_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_4_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_0 = CreText('5_0',53,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_1 = CreText('5_1',80,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_2 = CreText('5_2',107,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_3 = CreText('5_3',134,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_4 = CreText('5_4',161,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_5 = CreText('5_5',188,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_6 = CreText('5_6',215,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_7 = CreText('5_7',242,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_8 = CreText('5_8',269,233,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _5_9 = CreText('5_9',296,233,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_5_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_5_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_0 = CreText('6_0',53,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_1 = CreText('6_1',80,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_2 = CreText('6_2',107,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_3 = CreText('6_3',134,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_4 = CreText('6_4',161,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_5 = CreText('6_5',188,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_6 = CreText('6_6',215,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_7 = CreText('6_7',242,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_8 = CreText('6_8',269,260,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _6_9 = CreText('6_9',296,260,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_6_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_6_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_0 = CreText('7_0',53,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_1 = CreText('7_1',80,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_2 = CreText('7_2',107,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_3 = CreText('7_3',134,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_4 = CreText('7_4',161,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_5 = CreText('7_5',188,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_6 = CreText('7_6',215,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_7 = CreText('7_7',242,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_8 = CreText('7_8',269,287,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _7_9 = CreText('7_9',296,287,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_7_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_7_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_0 = CreText('8_0',53,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_1 = CreText('8_1',80,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_2 = CreText('8_2',107,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_3 = CreText('8_3',134,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_4 = CreText('8_4',161,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_5 = CreText('8_5',188,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_6 = CreText('8_6',215,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_7 = CreText('8_7',242,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_8 = CreText('8_8',269,314,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _8_9 = CreText('8_9',296,314,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_8_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_8_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_0 = CreText('9_0',53,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_1 = CreText('9_1',80,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_2 = CreText('9_2',107,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_3 = CreText('9_3',134,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_4 = CreText('9_4',161,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_5 = CreText('9_5',188,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_6 = CreText('9_6',215,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_7 = CreText('9_7',242,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_8 = CreText('9_8',269,341,27,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var _9_9 = CreText('9_9',296,341,29,27,"",'#ccffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#51a8ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpRec();
  return;
}
 );
_9_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownRec();
  return;
}
 );
_9_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
MoveRec();
  return;
}
 );
var Text_2 = CreText('Text_2',330,341,88,26,"→ 1 cm² ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',57,177,268,75,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var ch = CreText('ch',17,61,456,32,"ĐỀ-XI-MÉT VUÔNG",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,Text_3,btSubmit,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,_0_0,_0_1,_0_2,_0_3,_0_4,_0_5,_0_6,_0_7,_0_8,_0_9,_1_0,_1_1,_1_2,_1_3,_1_4,_1_5,_1_6,_1_7,_1_8,_1_9,_2_0,_2_1,_2_2,_2_3,_2_4,_2_5,_2_6,_2_7,_2_8,_2_9,_3_0,_3_1,_3_2,_3_3,_3_4,_3_5,_3_6,_3_7,_3_8,_3_9,_4_0,_4_1,_4_2,_4_3,_4_4,_4_5,_4_6,_4_7,_4_8,_4_9,_5_0,_5_1,_5_2,_5_3,_5_4,_5_5,_5_6,_5_7,_5_8,_5_9,_6_0,_6_1,_6_2,_6_3,_6_4,_6_5,_6_6,_6_7,_6_8,_6_9,_7_0,_7_1,_7_2,_7_3,_7_4,_7_5,_7_6,_7_7,_7_8,_7_9,_8_0,_8_1,_8_2,_8_3,_8_4,_8_5,_8_6,_8_7,_8_8,_8_9,_9_0,_9_1,_9_2,_9_3,_9_4,_9_5,_9_6,_9_7,_9_8,_9_9,Text_2,msg,ch);
stage.add(Page_1);
InitLacVietScript();
};
