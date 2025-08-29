folder_Resource ='data/e5_u9_What_did_you_see';
var size=16;
var a_w="zoo|animals|elephant|baby|fast|tiger|python|crocodile|peacock|gorillas|park|circus|trunk|spray|kangaroos|lions|panda|funny|noisy|quietly|slowly|loudly|quickly|beautifully|really|roar|bicycles|volleyball";
var a_vn="sở thú|động vật|con voi|bé nhỏ|nhanh|con hổ|con trăn|cá sấu|con công|con khỉ đột|công viên|xiếc|thân cây|xịt nước|con chuột túi|sư tử|gấu trúc|buồn cười|ồn ào|lặng lẽ|chậm rãi|lớn tiếng|nhanh chóng|đẹp|có thật không|kêu la|xe đạp|bóng chuyền";
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
for(var i=0;i<8;i++){
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
var arrayOfLines;
var insexSpeak=0;
function DocNamNu()
{
  var lineString = GetText("","")
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
var s_dialogue="";
var m_cau, a_cau, a_word, len_cau;
var keyPage4 = ["1","2","3","4","5"];
function InitPage2(){
    DocTieuDe();
    if(s_dialogue == "")
	s_dialogue = GetText("","dialogue");
    a_cau = s_dialogue.match(/[^\r\n]+/g);
    len_cau = a_cau.length;
    keyPage4 = ["1","2","3","4","5"];
	for(var j=0; j<10; j++)
	{
		var x = Random(len_cau);
		var y = Random(len_cau);
		while(x==y)
			y = Random(len_cau);
		var tam = a_cau[x];
		a_cau[x]=a_cau[y];
		a_cau[y]=tam;

		tam = keyPage4[x];
		keyPage4[x] = keyPage4[y];
		keyPage4[y] = tam;
	}
    index=-1;
    for(var i= 0; i< 5;i++){
	SetShowObject("","bt_order_"+i,0);
	SetFontColor("","bt_order_"+i,"#000000");
	SetText("","bt_order_"+i,"");
	}
    SetText("","dialogue","");
    SetShowObject("","bt_check",0);
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
	if(index >= a_cau.length){
		index=0;
		SetFontColor("","hits","#009000");
		SetText("","hits","Continue:");
		for(var i= 0; i< 12;i++)
		{
		SetShowObject("","w_"+i,false);
		SetShowObject("","z_"+i,false);
		}
		SetShowObject("","bt_check",1);
		Speak("Number the sentences in the correct order","EN");
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
			SetText("","dialogue",GetText("","dialogue")+a_cau[index]+"\n");
			SetShowObject("","bt_order_"+index,1);
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
	SetText("","z_"+index_letter,leter);
		if(dem >= len){
			Delay("EndGamePage2()",1000);
		 }
}
function ClickWord(){
	dem = dem+1;
	for(var k=0;k<len;k++)
	{
		if(GetText("","z_"+k)==""){
			index_letter=k;
			break;
		}
	}
	SpeakEN("","");
	MoveObjectTo("","", GetLeft("","z_"+k), GetTop("","z_"+k),50,5,0,"CheckCau()");
	a_obj[k] = GetName("");
}
function ClickButtonCheck4()
{
	var curentNumber = GetText("","");
	if(curentNumber == "" || curentNumber == 5)
	  curentNumber = 1;
	else curentNumber++;
	SetText("","",curentNumber);
	InvalidateObj("","");
}
function CheckOrderPage4()
{
	var diem = 0;
	for(var i = 0; i < len_cau; i++)
	{
		if(GetText("","bt_order_"+i) == keyPage4[i])
			{
				SetFontColor("","bt_order_"+i,"#008000");
				diem++;
			}
		else SetFontColor("","bt_order_"+i,"#ff0000");
	}
	if(diem == len_cau)
		{
		SetText("","hits","Verry good!");
		SetFontColor("","hits","#008000");
		Speak("Verry good!","UK English Male");
		}
	InvalidateObj("","");
}
//Page 5
var a7tl = ["0","0","0","0","0","0"];
var a7da = ["b","a","b","a","b","b"];
function Listen7_Init(){
 for(var i=0;i<7;i++)
	{
	SetCursor("","a"+i,"pointer");
	SetCursor("","b"+i,"pointer");
	
	SetFontColor("","a"+i,"#000000");
	SetFontColor("","b"+i,"#000000");
	SetText("","a"+i,"");
	SetText("","b"+i,"");
		}
 SetText("","hits","");

}
function Listen7_Click(){
	var nameobj= GetName("");
       var cau= rightStr(nameobj,1);
  	var chu= leftStr(nameobj,1);
	SetText("","b"+cau,"");
	SetText("","a"+cau,"");
	SetText("","","●");
       a7tl[cau]=chu;
	InvalidateObj("","");
}
function Listen7_Check(){
	var diem=0;
	for(var i=0;i<7;i++){
		if(a7da[i] == a7tl[i])
		{
		SetFontColor("",a7da[i]+i,"#008000");
		diem++;
		}
              else {
			SetFontColor("",a7tl[i]+i,"#ff0000");
		     }
	}
	if(diem==7){
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
//page 6
var a6da = ["0_1","1_3","2_0","3_2"];
function InitPage6(){
for(var i=0;i<5;i++)
	{
	SetCursor("","begin_"+i,"move");
	SetMoveView("","begin_"+i,true);
	}
 SetText("","hits","");
 InvalidateObj("","");
}
function ClickUpPage6(){
	var ne = 0;
	var dung_sai = false;
	while(ne<4)
	{
		if(IntersectRect("","","end_"+ne))
		{
			var nameobj= GetName("");
       		var s = rightStr(nameobj,1);
			for(var k= 0; k< 4 ;k++)
			  if(a6da[k] == s+"_"+ne)
				{
				   SetText("","end_"+ne,GetText("",""));
				   MoveObjectTo("","",-1,-1);
				   SetShowObject("","",0);
				   dung_sai = true;
				   break;
				}
			break;
		}
	}
	if(!dung_sai)
	{
		transitionTo("","",1000,-1,-1);
	}
	InvalidateObj("","");
}
function CheckPage6(){
	var diem=0;
	for(var i=0;i<5;i++){
		if(a6da[i] == a6tl[i])
		{
		SetFontColor("",a6da[i]+i,"#008000");
		diem++;
		}
              else {
			SetFontColor("",a6tl[i]+i,"#ff0000");
		     }
	}
	if(diem==5){
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
Listen7_Init();
DocTieuDe();
  return;
}

function Page6()
{
InitPage6();
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
 width: 800,
 height: 550 
 });

 var Page1 = new Kinetic.Layer({name: 'Page1',callback:'Page1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,470,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE26.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page1.add(Page1_Backrounnd);
var thu_0 = CreText('thu_0',512,251,265,199,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(thu_0);
var sp_$ = CreText('sp_$',660,352,112,97,"What did you see at the zoo?\r\nI saw gorillas.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_$.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_$);
var sp_2 = CreText('sp_2',672,256,100,94,"What did you see at the zoo?\r\nI saw crocodiles.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
  return;
}
 );
Page1.add(sp_2);
var title1 = CreText('title1',-1,0,801,64,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 0, 0, 255)','rgba(0, 128, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(title1);
var unit = CreText('unit',1,0,93,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',9,'0.00','33','75',1,'rgba(0, 128, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(unit);
var title2 = CreText('title2',16,70,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title2);
var page0 = CreText('page0',558,65,28,23,"1",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(page0);
var page1 = CreText('page1',595,65,28,23,"2",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page1);
var page2 = CreText('page2',632,65,28,23,"3",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page2);
var page3 = CreText('page3',670,65,28,23,"4",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page3);
var Text_4 = CreText('Text_4',19,121,478,336,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_4);
var sp_0 = CreText('sp_0',749,11,42,39,"A\r\nI didn’t see you yesterday. Where did you go?\r\nI went to the zoo.\r\nB\r\nWhat did you see at the zoo?\r\nI saw a baby elephant and some other animals.\r\nC\r\nDid you see any monkeys?\r\nYes, I did. They were really noisy!\r\nD\r\nDid you see any tigers?\r\nYes. They were really fast!",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page1.add(sp_0);
var Text_12 = CreText('Text_12',558,95,182,28,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_12);
var page4 = CreText('page4',709,65,28,23,"5",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page4);
var page5 = CreText('page5',745,65,28,23,"6",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(255, 104, 32, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
page5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickGoToPage();
  return;
}
 );
Page1.add(page5);
var Text_7 = CreText('Text_7',578,133,135,115,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_7);
var Text_9 = CreText('Text_9',633,122,154,32,"I saw ___",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu();
  return;
}
 );
Page1.add(Text_9);
var Text_6 = CreText('Text_6',506,134,74,81,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu();
  return;
}
 );
Page1.add(Text_6);
var sp_1 = CreText('sp_1',516,255,113,97,"What did you see at the zoo?\r\nI saw pythons.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_1);
var sp_3 = CreText('sp_3',535,353,90,83,"What did you see at the zoo?\r\nI saw peacocks.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page1.add(sp_3);
var Text_2 = CreText('Text_2',627,324,45,47,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE16.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_2);
stage.add(Page1);

 var Page2 = new Kinetic.Layer({name: 'Page2',callback:'Page2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE26.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page2.add(Page2_Backrounnd);
var hits = CreText('hits',477,182,324,60,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page2.add(hits);
var title1 = CreText('title1',0,0,796,64,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page2.add(title1);
var help = CreText('help',669,10,47,47,"?",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',26,'Arial','Bold','center','middle',2,'0.00','33','75',2,'rgba(255, 104, 32, 255)','rgba(128, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tao = CreText('tao',735,10,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','33','75',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page2.add(tao);
var unit = CreText('unit',0,1,142,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var l_1 = CreText('l_1',419,296,46,46,"I went to the zoo last weekend. \r\nWhat did you do there?\r\nI took photos of the gorillas for my Science project.\r\nWhat were the gorillas like?\r\nThey moved really quickly.",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE26.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page3.add(Page3_Backrounnd);
var Text_2 = CreText('Text_2',758,122,45,47,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE16.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_2);
var title1 = CreText('title1',1,-1,795,64,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 0, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page3.add(title1);
var unit = CreText('unit',1,0,142,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(unit);
var title2 = CreText('title2',15,64,306,35,"4. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(title2);
var sp_0 = CreText('sp_0',739,12,42,39,"A.\r\nDid you go to the zoo last week, Phong?\r\nYes, I did.\r\nWhat was it like?\r\nIt was great.\r\nB.\r\nWhat did the lions do when you were there?\r\nThey roared loudly.\r\nC.\r\nI saw a python too. It moved really quietly.\r\nD.\r\nAnd I saw two pandas.They were really cute and did things slowly.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_0);
var Text_4 = CreText('Text_4',10,106,500,336,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE15.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_4);
var Text_12 = CreText('Text_12',515,89,203,24,"5. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_12);
var Text_7 = CreText('Text_7',512,175,289,267,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE18.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_1 = CreText('sp_1',513,176,148,124,"What did the tigers do when you were there?\r\nThey roar loudly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_1);
var sp_2 = CreText('sp_2',666,174,145,127,"What did the peacocks do when you were there?\r\nThey move beautifully",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_2);
var Text_1 = CreText('Text_1',515,118,276,55,"What did the ... do when you were there?\r\nThey ...",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_1);
var sp_3 = CreText('sp_3',513,321,136,120,"What did the pythons do when you were there?\r\nThey move quietly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_3);
var sp_4 = CreText('sp_4',673,314,117,125,"What did the pandas do when you were there?\r\nThey eat slowly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page3.add(sp_4);
stage.add(Page3);

 var Page4 = new Kinetic.Layer({name: 'Page4',callback:'Page4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE26.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var help2 = CreText('help2',203,248,394,31,"Number the sentences in the correct order",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(help2);
var title2 = CreText('title2',17,65,474,35,"6 .Rearrange the sentences",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page4.add(title2);
var dialogue = CreText('dialogue',220,289,428,151,"I went to the zoo last weekend. \r\nWhat did you do there?\r\nI took photos of the gorillas for my Science project.\r\nWhat were the gorillas like?\r\nThey moved really quickly.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',3,'0.00','0','2',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,2.20);
dialogue.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page4.add(dialogue);
var hits = CreText('hits',499,165,301,78,"Đúng",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(hits);
var title1 = CreText('title1',0,0,798,64,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(title1);
var w_0 = CreText('w_0',286,181,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_0);
var w_1 = CreText('w_1',411,181,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_1);
var w_2 = CreText('w_2',536,181,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_2);
var w_3 = CreText('w_3',161,181,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_3);
var w_4 = CreText('w_4',654,182,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_4);
var w_5 = CreText('w_5',36,181,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_5);
var w_6 = CreText('w_6',188,217,114,31,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_6);
var w_7 = CreText('w_7',305,217,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_7);
var w_8 = CreText('w_8',539,217,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_8);
var w_9 = CreText('w_9',71,217,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_9);
var unit = CreText('unit',0,1,146,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var w_10 = CreText('w_10',422,217,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_10);
var z_0 = CreText('z_0',1,106,114,33,"grandparents",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_0);
var z_1 = CreText('z_1',115,106,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_1);
var z_2 = CreText('z_2',229,106,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_2);
var z_3 = CreText('z_3',343,106,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_3);
var z_4 = CreText('z_4',457,106,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_4);
var z_5 = CreText('z_5',571,106,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_5);
var z_6 = CreText('z_6',684,106,112,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_6);
var z_7 = CreText('z_7',3,139,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_7);
var z_8 = CreText('z_8',117,139,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_8);
var z_9 = CreText('z_9',231,139,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_9);
var z_10 = CreText('z_10',345,139,114,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page4.add(z_10);
var w_11 = CreText('w_11',658,217,114,33,"Hello",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page4.add(w_11);
var z_11 = CreText('z_11',458,139,122,33,"Hello",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var bt_order_0 = CreText('bt_order_0',187,289,29,25,"1",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_order_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4()
  return;
}
 );
Page4.add(bt_order_0);
var bt_order_1 = CreText('bt_order_1',187,317,29,25,"2",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_order_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4()
  return;
}
 );
Page4.add(bt_order_1);
var bt_order_2 = CreText('bt_order_2',187,345,29,25,"3",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_order_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4()
  return;
}
 );
Page4.add(bt_order_2);
var bt_order_3 = CreText('bt_order_3',187,373,29,25,"4",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_order_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4()
  return;
}
 );
Page4.add(bt_order_3);
var bt_order_4 = CreText('bt_order_4',187,402,29,25,"5",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','2',1,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_order_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4()
  return;
}
 );
Page4.add(bt_order_4);
var bt_check = CreText('bt_check',603,235,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 CheckOrderPage4();
  return;
}
 );
Page4.add(bt_check);
stage.add(Page4);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,800,550,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE26.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var Text_1 = CreText('Text_1',442,94,240,203,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE23.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_1);
var title1 = CreText('title1',2,1,797,63,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(title1);
var hits = CreText('hits',686,97,102,198,"Đúng",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 128, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page5.add(hits);
var unit = CreText('unit',1,1,146,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(unit);
var title2 = CreText('title2',19,70,528,21,"7.  Listen and tick.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page5.add(title2);
var sp_0 = CreText('sp_0',69,120,37,36,"Did you	go to the circus  yesterday morning?\r\nNo, I didn’t. I went to the	zoo. \r\nWhat did you see at the zoo? \r\nI saw some gorillas. \r\nGorillas	are very	intelligent.\r\nAre they? They’re also very funny.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu();
}
 );
Page5.add(sp_0);
var sp_1 = CreText('sp_1',69,186,37,36,"I didn’t see you on Sunday.  Where were you?\r\nI was at	the park. I went skateboarding.\r\nWhat else did you do at	the park?\r\nI saw a lot of peacocks.\r\nDo you like peacocks?\r\nYes, I do.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_1);
var sp_2 = CreText('sp_2',69,249,37,36,"Do you want to go to the circus?\r\nNo, I don’t. I went there last Saturday.\r\nGreat! What did	you see?\r\nI saw some elephants. They played football.\r\nReally?\r\nYes! They played really well. And they were very funny.\r\nI like elephants.I think I’ll	go to the circus tomorrow.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
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
var sp_3 = CreText('sp_3',74,328,37,36,"I went to the zoo last weekend. \r\nWhat did you do	 there?\r\nI took photos of	the gorillas for my Science project.\r\nWhat were the gorillas like? \r\nThey moved really quickly",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_3);
var Text_3 = CreText('Text_3',169,367,175,29,"They moved quickly.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_3);
var sp_4 = CreText('sp_4',74,403,37,36,"Did you	visit the	zoo last	Wednesday?\r\nYes, I did. I saw some cute pandas.\r\nWhat did they do? \r\nNothing	really. They moved around quietly and ate their food slowly.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_4);
var sp_5 = CreText('sp_5',77,473,37,36,"Where were you	yesterday? \r\nI was at	the park.\r\nWhat did you see there?\r\nI saw a	lot of peacocks.\r\nI love them. \r\nMe too. They moved so	beautifully.\r\n",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_5);
var Text_11 = CreText('Text_11',38,293,416,28,"8.  Listen and write one word in each blank.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_11);
var help = CreText('help',686,10,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check();
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
var b0 = CreText('b0',577,146,20,22,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b0);
var a0 = CreText('a0',454,146,20,22,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(187, 255, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a0);
var b1 = CreText('b1',578,212,17,20,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b1);
var a1 = CreText('a1',454,212,20,19,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 187, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a1);
var b2 = CreText('b2',578,274,17,22,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b2);
var a2 = CreText('a2',455,274,20,22,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a2);
var b3 = CreText('b3',416,367,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b3);
var a3 = CreText('a3',129,367,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a3);
var Text_9 = CreText('Text_9',107,118,335,36,"1. What did Tom see at the zoo?",'rgba(211, 211, 211, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(211, 211, 211, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_9);
var Text_10 = CreText('Text_10',107,184,335,36,"2. What did Mai see at the park?",'rgba(214, 214, 214, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(214, 214, 214, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_10);
var Text_12 = CreText('Text_12',108,248,335,36,"3. What did Tony see at the circus?",'rgba(214, 214, 214, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(214, 214, 214, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_12);
var Text_13 = CreText('Text_13',116,328,541,36,"1. What did the gorillas do when Nam was at the zoo?",'rgba(255, 255, 255, 0.27)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(Text_13);
var Text_4 = CreText('Text_4',450,367,228,29,"They moved slowly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_4);
var Text_5 = CreText('Text_5',117,403,540,36,"2. What did the pandas do when Quan was at the zoo?",'rgba(255, 255, 255, 0.27)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_5);
var Text_6 = CreText('Text_6',140,616,304,29,"4. What’s An Tiem like? He’s clever and",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_6);
var sp_7 = CreText('sp_7',100,615,25,26,"What are you reading, Tony?\r\nThe Story of Mai An Tiem. I like it very much.\r\nWhy do you like	it?\r\nBecause the main character, An Tiem, is	a clever and generous man.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu();
  return;
}
 );
Page5.add(sp_7);
var t8_3 = CreText('t8_3',440,615,155,29,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page5.add(t8_3);
var Text_2 = CreText('Text_2',119,473,540,36,"3. What did the peacocks do when Phong was at the park?",'rgba(255, 255, 255, 0.27)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_2);
var a4 = CreText('a4',132,441,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a4);
var b4 = CreText('b4',470,441,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b4);
var a5 = CreText('a5',133,511,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}
 );
Page5.add(a5);
var b5 = CreText('b5',420,511,29,30,"o",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 187, 119, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Click();
  return;
}

 );
Page5.add(b5);
var Text_16 = CreText('Text_16',167,442,303,29,"They moved slowly and they ate quickly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_16);
var Text_17 = CreText('Text_17',499,442,338,29,"They moved quietly and they ate slowly.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_17);
var Text_18 = CreText('Text_18',169,511,175,29,"They ate slowly",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_18);
var Text_19 = CreText('Text_19',450,511,228,29,"They moved beautifully",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_19);
stage.add(Page5);

 var Page6 = new Kinetic.Layer({name: 'Page6',callback:'Page6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,800,500,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE27.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page6.add(Page6_Backrounnd);
var title1 = CreText('title1',0,-2,799,64,"What did you see at the zoo?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
  CheckPage6();
  return;
}
 );
Page6.add(help);
var tao = CreText('tao',735,7,47,47,"new",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 104, 32, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  InitPage6();
  return;
}
 );
Page6.add(tao);
var title2 = CreText('title2',14,64,474,35,"9. Read and tick Yes (Y) or No (N)",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
Page6.add(title2);
var m_text = CreText('m_text',43,98,732,222,"Dear Tuan, \r\nI went to the zoo with my classmates last Friday. First, we saw the monkeys. They were fun to watch because they jumped up and down quickly. Then we went to see the elephants. They moved slowly and quietly. We also saw the tigers. I liked them very much because they were fast. Next, we saw the peacocks. My classmates liked them because they moved beautifully. In the end, we saw the pandas. They were very cute and did everything slowly. I had a really good time at the zoo. See you soon.\r\nBest wishes, \r\nPhong",'rgba(255, 255, 255, 0.47)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Comic Sans MS','Normal','left','top',0,'0.00','11','11',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page6.add(m_text);
var unit = CreText('unit',1,-1,146,63,"Unit 9",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_0 = CreText('sp_0',614,12,42,39,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","m_text")
Speak(tt,"EN");
  return;
}

 );
Page6.add(sp_0);
var begin_0 = CreText('begin_0',103,330,140,33,"1. First,",'rgba(255, 211, 168, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(255, 211, 168, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickUpPage6();
  return;
}
 );
Page6.add(begin_0);
var begin_2 = CreText('begin_2',103,409,140,33,"3. Next,",'rgba(255, 213, 170, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(255, 213, 170, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickUpPage6();
  return;
}
 );
Page6.add(begin_2);
var begin_1 = CreText('begin_1',103,370,140,33,"2. Then",'rgba(255, 213, 170, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(255, 213, 170, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickUpPage6();
  return;
}
 );
Page6.add(begin_1);
var begin_3 = CreText('begin_3',103,450,140,33,"4. In the end,",'rgba(255, 213, 170, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(255, 213, 170, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickUpPage6();
  return;
}
 );
Page6.add(begin_3);
var end_0 = CreText('end_0',324,331,401,33,"they saw the peacocks.",'rgba(214, 224, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(214, 224, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(end_0);
var end_2 = CreText('end_2',324,410,401,33,"they saw the pandas.",'rgba(214, 224, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(214, 224, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(end_2);
var end_1 = CreText('end_1',324,371,401,33,"they saw the monkeys.",'rgba(214, 224, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(214, 224, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(end_1);
var end_3 = CreText('end_3',324,449,401,33,"they saw the elephants and the tigers.",'rgba(214, 224, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(214, 224, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(end_3);
stage.add(Page6);
InitLacVietScript();
};
