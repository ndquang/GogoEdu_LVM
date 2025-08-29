folder_Resource ='data/Lop4_Unit12';
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
var title="";
for(var i=0;i<5;i++)
{
if(GetText("","title_"+i))
title=title+ GetText("","title_"+i)+ ". ";
}
Speak(title,"EN");
SetMoveView("","msg1",1);
SetShowObject("","msg1",0);
}

var lesson1=["twelve o'clock","ten thirty","nine fifty-five","a cupboard"];
var countls1=0;
function InitLesson1()
{
for(var i=0; i<=3;i++){
	SetMoveView("","ls1_"+i,1);
	MoveObjectTo("","ls1_"+i,-1,-1);
}
DocTieuDe();
SetShowObject("","msg1",0);
countls1=0;
InvalidateObj("","");
}
function CheckLesson1(){
	var i= 0;
	while(i<4)
	{
		if(RectInRect("","flag_"+i,"")==1 && GetText("","") ==  GetText("","flag_"+i)&&GetMoveView("","")==1)
			{
				var xu= GetLeft("","flag_"+i);
				var yu= GetTop("","flag_"+i);
				transitionTo("","",10,xu,yu);
				countls1++;
				SetMoveView("","",0);
				break;
			}
		i++;
	}
	if(i>=4) transitionTo("","",500,-1,-1);
	if(countls1==4)
		{
			SetShowObject("","msg1",1);
			InvalidateObj("","");
		}
}

//
var a_kq=["b","b","a","a","a","b"];
var a_tl=[0,0,0,0,0,0];
function InitBaiHoc(){
DocTieuDe();
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
InvalidateObj("","");
}

function ChonTL(){
	var name= GetName("");
	var t=  GetTop("",name);
	var l=  GetLeft("",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("","check_"+cau,a_tl[cau]);
	MoveObjectTo("","check_"+cau,l-6,t+2);
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
	var dd= round(diem*100/6);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
////

//
var lesson21=["family","grandfather","a farmer","a farmer","thirty-seven","a businessman","mother","a doctor","a pupil","nine"];
function InitLesson21(){
DocTieuDe();
for(var i=0; i<10;i++)
{
SetText("","ls21_"+i,"");
SetFontColor("","ls21_"+i,"#0000ff");
}
SetShowObject("","msg1",0);
InvalidateObj("","");
}
function CheckLesson21(){
var diem=0;
	for(var i=0; i<10;i++){
		if(toLowerCase(GetText("","ls21_"+i)) ==  toLowerCase(lesson21[i]))
		{
		SetText("","ls21_"+i,lesson21[i]);
		SetFontColor("","ls21_"+i,"#008000");
		diem=diem+1;
		}
		else SetFontColor("","ls21_"+i,"#ff0000");
	}
	var dd= round(diem*100/10);
	SetText("","m_diem", "Complete "+ dd+ " %.");
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
var akq_31=["doctor","doctor","diver","housewife","businessman","teacher","Tim is in 5A","Tom is nine years old","No, they aren't"];
function Speak31(){
	var i = rightStr(GetName(""),1);
	//var tt = GetText("","") +". "+akq_31[i];
	Speak(akq_31[i],"EN");
}
function ClickL31(){
	if(GetText("","")=="")
		SetText("","","x");
	else SetText("","","");
SetColor("","","#ffffff");
InvalidateObj("","");
}
function InitLesson31()
{
	DocTieuDe();
	for(var i=0; i< 9;i++){
	 SetText("","ls31_"+i,"");
	 SetColor("","ls31_"+i,"#ffffff");
	}
	SetShowObject("","msg1",0);
	InvalidateObj("","");
}
function CheckLesson31(){
	var diem=0;
	for(var i=0; i<10;i++){
		if(toLowerCase(GetText("","ls31_"+i)) ==  toLowerCase(akq_31[i]))
		{
		SetText("","ls31_"+i,akq_31[i]);
		SetFontColor("","ls31_"+i,"#008000");
		diem=diem+1;
		}
		else SetFontColor("","ls31_"+i,"#ff0000");
	}
	var dd= round(diem*100/9);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
//

var lesson32=["She's a teacher. She works in a school.","He works is a company.","She's a housewife."];
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
InitLesson1();
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
 width: 600,
 height: 800 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,500,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title_2 = CreText('title_2',17,97,561,354,"\r\n     REMEMBER",'#ffffff','#ffffff','#009300','#ffffff','',16,'Arial','Bold','left','top',3,'0.00','14','0',2,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_2);
var Text_8 = CreText('Text_8',50,138,562,304,"Để hỏi nghề nghiệp của một người nào đấy em dùng mẫu câu:\r\n\r\nĐể trả lời em nói:\r\n\r\nĐể hỏi nơi làm việc của một người nào đó em nói:\r\n\r\nĐể trả lời em nói:\r\n\r\nLưu ý: an được dùng trước từ bắt đầu với nguyên âm a, e, i, o hoặc u.\r\nMột số danh từ miêu tả nghề nghiệp:\r\n\r\n\r\nMột số danh từ miêu tả nơi làm việc:\r\n\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var title_1 = CreText('title_1',-1,0,602,79,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title_1);
var title_0 = CreText('title_0',0,0,110,79,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_0);
var Text_3 = CreText('Text_3',54,150,418,20,"What's his/her job?    What does he/she do?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_3);
var Text_5 = CreText('Text_5',52,179,183,21,"He's / She's a/an  + ",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_5);
var Text_18 = CreText('Text_18',54,247,186,21,"He/She works in a/an +",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_18);
var Text_22 = CreText('Text_22',197,176,265,22,"DANH TỪ MÔ TẢ CÔNG VIỆC",'#5abebe','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#5abebe','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_22);
var next = CreText('next',465,438,69,27,"›››",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(next);
var Text_1 = CreText('Text_1',54,350,439,23,"bus company, company, factory, field, hospital, school.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_1);
var Text_9 = CreText('Text_9',54,214,214,20,"Where does he/she work?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_9);
var Text_2 = CreText('Text_2',54,296,547,45,"businessman, doctor, driver, engineer, farmer, housewife, pupil, student, teacher, worker",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_2);
var Text_4 = CreText('Text_4',229,242,265,21,"DANH TỪ MÔ TẢ NƠI LÀM VIỆC",'#5abebe','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#5abebe','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_4);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,400,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_11 = CreText('Text_11',41,123,531,251,"",'#ffffff','#000000','#000000','#ffffff','',14,'Arial','Bold','left','top',3,'0.00','10','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(Text_11);
var title_1 = CreText('title_1',0,-1,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_2.add(title_1);
var title_2 = CreText('title_2',0,52,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_2);
var title_3 = CreText('title_3',97,52,127,30,"1. Vocabulary",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_3);
var Text_12 = CreText('Text_12',84,357,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_12);
var Text_13 = CreText('Text_13',500,360,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_13);
var title_0 = CreText('title_0',0,-1,94,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(title_0);
var Image_1 = CreText('Image_1',76,155,443,115,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE26.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_1);
var flag_0 = CreText('flag_0',81,267,98,21,"a doctor",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(flag_0);
var flag_1 = CreText('flag_1',192,267,92,21,"a farmer",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(flag_1);
var flag_2 = CreText('flag_2',304,267,98,21,"a taxi-driver",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(flag_2);
var title_4 = CreText('title_4',83,113,326,24,"Match the groups of words with the right pictures.",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_4);
var flag_3 = CreText('flag_3',415,267,101,21,"a businessman",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(flag_3);
var ls1_1 = CreText('ls1_1',177,312,111,21,"a businessman",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#7f7f7f',0,1.50);
ls1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
ls1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(ls1_1);
var ls1_0 = CreText('ls1_0',81,312,92,21,"a taxi-driver",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#7f7f7f',0,1.50);
ls1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
ls1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(ls1_0);
var ls1_2 = CreText('ls1_2',294,312,111,21,"a doctor",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#7f7f7f',0,1.50);
ls1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
ls1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(ls1_2);
var ls1_3 = CreText('ls1_3',411,312,110,21,"a farmer",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#7f7f7f',0,1.50);
ls1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
ls1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(ls1_3);
var mess = CreText('mess',168,147,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(mess);
var Text_5 = CreText('Text_5',168,147,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var btclose = CreText('btclose',227,227,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson1();
  return;
}
 );
Page_2.add(btclose);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(mess);
msg1.add(Text_5);
msg1.add(btclose);
Page_2.add(msg1);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,600,800,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var title_1 = CreText('title_1',1,1,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_3.add(title_1);
var title_4 = CreText('title_4',17,96,563,689,"Choose the best response. Circle a, b or c.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_4);
var name_3 = CreText('name_3',70,364,500,256,"Peter:\r\nQuan:\r\nPeter:\r\nQuan:\r\nPeter:\r\nQuan:\r\nPeter:\r\nQuan:\r\nPeter:\r\nQuan:\r\nPeter:\r\nQuan:\r\nPeter:\r\n\r\n",'#ffffe0','#ffffff','#0080ff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ffd700','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_3);
var Text_3 = CreText('Text_3',33,337,516,25,"Read and choose the best answer. Circle a, b or c.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Text_3);
var Cau_hoi_0 = CreText('Cau_hoi_0',31,118,370,20,"1. Who's that?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_0);
var a_0 = CreText('a_0',81,138,147,20,"a. It's Jackie's parrot.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_0);
var b_0 = CreText('b_0',246,137,161,20,"b. It's Jackie.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_0);
var c_0 = CreText('c_0',424,138,170,20,"c. She's a doctor.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_0);
var Cau_hoi_1 = CreText('Cau_hoi_1',31,162,395,20,"2. What's her job?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_1);
var a_1 = CreText('a_1',81,182,175,19,"a. She's working.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_1);
var b_1 = CreText('b_1',246,182,165,19,"b. She's a work.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_1);
var c_1 = CreText('c_1',424,182,202,19,"c. She's Mary Brown.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_1);
var Cau_hoi_2 = CreText('Cau_hoi_2',31,204,370,20,"3. What's her father's job?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_2);
var a_2 = CreText('a_2',87,223,180,22,"a. He's a businessman.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_2);
var b_2 = CreText('b_2',87,245,214,22,"b. He is a businesswomam.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_2);
var c_2 = CreText('c_2',87,267,183,22,"c. He is a busy man.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_2);
var Cau_hoi_3 = CreText('Cau_hoi_3',32,629,370,27,"1. Quan's grandfather is ___________ year old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_3);
var a_3 = CreText('a_3',77,650,194,22,"a. 78",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_3);
var b_3 = CreText('b_3',231,651,106,22,"b. 87",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_3);
var c_3 = CreText('c_3',429,652,115,22,"c. 97",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_3);
var check_0 = CreText('check_0',55,139,19,19,"c",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_0);
var check_1 = CreText('check_1',55,181,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_1);
var check_2 = CreText('check_2',55,225,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_2);
var check_3 = CreText('check_3',62,654,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_3);
var Cau_hoi_4 = CreText('Cau_hoi_4',32,668,467,27,"2. Quan's parents are _________.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_4);
var a_4 = CreText('a_4',77,689,150,22,"a. doctor and nurse.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_4);
var b_4 = CreText('b_4',231,689,147,22,"b. doctor.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_4);
var c_4 = CreText('c_4',429,689,95,22,"c. doctors",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_4);
var check_4 = CreText('check_4',59,688,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_4);
var begin = CreText('begin',262,769,93,26,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#fffe99','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
Page_3.add(begin);
var cau_hoi_5 = CreText('cau_hoi_5',32,707,411,27,"3. Aunt Van is _________.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_hoi_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(cau_hoi_5);
var a_5 = CreText('a_5',77,731,147,22,"a. a doctor.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_5);
var b_5 = CreText('b_5',231,731,152,22,"b. a teacher.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_5);
var c_5 = CreText('c_5',429,731,91,22,"c. a nurse.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_5);
var check_5 = CreText('check_5',62,731,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_5);
var name_4 = CreText('name_4',126,364,438,258,"Who's your grandfather in this photo?\r\nHere.\r\nHow old is he now?\r\nHe's seventy-eight.\r\nAnd who's your mother, Quan?\r\nThis is my mother.\r\nWhat's her job?\r\nShe's a nurse.\r\nHow about this man? Is this your father?\r\nYes, he is. He's a docor.\r\nIs it your Aunt Van?\r\nYes, she is. She's a teacher. Is she beautiful?\r\nYes, She's tall and beautiful.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_4);
var Text_9 = CreText('Text_9',513,349,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","name_4"),"EN");
  return;
}
 );
Page_3.add(Text_9);
var title_2 = CreText('title_2',0,63,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_2);
var title_3 = CreText('title_3',97,63,179,30,"2. Sentence Patterns",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_3);
var Text_1 = CreText('Text_1',0,299,244,30,"3. Reading and writing.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Text_1);
var mess = CreText('mess',204,428,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(mess);
var Text_5 = CreText('Text_5',204,428,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_5);
var btclose = CreText('btclose',263,508,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
  return;
}
 );
Page_3.add(btclose);
var Text_12 = CreText('Text_12',26,767,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Text_12);
var Text_13 = CreText('Text_13',523,767,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_3.add(Text_13);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(mess);
msg1.add(Text_5);
msg1.add(btclose);
Page_3.add(msg1);
var title_0 = CreText('title_0',1,1,105,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(title_0);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,600,620,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var title_1 = CreText('title_1',-1,1,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_4.add(title_1);
var title_4 = CreText('title_4',27,102,558,496,"Look at the pictures. Write answers with NO MORE THAN TWO WORDS.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','4','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_4);
var Image_5 = CreText('Image_5',88,375,34,54,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE31.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_5);
var cau21_1 = CreText('cau21_1',57,205,479,24,"This is my                                   . He's fifty eight years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_1);
var cau21_0 = CreText('cau21_0',57,161,479,24,"This is my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_0);
var cau21_2 = CreText('cau21_2',57,261,479,24,"He's ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_2);
var cau21_3 = CreText('cau21_3',57,316,479,24,"My grandmother is                                         , too.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_3);
var Check2 = CreText('Check2',270,580,77,30,"√ Điểm",'#a52a00','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#a52a00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson21();
  return;
}
 );
Page_4.add(Check2);
var cau21_4 = CreText('cau21_4',57,361,479,19,"This is my father He's                                           years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(cau21_4);
var Image_1 = CreText('Image_1',129,131,64,45,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE27.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_1);
var Image_2 = CreText('Image_2',123,175,37,55,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE28.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_2);
var Image_3 = CreText('Image_3',106,231,52,53,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE29.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_3);
var Image_4 = CreText('Image_4',187,284,48,52,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE30.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_4);
var ls21_0 = CreText('ls21_0',193,159,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_0);
var ls21_1 = CreText('ls21_1',164,205,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_1);
var ls21_2 = CreText('ls21_2',182,261,96,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_2);
var ls21_3 = CreText('ls21_3',244,313,97,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[3],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_3);
var Text_1 = CreText('Text_1',57,413,479,19,"He's                                            . This is my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_1);
var ls21_4 = CreText('ls21_4',273,359,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[4],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_4);
var ls21_5 = CreText('ls21_5',132,409,125,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[5],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_5);
var Image_7 = CreText('Image_7',281,432,29,51,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE33.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_7);
var ls21_6 = CreText('ls21_6',385,409,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[6],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_6);
var Text_3 = CreText('Text_3',57,459,479,19,"She's thirty three years old. She's",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_3);
var title_2 = CreText('title_2',0,64,96,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_2);
var title_3 = CreText('title_3',97,64,199,30,"1. Reading and Writing",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_3);
var Image_6 = CreText('Image_6',339,387,31,45,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE32.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_6);
var ls21_7 = CreText('ls21_7',324,452,99,21,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[7],"EN");
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_7);
var Text_4 = CreText('Text_4',57,506,479,19,"This is my sister. She's six years old. She's",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_4);
var ls21_8 = CreText('ls21_8',377,501,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[8],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_8);
var Text_6 = CreText('Text_6',57,554,479,19,"She's in grade one. And this is me. I'm                                    years old.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_6);
var ls21_9 = CreText('ls21_9',358,548,82,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls21_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson21[9],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(ls21_9);
var Text_2 = CreText('Text_2',208,343,55,42,"37",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_2);
var Image_8 = CreText('Image_8',341,479,29,51,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE34.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_8);
var Text_5 = CreText('Text_5',307,537,55,42,"9",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_5);
var m_diem = CreText('m_diem',192,270,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(m_diem);
var Text_7 = CreText('Text_7',192,270,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_7);
var btclose = CreText('btclose',251,350,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson21();
  return;
}
 );
Page_4.add(btclose);
var Text_12 = CreText('Text_12',41,584,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_4.add(Text_12);
var Text_13 = CreText('Text_13',527,586,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_4.add(Text_13);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_7);
msg1.add(btclose);
Page_4.add(msg1);
var title_0 = CreText('title_0',-1,1,94,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(title_0);
stage.add(Page_4);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page_5_Backrounnd = CreText('Page_5_Backrounnd',0,0,600,550,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_5.add(Page_5_Backrounnd);
var title_1 = CreText('title_1',1,1,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_5.add(title_1);
var Text_2 = CreText('Text_2',21,98,558,430,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(Text_2);
var ls22_3 = CreText('ls22_3',94,198,334,21,"4.         chicken.                       christmas.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_3);
var ls22_2 = CreText('ls22_2',94,168,334,21,"3.         dress.                           rest.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_2);
var ls22_0 = CreText('ls22_0',94,108,334,21,"1.         driver.                          river.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_0);
var c0_0 = CreText('c0_0',115,107,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_0);
var ls22_1 = CreText('ls22_1',94,138,334,21,"2.          teacher.                       shool.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_1);
var ls22_4 = CreText('ls22_4',94,228,334,21,"5.         dragon.                        radio.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_4);
var c0_1 = CreText('c0_1',267,109,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_1);
var c1_0 = CreText('c1_0',117,140,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_0);
var c1_1 = CreText('c1_1',267,140,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_1);
var c2_0 = CreText('c2_0',117,171,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_0);
var c2_1 = CreText('c2_1',267,171,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_1);
var c3_0 = CreText('c3_0',117,199,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_0);
var c3_1 = CreText('c3_1',267,199,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_1);
var c4_0 = CreText('c4_0',117,229,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_0);
var c4_1 = CreText('c4_1',267,229,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_1);
var ls22_5 = CreText('ls22_5',94,254,403,21,"6.         get dressed.                  get a rest.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_5);
var c5_0 = CreText('c5_0',117,256,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_0);
var c5_1 = CreText('c5_1',267,255,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_1);
var ls22_6 = CreText('ls22_6',94,276,400,21,"7.         two blue drums.            a long blue river.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_6);
var c6_0 = CreText('c6_0',117,281,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_0);
var c6_1 = CreText('c6_1',267,279,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_1);
var ls22_7 = CreText('ls22_7',94,310,351,58,"8.          She's a teacher.\r\n             She's got two children.\r\n             She's at Richard Primary School.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_7);
var c7_2 = CreText('c7_2',117,345,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_2);
var c7_1 = CreText('c7_1',117,327,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_1);
var c7_0 = CreText('c7_0',117,309,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_0);
var ls22_8 = CreText('ls22_8',94,376,351,66,"9.         They are drivers.\r\n            They are drummers.\r\n            They are dreamers.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_8);
var c8_2 = CreText('c8_2',117,411,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_2);
var c8_1 = CreText('c8_1',117,393,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_1);
var c8_0 = CreText('c8_0',117,375,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_0);
var ls22_9 = CreText('ls22_9',94,444,403,79,"10.      He likes chatting with his friends.\r\n           He likes Disney channel so much.\r\n           He likes watching cartoons with his teacher.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
ls22_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_9);
var c9_2 = CreText('c9_2',117,480,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_2);
var c9_1 = CreText('c9_1',117,462,16,16,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_1);
var c9_0 = CreText('c9_0',117,444,16,16,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_0);
var Check2 = CreText('Check2',248,512,92,26,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson22();
  return;
}
 );
Page_5.add(Check2);
var title_2 = CreText('title_2',-1,63,96,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_2);
var title_3 = CreText('title_3',96,63,243,30,"2. Click to listen and tick.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_3);
var Text_12 = CreText('Text_12',37,513,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_5.add(Text_12);
var Text_13 = CreText('Text_13',513,512,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_5.add(Text_13);
var m_diem = CreText('m_diem',185,235,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(m_diem);
var Text_7 = CreText('Text_7',185,235,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(Text_7);
var btclose = CreText('btclose',244,315,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson22();
  return;
}
 );
Page_5.add(btclose);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_7);
msg1.add(btclose);
Page_5.add(msg1);
var title_0 = CreText('title_0',1,1,94,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title_0);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page_6_Backrounnd = CreText('Page_6_Backrounnd',0,0,600,550,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_6.add(Page_6_Backrounnd);
var title_1 = CreText('title_1',1,0,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_6.add(title_1);
var Text_7 = CreText('Text_7',32,98,545,432,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_7);
var cau31_0 = CreText('cau31_0',34,98,453,19,"1. Listen and fill in each blank with no more than three words.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
Page_6.add(cau31_0);
var cau31_1 = CreText('cau31_1',71,164,132,35,"Pupil's name",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
cau31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_1);
var cau31_2 = CreText('cau31_2',203,164,135,35,"Father's job",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_2);
var cau31_3 = CreText('cau31_3',338,164,135,35,"Mother's job",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_3);
var cau31_4 = CreText('cau31_4',71,199,132,117,"Tim\r\n\r\nTony\r\n\r\nPeter",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#004080','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_4);
var title_2 = CreText('title_2',0,63,96,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_2);
var title_3 = CreText('title_3',97,63,126,30,"1. Listening",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_3);
var ls31_0 = CreText('ls31_0',203,199,135,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_0);
var ls31_1 = CreText('ls31_1',203,239,135,39,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_1);
var ls31_2 = CreText('ls31_2',203,278,135,38,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_2);
var ls31_3 = CreText('ls31_3',338,199,135,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_3);
var ls31_4 = CreText('ls31_4',338,239,135,39,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_4);
var ls31_5 = CreText('ls31_5',338,278,135,38,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_5);
var Text_6 = CreText('Text_6',121,120,311,42,"FAMILY JOB SURVEY",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_6);
var Text_1 = CreText('Text_1',34,330,453,24,"2. Listen again and write the answers.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
Page_6.add(Text_1);
var Text_2 = CreText('Text_2',112,364,348,146,"1. What grade is Tim in?\r\n\r\n2. How old is Tony?\r\n\r\n3. Are Peter's parents doctors?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_2);
var ls31_6 = CreText('ls31_6',131,372,222,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_6);
var ls31_7 = CreText('ls31_7',131,403,222,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_7);
var ls31_8 = CreText('ls31_8',131,441,222,20,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_8);
var Check2 = CreText('Check2',263,515,92,26,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson31();
  return;
}
 );
Page_6.add(Check2);
var Text_12 = CreText('Text_12',52,516,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_6.add(Text_12);
var Text_13 = CreText('Text_13',510,515,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_6.add(Text_13);
var Text_15 = CreText('Text_15',495,86,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_15);
var m_diem = CreText('m_diem',201,250,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(m_diem);
var Text_3 = CreText('Text_3',200,250,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_3);
var btclose = CreText('btclose',259,330,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson22();
  return;
}
 );
Page_6.add(btclose);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_3);
msg1.add(btclose);
Page_6.add(msg1);
var title_0 = CreText('title_0',1,0,94,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(title_0);
stage.add(Page_6);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page_7_Backrounnd = CreText('Page_7_Backrounnd',0,0,600,600,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
Page_7.add(Page_7_Backrounnd);
var title_1 = CreText('title_1',0,1,599,50,"JOBS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_7.add(title_1);
var Text_2 = CreText('Text_2',16,106,562,458,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_2);
var _21 = CreText('_21',45,108,346,24,"1. Lock at the pictures. Listen and answers.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(_21);
var _22 = CreText('_22',48,342,346,25,"2. Listen again  and write your answers.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(_22);
var Text_4 = CreText('Text_4',70,372,29,88,"1.\r\n\r\n2.\r\n\r\n3.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_4);
var Text_7 = CreText('Text_7',79,470,295,66,"- What is his job?\r\n- What is her job?\r\n- Where does he work?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_7);
var l32_0 = CreText('l32_0',105,370,304,24,"She's a teacher. She works in a school.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
ListenL32();
  return;
}
 );
Page_7.add(l32_0);
var l32_1 = CreText('l32_1',105,399,304,24,"He works is a company.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(l32_1);
var l32_2 = CreText('l32_2',105,428,304,24,"She's a housewife.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(l32_2);
var Text_9 = CreText('Text_9',424,106,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_9);
var Text_10 = CreText('Text_10',335,337,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_10);
var Image_1 = CreText('Image_1',53,133,303,154,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_1);
var Image_2 = CreText('Image_2',58,135,328,194,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_2);
var _23 = CreText('_23',49,457,346,25,"3. Talk about your mother and father.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(_23);
var Text_12 = CreText('Text_12',43,549,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_7.add(Text_12);
var title_2 = CreText('title_2',1,56,96,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_2);
var title_3 = CreText('title_3',98,56,126,30,"2. Speaking",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_3);
var m_diem = CreText('m_diem',215,265,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(m_diem);
var Text_3 = CreText('Text_3',215,265,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_3);
var btclose = CreText('btclose',274,345,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson32();
  return;
}
 );
Page_7.add(btclose);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_3);
msg1.add(btclose);
Page_7.add(msg1);
var Check2 = CreText('Check2',263,549,92,26,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson32();
  return;
}
 );
Page_7.add(Check2);
var title_0 = CreText('title_0',0,1,94,50,"Unit 12",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title_0);
stage.add(Page_7);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,450,145,'','#9dceff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#9dceff','0','0','0','','0','0','0','0',0,0,'');
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
