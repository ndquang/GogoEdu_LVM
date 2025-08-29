folder_Resource ='data/Unit_11';
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

function InitA1()
{
	SetMoveView("","Text_b",1);
	SetMoveView("","Text_h",1);
 	SetCursor("","Text_b","pointer");
      SetCursor("","Text_h","pointer");
	SetText("","a1_0");
	SetText("","a1_1");
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
		texkq= replaceStr(texkq,"'","");
		texkq= toLowerCase(texkq);
		texkq=trimStr(texkq);
return texkq;
}
var kq2="";
function InitA2()
{
	if(kq2=="")
	{
	for(var i=0; i<37;i++)
	{
		kq2=kq2+ GetText("","a2_"+i);
		SetCursor("","a2_"+i,"pointer");
	}
	}
	for(var j=0; j<37;j++)
	{
		SetText("","a2_"+j,"");
		SetFontColor("","a2_"+j,"#ffffff");
	}
	InvalidateObj("","");
}
function CheckA2(){
		
		for(var i=0; i<length(kq2);i++)
		{
		if(RemoveDot(GetText("","a2_"+i)) == RemoveDot(subString(kq2,i,1)))
		SetFontColor("","a2_"+i,"#00ff00");
		else SetFontColor("","a2_"+i,"#ff0000");
		}
InvalidateObj("","");
}
//
var akq3=["","","",""];
function InitA3()
{	
	for(var i=0; i<4;i++)
	{
	if(akq3[i]=="")
	 akq3[i]= GetText("","a3_"+i);
	SetText("","a3_"+i,"");
	SetFontColor("","a3_"+i,"#000000");
	SetCursor("","a3_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckA3(){
	for(var i=0; i<4;i++)
	{
		if(RemoveDot(GetText("","a3_"+i)) ==  RemoveDot(akq3[i]))
		{
		SetText("","a3_"+i,akq3[i]);
		SetFontColor("","a3_"+i,"#00ff00");
		}
		else SetFontColor("","a3_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
var asp3=["My grandfather is sixty-six years old.","My grandmother is sixty-two years old.","My brother is forty-four years old.","My mother is forty years old."];
function A3Click()
{
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",asp3[i]);
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

//
var kqb3=["My sister is thirteen years old.","How old is your father?","That is my grandfather.","My mother is young."];
var countword=[6,5,4,4];
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

function InitD1()
{
	
	for(var i=0; i<5;i++){
	SetMoveView("","d1w_"+i,1);
	SetCursor("","d1w_"+i,"pointer");
	SetShowObject("","d1w_"+i,1);
	MoveObjectTo("","d1w_"+i,-1,-1);
	SetFontColor("","d1_"+i,-1);
     }
     InvalidateObj("","");
}

var d1speak=["Who's that woman?","She is my mother.", "How old is she?","She is forty years old","She looks young and nice! Thank you."];
function CheckD1()
{
	var i=0;
	var b_e= false;
	while(i<5 && b_e== false)
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
var ad2=["","","","",""];
function InitD2()
{	
	for(var i=0; i<5;i++)
	{
	if(ad2[i]=="")
	 ad2[i]= GetText("","kqd2_"+i);
	SetText("","kqd2_"+i,"");
	SetFontColor("","kqd2_"+i,"#000000");
	}
      InvalidateObj("","");
}

function CheckD2(){
	for(var i=0; i<5;i++)
	{
		if(RemoveDot(GetText("","kqd2_"+i)) ==  RemoveDot(ad2[i]))
		{
		SetText("","kqd2_"+i,ad2[i]);
		SetFontColor("","kqd2_"+i,"#00ff00");
		}
		else SetFontColor("","kqd2_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
function ClickD2(){
	var te= GetText("","");
	var name= GetName("");
	var i= rightStr(name,1);
	SetText("","kqd2_"+i,te);
	InvalidateObj("","");
}
var ae1=["","","",""];
var ae1spreak=["There are six people in the family.","The grandfather and the grandmother are old","The father and the mother are young.","They are a happy family."];
function InitE1()
{	
	for(var i=0; i<4;i++)
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
	for(var i=0; i<4;i++)
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
	SpeakEN("","",ae1spreak[i]);
}
var ae2=["","","","","",""];
function InitE2()
{	
	for(var i=0; i<6;i++){
	if(ae2[i]=="")
	 ae2[i]= GetText("","e2_"+i);
	SetText("","e2_"+i,"");
	SetFontColor("","e2_"+i,"#0000ff");
	SetCursor("","e2_"+i,"pointer");
	}
      InvalidateObj("","");
}
function CheckE2(){
	for(var i=0; i<6;i++){
		if(RemoveDot(GetText("","e2_"+i)) ==  RemoveDot(ae2[i]))
		{
		SetText("","e2_"+i,ae2[i]);
		SetFontColor("","e2_"+i,"#00ff00");
		}
		else {
			 SetText("","e2_"+i,ae2[i]);
			 SetFontColor("","e2_"+i,"#ff0000");
		}
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
for(var i=0; i<5;i++){
SetCursor("","e3_"+i,"pointer");
SetText("","e3_"+i,"");
}
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
 height: 480 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var Text_21 = CreText('Text_21',258,124,224,32,"a.                             b.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_21);
var a1_0 = CreText('a1_0',278,124,134,32,"_andmother",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_0);
var Text_32 = CreText('Text_32',56,1,584,63,"This is my family",'#a6d2ff','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00008b','#a6d2ff','0','0','#ffff00','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_32);
var Text_1 = CreText('Text_1',-1,1,123,63,"Unit 11",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#00008b','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
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
var Text_9 = CreText('Text_9',21,158,185,26,"2 . Do the puzzle.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA2();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_9);
var Text_5 = CreText('Text_5',582,448,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_5);
var Text_4 = CreText('Text_4',22,98,273,26,"1. Complate and say aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA1();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_4);
var a1_1 = CreText('a1_1',463,124,174,32,"_other",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_1);
var Text_b = CreText('Text_b',67,127,44,32,"br",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a1_1");
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
var Text_h = CreText('Text_h',134,127,44,32,"gr",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_h.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a1_0");
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
var Text_18 = CreText('Text_18',477,246,26,24,"L",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_18);
var a2_0 = CreText('a2_0',450,321,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_0);
var a2_1 = CreText('a2_1',395,296,26,24,"H",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_1);
var Text_19 = CreText('Text_19',289,445,26,24,"R",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_19);
var Text_20 = CreText('Text_20',395,346,26,24,"R",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_20);
var a2_20 = CreText('a2_20',343,445,26,24,"N",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_20);
var a2_19 = CreText('a2_19',451,445,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_19);
var a2_9 = CreText('a2_9',395,271,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_9);
var a2_18 = CreText('a2_18',262,445,26,24,"G",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_18);
var a2_15 = CreText('a2_15',341,346,26,24,"H",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_15);
var a2_2 = CreText('a2_2',370,445,26,24,"D",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_2);
var a2_3 = CreText('a2_3',368,346,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_3);
var a2_4 = CreText('a2_4',424,445,26,24,"A",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_4);
var a2_5 = CreText('a2_5',316,445,26,24,"A",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_5);
var a2_14 = CreText('a2_14',314,346,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_14);
var a2_10 = CreText('a2_10',450,271,26,24,"S",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_10);
var a2_16 = CreText('a2_16',450,296,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_16);
var a2_17 = CreText('a2_17',450,221,26,24,"S",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_17);
var Text_7 = CreText('Text_7',396,246,26,24,"A",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_7);
var a2_26 = CreText('a2_26',395,221,26,24,"F",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_26);
var a2_25 = CreText('a2_25',288,321,26,24,"M",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_25);
var a2_21 = CreText('a2_21',288,221,26,24,"R",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_21);
var a2_23 = CreText('a2_23',288,271,26,24,"N",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_23);
var a2_24 = CreText('a2_24',288,296,26,24,"D",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_24);
var a2_22 = CreText('a2_22',288,246,26,24,"A",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_22);
var a2_8 = CreText('a2_8',395,321,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_8);
var a2_11 = CreText('a2_11',288,196,26,24,"G",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_11);
var a2_12 = CreText('a2_12',260,346,26,24,"M",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_12);
var a2_13 = CreText('a2_13',289,421,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_13);
var a2_7 = CreText('a2_7',397,445,26,24,"F",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_7);
var a2_6 = CreText('a2_6',450,346,26,24,"R",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_6);
var Text_2 = CreText('Text_2',369,246,26,24,"F",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_6 = CreText('Text_6',423,246,26,24,"M",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_6);
var Text_8 = CreText('Text_8',287,346,26,24,"O",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_8);
var Text_10 = CreText('Text_10',450,246,26,24,"I",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_10);
var a2_27 = CreText('a2_27',288,371,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_27);
var a2_28 = CreText('a2_28',288,396,26,24,"H",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_28);
var Check2 = CreText('Check2',186,160,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA2();
  return;
}
 );
Trang_1.add(Check2);
var Text_11 = CreText('Text_11',504,246,26,24,"Y",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_11);
var a2_30 = CreText('a2_30',505,445,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_30);
var a2_29 = CreText('a2_29',478,445,26,24,"H",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_29);
var Text_14 = CreText('Text_14',533,445,26,24,"R",'#ff8000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_14);
var a2_32 = CreText('a2_32',533,395,26,24,"H",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_32);
var a2_34 = CreText('a2_34',533,345,26,24,"O",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_34);
var a2_33 = CreText('a2_33',533,370,26,24,"T",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_33);
var a2_31 = CreText('a2_31',533,420,26,24,"E",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_31);
var a2_36 = CreText('a2_36',533,295,26,24,"B",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_36);
var a2_35 = CreText('a2_35',533,320,26,24,"R",'#ff8000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_35);
var Text_12 = CreText('Text_12',24,200,246,140,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ff0000','ID_IMAGE11.JPG',16,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_12);
var Text_13 = CreText('Text_13',23,323,246,34,"1       2      3      4         5      6",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_13);
var Text_15 = CreText('Text_15',449,191,26,24,"3",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_15);
var Text_16 = CreText('Text_16',533,268,24,24,"4",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_16);
var Text_17 = CreText('Text_17',233,446,24,24,"1",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_17);
var Text_22 = CreText('Text_22',287,168,24,24,"2",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_22);
var Text_23 = CreText('Text_23',396,192,24,24,"6",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_23);
var Text_24 = CreText('Text_24',235,347,24,24,"5",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_24);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var Text_10 = CreText('Text_10',7,155,153,45,"My                       is\r\nsixty-six years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_2.add(Text_10);
var Text_13 = CreText('Text_13',490,155,153,45,"My                 is\r\nforty years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_2.add(Text_13);
var Text_5 = CreText('Text_5',334,53,120,102,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE13.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_5);
var Text_11 = CreText('Text_11',329,155,153,45,"My               is\r\nforty-four years old.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_2.add(Text_11);
var Text_3 = CreText('Text_3',506,53,120,102,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE14.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_4 = CreText('Text_4',33,50,110,103,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE10.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_4);
var Text_9 = CreText('Text_9',211,43,73,112,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_9);
var Text_12 = CreText('Text_12',168,155,153,45,"My                        is\r\nsixty-two years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_2.add(Text_12);
var Text_6 = CreText('Text_6',7,246,314,40,"B. SENTENCE PATTERNS",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_6);
var Text_7 = CreText('Text_7',34,281,273,26,"1 . Read and match.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b10_0 = CreText('b10_0',37,316,380,27,"1. This is",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_0);
var b10_1 = CreText('b10_1',37,350,380,27,"2. How old",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_1);
var b10_2 = CreText('b10_2',37,384,380,27,"3. My father is",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_2);
var b11_2 = CreText('b11_2',438,384,177,27,"years old.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',6,'0.00','5','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_3");
  return;
}
 );
Trang_2.add(b11_2);
var Text_2 = CreText('Text_2',21,5,515,26,"3 . Look listen and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA3();
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_2);
var Text_1 = CreText('Text_1',542,454,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_2.add(Text_1);
var Text_8 = CreText('Text_8',592,454,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_2.add(Text_8);
var b10_3 = CreText('b10_3',37,419,380,27,"4. My sister is seven",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_3);
var b11_3 = CreText('b11_3',440,416,177,27,"my grandmother.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',6,'0.00','5','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_0");
  return;
}
 );
Trang_2.add(b11_3);
var b11_1 = CreText('b11_1',438,350,177,27,"young.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',6,'0.00','5','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_2");
  return;
}
 );
Trang_2.add(b11_1);
var b11_0 = CreText('b11_0',438,316,177,27,"is your mother?",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',6,'0.00','5','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_1");
  return;
}
 );
Trang_2.add(b11_0);
var a3_2 = CreText('a3_2',383,153,55,22,"father",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_2);
var a3_3 = CreText('a3_3',537,153,60,22,"mother",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_3);
var a3_1 = CreText('a3_1',202,153,93,22,"grandmother",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_1);
var Check2 = CreText('Check2',258,6,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#004000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
Trang_2.add(Check2);
var a3_0 = CreText('a3_0',42,153,88,22,"grandfather",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_0);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()'});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var Text_1 = CreText('Text_1',24,199,444,26,"3 . Put the words in order. Then read aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB3();
  return;
}
 );
Trang_3.add(Text_1);
var b30_0 = CreText('b30_0',91,263,73,22,"sister /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',90,235,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_0);
var b30_1 = CreText('b30_1',162,263,54,22,"old /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_1);
var b30_2 = CreText('b30_2',221,263,48,22,"my /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_2);
var b31_0 = CreText('b31_0',91,314,41,25,"old /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_0);
var b31_1 = CreText('b31_1',135,314,65,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_1);
var b31_2 = CreText('b31_2',203,314,56,25,"how /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',90,287,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_1);
var b32_0 = CreText('b32_0',91,371,47,25,"is /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_0);
var b32_1 = CreText('b32_1',142,371,62,25,"that /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_1);
var b32_2 = CreText('b32_2',208,371,118,25,"grandfather /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_2);
var b33_0 = CreText('b33_0',91,424,56,25,"my /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_0);
var b33_1 = CreText('b33_1',152,424,47,25,"is /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',90,342,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',90,397,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_3);
var b33_2 = CreText('b33_2',204,424,72,25,"young /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_2);
var Text_2 = CreText('Text_2',593,458,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_3.add(Text_2);
var Text_3 = CreText('Text_3',546,458,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_3.add(Text_3);
var b32_3 = CreText('b32_3',331,371,67,25,"my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_3);
var b33_3 = CreText('b33_3',283,424,82,25,"mother /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_3);
var b31_3 = CreText('b31_3',262,314,42,25,"is /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_3);
var Text_5 = CreText('Text_5',56,237,30,221,"1.\r\n\r\n\r\n2.\r\n\r\n\r\n3.\r\n\r\n\r\n4.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Bold','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Text_5);
var b31_4 = CreText('b31_4',309,314,68,25,"father",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_4);
var b2_0 = CreText('b2_0',52,25,310,37,"   1. Who's that man?\r\n        ...",'#ccffcc','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ccffcc','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_0);
var b2_1 = CreText('b2_1',52,67,310,37,"   2. How old is your brother?\r\n        ...",'#ccffcc','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ccffcc','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_1);
var b2_2 = CreText('b2_2',52,108,310,37,"   3. How old are you?\r\n        ...",'#ccffcc','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ccffcc','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_2);
var b21_0 = CreText('b21_0',378,34,190,27,"I'm ten.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
Trang_3.add(b21_0);
var b21_1 = CreText('b21_1',378,75,190,27,"He's my father.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
Trang_3.add(b21_1);
var b21_2 = CreText('b21_2',378,113,190,27,"Yes, he is.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
Trang_3.add(b21_2);
var Text_4 = CreText('Text_4',23,-1,314,28,"2 . Match the sentences.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB2();
  return;
}
 );
Trang_3.add(Text_4);
var b2_3 = CreText('b2_3',53,149,310,37,"   4. Is your grandfather old?\r\n        ...",'#ccffcc','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ccffcc','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_3);
var b21_3 = CreText('b21_3',380,151,190,27,"He's thirteen.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
Trang_3.add(b21_3);
var b30_3 = CreText('b30_3',275,263,86,22,"thirteen /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_3);
var b30_4 = CreText('b30_4',376,263,42,22,"is /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_4);
var b30_5 = CreText('b30_5',425,263,64,22,"years",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_5);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var Text_10 = CreText('Text_10',26,330,602,114,"\r\n                Who's that                  ?\r\n\r\n                She's my                   .\r\n\r\n                How old is             ?",'#ffad5b','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',3,3,'#c0c0c0',0,1.50);
Trang_4.add(Text_10);
var Text_3 = CreText('Text_3',374,331,282,111,"\r\nShe is                years old.\r\n\r\nShe looks young and                  !\r\n\r\nThank you.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Trang_4.add(Text_3);
var Text_5 = CreText('Text_5',50,64,104,100,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE15.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_5);
var Text_2 = CreText('Text_2',14,270,215,34,"D. READING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_2);
var c_1 = CreText('c_1',152,67,136,41,"He's my grandfather\r\nHe's sixty-six years old",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#000000','',12,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#666666','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_1);
var Text_1 = CreText('Text_1',34,30,185,23,"Read anh reply.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var d1_0 = CreText('d1_0',165,342,62,19,"woman",'#ffad5b','#ffad5b','#ffad5b','#ffad5b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_0);
var d1_1 = CreText('d1_1',156,374,68,19,"mother",'#ffad5b','#ffad5b','#ffad5b','#ffad5b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_1);
var d1_2 = CreText('d1_2',162,407,44,19,"she",'#ffad5b','#ffad5b','#ffad5b','#ffad5b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_2);
var Text_13 = CreText('Text_13',20,299,220,26,"1. Read and complete.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD1();
  return;
}
 );
Trang_4.add(Text_13);
var d1_3 = CreText('d1_3',421,343,52,19,"forty",'#ffad5b','#ffad5b','#ffad5b','#ffad5b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_3);
var d1w_2 = CreText('d1w_2',365,314,68,20,"woman",'#ff6820','#ffd700','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#32cd32','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_2);
var d1w_3 = CreText('d1w_3',438,314,49,20,"forty",'#ff6820','#ffd700','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#32cd32','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_3);
var d1_4 = CreText('d1_4',516,375,60,19,"nice",'#ffad5b','#ffad5b','#ffad5b','#ffad5b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_4);
var d1w_0 = CreText('d1w_0',243,314,55,20,"she",'#ff6820','#ffd700','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#32cd32','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_0);
var Text_4 = CreText('Text_4',543,453,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_4.add(Text_4);
var Text_12 = CreText('Text_12',591,453,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_4.add(Text_12);
var d1w_4 = CreText('d1w_4',493,314,64,20,"mother",'#ff6820','#ffd700','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#32cd32','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_4);
var Text_7 = CreText('Text_7',6,331,80,112,"\r\nLinda:\r\n\r\nMai:\r\n\r\nLinda:",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Italic','right','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_7);
var Text_9 = CreText('Text_9',280,331,80,112,"\r\nMai:\r\n\r\nLinda:\r\n\r\nMai:",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Italic','right','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_9);
var d1w_1 = CreText('d1w_1',303,314,57,20,"nice",'#ff6820','#ffd700','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#32cd32','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_1);
var Text_11 = CreText('Text_11',167,152,128,116,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE14.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_11);
var Text_14 = CreText('Text_14',400,170,112,107,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE16.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_14);
var Text_15 = CreText('Text_15',432,53,97,97,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE17.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_15);
var Text_8 = CreText('Text_8',324,64,126,43,"She's my mother\r\nShe's forty years old.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#000000','',12,'Arial','Normal','center','middle',3,'0.00','8','0',1,'#666666','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_8);
var c_2 = CreText('c_2',47,177,134,47,"He's my son.\r\nHe's thirteen years old.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#000000','',12,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#666666','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_2);
var c_0 = CreText('c_0',289,146,124,45,"She's my sister.\r\nShe's ten years old.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#000000','',12,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#666666','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_0);
var Text_16 = CreText('Text_16',101,158,19,19,"A",'#0080c0','#0080c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_16);
var Text_17 = CreText('Text_17',474,148,19,19,"B",'#0080c0','#0080c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_17);
var Text_18 = CreText('Text_18',208,261,22,22,"C",'#0080c0','#0080c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_18);
var Text_19 = CreText('Text_19',447,270,21,21,"D",'#0080c0','#0080c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_19);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_5.add(Trang_5_Backrounnd);
var Text_15 = CreText('Text_15',393,346,103,90,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE22.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_15);
var Text_16 = CreText('Text_16',369,314,259,37,"The grandfather and the\r\n                        are old.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_16);
var Text_10 = CreText('Text_10',105,350,105,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE21.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_10);
var Text_17 = CreText('Text_17',96,237,139,85,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE20.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_17);
var Text_11 = CreText('Text_11',31,325,291,23,"There are            people in the family.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_11);
var Text_14 = CreText('Text_14',342,430,200,41,"They are a happy",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_14);
var Text_13 = CreText('Text_13',17,443,344,27,"The father and the                are young.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_13);
var Text_1 = CreText('Text_1',28,191,188,27,"E. WRITING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_1);
var e1_1 = CreText('e1_1',379,329,98,21,"grandmother",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_5 = CreText('Text_5',38,213,222,26,"1. Read and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE1();
  return;
}
 );
Trang_5.add(Text_5);
var Check2 = CreText('Check2',241,221,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Check2);
var Text_7 = CreText('Text_7',590,423,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_5.add(Text_7);
var Text_8 = CreText('Text_8',591,449,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_5.add(Text_8);
var Text_4 = CreText('Text_4',22,4,388,26,"2. Read and circle the correct answers.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD2();
  return;
}
 );
Trang_5.add(Text_4);
var e1_0 = CreText('e1_0',110,322,48,21,"six",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e1_3 = CreText('e1_3',479,439,74,19,"family",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e1_2 = CreText('e1_2',156,441,70,21,"mother",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_2 = CreText('Text_2',27,29,216,156,"\r\nMy name is Tony. I am ten years old. There are five people in my family. My grandmother is seventy years old. My father is forty-five years old. My mother is young. She is thirty years old. My sister is fourteen years old.",'#efe4d6','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#efe4d6','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_2);
var Text_6 = CreText('Text_6',393,4,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
Trang_5.add(Text_6);
var Text_12 = CreText('Text_12',407,216,91,91,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE24.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_12);
var Text_20 = CreText('Text_20',282,189,325,20,"",'#d7ebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#d7ebff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_20);
var Text_19 = CreText('Text_19',282,149,325,20,"",'#d7ebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#d7ebff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_19);
var Text_18 = CreText('Text_18',282,113,325,20,"",'#d7ebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#d7ebff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_18);
var Text_3 = CreText('Text_3',282,76,325,20,"",'#d7ebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#d7ebff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_3);
var Text_9 = CreText('Text_9',282,42,325,20,"",'#d7ebff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#d7ebff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_9);
var Text_21 = CreText('Text_21',305,26,349,217,"\r\nA.                 B.                   C.\r\n\r\nA.                 B.                   C.\r\n\r\nA.                 B.                   C.\r\n\r\nA.                 B.                   C.\r\n\r\nA.                 B.                   C.",'rgba(0, 0, 0, 0)','#ffffff','#ff6820','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_21);
var Text_22 = CreText('Text_22',299,27,359,179,"There are                people in Tony's family.\r\n\r\nTony is              years old.\r\n\r\nHis grandmother is                    years old.\r\n\r\nHis                is forty-five years old.\r\n\r\nHis mother is                 ",'rgba(0, 0, 0, 0)','#ffffff','#005500','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_22);
var kqd2_0 = CreText('kqd2_0',373,23,64,19,"five",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(kqd2_0);
var kqd2_2 = CreText('kqd2_2',443,92,84,19,"senventy",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(kqd2_2);
var kqd2_3 = CreText('kqd2_3',331,129,66,19,"father",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(kqd2_3);
var kqd2_4 = CreText('kqd2_4',405,164,67,19,"young",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(kqd2_4);
var Text_23 = CreText('Text_23',264,27,32,179,"1.\r\n\r\n2.\r\n\r\n3.\r\n\r\n4.\r\n\r\n5.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Bold','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_23);
var a_0 = CreText('a_0',330,43,54,20,"four",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(a_0);
var b_0 = CreText('b_0',419,43,90,20,"five",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(b_0);
var c_0 = CreText('c_0',528,43,54,20,"six",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(c_0);
var a_1 = CreText('a_1',330,77,54,20,"eight",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(a_1);
var b_1 = CreText('b_1',419,77,90,20,"nine",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(b_1);
var c_1 = CreText('c_1',528,77,54,20,"ten",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(c_1);
var a_2 = CreText('a_2',330,113,54,20,"fifty",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(a_2);
var b_2 = CreText('b_2',419,113,90,20,"fifty-six",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(b_2);
var c_2 = CreText('c_2',528,113,78,20,"seventy",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(c_2);
var a_3 = CreText('a_3',330,149,54,20,"father",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(a_3);
var b_3 = CreText('b_3',419,149,90,20,"mother",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(b_3);
var c_3 = CreText('c_3',528,149,101,20,"grandmother",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(c_3);
var a_4 = CreText('a_4',330,186,54,20,"young",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(a_4);
var b_4 = CreText('b_4',419,186,90,20,"old",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(b_4);
var c_4 = CreText('c_4',528,186,84,20,"nice",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickD2();
  return;
}
 );
Trang_5.add(c_4);
var kqd2_1 = CreText('kqd2_1',356,57,59,19,"ten",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(kqd2_1);
stage.add(Trang_5);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_7 = CreText('Text_7',27,255,587,181,"\r\n    There are                          people in the family.\r\n\r\n    My father is                         years old, and my mother is                 years old.\r\n\r\n    My sister/brother  is                         years old. I am                    years old.\r\n\r\n    We are a happy",'#e9dac7','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','10','11',1,'#ff6820','#e9dac7','0','0','rgba(0, 0, 0, 0)','0','0','4','5',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_7);
var Text_6 = CreText('Text_6',16,220,444,26,"3. Write about your family.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_2 = CreText('Text_2',564,451,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_2);
var e3_1 = CreText('e3_1',138,311,100,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_1);
var e3_0 = CreText('e3_0',125,273,111,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_0);
var e3_2 = CreText('e3_2',455,311,69,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_2);
var Text_3 = CreText('Text_3',11,6,242,26,"2. Write the questions.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Text_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_3);
var Text_4 = CreText('Text_4',461,23,145,193,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE25.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var Text_5 = CreText('Text_5',30,33,212,188,"    QUESTION\r\n 1. Who is that man?    \r\n 2. How old is he?          \r\n 3.\r\n 4.\r\n 5.\r\n 6.\r\n 7.\r\n 8.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var Text_8 = CreText('Text_8',266,33,212,188,"     ANSWER\r\n - He is the father.\r\n - He is forty-five years old.\r\n - She is the mother.\r\n - She is forty years old.\r\n - He is the son.\r\n - He is fifteen years old.\r\n - She is the daughher.\r\n - She is ten years old.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_8);
var e2_0 = CreText('e2_0',56,89,196,17,"Who is that woman?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_0);
var e2_1 = CreText('e2_1',56,106,196,17,"How old is she?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_1);
var e2_2 = CreText('e2_2',56,124,196,17,"Who is that boy?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_2);
var e2_3 = CreText('e2_3',56,142,196,17,"How old is he?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_3);
var e2_4 = CreText('e2_4',56,160,196,17,"Who is that girl?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_4);
var e2_5 = CreText('e2_5',56,179,196,17,"How old is she?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_5);
var e3_3 = CreText('e3_3',196,347,105,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_3);
var e3_4 = CreText('e3_4',416,345,82,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_4);
var e3_5 = CreText('e3_5',170,383,95,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_5);
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
