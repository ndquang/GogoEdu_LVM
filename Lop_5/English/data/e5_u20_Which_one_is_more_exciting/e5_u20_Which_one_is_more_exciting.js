folder_Resource ='data/e5_u20_Which_one_is_more_exciting';
var size=16;
var a_w="expensive|exciting|wonderful|peaceful|quiet|noisy|busy|countryside|city|hometown|New York|Sydney|San Francisco|Chicago|London|lake|market|big|large|small|compare";
var a_vn="đắt tiền|thú vị|tuyệt vời|bình yên|yên tĩnh|ồn ào|bận rộn|nông thôn|thành phố|quê hương|TP New York(Mỹ)|TP Sydney(Úc)|TP San Francisco(Mỹ)|TP Chicago(Mỹ)|TP London(Anh)|hồ|chợ|to|lớn|nhỏ|so sánh";
var index=0;
var len=0;
var dem=0;
var index_letter=0;
var a_obj=[0,0];
function setCharAt(str, index,chr) {
    if(index > length(str)-1) return str;
	return subString(str,0,index)+chr + subString(str,index+1);
}
function DocTieuDe(){
var testSpeak=GetText("","unit")+".\r\n";
for(var i=0;i<11;i++){
	var tam = GetText("","title"+i);
	if(tam != null)
       testSpeak=testSpeak + tam +".\r\n";
}
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
function GetKetQuaListen7()
{
	var jj = rightStr(GetName(""),1);
	helpString  = a8da[jj];
}
//Page 9
var a9tl = ["0","0","0","0"];
var a9da = ["b","b","a",""];
function Read9_Init(){
 for(var i=0;i<4;i++)
	{
	SetFontColor("","a"+i,"#000000");
	SetFontColor("","b"+i,"#000000");
	SetFontColor("","c"+i,"#000000");
	
   	
	SetText("","a"+i,"");
	SetText("","b"+i,"");
	SetText("","c"+i,"");
	
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
var a6tl =  ["↓","↑","↓","↓","↓","↑","↓","↑","↓","↑","↓","↓"];
function InitTrueFalse(){
for(var i=0;i<12;i++)
	{
	SetCursor("","bt_"+i,"pointer");
		SetText("","bt_"+i,"");
	}
      SetText("","hits","");
InvalidateObj("","");
}
function CheckTrueFalse(){
	var diem=0;
	for(var i=0;i<12;i++){
		if(GetText("","bt_"+i)== a6tl[i])
		{
		SetFontColor("","bt_"+i,"#008000");
		diem++;
		}
              else {
			SetFontColor("","bt_"+i,"#ff0000");
		     }
	}
	if(diem==11){
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
function ClickTrueFasle()
{
	var tt = GetText("","");
	if(tt == "" || tt == "↓")
	  SetText("","","↑");
	else 
	  SetText("","","↓");
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
ketqua7 = "Sydney|noisier|London|larger|New York City|busier|bigger|noisier|smaller";
Listen7_Init(9);
DocTieuDe();
  return;
}

function Page_1()
{
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
a9da = ["c","a","b","c"];
Read9_Init();
ketqua7 = "come|city|bigger|beautiful|than";
Listen7_Init(5);
DocTieuDe();
  return;
}
function Page7_OnTimer()
{
  return;
}

function Page8()
{
InitTrueFalse();
DocTieuDe();
Listen7_Init(6);
  return;
}

function Page11()
{
ketqua7 = "Pagoda|centre|beautiful|a lot of|friends|Tom visited it yesterday|It’s on an island in the middle of West Lake|It is more beautiful than he expected|They learnt more about the history of Ha Noi after the visit.";
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
 height: 560 
 });

 var Page1 = new Kinetic.Layer({name: 'Page1',callback:'Page1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,470,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page1.add(Page1_Backrounnd);
var Text_3 = CreText('Text_3',0,0,800,69,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(Text_3);
var title1 = CreText('title1',124,0,575,69,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(title1);
var unit = CreText('unit',0,0,122,69,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(unit);
var title3 = CreText('title3',16,73,419,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title3);
var Text_4 = CreText('Text_4',13,105,506,339,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE12.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_4);
var sp_0 = CreText('sp_0',706,14,40,40,"a.\r\nWhere are you going for your summer holiday, Tom?\r\nI’m going back to my hometown.\r\nb.\r\nWhere in the USA do you live?\r\nIn New York City.\r\nc.\r\nWhat’s it like?\r\nIt’s very big.\r\nd.\r\nWhich one is bigger, New York City or Sydney?\r\nI think New York City is.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page1.add(sp_0);
var Text_1 = CreText('Text_1',528,237,257,207,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE11.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_1);
var Image_1 = CreText('Image_1',557,85,200,159,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE13.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page1.add(Image_1);
var sp_2 = CreText('sp_2',538,244,101,85,"Which one is smaller Hoan Kiem Lake or West Lake.\r\nI think  Hoan Kiem Lake is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_2);
var sp_3 = CreText('sp_3',676,251,101,77,"Which one is larger Ben Thanh Market or Dong Xuan Market.\r\nI think  Ben Thanh Market is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu( GetText("",""));
  return;
}
 );
Page1.add(sp_3);
var sp_4 = CreText('sp_4',544,345,111,84,"Which one is noisier life in the city or life in the countryside?\r\nI think life in the city",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_4);
var sp_5 = CreText('sp_5',671,343,102,85,"Which one is busier life in the city or life in the mountains?\r\nI think life in the city.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_5);
var Text_5 = CreText('Text_5',423,75,183,27,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_5);
var Text_2 = CreText('Text_2',13,445,770,24,"☼    big → bigger       small → smaller       large → larger       noisy → noisier       busy → busier",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_2);
var title2 = CreText('title2',647,71,151,31,"LESSON 1",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title2);
var nextPage = CreText('nextPage',755,18,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page1.add(nextPage);
stage.add(Page1);

 var Page3 = new Kinetic.Layer({name: 'Page3',callback:'Page3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page3.add(Page3_Backrounnd);
var Text_1 = CreText('Text_1',0,1,800,60,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page3.add(Text_1);
var hits = CreText('hits',477,182,324,60,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(hits);
var title1 = CreText('title1',124,1,515,60,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page3.add(title1);
var sp_1 = CreText('sp_1',682,15,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 224, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_0 = CreText('sp_0',645,15,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',11,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page3.add(sp_0);
var unit = CreText('unit',0,1,124,60,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(unit);
var title2 = CreText('title2',3,76,202,25,"3. Vocabulary",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var l_1 = CreText('l_1',419,296,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_1 = CreText('z_1',165,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_2 = CreText('z_2',216,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_3 = CreText('z_3',267,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_4 = CreText('z_4',318,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_5 = CreText('z_5',369,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_6 = CreText('z_6',420,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_7 = CreText('z_7',471,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_8 = CreText('z_8',522,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_9 = CreText('z_9',573,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_10 = CreText('z_10',624,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var z_11 = CreText('z_11',676,141,46,46,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var nextPage = CreText('nextPage',757,15,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page3.add(nextPage);
var prevPage = CreText('prevPage',719,15,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,500,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var Text_4 = CreText('Text_4',42,110,625,128,"1. Tony lives in                   . It’s                      than Nha Trang\r\n\r\n2. Linda lives in                  . It’s                      than Da Nang.\r\n\r\n3. Tom lives in                                           . It’s                           than Da Lat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(192, 192, 192, 1.00)','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page4.add(Text_4);
var Text_1 = CreText('Text_1',51,278,467,196,"1. Sydney is smaller than New York City.\r\n  New York City is                      than Sydney.\r\n\r\n2. Da Lat is quieter than New York City.\r\n  New York City is                      than Da Lat.\r\n\r\n3. New York City is larger than NhaTrang.\r\n  Nha Trang is                       than New York City.",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.70);
Page4.add(Text_1);
var Text_10 = CreText('Text_10',-1,1,801,55,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(Text_10);
var title1 = CreText('title1',118,1,513,55,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(title1);
var unit = CreText('unit',0,1,121,55,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(unit);
var prevPage = CreText('prevPage',719,11,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page4.add(prevPage);
var nextPage = CreText('nextPage',762,11,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page4.add(nextPage);
var title2 = CreText('title2',3,66,246,28,"4. Listen and write",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(title2);
var tao = CreText('tao',677,11,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',11,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_2 = CreText('Text_2',3,250,680,28,"5. Read and complete.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_2);
var t8_0 = CreText('t8_0',158,119,66,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_0);
var t8_1 = CreText('t8_1',263,119,67,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_1);
var t8_2 = CreText('t8_2',159,150,67,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_2);
var sp_10 = CreText('sp_10',635,11,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_8 = CreText('sp_8',204,60,38,37,"1.\r\nWhere in Australia do you live, Tony?\r\nI live in Sydney.\r\nWhat’s it like?\r\nIt’s noisy.\r\nWhich one is noisier, Sydney or Nha Trang?\r\nI think Sydney is.\r\n2.\r\nWhere do you live, Linda?\r\nI live in London.\r\nWhat’s it like?\r\nIt’s large.\r\nWhich one is larger, London or Da Nang?\r\nI think London is.\r\n3.\r\nDo you live in New York City, Tom?\r\nYes, I do.\r\nIs it a big city?\r\nYes, it is. And it’s busy.\r\nWhich one is busier, New York City or Da Lat?\r\nI think New York City is.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page4.add(sp_8);
var t8_3 = CreText('t8_3',259,151,72,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_3);
var t8_4 = CreText('t8_4',157,185,157,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_4);
var sp_2 = CreText('sp_2',263,58,35,35,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(9);
  return;
}
 );
Page4.add(sp_2);
var hits = CreText('hits',527,57,273,441,"",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial Narrow','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.70);
Page4.add(hits);
var t8_5 = CreText('t8_5',368,186,69,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_5);
var t8_6 = CreText('t8_6',184,309,79,20,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_6);
var t8_7 = CreText('t8_7',180,366,80,20,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_7);
var t8_8 = CreText('t8_8',166,423,73,20,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_8);
stage.add(Page4);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_2 = CreText('Text_2',1,0,797,52,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(Text_2);
var title1 = CreText('title1',122,-9,546,73,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title1);
var unit = CreText('unit',0,-2,121,54,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(unit);
var prevPage = CreText('prevPage',720,11,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_1.add(prevPage);
var nextPage = CreText('nextPage',763,11,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(nextPage);
var sp_1 = CreText('sp_1',676,11,37,36,"The weather song",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_Sing1");
  return;
}

 );
Page_1.add(sp_1);
var Text_1 = CreText('Text_1',83,105,622,317,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE15.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var title3 = CreText('title3',12,74,306,27,"6. Let’s sing.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title3);
stage.add(Page_1);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var Text_2 = CreText('Text_2',0,1,799,54,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(Text_2);
var title1 = CreText('title1',136,1,528,54,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(title1);
var unit = CreText('unit',1,1,134,54,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(unit);
var title3 = CreText('title3',7,59,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(title3);
var sp_0 = CreText('sp_0',671,13,37,35,"a.\r\nWhat are you going to do on your summer holiday?\r\nI’m going to stay with my grandparents. \r\nb.\r\nWhere in Viet Nam do they live?\r\nIn Ha Long City.\r\nc.\r\nWhat’s it like?\r\nIt’s very beautiful\r\nd.\r\nWhich one is more beautiful, Ha Long City or Nha Trang?\r\nI think Ha Long City is.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_0);
var Text_4 = CreText('Text_4',10,84,531,317,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE17.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_4);
var Text_12 = CreText('Text_12',545,98,203,24,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_12);
var Text_7 = CreText('Text_7',547,169,249,198,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE20.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_7);
var sp_1 = CreText('sp_1',10,406,783,36,"☼    beautiful → more beautiful        exciting → more exciting           expensive → more expensive",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(sp_1);
var sp_2 = CreText('sp_2',690,171,91,91,"Which one is more beautiful,Ha Long City or Nha Trang?\r\nI think Ha Long City is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page5.add(sp_2);
var sp_4 = CreText('sp_4',550,272,115,93,"Which one is more expensive, life in Da Nang or life in Ho Chi Minh City?\r\nI think life in Ho Chi Minh City is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_4);
var sp_5 = CreText('sp_5',687,269,104,94,"Which one is more exciting, life in the city or life in the countryside?\r\nI think life in the countryside is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_5);
var nextPage = CreText('nextPage',758,12,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page5.add(nextPage);
var prevPage = CreText('prevPage',720,12,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page5.add(prevPage);
var title2 = CreText('title2',651,55,149,31,"LESSON 2",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(title2);
stage.add(Page5);

 var Page6 = new Kinetic.Layer({name: 'Page6',callback:'Page6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page6.add(Page6_Backrounnd);
var Text_1 = CreText('Text_1',0,-1,800,53,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page6.add(Text_1);
var help2 = CreText('help2',169,205,394,25,"Number the sentences in the correct order",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 104, 32, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(help2);
var title2 = CreText('title2',9,63,474,29,"3 .Rearrange the sentences",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(title2);
var dialogue = CreText('dialogue',235,253,484,158,"Where do your grandparents live, Nam?\r\nThey live in Da Lat.\r\nWhat’s it like?\r\nIt’s nice and peaceful. \r\nWhich one is more peaceful, Da Lat or London? \r\nI think Da Lat is.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',3,'0.00','0','2',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,2.20);
dialogue.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page6.add(dialogue);
var hits = CreText('hits',499,179,301,56,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(hits);
var title1 = CreText('title1',126,1,512,53,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page6.add(title1);
var w_0 = CreText('w_0',286,173,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_0);
var w_1 = CreText('w_1',411,173,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_1);
var w_2 = CreText('w_2',536,173,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_2);
var w_3 = CreText('w_3',161,173,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_3);
var w_4 = CreText('w_4',654,174,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_4);
var w_5 = CreText('w_5',36,173,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_5);
var w_6 = CreText('w_6',188,209,114,31,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_6);
var w_7 = CreText('w_7',296,210,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_7);
var w_8 = CreText('w_8',539,209,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_8);
var w_9 = CreText('w_9',71,209,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_9);
var unit = CreText('unit',0,1,125,51,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(unit);
var sp_0 = CreText('sp_0',640,10,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',18,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_1 = CreText('sp_1',680,10,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  InitPage2();
  return;
}
 );
Page6.add(sp_1);
var w_10 = CreText('w_10',422,209,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_10);
var z_0 = CreText('z_0',1,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_0);
var z_1 = CreText('z_1',115,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_1);
var z_2 = CreText('z_2',229,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_2);
var z_3 = CreText('z_3',343,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_3);
var z_4 = CreText('z_4',457,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_4);
var z_5 = CreText('z_5',571,98,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_5);
var z_6 = CreText('z_6',684,98,112,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_6);
var z_7 = CreText('z_7',1,131,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_7);
var z_8 = CreText('z_8',115,131,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_8);
var z_9 = CreText('z_9',229,131,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_9);
var z_10 = CreText('z_10',343,131,114,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_10);
var w_11 = CreText('w_11',658,209,114,33,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
w_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
Page6.add(w_11);
var z_11 = CreText('z_11',457,131,122,33,"",'rgba(255, 255, 255, 0.59)','rgba(255, 254, 153, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
z_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ReStore();
  return;
}
 );
Page6.add(z_11);
var bt_order_0 = CreText('bt_order_0',202,253,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(5)
  return;
}
 );
Page6.add(bt_order_0);
var bt_order_1 = CreText('bt_order_1',202,281,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(5)
  return;
}
 );
Page6.add(bt_order_1);
var bt_order_2 = CreText('bt_order_2',202,309,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(5)
  return;
}
 );
Page6.add(bt_order_2);
var bt_order_3 = CreText('bt_order_3',202,337,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(5)
  return;
}
 );
Page6.add(bt_order_3);
var bt_check = CreText('bt_check',548,189,47,47,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 CheckOrderPage4();
  return;
}
 );
Page6.add(bt_check);
var prevPage = CreText('prevPage',720,10,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page6.add(prevPage);
var nextPage = CreText('nextPage',761,10,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page6.add(nextPage);
var bt_order_4 = CreText('bt_order_4',202,366,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(5)
  return;
}
 );
Page6.add(bt_order_4);
stage.add(Page6);

 var Page7 = new Kinetic.Layer({name: 'Page7',callback:'Page7()'});
var Page7_Backrounnd = CreText('Page7_Backrounnd',0,0,800,560,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page7.add(Page7_Backrounnd);
var Text_8 = CreText('Text_8',50,86,651,218,"1. Da Lat is more _______________ than London.\r\n          a. interesting                             b. exciting                                c. peaceful\r\n2. Ha Long City is more _______________ than Sydney.\r\n          a. beautiful                                b. wonderful                             c. exciting \r\n3. New York City is more _______________ than Da Lat.\r\n          a. beautiful                                b. exciting                                c. expensive\r\n4. London is more _______________ than Da Lat.\r\n          a. peaceful                                b. beautiful                               c. exciting",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 192, 203, 1.00)','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.00);
Page7.add(Text_8);
var Text_11 = CreText('Text_11',3,1,795,48,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page7.add(Text_11);
var Text_7 = CreText('Text_7',54,324,727,219,"\r\nNam:\r\nTony:\r\nNam:\r\nTony:\r\nNam:\r\nTony:\r\nNam:\r\nTony:",'rgba(255, 255, 140, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',6,'rgba(0, 128, 255, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page7.add(Text_7);
var title2 = CreText('title2',12,51,369,27,"3. Listen and circle a or b.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(title2);
var title1 = CreText('title1',108,1,531,56,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page7.add(title1);
var sp_1 = CreText('sp_1',261,47,34,34,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Read9_Check(4);
  return;
}
 );
Page7.add(sp_1);
var sp_2 = CreText('sp_2',683,7,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
a9da = ["c","a","b","c"];
Read9_Init();
ketqua7 = "come|city|bigger|beautiful|than";
Listen7_Init(5);
DocTieuDe();
}
 );
Page7.add(sp_2);
var unit = CreText('unit',2,1,105,48,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(unit);
var b0 = CreText('b0',273,104,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b0);
var a0 = CreText('a0',73,104,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a0);
var b1 = CreText('b1',273,149,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b1);
var a1 = CreText('a1',73,149,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a1);
var b2 = CreText('b2',273,194,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b2);
var a2 = CreText('a2',73,194,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_7 = CreText('sp_7',699,56,37,36,"1.\r\nWhere do your grandparents live, Nam? \r\nThey live in Da Lat.\r\nWhat’s it like?\r\nIt’s nice and peaceful. \r\nWhich one is more peaceful, Da Lat or London? \r\nI think Da Lat is.\r\n2.\r\nDo your grandparents live in Ha Noi?\r\nNo, they don’t.\r\nWhere do they live? \r\nThey live in Ha Long City. \r\nWhich one is more beautiful, Ha Long City or Sydney? \r\nI think Ha Long City is.\r\n3.\r\nWhere do your grandparents live, Quan? \r\nThey live in Da Lat.\r\nOh, it’s very far from here.\r\nYes, it is. \r\nWhich one is more exciting, New York City or Da Lat? \r\nI think New York City is.\r\n4.\r\nDo your grandparents live in Da Lat, Mai?\r\nYes, they do.\r\nWhich one is more exciting, Da Lat or London?\r\nI think London is.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
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
var Text_6 = CreText('Text_6',119,324,686,219,"\r\nWhere do you                               from, Tony?\r\nSydney, Australia.\r\nOh, it’s a very big                        , right?\r\nYes, it is.\r\nWhich one is                           , Sydney or Da Nang?\r\nI think Sydney is.\r\nAnd which one is more                          ?\r\nWell, they are both very nice. But I think Sydney is more beautiful                             Da Nang.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page7.add(Text_6);
var Text_9 = CreText('Text_9',38,275,369,27,"4. Read and complete.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_9);
var Text_10 = CreText('Text_10',199,308,441,27,"city     than     come     bigger     beautiful",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_10);
var t8_0 = CreText('t8_0',228,357,110,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_0);
var t8_1 = CreText('t8_1',250,397,88,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_1);
var t8_2 = CreText('t8_2',222,437,101,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_2);
var t8_3 = CreText('t8_3',287,479,97,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_3);
var t8_4 = CreText('t8_4',569,499,99,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_4);
var sp_8 = CreText('sp_8',260,265,38,39,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(5);
  return;
}
 );
Page7.add(sp_8);
var c0 = CreText('c0',472,104,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(c0);
var c1 = CreText('c1',472,149,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(c1);
var c2 = CreText('c2',472,194,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(c2);
var a3 = CreText('a3',73,239,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a3);
var b3 = CreText('b3',273,239,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b3);
var c3 = CreText('c3',472,239,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(c3);
var hits = CreText('hits',467,49,334,495,"",'rgba(255, 255, 224, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',11,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
hits.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
HideHelp("");
  return;
}
 );
Page7.add(hits);
stage.add(Page7);

 var Page8 = new Kinetic.Layer({name: 'Page8',callback:'Page8()'});
var Page8_Backrounnd = CreText('Page8_Backrounnd',0,0,800,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page8.add(Page8_Backrounnd);
var Text_2 = CreText('Text_2',-1,-2,801,52,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page8.add(Text_2);
var Text_1 = CreText('Text_1',68,81,581,41,"1. A:  Which one is bigger,       New York City      or London?\r\n    B:  I think London is.",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(193, 255, 193, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_1);
var title1 = CreText('title1',118,-1,559,57,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',0,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page8.add(title1);
var unit = CreText('unit',-1,-1,119,51,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(unit);
var title2 = CreText('title2',20,57,710,21,"5. Listen and mark the sentence intonation ( ↓  or ↑ ).",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(title2);
var sp_7 = CreText('sp_7',727,85,37,36,"1.  A: Which one is bigger, New York City or London?   \r\n    B: I think London is.\r\n2.  A: Which one is larger, New York City or Da Nang?   \r\n    B: I think New York City is.   \r\n3.  A: Which one is more beautiful,London or Sydney?   \r\n    B: I think London is.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page8.add(sp_7);
var nextPage = CreText('nextPage',761,6,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page8.add(nextPage);
var prevPage = CreText('prevPage',721,6,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page8.add(prevPage);
var sp_8 = CreText('sp_8',727,124,38,39,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   CheckTrueFalse();
  return;
}
 );
Page8.add(sp_8);
var Text_3 = CreText('Text_3',650,51,151,31,"LESSON 3",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_3);
var sp_2 = CreText('sp_2',681,6,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitTrueFalse();
DocTieuDe();
Listen7_Init(6);
  return;
}

 );
Page8.add(sp_2);
var Text_15 = CreText('Text_15',25,273,569,21,"6. Write about where you live.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_15);
var Text_16 = CreText('Text_16',67,297,616,181,"My name is                              I live in        \r\n\r\nIt’s a                                                        in Viet Nam.\r\n\r\nThere are \r\n\r\nIt’s\r\n\r\nI enjoy living here because it’s\r\n",'rgba(210, 210, 166, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(210, 210, 166, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page8.add(Text_16);
var t8_0 = CreText('t8_0',163,311,106,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_0);
var t8_1 = CreText('t8_1',331,311,341,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_1);
var t8_2 = CreText('t8_2',124,344,202,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_2);
var t8_3 = CreText('t8_3',147,377,380,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_3);
var Text_4 = CreText('Text_4',68,144,575,41,"2. A:  Which one is larger,       New York City       or Da Nang?\r\n    B:  I think New York City is.",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 228, 225, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_4);
var Text_6 = CreText('Text_6',68,207,579,41,"3. A:  Which one is more beautiful,      London      or Sydney?\r\n    B:  I think London is.",'rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(230, 230, 250, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_6);
var bt_0 = CreText('bt_0',272,80,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_0);
var bt_1 = CreText('bt_1',409,80,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_1);
var bt_2 = CreText('bt_2',245,102,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_2);
var bt_3 = CreText('bt_3',525,80,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_3);
var bt_4 = CreText('bt_4',269,144,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_4);
var bt_5 = CreText('bt_5',409,144,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_5);
var bt_6 = CreText('bt_6',534,145,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_6);
var bt_7 = CreText('bt_7',294,165,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_7);
var bt_8 = CreText('bt_8',331,207,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_8);
var bt_9 = CreText('bt_9',415,209,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_9);
var bt_10 = CreText('bt_10',529,207,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_10);
var bt_11 = CreText('bt_11',244,226,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_11);
var t8_4 = CreText('t8_4',108,410,410,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_4);
var t8_5 = CreText('t8_5',285,446,244,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_5);
stage.add(Page8);

 var Page11 = new Kinetic.Layer({name: 'Page11',callback:'Page11()'});
var Page11_Backrounnd = CreText('Page11_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page11.add(Page11_Backrounnd);
var Text_1 = CreText('Text_1',68,85,531,191,"Hello. My name’s Anna. I live in Liverpool, a very big city in England. It has a lot of people and interesting buildings. It’s very noisy. But I enjoy living here because life is exciting. During summer holidays, I often stay with my grandparents in King’s Lynn, a town in the east of England, in a county called Norfolk. It’s much smaller and quieter than Liverpool. There are not so many people there, but the shops are really nice and things are cheaper. I like Norfolk because the people are very friendly.",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.00);
Page11.add(Text_1);
var Text_2 = CreText('Text_2',-1,-1,801,52,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page11.add(Text_2);
var title1 = CreText('title1',105,1,567,55,"Which one is more exciting, life in the city or life in the countryside?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page11.add(title1);
var unit = CreText('unit',1,1,104,50,"Unit 20",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','10',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(unit);
var title2 = CreText('title2',17,61,587,27,"     8. Read and answer.",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','2','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(title2);
var Text_5 = CreText('Text_5',66,275,674,158,"1. Where does Anna live?\r\n2. Where does she often go for her summer holiday?\r\n3. Which one is smaller, Liverpool or King’s Lynn?\r\n4. Which one is noisier, Liverpool or King’s Lynn?\r\n5. Where are things more expensive, in Liverpool or in King’s Lynn?",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.50);
Page11.add(Text_5);
var sp_3 = CreText('sp_3',760,8,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page11.add(sp_3);
var Text_3 = CreText('Text_3',18,257,587,27,"      9. Answer the questions.",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','2','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_3);
var Image_1 = CreText('Image_1',597,60,143,216,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE24.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page11.add(Image_1);
var sp_7 = CreText('sp_7',715,7,37,36,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","Text_1")
Speak(tt,"EN")
  return;
}

 );
Page11.add(sp_7);
stage.add(Page11);
InitLacVietScript();
};
