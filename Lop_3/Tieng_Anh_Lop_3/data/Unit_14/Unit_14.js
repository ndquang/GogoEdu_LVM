folder_Resource ='data/Unit_14';
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
var kq1=["WE","MP","CD","PR","MR","SA","CR","DK"];
var kqa1="";
function InitA2()
{
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#00ff00");
SetCursor("","obj_paint","pointer");
PaintWidth("","obj_paint",3);
for(var i=0;i<8;i++)
	SetShowObject("","a2word_"+i,0);
SetColor("","obj_paint",0,0,0,"ID_IMAGE34");
InvalidateObj("","");
}

function StartA2()
{
var i=0;
	var b_e= false;
	while(i<16 && b_e== false)
	{
		if(PosInObj("a2_"+i))
		{
			b_e= true;
			kqa1= GetText("","a2_"+i);
		}
		i=i+1;
	}

}
function EndA2()
{
	var i=0;
	var b_e= false;
	while(i<16 && b_e== false)
	{
		if(PosInObj("a2_"+i))
		{
			kqa1=kqa1+ GetText("","a2_"+i);
			for(var k=0;k<8;k++)
			if(kqa1==kq1[k])
			{
			SaveObject("","obj_paint");
			SpeakEN("","a2word_"+k);
			SetShowObject("","a2word_"+k,1);
			Delay("InvalidateObj('','');",500);
			return;
			}
			b_e== true;
		}
		i++;
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
var asp3=["This is a living room","There is the table","There is a sofa.","There is a cupboard"];
function A3Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",asp3[i]);
}
//
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
var kqb3=["There is a picture on the wall.","Are there any tables in the room?","How many chairs are there?","There are five chairs."];
var countword=[6,6,5,4];
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

var ad1=["","","","",""];
function InitD1()
{	
	for(var i=0; i<5;i++)
	{
	if(ad1[i]=="")
	 ad1[i]= GetText("","d1_"+i);
	SetText("","d1_"+i,"");
	SetFontColor("","d1_"+i,"#000000");
	SetCursor("","d1_"+i,"pointer");
	}
      InvalidateObj("","");
}
function CheckD1(){
	for(var i=0; i<5;i++)
	{
		if(RemoveDot(GetText("","d1_"+i)) ==  RemoveDot(ad1[i]))
		{
		SetText("","d1_"+i,ad1[i]);
		SetFontColor("","d1_"+i,"#00ff00");
		}
		else SetFontColor("","d1_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
var ad1spreak=["This is our kitchen.","There is a cupboard near the door. There is a TV on the cupboard.","There are two posters on the wall.","There is a table and six chairs.","There is a rice cooker on the table."];
function D1Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ad1spreak[i]);
}
var d2kq=[0,0,1,1,1];
var d2tl=["","","","",""];
function InitD2()
{
	for(var i=0; i<5;i++)
	{
	SetCursor("","yes"+i,"pointer");
	SetCursor("","no"+i,"pointer");
	SetText("","yes"+i,"");
	SetText("","no"+i,"");
	SetFontColor("","yes"+i,"#000000");
	SetFontColor("","no"+i,"#000000");
	d2tl[i]="";
     }
     InvalidateObj("","");
}
function D2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	if(leftStr(name,2)=="no")
	{
		SetText("","no"+i,"√");
		SetText("","yes"+i,"");
		d2tl[i]=0;
		SpeakEN("","","no");
	}
	else {
		SetText("","no"+i,"");
		SetText("","yes"+i,"√");
		d2tl[i]=1;
		SpeakEN("","","yes");
	}
 	InvalidateObj("","");
}
function CheckD2(){
	
	for(var i=0; i<5;i++)
	{
		if(d2kq[i] ==  d2tl[i])
		{
		SetFontColor("","yes"+i,"#00ff00");
		SetFontColor("","no"+i,"#00ff00");
		}
		else {
		SetFontColor("","yes"+i,"#ff0000");
		SetFontColor("","no"+i,"#ff0000");
		}
	}
	InvalidateObj("","");
}

//
var ae1=["","","",""];
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
var ae1spreak=[""];
function E1Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	var tt= GetText("","e1q_"+i) + " " + ae1[i];
	SpeakEN("","",tt);
}

var ae2=["","","","",""];
function InitE2()
{	
	for(var i=0; i<4;i++){
	if(ae2[i]=="")
	 ae2[i]= GetText("","e2_"+i);
	SetText("","e2_"+i,"");
	SetFontColor("","e2_"+i,"#0000ff");
	SetCursor("","e2_"+i,"pointer");
	}
      InvalidateObj("","");
}
function CheckE2(){
	for(var i=0; i<4;i++){
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
var ae2spreak=["How many coats are there on the bed","How many photos are there on the wall.","How many cups are there on the table?","How many chairs are there in the room?"];

function E2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae2spreak[i]+" "+ae2[i]);
}
function InitE3()
{
for(var i=0; i<5;i++){
SetCursor("","e3_"+i,"pointer");
SetText("","e3_"+i,"");
}
InvalidateObj("","");
}
var ae3spreak=["Are there any posters on the wall of your living room?","How many chairs are there in your kitchen?","Are there any computers in your room?","How many coats are there in your wardrobe?"];
function E3Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae3spreak[i]);
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
var Text_26 = CreText('Text_26',441,322,111,100,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE2.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_26);
var Text_21 = CreText('Text_21',253,129,224,27,"a.                            b.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_21);
var Text_27 = CreText('Text_27',535,193,103,100,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE3.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_27);
var Text_28 = CreText('Text_28',543,323,95,98,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE5.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_28);
var Text_25 = CreText('Text_25',109,350,74,104,"2",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE11.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_25);
var a1_0 = CreText('a1_0',275,129,106,27,"c_p",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_0);
var Text_32 = CreText('Text_32',76,1,564,63,"Are there any posters in the room?",'#a8d3ff','#ffffff','#ff0000','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#a8d3ff','0','3','#ffff00','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_32);
var Text_1 = CreText('Text_1',-1,1,90,63,"Unit 14",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#00008b','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
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
var Text_5 = CreText('Text_5',585,456,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var a1_1 = CreText('a1_1',460,129,111,27,"f_n",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_1);
var Text_b = CreText('Text_b',67,127,44,29,"a",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_h = CreText('Text_h',134,127,44,28,"u",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_12 = CreText('Text_12',456,199,84,84,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE4.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_12);
var Text_13 = CreText('Text_13',104,202,95,84,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE1.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_13);
var a2word_0 = CreText('a2word_0',11,291,96,20,"WARDROBE",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_0);
var a2word_1 = CreText('a2word_1',125,290,52,20,"MAP",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_1);
var a2word_4 = CreText('a2word_4',451,291,87,20,"MIRROR",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_4);
var a2word_2 = CreText('a2word_2',6,453,97,20,"CUPBOARD",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_2);
var a2word_3 = CreText('a2word_3',107,454,78,20,"POSTER",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_3);
var a2word_5 = CreText('a2word_5',547,291,76,20,"SOFA",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_5);
var Text_2 = CreText('Text_2',16,195,87,95,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE6.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_6 = CreText('Text_6',15,348,81,100,"",'#ffffff','#ffffff','#ff0000','#ff0000','ID_IMAGE7.JPG',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_6);
var Text_9 = CreText('Text_9',21,164,531,26,"2 . Find and circle the names of the colours.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA2();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_9);
var a2word_6 = CreText('a2word_6',461,426,76,20,"CHAIR",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_6);
var a2word_7 = CreText('a2word_7',559,424,65,20,"DESK",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2word_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2word_7);
var a2_0 = CreText('a2_0',413,207,29,26,"R",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_0);
var a2_1 = CreText('a2_1',287,323,29,26,"C",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_1);
var a2_2 = CreText('a2_2',259,204,29,26,"P",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_2);
var a2_3 = CreText('a2_3',195,447,29,26,"C",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_3);
var a2_4 = CreText('a2_4',353,357,29,26,"S",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_4);
var a2_5 = CreText('a2_5',384,295,29,26,"M",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_5);
var a2_6 = CreText('a2_6',195,292,29,26,"D",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_6);
var a2_7 = CreText('a2_7',415,443,29,26,"D",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_7);
var a2_8 = CreText('a2_8',413,322,29,26,"R",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_8);
var a2_9 = CreText('a2_9',384,444,29,26,"R",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_9);
var a2_10 = CreText('a2_10',289,291,29,26,"K",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_10);
var a2_11 = CreText('a2_11',196,205,29,26,"W",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_11);
var a2_12 = CreText('a2_12',259,445,29,26,"P",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_12);
var a2_13 = CreText('a2_13',259,385,29,26,"M",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_13);
var a2_14 = CreText('a2_14',194,416,29,26,"E",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_14);
var a2_15 = CreText('a2_15',353,443,29,26,"A",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_15);
var obj_paint = CreText('obj_paint',194,203,254,271,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE34.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndA2();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
StartA2();
  return;
}
 );
Trang_1.add(obj_paint);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var Text_3 = CreText('Text_3',131,133,109,108,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE33.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_5 = CreText('Text_5',407,27,129,99,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE32.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_5);
var Text_9 = CreText('Text_9',96,2,139,150,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE31.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_9);
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
var b10_0 = CreText('b10_0',37,316,300,27,"1. There's",'#ffe0c1','#ffa8ff','#000000','#000000','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_0);
var b10_1 = CreText('b10_1',37,350,300,27,"2. There are",'#ffe0c1','#ffa8ff','#000000','#000000','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_1);
var b10_2 = CreText('b10_2',37,384,300,27,"3. Are there",'#ffe0c1','#ffa8ff','#000000','#000000','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_2);
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
var b10_3 = CreText('b10_3',37,419,300,27,"4. How many",'#ffe0c1','#ffa8ff','#000000','#000000','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_3);
var b11_3 = CreText('b11_3',381,416,253,27,"any chairs in the living room?",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080c0','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_2");
  return;
}
 );
Trang_2.add(b11_3);
var b11_1 = CreText('b11_1',381,350,253,27,"a desk in the bedroom.",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080c0','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_0");
  return;
}
 );
Trang_2.add(b11_1);
var b11_0 = CreText('b11_0',381,316,253,27,"posters are there?",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080c0','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_3");
  return;
}
 );
Trang_2.add(b11_0);
var b11_2 = CreText('b11_2',381,384,253,27,"four photos on the table.",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080c0','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_1");
  return;
}
 );
Trang_2.add(b11_2);
var Text_12 = CreText('Text_12',381,123,101,20,"2. There is a",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_12);
var Text_2 = CreText('Text_2',39,4,281,26,"3 . Look read and complete.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA3();
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_2);
var a3_0 = CreText('a3_0',195,125,57,22,"room",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var a3_2 = CreText('a3_2',182,216,48,22,"sofa",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var a3_3 = CreText('a3_3',463,229,80,22,"cupboard",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var a3_1 = CreText('a3_1',481,123,68,22,"table",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Check2 = CreText('Check2',306,5,83,23,"√ Check",'#ffffff','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
Trang_2.add(Check2);
var Text_10 = CreText('Text_10',61,127,132,20,"1. This is living",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_10);
var Text_11 = CreText('Text_11',81,218,100,20,"3. There is a",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_11);
var Text_13 = CreText('Text_13',345,230,117,20,"4. There is a",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_13);
var Text_14 = CreText('Text_14',409,156,97,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_14);
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
var b30_0 = CreText('b30_0',91,263,38,22,"is /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',90,235,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_0);
var b30_1 = CreText('b30_1',135,263,31,22,"a /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_1);
var b30_2 = CreText('b30_2',173,263,68,22,"there /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_2);
var b31_0 = CreText('b31_0',91,317,76,25,"tables /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_0);
var b31_1 = CreText('b31_1',173,317,53,25,"any /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_1);
var b31_2 = CreText('b31_2',232,317,51,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',90,287,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_1);
var b32_0 = CreText('b32_0',91,370,74,25,"many /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_0);
var b32_1 = CreText('b32_1',165,370,44,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_1);
var b32_2 = CreText('b32_2',223,370,73,25,"chairs /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_2);
var b33_0 = CreText('b33_0',91,424,57,25,"five /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_0);
var b33_1 = CreText('b33_1',150,425,74,25,"there /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',90,342,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',90,397,407,25,"",'#ddffff','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_3);
var b33_2 = CreText('b33_2',234,424,74,25,"chairs /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b33_3 = CreText('b33_3',314,424,56,25,"are",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_3);
var b31_3 = CreText('b31_3',289,317,42,25,"in /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_3);
var Text_5 = CreText('Text_5',56,238,30,192,"1.\r\n\r\n\r\n2.\r\n\r\n\r\n3.\r\n\r\n\r\n4.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Bold','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Text_5);
var b2_0 = CreText('b2_0',52,25,310,40,"   1. Where is my coat?\r\n       ...",'#ffeaff','#ffeaff','#000000','#000000','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ffeaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_0);
var b2_1 = CreText('b2_1',52,67,310,40,"   2. Where are my pemcils?\r\n       ...",'#ffeaff','#ffeaff','#000000','#000000','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ffeaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_1);
var b2_2 = CreText('b2_2',52,108,310,40,"   3. How many cups are there?\r\n       ...",'#ffeaff','#ffeaff','#000000','#000000','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ffeaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_2);
var b21_1 = CreText('b21_1',378,75,190,27,"There are two.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
Trang_3.add(b21_1);
var b2 = CreText('b2',23,-1,314,28,"2 . Match the sentences.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB2();
  return;
}
 );
Trang_3.add(b2);
var b2_3 = CreText('b2_3',53,149,310,40,"   4. Are there any sofas in the living room?\r\n       ...",'#ffeaff','#ffeaff','#000000','#000000','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'#009300','#ffeaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_3);
var b21_3 = CreText('b21_3',380,151,190,27,"It's behind the door.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
Trang_3.add(b21_3);
var b21_2 = CreText('b21_2',378,113,190,27,"They're under the chair.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
Trang_3.add(b21_2);
var b21_0 = CreText('b21_0',378,34,190,27,"Yes, there are.",'#ffffe0','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
Trang_3.add(b21_0);
var b30_3 = CreText('b30_3',249,263,83,22,"picture /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_3);
var b30_4 = CreText('b30_4',337,263,89,22,"the wall /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_4);
var b30_5 = CreText('b30_5',435,263,54,22,"on",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_5);
var b31_4 = CreText('b31_4',337,317,61,25,"there /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_4);
var b31_5 = CreText('b31_5',405,317,99,25,"the room",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_5);
var b32_3 = CreText('b32_3',304,370,57,25,"how /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_3);
var b32_4 = CreText('b32_4',375,370,71,25,"there /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_4);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var Text_5 = CreText('Text_5',122,37,404,232,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE37.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_5);
var Text_2 = CreText('Text_2',15,265,167,34,"D. READING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_2);
var c_1 = CreText('c_1',197,46,136,53,"Are there any posters / maps in your classroom?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',1,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_1);
var Text_1 = CreText('Text_1',178,3,272,23,"Read anh ask the questions.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_13 = CreText('Text_13',175,269,309,26,"1. Look read and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD1();
  return;
}
 );
Trang_4.add(Text_13);
var Text_8 = CreText('Text_8',349,48,169,43,"Are there any balls/ posters/ photos in your room?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_8);
var c_2 = CreText('c_2',234,127,106,56,"How many desks/chairs are there in your classroom?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',1,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_2);
var c_0 = CreText('c_0',291,196,78,58,"How many tables/chairs are there?\r\n",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',1,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_0);
var Text_3 = CreText('Text_3',26,294,538,185,"This is our                . There is a\r\n\r\ncupboard near the door. There is a\r\n\r\n            on the cupboard. There are\r\n\r\n               posters on the wall. There is\r\n\r\na table and six                . There is a rice\r\n\r\ncooker             the table.",'#ffefdf','#ffffff','#005500','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','11','1',1,'#666666','#ffefdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_3);
var Image_1 = CreText('Image_1',327,298,229,180,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE40.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_4.add(Image_1);
var d1_0 = CreText('d1_0',102,289,59,23,"kitchen",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D1Click();
  return;
}
 );
Trang_4.add(d1_0);
var d1_1 = CreText('d1_1',34,353,39,23,"TV",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D1Click();
  return;
}
 );
Trang_4.add(d1_1);
var d1_2 = CreText('d1_2',34,386,48,23,"two",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D1Click();
  return;
}
 );
Trang_4.add(d1_2);
var d1_4 = CreText('d1_4',74,449,42,23,"on",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D1Click();
  return;
}
 );
Trang_4.add(d1_4);
var d1_3 = CreText('d1_3',126,417,56,23,"chairs",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
d1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
D1Click();
  return;
}
 );
Trang_4.add(d1_3);
var Text_12 = CreText('Text_12',587,455,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_4.add(Text_12);
var Text_4 = CreText('Text_4',587,430,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_4.add(Text_4);
var Text_7 = CreText('Text_7',394,270,83,23,"√ Check",'#ffad5b','#ffffff','#009300','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(Text_7);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_5.add(Trang_5_Backrounnd);
var e1q_1 = CreText('e1q_1',347,304,260,60,"A: Are there any posters on the wall?\r\n\r\nB: No,\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(e1q_1);
var e1q_0 = CreText('e1q_0',72,304,280,51,"A: Are there any chairs in the room?\r\n\r\nB: Yes, ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(e1q_0);
var e1q_3 = CreText('e1q_3',352,397,275,50,"A: Are there any photos on the table?\r\n\r\nB: No,",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(e1q_3);
var Text_1 = CreText('Text_1',28,247,188,27,"E. WRITING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_1);
var e1_1 = CreText('e1_1',398,339,84,24,"there aren't",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_5 = CreText('Text_5',38,269,222,26,"1. Read and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE1();
  return;
}
 );
Trang_5.add(Text_5);
var Check2 = CreText('Check2',161,192,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Check2);
var Text_7 = CreText('Text_7',588,431,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_5.add(Text_7);
var Text_8 = CreText('Text_8',589,457,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_5.add(Text_8);
var e1_0 = CreText('e1_0',126,336,86,24,"there are",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e1_3 = CreText('e1_3',402,426,86,24,"there aren't",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e1q_2 = CreText('e1q_2',75,397,281,51,"A: Are there any cups in the cupboard?\r\n\r\nB: Yes,",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(e1q_2);
var e1_2 = CreText('e1_2',131,430,85,24,"there are",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_2 = CreText('Text_2',44,-2,280,26,"2. Read and tick(√)",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD2();
  return;
}
 );
Trang_5.add(Text_2);
var Text_3 = CreText('Text_3',88,21,424,201,"\r\n  1.\r\n\r\n  2. \r\n\r\n  3.\r\n\r\n  4.\r\n\r\n  5.\r\n",'#ffdfff','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffdfff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_3);
var Text_6 = CreText('Text_6',138,21,284,199,"\r\nThere's a wardrobe near the door.\r\n\r\nThere's a TV on the table.\r\n\r\nThere are two posters on the wall.\r\n\r\nThere are six chairs at the table.\r\n\r\nThere is a cooker on the table.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_6);
var yes0 = CreText('yes0',419,39,27,24,"√",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes0);
var yes1 = CreText('yes1',419,73,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes1);
var yes2 = CreText('yes2',419,107,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes2);
var yes3 = CreText('yes3',419,141,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes3);
var yes4 = CreText('yes4',419,177,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes4);
var no0 = CreText('no0',470,40,27,24,"√",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no0);
var no1 = CreText('no1',470,74,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no1);
var no2 = CreText('no2',470,108,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no2);
var no3 = CreText('no3',470,142,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no3);
var no4 = CreText('no4',470,178,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no4);
var Text_9 = CreText('Text_9',407,18,102,26,"YES     NO",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_9);
var Text_18 = CreText('Text_18',512,21,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
Trang_5.add(Text_18);
var Text_4 = CreText('Text_4',224,270,83,23,"√ Check",'#80ff80','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#80ff80','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Text_4);
stage.add(Trang_5);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_9 = CreText('Text_9',12,41,402,158,"1.How many coats are there on the bed?\r\n\r\n2. How many photos are there on the wall?\r\n\r\n3. How many cups are there on the table?\r\n\r\n4. How many chairs are there in the room?\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_9);
var Text_7 = CreText('Text_7',22,275,464,190,"\r\n  1. Are there any posters on the wall of your living room?\r\n\r\n  2. How many chairs are there in your kitchen?\r\n\r\n  3. Are there any computers in your room?\r\n\r\n  4. How many coats are there in your wardrobe?\r\n",'#c0ffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','10','11',1,'#ff6820','#c0ffff','0','0','rgba(0, 0, 0, 0)','0','0','4','5',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_7);
var Text_6 = CreText('Text_6',16,236,378,26,"3. Write about things in the house.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE3();
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
var e3_1 = CreText('e3_1',54,343,325,22,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E3Click();
  return;
}
 );
Page_2.add(e3_1);
var e3_0 = CreText('e3_0',53,308,325,22,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E3Click();
  return;
}
 );
Page_2.add(e3_0);
var e3_2 = CreText('e3_2',53,380,325,22,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E3Click();
  return;
}
 );
Page_2.add(e3_2);
var Text_3 = CreText('Text_3',16,6,354,26,"2. Look and write the answers.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e2_0 = CreText('e2_0',33,55,282,23,"There are two.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e2_1 = CreText('e2_1',36,91,282,23,"There are two.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e2_2 = CreText('e2_2',36,130,282,23,"There are six.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var e3_3 = CreText('e3_3',52,424,325,22,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E3Click();
  return;
}
 );
Page_2.add(e3_3);
var Check2 = CreText('Check2',308,7,83,23,"√ Check",'#80ff80','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#80ff80','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE2();
  return;
}
 );
Page_2.add(Check2);
var Text_1 = CreText('Text_1',363,39,212,175,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var e2_3 = CreText('e2_3',36,170,282,23,"There are six.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#00008b','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_3);
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
