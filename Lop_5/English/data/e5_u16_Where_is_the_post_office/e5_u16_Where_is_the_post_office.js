folder_Resource ='data/e5_u16_Where_is_the_post_office';
var size=16;
var a_w="park|toilet|lake|museum|theatre|stadium|supermarket|cinema|pharmacy|post office|opposite|next to|go along|go straight ahead|between|on the corner|turn right|turn left|plane|coach|boat|taxi";
var a_vn="Công viên|Nhà vệ sinh|Hồ|Bảo tàng|Nhà hát|Sân vận động|Siêu thị|Phim|Dược|Bưu điện|Đối diện|Tiếp theo|Đi dọc|đi thẳng về phía trước|giữa|ở góc|rẽ phải|rẽ trái|máy bay|xe khách|thuyền|tắc xi";
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
var testSpeak=GetText("","unit")+".\r\n";
for(var i=0;i<11;i++){
	SetCursor("","sp_"+i,"pointer");
	var tam = GetText("","title"+i);
	if(tam != null)
       testSpeak=testSpeak + tam +".\r\n";
}

SetCursor("","nextPage","pointer");
SetCursor("","prevPage","pointer");
Speak(testSpeak.trim(),"EN");
}
var arrayOfLines;
var insexSpeak=0;
var helpString="";
function DocNamNu(lineString)
{
  helpString = lineString;
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
helpString = str_message;
   SetText("","hits", str_message);
   SetShowObject("","hits",1);
   SetFontColor("","hits","#000000");
   InvalidateObj("","");
}
function HideHelp(str_message)
{
SetShowObject("","hits",0);
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
var keyPage4 = ["1","2","3","4","5","6"];
function InitPage2(){
    DocTieuDe();
    if(s_dialogue == "")
	s_dialogue = GetText("","dialogue");
    a_cau = s_dialogue.match(/[^\r\n]+/g);
    len_cau = a_cau.length;
    keyPage4 = ["1","2","3","4","5","6"];
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
    for(var i= 0; i< len_cau;i++){
	SetShowObject("","bt_order_"+i,0);
	SetFontColor("","bt_order_"+i,"#000000");
	SetText("","bt_order_"+i,"");
	}
   for(var i=0;i<12;i++)
	{
	SetCursor("","w_"+i,"pointer");
	SetCursor("","z_"+i,"pointer");
	SetCursor("","bt_order_"+i,"pointer");
	}
    SetText("","dialogue","");
    SetShowObject("","bt_check",0);
    SetCursor("","bt_check","pointer");
    SetShowObject("","help2",0);
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
	for(var i= 0; i< len_cau;i++){//swap array word
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
		
		SetFontColor("","hits","#009000");
		SetText("","hits","Continue:");
		for(var i= 0; i< 12;i++)
		{
		SetShowObject("","w_"+i,false);
		SetShowObject("","z_"+i,false);
		}
		for(var j= 0; j< index ;j++)
		SetShowObject("","bt_order_"+j,1);
		index=0;
		SetShowObject("","help2",1);
		SetShowObject("","bt_check",1);
		InvalidateObj("","");
		Speak("Number the sentences in the correct order","EN");
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
/*--------------------------Listen And Number----------------------------------*/
var sizeListenNumber = 5;
var keyListenNumber = ["4","1","5","2","3"];
function ListenAndNumberInit()
{
	for(var i = 0; i < sizeListenNumber ; i++)
	{
		SetText("","num_"+i,"")
		SetFontColor("","num_"+i,"#0000FF");
		SetCursor("","num_"+i,"pointer");
	}
	InvalidateObj("","");
}
function ClickButtonCheck4(m_size)
{
	var curentNumber = GetText("","");
	if(curentNumber == "" || curentNumber == m_size)
	  curentNumber = 1;
	else curentNumber++;
	SetText("","",curentNumber);
	InvalidateObj("","");
}
function ListenAndNumberCheck()
{
	var diem = 0;
	for(var i = 0; i < sizeListenNumber ; i++)
	{
		if(GetText("","num_"+i) == keyListenNumber[i])
			{
				SetFontColor("","num_"+i,"#008000");
				diem++;
			}
		else SetFontColor("","num_"+i,"#ff0000");
	}
	if(diem == sizeListenNumber)
		{
		SetText("","hits","Verry good!");
		SetFontColor("","hits","#008000");
		Speak("Verry good!","UK English Male");
		}
	InvalidateObj("","");
}
/*----------------------Read and complete--------------------------------------*/
var keyReadandNumber = ["opposite","between","on the corner","opposite","next to"];
function ReadandNumber_Init()
{
for(var i=0;i<5;i++)
{
	SetText("","read5_"+i,"");
	SetCursor("","read5_"+i,"text");
	AllowEditText("","read5_"+i,1);
	SetFontColor("","read5_"+i,"#0000ff");
}
SetShowObject("","hits",0);
SetText("","hits","");
}

function ReadandNumber_Check(){
	var diem=0;
	for(var i=0;i<5;i++){
		if(toLowerCase(GetText("","read5_"+i))==toLowerCase(keyReadandNumber[i]))
		{
		SetFontColor("","read5_"+i,"#008000");
		diem++;
		}
		else SetFontColor("","read5_"+i,"#ff0000");
	}
	if(diem==3){
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
InvalidateObj("","");
}
/*------------------------------------------------------------*/
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
//Page 7
var ketqua7 = "boat|taxi|coach|plane|trip|zoo|foot|How|Have|welcome";
function Listen7_Init(m_size)
{
a8da = ketqua7.split("|");
for(var i=0;i<m_size;i++)
{
	SetText("","t8_"+i,"");
	SetCursor("","t8_"+i,"text");
	AllowEditText("","t8_"+i,1);
	SetFontColor("","t8_"+i,"#0000ff");
}
SetShowObject("","hits",0);
SetText("","hits","");
}
function Listen7_Check(m_size){
	var diem=0;
	for(var i=0;i<m_size;i++){
		if(toLowerCase(GetText("","t8_"+i))==toLowerCase(a8da[i]))
		{
		SetFontColor("","t8_"+i,"#008000");
		diem++;
		}
		else SetFontColor("","t8_"+i,"#ff0000");
	}
	if(diem==m_size){
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
InvalidateObj("","");
}

//Page 9
var a9tl = ["0","0","0","0"];
var a9da = ["b","a","c",""];
function Read9_Init(){
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
function Read9_Click(){
	var nameobj= GetName("");
       var cau= rightStr(nameobj,1);
  	var chu= leftStr(nameobj,1);
	SetText("","b"+cau,"");
	SetText("","a"+cau,"");
	SetText("","c"+cau,"");
	SetText("","d"+cau,"");
	SetText("","","●");
       a9tl[cau]=chu;
	InvalidateObj("","");
}
function Read9_Check(m_cau){
	var diem=0;
	for(var i=0;i<m_cau;i++){
		if(a9da[i] == a9tl[i])
		{
		SetFontColor("",a9da[i]+i,"#008000");
		diem++;
		}
              else {
			SetFontColor("",a9tl[i]+i,"#ff0000");
		     }
	}
	if(diem==m_cau){
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
//page True Fasle
var a6tl = ["0","0","","",""];
var a6da = ["T","T","F","T","T"];
function InitTrueFalse(){
for(var i=0;i<5;i++)
	{
	SetCursor("","T"+i,"pointer");
	SetCursor("","F"+i,"pointer");
	SetText("","T"+i,"");
	SetText("","F"+i,"");
	}
 SetText("","hits","");
InvalidateObj("","");
}
function ClickTrueFasle(){
	var nameobj= GetName("");
       var cau= rightStr(nameobj,1);
  	var chu= leftStr(nameobj,1);
	SetText("","T"+cau,"");
	SetText("","F"+cau,"");
	SetText("","",chu);
       a6tl[cau]=chu;
	InvalidateObj("","");
}
function CheckTrueFalse(){
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

function Page3()
{
DocTieuDe();
InitPage1();
  return;
}

function Page4()
{
Read9_Init();
a9da = ["c","d","a","b"];
ReadandNumber_Init();
DocTieuDe();
  return;
}

function Page5()
{
DocTieuDe();
  return;
}

function Page6()
{
InitPage2();
  return;
}

function Page7()
{
Read9_Init();
a9da = ["b","b","a"];
DocTieuDe();
  return;
}
function Page7_OnTimer()
{
  return;
}

function Page8()
{
Listen7_Init(10);
DocTieuDe();
  return;
}


function Page9()
{
DocTieuDe();
  return;
}

function Page10()
{
DocTieuDe();
  return;
}

function Page11()
{
ketqua7 = "bus stop|Pear Street|pharmacy|Tony’s house|She should take bus Number 12|She should get of at the fifth stop.|It’s Pear Street|A pharmacy is opposite his house|It’s green.";
Listen7_Init(9);
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
 height: 500 
 });

 var Page1 = new Kinetic.Layer({name: 'Page1',callback:'Page1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page1.add(Page1_Backrounnd);
var title1 = CreText('title1',0,0,797,48,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(title1);
var unit = CreText('unit',0,0,122,48,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(unit);
var title3 = CreText('title3',15,56,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title3);
var sp_1 = CreText('sp_1',753,9,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page1.add(sp_1);
var Text_4 = CreText('Text_4',20,86,491,358,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_4);
var sp_0 = CreText('sp_0',698,9,36,36,"a.\r\nExcuse me, where’s the park, please?\r\nGo straight ahead. It’s at the end of the street.\r\nThank you.\r\nB.\r\nExcuse me, where’s the toilet, please?\r\nIt’s over there, near the lake.\r\nThanks a lot.\r\nYou’re welcome.\r\nC.\r\nExcuse me, is the museum near here?\r\nNo, it isn’t. Turn left. It’s on the corner of the street, next to the theatre.\r\nThank you.\r\nD. \r\nExcuse me, where’s the post oﬃce?\r\nTurn right. It’s between the supermarket and the cinema.\r\nThanks a lot.\r\nYou’re welcome.\r\n",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page1.add(sp_0);
var title2 = CreText('title2',643,49,151,31,"LESSON 1",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title2);
var Text_1 = CreText('Text_1',519,237,266,207,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_1);
var Text_2 = CreText('Text_2',511,119,277,41,"Excuse me, where’s the ...",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_2);
var Image_1 = CreText('Image_1',537,153,203,83,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE10.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page1.add(Image_1);
var sp_2 = CreText('sp_2',540,241,101,85,"Excuse me, where’s the bus stop.\r\nIt's next to the stadium",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_2);
var sp_3 = CreText('sp_3',676,251,101,77,"Excuse me, where’s the pharmacy.\r\nIt's opposite the market",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu( GetText("",""));
  return;
}
 );
Page1.add(sp_3);
var sp_4 = CreText('sp_4',532,344,111,84,"Excuse me, where’s the theatre?\r\nIt's between the cinema and the supermarket.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_4);
var sp_5 = CreText('sp_5',662,343,111,85,"Excuse me, where’s the museum?\r\nIt's on the corner of the street",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_5);
var Text_3 = CreText('Text_3',632,203,58,30,"It’s",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_3);
var Text_5 = CreText('Text_5',515,89,306,27,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_5);
stage.add(Page1);

 var Page3 = new Kinetic.Layer({name: 'Page3',callback:'Page3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page3.add(Page3_Backrounnd);
var hits = CreText('hits',477,182,324,60,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(hits);
var title1 = CreText('title1',0,0,800,46,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page3.add(title1);
var sp_1 = CreText('sp_1',682,7,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 224, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ShowHelp(a_vn[index]);
  return;
}
 );
sp_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp(a_w[index] + ": " + a_vn[index]);
 Speak(a_w[index],"EN");
  return;
}
 );
Page3.add(sp_1);
var sp_0 = CreText('sp_0',645,7,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',11,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page3.add(sp_0);
var unit = CreText('unit',0,1,110,44,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(unit);
var title2 = CreText('title2',3,51,202,25,"3. Vocabulary",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(title2);
var Text_4 = CreText('Text_4',616,419,174,21,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(Text_4);
var l_11 = CreText('l_11',83,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_11);
var l_9 = CreText('l_9',139,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_9);
var l_7 = CreText('l_7',195,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_7);
var l_4 = CreText('l_4',251,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_4);
var l_3 = CreText('l_3',307,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_3);
var l_0 = CreText('l_0',363,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_0);
var l_1 = CreText('l_1',419,296,46,46,"a.\r\nHow can we get to the zoo, Nam?\r\nYou can take a bus.\r\nb.\r\nWhere’s the bus stop?\r\nGo out of this building. Turn right. It’s on the next corner.\r\nc.\r\nWhat bus goes to the zoo?\r\nYou can take bus number 22. It stops right at the zoo entrance.\r\nd.\r\nIt’s very kind of you, Nam. \r\nThanks a lot.\r\nYou’re welcome.",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_1);
var l_2 = CreText('l_2',475,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_2);
var l_5 = CreText('l_5',531,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_5);
var l_6 = CreText('l_6',587,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_6);
var l_8 = CreText('l_8',643,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_8);
var l_10 = CreText('l_10',699,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page3.add(l_10);
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
Page3.add(z_0);
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
Page3.add(z_1);
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
Page3.add(z_2);
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
Page3.add(z_3);
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
Page3.add(z_4);
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
Page3.add(z_5);
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
Page3.add(z_6);
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
Page3.add(z_7);
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
Page3.add(z_8);
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
Page3.add(z_9);
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
Page3.add(z_10);
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
Page3.add(z_11);
var nextPage = CreText('nextPage',757,7,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page3.add(nextPage);
var prevPage = CreText('prevPage',719,7,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page3.add(prevPage);
stage.add(Page3);

 var Page4 = new Kinetic.Layer({name: 'Page4',callback:'Page4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,500,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var Text_10 = CreText('Text_10',102,73,126,51,"",'rgba(255, 185, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 185, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_10);
var Text_9 = CreText('Text_9',228,124,496,124,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_9);
var title1 = CreText('title1',1,-1,797,41,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(title1);
var unit = CreText('unit',0,0,121,41,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(0, 128, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(unit);
var prevPage = CreText('prevPage',719,3,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page4.add(prevPage);
var nextPage = CreText('nextPage',762,3,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page4.add(nextPage);
var title2 = CreText('title2',-1,43,307,28,"4. Listen and tick",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(title2);
var tao = CreText('tao',677,3,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',11,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Read9_Init();
a9da = ["b","a","c",""];
ReadandNumber_Init();
DocTieuDe();
  return;
}
 );
Page4.add(tao);
var Text_2 = CreText('Text_2',4,251,680,28,"5. Look, read and complete. Use one of the words/phrases twice.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_2);
var Text_3 = CreText('Text_3',97,316,632,172,"1. The theatre is                            the stadium.\r\n2. The cinema is                            the theatre and the supermarket.\r\n3. The stadium is                           of the street.\r\n4. Bus stop 1 is                                   Bus stop 2.\r\n5. The post office is                             Bus stop 1.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.70);
Page4.add(Text_3);
var Text_4 = CreText('Text_4',532,323,194,159,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE14.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(127, 127, 127, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_4);
var read5_0 = CreText('read5_0',220,325,101,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
read5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(read5_0);
var read5_1 = CreText('read5_1',224,355,98,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
read5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(read5_1);
var read5_2 = CreText('read5_2',230,385,90,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
read5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(read5_2);
var b0 = CreText('b0',392,131,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b0);
var a0 = CreText('a0',261,131,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a0);
var b1 = CreText('b1',392,161,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b1);
var a1 = CreText('a1',261,161,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a1);
var b2 = CreText('b2',392,191,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b2);
var a2 = CreText('a2',261,191,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a2);
var c0 = CreText('c0',529,132,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(c0);
var c1 = CreText('c1',529,162,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(c1);
var c2 = CreText('c2',529,192,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(c2);
var sp_10 = CreText('sp_10',635,3,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',26,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp("");
  return;
}
 );
sp_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  ShowHelp(helpString);
  return;
}
 );
Page4.add(sp_10);
var sp_1 = CreText('sp_1',730,80,34,34,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Read9_Check(4);
  return;
}
 );
Page4.add(sp_1);
var b3 = CreText('b3',392,223,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b3);
var a3 = CreText('a3',261,223,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a3);
var c3 = CreText('c3',529,224,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(c3);
var d0 = CreText('d0',654,128,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(d0);
var d1 = CreText('d1',654,158,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(d1);
var d2 = CreText('d2',654,188,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(d2);
var d3 = CreText('d3',654,220,19,19,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(d3);
var Text_1 = CreText('Text_1',226,73,104,51,"Opposite the pharmacy",'rgba(255, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_1);
var Text_5 = CreText('Text_5',330,73,159,51,"Between the supermarket and the cinema",'rgba(255, 185, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 185, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_5);
var Text_6 = CreText('Text_6',489,73,108,51,"Next to the stadium",'rgba(255, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_6);
var Text_7 = CreText('Text_7',598,73,126,51,"Go along the street and turn left",'rgba(255, 185, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 185, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_7);
var Text_8 = CreText('Text_8',102,124,126,124,"The museum\r\n\r\nThe supermarket\r\n\r\nThe bus stop\r\n\r\nThe post office",'rgba(255, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_8);
var sp_8 = CreText('sp_8',145,82,38,35,"1.\r\nWhere’s the museum?\r\nI’ll take you there. \r\nIs it far? \r\nNo, not at all. It’s next to	 the stadium. We can walk.\r\n2.\r\nWhere’s the supermarket, Nam?	\r\nIs it far from here?\r\nNot very	far. Go along the street and turn left. \r\nOK. Let’s go there.\r\n3.\r\nI want to buy some presents.\r\nOK. Let’s go to the souvenir shops. \r\nAre they far from here? \r\nYes, they are. We’ll go by bus. \r\nWhere’s the bus stop? \r\nIt’s opposite the pharmacy. \r\n4.\r\nI’d like to send these postcards. Where’s the post ofce, Mai?\r\nGo straight ahead. Turn right at the end of the street. It’s between the supermarket and the cinema.\r\nThanks a lot, Mai.\r\nYou’re welcome.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page4.add(sp_8);
var Text_11 = CreText('Text_11',120,282,557,31,"between        on the corner        opposite        next to",'rgba(198, 255, 140, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',3,'0.00','10','0',0,'rgba(0, 0, 0, 0)','rgba(198, 255, 140, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_11);
var sp_2 = CreText('sp_2',640,281,35,35,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ReadandNumber_Check();
  return;
}
 );
Page4.add(sp_2);
var read5_3 = CreText('read5_3',227,415,113,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
read5_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(read5_3);
var read5_4 = CreText('read5_4',241,445,100,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
read5_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(read5_4);
var hits = CreText('hits',605,42,194,407,"",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',10,'Arial Narrow','Italic','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.70);
Page4.add(hits);
stage.add(Page4);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var Text_1 = CreText('Text_1',588,107,167,144,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE22.JPG',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_1);
var title1 = CreText('title1',1,-1,798,44,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(title1);
var unit = CreText('unit',1,0,142,43,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(unit);
var title3 = CreText('title3',18,47,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(title3);
var sp_0 = CreText('sp_0',674,2,37,35,"a.\r\nHow can we get to the zoo, Nam?\r\nYou can take a bus.\r\nb.\r\nWhere’s the bus stop?\r\nGo out of this building. Turn right. It’s on the next corner.\r\nc.\r\nWhat bus goes to the zoo?\r\nYou can take bus number 22. It stops right at the zoo entrance.\r\nd.\r\nIt’s very kind of you, Nam. \r\nThanks a lot.\r\nYou’re welcome.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_0);
var Text_4 = CreText('Text_4',10,84,531,324,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE20.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_4);
var Text_12 = CreText('Text_12',548,82,203,24,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_12);
var Text_7 = CreText('Text_7',543,249,249,198,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE21.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_7);
var sp_1 = CreText('sp_1',566,253,84,87,"How can I get to the post ofﬁce.\r\nYou can walk for ﬁ ve minutes.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page5.add(sp_1);
var sp_2 = CreText('sp_2',685,251,91,91,"How can I get to Phu Quoc Island.\r\nYou can take a boat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page5.add(sp_2);
var sp_4 = CreText('sp_4',555,356,115,81,"How can I get to Sa Pa.\r\nYou can take a coach.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_4);
var sp_5 = CreText('sp_5',683,349,104,94,"How can I get to Ho Chi Minh City.\r\nYou can go by plane\r\n",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_5);
var nextPage = CreText('nextPage',758,4,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page5.add(nextPage);
var prevPage = CreText('prevPage',720,4,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page5.add(prevPage);
var title2 = CreText('title2',649,43,151,31,"LESSON 2",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(title2);
stage.add(Page5);

 var Page6 = new Kinetic.Layer({name: 'Page6',callback:'Page6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page6.add(Page6_Backrounnd);
var help2 = CreText('help2',157,245,394,25,"Number the sentences in the correct order",'rgba(214, 214, 214, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(214, 214, 214, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(help2);
var title2 = CreText('title2',14,48,474,29,"2 .Rearrange the sentences",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(title2);
var dialogue = CreText('dialogue',220,281,484,218,"Where are you going next weekend, Mai?\r\nI’m going to Hau Giang Province.\r\nIs it far from Ho Chi Minh City?\r\nYes, quite far. \r\nHow are you going to get there? \r\nI think I’ll go by coach.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',3,'0.00','0','2',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,2.20);
dialogue.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page6.add(dialogue);
var hits = CreText('hits',499,187,301,36,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(hits);
var title1 = CreText('title1',0,0,798,43,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page6.add(title1);
var w_0 = CreText('w_0',286,161,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_0);
var w_1 = CreText('w_1',411,161,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_1);
var w_2 = CreText('w_2',536,161,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_2);
var w_3 = CreText('w_3',161,161,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_3);
var w_4 = CreText('w_4',654,162,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_4);
var w_5 = CreText('w_5',36,161,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_5);
var w_6 = CreText('w_6',188,197,114,31,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_6);
var w_7 = CreText('w_7',305,197,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_7);
var w_8 = CreText('w_8',539,197,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_8);
var w_9 = CreText('w_9',71,197,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_9);
var unit = CreText('unit',0,1,146,42,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(unit);
var sp_0 = CreText('sp_0',640,7,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',18,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp("");
  return;
}
 );
sp_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  ShowHelp(a_cau[index]);
  Speak(helpString,"EN");
  return;
}
 );
Page6.add(sp_0);
var sp_1 = CreText('sp_1',680,6,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  InitPage2();
  return;
}
 );
Page6.add(sp_1);
var w_10 = CreText('w_10',422,197,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_10);
var z_0 = CreText('z_0',1,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_0);
var z_1 = CreText('z_1',115,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_1);
var z_2 = CreText('z_2',229,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_2);
var z_3 = CreText('z_3',343,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_3);
var z_4 = CreText('z_4',457,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_4);
var z_5 = CreText('z_5',571,86,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_5);
var z_6 = CreText('z_6',684,86,112,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_6);
var z_7 = CreText('z_7',1,119,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_7);
var z_8 = CreText('z_8',115,119,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_8);
var z_9 = CreText('z_9',229,119,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_9);
var z_10 = CreText('z_10',343,119,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_10);
var w_11 = CreText('w_11',658,197,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_11);
var z_11 = CreText('z_11',457,119,122,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_11);
var bt_order_0 = CreText('bt_order_0',185,281,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_0);
var bt_order_1 = CreText('bt_order_1',185,309,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_1);
var bt_order_2 = CreText('bt_order_2',185,337,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_2);
var bt_order_3 = CreText('bt_order_3',185,365,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_3);
var bt_check = CreText('bt_check',526,225,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 CheckOrderPage4();
  return;
}
 );
Page6.add(bt_check);
var prevPage = CreText('prevPage',720,6,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page6.add(prevPage);
var nextPage = CreText('nextPage',761,6,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page6.add(nextPage);
var bt_order_4 = CreText('bt_order_4',185,393,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_4);
var bt_order_5 = CreText('bt_order_5',185,422,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(6)
  return;
}
 );
Page6.add(bt_order_5);
stage.add(Page6);

 var Page7 = new Kinetic.Layer({name: 'Page7',callback:'Page7()'});
var Page7_Backrounnd = CreText('Page7_Backrounnd',0,0,800,420,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page7.add(Page7_Backrounnd);
var title2 = CreText('title2',10,53,554,35,"3. Listen and circle a or b. Then ask and answer.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(title2);
var Text_5 = CreText('Text_5',299,244,301,45,"       a. It’s on the corner of the street.\r\n       b. It’s at the end of the street.",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Page7.add(Text_5);
var Text_4 = CreText('Text_4',299,181,301,45,"       a. It’s next to the supermarket.\r\n       b. It’s next to the stadium.",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(175, 238, 238, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Page7.add(Text_4);
var Text_3 = CreText('Text_3',299,119,301,46,"       a. It’s opposite the museum.       \r\n       b. It’s opposite the library.",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Page7.add(Text_3);
var Text_8 = CreText('Text_8',85,129,200,28,"1. Where’s the cinema?",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_8);
var title1 = CreText('title1',1,1,796,49,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page7.add(title1);
var sp_1 = CreText('sp_1',520,51,34,34,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Read9_Check(3);
  return;
}
 );
Page7.add(sp_1);
var sp_2 = CreText('sp_2',683,7,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Read9_Init();
a9da = ["c","a","b","c"];
  return;
}
 );
Page7.add(sp_2);
var unit = CreText('unit',2,0,145,50,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(unit);
var b0 = CreText('b0',307,143,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b0);
var a0 = CreText('a0',307,123,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a0);
var b1 = CreText('b1',307,205,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b1);
var a1 = CreText('a1',307,187,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a1);
var b2 = CreText('b2',307,268,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b2);
var a2 = CreText('a2',306,248,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a2);
var sp_10 = CreText('sp_10',643,7,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp("");
  return;
}
 );
sp_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
    ShowHelp(helpString);
  return;
}
 );
Page7.add(sp_10);
var sp_7 = CreText('sp_7',476,53,37,36,"1. Where’s the cinema? \r\n  It’s opposite the library.   \r\n2. Where’s the restaurant? \r\n  It’s next to the stadium.\r\n3. Where’s the park? \r\n  It’s on the corner of the street. ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page7.add(sp_7);
var prevPage = CreText('prevPage',722,7,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page7.add(prevPage);
var nextPage = CreText('nextPage',758,7,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page7.add(nextPage);
var hits = CreText('hits',607,122,166,167,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page7.add(hits);
var Text_1 = CreText('Text_1',85,191,200,28,"2. Where’s the restaurant?",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(175, 238, 238, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
Page7.add(Text_1);
var Text_2 = CreText('Text_2',85,254,200,28,"3. Where’s the park?",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_2);
stage.add(Page7);

 var Page8 = new Kinetic.Layer({name: 'Page8',callback:'Page8()'});
var Page8_Backrounnd = CreText('Page8_Backrounnd',0,0,800,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page8.add(Page8_Backrounnd);
var story = CreText('story',5,293,441,184,"Mai: We’re going to have a school                       next weekend.\r\nAkiko: Where are you going?\r\nMai: We’re going to the\r\nAkiko: Is it far from your school?\r\nMai: No, it isn’t.\r\nAkiko: How are you going to get there?\r\nMai: On",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page8.add(story);
var Text_1 = CreText('Text_1',43,80,349,157,"",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE23.JPG',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 192, 203, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.30);
Page8.add(Text_1);
var Text_4 = CreText('Text_4',445,293,355,184,"Tony:  I’ll go to Ho Chi Minh City tomorrow.\r\nMai:                  are you going to get there? \r\nTony:  By plane because I don’t have much time.\r\nMai:                       a nice trip!\r\nTony:  Thanks a lot, Mai.\r\nMai:  You’re",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page8.add(Text_4);
var title1 = CreText('title1',1,-1,797,45,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page8.add(title1);
var unit = CreText('unit',-1,-1,146,45,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(unit);
var title2 = CreText('title2',18,48,710,21,"4. Listen and write one word in each box.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(title2);
var t8_0 = CreText('t8_0',627,115,104,28,"",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_0);
var t8_1 = CreText('t8_1',627,144,104,28,"",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_1);
var t8_2 = CreText('t8_2',627,173,104,28,"",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_2);
var t8_3 = CreText('t8_3',627,202,104,28,"",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_3);
var Text_5 = CreText('Text_5',9,241,530,25,"5. Read and complete. Then say aloud. ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_5);
var t8_4 = CreText('t8_4',249,306,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_4);
var Text_2 = CreText('Text_2',431,86,195,28,"How can they get there?",'rgba(55, 155, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(55, 155, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_2);
var Text_6 = CreText('Text_6',627,86,104,28,"By ...",'rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_6);
var Text_7 = CreText('Text_7',431,115,195,28,"	1. Akiko",'rgba(130, 192, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(130, 192, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_7);
var Text_8 = CreText('Text_8',431,144,195,28,"	2. Tony",'rgba(130, 192, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(130, 192, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_8);
var Text_9 = CreText('Text_9',431,173,195,28,"	3. Mai",'rgba(130, 192, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(130, 192, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_9);
var Text_10 = CreText('Text_10',431,202,195,28,"	4. Linda",'rgba(130, 192, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(130, 192, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_10);
var Text_12 = CreText('Text_12',679,6,37,36,"1.\r\nI want to visit Phu Quoc Island.  How can I get there, Mai? \r\nYou can take a boat from here in  Ho Chi Minh City.\r\nGreat idea. Thanks a lot, Mai.\r\nYou’re welcome.\r\n2.\r\nWhere’s West Lake, Nam? Is it far from here?\r\nYes, quite far. Do you want to go there?\r\nYes, I do. How can I get there? \r\nYou can take a taxi.\r\n3.\r\nWhere are you going next weekend, Mai? \r\nI’m going to Hau Giang Province.\r\nIs it far from Ho Chi Minh City?\r\nYes, quite far. \r\nHow are you going to get there? \r\nI think I’ll go by coach.\r\n4.\r\nI have some friends in Ho Chi Minh City. I’m going to see them next Sunday. \r\nHow are you going to get there?\r\nBy plane.\r\nGreat. It’s faster than by coach or train. Have a nice trip! \r\nThanks, Mai.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page8.add(Text_12);
var t8_5 = CreText('t8_5',177,346,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_5);
var t8_6 = CreText('t8_6',77,425,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_6);
var t8_7 = CreText('t8_7',489,326,69,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_7);
var t8_8 = CreText('t8_8',494,365,82,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_8);
var t8_9 = CreText('t8_9',545,406,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page8.add(t8_9);
var Text_3 = CreText('Text_3',211,268,444,29,"how	 welcome	 foot 	have	 trip	 zoo",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',12,'0.00','4','4',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_3);
var nextPage = CreText('nextPage',761,6,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page8.add(nextPage);
var prevPage = CreText('prevPage',725,6,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page8.add(prevPage);
var hits = CreText('hits',496,48,228,27,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 215, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page8.add(hits);
var sp_8 = CreText('sp_8',751,47,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(10);
  return;
}
 );
Page8.add(sp_8);
stage.add(Page8);

 var Page9 = new Kinetic.Layer({name: 'Page9',callback:'Page9()'});
var Page9_Backrounnd = CreText('Page9_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page9.add(Page9_Backrounnd);
var title1 = CreText('title1',0,-1,797,45,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page9.add(title1);
var unit = CreText('unit',-1,-1,145,45,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(unit);
var Text_12 = CreText('Text_12',668,3,37,36,"Where’s the cinema?\r\nWe are here, at Lemon Street. Turn right at Pear Street. Go straight ahead. It’s cinima \r\n",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page9.add(Text_12);
var title2 = CreText('title2',17,52,226,24,"6. Let’s Play",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(title2);
var Text_1 = CreText('Text_1',49,102,721,288,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE25.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(Text_1);
var Text_2 = CreText('Text_2',491,71,176,42,"Giving Directions",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(Text_2);
var Text_3 = CreText('Text_3',66,114,176,26,"Where’s the cinema?",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(Text_3);
var Text_4 = CreText('Text_4',113,156,251,64,"We are here, at Lemon Street. Turn right at Pear Street. Go straight ahead. It’s ___________. ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(Text_4);
var nextPage = CreText('nextPage',752,5,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page9.add(nextPage);
var prevPage = CreText('prevPage',716,5,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page9.add(prevPage);
stage.add(Page9);

 var Page10 = new Kinetic.Layer({name: 'Page10',callback:'Page10()'});
var Page10_Backrounnd = CreText('Page10_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page10.add(Page10_Backrounnd);
var title1 = CreText('title1',2,-2,797,45,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page10.add(title1);
var unit = CreText('unit',1,-2,145,45,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page10.add(unit);
var Text_12 = CreText('Text_12',670,2,37,36,"How can we get there?\r\nWhere’s the park?\r\nIt’s not very far. \r\nHow can we get there?\r\nWe can go on foot.\r\n\r\nWhere’s the supermarket?\r\nIt’s at the end of the street\r\nHow can we get there?\r\nWe can take a taxi.\r\n\r\nWhere’s Phu Quoc Island?\r\nIt’s very far from here. \r\nHow can we get there?\r\nWe can go by boat.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_SING");
  return;
}

 );
Page10.add(Text_12);
var title2 = CreText('title2',19,51,144,24,"7. Let’s chant. ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page10.add(title2);
var Text_1 = CreText('Text_1',89,90,663,350,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE27.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page10.add(Text_1);
var Text_2 = CreText('Text_2',314,124,225,281,"Where’s the park?\r\nIt’s not very far. \r\nHow can we get there?\r\nWe can go on foot.\r\n\r\nWhere’s the supermarket?\r\nIt’s at the end of the street\r\nHow can we get there?\r\nWe can take a taxi.\r\n\r\nWhere’s Phu Quoc Island?\r\nIt’s very far from here. \r\nHow can we get there?\r\nWe can go by boat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page10.add(Text_2);
var Text_3 = CreText('Text_3',258,88,305,37,"How can we get there?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page10.add(Text_3);
var nextPage = CreText('nextPage',754,4,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page10.add(nextPage);
var prevPage = CreText('prevPage',713,5,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page10.add(prevPage);
stage.add(Page10);

 var Page11 = new Kinetic.Layer({name: 'Page11',callback:'Page11()'});
var Page11_Backrounnd = CreText('Page11_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE_BR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page11.add(Page11_Backrounnd);
var Text_3 = CreText('Text_3',82,218,204,27,"1. Label the places.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_3);
var title1 = CreText('title1',2,1,797,45,"Where’s the post office?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page11.add(title1);
var unit = CreText('unit',1,1,145,45,"Unit 16",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(unit);
var sp_0 = CreText('sp_0',629,6,37,36,"Dear Linda,\r\nI’m happy you’re going to visit me. You can take bus Number 12 at West Street and get off at the ﬁfth stop. Then walk along the street for ﬁve minutes. You will see Pear Street at the end of the street. Turn left and you will see a pharmacy on the left. My house is opposite the pharmacy. It is behind a green fence.\r\nSee you! \r\nTony",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
Speak(tt,"EN");
  return;
}

 );
Page11.add(sp_0);
var sp_2 = CreText('sp_2',714,8,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Init(9);
  return;
}
 );
Page11.add(sp_2);
var title2 = CreText('title2',18,50,304,24,"6. Read and do the tasks.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(title2);
var Text_1 = CreText('Text_1',45,76,711,139,"Dear Linda,\r\nI’m happy you’re going to visit me. You can take bus Number 12 at West Street and get off at the ﬁfth stop. Then walk along the street for ﬁve minutes. You will see Pear Street at the end of the street. Turn left and you will see a pharmacy on the left. My house is opposite the pharmacy. It is behind a green fence.\r\nSee you! \r\nTony",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_1);
var Text_2 = CreText('Text_2',28,245,326,171,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE29.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_2);
var Text_4 = CreText('Text_4',492,217,268,30,"2. Answer the questions.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_4);
var Text_5 = CreText('Text_5',365,245,434,204,"1. What bus should Linda take?\r\n\r\n2. Where should she get off the bus?\r\n\r\n3. What’s the name of the road at the end of the street?\r\n\r\n4. What’s opposite Tony’s house?\r\n\r\n5. What colour is the fence of Tony’s house?\r\n",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page11.add(Text_5);
var t8_0 = CreText('t8_0',91,252,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_0);
var t8_1 = CreText('t8_1',209,387,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_1);
var t8_2 = CreText('t8_2',188,320,79,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_2);
var t8_3 = CreText('t8_3',287,322,89,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_3);
var t8_4 = CreText('t8_4',398,274,232,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_4);
var t8_5 = CreText('t8_5',398,307,248,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_5);
var t8_6 = CreText('t8_6',398,342,390,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_6);
var t8_7 = CreText('t8_7',398,373,227,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_7);
var t8_8 = CreText('t8_8',398,406,308,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page11.add(t8_8);
var sp_8 = CreText('sp_8',759,207,36,36,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(9);
  return;
}
 );
Page11.add(sp_8);
var sp_1 = CreText('sp_1',673,8,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  HideHelp("");
  return;
}
 );
sp_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
   SetText("","hits",ketqua7);
SetShowObject("","hits",1);
InvalidateObj();
  return;
}
 );
Page11.add(sp_1);
var hits = CreText('hits',305,47,494,46,"",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(hits);
var sp_3 = CreText('sp_3',756,8,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page11.add(sp_3);
stage.add(Page11);
InitLacVietScript();
};
