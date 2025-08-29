folder_Resource ='data/Unit_5';
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
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#00ff00");
SetCursor("","obj_paint","pointer");
PaintWidth("","obj_paint",3);

InvalidateObj("","");
}
var kqa1="";
function StartA1()
{
var i=0;
	var b_e= false;
	while(i<4 && b_e== false)
	{
		if(PosInObj("a1_"+i))
		{
			b_e= true;
			kqa1=GetText("","a1_"+i);
		}
		i=i+1;
	}

}
function EndA1()
{
	var i=0;
	var b_e= false;
	while(i<4 && b_e== false)
	{
		if(PosInObj("a1_"+i))
		{
			
			kqa1=kqa1+GetText("","a1_"+i);
			for(var k=0;k<2;k++)
			if(kqa1==kq1[k])
			{
			SaveObject("","obj_paint");
			SpeakEN("","", kq1speak[k]);
			Delay("InvalidateObj('','');",500);
			return;
			}
			b_e== true;
		}
		i++;
	}
	InvalidateObj("","");
}
function InitA2()
{
	
	for(var i=0; i<2;i++){
	SetMoveView("","a2w_"+i,1);
	SetCursor("","a2w_"+i,"pointer");
	SetFontColor("","a2_"+i,-1);
     }
     InvalidateObj("","");
}

var a2speak=["He's my friend","She's my friend","They're my friends","Peter and Linda are my friends"];
function SpeakA2()
{
	var i= rightStr(GetName(""),1);
	SpeakEN("","",a2speak[i]);

}
function CheckA2()
{
	var i=0;
	var b_e= false;
	while(i<4 && b_e== false)
	{
		if(PosInObj("a2_"+i))
		{ 
              	if(toLowerCase(GetText("",""))== toLowerCase(GetText("","a2_"+i))){
			SetFontColor("","a2_"+i,"#0000ff");
			SpeakEN("","",a2speak[i]);
			}
			b_e== true;
		}
		i++;
	}
	MoveObjectTo("","",-1,-1);
      InvalidateObj("","");
}

function InitA3()
{
	
	for(var i=0; i<5;i++){
	SetMoveView("","a3w_"+i,1);
	SetCursor("","a3w_"+i,"pointer");
	SetFontColor("","a3_"+i,-1);
	SetShowObject("","a3w_"+i,1);
     }
     InvalidateObj("","");
}

var a3speak=["This is Linda.","She's my friend","And this is Tony","He is my friend too.","They are my friends."];
function CheckA3()
{
	var i=0;
	var b_e= false;
	while(i<5 && b_e== false)
	{
		if(PosInObj("a3_"+i))
		{ 
              	if(toLowerCase(GetText("",""))== toLowerCase(GetText("","a3_"+i))){
			SetFontColor("","a3_"+i,"#0000ff");
			SetShowObject("","",0);
			SpeakEN("","",a3speak[i]);
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


var kqb3=["This is Peter.","That is Linda.","Are Linda and Tony your friends?","No, they aren't"];
var countword=[3,3,6,3];
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
	
	for(var i=0; i<5;i++){
	SetMoveView("","d1w_"+i,1);
	SetCursor("","d1w_"+i,"pointer");
	SetShowObject("","d1w_"+i,1);
	MoveObjectTo("","d1w_"+i,-1,-1);
	SetFontColor("","d1_"+i,-1);
     }
     InvalidateObj("","");
}

var d1speak=["Hello. My name's Nam", "I'm eight years old. I'm in class 3A.","This is my best friend Mai. She is eight years old too.","Here are Peter and Linda. Peter is seven and Linda is nine.","Thay're my friends too."];
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
var d2kq=[1,0,0,0,1];
var d2tl=["","","","",""];
function InitD2()
{
	for(var i=0; i<5;i++)
	{
	SetCursor("","yes"+i,"pointer");
	SetCursor("","no"+i,"pointer");
	SetText("","yes"+i,"");
	SetText("","no"+i,"");
	SetFontColor("","yes"+i,"#0000ff");
	SetFontColor("","no"+i,"#0000ff");
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
		Speak("no","EN");
	}
	else {
		SetText("","no"+i,"");
		SetText("","yes"+i,"√");
		d2tl[i]=1;
		Speak("yes","EN");
	}
 	InvalidateObj("","");
}
function CheckD2(){
	
	for(var i=0; i<5;i++)
	{
		if(d2kq[i] == d2tl[i])
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
var ae1=["","","",""];
function InitE1()
{	
	for(var i=0; i<4;i++){
	if(ae1[i]=="")
	 ae1[i]= GetText("","e1_"+i);
	SetText("","e1_"+i,"");
	SetFontColor("","e1_"+i,"#000000");
	SetCursor("","e1_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckE1(){
	for(var i=0; i<4;i++){
		if(toLowerCase(GetText("","e1_"+i)) ==  toLowerCase(ae1[i]))
		{
		SetText("","e1_"+i,ae1[i]);
		SetFontColor("","e1_"+i,"#00ff00");
		}
		else SetFontColor("","e1_"+i,"#ff0000");
	}
InvalidateObj("","");
}
var ae2=["","","","","","","","",""];
function InitE2()
{	
	for(var i=0; i<4;i++){
	if(ae2[i]=="")
	 ae2[i]= GetText("","e2_"+i);
	SetText("","e2_"+i,"");
	SetFontColor("","e2_"+i,"#000000");
	SetCursor("","e2_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckE2(){
	for(var i=0; i<4;i++){
		if(toLowerCase(GetText("","e2_"+i)) ==  toLowerCase(ae2[i]))
		{
		SetText("","e2_"+i,ae2[i]);
		SetFontColor("","e2_"+i,"#00ff00");
		}
		else SetFontColor("","e2_"+i,"#ff0000");
	}
InvalidateObj("","");
}
function InitE3()
{	
SetCursor("","Text_8","pointer");
SetCursor("","Text_9","pointer");
SetText("","Text_8","");
SetText("","Text_9","");
SetPaint("","your_friend",1);
PaintType("","your_friend",6);
PaintColor("","your_friend","#000000");
SetCursor("","your_friend","pointer");
PaintWidth("","your_friend",3);
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
var Text_11 = CreText('Text_11',73,396,253,81,"He's my\r\n\r\nThey're my ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_11);
var Text_12 = CreText('Text_12',298,401,253,73,"She's my \r\n\r\nPeter and Linda are my\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_12);
var Text_8 = CreText('Text_8',40,395,532,85,"  1.                                              2. \r\n\r\n  3.                                              4.",'rgba(0, 0, 0, 0)','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','middle',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_8);
var Text_32 = CreText('Text_32',-1,2,641,60,"Are they your friends?",'#a8d3ff','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#a8d3ff','0','3','#ffff00','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_32);
var Text_1 = CreText('Text_1',-1,2,117,60,"Unit 5",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',12,'0.00','0','1',1,'#00008b','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
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
var Text_4 = CreText('Text_4',27,100,570,26,"1 . Find and circle the two words. Read them aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_4);
var Text_9 = CreText('Text_9',18,294,316,26,"2 . Read and complete.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA2();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_9);
var Text_5 = CreText('Text_5',593,455,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_5);
var a1_0 = CreText('a1_0',185,171,22,22,"T",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a1_0);
var a1_1 = CreText('a1_1',185,238,22,22,"T",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a1_1);
var a1_2 = CreText('a1_2',105,238,22,22,"Y",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a1_2);
var a1_3 = CreText('a1_3',158,239,22,22,"S",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a1_3);
var Text_2 = CreText('Text_2',287,126,276,171,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_6 = CreText('Text_6',299,157,61,20,"Yes, it is.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_6);
var Text_7 = CreText('Text_7',372,134,138,20,"Is that your friend?",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_7);
var a2_0 = CreText('a2_0',143,407,70,23,"friend",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_0);
var a2_1 = CreText('a2_1',380,408,74,23,"friend",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_1);
var a2_2 = CreText('a2_2',172,443,76,23,"friends",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_2);
var a2_3 = CreText('a2_3',474,444,72,23,"friends",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakA2();
  return;
}
 );
Trang_1.add(a2_3);
var Text_13 = CreText('Text_13',120,320,70,75,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_13);
var Text_14 = CreText('Text_14',480,323,70,75,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_14);
var obj_paint = CreText('obj_paint',54,126,180,158,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndA1();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
StartA1();
  return;
}
 );
Trang_1.add(obj_paint);
var a2w_1 = CreText('a2w_1',262,334,72,24,"friend",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a2w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA2();
  return;
}
 );
a2w_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2w_1);
var a2w_0 = CreText('a2w_0',342,334,76,24,"friends",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
a2w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA2();
  return;
}
 );
a2w_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a2w_0);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var Text_6 = CreText('Text_6',19,256,451,40,"B. SENTENCE PATTERNS",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_6);
var Text_7 = CreText('Text_7',33,286,273,26,"1 . Read and match.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b10_0 = CreText('b10_0',37,312,316,27,"1. This is",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_0);
var b10_1 = CreText('b10_1',37,346,316,27,"2. She is my",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_1);
var b10_2 = CreText('b10_2',37,380,316,27,"3. Tony and Linda are my",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_2);
var b11_2 = CreText('b11_2',395,380,177,27,"Linda.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_0");
  return;
}
 );
Trang_2.add(b11_2);
var Text_2 = CreText('Text_2',21,5,273,26,"3 . Look, read and complete.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b10_3 = CreText('b10_3',37,415,316,27,"4. They",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','2',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_3);
var Text_3 = CreText('Text_3',53,60,289,197,"\r\n  1.\r\n\r\n  2. \r\n\r\n  3.\r\n\r\n  4.\r\n\r\n  5.",'#aed7ff','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_11 = CreText('Text_11',94,60,257,197,"\r\n           is Linda.\r\n\r\nShe's my \r\n\r\nAnd                 is Tony.\r\n\r\n             is my friend too.\r\n\r\nThey are my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_11);
var a3_0 = CreText('a3_0',95,77,48,20,"This",'#aed7ff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_0);
var a3_1 = CreText('a3_1',171,113,74,20,"friend",'#aed7ff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_1);
var a3_2 = CreText('a3_2',131,150,69,20,"this",'#aed7ff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_2);
var a3_3 = CreText('a3_3',98,187,53,20,"He",'#aed7ff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_3);
var a3_4 = CreText('a3_4',190,221,72,20,"friends",'#aed7ff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(a3_4);
var Text_12 = CreText('Text_12',356,60,207,186,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_12);
var a3w_2 = CreText('a3w_2',171,39,40,21,"he",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
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
var a3w_1 = CreText('a3w_1',123,39,39,21,"this",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
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
var a3w_0 = CreText('a3w_0',53,39,61,21,"friend",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
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
var a3w_4 = CreText('a3w_4',299,39,43,21,"this",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
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
var a3w_3 = CreText('a3w_3',220,39,68,21,"friends",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,0,'#7f7f7f',0,1.50);
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
var b11_3 = CreText('b11_3',396,415,177,27,"friend.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_1");
  return;
}
 );
Trang_2.add(b11_3);
var b11_1 = CreText('b11_1',395,346,177,27,"friends.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_2");
  return;
}
 );
Trang_2.add(b11_1);
var b11_0 = CreText('b11_0',395,312,177,27,"are my friends too?",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_3");
  return;
}
 );
Trang_2.add(b11_0);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()'});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var Text_1 = CreText('Text_1',26,216,444,26,"3 . Put the words in order. Then read aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB3();
  return;
}
 );
Trang_3.add(Text_1);
var b30_0 = CreText('b30_0',151,244,56,25,"is /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',152,270,231,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_0);
var b30_1 = CreText('b30_1',198,244,71,25,"Peter /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_1);
var b30_2 = CreText('b30_2',285,244,60,25,"this /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_2);
var b31_0 = CreText('b31_0',151,299,59,25,"that /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_0);
var b31_1 = CreText('b31_1',214,299,66,25,"Linda /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_1);
var b31_2 = CreText('b31_2',281,299,59,25,"is /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',152,326,231,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_1);
var b32_0 = CreText('b32_0',151,354,66,25,"Linda /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_0);
var b32_1 = CreText('b32_1',221,354,62,25,"Tony /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_1);
var b32_2 = CreText('b32_2',287,354,62,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_2);
var b33_0 = CreText('b33_0',151,411,65,25,"aren't /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_0);
var b33_1 = CreText('b33_1',241,411,59,25,"they /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',152,382,383,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',152,438,231,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_3);
var b33_2 = CreText('b33_2',325,411,59,25,"no /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_2);
var Text_2 = CreText('Text_2',590,456,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_3.add(Text_2);
var Text_3 = CreText('Text_3',543,456,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_3.add(Text_3);
var b2_0 = CreText('b2_0',54,33,305,42,"     1. Is this Linda?\r\n         ...",'#ffcaff','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffcaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_0);
var b2_1 = CreText('b2_1',54,78,305,42,"     2. Is that Tony?\r\n         ...",'#ffcaff','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffcaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_1);
var b2_2 = CreText('b2_2',54,123,305,42,"     3. Who are they?\r\n          ...",'#ffcaff','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffcaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_2);
var Text_7 = CreText('Text_7',22,6,273,26,"2 . Match the sentences.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB2();
  return;
}
 );
Trang_3.add(Text_7);
var b2_3 = CreText('b2_3',54,167,305,42,"     4. Are they your friends?\r\n         ...",'#ffcaff','#ffffe0','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffcaff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_3);
var b32_3 = CreText('b32_3',353,354,48,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_3);
var b32_4 = CreText('b32_4',405,354,49,25,"and /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_4);
var b32_5 = CreText('b32_5',460,354,80,25,"friends /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_5);
var Text_4 = CreText('Text_4',106,250,42,226,"  1.\r\n\r\n\r\n  2. \r\n\r\n\r\n  3.\r\n\r\n\r\n  4.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#aed7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Text_4);
var b21_0 = CreText('b21_0',392,41,216,27,"Yes, they are.",'#dafeda','#fffe99','#000000','#ffffff','',16,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
Trang_3.add(b21_0);
var b21_1 = CreText('b21_1',392,80,216,27,"They're Peter and Mary.",'#dafeda','#fffe99','#000000','#ffffff','',16,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
Trang_3.add(b21_1);
var b21_2 = CreText('b21_2',392,119,216,27,"Yes, it is Linda.",'#dafeda','#fffe99','#000000','#ffffff','',16,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
Trang_3.add(b21_2);
var b21_3 = CreText('b21_3',394,160,216,27,"No, it isn't. It's Peter.",'#dafeda','#fffe99','#000000','#ffffff','',16,'Arial','Normal','left','middle',12,'0.00','1','0',1,'#0080ff','#dafeda','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
Trang_3.add(b21_3);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var Text_11 = CreText('Text_11',398,296,223,151,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_11);
var Text_16 = CreText('Text_16',59,292,446,185,"Hello. My              Nam. \r\n\r\nI'm eight              old. I'm in class 3A. \r\n\r\nThis is my best             Mai. She is eight years old too.\r\n\r\nHere are Peter and Linda. Peter is\r\n\r\nand Linda is nine. They're my                   too.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_5 = CreText('Text_5',192,10,405,233,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_5);
var Text_7 = CreText('Text_7',208,18,113,31,"Hello, This is Mary.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_7);
var Text_8 = CreText('Text_8',369,146,108,64,"Hello. These are my friends, Phong and Hoa.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_8);
var Text_9 = CreText('Text_9',317,81,111,50,"Hello. This is Nam and Quan.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_9);
var Text_10 = CreText('Text_10',404,14,181,31,"Hi, this is my friend Tony.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_10);
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
var d1_0 = CreText('d1_0',131,283,64,23,"name's",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_0);
var d1_2 = CreText('d1_2',175,356,59,23,"friend",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_2);
var d1_1 = CreText('d1_1',129,321,57,23,"years",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_1);
var d1_3 = CreText('d1_3',319,392,72,23,"seven",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_3);
var d1w_2 = CreText('d1w_2',391,257,55,24,"friend",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_2);
var d1w_1 = CreText('d1w_1',328,257,55,24,"years",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_1);
var d1w_0 = CreText('d1w_0',265,257,55,24,"seven",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
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
var d1w_4 = CreText('d1w_4',530,257,69,24,"name's",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_4);
var d1_4 = CreText('d1_4',284,430,72,23,"friends",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_4);
var d1w_3 = CreText('d1w_3',455,257,69,24,"friends",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_3);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_5.add(Trang_5_Backrounnd);
var Text_4 = CreText('Text_4',4,2,280,26,"2. Read and tick(√)",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD2();
  return;
}
 );
Trang_5.add(Text_4);
var Text_17 = CreText('Text_17',487,375,141,58,"Hoa and Quan are\r\n\r\nmy                  too.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_17);
var Text_16 = CreText('Text_16',301,376,141,58,"Linda and Peter\r\n\r\nare my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_16);
var Text_6 = CreText('Text_6',171,379,108,58,"And this is my\r\n\r\n                Tony.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_6);
var Text_15 = CreText('Text_15',46,411,113,21,"my friend Mary.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#ffbbff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_15);
var Text_1 = CreText('Text_1',21,232,451,30,"E. WRITING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_1);
var Text_10 = CreText('Text_10',60,284,66,87,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_10);
var e1_1 = CreText('e1_1',175,405,57,18,"friend",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_5.add(e1_1);
var e1_0 = CreText('e1_0',56,380,63,18,"This is",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_5.add(e1_0);
var e1_3 = CreText('e1_3',512,405,62,18,"friends",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_5.add(e1_3);
var Text_5 = CreText('Text_5',56,258,222,26,"1. Look and write",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE1();
  return;
}
 );
Trang_5.add(Text_5);
var Check2 = CreText('Check2',276,443,83,23,"√ Check",'#009300','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Check2);
var Text_7 = CreText('Text_7',547,452,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_5.add(Text_7);
var Text_8 = CreText('Text_8',594,452,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_5.add(Text_8);
var e1_2 = CreText('e1_2',351,405,60,18,"friends",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_5.add(e1_2);
var Text_11 = CreText('Text_11',48,25,424,202,"\r\n  1.\r\n\r\n  2. \r\n\r\n  3.\r\n\r\n  4.\r\n\r\n  5.\r\n",'#97cbff','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#97cbff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_11);
var Text_13 = CreText('Text_13',98,25,284,202,"\r\nNam is eight years old.\r\n\r\nHis best friend is Linda.\r\n\r\nLinda is ten years old.\r\n\r\nPeter is nine years old.\r\n\r\nPeter and Linda are Nam's friends.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_13);
var yes0 = CreText('yes0',379,43,27,24,"√",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes0);
var yes1 = CreText('yes1',379,77,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes1);
var yes2 = CreText('yes2',379,111,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes2);
var yes3 = CreText('yes3',379,145,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes3);
var yes4 = CreText('yes4',379,181,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes4);
var no0 = CreText('no0',430,44,27,24,"√",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no0);
var no1 = CreText('no1',430,78,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no1);
var no2 = CreText('no2',430,112,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no2);
var no3 = CreText('no3',430,146,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no3);
var no4 = CreText('no4',430,182,27,24,"",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no4);
var Text_3 = CreText('Text_3',363,22,102,26,"YES     NO",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_3);
var Text_2 = CreText('Text_2',472,25,83,31,"√ Check",'#009300','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
Trang_5.add(Text_2);
var Text_9 = CreText('Text_9',178,284,66,84,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE10.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_9);
var Text_12 = CreText('Text_12',296,284,140,84,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_12);
var Text_14 = CreText('Text_14',488,284,140,84,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_14);
stage.add(Trang_5);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_7 = CreText('Text_7',11,240,275,129,"\r\n\r\n\r\n                      and \r\n\r\nare my friends.",'#ffff91','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','10','11',8,'rgba(0, 0, 0, 0)','#ffff91','0','0','rgba(0, 0, 0, 0)','0','0','4','5',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_7);
var Text_6 = CreText('Text_6',18,209,444,26,"3. Write about your friends.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var your_friend = CreText('your_friend',335,216,277,250,"",'#ffffff','#ffffff','#8b0000','#ffffff','ID_IMAGE19.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','5',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
your_friend.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
			SaveObject("","your_friend");

  return;
}
 );
Page_2.add(your_friend);
var Text_1 = CreText('Text_1',17,250,262,22,"Draw your friend in the box.",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_1);
var Text_2 = CreText('Text_2',590,455,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_2);
var Text_15 = CreText('Text_15',10,32,407,174,"\r\n  1. Who that?\r\n\r\n  2. Is Peter your fiiend?\r\n\r\n  3. Is Linda your friend?\r\n\r\n  4. Are Nam and Hoa\r\n    your friends?",'#afeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#afeeee','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_15);
var e2_0 = CreText('e2_0',199,47,192,18,"It's Peter",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_0);
var e2_1 = CreText('e2_1',199,82,192,18,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_1);
var Text_5 = CreText('Text_5',22,5,300,26,"2. Look and write the answers.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_5);
var e2_2 = CreText('e2_2',199,117,192,18,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_2);
var e2_3 = CreText('e2_3',200,162,192,18,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e2_3);
var Text_9 = CreText('Text_9',150,290,114,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(Text_9);
var Text_8 = CreText('Text_8',16,291,95,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(Text_8);
var Text_3 = CreText('Text_3',418,13,126,197,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE13.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_3);
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
