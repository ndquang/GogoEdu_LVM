folder_Resource ='data/Lop4_Unit15';
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
var lesson1=["Christmas","Tet","Mid-Autumn Festival","Children's Day"];
function InitL1(){
DocTieuDe();
for(var i=0; i<4;i++){
		SetText("","l1_"+i,"");
		SetFontColor("","l1_"+i,"#000000");
}
InvalidateObj("","");
}
function CheckLesson1(){
var diem=0;
	for(var i=0; i<4;i++){
		if(toLowerCase(GetText("","l1_"+i)) ==  toLowerCase(lesson1[i]))
		{
		SetText("","l1_"+i,lesson1[i]);
		SetFontColor("","l1_"+i,"#008000");
			diem=diem+1;
		}
		else SetFontColor("","l1_"+i,"#ff0000");
	}
		
	var dd= round(diem*100/4);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
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
DocTieuDe();
SetShowObject("","msg1",0);
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
function Check13(){
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
	SetShowObject("","msg1",1);
	InvalidateObj("","");
}
////
var lesson2=["Christmas tree","twenty-fourth of December","presents","children","present"];
function InitLesson21()
{
for(var i=0; i<5;i++){
		SetText("","l21_"+i,"");
		SetFontColor("","l21_"+i,"#000080");

}
DocTieuDe();
  return;
}
function CheckLesson21(){
var diem=0;
	for(var i=0; i<5;i++){
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
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
function Speak21(){
var index= rightStr(GetName(""),2);
	index= StringtoNumber(index);
	Speak(lesson2[index],"EN");
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
	DocTieuDe();
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
var listen_31=[""];
var akq_31=["",""];
var atr_31=["",""];
var aword_31=["","",""];
function ClickL31(){
	var n= Name("");
	n = replaceStr(n,"c",'');
	atr_31[leftStr(n,1)]= rightStr(n,1);
	for(var i=0;i<3;i++)
		SetText("","c"+ leftStr(n,1)+"_"+i,"");
	SetText("","","x");
SetColor("","","#ffffff");
InvalidateObj("","");
}
function InitLesson31()
{
	for(var i=0; i< 5;i++){
		var tt= GetText("","ls31_"+i);
		var Startdot= 0;
		var Enddot= indexOf(tt,"\r\n",Startdot);
		var j=0;
		while(Enddot!=-1 && j<3){
 			aword_31[j]= subString(tt,Startdot, Enddot-Startdot);
			SetText("","c"+i+"_"+j,"");
			SetColor("","c"+i+"_"+j,"#ffffff");
			j++;
			Startdot=Enddot+2;
                  Enddot= indexOf(tt,"\r\n",Startdot);
			if(Enddot==-1) {
				aword_31[j]= subString(tt,Startdot);
				SetText("","c"+i+"_"+j,"");
				SetColor("","c"+i+"_"+j,"#ffffff");
			}
			
		}
		   var abc=Random(j+1);
		   listen_31[i]= aword_31[abc];
		   akq_31[i]=abc;
		   atr_31[i]="-1";
	 	}
	DocTieuDe();
}
function CheckLesson31(){
	var diem=0;
	for(var i=0; i< 5;i++){
	 if(akq_31[i] == atr_31[i]){
	    SetColor("","c"+i+"_"+akq_31[i],"#00ff00");
	    diem++;
	    }
	  else {
		SetColor("","c"+i+"_"+akq_31[i],"#00ff00");
		SetColor("","c"+i+"_"+atr_31[i],"#ff0000");
		}
	}
	var dd= round(diem*100/5);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");

}
function Speak31()
{
	var i= rightStr(Name(""),1);
	var xx= GetText("","cau31_"+i);
	xx= replaceStr(xx,"_____________", "")+ subString(listen_31[i],3);
	Speak(subString(listen_31[i],3),"EN");
}
//

var tl32=["What time do you get up?","What time do you have breakfast?","What time do you go to bed?"];
var kq32=["At six o'clock","At six forty-five","At nine thirty-five"];
function InitLesson32()
{
	for(var i=0; i< 3;i++){
	SetFontColor("","ls32_"+i,"#000000");
	SetText("","ls32_"+i,"");
	}
	SetShowObject("","msg1",0);
	InvalidateObj("","");
}
function  Speak32()
	{
	var index= rightStr(GetName(""),1);
	var tt = tl32[index]+". "+kq32[index];
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
	for(var i=0; i<3;i++){
		if(toLowerCase(kq32[i]) ==  toLowerCase(GetText("","l32_"+i)))
		{
		SetFontColor("","ls32_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","ls32_"+i,"#ff0000");
	}
	var dd= round(diem*100/3);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
}
function Page_1()
{
DocTieuDe();
  return;
}

function Page_2()
{
InitL1();
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
InitLesson13();
  return;
}
function Trang_1_OnTimer()
{
  return;
}

function Page_4()
{
InitLesson21();
  return;
}

function Page_5()
{
InitLesson22();
  return;
}

function Page_6()
{
InitLesson31();
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
 height: 600 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,600,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title_2 = CreText('title_2',14,88,579,484,"\r\n     REMEMBER",'#ffffff','#ffffff','#009300','#ffffff','',16,'Arial','Bold','left','top',3,'0.00','14','0',2,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_2);
var Text_8 = CreText('Text_8',28,139,531,404,"Để hỏi thông tin về lễ hội nào đó em nói:\r\n\r\nĐể trả lời em nói:\r\n\r\nhoặc:\r\n\r\nVí dụ:\r\n\r\nĐể hỏi về dự định bạn sẽ làm em nói:\r\n\r\nKhi trả lời em nói:\r\n\r\nVí dụ:\r\n\r\nTên một số lễ hội:\r\n\r\nMột số hoạt động liên quan đến lễ hội:\r\n\r\n\r\n\r\nChú ý:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var title_1 = CreText('title_1',1,-1,600,62,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title_1);
var title_0 = CreText('title_0',-1,-1,128,62,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_0);
var Text_3 = CreText('Text_3',305,129,249,28,"What is + TÊN LỄ HỘI",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("What is","EN");
  return;
}
 );
Page_1.add(Text_3);
var Text_5 = CreText('Text_5',145,167,297,22,"It's a + TỪ MIÊU TẢ LỄ HỘI + festival.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("It's a ... festival.","EN");
  return;
}
 );
Page_1.add(Text_5);
var Text_17 = CreText('Text_17',277,264,252,24,"What are you going to do?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_17);
var Text_18 = CreText('Text_18',148,297,283,24,"I am going to + TỪ CHỈ HÀNH ĐỘNG",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("I am going to","EN");
  return;
}
 );
Page_1.add(Text_18);
var Text_22 = CreText('Text_22',73,196,398,24,"It's a festival for + TÊN ĐỐI TƯỢNG LỄ HỘI.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("It's a festival for","EN");
  return;
}
 );
Page_1.add(Text_22);
var next = CreText('next',489,558,69,27,"›››",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(next);
var Text_9 = CreText('Text_9',85,233,293,21,"It's a festival for children.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_9);
var Text_2 = CreText('Text_2',78,340,325,21,"I am going to visit my family.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_2);
var Text_4 = CreText('Text_4',149,374,522,21,"Tet, Christmas, New Year, Mid-Autumn Festival, Children's Day.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_4);
var Text_1 = CreText('Text_1',32,431,544,45,"go to Tet markets, visit..., get lucky money, wear new clothes, decorate our home, eat nice foot, watch the fireworks display",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_1);
var Text_6 = CreText('Text_6',79,477,465,73,"I am going to.\r\nWe / You / They + are going to.\r\nHe / She / It + is going to.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_6);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,400,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var title_1 = CreText('title_1',3,-1,600,62,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_2.add(title_1);
var Text_11 = CreText('Text_11',43,118,537,253,"",'#ffffff','#000000','#000000','#ffffff','',14,'Arial','Bold','center','middle',3,'0.00','10','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(Text_11);
var l1_1 = CreText('l1_1',171,276,125,32,"Lesson 1",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_1);
var Image_1 = CreText('Image_1',60,141,506,128,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_1);
var l1_2 = CreText('l1_2',301,276,138,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_2);
var l1_0 = CreText('l1_0',50,276,113,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_0);
var title_2 = CreText('title_2',0,68,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_2);
var title_3 = CreText('title_3',97,68,120,30," 1. Vocabulary",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_3);
var title_4 = CreText('title_4',70,109,319,24,"Look at the pictures and write words.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_4);
var Text_12 = CreText('Text_12',85,355,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_12);
var Text_13 = CreText('Text_13',483,355,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_13);
var mess = CreText('mess',219,223,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(mess);
var Text_5 = CreText('Text_5',219,223,202,19,"Message",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var btclose = CreText('btclose',277,303,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitL1();
  return;
}
 );
Page_2.add(btclose);
var begin = CreText('begin',483,111,60,22,"check",'#ff0000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
msg1.add(Text_5);
msg1.add(btclose);
Page_2.add(msg1);
var l1_3 = CreText('l1_3',443,276,133,32,"",'#e6e6fa','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[3],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_3);
var title_0 = CreText('title_0',1,-1,128,62,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(title_0);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,600,550,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var title_1 = CreText('title_1',-1,0,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_3.add(title_1);
var title_4 = CreText('title_4',47,103,560,25,"Unscramble the words. Then rearrange the sentences to make three short dialogues.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_4);
var b30_0 = CreText('b30_0',90,183,65,22,"Tony.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',90,152,442,25,"good",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b30_1 = CreText('b30_1',170,183,65,22,"good",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_1);
var b30_2 = CreText('b30_2',250,183,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_2);
var b31_0 = CreText('b31_0',90,240,65,25,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_0);
var b31_1 = CreText('b31_1',170,240,65,25,"Brown",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_1);
var b31_2 = CreText('b31_2',250,240,65,25,"Good",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',90,212,442,25,"your /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b32_0 = CreText('b32_0',90,301,65,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_0);
var b32_1 = CreText('b32_1',170,301,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_1);
var b32_2 = CreText('b32_2',250,301,65,25,"doing /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_2);
var b33_0 = CreText('b33_0',90,360,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_0);
var b33_1 = CreText('b33_1',170,360,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',90,272,442,25,"where /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var kqb3_3 = CreText('kqb3_3',90,332,442,25,"where /",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b33_2 = CreText('b33_2',250,360,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_2);
var b33_3 = CreText('b33_3',330,360,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_3);
var b31_3 = CreText('b31_3',330,240,65,25,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_3);
var b32_3 = CreText('b32_3',330,301,65,25,"parents /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_3);
var b32_4 = CreText('b32_4',410,301,65,25,"what",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_4);
var b30_3 = CreText('b30_3',330,183,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_3);
var b30_4 = CreText('b30_4',410,183,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_4);
var b31_4 = CreText('b31_4',410,240,65,25,"Mr",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_4);
var b33_4 = CreText('b33_4',410,360,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_4);
var b34_0 = CreText('b34_0',90,422,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_0);
var b34_1 = CreText('b34_1',170,422,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_1);
var kqb3_4 = CreText('kqb3_4',90,392,442,25,"",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b34_2 = CreText('b34_2',250,422,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_2);
var b34_3 = CreText('b34_3',330,422,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_3);
var b34_4 = CreText('b34_4',410,422,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_4);
var b35_0 = CreText('b35_0',90,484,65,25,"now /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_0);
var b35_1 = CreText('b35_1',170,484,65,25,"you /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_1);
var kqb3_5 = CreText('kqb3_5',90,453,442,25,"",'#f1fef1','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#f1fef1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var b35_2 = CreText('b35_2',250,484,65,25,"where /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_2);
var b35_3 = CreText('b35_3',330,484,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_3);
var b35_4 = CreText('b35_4',410,484,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_4);
var Text_1 = CreText('Text_1',47,126,574,20,"Xắp xếp lại từ. Sau đó, sắp xếp lại các câu để thực hiện ba cuộc đối thoại ngắn .",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_1);
var L1_2 = CreText('L1_2',175,166,296,167,"What is Christmas?\r\nIt's a big festival in December.\r\nWhat is Tet?\r\nIt's an important festival in Viet Nam.\r\nWhat is Children's Day?\r\nIt's a festival for children.",'#0080c0','#ccffcc','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_3.add(L1_2);
var bt_start = CreText('bt_start',274,303,111,25,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson1_2();
  return;
}
 );
Page_3.add(bt_start);
var title = CreText('title',175,166,296,23,"Unscramble the words. Then ...",'#004f9d','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(title);
var b30_5 = CreText('b30_5',477,182,65,22,"morning",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Page_3.add(b30_5);
var b31_5 = CreText('b31_5',477,239,65,25,"Mr",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Page_3.add(b31_5);
var b32_5 = CreText('b32_5',477,300,65,25,"what",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Page_3.add(b32_5);
var b33_5 = CreText('b33_5',477,359,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Page_3.add(b33_5);
var b34_5 = CreText('b34_5',477,421,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b34_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_4");
  return;
}
 );
Page_3.add(b34_5);
var b35_5 = CreText('b35_5',477,483,65,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b35_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_5");
  return;
}
 );
Page_3.add(b35_5);
var title_2 = CreText('title_2',1,66,111,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_2);
var title_3 = CreText('title_3',112,66,196,30,"2. Sentence Patterns",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_3);
var Text_12 = CreText('Text_12',20,516,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Text_12);
var Text_13 = CreText('Text_13',545,516,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var title_0 = CreText('title_0',-1,0,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(title_0);
stage.add(Page_3);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,600,500,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var title_1 = CreText('title_1',0,1,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Trang_1.add(title_1);
var Text_1 = CreText('Text_1',24,110,550,371,"",'#ffffe0','#ffffff','#0080c0','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ffff00','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(Text_1);
var name_1 = CreText('name_1',58,158,506,220,"Mid-Autumn Festival is a popular family holiday in many countries. In Viet Nam, it is also a festival for children. There are so many wonderful things for them. They can watch their favourite lion-head dance. They can eat delicious moon cakes. They can play games with friends. They can get some presents. They can join a school or street lantern parade. Every child has got a lantern. The favourite lanterns are start lanterns. Children are very happy. Their parents are happy, too.  ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
name_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(name_1);
var cau13_4 = CreText('cau13_4',111,419,359,22,"5. The parents are tired and sad in the festival.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_4);
var cau13_2 = CreText('cau13_2',111,360,359,22,"3. Children watch a cartoon on TV.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak(GetText("",""),"EN");

  return;
}
 );
Trang_1.add(cau13_2);
var cau13_0 = CreText('cau13_0',111,302,359,22,"1. In Viet Nam, Mid-Autumn Festival is for children.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_0);
var cau13_1 = CreText('cau13_1',111,330,359,22,"2. Their mothers watch the lion-head dance.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_1);
var cau13_3 = CreText('cau13_3',111,390,359,22,"4. Childrent like star lanterns.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau13_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(cau13_3);
var title_2 = CreText('title_2',1,67,96,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_2);
var title_3 = CreText('title_3',101,67,196,30,"3. Reading and Writing.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_3);
var Text_12 = CreText('Text_12',67,469,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_1.add(Text_12);
var Text_13 = CreText('Text_13',506,471,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_13);
var m_diem = CreText('m_diem',148,237,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Trang_1.add(m_diem);
var title = CreText('title',148,210,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title);
var bt_start = CreText('bt_start',246,320,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson13();
  return;
}
 );
Trang_1.add(bt_start);
var title_4 = CreText('title_4',71,117,373,31,"     Read and write YES or NO.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title_4);
var Text_9 = CreText('Text_9',380,99,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","name_1"),"EN");
  return;
}
 );
Trang_1.add(Text_9);
var begin = CreText('begin',483,97,67,25,"check",'#ff6820','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080c0','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check13();
  return;
}
 );
Trang_1.add(begin);
var button13_0 = CreText('button13_0',478,302,42,22,"Yes",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_0);
var button13_1 = CreText('button13_1',478,331,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_1);
var button13_2 = CreText('button13_2',478,360,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_2);
var button13_3 = CreText('button13_3',478,389,42,22,"Yes",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_3);
var button13_4 = CreText('button13_4',478,419,42,22,"No",'#dfdfdf','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#dfdfdf','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
button13_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL13();
  return;
}
 );
Trang_1.add(button13_4);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Trang_1.add(msg1);
var title_0 = CreText('title_0',0,1,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title_0);
stage.add(Trang_1);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,600,600,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var title_1 = CreText('title_1',-1,-1,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_4.add(title_1);
var br = CreText('br',14,101,579,481,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','4','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(br);
var Text_3 = CreText('Text_3',43,403,524,189,"Tom: What festival is it, Mai?\r\n\r\nMai:  It's Childrent's Day. It's a festival for\r\n\r\n          There's a lot of fun. We play games, sing songs and get presents.\r\n\r\nTom:  Is this                                           for me?\r\n\r\nMai:   I don't know. We get presents at the end of the festival.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_3);
var Text_10 = CreText('Text_10',40,161,541,209,"Lan:        What í this tree Tom?\r\n\r\nTom:  It's a\r\n\r\nLan:  What's Christmas, Tom?\r\n\r\nTom: Oh, It's a big festival on the\r\n\r\n           You can see Santa Claus with a big bag of\r\n\r\n           for childrent. You may get one.\r\n\r\nLan:  That's great.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_10);
var Image_2 = CreText('Image_2',119,177,46,46,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_2);
var Text_4 = CreText('Text_4',33,133,170,24,"Conversation 1:",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_4);
var l21_0 = CreText('l21_0',173,190,81,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_0);
var l21_2 = CreText('l21_2',431,285,116,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_2);
var l21_3 = CreText('l21_3',389,428,101,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_3);
var l21_4 = CreText('l21_4',180,494,99,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_4);
var Check2 = CreText('Check2',496,88,74,29,"√ Check",'#ff6820','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson21();
  return;
}
 );
Page_4.add(Check2);
var title_2 = CreText('title_2',-1,67,96,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_2);
var title_3 = CreText('title_3',98,67,196,30,"1. Reading and writing.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_3);
var Image_5 = CreText('Image_5',316,407,61,48,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_5);
var Text_2 = CreText('Text_2',35,567,56,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_4.add(Text_2);
var Text_13 = CreText('Text_13',510,566,52,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_4.add(Text_13);
var title_4 = CreText('title_4',22,114,562,30,"Look at the pictures. Write the answers with no more than three words.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','4','0',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_4.add(title_4);
var Text_1 = CreText('Text_1',30,372,170,24,"Conversation 2:",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_1);
var Image_4 = CreText('Image_4',254,230,56,54,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_4);
var Image_3 = CreText('Image_3',367,267,56,53,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE7.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_3);
var Image_6 = CreText('Image_6',128,484,47,41,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_4.add(Image_6);
var m_diem = CreText('m_diem',151,316,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_4.add(m_diem);
var title = CreText('title',151,289,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(title);
var bt_start = CreText('bt_start',249,399,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson21();
  return;
}
 );
Page_4.add(bt_start);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Page_4.add(msg1);
var l21_1 = CreText('l21_1',317,250,186,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_4.add(l21_1);
var title_0 = CreText('title_0',-1,-1,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(title_0);
stage.add(Page_4);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page_5_Backrounnd = CreText('Page_5_Backrounnd',0,0,600,530,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_5.add(Page_5_Backrounnd);
var title_1 = CreText('title_1',1,0,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_5.add(title_1);
var ls22_3 = CreText('ls22_3',130,230,361,21,"4.         two.                              ten.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_3);
var ls22_2 = CreText('ls22_2',130,200,403,21,"3.         Tet.                               tent.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_2);
var title_4 = CreText('title_4',32,100,386,31,"1. Click to listen and tick true.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_4);
var ls22_0 = CreText('ls22_0',130,140,330,21,"1.         festival.                        factory.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_0);
var c0_0 = CreText('c0_0',153,141,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_0);
var ls22_1 = CreText('ls22_1',130,170,397,21,"2.         fish.                             food.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_1);
var ls22_4 = CreText('ls22_4',130,259,350,21,"5.         tan.                               fan.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_4);
var c0_1 = CreText('c0_1',300,141,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_1);
var c1_0 = CreText('c1_0',153,172,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_0);
var c1_1 = CreText('c1_1',300,172,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_1);
var c2_0 = CreText('c2_0',153,203,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_0);
var c2_1 = CreText('c2_1',300,203,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_1);
var c3_0 = CreText('c3_0',153,231,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_0);
var c3_1 = CreText('c3_1',300,231,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_1);
var c4_0 = CreText('c4_0',153,261,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_0);
var c4_1 = CreText('c4_1',300,261,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_1);
var ls22_5 = CreText('ls22_5',130,286,351,21,"6.        a big festival.               a new factory.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_5);
var c5_0 = CreText('c5_0',153,288,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_0);
var c5_1 = CreText('c5_1',300,287,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_1);
var ls22_6 = CreText('ls22_6',130,308,351,21,"7.        favourite fish.               fantastic food.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_6);
var c6_0 = CreText('c6_0',153,313,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_0);
var c6_1 = CreText('c6_1',300,313,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_1);
var ls22_7 = CreText('ls22_7',130,342,351,57,"8.          I like Tet.\r\n             I like a tent.\r\n             I like ten tents.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_7);
var c7_2 = CreText('c7_2',153,374,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_2);
var c7_1 = CreText('c7_1',153,356,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_1);
var c7_0 = CreText('c7_0',153,338,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_0);
var ls22_8 = CreText('ls22_8',130,400,351,56,"9.           There are two festivals this week.\r\n              There are ten festivals this week.\r\n              There are twenty-two festivals this week.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_8);
var c8_2 = CreText('c8_2',153,431,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_2);
var c8_1 = CreText('c8_1',153,413,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_1);
var c8_0 = CreText('c8_0',153,395,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_0);
var ls22_9 = CreText('ls22_9',130,460,351,56,"10.       She's got a tan.\r\n            She's got a fan.\r\n            She's a fan.\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_9);
var c9_2 = CreText('c9_2',153,490,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_2);
var c9_1 = CreText('c9_1',153,473,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_1);
var c9_0 = CreText('c9_0',153,456,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_0);
var Check2 = CreText('Check2',436,103,70,23,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson22();
  return;
}
 );
Page_5.add(Check2);
var title_2 = CreText('title_2',-2,66,109,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_2);
var title_3 = CreText('title_3',109,66,117,30,"2. Listening",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_3);
var m_diem = CreText('m_diem',512,253,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_5.add(m_diem);
var title = CreText('title',512,226,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title);
var bt_start = CreText('bt_start',610,336,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson22();
  return;
}
 );
Page_5.add(bt_start);
var Text_13 = CreText('Text_13',537,495,52,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_5.add(Text_13);
var Text_2 = CreText('Text_2',11,492,56,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_5.add(Text_2);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Page_5.add(msg1);
var title_0 = CreText('title_0',1,0,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title_0);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page_6_Backrounnd = CreText('Page_6_Backrounnd',0,0,600,550,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_6.add(Page_6_Backrounnd);
var title_1 = CreText('title_1',0,1,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_6.add(title_1);
var Text_1 = CreText('Text_1',34,101,533,426,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_1);
var ls31_1 = CreText('ls31_1',105,199,264,61,"a. I'm going to make lanterns.\r\nb. She's going to make lanterns.\r\nc. He's going to make lanterns.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(ls31_1);
var ls31_0 = CreText('ls31_0',104,118,236,61,"a. It's a big festival.\r\nb. It's a big tree.\r\nc. It's a big boy.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();

}
 );
Page_6.add(ls31_0);
var ls31_2 = CreText('ls31_2',105,282,254,61,"a. Tet is coming.\r\nb. She is coming.\r\nc. She is combing her hair.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(ls31_2);
var ls31_4 = CreText('ls31_4',105,441,304,61,"a. I'm joining a parade.\r\nb. I'm visiting my teacher.\r\nc. I'm wearing new clothes.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(ls31_4);
var ls31_3 = CreText('ls31_3',105,364,301,61,"a. They are going to make lanterns.\r\nb. They are going to go to Tet market.\r\nc. They are going to get some presents.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
ls31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(ls31_3);
var Image_1 = CreText('Image_1',433,113,47,65,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_1);
var Image_2 = CreText('Image_2',428,196,73,65,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE12.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_2);
var Image_3 = CreText('Image_3',420,277,76,65,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE21.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_3);
var Image_4 = CreText('Image_4',421,366,76,65,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE7.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_6.add(Image_4);
var title_2 = CreText('title_2',1,68,111,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_2);
var title_3 = CreText('title_3',111,68,154,30,"1. Listen and tick",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_3);
var cau31_0 = CreText('cau31_0',86,118,439,20,"1. ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(cau31_0);
var s_0 = CreText('s_0',56,112,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
s_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak31();
  return;
}
 );
Page_6.add(s_0);
var c0_0 = CreText('c0_0',381,119,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c0_0);
var c0_1 = CreText('c0_1',381,139,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c0_1);
var c0_2 = CreText('c0_2',381,159,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c0_2);
var cau31_1 = CreText('cau31_1',85,199,334,25,"2.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
cau31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(cau31_1);
var s_1 = CreText('s_1',55,195,25,25,"x",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
s_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak31();
  return;
}
 );
Page_6.add(s_1);
var c1_0 = CreText('c1_0',381,199,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c1_0);
var c1_1 = CreText('c1_1',381,220,20,18,"3.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c1_1);
var c1_2 = CreText('c1_2',381,241,20,18,"3.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c1_2);
var cau31_2 = CreText('cau31_2',83,282,419,20,"3.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(cau31_2);
var s_2 = CreText('s_2',55,277,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
s_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak31();
  return;
}
 );
Page_6.add(s_2);
var c2_0 = CreText('c2_0',381,280,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c2_0);
var c2_1 = CreText('c2_1',381,299,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c2_1);
var c2_2 = CreText('c2_2',381,319,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c2_2);
var s_3 = CreText('s_3',55,360,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
s_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak31();
  return;
}
 );
Page_6.add(s_3);
var cau31_3 = CreText('cau31_3',83,367,288,20,"4.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(cau31_3);
var c3_0 = CreText('c3_0',381,359,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c3_0);
var c3_1 = CreText('c3_1',381,378,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c3_1);
var c3_2 = CreText('c3_2',381,397,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c3_2);
var cau31_4 = CreText('cau31_4',83,444,355,20,"5.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
  return;
}
 );
Page_6.add(cau31_4);
var c4_0 = CreText('c4_0',381,435,20,18,"x",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c4_0);
var s_4 = CreText('s_4',53,437,25,25,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
s_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Speak31();
  return;
}
 );
Page_6.add(s_4);
var c4_1 = CreText('c4_1',381,454,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c4_1);
var c4_2 = CreText('c4_2',381,473,20,18,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL31();
  return;
}
 );
Page_6.add(c4_2);
var Check2 = CreText('Check2',456,82,87,30,"√ Check",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00008b','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson31();
  return;
}
 );
Page_6.add(Check2);
var m_diem = CreText('m_diem',152,252,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_6.add(m_diem);
var title = CreText('title',152,225,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(title);
var bt_start = CreText('bt_start',250,335,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson31();
  return;
}
 );
Page_6.add(bt_start);
var Text_2 = CreText('Text_2',61,513,56,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_6.add(Text_2);
var Text_13 = CreText('Text_13',492,511,52,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_6.add(Text_13);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Page_6.add(msg1);
var title_0 = CreText('title_0',0,1,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(title_0);
stage.add(Page_6);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page_7_Backrounnd = CreText('Page_7_Backrounnd',0,0,600,600,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_7.add(Page_7_Backrounnd);
var title_1 = CreText('title_1',1,1,602,58,"FESTIVALS",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_7.add(title_1);
var title_4 = CreText('title_4',34,106,486,24,"1. Look at the pictures. Listen and say your answers.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_4);
var Image_1 = CreText('Image_1',62,137,278,203,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE20.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_1);
var Text_1 = CreText('Text_1',44,354,486,25,"2. Listen again  and write your answers.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_1);
var Text_4 = CreText('Text_4',66,372,29,138,"1.\r\n\r\n2.\r\n\r\n3.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_4);
var Text_5 = CreText('Text_5',50,478,486,25,"3. Talk about your favourite food and drink.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_5);
var Text_6 = CreText('Text_6',81,505,330,60,"- What's your favourite food?\r\n- What's your favourite drink?\r\n- What's your favourite juice?\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_6);
var ls32_0 = CreText('ls32_0',101,390,292,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_0);
var ls32_1 = CreText('ls32_1',101,419,292,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_1);
var ls32_2 = CreText('ls32_2',101,448,292,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_2);
var Text_17 = CreText('Text_17',20,563,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_7.add(Text_17);
var title_2 = CreText('title_2',0,68,96,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_2);
var title_3 = CreText('title_3',99,68,109,30,"2. Speaking",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_3);
var Check2 = CreText('Check2',510,69,87,30,"√ Check",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00008b','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson32();
  return;
}
 );
Page_7.add(Check2);
var m_diem = CreText('m_diem',143,282,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_7.add(m_diem);
var title = CreText('title',143,255,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title);
var bt_start = CreText('bt_start',241,365,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson32();
  return;
}
 );
Page_7.add(bt_start);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Page_7.add(msg1);
var title_0 = CreText('title_0',1,1,128,58,"Unit 15",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title_0);
stage.add(Page_7);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,450,150,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
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
