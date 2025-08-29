folder_Resource ='data/e5_u8_What_are_you_reading';
var size=16;
var a_w="chess|ghost|Halloween|scary|fox|crow|snow|dwarfs|white|main|fairy|character|moment|interesting|finish|magic|lamp|borrow|generous|clever|gentle|hard|work|brave|police";
var a_vn="cờ|ma|ma|đáng sợ|con cáo|con quạ|tuyết|người lùn|trắng|chủ yếu|nàng tiên|tính cách|chốc lát|hấp dẫn|hoàn thành|ảo thuật|cây đèn|vay|hào phóng|tài giỏi|dịu dàng|nặng nhọc|công việc|can đảm|cảnh sát";
var index=0;
var len=0;
var dem=0;
var index_letter=0;
var a_obj=["0","0"];
function setCharAt(str, index,chr) {
    if(index > length(str)-1) return str;
	return subString(str,0,index)+chr + subString(str,index+1);
}
function DocTieuDe(){
for(var i=0;i<6;i++){
	SetCursor("","page"+i,"pointer");
SetCursor("","sp_"+i,"pointer");
}
Speak(GetText("","unit")+". "+GetText("","title1")+". "+GetText("","title2"),"EN");
}
function ClickGoToPage()
{
	var p ="Page"+GetText("","");
	GoToPage(p); 
}
function InitPage1(){
for(var i=0;i<12;i++){
	SetCursor("","l_"+i,"pointer");
	SetCursor("","z_"+i,"pointer");
	}
	if(typeof a_w === "string"){
	a_w = a_w.split("|");
	a_vn = a_vn.split("|");
	size = a_w.lenght;
	}
    index=-1;
	NewGame();
	DocTieuDe();
}
function Tron(xxx)
{
	len = length(xxx);
	for(var j=0;j<10;j++){
	      var x= Random(len);
      	var y= Random(len);
		while (x==y)
		y= Random(len);
		var tamx= subString(xxx,x,1);
		var tamy= subString(xxx,y,1);
		xxx= setCharAt(xxx,x,tamy);
		xxx= setCharAt(xxx,y,tamx);
	}
	return xxx;
}
function CreateW(idx)
{	
	index=idx;
	SetText("","v",a_vn[index]);
	SetFontColor("","hits","#000000");
	SetText("","hits","");
	SetText("","w","");
	var text= toLowerCase(a_w[index]);
	text= Tron(text);
	len= length(text);
	for(var i=0;i<len;i++){
	    var char= subString(text,i,1);
	    SetText("","l_"+i,char);
	   
	    SetShowObject("","l_"+i,1);
	    MoveObjectTo("","l_"+i,-1,-1,50,5, Random(10));

	    SetText("","z_"+i,"");
	    SetShowObject("","z_"+i,1);
	    a_obj[i]="";
	    }
	for(i=len;i<12;i++){
		SetShowObject("","l_"+i,0);
		SetShowObject("","z_"+i,0);
	}
	dem=0;
	SetText("","hits",a_vn[index]);
            Speak( a_w[index],"EN");
	InvalidateObj("","");
}
function  NewGame()
{
	index++;
	if(index>=size)
		index=0;
	CreateW(index);
}
function  EndCallback(){
 Speak( a_vn[index],"VN");
 Delay("NewGame()",2000);
}
function EndGame()
{
		var ketqua="";
		for(var k=0;k<len;k++)
			ketqua=ketqua+GetText("","z_"+k)
		
		if(ketqua== toLowerCase(a_w[index]))
			{
			Speak(a_w[index],"EN","{ pitch: 1, rate: 0.8,onend: EndCallback}");
			SetFontColor("","hits","#009000");
			SetText("","hits","Correct");
			}
		else {
			SetFontColor("","hits","#ff0000");
			SetText("","hits","Incorrect");
			Delay("CreateW(index)",1000);
			PlaySound("ID_WRONG");
			}
			InvalidateObj("","");
}
function CheckWord()
{
	var leter= GetText("","");
	var tt = SetText("","z_"+index_letter,leter);
		if(dem==len){
			Delay("EndGame()",1000);
		 }
}
function ShowHelp(str_message)
{
   SpeakEN("","", str_message);
   SetText("","hits", str_message);
   InvalidateObj("","");
}
function HideHelp(str_message)
{
   SetText("","hits", str_message);
   InvalidateObj("","");
}
function ClickLeter(){
	dem=dem+1;
	for(var k=0;k<len;k++)
	{
		if(GetText("","z_"+k)==""){
			index_letter=k;
			break;
		}
	}
	MoveObjectTo("","", GetLeft("","z_"+k), GetTop("","z_"+k),50,5,0,"CheckWord()");
	a_obj[k]=GetName("");
}
function ReStore(){
	var ttc = GetText("","");
	if(ttc=="") return;
	var ni= StringtoNumber(GetName(""));
	MoveObjectTo("",a_obj[ni], -1, -1,50,5,0);
	a_obj[ni]="";
	SetText("","","");
	dem=dem-1;
}
// page 4
var datahoi="What are you reading?| What’s she reading?| What’s An Tiem like?| What’s Aladdin like?";
var m_cau, a_cau, a_word, count_sentens;
var ketqua = "dcba";
function InitPage2(){
    DocTieuDe();
    var data = datahoi;
    a_cau = data.split("|");
    count_sentens = a_cau.length;
    index=-1;
    SetShowObject("","help2",0);
    for(var i= 0; i< 8;i++)	
	SetShowObject("","ch_"+i,0);
    StartGame();
}
function CreateIndex()
{
	m_cau= a_cau[index];
	a_word = m_cau.split(" ");
	for(var i= 0; i< 12;i++){
		SetShowObject("","w_"+i,false);
		SetShowObject("","z_"+i,false);
	}
	for(var i= 0; i< 5;i++){//swap array word
		var x = Random(a_word.length);
		var y = Random(a_word.length);
		while(x==y) y = Random(a_word.length);
		var tam = a_word[x];
		a_word[x]=a_word[y];
		a_word[y]=tam;
	}
	for(var i= 0; i< a_word.length;i++)	{
		SetText("","w_"+i,a_word[i].trim("."));
		SetShowObject("","w_"+i,true);
 		MoveObjectTo("","w_"+i,-1,-1,50,5, Random(10));
		SetText("","z_"+i,"");
		SetShowObject("","z_"+i,true);
		}
	dem = 0;
	len = wordCountStr(a_cau[index]);
	SetText("","hits","");
       InvalidateObj("","");
	Speak(a_cau[index],"EN");
}
function StartGame(){
	index++;
	if(index>=a_cau.length){
		index=0;
		SetFontColor("","hits","#009000");
		SetText("","hits","Continue:");
		   for(var i= 0; i< 4;i++)	
		   SetMoveView("","tl_"+i,1);
		for(var i= 0; i< 12;i++){
		SetShowObject("","w_"+i,false);
		SetShowObject("","z_"+i,false);
		SetShowObject("","help2",1);
		}
		InvalidateObj("","");
	}
	else CreateIndex();
	}

function EndGamePage2()
{
		var ketqua="";
		for(var k=0;k<len;k++)
			ketqua=ketqua+GetText("","z_"+k)
		if(ketqua == a_cau[index].replaceAll(" ",''))
			{
			SetFontColor("","hits","#009000");
			SetText("","hits","Correct");
			SetText("",a_objName[index],Number2Cau(index)+a_cau[index]);
			SetShowObject("",a_objName[index],1);
			Speak(a_cau[index],"EN","{ pitch: 1, rate: 0.8,onend: StartGame}");
			}
		else {
			SetFontColor("","hits","#ff0000");
			SetText("","hits","Incorrect");
			Delay("CreateIndex()",1000);
			PlaySound("ID_WRONG");
			}
			InvalidateObj("","");
}
function CheckCau()
{
	var leter= GetText("","");
	var tt = SetText("","z_"+index_letter,leter);
		if(dem==len){
			Delay("EndGamePage2()",1000);
		 }
}
function ClickWord(){
	dem=dem+1;
	for(var k=0;k<len;k++)
	{
		if(GetText("","z_"+k)==""){
			index_letter=k;
			break;
		}
	}
	SpeakEN("","");
	MoveObjectTo("","", GetLeft("","z_"+k), GetTop("","z_"+k),50,5,0,"CheckCau()");
	a_obj[k]=GetName("");
}
CheckDialogues()
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
DownSwapLine(){
	xd= GetLeft("","");
	yd= GetTop("","");
}
UpSwapLine()
{
	var i= 0;
	while(i<count_sentens)
	{
		if(RectInRect("","ch_"+i,"")==1 && GetMoveView("","ch_"+i)==true)
			{
				var xu= GetLeft("","ch_"+i);
				var yu= GetTop("","ch_"+i);
				transitionTo("","",1000,xu,yu);
				transitionTo("","ch_"+i,1000,xd,yd);
				var tam= kql1_2[i];
				var cur_index= rightStr(GetName(""),1);
				kql1_2[i]=kql1_2[cur_index];
				kql1_2[cur_index]=tam;
				var curN= Name("");
				Name("","abcxyz123");
				Name("ch_"+i,curN);
				Name("abcxyz123","ch_"+i);
				if(CheckDialogues()==count_sentens){
					SetText("","title","Successfull");
				}
				break;
			}
		i++;
	}
	if(i>=count_sentens)transitionTo("","",1000,xd,yd);
}

//Page 5
var a7tl = ["0","0","0","0"];
var a7da = ["b","a","d","c"];
function Listen7_Init(){
 for(var i=0;i<4;i++)
	{
	SetCursor("","a"+i,"pointer");
	SetCursor("","b"+i,"pointer");
	SetCursor("","c"+i,"pointer");
	SetCursor("","d"+i,"pointer");

	SetFontColor("","a"+i,"#000000");
	SetFontColor("","b"+i,"#000000");
	SetFontColor("","c"+i,"#000000");
       SetFontColor("","d"+i,"#000000");

	SetText("","a"+i,"");
	SetText("","b"+i,"");
	SetText("","c"+i,"");
	SetText("","d"+i,"");

	}
 SetText("","hits","");

}
function Listen7_Click(){
	var nameobj= GetName("");
       var cau= rightStr(nameobj,1);
  	var chu= leftStr(nameobj,1);
	SetText("","b"+cau,"");
	SetText("","a"+cau,"");
	SetText("","c"+cau,"");
	SetText("","d"+cau,"");
	SetText("","","●");
       a7tl[cau]=chu;
	InvalidateObj("","");
}
function Listen7_Check(){
	var diem=0;
	for(var i=0;i<4;i++){
		if(a7da[i] == a7tl[i])
		{
		SetFontColor("",a7da[i]+i,"#008000");
		diem++;
		}
              else {
			SetFontColor("",a7tl[i]+i,"#ff0000");
		     }
	}
	if(diem==4){
		SetText("","hits","Verry good!");
		SetFontColor("","hits","#008000");
		Speak("Verry good!","UK English Male");
		}
	else{
		 SetText("","hits","Incorrect");
		 SetFontColor("","hits","#ff0000");
               PlaySound("ID_WRONG");
		 Speak("incorrect sentence","UK English Male");
	}
       SetShowObject("","hits",1);
       InvalidateObj("","");
}
//page 8
	for(var i=0;i<24;i++)
 	{
	if(a8da[i] == GetText("","t8_"+i))
	{
		SetFontColor("","t8_"+i,"#008000");
		diem++;
	}
	else SetFontColor("","t8_"+i,"#ff0000");
 	}

	if(diem==28){
		SetFontColor("","hits","#008000");
		SetText("","hits","Verry good!");
		Speak("Verry good!","UK English Male");
		}
	else{
		 SetText("","hits","'x' incorrect sentence");
		 SetFontColor("","hits","#ff0000");
               PlaySound("ID_WRONG");
		 Speak("incorrect sentence","UK English Male");
	}

	SetShowObject("","hits",1);
       InvalidateObj("","");
}
var arrayOfLines;
var insexSpeak=0;
function DocNamNu()
{
  var lineString=GetText("","")
  arrayOfLines = lineString.match(/[^\r\n]+/g);
  insexSpeak=0;
  Speak(arrayOfLines[insexSpeak],"UK English Male","{pitch: 1, rate: 0.8,onend: EndCallbackSpeak}");
  return;
}
function EndCallbackSpeak()
{
	insexSpeak++;
	if(insexSpeak>=arrayOfLines.length)
		return;
	if(insexSpeak%2==0)
	     Speak(arrayOfLines[insexSpeak],"UK English Male","{pitch: 1, rate: 0.8,onend: EndCallbackSpeak}");
	else Speak(arrayOfLines[insexSpeak],"EN","{pitch: 1, rate: 0.8,onend: EndCallbackSpeak}");

}
var a4tl = ["0","0"];
var a4da = ["August","Saturday and Sunday","four","Maths, Vietnamese, Music and English","once a week","four times a week"];
function InitPage4(){
 for(var i=0;i<6;i++){
	SetCursor("","s_input"+i,"text");
	a4tl[i]="";
	AllowEditText("","s_input"+i,1);
	SetFontColor("","s_input"+i,"#0066FF");
	SetText("","s_input"+i,"");

}
	SetShowObject("","hits",0);
	SetText("","hits","");
	InvalidateObj("","");
	DocTieuDe();
}

function CheckP4(){
	var diem=0;
	for(var i=0;i<6;i++){
		SetText("","kq"+i,"")
		if(toLowerCase(GetText("","s_input"+i))==toLowerCase(a4da[i]))
		{
		SetFontColor("","s_input"+i,"#008000");
		diem++;
		}
              else {
			SetText("","s_input"+i,GetText("","s_input"+i)+"=>"+a4da[i]);
			SetFontColor("","s_input"+i,"#ff0000");
		     }
	}
	if(diem==6){
		SetText("","hits","Verry good!");
		SetFontColor("","hits","#008000");
		Speak("Verry good!","UK English Male");
		}
	else{
		 SetText("","hits","Incorrect");
		 SetFontColor("","hits","#ff0000");
              PlaySound("ID_WRONG");
		 Speak("incorrect sentence","UK English Male");
	}
       SetShowObject("","hits",1);
       InvalidateObj("","");
}
// Them bai 8
//Page 3
var ketqua8 = "o|x|o|o|o|x|o|o|o|x|x|o|x|o|x|x|o|x|x|x|o|x|x|o";
function InitPage8()
{
a8da = ketqua8.split("|");
for(var i=0;i<24;i++)
{
	SetText("","t8_"+i,"");
	SetCursor("","t8_"+i,"pointer");
	if(a8da[i] == 'x')
		a8da[i] = "";
}
SetShowObject("","hits",0);
SetText("","hits","");
}
function Check8(){
	if(GetText("","")=="")
		SetText("","","o");
	else SetText("","","");
	InvalidateObj("","");
}
function Page1()
{
DocTieuDe();
  return;
}

function Page2()
{
InitPage1();
  return;
}

function Page3()
{
DocTieuDe();
  return;
}

function Page4()
{
  for(var i=0;i<12;i++){
	SetCursor("","w_"+i,"pointer");
	SetCursor("","z_"+i,"pointer");
	}
InitPage2();
  return;
}

function Page5()
{
 InitPage3();
InitPage8();
  return;
}

function Page6()
{
InitPage4();
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
 width: 800,
 height: 600 
 });

 var Page1 = new Kinetic.Layer({name: 'Page1',callback:'Page1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page1.add(Page1_Backrounnd);
var title1 = CreText('title1',-1,0,801,64,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 173, 91, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(title1);
var unit = CreText('unit',-1,1,142,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(unit);
var title2 = CreText('title2',16,65,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title2);
var page0 = CreText('page0',558,65,28,23,"1",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(page0);
var page1 = CreText('page1',595,65,28,23,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page1);
var page2 = CreText('page2',632,65,28,23,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page2);
var page3 = CreText('page3',670,65,28,23,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page3);
var Text_4 = CreText('Text_4',16,96,478,336,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_4);
var sp_0 = CreText('sp_0',749,11,42,39,"A\r\nHi, Peter. Let’s play chess.\r\nI can’t. I’m reading.\r\nB\r\nWhat are you reading?\r\nI’m reading a story about Halloween.\r\nC\r\nIs it a ghost story?\r\nYes. Very scary.\r\nD\r\nIs it a ghost?\r\nOh, no!",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page1.add(sp_0);
var Text_12 = CreText('Text_12',501,92,182,28,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_12);
var page4 = CreText('page4',709,65,28,23,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page4);
var page5 = CreText('page5',745,65,28,23,"6",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page5);
var Text_7 = CreText('Text_7',544,130,200,115,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_7);
var Text_9 = CreText('Text_9',709,153,98,20,"I’m reading ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu();
  return;
}
 );
Page1.add(Text_9);
var Text_6 = CreText('Text_6',525,115,265,22,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu();
  return;
}
 );
Page1.add(Text_6);
var thu_0 = CreText('thu_0',544,246,202,101,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(thu_0);
var thu_1 = CreText('thu_1',544,344,202,101,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(thu_1);
var sp_2 = CreText('sp_2',651,247,95,94,"What are you reading?\r\nI’m reading The Story of Mai An Tiem.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
  return;
}
 );
Page1.add(sp_2);
var sp_1 = CreText('sp_1',544,246,92,97,"What are you reading?\r\nI’m reading The Fox and the Crow.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_1);
var sp_3 = CreText('sp_3',545,347,90,97,"What are you reading?\r\nI’m reading Aladdin and the Magic Lamp",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_3);
var sp_$ = CreText('sp_$',652,347,90,97,"What are you reading?\r\nI’m reading Snow White and the Seven Dwarfs",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_$.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_$);
stage.add(Page1);

 var Page2 = new Kinetic.Layer({name: 'Page2',callback:'Page2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page2.add(Page2_Backrounnd);
var hits = CreText('hits',477,182,324,60,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(hits);
var title1 = CreText('title1',0,0,796,64,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page2.add(title1);
var help = CreText('help',669,10,47,47,"?",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',26,'Arial','Bold','center','middle',8,'0.00','33','75',2,'rgba(255, 104, 32, 255)','rgba(128, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp(a_vn[index]);
  return;
}
 );
help.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp(a_w[index]);
  return;
}
 );
Page2.add(help);
var tao = CreText('tao',735,10,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',8,'0.00','33','75',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page2.add(tao);
var unit = CreText('unit',0,1,142,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(unit);
var title2 = CreText('title2',16,66,202,25,"3. Vocabulary",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(title2);
var Text_4 = CreText('Text_4',-2,417,174,21,"http://gamechocon.com",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(Text_4);
var l_11 = CreText('l_11',83,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_11);
var l_9 = CreText('l_9',139,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_9);
var l_7 = CreText('l_7',195,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_7);
var l_4 = CreText('l_4',251,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_4);
var l_3 = CreText('l_3',307,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_3);
var l_0 = CreText('l_0',363,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_0);
var l_1 = CreText('l_1',419,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_1);
var l_2 = CreText('l_2',475,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_2);
var l_5 = CreText('l_5',531,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_5);
var l_6 = CreText('l_6',587,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_6);
var l_8 = CreText('l_8',643,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_8);
var l_10 = CreText('l_10',699,296,46,46,"A",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(l_10);
var z_0 = CreText('z_0',114,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_0);
var z_1 = CreText('z_1',163,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_1);
var z_2 = CreText('z_2',212,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_2);
var z_3 = CreText('z_3',261,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_3);
var z_4 = CreText('z_4',310,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_4);
var z_5 = CreText('z_5',359,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_5);
var z_6 = CreText('z_6',408,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_6);
var z_7 = CreText('z_7',457,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_7);
var z_8 = CreText('z_8',506,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_8);
var z_9 = CreText('z_9',555,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_9);
var z_10 = CreText('z_10',604,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_10);
var z_11 = CreText('z_11',654,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
z_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Page2.add(z_11);
var page0 = CreText('page0',570,64,28,23,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page2.add(page0);
var page1 = CreText('page1',607,64,28,23,"2",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(page1);
var page2 = CreText('page2',644,64,28,23,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page2.add(page2);
var page3 = CreText('page3',682,64,28,23,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page2.add(page3);
var page4 = CreText('page4',721,64,28,23,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page2.add(page4);
var page5 = CreText('page5',757,64,28,23,"6",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page2.add(page5);
stage.add(Page2);

 var Page3 = new Kinetic.Layer({name: 'Page3',callback:'Page3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,600,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE14.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page3.add(Page3_Backrounnd);
var title1 = CreText('title1',1,-1,795,64,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page3.add(title1);
var unit = CreText('unit',1,0,142,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(unit);
var title2 = CreText('title2',15,64,306,35,"4. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(title2);
var sp_0 = CreText('sp_0',739,12,42,39,"A.\r\nWhat are you reading, Quan?\r\nAladdin and the Magic Lamp\r\nB.\r\nWho’s the main character?\r\nA boy ... Aladdin.\r\nC.\r\nWhat’s he like?\r\nI think he’s generous.\r\nD.\r\nMay I borrow the book?\r\nYes. You can have it when I ﬁnish it.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_0);
var Text_4 = CreText('Text_4',114,100,576,286,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_4);
var Text_12 = CreText('Text_12',21,408,306,24,"5. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_12);
var Text_7 = CreText('Text_7',84,444,666,128,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE13.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_7);
var page0 = CreText('page0',576,64,28,23,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page3.add(page0);
var page1 = CreText('page1',650,64,28,23,"3",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(page1);
var page2 = CreText('page2',613,64,28,23,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page3.add(page2);
var page3 = CreText('page3',687,64,28,23,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page3.add(page3);
var page4 = CreText('page4',724,64,28,23,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page3.add(page4);
var page5 = CreText('page5',763,64,28,23,"6",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page3.add(page5);
var Text_1 = CreText('Text_1',274,393,217,48,"Q: What’s ..................like?\r\nA: He’s/She’s ....................",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_1);
var sp_1 = CreText('sp_1',87,446,153,124,"What’s An Tiem like?\r\nHe’s hard-working",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_1);
var sp_2 = CreText('sp_2',269,445,145,127,"What’s Snow White like?\r\nShe's kind.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_2);
var sp_3 = CreText('sp_3',440,448,136,120,"What’s the Fox like?\r\nHe’s clever",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_3);
var sp_4 = CreText('sp_4',616,443,117,125,"What’s Tam like?\r\nShe’s gentle.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_4);
var Text_2 = CreText('Text_2',235,518,45,47,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE16.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_2);
stage.add(Page3);

 var Page4 = new Kinetic.Layer({name: 'Page4',callback:'Page4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var help2 = CreText('help2',194,228,446,35,"drag and drop the answers to questions properly",'rgba(0, 128, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(help2);
var title2 = CreText('title2',17,65,474,35,"6 .Rearrange the sentences",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page4.add(title2);
var ch_3 = CreText('ch_3',192,374,346,25,"4",'rgba(255, 255, 255, 0.90)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;UpSwapLine();
  return;
}
 );
ch_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page4.add(ch_3);
var ch_2 = CreText('ch_2',192,343,346,25,"3",'rgba(255, 255, 255, 0.90)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;UpSwapLine();
  return;
}
 );
ch_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page4.add(ch_2);
var ch_1 = CreText('ch_1',192,312,346,25,"2",'rgba(255, 255, 255, 0.90)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;UpSwapLine();
  return;
}
 );
ch_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownSwapLine();
  return;
}
 );
Page4.add(ch_1);
var ch_0 = CreText('ch_0',192,281,346,25,"1",'rgba(255, 255, 255, 0.90)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;UpSwapLine();
  return;
}
 );
ch_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page4.add(ch_0);
var hits = CreText('hits',499,182,333,44,"Đúng",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(hits);
var title1 = CreText('title1',0,0,798,64,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(title1);
var w_0 = CreText('w_0',283,214,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_0);
var w_1 = CreText('w_1',408,214,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_1);
var w_2 = CreText('w_2',533,214,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_2);
var w_3 = CreText('w_3',158,214,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_3);
var w_4 = CreText('w_4',651,215,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_4);
var w_5 = CreText('w_5',33,214,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_5);
var w_6 = CreText('w_6',185,250,114,31,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_6);
var w_7 = CreText('w_7',302,250,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_7);
var w_8 = CreText('w_8',536,250,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_8);
var w_9 = CreText('w_9',68,250,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_9);
var unit = CreText('unit',0,1,146,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(unit);
var help = CreText('help',669,9,47,47,"?",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',26,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(128, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp("");
  return;
}
 );
help.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp(a_cau[index]);
  return;
}
 );
Page4.add(help);
var tao = CreText('tao',735,9,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
    for(var i=0;i<12;i++){
	SetCursor("","w_"+i,"pointer");
	SetCursor("","z_"+i,"pointer");
	}
  InitPage2();
  return;
}
 );
Page4.add(tao);
var w_10 = CreText('w_10',419,250,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_10);
var z_0 = CreText('z_0',1,113,114,33,"grandparents",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_0);
var z_1 = CreText('z_1',115,113,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_1);
var z_2 = CreText('z_2',229,113,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_2);
var z_3 = CreText('z_3',343,113,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_3);
var z_4 = CreText('z_4',457,113,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_4);
var z_5 = CreText('z_5',571,113,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_5);
var z_6 = CreText('z_6',688,113,112,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_6);
var z_7 = CreText('z_7',1,149,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_7);
var z_8 = CreText('z_8',116,149,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_8);
var z_9 = CreText('z_9',231,149,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_9);
var z_10 = CreText('z_10',346,149,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_10);
var w_11 = CreText('w_11',655,250,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_11);
var z_11 = CreText('z_11',462,149,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_11);
var page0 = CreText('page0',556,65,28,23,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page4.add(page0);
var page2 = CreText('page2',593,65,28,23,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page4.add(page2);
var page1 = CreText('page1',667,65,28,23,"4",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(page1);
var page3 = CreText('page3',630,65,28,23,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page4.add(page3);
var page4 = CreText('page4',704,65,28,23,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page4.add(page4);
var page5 = CreText('page5',743,65,28,23,"6",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page4.add(page5);
var ch_4 = CreText('ch_4',192,405,346,25,"a",'rgba(255, 255, 255, 0.90)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpSwapLine();
  return;
}
 );
ch_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page4.add(ch_4);
stage.add(Page4);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,800,500,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var title1 = CreText('title1',2,1,797,63,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(title1);
var hits = CreText('hits',541,240,227,39,"Đúng",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 128, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page5.add(hits);
var unit = CreText('unit',1,1,146,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(unit);
var title2 = CreText('title2',19,70,528,21,"7.  Listen and tick.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page5.add(title2);
var sp_0 = CreText('sp_0',50,143,22,22,"Hi, Nam. What do you do in your free time? \r\nI like reading stories.\r\nWhat are you reading at	the moment?\r\nI’m reading The Fox and the Crow.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page5.add(sp_0);
var sp_1 = CreText('sp_1',50,166,22,22,"Hi, Mai.	What are you doing this weekend?\r\nI’m going to stay at home and fnish my book.\r\nWhat are you reading?\r\nAladdin and the Magic Lamp.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_1);
var sp_2 = CreText('sp_2',50,189,22,22,"Hi, Linda. What	are you reading?\r\nI’m reading my favourite book again.\r\nWhat’s	the name of the book?\r\nSnow White and the Seven Dwarfs.\r\nWhy are you reading it again?\r\nBecause it’s so interesting!",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_2);
var page0 = CreText('page0',568,65,28,23,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page5.add(page0);
var page2 = CreText('page2',605,65,28,23,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page5.add(page2);
var page1 = CreText('page1',716,65,28,23,"5",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(page1);
var page3 = CreText('page3',642,64,28,23,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page5.add(page3);
var page4 = CreText('page4',679,65,28,23,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page5.add(page4);
var page5 = CreText('page5',755,65,28,23,"6",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page5.add(page5);
var sp_3 = CreText('sp_3',50,213,22,22,"Hi, Tom. What are you reading?\r\nThe Story of Mai An Tiem.\r\nDo you like it?\r\nYes, I think it’s my favourite story.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_3);
var Text_4 = CreText('Text_4',176,299,154,26,"   Long and Nam",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_4);
var Text_5 = CreText('Text_5',351,300,154,26,"    Quan and Minh",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_5);
var Text_6 = CreText('Text_6',523,300,154,26,"   Nam and Lan",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_6);
var Text_3 = CreText('Text_3',136,325,557,159,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_3);
var sp_4 = CreText('sp_4',180,298,25,26,"Hi, Nam.\r\nHello, Long. Are	you at school now?\r\nYes, it’s break time now.\r\nOh, good. How many lessons do	you have today?\r\nI have three: Maths, IT and Science.  How about you?\r\nI’m on holiday today.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_4);
var sp_5 = CreText('sp_5',357,300,25,26,"Hi, Minh.\r\nHi, Quan. It’s nice to talk to you again. Are you at	school?\r\nYes. It’s break time. And you?\r\nYes, it’s break time for me too.\r\nOh, really? How many lessons do you have today?\r\nI have four: Science, Music, Art and IT.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_5);
var sp_6 = CreText('sp_6',532,300,25,26,"Hello, Lan.\r\nHello, Nam. How	was	your trip home? \r\nIt was good, thanks. Do you have lessons today?\r\nYes, in the afternoon. \r\nHow many lessons do you have today?\r\nI have five: Vietnamese, English, Maths, IT and PE.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_6);
var t8_0 = CreText('t8_0',553,352,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_0);
var Text_11 = CreText('Text_11',20,270,664,28,"8.  Listen and tick.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page5.add(Text_11);
var t8_1 = CreText('t8_1',600,352,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_1);
var t8_2 = CreText('t8_2',646,352,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_2);
var t8_3 = CreText('t8_3',553,368,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_3);
var t8_4 = CreText('t8_4',600,368,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_4);
var t8_5 = CreText('t8_5',646,368,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_5);
var t8_6 = CreText('t8_6',553,384,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_6);
var t8_7 = CreText('t8_7',600,384,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_7);
var t8_8 = CreText('t8_8',646,384,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_8);
var t8_9 = CreText('t8_9',553,401,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_9);
var t8_10 = CreText('t8_10',600,401,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_10);
var t8_11 = CreText('t8_11',646,401,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_11);
var t8_12 = CreText('t8_12',553,418,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_12);
var t8_13 = CreText('t8_13',600,418,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_13);
var t8_14 = CreText('t8_14',646,418,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_14);
var t8_15 = CreText('t8_15',553,434,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_15);
var t8_16 = CreText('t8_16',600,434,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_16);
var t8_17 = CreText('t8_17',646,434,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_17);
var t8_18 = CreText('t8_18',553,451,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_18);
var t8_19 = CreText('t8_19',600,451,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_19);
var t8_20 = CreText('t8_20',646,451,45,16,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_20);
var t8_21 = CreText('t8_21',553,467,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_21);
var t8_22 = CreText('t8_22',600,467,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_22);
var t8_23 = CreText('t8_23',646,467,45,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check8();
  return;
}
 );
Page5.add(t8_23);
var help = CreText('help',686,10,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check();
Listen8_Check();
  return;
}
 );
Page5.add(help);
var tao = CreText('tao',745,9,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Init();
Listen8_Init();
  return;
}
 );
Page5.add(tao);
var c0 = CreText('c0',412,144,134,22,"o",'rgba(187, 255, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(c0);
var b0 = CreText('b0',277,144,134,22,"o",'rgba(187, 255, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b0);
var a0 = CreText('a0',142,144,134,22,"o",'rgba(187, 255, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a0);
var d0 = CreText('d0',548,144,134,22,"o",'rgba(187, 255, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(d0);
var c1 = CreText('c1',412,167,134,22,"o",'rgba(255, 187, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(c1);
var b1 = CreText('b1',277,167,134,22,"o",'rgba(255, 187, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b1);
var a1 = CreText('a1',142,167,134,22,"o",'rgba(255, 187, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a1);
var d1 = CreText('d1',548,167,134,22,"o",'rgba(255, 187, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(d1);
var c2 = CreText('c2',412,190,134,22,"o",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(c2);
var b2 = CreText('b2',277,190,134,22,"o",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b2);
var a2 = CreText('a2',142,190,134,22,"o",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a2);
var d2 = CreText('d2',548,190,134,22,"o",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(d2);
var c3 = CreText('c3',412,213,134,22,"o",'rgba(255, 187, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(c3);
var b3 = CreText('b3',277,213,134,22,"o",'rgba(255, 187, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b3);
var a3 = CreText('a3',142,213,134,22,"o",'rgba(255, 187, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a3);
var d3 = CreText('d3',548,213,134,22,"o",'rgba(255, 187, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(d3);
var Text_1 = CreText('Text_1',412,105,134,37,"The Story of\r\nMai An Tiem",'rgba(64, 224, 208, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(64, 224, 208, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(Text_1);
var Text_2 = CreText('Text_2',277,105,134,37,"The Fox and the Crow",'rgba(64, 224, 208, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(64, 224, 208, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(Text_2);
var Text_7 = CreText('Text_7',142,105,134,37,"Aladdin and the Magic Lamp",'rgba(64, 224, 208, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(64, 224, 208, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_7);
var Text_8 = CreText('Text_8',548,105,134,37,"Snow White and the Seven Dwarfs",'rgba(64, 224, 208, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(64, 224, 208, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(Text_8);
var Text_9 = CreText('Text_9',79,144,62,22,"Nam",'rgba(187, 255, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_9);
var Text_10 = CreText('Text_10',79,167,62,22,"Mai",'rgba(255, 187, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_10);
var Text_12 = CreText('Text_12',79,190,62,22,"Linda",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_12);
var Text_13 = CreText('Text_13',79,213,62,22,"Tom",'rgba(255, 187, 119, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_13);
var Text_14 = CreText('Text_14',79,105,62,37,"",'rgba(64, 224, 208, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(64, 224, 208, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_14);
stage.add(Page5);

 var Page6 = new Kinetic.Layer({name: 'Page6',callback:'Page6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page6.add(Page6_Backrounnd);
var title1 = CreText('title1',38,-2,761,64,"What are you reading?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page6.add(title1);
var help = CreText('help',678,8,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CheckP4();
  return;
}
 );
Page6.add(help);
var tao = CreText('tao',735,7,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  InitPage4();
  return;
}
 );
Page6.add(tao);
var title2 = CreText('title2',18,63,474,35,"9. Read and complete",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page6.add(title2);
var m_text = CreText('m_text',86,101,652,138,"My name’s Mai. I’m in Class 5B, Nguyen Du Primary School. My school year started in August. I go to school every day except Saturday and Sunday. I have four lessons a day. Today is Wednesday. I have Maths, Vietnamese, Music and English. I have Maths and Vietnamese every schoolday. I have Music once a week and English four times a week.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Comic Sans MS','Normal','left','top',3,'0.00','15','0',0,'rgba(0, 0, 0, 0)','rgba(255, 128, 64, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page6.add(m_text);
var unit = CreText('unit',1,-1,146,63,"Unit 8",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(unit);
var page0 = CreText('page0',568,62,28,23,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page6.add(page0);
var page2 = CreText('page2',605,62,28,23,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page6.add(page2);
var page1 = CreText('page1',757,62,28,23,"6",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(page1);
var page3 = CreText('page3',642,62,28,23,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page6.add(page3);
var page4 = CreText('page4',716,62,28,23,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page6.add(page4);
var page5 = CreText('page5',679,62,28,23,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page6.add(page5);
var Text_5 = CreText('Text_5',123,246,563,193,"1. Mai’s school started in\r\n\r\n2. She goes to school every day except\r\n\r\n3. She has  lessons a day\r\n\r\n4. She has  on Wednesday\r\n\r\n5. She has Music\r\n\r\n6. She has English",'rgba(121, 188, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(121, 188, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(Text_5);
var s_input5 = CreText('s_input5',265,409,404,23,"will swim in the sea ",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input5);
var s_input2 = CreText('s_input2',300,313,369,23,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input2);
var s_input0 = CreText('s_input0',292,249,377,23,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input0);
var s_input3 = CreText('s_input3',309,345,360,23,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input3);
var s_input1 = CreText('s_input1',384,281,285,23,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input1);
var s_input4 = CreText('s_input4',251,377,418,23,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
s_input4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page6.add(s_input4);
var sp_0 = CreText('sp_0',45,116,42,39,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","m_text")
Speak(tt,"EN");
  return;
}

 );
Page6.add(sp_0);
stage.add(Page6);
InitLacVietScript();
};
