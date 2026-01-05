folder_Resource ='/data/Unit_1';
function InitA1()
{
	SetMoveView("","Text_b",1);
	SetMoveView("","Text_h",1);
}
function  RemoveDot( texkq)
{
  if(texkq=="") return "";
 texkq= replaceStr(texkq,".","");
		texkq= replaceStr(texkq,",","");
		texkq= replaceStr(texkq,"?","");
		texkq= replaceStr(texkq,"'","");
		texkq= toLowerCase(texkq);
		texkq=trimStr(texkq);
return texkq;
}
var kq2="";
function  InitA2()
{
	if(kq2=="")
	{
	for(var i=0; i<11;i++)
	{
		kq2=kq2+ GetText("","a2_"+i);
		SetCursor("","a2_"+i,"pointer");
	}
	}
	for(var j=0; j<11;j++)
	{
		SetText("","a2_"+j,"");
		SetFontColor("","a2_"+j,"#ffffff");
	}
	InvalidateObj("","");
}
function  InitA3()
{
for(var i=1; i<5;i++)
	SetMoveView("","_"+i,1);
}
function  CheckA2()
{		
		for(var i=0; i<length(kq2);i++)
		{
		if(RemoveDot(GetText("","a2_"+i)) == RemoveDot(subString(kq2,i,1)))
		SetFontColor("","a2_"+i,"#008000");
		else SetFontColor("","a2_"+i,"#ff0000");
		}
		InvalidateObj("","");
}
function CheckA3( objcheck)
{
if(RectInRect("",objcheck,""))
{
	var tt= GetText("Trang_2","");
                tt= subString(tt,3);
	SpeakEN("","",tt);
	SetText("Trang_2",objcheck,tt);
	SetShowObject("Trang_2","",0);
	SetColor("Trang_2",objcheck,"#CCFF99");
}
  MoveObjectTo("","",-1,-1);
}


function InitB1(){
for(var i=5; i<10;i++){
	SetMoveView("Trang_2","b1_"+i,1);
      SetCursor("Trang_2","b1_"+i,"pointer");
	SetShowObject("Trang_2","b1_"+i,1);
	}
for(var j=0; j<5;j++){
		SetText("Trang_2","b1_"+j);
	}

}
function CheckB1( objcheck)
{
if(RectInRect("Trang_2",objcheck,""))
{
	var tt= GetText("Trang_2",objcheck)+" "+ GetText("Trang_2","");
	SpeakEN("","",tt);
	SetText("Trang_2",objcheck,tt);
	SetShowObject("Trang_2","",0);
}
  MoveObjectTo("","",-1,-1);
}
function InitB2(){
for(var i=4; i<8;i++){
	SetMoveView("Trang_2","b2_"+i,1);
      SetCursor("Trang_3","b2_"+i,"pointer");
	SetShowObject("Trang_3","b2_"+i,1);
	}
for(var j=0; j<4;j++){
		SetText("Trang_3","b2_"+j);
	}
InvalidateObj("Trang_3","");
}
function CheckB2( objcheck)
{
if(RectInRect("Trang_3",objcheck,""))
{
	var tt= GetText("Trang_2",objcheck);
	tt= replaceStr(tt,"...",GetText("Trang_3",""));
	SpeakEN("","",tt);
	SetText("Trang_3",objcheck,tt);
	SetShowObject("Trang_3","",0);
}
  MoveObjectTo("","",-1,-1);
}
var kqb3=["Nice to meet you.","Hi, Nam. How are you?","I'm fine, thanks","Bye, Nam"];
var countword=[4,5,3,2];
var countclick=[0,0,0,0];
function InitB3(){
for(var i=0; i<4;i++){
	for(var j= 0; j< countword[i];j++)
	{
   	SetShowObject("Trang_2","b3"+i+"_"+j,1);
	}
}
for(var j=0; j<4;j++){
		SetText("Trang_2","kqb3_"+j);
		SetFontColor("Trang_3","kqb3_"+j,"#0066FF");	
		countclick[j]=0;
	}
InvalidateObj("Trang_3","");
}
function  EndFalse( obj)
{
	SetText("Trang_3",obj,"");
	SetFontColor("Trang_3",obj,"#0066FF");
	InvalidateObj("Trang_3","");

}

function CheckB3( objcheck)
{
	var sp= trimStr(replaceStr(GetText("","")," /",""));
	SpeakEN("","",sp);
	var tt= GetText("",objcheck)+" "+ sp;
	SetText("",objcheck,tt);
	SetShowObject("","",0);
	var xxx = rightStr(objcheck,1);
      countclick[xxx]=countclick[xxx]+1;
	if(countclick[xxx]==countword[xxx])
	{
		var texkq= replaceStr(kqb3[xxx],".","");
		texkq= replaceStr(texkq,",","");
		texkq= replaceStr(texkq,"?","");
		texkq= toLowerCase(texkq);
		if(texkq==trimStr(RemoveDot(GetText("",objcheck))))
		  {
		  SetText("",objcheck,kqb3[xxx]);
		  SpeakEN("","",kqb3[xxx]);
		  SetFontColor("",objcheck,"#008000");
		  }
		else{
			SetFontColor("",objcheck,"#FF0000");
			Delay("EndFalse('"+objcheck+"');",1000);
			for(var i=0 ;i < countword[xxx];i++)
			   SetShowObject("","b3"+xxx+"_"+i,1);
			countclick[xxx]=0;
		  }
	}
	InvalidateObj("","");
}

function InitD1(){
SetPaint("Trang_4","obj_paint",1);
PaintType("Trang_4","obj_paint",5);
PaintColor("Trang_4","obj_paint","#ff0000");
InvalidateObj("Trang_4","");
}
var arChon=[1,2,0];
var m_color="";
var i_start=0;
function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<3 && b_e== false)
	{
		if(PosInObj("d1_"+i))
		{
			b_e= true;
			i_start=i;
		}
		i=i+1;
	}
}
function EndObj()
{
	var i=0;
	var b_e= false;
	while(i<3 && b_e== false)
	{
		if(PosInObj("d1Image_"+i))
		{
			if(arChon[i_start]==i){
			SaveObject("","obj_paint");
			SpeakEN("","",GetText("","d1_"+i_start));
			return;
			}
			b_e== true;
		}
		i++;
	}
	InvalidateObj("","");
}
function InitD2()
{
  LineHeight("Trang_5","Text_2",1.8);
LineHeight("Trang_5","Text_3",1.8);
	for(var i=0; i<4;i++){
	SetMoveView("Trang_5","D2obj_"+i,1);
	SetFontColor("Trang_5","d2_"+i,"#ffffff");
	SetShowObject("Trang_5","D2obj_"+i,1);
	MoveObjectTo("","D2obj_"+i,-1,-1);

}
InvalidateObj("Trang_5","");
}

var d2speak=["Hello, Miss Hien","How are you?","Hello, Quan. File thanks. And you?","I'm fine thanks you. Goodbye, Miss Hien. Goodbye, Quan."];
function CheckD2()
{
	var i=0;
	var b_e= false;
	while(i<4 && b_e== false)
	{
		if(PosInObj("d2_"+i))
		{
              	if(GetText("","")== toLowerCase(GetText("","d2_"+i))){
			SetFontColor("Trang_5","d2_"+i,"#0000ff");
			SetShowObject("","",0);
			SpeakEN("","",d2speak[i]);
			return;
			}
			b_e== true;
		}
		i++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Trang_1()
{
InitA1();
InitA2();
InitA3();
  return;
}

function Trang_2()
{
InitA3();
InitB1();
  return;
}

function Trang_4()
{
InitD1();
  return;
}

function Trang_5()
{
InitD2();
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
 height: 750 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,600,700,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_18 = CreText('Text_18',311,384,29,29,"o",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',343,260,29,29,"i",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_32 = CreText('Text_32',95,-1,505,60,"Hello",'#0080ff','#ffffff','#ff0000','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#71b8ff','3','0','#ffffff','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,-1,94,60,"Unit 1",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
var Text_3 = CreText('Text_3',10,64,451,40,"A. PHONICS AND VOCABULARY",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',35,107,273,26,"1 . Complate and say aloud.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var hello = CreText('hello',307,148,96,24,"_ello",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
hello.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","","hello");
  return;
}
 );
var bye = CreText('bye',443,148,88,24,"_ye",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bye.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","","bye");
  return;
}
 );
var Text_9 = CreText('Text_9',35,187,273,26,"2 . Do the puzzle.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_10 = CreText('Text_10',115,215,55,29,"are",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_11 = CreText('Text_11',183,215,55,29,"hi",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_12 = CreText('Text_12',251,215,55,29,"nice",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_13 = CreText('Text_13',319,215,55,29,"fine",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_14 = CreText('Text_14',387,215,55,29,"how",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_15 = CreText('Text_15',455,215,55,29,"hello",'#ff8000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_16 = CreText('Text_16',250,260,29,29,"f",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a2_1 = CreText('a2_1',251,291,29,29,"i",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_4 = CreText('a2_4',251,322,29,29,"n",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_19 = CreText('Text_19',250,353,29,29,"e",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_20 = CreText('Text_20',221,291,29,29,"n",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a2_2 = CreText('a2_2',281,291,29,29,"c",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_3 = CreText('a2_3',312,291,29,29,"e",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_0 = CreText('a2_0',312,260,29,29,"h",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_7 = CreText('a2_7',312,322,29,29,"l",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_8 = CreText('a2_8',312,353,29,29,"l",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_9 = CreText('a2_9',280,384,29,29,"h",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_10 = CreText('a2_10',343,384,29,29,"w",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_5 = CreText('a2_5',189,353,29,29,"a",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var a2_6 = CreText('a2_6',219,353,29,29,"r",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_2 = CreText('Text_2',34,431,273,26,"3 . Look, read and match.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',286,148,27,24,"a.",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_22 = CreText('Text_22',424,148,25,24,"b.",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_b = CreText('Text_b',113,143,42,29,"b",'rgba(255,128,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,128,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(RectInRect("","bye","")){
  SetText("","bye","bye");
SpeakEN("","","bye");
}
MoveObjectTo("","",-1,-1);
  return;
}
 );
Text_b.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_h = CreText('Text_h',180,143,42,29,"h",'rgba(255,128,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,128,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_h.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(RectInRect("","hello","")){
  SetText("","hello","hello");
SpeakEN("","","hello");
}
MoveObjectTo("","",-1,-1);
  return;
}
 );
Text_h.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_23 = CreText('Text_23',549,659,42,32,"→",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
var Text_5 = CreText('Text_5',336,659,201,32,"bài tập tiếng anh 3",'rgba(0,0,0,0)','#ffffff','#00005e','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _1 = CreText('_1',15,463,123,25,"1. Nam",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3("d");
  return;
}
 );
var _2 = CreText('_2',150,463,123,25,"2. Mai",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3("b");
  return;
}
 );
var _3 = CreText('_3',312,464,123,25,"3. Miss Hien",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3("a");
  return;
}
 );
var _4 = CreText('_4',463,462,123,25,"4. Quan",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3("c");
  return;
}
 );
var Text_6 = CreText('Text_6',10,490,577,138,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var a = CreText('a',16,619,123,25,"",'#bfebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#bfebff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b = CreText('b',166,619,123,25,"",'#bfebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#bfebff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var c = CreText('c',316,620,123,25,"",'#bfebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#bfebff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var d = CreText('d',466,619,123,25,"",'#bfebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#bfebff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Text_18,Text_17,Text_32,Text_1,Text_3,Text_4,hello,bye,Text_9,Text_10,Text_11,Text_12,Text_13,Text_14,Text_15,Text_16,a2_1,a2_4,Text_19,Text_20,a2_2,a2_3,a2_0,a2_7,a2_8,a2_9,a2_10,a2_5,a2_6,Text_2,Text_21,Text_22,Text_b,Text_h,Text_23,Text_5,_1,_2,_3,_4,Text_6,a,b,c,d);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,600,750,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_6 = CreText('Text_6',13,6,451,40,"B. SENTENCE PATTERNS",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',27,40,273,26,"1 . Read and match.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitB1();
InvalidateObj("Trang_2","");
  return;
}
 );
var b1_0 = CreText('b1_0',31,71,230,27,"Hello.",'#ffc0cb','#ffc0cb','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ff80ff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b1_1 = CreText('b1_1',31,112,230,27,"Hi,",'#ffc0cb','#ffc0cb','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ff80ff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b1_2 = CreText('b1_2',31,153,230,27,"How",'#ffc0cb','#ffc0cb','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ff80ff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b1_3 = CreText('b1_3',31,194,230,27,"I'm fine,",'#ffc0cb','#ffc0cb','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ff80ff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b1_4 = CreText('b1_4',31,235,230,27,"Nice",'#ffc0cb','#ffc0cb','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ff80ff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b1_5 = CreText('b1_5',330,70,177,27,"are you?",'#ffd700','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#ff0000','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b1_2");
  return;
}
 );
var b1_6 = CreText('b1_6',330,111,177,27,"thanks.",'#ffd700','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#ff0000','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b1_3");
  return;
}
 );
var b1_7 = CreText('b1_7',330,152,177,27,"I'm Nam.",'#ffd700','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#ff0000','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b1_0");
  return;
}
 );
var b1_8 = CreText('b1_8',330,193,177,27,"to meet you.",'#ffd700','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#ff0000','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b1_4");
  return;
}
 );
var b1_9 = CreText('b1_9',330,234,177,27,"Mai, I'm Quan.",'#ffd700','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#ff0000','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b1_1");
  return;
}
 );
var Text_3 = CreText('Text_3',5,710,42,32,"←",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
}
 );
var Text_23 = CreText('Text_23',553,710,42,32,"→",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
var b2_0 = CreText('b2_0',41,305,305,42,"Hello. I'm Mai.\r\n...",'#ffffe0','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','3','0',1,'#ff00ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b2_1 = CreText('b2_1',41,350,305,42,"How are you?\r\n...",'#ffffe0','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','3','0',1,'#ff00ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b2_2 = CreText('b2_2',41,395,305,42,"Goodbye class.\r\n...",'#ffffe0','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','3','0',1,'#ff00ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b2_3 = CreText('b2_3',40,439,305,42,"Bye, Quan.\r\n...",'#ffffe0','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','3','0',1,'#ff00ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b2_4 = CreText('b2_4',376,312,216,27,"Bye. Mai.",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','3','0',1,'#ff0000','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
var b2_5 = CreText('b2_5',376,353,216,27,"Goodbye, Miss Hien.",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','3','0',1,'#ff0000','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
var b2_6 = CreText('b2_6',376,394,216,27,"Fine, thanks.",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','3','0',1,'#ff0000','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
var b2_7 = CreText('b2_7',376,435,216,27,"Hi, Mai. I'm Quan",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','3','0',1,'#ff0000','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
var Text_1 = CreText('Text_1',29,277,273,26,"2 . Match the sentences.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitB2();
  return;
}
 );
var Text_2 = CreText('Text_2',37,488,444,26,"3 . Put the words in order. Then read aloud.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitB3();
  return;
}
 );
var b30_0 = CreText('b30_0',66,515,59,25,"you /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
var kqb3_0 = CreText('kqb3_0',67,543,350,25,"meet /",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b30_1 = CreText('b30_1',117,515,72,25,"meet /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
var b30_2 = CreText('b30_2',184,515,59,25,"nice /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
var b30_3 = CreText('b30_3',244,515,59,25,"to",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
var b31_0 = CreText('b31_0',66,574,59,25,"Nam /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
var b31_3 = CreText('b31_3',243,574,59,25,"are /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
var b31_1 = CreText('b31_1',127,574,59,25,"you /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
var b31_2 = CreText('b31_2',181,574,59,25,"hi /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
var b31_4 = CreText('b31_4',304,574,59,25,"how",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
var kqb3_1 = CreText('kqb3_1',67,598,350,25,"thanks /",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var b32_0 = CreText('b32_0',66,632,80,25,"thanks /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
var b32_1 = CreText('b32_1',137,632,49,25,"fine /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
var b32_2 = CreText('b32_2',193,632,59,25,"I'm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
var b33_0 = CreText('b33_0',66,692,59,25,"Nam /",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
var b33_1 = CreText('b33_1',126,693,59,25,"bye",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
var kqb3_2 = CreText('kqb3_2',67,657,350,25,"",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var kqb3_3 = CreText('kqb3_3',67,718,350,25,"←",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,Text_6,Text_7,b1_0,b1_1,b1_2,b1_3,b1_4,b1_5,b1_6,b1_7,b1_8,b1_9,Text_3,Text_23,b2_0,b2_1,b2_2,b2_3,b2_4,b2_5,b2_6,b2_7,Text_1,Text_2,b30_0,kqb3_0,b30_1,b30_2,b30_3,b31_0,b31_3,b31_1,b31_2,b31_4,kqb3_1,b32_0,b32_1,b32_2,b33_0,b33_1,kqb3_2,kqb3_3);
stage.add(Trang_2);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,600,700,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var d1Image_2 = CreText('d1Image_2',445,392,85,83,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d1Image_1 = CreText('d1Image_1',266,389,85,83,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d1Image_0 = CreText('d1Image_0',88,389,85,83,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',10,3,451,29,"C. SPEAKING",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',38,25,444,26,"Read anh reply",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',16,271,451,34,"D. READING",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',42,301,444,26,"1. Read and match",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',107,46,434,230,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',214,51,55,31,"Hello.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_8 = CreText('Text_8',319,50,117,31,"Hello. I'm Nam",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_9 = CreText('Text_9',182,155,145,31,"Hello. I'm Miss Hien.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_10 = CreText('Text_10',313,169,145,44,"Hello. I'm Quan.\r\nI'm in Class 3A",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var Text_11 = CreText('Text_11',78,377,468,102,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var d1_0 = CreText('d1_0',71,330,132,41,"Hello. I'm Quan.\r\nI'm in Class 3A",'#80ff80','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#008000','#80ff80','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var d1_1 = CreText('d1_1',246,329,132,41,"Hello. I'm Nam.\r\nI'm in Class 3A",'#80ff80','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#008000','#80ff80','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var d1_2 = CreText('d1_2',421,329,132,41,"Hello. I'm Mai.\r\nI'm in Class 3A too.",'#80ff80','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#008000','#80ff80','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var obj_paint = CreText('obj_paint',58,328,519,150,"",'rgba(255,255,255,0.04)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','rgba(255,255,255,0.04)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndObj();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  StartObj();
  return;
}
 );
var d2_0 = CreText('d2_0',192,551,91,23,"Hello",'#ffffff','#ffffff','#0080ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d2_2 = CreText('d2_2',295,570,90,23,"Fine",'#ffffff','#ffffff','#0080ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d2_1 = CreText('d2_1',398,550,90,23,"How",'#ffffff','#ffffff','#0080ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d2_3 = CreText('d2_3',218,591,93,23,"fine",'#ffffff','#ffffff','#0080ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',64,557,121,97,"Quan:\r\nMiss Hien:\r\nQuan:\r\nMiss Hien:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',41,488,444,26,"2. Read and complete",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitD2();
  return;
}
 );
var D2obj_0 = CreText('D2obj_0',141,519,55,24,"fine",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
D2obj_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
var D2obj_1 = CreText('D2obj_1',209,519,55,24,"how",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
D2obj_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
var D2obj_2 = CreText('D2obj_2',277,519,55,24,"hello",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
D2obj_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
var D2obj_3 = CreText('D2obj_3',346,519,55,24,"fine",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
D2obj_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
var Text_14 = CreText('Text_14',170,557,466,97,"(1)__________, Miss Hien. (2)__________ are you?\r\nHello, Quan. (3)__________, thanks. And you?\r\nI'm (4)__________, thanks you. Goodbye, Miss Hien.\r\nGoodbye, Quan.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',13,656,42,32,"←",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
}
 );
var Text_23 = CreText('Text_23',535,656,42,32,"→",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
Trang_4.add(Trang_4_Backrounnd,d1Image_2,d1Image_1,d1Image_0,Text_6,Text_1,Text_2,Text_3,Text_5,Text_7,Text_8,Text_9,Text_10,Text_11,d1_0,d1_1,d1_2,obj_paint,d2_0,d2_2,d2_1,d2_3,Text_12,Text_13,D2obj_0,D2obj_1,D2obj_2,D2obj_3,Text_14,Text_4,Text_23);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,600,700,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',19,5,451,34,"E. WRITING",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',93,450,431,172,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#ffd700','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',70,415,444,26,"2. Write about you.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitD2();
  return;
}
 );
var Text_7 = CreText('Text_7',117,468,81,157,"Name:\r\n\r\nSchool:\r\n\r\nClass:\r\n\r\nTeacher:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',200,467,307,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_9 = CreText('Text_9',200,502,307,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_10 = CreText('Text_10',200,537,307,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_11 = CreText('Text_11',200,573,307,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var Text_2 = CreText('Text_2',74,40,444,26,"1. Look and write.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitD2();
  return;
}
 );
var Image_1 = CreText('Image_1',86,77,442,317,'','rgba(0,0,0,0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_3 = CreText('Text_3',13,653,42,32,"←",'#008040','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
}
 );
var Text_4 = CreText('Text_4',283,646,144,46,"Submit",'#80ff00','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','13','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_5.add(Trang_5_Backrounnd,Text_1,Text_5,Text_6,Text_7,Text_8,Text_9,Text_10,Text_11,Text_2,Image_1,Text_3,Text_4);
stage.add(Trang_5);
InitLacVietScript();
};
