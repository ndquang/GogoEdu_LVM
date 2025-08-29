folder_Resource ='data/Lop4_Unit7';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_key";
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
	SetShowObject("","Group_key",0);
}
function   GetKeyBoNumber(){
	if(objectShowKey=="")
		return;
	var charxxx=  GetText("","");
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue = rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
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
function   ShowKeyNum( namekey){

AddObjToCurentPage("Group_key");
SetShowObject("","Group_key",0);
InitKeyBoar();
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

function DocTieuDe()
{
Speak(GetText("","title_0")+". "+GetText("","title_1")+ ". "+GetText("","title_2"),"EN");
}

var lesson1=["Physical Education","Information Technology","Maths"];
function CheckLesson1(){
var diem=0;
	for(var i=0; i<3;i++){
		if(toLowerCase(GetText("","l1_"+i)) ==  toLowerCase(lesson1[i]))
		{
		SetText("","l1_"+i,lesson1[i]);
		SetFontColor("","l1_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l1_"+i,"#ff0000");
	}
		
	var dd= round(diem*100/3);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;

}
//
var a_kq=["a","b","c","a","b","b"];
var a_tl=[0,0,0,0,0,0];
function InitBaiHoc(){
	for(var i=0;i<6;i++)
		{
		SetShowObject("","check_"+i,0);
		SetCursor("","a_"+i,"pointer");
		SetCursor("","b_"+i,"pointer");
		SetCursor("","c_"+i,"pointer");
		SetFontColor("","a_"+i,"#000000");
		SetFontColor("","b_"+i,"#000000");
		SetFontColor("","c_"+i,"#000000");
		SetText("","check_"+i,"");
		a_tl[i]=0;
		}
SetShowObject("","begin",1);
SetShowObject("","lam_lai",0);
InvalidateObj("","");
}

function ChonTL(){
	var name= GetName("");
	var t=  GetTop("",name);
	var l=  GetLeft("",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("","check_"+cau,a_tl[cau]);
	MoveObjectTo("","check_"+cau,l-3,t+3);
	SetShowObject("","check_"+cau,1);
	Speak(GetText("",""),"EN");
	InvalidateObj("Trang_1","");
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<6;i++)
{
	if(a_kq[i] != a_tl[i])
	{
		SetFontColor("",a_kq[i]+"_"+i,"#008000");
		SetFontColor("",a_tl[i]+"_"+i,"#800000");

	}
	else {
		SetFontColor("",a_kq[i]+"_"+i,"#008000");
		diem=diem+1;
	     }
}
	var dd= round(diem*10/6);
	SetText("","m_diem",dd);
	SetShowObject("","begin",0);
	SetShowObject("","m_diem",1);
	SetShowObject("","lam_lai",1);
	InvalidateObj("","");
}
////

//
var lesson21=["school","bike","Music","Art","Maths","IT"];
function InitLesson21(){
for(var i=0; i<6;i++)
SetFontColor("","ls21_"+i,"#0000ff");
SetShowObject("","msg1",0);
}
function CheckLesson21(){
var diem=0;
	for(var i=0; i<6;i++){
		if(toLowerCase(GetText("","ls21_"+i)) ==  toLowerCase(lesson21[i]))
		{
		SetText("","ls21_"+i,lesson21[i]);
		SetFontColor("","ls21_"+i,"#008000");
		diem=diem+1;
		}
		else SetFontColor("","ls21_"+i,"#ff0000");
	}
	var dd= round(diem*100/6);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
//

var listen_22=[""];
var akq_22=["",""];
var atr_22=["",""];
function ClickL22(){
	var n= Name("");
	n = replaceStr(n,"c",'');
	atr_22[leftStr(n,1)]= rightStr(n,1);
	for(var i=0;i<3;i++)
		SetText("","c"+ leftStr(n,1)+"_"+i,"");
	SetText("","","x");
SetColor("","","#ffffff");
InvalidateObj("","");
}
function ListenL22(){
	Speak(listen_22[rightStr(Name(""),1)],"EN");
	}
var aword_22=["","",""];
function InitLesson22()
{
SetShowObject("","msg1",0);
	for(var i=0; i< 10;i++){
		var tt= GetText("","ls22_"+i);
			tt=replaceStr(tt,"\r\n",'');
		var charx='.';
		var Startdot= indexOf(tt,".",0)+1;
		var Enddot= indexOf(tt,".",Startdot);
		if(Enddot==-1) {
			charx="?";
			Enddot= indexOf(tt,"?",Startdot);
			}
		var j=0;
		while(Enddot!=-1){
			Enddot= indexOf(tt,charx,Startdot+1);
			if(Enddot!=-1)
 			aword_22[j]= trimStr(subString(tt,Startdot, Enddot-Startdot),' ');
			else aword_22[j]=trimStr(subString(tt,Startdot+1),' ');
			SetText("","c"+i+"_"+j,"");
			SetColor("","c"+i+"_"+j,"#ffffff");
			j++;
			Startdot=Enddot+1;
		} 
		   var abc=Random(j-1);
		   listen_22[i]= aword_22[abc];
		   akq_22[i]=abc;
		   atr_22[i]="-1";
	 	}
	SetText("","m_diem","");
	SetShowObject("","m_repeat",0);
	InvalidateObj("","");
}
function CheckLesson22(){
	var diem=0;
	for(var i=0; i< 10;i++){
	 if(akq_22[i] == atr_22[i]){
	    SetColor("","c"+i+"_"+akq_22[i],"#00ff00");
	    diem++;
	    }
	  else {
		SetColor("","c"+i+"_"+akq_22[i],"#00ff00");
		SetColor("","c"+i+"_"+atr_22[i],"#ff0000");
		}
	}
	var dd= round(diem*100/10);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");

}
//
var akq_31=["I have got Maths, English and Art.","Maths is my favourite subject.","No, I don't. I like English.","I have two lessons today.  Music and Art.","English is my favourite subject."];
function SpeakL31(){
	var i = rightStr(GetName(""),1);
	var tt = GetText("","") +". "+akq_31[i];
	Speak(tt,"EN");
}
function ClickL31(){
	if(GetText("","")=="")
		SetText("","","x");
	else SetText("","","");
SetColor("","","#ffffff");
InvalidateObj("","");
}
var a_31=[""];
function InitLesson31()
{
	for(var i=0; i< 15;i++){
	 SetText("","check31_"+i,"");
	 SetColor("","check31_"+i,"#ffffff");
	}
	SetShowObject("","m_repeat",0);
	InvalidateObj("","");
}
function CheckLesson31(){
	var diem=0;
	for(var i=0; i< 15;i++){
	 if(a_31[i]== GetText("","check31_"+i) && a_31[i]=="x"){
	    SetColor("","check31_"+i,"#00ff00");
	    diem=diem+1;
	    }
	  else if(GetText("","check31_"+i)=="x")
		SetColor("","check31_"+i,"#ff0000");
	}
	var dd= round(diem*10/5);
	SetText("","m_diem",dd);
	SetShowObject("","m_repeat",1);
	InvalidateObj("","");
}
//

var lesson32=["Yes, He does.","No, He doesn't.","He like riding a hores, an elephant and a bike."];
function InitLesson32()
{
	for(var i=0; i< 23;i++){
	 SetText("","l32_"+i,"");
	}
	SetShowObject("","m_repeat",0);
	InvalidateObj("","");
}
function CheckLesson32(){
var diem=0;
	for(var i=0; i<3;i++){
		if(toLowerCase(GetText("","l32_"+i)) ==  toLowerCase(lesson32[i]))
		{
		SetText("","l32_"+i,lesson32[i]);
		SetFontColor("","l32_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l32_"+i,"#ff0000");
	}
var dd= round(diem*10/3);
	SetText("","m_diem",dd);
InvalidateObj("","");
	return diem;

}
function ListenL32(){
	Speak( lesson32[rightStr(Name(""),1)],"EN");
}
function Page_1()
{
DocTieuDe();
  return;
}

function Page_2()
{
DocTieuDe();
for(var i=0; i<3;i++){
		SetText("","l1_"+i,"");
		SetFontColor("","l1_"+i,"#000000");
}
SetShowObject("","msg1",0);
InvalidateObj("","");
  return;
}

function Page_3()
{
DocTieuDe();
InitBaiHoc();
  return;
}

function Page_4()
{
DocTieuDe();
InitLesson21();
  return;
}
function Page_4_OnTimer()
{
  return;
}

function Page_5()
{
DocTieuDe();
InitLesson22();
  return;
}

function Page_6()
{
DocTieuDe();

	for(var i=0; i< 15;i++){
	 a_31[i]= GetText("","check31_"+i);
	}
InitLesson31();
  return;
}
function Page_6_OnTimer()
{
  return;
}

function Page_7()
{
DocTieuDe();
InitLesson32();
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
 width: 700,
 height: 600 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,700,500,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title_2 = CreText('title_2',22,101,662,381,"\r\n     REMEMBER",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',16,'Arial','Bold','left','top',3,'0.00','14','0',2,'#3cb371','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_2);
var Text_8 = CreText('Text_8',57,158,637,329,"- Để hỏi hôm nay học môn gì em nói :\r\n\r\n- Khi trả lời em nói:\r\n\r\n- Để hỏi môn học yêu thích của bạn là gì em nói:\r\n\r\n- Khi trả lời em kể các môn học yêu thích như\r\n\r\n- Để hỏi bạn có thích một môn nào đó em nói:\r\n\r\n- Khi trả lời em nói:\r\n\r\n- Để nói môn học nào đó là môn yêu thích của mình. em nói:\r\n\r\n\r\n- Ví dụ:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var title_1 = CreText('title_1',67,0,634,73,"My school Subjects",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title_1);
var title_0 = CreText('title_0',0,0,107,73,"Unit 7",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_0);
var Text_2 = CreText('Text_2',294,186,158,29,"TÊN MÔN HỌC",'#98fb98','#408080','#004080','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','12','0',1,'#005500','#98fb98','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',349,149,338,27,"What lessons have you got today?",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',209,188,85,25,"I've got",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',434,222,285,29,"What is your favourite subject?",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_5);
var Text_28 = CreText('Text_28',501,297,135,29,"TÊN MÔN HỌC",'#98fb98','#408080','#004080','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','12','0',1,'#005500','#98fb98','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_28);
var Text_17 = CreText('Text_17',268,404,225,24,"is my favourite subject.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_17);
var Text_18 = CreText('Text_18',415,283,376,24,"Art, English, IT, Maths, Music, PE...",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_18);
var Text_22 = CreText('Text_22',217,341,197,24,"Yes, I do. / No, I don't",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_22);
var next = CreText('next',575,468,69,27,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(next);
var Text_1 = CreText('Text_1',130,437,312,24,"English is my favourite subject.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_1);
var Text_7 = CreText('Text_7',122,403,135,25,"TÊN MÔN HỌC",'#98fb98','#408080','#004080','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','12','0',1,'#005500','#98fb98','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_9 = CreText('Text_9',408,301,306,24,"Do you like                                 ?",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_9);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_11 = CreText('Text_11',55,65,531,251,"",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','top',3,'0.00','10','0',1,'#009300','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(Text_11);
var Image_1 = CreText('Image_1',129,136,375,98,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_1);
var l1_2 = CreText('l1_2',460,244,109,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_2);
var l1_0 = CreText('l1_0',67,244,176,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_0);
var l1_1 = CreText('l1_1',251,244,200,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_1);
var Text_6 = CreText('Text_6',433,93,126,39,"M _ t _ _",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_6);
var Text_4 = CreText('Text_4',87,93,147,39,"Phy_ _ cal Educ_tion",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var Text_1 = CreText('Text_1',240,93,183,39,"_ _ _ ormation Technology",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var title_0 = CreText('title_0',1,0,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_0);
var title_1 = CreText('title_1',28,34,149,22,"1. Vocabulary",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_1);
var title_2 = CreText('title_2',97,55,319,24,"Look at the pictures, Complete the words.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_2);
var Text_12 = CreText('Text_12',10,323,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_12);
var Text_13 = CreText('Text_13',549,322,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_13);
var mess = CreText('mess',198,125,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(mess);
var Text_5 = CreText('Text_5',198,125,202,19,"Message",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var btclose = CreText('btclose',256,205,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

SetShowObject("","msg1",0);
  return;
}
 );
Page_2.add(btclose);
var begin = CreText('begin',490,55,60,22,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
Page_2.add(begin);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:206,height:110});
msg1.add(mess);
msg1.add(btclose);
msg1.add(Text_5);
Page_2.add(msg1);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,640,520,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var name_3 = CreText('name_3',99,216,517,151,"Tony:\r\nMai:\r\nTony:\r\n\r\nMai:\r\nTony:\r\n\r\n",'#ffffe0','#ffffff','#0080ff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ffd700','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_3);
var Text_3 = CreText('Text_3',66,189,516,25,"Read and choose the best answer. Circle a, b or c.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Text_3);
var title_0 = CreText('title_0',13,2,236,22,"2. Sentence Patterns",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',12,'0.00','3','0',0,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_0);
var Text_12 = CreText('Text_12',11,491,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Text_12);
var Text_13 = CreText('Text_13',583,494,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_3.add(Text_13);
var title_1 = CreText('title_1',46,22,516,25,"Choose the best response. Circle a, b or c.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_1);
var Cau_hoi_0 = CreText('Cau_hoi_0',60,45,370,20,"1. What lessons have you got today?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Cau_hoi_0);
var a_0 = CreText('a_0',110,65,147,20,"a. Art and English",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_0);
var b_0 = CreText('b_0',298,64,104,20,"b.  Class 4C.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_0);
var c_0 = CreText('c_0',433,65,170,20,"c. We are in class",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_0);
var Cau_hoi_1 = CreText('Cau_hoi_1',60,89,395,20,"2. We're late.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Cau_hoi_1);
var a_1 = CreText('a_1',110,109,175,19,"a. Let's jump.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_1);
var b_1 = CreText('b_1',298,109,165,19,"b. Let's run.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_1);
var c_1 = CreText('c_1',433,109,202,19,"c. Let's dance.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_1);
var Cau_hoi_2 = CreText('Cau_hoi_2',60,131,370,20,"3. What lessons has your sister got today?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Cau_hoi_2);
var a_2 = CreText('a_2',110,150,180,22,"a. She likes reading.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_2);
var b_2 = CreText('b_2',298,150,156,22,"b. She is in 5A.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_2);
var c_2 = CreText('c_2',433,150,183,22,"c. She has got PE and IT.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_2);
var Cau_hoi_3 = CreText('Cau_hoi_3',61,372,370,27,"1.  ....................... has got Maths and Art.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Cau_hoi_3);
var a_3 = CreText('a_3',108,393,91,22,"a. Tony",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_3);
var b_3 = CreText('b_3',266,393,102,22,"b. Mai",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_3);
var c_3 = CreText('c_3',429,393,141,22,"c. Tony and Mai",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_3);
var check_0 = CreText('check_0',84,66,19,19,"c",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_0);
var check_1 = CreText('check_1',84,108,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_1);
var check_2 = CreText('check_2',84,152,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_2);
var check_3 = CreText('check_3',91,397,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_3);
var Cau_hoi_4 = CreText('Cau_hoi_4',61,411,467,27,"2.  ....................... has got English and PE.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Cau_hoi_4);
var a_4 = CreText('a_4',108,432,133,22,"a. Tony",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_4);
var b_4 = CreText('b_4',266,432,167,22,"b.Mai",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_4);
var c_4 = CreText('c_4',429,432,179,22,"c. Tony and Mai",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_4);
var check_4 = CreText('check_4',88,431,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_4);
var m_diem = CreText('m_diem',495,219,114,114,"",'#8b0000','#ffffff','#ffff00','#ffffff','',72,'Arial','','center','middle',2,'0.00','0','0',1,'#00ff00','#ff0000','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(m_diem);
var title_2 = CreText('title_2',13,173,288,22,"3. Reading and writing",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_2);
var cau_hoi_5 = CreText('cau_hoi_5',61,450,411,27,"3. Mai is not ....................... today?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(cau_hoi_5);
var a_5 = CreText('a_5',106,474,166,22,"a. Busy",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_5);
var b_5 = CreText('b_5',264,474,159,22,"b. Free",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_5);
var c_5 = CreText('c_5',427,474,188,22,"c. Happy.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_5);
var check_5 = CreText('check_5',91,474,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_5);
var name_4 = CreText('name_4',157,216,438,151,"Hi, Mai.\r\nHi, Tony. What lessons have you got today?\r\nSo many. I've got Maths, Science, PE, IT and Art.\r\nHow about you?\r\nI'm very busy. I've got Maths, Vietnamese, English, PE, and Music.\r\nWow. That's a lot.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_4);
var Text_9 = CreText('Text_9',456,205,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","name_4"),"EN");
  return;
}
 );
Page_3.add(Text_9);
var lam_lai = CreText('lam_lai',510,326,93,27,"rework",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#fffe99','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
  return;
}
 );
Page_3.add(lam_lai);
var begin = CreText('begin',507,201,93,27,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#fffe99','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
Page_3.add(begin);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,600,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var Image_6 = CreText('Image_6',371,279,52,61,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE19.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_6);
var Image_5 = CreText('Image_5',197,278,52,61,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE18.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_5);
var title_0 = CreText('title_0',-1,1,96,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_0);
var title_1 = CreText('title_1',19,35,186,22,"1. Reading and Writing",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_1);
var title_2 = CreText('title_2',71,58,321,24,"Look at the pictures. Complete the reading text.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','4','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_2);
var cau21_1 = CreText('cau21_1',84,147,477,24,"is in Hill Street. Every day, she ride a                                         ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_1);
var cau21_0 = CreText('cau21_0',84,99,506,24,"Dasy is a pupil at Newton Primary School. Her                                             ?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_0);
var cau21_2 = CreText('cau21_2',84,194,497,24,"to her school. She has got many subjects to learn. Her favorite subjects",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_2);
var cau21_3 = CreText('cau21_3',84,250,500,24,"are                                           and",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_3);
var Text_17 = CreText('Text_17',21,417,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_4.add(Text_17);
var Check2 = CreText('Check2',259,418,67,23,"√ Điểm",'#ffc0cb','#ffffff','#009300','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffc0cb','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson21();
  return;
}
 );
Page_4.add(Check2);
var Text_18 = CreText('Text_18',529,417,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_4.add(Text_18);
var cau21_4 = CreText('cau21_4',84,316,466,19,"She doesn't  like                                     and",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_4);
var Image_1 = CreText('Image_1',392,78,51,40,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE13.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_1);
var Image_2 = CreText('Image_2',327,121,72,55,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE15.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_2);
var Image_3 = CreText('Image_3',115,214,52,59,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE16.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_3);
var Image_4 = CreText('Image_4',313,212,61,63,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_4);
var ls21_0 = CreText('ls21_0',449,96,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_0);
var ls21_1 = CreText('ls21_1',401,149,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_1);
var ls21_2 = CreText('ls21_2',169,249,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_2);
var ls21_3 = CreText('ls21_3',382,250,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[3],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_3);
var mess = CreText('mess',216,190,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(mess);
var btclose = CreText('btclose',274,270,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg1",0);
InitLesson21();
  return;
}
 );
Page_4.add(btclose);
var Text_5 = CreText('Text_5',216,190,202,19,"Message",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_5);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:206,height:110});
msg1.add(mess);
msg1.add(btclose);
msg1.add(Text_5);
Page_4.add(msg1);
var Text_1 = CreText('Text_1',84,370,466,19,"What about you? what is your favourite subject? Do you like English?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_1);
var ls21_4 = CreText('ls21_4',248,313,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[4],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_4);
var ls21_5 = CreText('ls21_5',432,313,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[5],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_5);
stage.add(Page_4);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page_5_Backrounnd = CreText('Page_5_Backrounnd',0,0,500,500,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_5.add(Page_5_Backrounnd);
var ls22_3 = CreText('ls22_3',94,142,334,21,"4.         path.                            push.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_3);
var ls22_2 = CreText('ls22_2',94,112,334,21,"3.         fifth.                             fish.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_2);
var title_1 = CreText('title_1',37,5,186,22,"2. Listening",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_1);
var title_2 = CreText('title_2',56,24,232,24,"1. Click to listen and tick true.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_2);
var ls22_0 = CreText('ls22_0',94,52,334,21,"1.         Maths.                          English.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_0);
var c0_0 = CreText('c0_0',115,51,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_0);
var ls22_1 = CreText('ls22_1',94,82,334,21,"2.         bath.                            wash.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_1);
var ls22_4 = CreText('ls22_4',94,172,334,21,"5.         teeth.                            dish.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_4);
var c0_1 = CreText('c0_1',264,53,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_1);
var c1_0 = CreText('c1_0',117,84,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_0);
var c1_1 = CreText('c1_1',264,84,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_1);
var c2_0 = CreText('c2_0',117,115,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_0);
var c2_1 = CreText('c2_1',264,115,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_1);
var c3_0 = CreText('c3_0',117,143,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_0);
var c3_1 = CreText('c3_1',264,143,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_1);
var c4_0 = CreText('c4_0',117,173,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_0);
var c4_1 = CreText('c4_1',264,173,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_1);
var ls22_5 = CreText('ls22_5',94,222,403,21,"1.        the fifth of January.             the fourth of March.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_5);
var c5_0 = CreText('c5_0',117,224,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_0);
var c5_1 = CreText('c5_1',289,224,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_1);
var ls22_6 = CreText('ls22_6',94,244,351,21,"2.         the twelfth of May.               the twelve teeth.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_6);
var c6_0 = CreText('c6_0',117,249,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_0);
var c6_1 = CreText('c6_1',289,249,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_1);
var ls22_7 = CreText('ls22_7',94,278,351,58,"3.         First is English.\r\n            Third is English.\r\n            Fifth is English.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_7);
var c7_2 = CreText('c7_2',117,313,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_2);
var c7_1 = CreText('c7_1',117,295,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_1);
var c7_0 = CreText('c7_0',117,277,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_0);
var ls22_8 = CreText('ls22_8',94,344,351,66,"4.         His favourite subject is Maths.\r\n            His favourite subject is English.\r\n            His favourite subject is Art.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_8);
var c8_2 = CreText('c8_2',117,379,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_2);
var c8_1 = CreText('c8_1',117,361,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_1);
var c8_0 = CreText('c8_0',117,343,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_0);
var ls22_9 = CreText('ls22_9',94,412,351,79,"5.        Do you like this dish?\r\n           Do you like this fish? \r\n           Do you like English?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_9);
var c9_2 = CreText('c9_2',117,448,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_2);
var c9_1 = CreText('c9_1',117,430,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_1);
var c9_0 = CreText('c9_0',117,412,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_0);
var Text_1 = CreText('Text_1',69,196,430,24,"2. Click to listen and tick. Then listen again and repeat.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(Text_1);
var Check2 = CreText('Check2',401,9,76,23,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson22();
  return;
}
 );
Page_5.add(Check2);
var Text_17 = CreText('Text_17',13,470,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_5.add(Text_17);
var Text_18 = CreText('Text_18',449,469,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_5.add(Text_18);
var title_0 = CreText('title_0',-105,4,96,30,"Lesson 2",'rgba(0, 0, 0, 0)','#000000','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_0);
var m_diem = CreText('m_diem',151,185,202,106,"Complete",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(m_diem);
var btclose = CreText('btclose',211,265,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg1",0);
InitLesson22();
  return;
}
 );
Page_5.add(btclose);
var Text_3 = CreText('Text_3',151,185,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(Text_3);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_3);
msg1.add(btclose);
Page_5.add(msg1);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page_6_Backrounnd = CreText('Page_6_Backrounnd',0,0,500,600,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_6.add(Page_6_Backrounnd);
var Text_15 = CreText('Text_15',303,61,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_15);
var Image_5 = CreText('Image_5',90,507,305,88,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE24.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_5);
var Image_4 = CreText('Image_4',109,398,275,80,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE23.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_4);
var Image_3 = CreText('Image_3',92,292,336,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE22.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_3);
var Image_2 = CreText('Image_2',95,185,355,87,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE21.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_2);
var Image_1 = CreText('Image_1',92,86,296,82,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE20.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_1);
var title_0 = CreText('title_0',-1,1,96,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_0);
var title_1 = CreText('title_1',125,7,186,22,"1. Listening",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_1);
var title_2 = CreText('title_2',18,41,173,20,"1. Listen and tick.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_2);
var Text_18 = CreText('Text_18',449,567,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_6.add(Text_18);
var Text_17 = CreText('Text_17',9,576,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_6.add(Text_17);
var m_diem = CreText('m_diem',413,390,95,86,"",'#c0ffff','#ffffff','#ff0000','#ffffff','',48,'Arial','','center','middle',1,'0.00','0','0',1,'#00ff00','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(m_diem);
var Check2 = CreText('Check2',429,377,62,23,"√ Check",'#388e8e','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#388e8e','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson31();
  return;
}
 );
Page_6.add(Check2);
var m_repeat = CreText('m_repeat',427,464,67,23,"rework",'#388e8e','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#388e8e','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
m_repeat.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson31();
SetText("","m_diem","");
InvalidateObj("","");
  return;
}
 );
Page_6.add(m_repeat);
var cau31_0 = CreText('cau31_0',54,63,256,19,"1. What lessons have you got today?\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
cau31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_0);
var check31_0 = CreText('check31_0',137,148,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_0);
var check31_1 = CreText('check31_1',243,149,17,15,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_1);
var check31_2 = CreText('check31_2',334,148,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_2);
var check31_3 = CreText('check31_3',135,252,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_3);
var check31_4 = CreText('check31_4',276,251,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_4);
var check31_5 = CreText('check31_5',393,251,17,15,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_5);
var check31_6 = CreText('check31_6',143,356,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_6);
var check31_7 = CreText('check31_7',269,356,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_7);
var check31_8 = CreText('check31_8',371,357,17,15,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_8);
var check31_9 = CreText('check31_9',148,452,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_9);
var check31_10 = CreText('check31_10',259,452,17,15,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_10);
var check31_11 = CreText('check31_11',353,453,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_11);
var check31_12 = CreText('check31_12',114,571,17,15,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_12);
var check31_13 = CreText('check31_13',246,572,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_13);
var check31_14 = CreText('check31_14',355,572,17,15,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check31_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(check31_14);
var Text_2 = CreText('Text_2',193,271,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_2);
var Text_3 = CreText('Text_3',309,368,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_3);
var Text_4 = CreText('Text_4',313,473,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_4);
var Text_1 = CreText('Text_1',277,164,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_1);
var cau31_1 = CreText('cau31_1',54,164,285,25,"2. What's your favourite subject?\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
cau31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_1);
var cau31_2 = CreText('cau31_2',54,276,343,20,"3. Do you like PE?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_2);
var cau31_3 = CreText('cau31_3',54,373,288,20,"4. Have you got many lessons today?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_3);
var cau31_4 = CreText('cau31_4',54,478,355,20,"5. Is English your favourite subject?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_4);
stage.add(Page_6);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page_7_Backrounnd = CreText('Page_7_Backrounnd',0,0,450,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_7.add(Page_7_Backrounnd);
var title_0 = CreText('title_0',5,3,186,22,"2. Speaking",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_0);
var title_1 = CreText('title_1',45,24,346,24,"1. Lock at the pictures. Listen and answers.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_1);
var title_2 = CreText('title_2',48,258,346,25,"2. Listen again  and write your answers.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_2);
var Text_4 = CreText('Text_4',70,288,29,88,"1.\r\n\r\n2.\r\n\r\n3.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_4);
var Text_7 = CreText('Text_7',115,413,223,46,"end",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_7);
var l32_0 = CreText('l32_0',105,286,195,24,"Yes, she does.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
ListenL32();
  return;
}
 );
Page_7.add(l32_0);
var l32_1 = CreText('l32_1',105,315,195,24,"No, it isn't.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(l32_1);
var l32_2 = CreText('l32_2',105,344,195,24,"She likes English and Maths.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(l32_2);
var Text_9 = CreText('Text_9',292,23,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_9);
var Text_10 = CreText('Text_10',276,258,25,25,"Does he like riding a bike?\r\nNo, He doesn't.\r\nDoes he like riding an elephant?\r\nYes, He does. He like riding a hores, an elephant and a bike.",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_10);
var Text_17 = CreText('Text_17',17,419,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_7.add(Text_17);
var Image_1 = CreText('Image_1',53,49,303,154,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE25.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_1);
var m_diem = CreText('m_diem',351,201,95,86,"",'#c0ffff','#ffffff','#ff0000','#ffffff','',36,'Arial','','center','middle',1,'0.00','0','0',1,'#00ff00','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(m_diem);
var Check2 = CreText('Check2',367,188,62,23,"Check",'#388e8e','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#388e8e','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson32();
  return;
}
 );
Page_7.add(Check2);
var m_repeat = CreText('m_repeat',365,275,67,23,"rework",'#388e8e','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#388e8e','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
m_repeat.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson32();
SetText("","m_diem","");
InvalidateObj("","");
  return;
}
 );
Page_7.add(m_repeat);
stage.add(Page_7);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,450,150,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
PageKey.add(PageKey_Backrounnd);
var bg_key = CreText('bg_key',0,1,450,143,"0",'#666666','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#666666','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
PageKey.add(bg_key);
var char_0 = CreText('char_0',3,6,35,29,"Q",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#666666','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_0);
var char_1 = CreText('char_1',43,6,35,29,"W",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_1);
var char_4 = CreText('char_4',163,6,35,29,"T",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_4);
var char_7 = CreText('char_7',283,6,35,29,"I",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_7);
var char_2 = CreText('char_2',83,6,35,29,"E",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_2);
var char_5 = CreText('char_5',203,6,35,29,"Y",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_5);
var char_8 = CreText('char_8',323,6,35,29,"O",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_8);
var char_9 = CreText('char_9',363,6,35,29,"P",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_9);
var char_6 = CreText('char_6',243,6,35,29,"U",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_6);
var char_3 = CreText('char_3',123,6,35,29,"R",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_3);
var char_35 = CreText('char_35',403,6,43,29,"Esc",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
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
var char_10 = CreText('char_10',16,41,35,29,"A",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_10);
var char_11 = CreText('char_11',55,41,35,29,"S",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_11);
var char_14 = CreText('char_14',172,41,35,29,"G",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_14);
var char_17 = CreText('char_17',289,41,35,29,"K",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_17);
var char_12 = CreText('char_12',94,41,35,29,"D",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_12);
var char_15 = CreText('char_15',211,41,35,29,"H",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_15);
var char_18 = CreText('char_18',328,41,35,29,"L",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_18);
var char_16 = CreText('char_16',250,41,35,29,"J",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_16);
var char_13 = CreText('char_13',133,41,35,29,"F",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_13);
var char_32 = CreText('char_32',4,76,39,29,"Shift",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LowerKey();
  return;
}
 );
PageKey.add(char_32);
var char_19 = CreText('char_19',47,76,35,29,"Z",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_19);
var char_22 = CreText('char_22',164,76,35,29,"V",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_22);
var char_25 = CreText('char_25',281,76,35,29,"M",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_25);
var char_20 = CreText('char_20',86,76,35,29,"X",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_20);
var char_23 = CreText('char_23',203,76,35,29,"B",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_23);
var char_26 = CreText('char_26',320,76,35,29,",",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_26);
var char_27 = CreText('char_27',359,76,35,29,".",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_27);
var char_24 = CreText('char_24',242,76,35,29,"N",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_24);
var char_21 = CreText('char_21',125,76,35,29,"C",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_21);
var char_34 = CreText('char_34',69,110,212,29," ",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_34);
var char_28 = CreText('char_28',400,76,42,29,"!",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_28);
var char_29 = CreText('char_29',289,110,35,29,"?",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_29);
var char_33 = CreText('char_33',5,110,56,29,".?123",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangKey();
  return;
}
 );
PageKey.add(char_33);
var char_36 = CreText('char_36',380,110,66,29,"Enter",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_36);
var char_30 = CreText('char_30',369,41,35,29,";",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_30);
var char_31 = CreText('char_31',332,109,35,29,":",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_31);
var char_37 = CreText('char_37',410,41,36,29,"←",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
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
var Group_key = new Kinetic.Group({name:'Group_key',x:0,y:0,width:454,height:147});
Group_key.add(bg_key);
Group_key.add(char_0);
Group_key.add(char_1);
Group_key.add(char_4);
Group_key.add(char_7);
Group_key.add(char_2);
Group_key.add(char_5);
Group_key.add(char_8);
Group_key.add(char_9);
Group_key.add(char_6);
Group_key.add(char_3);
Group_key.add(char_35);
Group_key.add(char_10);
Group_key.add(char_11);
Group_key.add(char_14);
Group_key.add(char_17);
Group_key.add(char_12);
Group_key.add(char_15);
Group_key.add(char_18);
Group_key.add(char_16);
Group_key.add(char_13);
Group_key.add(char_32);
Group_key.add(char_19);
Group_key.add(char_22);
Group_key.add(char_25);
Group_key.add(char_20);
Group_key.add(char_23);
Group_key.add(char_26);
Group_key.add(char_27);
Group_key.add(char_24);
Group_key.add(char_21);
Group_key.add(char_34);
Group_key.add(char_28);
Group_key.add(char_29);
Group_key.add(char_33);
Group_key.add(char_36);
Group_key.add(char_30);
Group_key.add(char_31);
Group_key.add(char_37);
PageKey.add(Group_key);
stage.add(PageKey);
InitLacVietScript();
};
