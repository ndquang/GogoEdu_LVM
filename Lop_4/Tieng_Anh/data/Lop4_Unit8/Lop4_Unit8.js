folder_Resource ='data/Lop4_Unit8';
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
Speak(GetText("","title_0")+". "+GetText("","title_1")+". "+GetText("","title_2"),"EN");
SetShowObject("","msg",0);
SetMoveView("","msg",1);
}
var lesson1=["Sunday","Thursday","Tuesday","Saturday"];
function CheckLesson1(){
var diem=0;
	for(var i=0; i<4;i++){
		if(toLowerCase(GetText("","l1_"+i)) ==  toLowerCase(lesson1[i]))
		{
		SetText("","l1_"+i,lesson1[i]);
		SetFontColor("","l1_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l1_"+i,"#ff0000");
	}
		
	var dd= round(diem*100/4);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg",1);
      InvalidateObj("","");
	return diem;

}

var kql1_2=["",""];
var kql1_2_origin=["",""];
var kql1_2temwords=["",""];
var countword=[5,6,5,4];
var countclick=[0,0,0,0,0,0,0,0,0,0];
var string_l12="";
var count_sentens=0;
var count_words=0;

function SlipCau( myString){
	var Startdot=0;
	var Enddot= indexOf(myString,"\n",Startdot);
	var i=0;
	while(Enddot!=-1)
	{
	kql1_2[i]= subString(myString,Startdot, Enddot-Startdot);
	kql1_2_origin[i]=kql1_2[i];
	i++;
	Startdot=Enddot+1;
	Enddot= indexOf(myString,"\n",Startdot);
	}
	kql1_2[i]= subString(myString,Startdot);
	kql1_2_origin[i]=kql1_2[i];

	for(var j=0; j<10; j++)
	{
		var x = Random(i+1);
		var y = Random(i+1);
		while(x==y)
			y = Random(i+1);
		var tam= kql1_2[x];
		kql1_2[x]=kql1_2[y];
		kql1_2[y]=tam;
	}
	return i+1;
}
function SlipWords( myString){
	var Startdot=0;
	var Enddot= indexOf(myString," ",Startdot);
	var i=0;
	while(Enddot!=-1)
	{
	kql1_2temwords[i]= subString(myString,Startdot, Enddot-Startdot+1);
	i++;
	Startdot=Enddot+1;
	Enddot= indexOf(myString," ",Startdot);
	}
	kql1_2temwords[i]= subString(myString,Startdot);
	for(var j=0; j<10; j++)
	{
		var x = Random(i+1);
		var y = Random(i+1);
		while(x==y)
			y = Random(i+1);
		var tam= kql1_2temwords[x];
		kql1_2temwords[x]=kql1_2temwords[y];
		kql1_2temwords[y]=tam;
	}
	return i+1;
}

function InitLesson1_2(){
SetShowObject("","Group_1",0);
for(var x=0;x<10;x++)
{
SetShowObject("","kqb3_"+x,0);
  SetCursor("","kqb3_"+x,"default");
  for(var y=0;y<10;y++)
  SetShowObject("","b3"+x+"_"+y,0);
}
string_l12= GetText("","L1_2");
count_sentens= SlipCau(string_l12);
for(var i=0; i<count_sentens;i++){
	SetText("","kqb3_"+i,"");
      SetMoveView("","kqb3_"+i,0);
	SetShowObject("","kqb3_"+i,1);
	SetFontColor("","kqb3_"+i,"#0066FF");
	count_words = SlipWords(kql1_2[i]);
	countword[i] = count_words;
	countclick[i]=0;
	for(var j=0; j<count_words;j++){
		SetText("","b3"+i+"_"+j,kql1_2temwords[j]);
		SetShowObject("","b3"+i+"_"+j,1);
		countclick[j]=0;
	}
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
	var sp= GetText("","");
	SpeakEN("","",sp);
	var tt= GetText("",objcheck)+sp;
	SetText("",objcheck,tt);
	SetShowObject("","",0);
	var xxx = rightStr(objcheck,1);
      countclick[xxx]=countclick[xxx]+1;
	if(countclick[xxx] == countword[xxx])
	{
		if(kql1_2[xxx]==GetText("",objcheck))
		  {
		  SpeakEN("","",kql1_2[xxx]);
		  SetFontColor("",objcheck,"#008000");
		  SetCursor("",objcheck,"move");

		  SetMoveView("",objcheck,1);
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
function CheckDialogues()
{
	var i= 0;
	while(i<count_sentens)
	{
		if(kql1_2[i]!=kql1_2_origin[i])
				break;
		i++;
	}
	return i;
}

var xd=0,yd=0;
function DownSwapLine(){
	xd= GetLeft("","");
	yd= GetTop("","");
}
function UpSwapLine()
{
	var i= 0;
	while(i<count_sentens)
	{
		if(RectInRect("","kqb3_"+i,"")==1 && GetMoveView("","kqb3_"+i)==true)
			{
				var xu= GetLeft("","kqb3_"+i);
				var yu= GetTop("","kqb3_"+i);
				transitionTo("","",1000,xu,yu);
				transitionTo("","kqb3_"+i,1000,xd,yd);
				var tam= kql1_2[i];
				var cur_index= rightStr(GetName(""),1);
				kql1_2[i]=kql1_2[cur_index];
				kql1_2[cur_index]=tam;
				var curN= Name("");
				Name("","abcxyz123");
				Name("kqb3_"+i,curN);
				Name("abcxyz123","kqb3_"+i);
				if(CheckDialogues()==count_sentens){
					SetText("","title","Successfull");
					SetShowObject("","Group_1",1);
				}
				break;
			}
		i++;
	}
	if(i>=count_sentens)transitionTo("","",1000,xd,yd);
}
//
var a_kqls13=["Yes","No","No","Yes","No"];
function InitLesson13(){
	for(var i=0;i<5;i++){
		SetText("","button13_"+i,"");
SetFontColor("","button13_"+i,"#000000");
}
	SetShowObject("","begin",1);
SetShowObject("","lam_lai",0);
SetText("","m_diem","");

InvalidateObj("","");
}
function ClickL13(){
var i= rightStr(Name(""),1);
	if(GetText("","")!="Yes")
		SetText("","","Yes");
	else SetText("","","No");
SetColor("","","#ffffff");
var tt= GetText("","cau13_"+i)+" "+GetText("","");
Speak(tt,"EN");

InvalidateObj("","");
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<5;i++)
{
	if(a_kqls13[i] != GetText("","button13_"+i))
	{
		SetFontColor("","button13_"+i,"#800000");
	}
	else {
		SetFontColor("","button13_"+i,"#008000");
		diem=diem+1;
	     }
}
	var dd= round(diem*100/5);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
////
var lesson2=["George Primary School","Yes, he is","No, he hasn't","Yes, he does.","Music and Art.","free on Satturday."];
function InitLesson21()
{
for(var i=1; i<6;i++){
		SetText("","l21_"+i,"");
		SetFontColor("","l21_"+i,"#000080");

}
SetText("","m_diem","");
SetShowObject("","",0);
  return;
}
function CheckLesson21(){
var diem=0;
	for(var i=1; i<6;i++){
		if(trimStr(toLowerCase(GetText("","l21_"+i)),'.') ==  toLowerCase(lesson2[i]))
		{
		SetText("","l21_"+i,lesson2[i]);
		SetFontColor("","l21_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l21_"+i,"#ff0000");
	}
      var dd= round(diem*100/5);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg",1);
      InvalidateObj("","");
	return diem;
}


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
	SetShowObject("","msg",1);
      InvalidateObj("","");

}
//
var akq_31=["Twice a week","Once a week","Four times a week","Three time a week","Monday, Wednesday and Friday"];
function InitLesson31()
{
	for(var i=1; i< 5;i++){
	 SetText("","ls31_"+i,"");
	 SetFontColor("","ls31_"+i,"#000080");
	}
		InvalidateObj("","");
}
function CheckLesson31(){
	var diem=0;
	for(var i=1; i< 5;i++){
	 if(toLowerCase(akq_31[i]) == toLowerCase(GetText("","ls31_"+i))){
	    SetText("","ls31_"+i,akq_31[i]);
	    SetFontColor("","ls31_"+i,"#00ff00");
	    diem=diem+1;
	    }
	  else SetFontColor("","ls31_"+i,"#ff0000");
	}
	return diem;
}
function Speak31()
{
	var index= rightStr(GetName(""),1);
	Speak(akq_31[index],"EN");

}
//

var tl32=[""];
var kq32=[""];
function InitLesson32()
{
	for(var i=0; i< 5;i++){
	 var ra= Random(2);
	 if(ra==0) kq32[i]="a";
		else kq32[i]="b";
	SetFontColor("","l32_"+i,"#000000");
	SetFontColor("","a_"+i,"#000000");
	SetFontColor("","b_"+i,"#000000");
	}
	SetShowObject("","msg",0);
	InvalidateObj("","");
}
function  Speak32()
	{
	var index= rightStr(GetName(""),1);
	var tt = GetText("","");
	var tl= GetText("",kq32[index]+"_"+index);
	tl= subString(tl,3);
	tt= replaceStr(tt,"..........", tl,0);
	Speak(tt,"EN");
}
function   Click32(){
	var na = GetName("");
	tl32[rightStr(na,1)]= leftStr(na,1);
	SetFontColor("","","#008000");
	if(leftStr(na,1)=="a")
	SetFontColor("","b_"+rightStr(na,1),"#000000");
	else
	SetFontColor("","a_"+rightStr(na,1),"#000000");
	InvalidateObj("","");
}
function CheckLesson32(){
var diem=0;
	for(var i=0; i<5;i++){
		if(kq32[i] ==  tl32[i])
		{
		SetFontColor("","l32_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l32_"+i,"#ff0000");
	}
	diem=diem+CheckLesson31();
	var dd= round(diem*100/9);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg",1);
      InvalidateObj("","");
}
function Page_1()
{
DocTieuDe();
  return;
}

function Page_2()
{
DocTieuDe();
for(var i=0; i<4;i++){
		SetText("","l1_"+i,"");
		SetFontColor("","l1_"+i,"#000000");
}
SetShowObject("","msg",0);
InvalidateObj("","");
  return;
}


function Page_3()
{
DocTieuDe();
for(var x=0;x<10;x++)
{
SetShowObject("","kqb3_"+x,0);
  for(var y=0;y<10;y++)
  SetShowObject("","b3"+x+"_"+y,0);
}
LineHeight("","L1_2",1.5);
SetShowObject("","Group_1",1);
  return;
}

function Trang_1()
{
DocTieuDe();
InitLesson13();
  return;
}

function Page_4()
{
DocTieuDe();
InitLesson21();
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
InitLesson31();
InitLesson32();
  return;
}

function Page_7()
{
DocTieuDe();

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
 height: 550 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,700,540,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title_2 = CreText('title_2',9,79,679,432,"\r\n     REMEMBER",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',16,'Arial','Bold','left','top',3,'0.00','14','0',2,'#3cb371','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_2);
var Text_8 = CreText('Text_8',44,119,644,414,"- Các ngày trong tuần:\r\n\r\n\r\n- Để hỏi hôm nay là thứ mấy em nói:\r\n\r\n- Khi trả lời em nói:                                   (- Viết hoa tên thứ)\r\n\r\n                    - Ví dụ:\r\n\r\n- Để hỏi về mức độ thường xuyên của việc học một môn nào đó ở trường, em nói:\r\n\r\n\r\n- Để trả lời em nói mức độ thường xuyên trong bảng sau:\r\n\r\n\r\n\r\n\r\n\r\n- Ví dụ:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var title_1 = CreText('title_1',96,1,604,62,"My School Timetable",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title_1);
var title_0 = CreText('title_0',0,1,130,62,"Unit 8",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_0);
var Text_3 = CreText('Text_3',69,136,612,43,"Monday(Mon); Tuesday(Tue); Wednesday(Wed); Thursday(Thur); Friday(Fri); Saturday(Sat); Sunday(Sun)",'rgba(0, 0, 0, 0)','#ff0000','#00008b','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',323,172,242,23,"What day is it today?",'rgba(0, 0, 0, 0)','#ff0000','#00008b','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',200,206,54,23,"It's ",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_5);
var Text_28 = CreText('Text_28',238,206,97,23,"Tên Thứ",'#98fb98','#408080','#004080','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','12','0',1,'#005500','#98fb98','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#408080',0,1.50);
Page_1.add(Text_28);
var Text_18 = CreText('Text_18',205,245,467,24,"What day is it today? - It's Monday.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_18);
var Text_20 = CreText('Text_20',59,313,504,23,"How often have you got                                   in your school?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_20);
var next = CreText('next',599,496,69,28,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(next);
var Text_19 = CreText('Text_19',290,312,117,23,"TÊN MÔN HỌC",'#98fb98','#408080','#004080','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','12','0',1,'#005500','#98fb98','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#408080',0,1.50);
Page_1.add(Text_19);
var Text_1 = CreText('Text_1',116,458,504,23,"How often have you got PE in your school? - Once a week.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',54,372,170,87,"once a week:\r\ntwice a week:\r\nthree times a week:\r\nfour times a week:\r\n\r\n\r\n\r\n\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_2);
var Text_6 = CreText('Text_6',321,373,156,87,"five times a week\r\nsix times a week\r\nseven times a week\r\nevery day",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',208,372,170,87,"1 lần / tuần\r\n2 lần / tuần\r\n3 lần / tuần\r\n4 lần / tuần",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_9 = CreText('Text_9',478,375,235,87,": 5 lần / tuần\r\n: 6 lần / tuần\r\n: 7 lần / tuần\r\n: tất cả các ngày trong tuần.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_6 = CreText('Text_6',328,111,98,39,"stayued",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_6);
var Text_1 = CreText('Text_1',205,111,98,39,"stayrhud",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var title_0 = CreText('title_0',1,0,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_0);
var title_1 = CreText('title_1',56,34,188,22,"1. Vocabulary",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_1);
var title_2 = CreText('title_2',97,55,326,24,"Unscramble the words. They are days in week.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_2);
var pre = CreText('pre',10,323,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(pre);
var next = CreText('next',549,322,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(next);
var mess = CreText('mess',211,126,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(mess);
var Text_5 = CreText('Text_5',211,126,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var btclose = CreText('btclose',270,206,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
  return;
}
 );
Page_2.add(btclose);
var l1_0 = CreText('l1_0',91,241,102,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_0);
var l1_1 = CreText('l1_1',211,241,106,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_1);
var l1_2 = CreText('l1_2',331,241,109,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_2);
var Text_4 = CreText('Text_4',82,111,98,39,"saydun",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var begin = CreText('begin',472,54,60,22,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
Page_2.add(begin);
var Text_2 = CreText('Text_2',452,111,98,39,"stayurad",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_2);
var l1_3 = CreText('l1_3',452,241,107,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_3);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:207,height:110});
msg.add(mess);
msg.add(Text_5);
msg.add(btclose);
Page_2.add(msg);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,640,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var title_0 = CreText('title_0',0,0,96,30,"Lesson 1",'rgba(0, 0, 0, 0)','#000000','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_0);
var title_1 = CreText('title_1',12,5,186,22,"2. Sentence Patterns",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_1);
var title_2 = CreText('title_2',47,23,560,25,"Unscramble the words. Then rearrange the sentences to make three short dialogues.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_2);
var b30_0 = CreText('b30_0',90,103,65,22,"Tony.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',90,72,442,25,"good",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_0);
var b30_1 = CreText('b30_1',170,103,65,22,"good",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_1);
var b30_2 = CreText('b30_2',250,103,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_2);
var b31_0 = CreText('b31_0',90,160,65,25,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_0);
var b31_1 = CreText('b31_1',170,160,65,25,"Brown",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_1);
var b31_2 = CreText('b31_2',250,160,65,25,"Good",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',90,132,442,25,"your /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_1);
var b32_0 = CreText('b32_0',90,221,65,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_0);
var b32_1 = CreText('b32_1',170,221,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_1);
var b32_2 = CreText('b32_2',250,221,65,25,"doing /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_2);
var b33_0 = CreText('b33_0',90,280,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_0);
var b33_1 = CreText('b33_1',170,280,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',90,192,442,25,"where /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',90,252,442,25,"where /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_3);
var b33_2 = CreText('b33_2',250,280,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_2);
var b33_3 = CreText('b33_3',330,280,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_3);
var b31_3 = CreText('b31_3',330,160,65,25,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_3);
var b32_3 = CreText('b32_3',330,221,65,25,"parents /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_3);
var b32_4 = CreText('b32_4',410,221,65,25,"what",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_4);
var b30_3 = CreText('b30_3',330,103,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_3);
var b30_4 = CreText('b30_4',410,103,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_4);
var b31_4 = CreText('b31_4',410,160,65,25,"Mr",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_4);
var b33_4 = CreText('b33_4',410,280,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_4);
var b34_0 = CreText('b34_0',90,342,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_0);
var b34_1 = CreText('b34_1',170,342,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_1);
var kqb3_4 = CreText('kqb3_4',90,312,442,25,"",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_4);
var b34_2 = CreText('b34_2',250,342,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_2);
var b34_3 = CreText('b34_3',330,342,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_3);
var b34_4 = CreText('b34_4',410,342,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_4);
var b35_0 = CreText('b35_0',90,404,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_0);
var b35_1 = CreText('b35_1',170,404,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_1);
var kqb3_5 = CreText('kqb3_5',90,373,442,25,"",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
kqb3_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page_3.add(kqb3_5);
var b35_2 = CreText('b35_2',250,404,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_2);
var b35_3 = CreText('b35_3',330,404,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_3);
var b35_4 = CreText('b35_4',410,404,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_4);
var Text_1 = CreText('Text_1',47,46,574,20,"Xắp xếp lại từ. Sau đó, sắp xếp lại các câu để thực hiện ba cuộc đối thoại ngắn .",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_1);
var L1_2 = CreText('L1_2',168,131,296,167,"When is your birthday?\r\nIt is in May.\r\nWhat day is it today?\r\nIt is Tuesday.\r\nWhat date is it today?\r\nIt is the fifth of January.",'#ffff80','#ccffcc','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#ffffb9','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_3.add(L1_2);
var bt_start = CreText('bt_start',282,271,85,22,"Start",'#ffff80','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#ffff00','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson1_2();
  return;
}
 );
Page_3.add(bt_start);
var title = CreText('title',168,131,296,23,"Unscramble the words. Then ...",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffff00','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(title);
var Text_12 = CreText('Text_12',26,424,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Text_12);
var Text_13 = CreText('Text_13',565,423,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_3.add(Text_13);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:300,height:171});
Group_1.add(L1_2);
Group_1.add(title);
Group_1.add(bt_start);
Page_3.add(Group_1);
var b30_5 = CreText('b30_5',477,102,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_5);
var b31_5 = CreText('b31_5',477,159,65,25,"Mr",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_5);
var b32_5 = CreText('b32_5',477,220,65,25,"what",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_5);
var b33_5 = CreText('b33_5',477,279,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_5);
var b34_5 = CreText('b34_5',477,341,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_5);
var b35_5 = CreText('b35_5',477,403,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_5);
stage.add(Page_3);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,600,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var cau13_4 = CreText('cau13_4',74,371,304,22,"5. Tony and Mary have got Music on Monday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_4);
var title_2 = CreText('title_2',56,30,500,217,"\r\n     Read and Write Yes or No.",'#ffffe0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ffff00','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_2);
var name_1 = CreText('name_1',136,69,416,189,"What date is it today, Mary?\r\nIt's Monday.\r\nNo, I mean the date. D-A-T-E\r\nOh, I see. It's the first of October.\r\nThank you. What lessons have you got on Monday?\r\nMaths and Science. How about you?\r\nI've got Music, IT, PE and Art on Monday.\r\nThat's a lot.\r\nYes. But I love Music and Art. You know, I love Monday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_1.add(name_1);
var name_0 = CreText('name_0',82,69,77,189,"Tony:\r\nMary:\r\nTony:\r\nMary:\r\nTony:\r\nMary:\r\nTony:\r\nMary:\r\nTony:",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Trang_1.add(name_0);
var title_0 = CreText('title_0',17,3,21,22,"3. ",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#282828','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title_0);
var title_1 = CreText('title_1',44,3,156,22,"Reading and Writing.",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_1);
var cau13_2 = CreText('cau13_2',72,312,361,22,"3. Mary is very busy on Monday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak(GetText("",""),"EN");

  return;
}
 );
Trang_1.add(cau13_2);
var cau13_0 = CreText('cau13_0',72,252,304,22,"1. It's Monday today.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_0);
var cau13_1 = CreText('cau13_1',72,282,304,22,"2. It's the fifth of October today.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_1);
var cau13_3 = CreText('cau13_3',72,342,304,22,"4. Tony loves Monday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_3);
var Text_13 = CreText('Text_13',549,374,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_13);
var Text_12 = CreText('Text_12',14,375,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_1.add(Text_12);
var begin = CreText('begin',470,19,60,22,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
Trang_1.add(begin);
var button13_0 = CreText('button13_0',390,252,42,22,"Yes",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_0);
var button13_1 = CreText('button13_1',390,282,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_1);
var button13_2 = CreText('button13_2',390,312,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_2);
var button13_3 = CreText('button13_3',390,342,42,22,"Yes",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_3);
var button13_4 = CreText('button13_4',390,371,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_4);
var Text_9 = CreText('Text_9',420,17,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","name_1"),"EN");
  return;
}
 );
Trang_1.add(Text_9);
var m_diem = CreText('m_diem',226,141,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(m_diem);
var Text_5 = CreText('Text_5',226,141,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_5);
var btclose = CreText('btclose',285,221,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
InitLesson13();
  return;
}
 );
Trang_1.add(btclose);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:207,height:110});
msg.add(m_diem);
msg.add(btclose);
msg.add(Text_5);
Trang_1.add(msg);
stage.add(Trang_1);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,600,460,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var Text_1 = CreText('Text_1',68,83,475,162,"",'#ffffca','#000000','#000000','#ffffff','',12,'Arial','Normal','left','top',3,'0.00','3','0',1,'#ffff00','#ffffca','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',25,1.80);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page_4.add(Text_1);
var name_0 = CreText('name_0',66,68,269,184,"      Tim is pupil at Geogre Primary School. He's busy at school. He has got Maths and IT on Monday. He is very happy with Music and Art on Tuesday. He has got Science on Wednesday an PE on Thursday and Friday. He is free on Saturday.",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',12,'Arial','Normal','left','top',3,'0.00','3','0',1,'rgba(0, 0, 0, 0)','#ffffca','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',25,1.80);
name_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page_4.add(name_0);
var Text_9 = CreText('Text_9',69,403,367,24,"6. What lessons has he got on Saturday?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_9);
var Text_4 = CreText('Text_4',118,85,170,24,"My Timetable",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_4);
var title_0 = CreText('title_0',-1,1,96,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_0);
var title_1 = CreText('title_1',54,35,186,22,"1. Reading and Writing",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_1);
var title_2 = CreText('title_2',63,59,392,24,"Read and answer with NO MORE THAN THREE words.",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','4','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_2);
var l21_0 = CreText('l21_0',320,261,151,24,"George Primary School",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(l21_0);
var Text_5 = CreText('Text_5',69,288,262,24,"2. Is Tom very busy?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_5);
var l21_1 = CreText('l21_1',320,288,151,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_1);
var l21_2 = CreText('l21_2',320,315,151,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_2);
var Text_10 = CreText('Text_10',69,260,262,24,"1. What is Tom's school?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_10);
var l21_3 = CreText('l21_3',320,342,151,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_3);
var Text_12 = CreText('Text_12',69,316,262,24,"3. Has he got 5 lessons every day?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_12);
var l21_4 = CreText('l21_4',320,369,151,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_4);
var Text_14 = CreText('Text_14',69,344,262,24,"4. Dose he like Music?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_14);
var l21_5 = CreText('l21_5',320,397,151,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_5);
var Text_17 = CreText('Text_17',21,425,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_4.add(Text_17);
var Check2 = CreText('Check2',414,74,67,23,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson21();
  return;
}
 );
Page_4.add(Check2);
var Text_18 = CreText('Text_18',529,425,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_4.add(Text_18);
var Text_6 = CreText('Text_6',69,372,262,24,"5. What lessons has he got on Tuesday?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_6);
var Text_7 = CreText('Text_7',500,70,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("My Timetable. "+ GetText("","name_0"),"EN");
  return;
}
 );
Page_4.add(Text_7);
var Text_2 = CreText('Text_2',352,125,178,128,"Monday:            Maths, IT\r\nTuesday:           Music, Art\r\nWednesday:     Science\r\nThursday:          PE\r\nFriday:               PE\r\nSaturday:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
Page_4.add(Text_2);
var m_diem = CreText('m_diem',199,155,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(m_diem);
var btclose = CreText('btclose',258,235,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
InitLesson21();
  return;
}
 );
Page_4.add(btclose);
var Text_3 = CreText('Text_3',199,155,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_3);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:207,height:110});
msg.add(m_diem);
msg.add(btclose);
msg.add(Text_3);
Page_4.add(msg);
stage.add(Page_4);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page_5_Backrounnd = CreText('Page_5_Backrounnd',0,0,500,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_5.add(Page_5_Backrounnd);
var ls22_3 = CreText('ls22_3',94,142,361,21,"4.         Friday.                                 funny.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_3);
var ls22_2 = CreText('ls22_2',94,112,279,21,"3.         Wednesday.                        furniture.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_2);
var title_1 = CreText('title_1',37,5,186,22,"Listening",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_1);
var title_0 = CreText('title_0',10,5,21,22,"2. ",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#282828','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title_0);
var title_2 = CreText('title_2',56,24,232,24,"1. Click to listen and tick true.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_2);
var ls22_0 = CreText('ls22_0',94,52,330,21,"1.         Monday.                              Thursday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_0);
var c0_0 = CreText('c0_0',117,53,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_0);
var ls22_1 = CreText('ls22_1',94,82,279,21,"2.         Tuesday.                             Saturday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_1);
var ls22_4 = CreText('ls22_4',94,171,279,21,"5.         Sunday.                               sunny.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_4);
var c0_1 = CreText('c0_1',264,53,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_1);
var c1_0 = CreText('c1_0',117,84,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_0);
var c1_1 = CreText('c1_1',264,84,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_1);
var c2_0 = CreText('c2_0',117,115,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_0);
var c2_1 = CreText('c2_1',264,115,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_1);
var c3_0 = CreText('c3_0',117,143,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_0);
var c3_1 = CreText('c3_1',264,143,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_1);
var c4_0 = CreText('c4_0',117,173,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_0);
var c4_1 = CreText('c4_1',264,173,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_1);
var ls22_5 = CreText('ls22_5',94,222,351,21,"1.         Tuesday lesson.                       Thursday lesson.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_5);
var c5_0 = CreText('c5_0',117,224,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_0);
var c5_1 = CreText('c5_1',264,223,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_1);
var ls22_6 = CreText('ls22_6',94,244,351,21,"2.         Sunday match.                        Thursday match.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_6);
var c6_0 = CreText('c6_0',117,249,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_0);
var c6_1 = CreText('c6_1',264,249,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_1);
var ls22_7 = CreText('ls22_7',94,278,351,57,"3.         I'm busy on Monday.\r\n            I'm free on Monday.\r\n            I'm happy on Monday.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls22_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_7);
var c7_2 = CreText('c7_2',117,310,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_2);
var c7_1 = CreText('c7_1',117,292,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_1);
var c7_0 = CreText('c7_0',117,274,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_0);
var ls22_8 = CreText('ls22_8',94,336,351,59,"4.         She's got PE on Thursday.\r\n            She's got PE on Saturday.\r\n            She's got PE on Sunday.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls22_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_8);
var c8_2 = CreText('c8_2',117,367,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_2);
var c8_1 = CreText('c8_1',117,349,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_1);
var c8_0 = CreText('c8_0',117,331,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_0);
var ls22_9 = CreText('ls22_9',94,396,351,56,"5.         What lessons have you got on Thursday?\r\n            What lessons have you got on Thuesday?\r\n            What lessons have you got today?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls22_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_9);
var c9_2 = CreText('c9_2',117,426,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_2);
var c9_1 = CreText('c9_1',117,409,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_1);
var c9_0 = CreText('c9_0',117,392,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_0);
var Text_1 = CreText('Text_1',69,196,347,24,"2. Click to listen and tick. Then listen again and repeat.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(Text_1);
var Check2 = CreText('Check2',406,25,70,23,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson22();
  return;
}
 );
Page_5.add(Check2);
var Text_17 = CreText('Text_17',13,427,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_5.add(Text_17);
var Text_18 = CreText('Text_18',445,426,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_5.add(Text_18);
var m_diem = CreText('m_diem',146,189,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(m_diem);
var btclose = CreText('btclose',205,269,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
InitLesson22();
  return;
}
 );
Page_5.add(btclose);
var Text_3 = CreText('Text_3',146,189,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(Text_3);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:207,height:110});
msg.add(m_diem);
msg.add(btclose);
msg.add(Text_3);
Page_5.add(msg);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page_6_Backrounnd = CreText('Page_6_Backrounnd',0,0,500,550,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_6.add(Page_6_Backrounnd);
var Text_4 = CreText('Text_4',56,303,413,20,"2. Listen again and choose the best answer. Circle a or b.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(Text_4);
var Cau_hoi_0 = CreText('Cau_hoi_0',79,87,329,201,"Mai:\r\n\r\nQuan:\r\n\r\nPhong:\r\n\r\nNam:\r\n\r\nVan:\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',12,'Arial','Normal','left','top',0,'0.00','0','0',2,'#005500','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',25,1.50);
Page_6.add(Cau_hoi_0);
var title_0 = CreText('title_0',-1,1,96,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_0);
var title_1 = CreText('title_1',35,38,186,22,"1. Listening",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_1);
var title_2 = CreText('title_2',56,63,413,20,"1. Listen and fill in blank with information you hear.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','top',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_2);
var Text_18 = CreText('Text_18',450,520,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_6.add(Text_18);
var Text_17 = CreText('Text_17',7,521,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_6.add(Text_17);
var less32_0 = CreText('less32_0',85,323,359,20,"1. .......... has got English once a week.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
less32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
  return;
}
 );
Page_6.add(less32_0);
var Text_5 = CreText('Text_5',127,91,234,27,"Timetable a week.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(Text_5);
var less32_1 = CreText('less32_1',85,359,359,20,"2. .......... have got English three time a week.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
less32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
  return;
}
 );
Page_6.add(less32_1);
var Check2 = CreText('Check2',162,6,62,27,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson32();
  return;
}
 );
Page_6.add(Check2);
var ls31_0 = CreText('ls31_0',205,123,169,24,"Twice a week",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(ls31_0);
var ls31_1 = CreText('ls31_1',205,150,169,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_6.add(ls31_1);
var ls31_2 = CreText('ls31_2',205,178,169,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_6.add(ls31_2);
var ls31_3 = CreText('ls31_3',205,207,169,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_6.add(ls31_3);
var less32_2 = CreText('less32_2',85,395,359,20,"3. Phong has got English ..........",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
less32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
  return;
}
 );
Page_6.add(less32_2);
var less32_3 = CreText('less32_3',86,435,359,20,"4. Nam has got .......... three times a week.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
less32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();  return;
}
 );
Page_6.add(less32_3);
var ls31_4 = CreText('ls31_4',205,238,169,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_6.add(ls31_4);
var a_0 = CreText('a_0',110,340,160,19,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(a_0);
var a_1 = CreText('a_1',110,378,160,19,"a . Quan and Phong",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();  return;
}
 );
Page_6.add(a_1);
var a_2 = CreText('a_2',110,417,160,19,"a. three times a week",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(a_2);
var Text_15 = CreText('Text_15',363,76,25,25," Hello, everybody. My name's Tim Black and I'm from England. I'm thirteen years old. I can play football and tennis very well. But I can't play badminton. I can speak English, Vietnamses, and Japanese.\r\nNice to meet you!",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(Text_15);
var a_3 = CreText('a_3',110,455,160,24,"a. Music",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(a_3);
var less32_4 = CreText('less32_4',86,481,359,20,"5. Van hasn't got English on ..........",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
less32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
  return;
}
 );
Page_6.add(less32_4);
var b_0 = CreText('b_0',281,339,160,19,"b . Phong",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(b_0);
var b_1 = CreText('b_1',281,378,160,19,"b . Nam and Van",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(b_1);
var b_2 = CreText('b_2',281,418,160,19,"b. four times a week",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(b_2);
var b_3 = CreText('b_3',281,457,160,24,"b. English",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(b_3);
var a_4 = CreText('a_4',110,501,160,24,"a. Monday",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(a_4);
var b_4 = CreText('b_4',281,503,160,24,"b. Tuesday",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Click32();
  return;
}
 );
Page_6.add(b_4);
var m_diem = CreText('m_diem',155,179,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(m_diem);
var btclose = CreText('btclose',214,259,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson31();
InitLesson32();
  return;
}
 );
Page_6.add(btclose);
var Text_3 = CreText('Text_3',155,179,203,19,"Message",'rgba(255,255,0,0.78)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','rgba(255,255,128,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_3);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:207,height:110});
msg.add(m_diem);
msg.add(btclose);
msg.add(Text_3);
Page_6.add(msg);
stage.add(Page_6);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page_7_Backrounnd = CreText('Page_7_Backrounnd',0,0,450,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_7.add(Page_7_Backrounnd);
var title_1 = CreText('title_1',31,5,186,22,"Speaking",'rgba(0, 0, 0, 0)','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_1);
var title_0 = CreText('title_0',3,3,21,22,"2",'#282828','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#282828','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title_0);
var title_2 = CreText('title_2',45,24,346,24,"1. Lock at the pictures. Listen and answers.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_2);
var Image_1 = CreText('Image_1',76,43,229,183,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE11.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_1);
var Text_1 = CreText('Text_1',48,222,346,25,"2. Listen again  and write your answers.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_1);
var Text_4 = CreText('Text_4',70,232,29,115,"1.\r\n\r\n2.\r\n\r\n3.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_4);
var Text_5 = CreText('Text_5',54,338,346,25,"3. Talk about yourself timetable.",'#ffffff','#ffffff','#004080','#ffffff','',12,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_5);
var Text_6 = CreText('Text_6',91,363,330,89,"- What supjects have you got on Monday?\r\n- How ofen have you got Maths?\r\n- How ofen have you got English?\r\n...",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_6);
var Text_7 = CreText('Text_7',169,422,119,26,"end",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_7);
var ls32_0 = CreText('ls32_0',105,250,292,24,"It's Wednesday.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_0);
var ls32_1 = CreText('ls32_1',105,279,292,24,"It's the seventh of November.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_1);
var ls32_2 = CreText('ls32_2',105,308,292,24,"Four times a week.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_2);
var Text_9 = CreText('Text_9',292,23,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_9);
var Text_10 = CreText('Text_10',276,222,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var Check2 = CreText('Check2',370,11,62,23,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Check2);
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
