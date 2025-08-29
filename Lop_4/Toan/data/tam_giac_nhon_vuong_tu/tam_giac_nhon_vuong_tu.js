folder_Resource ='data/tam_giac_nhon_vuong_tu';
var kq = 0;
var letters =  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var denta = 0;
function  getRandomColor() {
   var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[ Random(16)];
  }
  return color;
}
function CreateQuestion()
{
       var x = Random(100);
       var y =  Random(100);
                kq =  Random(3);
   	if (kq==0) // nhon
	{
		if(x<y)
		{
			var tam = x;
			x=y;
			y= tam;
		}
	}
  	else if (kq==1) // vuong goc
	{
		x = y;
	}
	else { // tu
		if(x>y)
		{
			var tam = x;
			x=y;
			y= tam;
		}
	}
	/*
       PosX("", "tam_giac", x);
       PosY("", "tam_giac", y);     
*/
    _bTestAndCreat = false;
    for (var k = 0; k < 3; k++) {
        SetColorEx("", "ch_" + k, "#f2f2f2");
    }
    SetColorEx("","tam_giac",getRandomColor());
    RotateObj("","","tam_giac",Random(180));
    SetShowObject("", "btSubmit", 0);
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
    return;
}
/*----------------------------------*/
var tl = "";
function  Select( yn)
    {
        if(_bTestAndCreat)
return;

tl = yn;
for (var k = 0; k < 2; k++) {
    SetColorEx("", "ch_" + k, "#f2f2f2");
}
_bTestAndCreat = false;
SetColorEx("", "", "#33ccff");
SetShowObject("", "btSubmit", 1);
SetText("", "btSubmit", "OK");
InvalidateObj("", "");

}
/*----------------------------------*/

function  InitScore()
{
    for (var i = 1; i <= 10; i++) {
        SetColorEx("", "score" + i, "#dddddd");
        SetText("", "score" + i, "");
    }
    //_score = GetVer();
    SetText("", "score1", _score);
    _cSubmit = 0;
    SetShowObject("", "msg", 0);
    InvalidateObj("", "");
}
function  ChamDiem()
{
    if (tl == kq) {
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
   // UpdateScore(_score);
    if (_cSubmit == 0 || _score < 0 || _cSubmit > 10) {
        InitScore();
    }
    _bTestAndCreat = true;
    SetText("", "btSubmit", "Next");
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
 width: 650,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,650,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var ch = CreText('ch',-1,-1,650,60,"Tam giác này là tam giác gì?",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(ch);
var ch_0 = CreText('ch_0',100,252,127,38,"Nhọn",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(0);
  return;
}
 );
Page_1.add(ch_0);
var ch_1 = CreText('ch_1',283,252,127,38,"Vuông",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(1);
  return;
}
 );
Page_1.add(ch_1);
var btSubmit = CreText('btSubmit',260,318,147,35,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_1.add(btSubmit);
var score1 = CreText('score1',134,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score1);
var score2 = CreText('score2',171,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score2);
var score3 = CreText('score3',208,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score3);
var score4 = CreText('score4',245,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score4);
var score5 = CreText('score5',282,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score5);
var score6 = CreText('score6',319,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score6);
var score7 = CreText('score7',356,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score7);
var score8 = CreText('score8',393,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score8);
var score9 = CreText('score9',430,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score9);
var score10 = CreText('score10',471,45,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(score10);
var tam_giac = CreText('tam_giac',180,99,200,116,"",'#00ccff','#00ccff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',2,'#000000','#00ccff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(tam_giac);
var ch_2 = CreText('ch_2',451,252,127,38,"Tù",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(2);
  return;
}
 );
Page_1.add(ch_2);
var msg = CreText('msg',35,104,496,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(msg);
stage.add(Page_1);
InitLacVietScript();
};
