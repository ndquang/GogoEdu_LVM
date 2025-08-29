folder_Resource ='data/Unit_6';
var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
var achar= "qwertyuiopasdfghjklzxcvbnm.,;:!?";//32
var anum= "1234567890+-*/=><(){}[]@%&“”'#$\^";
function  InitKeyBoar()
{
	for(var i=0; i< 38; i++)
	{
	  SetCursor("","char_"+i,"pointer");
	  if(i<32)
	  SetText("","char_"+i,subString(achar,i,1));
	}
	SetShowObject("","Group_1",0);
	SetMoveView("","Group_1",1);
}
function   GetKeyBoNumber(){
	if(objectShowKey=="")
		return;
	var charxxx=  GetText("","");
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue = subString(keyNewValue,1,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
AddObjToCurentPage("Group_1");
var x_to= GetLeft("","")+ GetWidth("","")/2- GetWidth("",namekey)/2;
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
if (x_to+ GetWidth("",namekey)>640) x_to=640-GetWidth("",namekey);
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}
function LowerKey()
{
  for(var i=0; i<26;i++){
	var ch= GetText("","char_"+i);
	if(ch!=toLowerCase(ch))
	SetText("","char_"+i,toLowerCase(ch));
	else SetText("","char_"+i,toUpperCase(ch));
	}
InvalidateObj("","");
}
function ChangKey()
{
  for(var i=0; i<32;i++){
	var ch= GetText("","char_"+i);
	if(ch!=subString(anum,i,1))
	SetText("","char_"+i,subString(anum,i,1));
	else SetText("","char_"+i,subString(achar,i,1));
	}
InvalidateObj("","");
}
var kq1=["TT","YS"];
var kq1speak=["That","Yes"];
function InitA1()
{
	SetMoveView("","Text_b",1);
	SetMoveView("","Text_h",1);
 	SetCursor("","Text_b","pointer");
      SetCursor("","Text_h","pointer");
	SetText("","a_0");
	SetText("","a_1");
}
function CheckA1( obj){

if(RectInRect("",obj,""))
{
  var tt = GetText("",obj);
  tt = replaceStr(tt,"_",GetText("",""));
  SetText("",obj,tt);
  SpeakEN("","",tt);
}
MoveObjectTo("","",-1,-1);
}
function  RemoveDot( texkq)
{
  if(texkq=="") return "";
 texkq= replaceStr(texkq,".","");
		texkq= replaceStr(texkq,",","");
		texkq= replaceStr(texkq,"?","");
		texkq= toLowerCase(texkq);
return texkq;
}
var a2speak=["open","close","come","stand","sit","talk"];
function InitA2()
{
	
	for(var i=0; i<6;i++){
	SetText("","a2_"+i,"");
	SetFontColor("","a2_"+i,-1);
	SetCursor("","a2_"+i,"pointer");
     }
     InvalidateObj("","");
}


function SpeakA2()
{
	var i= rightStr(GetName(""),1);
	SpeakEN("","",a2speak[i]);

}
function CheckA2()
{
	for(var i=0; i<6;i++)
	{
		if(RemoveDot(GetText("","a2_"+i)) ==  a2speak[i])
		SetFontColor("","a2_"+i,"#00ff00");
		else SetFontColor("","a2_"+i,"#ff0000");
	}
	InvalidateObj("","");
}

function InitA3()
{
	
	for(var i=0; i<8;i++){
	SetMoveView("","a3w_"+i,1);
	SetCursor("","a3w_"+i,"pointer");
	SetFontColor("","a3_"+i,-1);
	SetShowObject("","a3w_"+i,1);
     }
     InvalidateObj("","");
}

function CheckA3()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("a3_"+i))
		{ 
              	if(toLowerCase(GetText("",""))== toLowerCase(GetText("","a3_"+i))){
			SetFontColor("","a3_"+i,"#0000ff");
			SetShowObject("","",0);
			SpeakEN("","a3_"+i);
			}
			b_e== true;
		}
		i++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}

function InitB1(){
for(var i=0; i<4;i++){
	SetMoveView("","b11_"+i,1);
      SetCursor("","b11_"+i,"pointer");
	SetShowObject("","b11_"+i,1);
	SetText("","b10_"+i);
	}

}
function CheckB1( objcheck)
{
if(RectInRect("",objcheck,""))
{
	var tt= GetText("",objcheck)+" "+ GetText("","");
	SpeakEN("","",tt);
	SetText("",objcheck,tt);
	SetShowObject("","",0);
}
  MoveObjectTo("","",-1,-1);
}
function InitB2(){
for(var i=0; i<4;i++){
	SetMoveView("","b21_"+i,1);
      SetCursor("","b21_"+i,"pointer");
	SetShowObject("","b21_"+i,1);
	SetText("","b2_"+i);
	}
InvalidateObj("","");
}
function CheckB2( objcheck)
{
if(RectInRect("",objcheck,""))
{
	var tt= GetText("",objcheck);
	tt= replaceStr(tt,"...",GetText("",""));
	SpeakEN("","",tt);
	SetText("",objcheck,tt);
	SetShowObject("","",0);
}
  MoveObjectTo("","",-1,-1);
}


var kqb3=["May I come in, Sir?","Be quiet, please.","May I ask a question, Miss Hien?","May I go out?"];
var countword=[5,3,7,4];
var countclick=[0,0,0,0];
function InitB3(){
for(var i=0; i<4;i++){
	for(var j= 0; j< countword[i];j++)
	{
      SetCursor("","b3"+i+"_"+j,"pointer");
	SetShowObject("","b3"+i+"_"+j,1);
	}
}
for(var j=0; j<4;j++){
		SetText("","kqb3_"+j);
		SetFontColor("","kqb3_"+j,"#0066FF");	
		countclick[j]=0;
	}
InvalidateObj("","");
}
function  EndFalse( obj)
{
	SetText("",obj,"");
	SetFontColor("",obj,"#0066FF");
	InvalidateObj("","");
}

function CheckB3( objcheck)
{
	var tt= GetText("",objcheck)+" "+ trimStr(replaceStr(GetText("","")," /",""));
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
		if(texkq==trimStr(toLowerCase(GetText("",objcheck))))
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

function InitD1()
{
	
	for(var i=0; i<4;i++){
	SetMoveView("","d1w_"+i,1);
	SetCursor("","d1w_"+i,"pointer");
	SetShowObject("","d1w_"+i,1);
	MoveObjectTo("","d1w_"+i,-1,-1);
	SetFontColor("","d1_"+i,-1);
     }
     InvalidateObj("","");
}

var d1speak=["May I come in, Mr Loc, Yes you can.", "Don't talk, Nam. Sorry, Mr Loc","Mai, Open your book, please. Yes, Miss Hien.","come here, Quan. Yes, Miss Hien."];
function CheckD1()
{
	var i=0;
	var b_e= false;
	while(i<4 && b_e== false)
	{
		if(PosInObj("d1_"+i))
		{ 
              	if(toLowerCase(GetText("",""))== toLowerCase(GetText("","d1_"+i))){
			SetFontColor("","d1_"+i,"#0000ff");
			SetShowObject("","",0);
			SpeakEN("","",d1speak[i]);
			InvalidateObj("","");
		}
			b_e== true;
		}
		i++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function SpeakD1()
{
	var i= rightStr(GetName(""),1);
	SpeakEN("","",d1speak[i]);

}
var d2hoi=["May I come in?","May I open the book","May I go out?","May I write, Miss Hien?"];
var d2tl=["Yes, you can.","No, you can't.","Yes, you can.","No, you can't."];
function InitD2()
{
	for(var i=0; i<4;i++)
	{
	SetText("","d2_"+i,"");
	SetFontColor("","d2_"+i,-1);
	SetCursor("","d2_"+i,"pointer");
     }
     InvalidateObj("","");
}
function D2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	var tt= d2hoi[i] + " " + d2tl[i];
	SpeakEN("","",tt);
}

function CheckD2(){
	
	for(var i=0; i<4;i++)
	{
		if(RemoveDot(d2tl[i]) ==  RemoveDot(GetText("","d2_"+i))){
		SetFontColor("","d2_"+i,"#00ff00");
		SetText("","d2_"+i,d2tl[i]);
		}
		else
		SetFontColor("","d2_"+i,"#ff0000");
	}
	InvalidateObj("","");
}
var ae1=["","","","",""];
function InitE1()
{	
	for(var i=0; i<5;i++)
	{
	if(ae1[i]=="")
	 ae1[i]= GetText("","e1_"+i);
	SetText("","e1_"+i,"");
	SetFontColor("","e1_"+i,"#000000");
	SetCursor("","e1_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckE1(){
	for(var i=0; i<5;i++)
	{
		if(RemoveDot(GetText("","e1_"+i)) ==  RemoveDot(ae1[i]))
		{
		SetText("","e1_"+i,ae1[i]);
		SetFontColor("","e1_"+i,"#00ff00");
		}
		else SetFontColor("","e1_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
function E1Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae1[i]);
}
var ae2=["","","","","","","","",""];
function InitE2()
{	
	for(var i=0; i<3;i++){
	if(ae2[i]=="")
	 ae2[i]= GetText("","e2_"+i);
	SetText("","e2_"+i,"");
	SetFontColor("","e2_"+i,"#000000");
	SetCursor("","e2_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckE2(){
	for(var i=0; i<3;i++){
		if(RemoveDot(GetText("","e2_"+i)) ==  RemoveDot(ae2[i]))
		{
		SetText("","e2_"+i,ae2[i]);
		SetFontColor("","e2_"+i,"#00ff00");
		}
		else SetFontColor("","e2_"+i,"#ff0000");
	}
InvalidateObj("","");
}
function E2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae2[i]);
}
function InitE3()
{	
SetCursor("","Text_8","pointer");
SetCursor("","Text_9","pointer");
SetCursor("","Text_10","pointer");
SetText("","Text_8","");
SetText("","Text_9","");
SetText("","Text_10","");
InvalidateObj("","");
}
function Trang_1()
{
InitA1();
InitA2();
  return;
}

function Trang_2()
{
InitA3();
InitB1();
  return;
}

function Trang_3()
{
InitB2();
InitB3();
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
InitE1();
  return;
}

function Page_2()
{
InitE2();
InitE3();
  return;
}

function PageKey()
{
InitKeyBoar();

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
 width: 640,
 height: 540 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var Text_21 = CreText('Text_21',269,127,224,32,"a.                      b.",'rgba(0, 0, 0, 0)','#ffffff','#ff6820','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_21);
var a_0 = CreText('a_0',294,125,61,32,"_own",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a_0);
var Text_6 = CreText('Text_6',23,197,453,186,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_6);
var Text_8 = CreText('Text_8',27,273,500,194,"  a.                                b.                                 c.\r\n\r\n\r\n\r\n\r\n\r\n  d.                                e.                                 f.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_8);
var Text_2 = CreText('Text_2',27,273,567,194,"      pnoe                           ecsol                           cemo\r\n\r\n\r\n\r\n\r\n\r\n      tdnas                           its                               ltak",'rgba(0, 0, 0, 0)','#ffffff','#000000','#0000a0','',16,'Arial','Normal','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_32 = CreText('Text_32',-1,1,641,51,"Stand up!",'#a8d3ff','#ffffff','#ff0000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#a8d3ff','0','3','#ffff00','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_32);
var Text_1 = CreText('Text_1',-1,1,89,51,"Unit 6",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',12,'0.00','0','1',1,'#00008b','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_1);
var Text_3 = CreText('Text_3',10,64,451,40,"A. PHONICS AND VOCABULARY",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_3);
var Text_9 = CreText('Text_9',21,167,460,26,"2 . Put the letters in order to make the work.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA2();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_9);
var Text_5 = CreText('Text_5',590,454,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_5);
var Text_4 = CreText('Text_4',18,98,273,26,"1 . Complate and say aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA1();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_4);
var a_1 = CreText('a_1',434,125,67,32,"_ome",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a_1);
var Text_b = CreText('Text_b',104,128,44,32,"c",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a_1");
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
Trang_1.add(Text_b);
var Text_h = CreText('Text_h',171,128,44,32,"d",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_h.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a_0");
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
Trang_1.add(Text_h);
var a2_0 = CreText('a2_0',44,290,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_0);
var a2_1 = CreText('a2_1',217,288,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_1);
var a2_2 = CreText('a2_2',367,289,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_2);
var a2_3 = CreText('a2_3',47,404,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_3);
var a2_4 = CreText('a2_4',209,402,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_4);
var a2_5 = CreText('a2_5',394,403,69,22,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a2_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_5);
var Text_7 = CreText('Text_7',433,290,40,20,"in",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_7);
var Text_10 = CreText('Text_10',114,406,40,20,"up",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_10);
var Text_11 = CreText('Text_11',278,404,46,20,"down",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_11);
var Text_12 = CreText('Text_12',347,406,46,20,"don't",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_12);
var Check2 = CreText('Check2',433,169,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA2();
  return;
}
 );
Trang_1.add(Check2);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var Text_19 = CreText('Text_19',358,36,180,142,"",'#ffd700','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_19);
var Text_6 = CreText('Text_6',19,196,451,40,"B. SENTENCE PATTERNS",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_6);
var Text_7 = CreText('Text_7',33,226,273,26,"1 . Read and match.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB1();
InvalidateObj("","");
  return;
}
 );
Trang_2.add(Text_7);
var b10_0 = CreText('b10_0',37,252,316,27,"1. Sit",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','4',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_0);
var b10_1 = CreText('b10_1',37,286,316,27,"2. Stand",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','4',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_1);
var b10_2 = CreText('b10_2',37,320,316,27,"3. Come",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','4',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_2);
var b11_2 = CreText('b11_2',395,320,177,27,"down, please.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','3','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_0");
  return;
}
 );
Trang_2.add(b11_2);
var Text_2 = CreText('Text_2',21,5,515,26,"3 . Put the words in the correct culumns",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA3();
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_2);
var Text_1 = CreText('Text_1',531,418,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_2.add(Text_1);
var Text_8 = CreText('Text_8',581,418,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_2.add(Text_8);
var b10_3 = CreText('b10_3',37,355,316,27,"4. Open",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','4',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_3);
var Text_3 = CreText('Text_3',53,36,289,144,"",'#aed7ff','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','middle',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var a3samp_0 = CreText('a3samp_0',371,64,77,20,"write",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3samp_0);
var a3_0 = CreText('a3_0',371,85,77,20,"sit down",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_0);
var a3_2 = CreText('a3_2',371,106,77,20,"come in",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_2);
var a3_4 = CreText('a3_4',371,127,77,20,"talk",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_4);
var a3_6 = CreText('a3_6',371,148,77,20,"stand up",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_6);
var a3w_2 = CreText('a3w_2',79,87,90,21,"sit down",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_2);
var Sample_a3w_1 = CreText('Sample_a3w_1',143,49,49,21,"write",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
Sample_a3w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
Sample_a3w_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Sample_a3w_1);
var sample_a3w_0 = CreText('sample_a3w_0',73,49,61,21,"four",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
sample_a3w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
sample_a3w_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(sample_a3w_0);
var a3w_0 = CreText('a3w_0',201,49,43,21,"talk",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_0);
var a3w_3 = CreText('a3w_3',176,87,68,21,"come in",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_3);
var b11_3 = CreText('b11_3',396,355,177,27,"here, please.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','3','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_2");
  return;
}
 );
Trang_2.add(b11_3);
var b11_1 = CreText('b11_1',395,286,177,27,"your book, please.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','3','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_3");
  return;
}
 );
Trang_2.add(b11_1);
var b11_0 = CreText('b11_0',395,252,177,27,"up, please.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','3','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_1");
  return;
}
 );
Trang_2.add(b11_0);
var a3samp_1 = CreText('a3samp_1',450,64,77,20,"four",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3samp_1);
var a3_1 = CreText('a3_1',450,85,77,20,"eight",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_1);
var a3_3 = CreText('a3_3',450,106,77,20,"ten",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_3);
var a3_5 = CreText('a3_5',450,127,77,20,"two",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_5);
var a3_7 = CreText('a3_7',450,148,77,20,"six",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#80ff00','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_7);
var Text_12 = CreText('Text_12',371,42,77,20,"Actions",'#ffffe0','#ffffe0','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_12);
var Text_13 = CreText('Text_13',450,42,77,20,"Numbers",'#ffffe0','#ffffe0','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#80ff00','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_13);
var a3w_4 = CreText('a3w_4',254,87,43,21,"eight",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_4);
var a3w_1 = CreText('a3w_1',257,49,43,21,"ten",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_1);
var a3w_7 = CreText('a3w_7',211,123,90,21,"stand up",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_7);
var a3w_5 = CreText('a3w_5',85,123,45,21,"two",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_5);
var a3w_6 = CreText('a3w_6',146,123,39,21,"six",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a3w_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
a3w_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(a3w_6);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()'});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,540,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var Text_6 = CreText('Text_6',77,238,458,214,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE16.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Text_6);
var Text_1 = CreText('Text_1',24,206,444,26,"3 . Put the words in order. Then read aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB3();
  return;
}
 );
Trang_3.add(Text_1);
var b30_0 = CreText('b30_0',29,334,56,25,"may /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',28,308,274,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_0);
var b30_1 = CreText('b30_1',83,334,58,25,"Sir /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_1);
var b30_2 = CreText('b30_2',140,334,74,25,"come /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_2);
var b31_0 = CreText('b31_0',382,338,74,25,"please /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_0);
var b31_1 = CreText('b31_1',465,338,66,25,"quiet /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_1);
var b31_2 = CreText('b31_2',544,338,47,25,"be /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',376,312,202,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_1);
var b32_0 = CreText('b32_0',10,485,55,25,"Miss /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_0);
var b32_1 = CreText('b32_1',66,485,30,25,"I /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_1);
var b32_2 = CreText('b32_2',97,485,27,25,"a /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_2);
var b33_0 = CreText('b33_0',373,467,51,25,"out /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_0);
var b33_1 = CreText('b33_1',421,467,59,25,"may /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',19,453,294,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',370,446,222,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_3);
var b33_2 = CreText('b33_2',479,467,59,25,"go /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_2);
var Text_2 = CreText('Text_2',593,494,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_3.add(Text_2);
var Text_3 = CreText('Text_3',546,494,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_3.add(Text_3);
var b2_0 = CreText('b2_0',25,42,242,37,"1. Who's that?\r\n    ...",'#fffe99','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#fffe99','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_0);
var b2_1 = CreText('b2_1',25,84,242,37,"2. How old are you?\r\n    ...",'#fffe99','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#fffe99','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_1);
var b2_2 = CreText('b2_2',25,126,242,37,"3. Don't talk, boys? \r\n    ...",'#fffe99','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#fffe99','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_2);
var b2_3 = CreText('b2_3',25,169,242,37,"4. May I come in, Miss Hien?\r\n    ...",'#fffe99','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#fffe99','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_3);
var b32_3 = CreText('b32_3',136,485,54,25,"ask /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_3);
var b32_4 = CreText('b32_4',193,485,89,25,"question /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_4);
var b32_5 = CreText('b32_5',285,485,55,25,"may /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_5);
var b21_0 = CreText('b21_0',334,49,242,27,"Sorry, Mr Loc.",'#dafeda','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
Trang_3.add(b21_0);
var b21_1 = CreText('b21_1',334,81,242,27,"It's my friend Linda.",'#dafeda','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
Trang_3.add(b21_1);
var b21_2 = CreText('b21_2',334,146,242,27,"Yes, you can.",'#dafeda','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
Trang_3.add(b21_2);
var b21_3 = CreText('b21_3',334,114,242,27,"I'm 6 years old.",'#dafeda','#fffe99','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
Trang_3.add(b21_3);
var b30_3 = CreText('b30_3',216,334,43,25,"in /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_3);
var b30_4 = CreText('b30_4',264,334,39,25,"I /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_4);
var b32_6 = CreText('b32_6',335,485,64,25,"Hien /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_6);
var Text_5 = CreText('Text_5',538,467,59,25,"I /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(Text_5);
var Text_4 = CreText('Text_4',17,7,357,28,"2 . Match the sentences.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB2();
  return;
}
 );
Trang_3.add(Text_4);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var Text_3 = CreText('Text_3',396,299,287,166,"Mai, open your              , please.\r\n\r\nYes, Miss Hien.\r\n\r\n               here, Quan.\r\n\r\nYes, Miss Hien.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_3);
var Text_16 = CreText('Text_16',95,299,244,160,"May I come in, Mr Loc?\r\n\r\n              , you can. \r\n\r\n              , talk Nam. \r\n\r\nSorry, Mr Loc.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_16);
var Text_2 = CreText('Text_2',14,226,215,34,"D. READING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_2);
var Text_5 = CreText('Text_5',192,10,405,233,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE17.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_5);
var c_0 = CreText('c_0',245,40,175,31,"May I write my name here?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_0);
var Text_8 = CreText('Text_8',455,127,137,29,"Come here, Nam",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_8);
var c_2 = CreText('c_2',267,130,112,44,"Close your book, please.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_2);
var c_1 = CreText('c_1',474,15,124,31,"May I come in?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_1);
var Text_1 = CreText('Text_1',38,25,185,26,"Read anh reply.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_1);
var Text_6 = CreText('Text_6',10,3,185,29,"C. SPEAKING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_6);
var Text_12 = CreText('Text_12',591,453,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_4.add(Text_12);
var d1_0 = CreText('d1_0',98,327,64,23,"Yes",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_0);
var d1_1 = CreText('d1_1',100,363,57,23,"Don't",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_1);
var d1_2 = CreText('d1_2',510,293,60,23,"book",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_2);
var Text_4 = CreText('Text_4',543,453,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_4.add(Text_4);
var Text_13 = CreText('Text_13',41,254,220,26,"1. Read and complete",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD1();
  return;
}
 );
Trang_4.add(Text_13);
var d1_3 = CreText('d1_3',402,364,56,23,"come",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_3);
var Text_7 = CreText('Text_7',16,298,69,135,"Tom:\r\n\r\nMr Loc:\r\n\r\nMr Loc:\r\n\r\nNam:",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Italic','right','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_7);
var Text_9 = CreText('Text_9',287,299,110,135,"Miss Hien:\r\n\r\nMai:\r\n\r\nMiss Hien:\r\n\r\nQuan:",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Italic','right','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_9);
var d1w_2 = CreText('d1w_2',391,257,55,24,"yes",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_2);
var d1w_3 = CreText('d1w_3',455,257,69,24,"book",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_3);
var d1w_1 = CreText('d1w_1',328,257,55,24,"don't",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_1);
var d1w_0 = CreText('d1w_0',265,257,55,24,"come",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_0);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,640,500,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Trang_5.add(Trang_5_Backrounnd);
var Text_3 = CreText('Text_3',48,24,453,176,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE18.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_3);
var Text_21 = CreText('Text_21',27,93,567,151,"1. May I come in?                                           2. May I open the book?\r\n\r\n\r\n\r\n\r\n\r\n3. May I go out?                                            4. May I write, Miss Hien?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#0000a0','',16,'Arial','Normal','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_21);
var Text_4 = CreText('Text_4',4,2,481,26,"2. Read and answer as the teacher.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD2();
  return;
}
 );
Trang_5.add(Text_4);
var Text_15 = CreText('Text_15',59,295,481,198,"  1. I'm Mary.                             I am Mary.\r\n\r\n  2. My name's Tony.\r\n\r\n  3. What's your name?\r\n\r\n  4. It's Tony.\r\n\r\n  5. Who's that?\r\n\r\n  6. Don't talk.",'#ffffe0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#282828','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',3,-3,'#c0c0c0',0,1.50);
Trang_5.add(Text_15);
var Text_1 = CreText('Text_1',21,245,451,30,"E. WRITING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_1);
var e1_1 = CreText('e1_1',255,358,223,24,"What is your name?",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_1);
var e1_0 = CreText('e1_0',255,325,223,24,"My name is Tony.",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_0);
var e1_3 = CreText('e1_3',255,424,223,24,"Who is that?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_3);
var Text_5 = CreText('Text_5',57,266,222,26,"1. Read and write",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE1();
  return;
}
 );
Trang_5.add(Text_5);
var Check2 = CreText('Check2',235,267,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Check2);
var Text_7 = CreText('Text_7',547,472,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_5.add(Text_7);
var Text_8 = CreText('Text_8',594,472,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_5.add(Text_8);
var e1_2 = CreText('e1_2',255,391,223,24,"It is Tony.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_2);
var Text_2 = CreText('Text_2',337,3,83,23,"√ Check",'#005500','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
Trang_5.add(Text_2);
var d2_0 = CreText('d2_0',49,109,184,18,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(d2_0);
var d2_1 = CreText('d2_1',352,109,214,18,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(d2_1);
var d2_2 = CreText('d2_2',49,223,186,18,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(d2_2);
var d2_3 = CreText('d2_3',356,221,210,18,"",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(d2_3);
var Text_13 = CreText('Text_13',448,73,40,20,"in",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_13);
var e1_4 = CreText('e1_4',255,459,223,24,"Do not talk.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_4);
stage.add(Trang_5);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_1 = CreText('Text_1',58,33,474,245,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE20.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var Text_7 = CreText('Text_7',54,338,493,134,"\r\n 1.\r\n\r\n 2.\r\n\r\n 3.",'#ffff91','#ffffff','#00008b','#ffffff','',16,'Arial','Bold','left','top',0,'0.00','0','0',8,'rgba(0, 0, 0, 0)','#ffff91','0','0','rgba(0, 0, 0, 0)','0','0','4','5',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_7);
var Text_6 = CreText('Text_6',26,305,444,26,"3. Write three questions to ask for permission.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Text_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_6);
var Text_2 = CreText('Text_2',590,455,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_2);
var e2_0 = CreText('e2_0',380,139,134,22,"May I write?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_0);
var e2_1 = CreText('e2_1',100,280,128,22,"May I come in?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_1);
var Text_5 = CreText('Text_5',22,5,300,26,"2. Look and write the questions.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_5);
var e2_2 = CreText('e2_2',380,274,148,21,"May I sit down?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_2);
var Text_9 = CreText('Text_9',87,384,435,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(Text_9);
var Text_8 = CreText('Text_8',87,348,435,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(Text_8);
var Text_10 = CreText('Text_10',87,420,435,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(Text_10);
var Text_3 = CreText('Text_3',65,134,174,25," May I go out?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_3);
var Text_xxx = CreText('Text_xxx',25,137,75,19,"1. Nam:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_xxx);
var Text_11 = CreText('Text_11',302,143,75,19,"2. Mai:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_11);
var Text_12 = CreText('Text_12',23,285,75,19,"3. Quan:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_12);
var Text_13 = CreText('Text_13',277,277,100,19,"4. Phong:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_13);
stage.add(Page_2);

 var PageKey = new Kinetic.Layer({name: 'PageKey',callback:'PageKey()'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
PageKey.add(PageKey_Backrounnd);
var bg_key = CreText('bg_key',-2,-4,450,143,"0",'#666666','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#666666','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
PageKey.add(bg_key);
var char_0 = CreText('char_0',1,1,35,29,"Q",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#666666','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_0);
var char_1 = CreText('char_1',41,1,35,29,"W",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_1);
var char_4 = CreText('char_4',161,1,35,29,"T",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_4);
var char_7 = CreText('char_7',281,1,35,29,"I",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_7);
var char_2 = CreText('char_2',81,1,35,29,"E",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_2);
var char_5 = CreText('char_5',201,1,35,29,"Y",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_5);
var char_8 = CreText('char_8',321,1,35,29,"O",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_8);
var char_9 = CreText('char_9',361,1,35,29,"P",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_9);
var char_6 = CreText('char_6',241,1,35,29,"U",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_6);
var char_3 = CreText('char_3',121,1,35,29,"R",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_3);
var char_35 = CreText('char_35',401,1,43,29,"Esc",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_35);
var char_10 = CreText('char_10',14,36,35,29,"A",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_10);
var char_11 = CreText('char_11',53,36,35,29,"S",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_11);
var char_14 = CreText('char_14',170,36,35,29,"G",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_14);
var char_17 = CreText('char_17',287,36,35,29,"K",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_17);
var char_12 = CreText('char_12',92,36,35,29,"D",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_12);
var char_15 = CreText('char_15',209,36,35,29,"H",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_15);
var char_18 = CreText('char_18',326,36,35,29,"L",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_18);
var char_16 = CreText('char_16',248,36,35,29,"J",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_16);
var char_13 = CreText('char_13',131,36,35,29,"F",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_13);
var char_32 = CreText('char_32',2,71,39,29,"Shift",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LowerKey();
  return;
}
 );
PageKey.add(char_32);
var char_19 = CreText('char_19',45,71,35,29,"Z",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_19);
var char_22 = CreText('char_22',162,71,35,29,"V",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_22);
var char_25 = CreText('char_25',279,71,35,29,"M",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_25);
var char_20 = CreText('char_20',84,71,35,29,"X",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_20);
var char_23 = CreText('char_23',201,71,35,29,"B",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_23);
var char_26 = CreText('char_26',318,71,35,29,",",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_26);
var char_27 = CreText('char_27',357,71,35,29,".",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_27);
var char_24 = CreText('char_24',240,71,35,29,"N",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_24);
var char_21 = CreText('char_21',123,71,35,29,"C",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_21);
var char_34 = CreText('char_34',67,105,212,29," ",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_34);
var char_28 = CreText('char_28',398,71,42,29,"!",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_28);
var char_29 = CreText('char_29',287,105,35,29,"?",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_29);
var char_33 = CreText('char_33',3,105,56,29,".?123",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangKey();
  return;
}
 );
PageKey.add(char_33);
var char_36 = CreText('char_36',378,105,66,29,"Enter",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_36);
var char_30 = CreText('char_30',367,36,35,29,";",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_30);
var char_31 = CreText('char_31',330,104,35,29,":",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_31);
var char_37 = CreText('char_37',408,36,36,29,"←",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
   var tkeyNew = leftStr(keyNewValue ,Length(keyNewValue)-1);
	SetText("",objectShowKey,tkeyNew);
	InvalidateObj("",objectShowKey);
  return;
}

 );
PageKey.add(char_37);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:454,height:147});
Group_1.add(bg_key);
Group_1.add(char_0);
Group_1.add(char_1);
Group_1.add(char_4);
Group_1.add(char_7);
Group_1.add(char_2);
Group_1.add(char_5);
Group_1.add(char_8);
Group_1.add(char_9);
Group_1.add(char_6);
Group_1.add(char_3);
Group_1.add(char_35);
Group_1.add(char_10);
Group_1.add(char_11);
Group_1.add(char_14);
Group_1.add(char_17);
Group_1.add(char_12);
Group_1.add(char_15);
Group_1.add(char_18);
Group_1.add(char_16);
Group_1.add(char_13);
Group_1.add(char_32);
Group_1.add(char_19);
Group_1.add(char_22);
Group_1.add(char_25);
Group_1.add(char_20);
Group_1.add(char_23);
Group_1.add(char_26);
Group_1.add(char_27);
Group_1.add(char_24);
Group_1.add(char_21);
Group_1.add(char_34);
Group_1.add(char_28);
Group_1.add(char_29);
Group_1.add(char_33);
Group_1.add(char_36);
Group_1.add(char_30);
Group_1.add(char_31);
Group_1.add(char_37);
PageKey.add(Group_1);
stage.add(PageKey);
InitLacVietScript();
};
