folder_Resource ='/data/rotate_puzzle';
var totalMinClick = 0;
var currentClick = 0;
var i_score = 0;
var i_level = 2;
function  isCompleted() {
 	var obj = "";
	for(var r =0 ;r< i_level;r++)
	for(var c=0 ;c< i_level;c++)
	{
		 obj = "_"+r+"_"+c;
		var curRotate = round(GetRotateObj("",obj));
		 if(curRotate  % 360 != 0)
		 return false;
	}
  return true;
}

function  OffsetObject()
{
    var obj = "";

    for (var r = 0; r < 4; r++)
    for (var c = 0; c < 4; c++)
    {
        obj = "_" + r + "_" + c;

        var w = GetWidth("", obj);
        var h = GetHeight("", obj);

        var xf = w / 2;
        var yf = h / 2;

        var oldX = GetLeft("", obj);
        var oldY = GetTop("", obj);

        // set offset center
        Offset("", obj, xf, yf);

        // bù lại vị trí
        SetRect("", obj, oldX + xf, oldY + yf, -1, -1);
    }
}

function  CalculateScore()
{
    var maxScore = 0;

    if(i_level == 2) maxScore = 5;
    else if(i_level == 3) maxScore = 10;
    else if(i_level == 4) maxScore = 20;

    var score = maxScore;

    if(currentClick > totalMinClick)
    {
        var extra = currentClick - totalMinClick;
        PlaySound("SND_LEVEL");
        // mỗi 1 click dư trừ 1 điểm
        score -= extra;
    }
    else  PlaySound("SND_WIN");

    if(score < 1) score = 1;

    return score;
}

function  checkWin()
{
    if(!isCompleted()) return;
    var score = CalculateScore();

    SetText("","msg","🏆 Cấp độ " +i_level+"🏆\r\n Score: "+score+"/10");
    SetShowObject("","msg",true);

    UpdateScore(score, i_level + " x " + i_level);
}

function   StartGame()
{
	var obj = "";
	totalMinClick = 0;
	currentClick = 0;
	var img = Random(2)+1;
	if(i_level==3)
		img = img +2;
	else if(i_level==4)
		img = img +4;
	var imageid = "i"+img;
	SetRsc("","preview",imageid);
	var id = imageid +"_"+i_level;
	for(var r =0 ;r< 4;r++)
	for(var c=0 ;c< 4;c++)
	{
		 obj = "_"+r+"_"+c;
		 if(r<i_level && c < i_level)
		 {
		RotateObj("",obj,0);
	             SetColorEx("",obj,"",id +obj);
		 SetShowObject("",obj,true);
		var ro = (Random(3)+1)*90;
		var minClick = (360 - ro) % 360 / 90;
		 totalMinClick += minClick;
		RotateObj("",obj,ro,1);
		 }
		 else 
		        SetShowObject("",obj,false);
	}
	PlaySound("SND_START");
	SetShowObject("","msg",false);
	InvalidateObj("","");
}
function  UpItem()
{
	PlaySound("SND_CLICK");
	currentClick++;
	RotateObj("","",90,0.1,"checkWin()");
}

window.callBackGetVer = function callBackGetVer(_score, _note)
{
	if ( typeof _score != "undefined" && _score!=0)
	{
		i_score = _score;
		i_level = StringtoNumber(_note);
	}
	StartGame();
}

function Page_1()
{
OffsetObject();
GetVer("callBackGetVer");
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
 width: 250,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,250,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var _0_0 = CreText('_0_0',20,109,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _0_1 = CreText('_0_1',72,109,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _0_2 = CreText('_0_2',124,109,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _0_3 = CreText('_0_3',176,109,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _1_0 = CreText('_1_0',20,161,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _1_1 = CreText('_1_1',72,161,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _1_2 = CreText('_1_2',124,161,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _1_3 = CreText('_1_3',176,161,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _2_0 = CreText('_2_0',20,213,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _2_1 = CreText('_2_1',72,213,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _2_2 = CreText('_2_2',124,213,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _2_3 = CreText('_2_3',176,213,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _3_0 = CreText('_3_0',20,265,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _3_1 = CreText('_3_1',72,265,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','10','10',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _3_2 = CreText('_3_2',124,265,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var _3_3 = CreText('_3_3',176,265,52,52,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
var preview = CreText('preview',99,46,52,52,'','rgba(0,0,0,0)','','','','i1.JPG',0,'','','','',0,'0.00','0','0',2,'#c0c0c0','','2','2','','0','0','4','0',0,0, '#808080');
var msg = CreText('msg',1,160,249,57,"Rotate Puzzle",'rgba(255,228,225,0.67)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'#ffc0cb','rgba(255,192,203,0.67)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 StartGame();
}
 );
var Text_1 = CreText('Text_1',8,4,62,28,"2 x 2",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#3f7d00','#d5ffd5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_level = 2;
StartGame();
  return;
}
 );
var Text_2 = CreText('Text_2',94,4,62,28,"3 x 3",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#3f7d00','#d5ffd5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_level = 3;
StartGame();
  return;
}
 );
var Text_3 = CreText('Text_3',181,4,62,28,"4 x 4",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#3f7d00','#d5ffd5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_level = 4;
StartGame();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,_0_0,_0_1,_0_2,_0_3,_1_0,_1_1,_1_2,_1_3,_2_0,_2_1,_2_2,_2_3,_3_0,_3_1,_3_2,_3_3,preview,msg,Text_1,Text_2,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
