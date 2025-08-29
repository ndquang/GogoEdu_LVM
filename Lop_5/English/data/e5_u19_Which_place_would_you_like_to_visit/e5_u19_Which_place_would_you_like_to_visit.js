folder_Resource ='data/e5_u19_Which_place_would_you_like_to_visit';
var size=16;
var a_w="pagoda|museum|bridge|temple|theatre|market|park|zoo|island|lake|attractive|exciting|interesting|beautiful|expect|delicious|friendly";
var a_vn="chùa|bảo tàng|cầu|đền|chợ|công viên|sở thú|hòn đảo|hồ|thu hút|hấp dẫn|thú vị|đẹp|kỳ vọng|ngon|thân thiện";
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
 for(var i=0;i<3;i++)
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
var a6tl =  ["↓","↑","↓","↓","↓","↓","↓","↑","↓","↓","↓","↓"];
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
Read9_Init();
a9da = ["b","a","a"];
ketqua7 = "somewhere|would|Park|museum|centre";
Listen7_Init(5);
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
a9da = ["b","b","a"];
Read9_Init();
ketqua7 = "Can Tho|exciting|delicious|friendly|again";
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
Listen7_Init(4);
  return;
}

function Page9()
{
DocTieuDe();
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
 height: 500 
 });

 var Page1 = new Kinetic.Layer({name: 'Page1',callback:'Page1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page1.add(Page1_Backrounnd);
var title1 = CreText('title1',0,0,801,48,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page1.add(title1);
var unit = CreText('unit',0,0,122,48,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(unit);
var title3 = CreText('title3',15,56,419,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title3);
var sp_1 = CreText('sp_1',753,8,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page1.add(sp_1);
var Text_4 = CreText('Text_4',13,105,506,339,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_4);
var sp_0 = CreText('sp_0',707,8,36,36,"a.\r\nThe weather is beautiful in Ha Noi today.\r\nYes, it is.\r\nb.\r\nWould you like to go somewhere, Tom?\r\nYes, I’d like to.\r\nc.\r\nWhich place would you like to visit, a museum or a pagoda?\r\nI’d like to visit a pagoda.\r\nd.\r\nLet’s visit Tran Quoc Pagoda.\r\nOK. Let’s go.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page1.add(sp_0);
var title2 = CreText('title2',650,49,151,31,"LESSON 1",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(title2);
var Text_1 = CreText('Text_1',528,237,257,207,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_1);
var Image_1 = CreText('Image_1',568,80,177,165,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page1.add(Image_1);
var sp_2 = CreText('sp_2',538,244,101,85,"Which place would you like to visit, Thong Nhat Park or the Museum of History?\r\nI’d like to visit Thong Nhat Park.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_2);
var sp_3 = CreText('sp_3',676,251,101,77,"Which place would you like to visit Trang Tien Bridge or Thien Mu Pagoda?\r\nI’d like to visit Thien Mu Pagoda.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu( GetText("",""));
  return;
}
 );
Page1.add(sp_3);
var sp_4 = CreText('sp_4',544,345,111,84,"Which place would you like to visit Ben Thanh Market or the City Theatre?\r\nI’d like to visit Ben Thanh Market.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_4);
var sp_5 = CreText('sp_5',671,343,102,85,"Which place would you like to visit Bai Dinh Pagoda or Hoa Lu Temple?\r\nI’d like to visit Hoa Lu Temple.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocNamNu(GetText("",""));
  return;
}
 );
Page1.add(sp_5);
var Text_5 = CreText('Text_5',455,52,183,27,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page1.add(Text_5);
stage.add(Page1);

 var Page3 = new Kinetic.Layer({name: 'Page3',callback:'Page3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page3.add(Page3_Backrounnd);
var hits = CreText('hits',477,182,324,60,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page3.add(hits);
var title1 = CreText('title1',0,0,800,46,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var unit = CreText('unit',0,0,124,46,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,500,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var Text_6 = CreText('Text_6',38,207,403,30,"     3. Which place would Linda like to visit?",'rgba(255, 255, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','0',0,'rgba(255, 255, 0, 255)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_6);
var Text_5 = CreText('Text_5',38,146,403,30,"     2. Which place would Tom like to visit?",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','0',0,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
Page4.add(Text_5);
var Text_4 = CreText('Text_4',38,83,403,30,"     1. Which place would Mai like to visit?",'rgba(64, 224, 208, 1.00)','rgba(0, 204, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','0',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_4);
var Text_9 = CreText('Text_9',399,193,266,59,"          a. Bai Dinh Pagoda\r\n          b. Hoa Lu Temple",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','1',1,'rgba(255, 215, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_9);
var Text_8 = CreText('Text_8',399,133,266,56,"          a. Thien Mu Pagoda\r\n          b. Trang Tien Bridge",'rgba(255, 193, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','1',1,'rgba(255, 0, 255, 255)','rgba(255, 193, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.70);
Page4.add(Text_8);
var Text_7 = CreText('Text_7',399,68,266,60,"          a.  the City Theatre\r\n          b. Ben Thanh Market",'rgba(175, 238, 238, 1.00)','rgba(0, 204, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','2','1',1,'rgba(0, 255, 255, 255)','rgba(175, 238, 238, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_7);
var Text_1 = CreText('Text_1',127,283,507,209,"It’s Sunday today. Let’s go (1)                     in the city. \r\nWhich place (2)                      you like to visit,\r\nThong Nhat (3)                     or the History Museum?\r\nI’d like to visit the (4)                    .\r\nThat’s a good idea! \r\nWhere is it?\r\nIt’s in the (5)                     of the city.\r\nOK. Let’s go now.",'rgba(192, 192, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.10);
Page4.add(Text_1);
var title1 = CreText('title1',1,0,796,41,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page4.add(title1);
var unit = CreText('unit',0,0,121,41,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var title2 = CreText('title2',3,48,170,28,"4. Listen and tick",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_2 = CreText('Text_2',3,250,680,28,"5. Read and complete.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page4.add(Text_2);
var t8_0 = CreText('t8_0',337,294,79,22,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_0);
var t8_1 = CreText('t8_1',246,321,85,18,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_1);
var t8_2 = CreText('t8_2',243,342,81,18,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_2);
var b0 = CreText('b0',424,99,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b0);
var a0 = CreText('a0',424,80,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a0);
var b1 = CreText('b1',424,162,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b1);
var a1 = CreText('a1',424,141,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a1);
var b2 = CreText('b2',424,225,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page4.add(b2);
var a2 = CreText('a2',424,203,16,16,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page4.add(a2);
var sp_10 = CreText('sp_10',635,3,34,34,"?",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_1 = CreText('sp_1',228,45,34,34,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Read9_Check(3);
  return;
}
 );
Page4.add(sp_1);
var sp_8 = CreText('sp_8',180,45,38,37,"1.\r\nThis is my first time in Ho Chi Minh City.\r\nWould you like to go to the city centre? \r\nYes, please. \r\nWhich place would you like to visit, Ben Thanh Market or the City Theatre? \r\nI’d like to visit Ben Thanh Market. \r\nOK. Let’s go now.\r\n2.\r\nWould you like to go somewhere in Hue City? \r\nYes. That’s a good idea. \r\nWhich place would you like to visit, Trang Tien Bridge or Thien Mu Pagoda? \r\nI’d like to go to Thien Mu Pagoda. \r\nOK. I’ll take you there.\r\n3.\r\nWould you like to visit some places? \r\nYes, that sounds interesting. \r\nWhich place would you like to visit, Bai Dinh Pagoda or Hoa Lu Temple? \r\nI’d like to go to Bai Dinh Pagoda. \r\nOK. I’ll go with you.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","")
DocNamNu(tt);
  return;
}

 );
Page4.add(sp_8);
var t8_3 = CreText('t8_3',278,368,87,18,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_3);
var t8_4 = CreText('t8_4',221,438,80,18,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
Page4.add(t8_4);
var Text_3 = CreText('Text_3',47,283,90,209,"Tony:  \r\nPhong: \r\n  \r\nTony:  \r\nPhong: \r\nTony:  \r\nPhong: \r\nTony:  ",'rgba(127, 127, 127, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','right','top',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(192, 192, 192, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.10);
Page4.add(Text_3);
var Text_11 = CreText('Text_11',633,283,105,209,"park\r\nmuseum\r\ncentre\r\nwould\r\nsomewhere",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,2.10);
Page4.add(Text_11);
var sp_2 = CreText('sp_2',668,287,35,35,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(5);
  return;
}
 );
Page4.add(sp_2);
var hits = CreText('hits',543,43,258,350,"",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial Narrow','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.70);
Page4.add(hits);
stage.add(Page4);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title1 = CreText('title1',2,0,796,41,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title1);
var unit = CreText('unit',1,0,121,41,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(unit);
var prevPage = CreText('prevPage',720,3,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_1.add(prevPage);
var nextPage = CreText('nextPage',763,3,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(nextPage);
var sp_1 = CreText('sp_1',676,3,37,36,"The weather song",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_Sing1");
  return;
}

 );
Page_1.add(sp_1);
var Text_1 = CreText('Text_1',114,103,553,264,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE2.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var title3 = CreText('title3',17,48,306,27,"6. Let’s sing.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title3);
stage.add(Page_1);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var Image_1 = CreText('Image_1',679,132,101,54,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page5.add(Image_1);
var Text_1 = CreText('Text_1',545,116,256,95,"What do you think of _______?\r\n\r\n\r\n\r\nIt’s more _______ than I expected.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_1);
var title1 = CreText('title1',1,-1,798,44,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page5.add(title1);
var unit = CreText('unit',1,0,142,43,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(unit);
var title3 = CreText('title3',18,47,306,27,"1. Look, listen and repeat.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(title3);
var sp_0 = CreText('sp_0',674,2,37,35,"a.\r\nWhat did you do yesterday?\r\nI visited Tran Quoc Pagoda.\r\nb.\r\nWhere is it?\r\nIt’s on an island in the middle of West Lake.\r\nc.\r\nWhat do you think of it?\r\nIt’s more beautiful than I expected.\r\nd.\r\nThe pagoda is really beautiful. I enjoyed the visit very much.\r\nThat’s great. I think I’ll visit it one day.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_0);
var Text_4 = CreText('Text_4',10,84,531,317,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_4);
var Text_12 = CreText('Text_12',548,82,203,24,"2. Point and say",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_12);
var Text_7 = CreText('Text_7',545,203,249,198,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE5.JPG',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'rgba(0, 0, 0, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page5.add(Text_7);
var sp_1 = CreText('sp_1',547,204,117,92,"What do you think of Ha Long Bay?\r\nIt’s more attractive than I expected.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page5.add(sp_1);
var sp_2 = CreText('sp_2',688,205,91,91,"What do you think of Dam Sen Park?\r\nIt’s more exciting than I expected.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocNamNu(GetText("",""));
}
 );
Page5.add(sp_2);
var sp_4 = CreText('sp_4',548,306,115,93,"What do you think of Thu Le Zoo?\r\nIt’s more interesting than I expected.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocNamNu(GetText("",""));
}
 );
Page5.add(sp_4);
var sp_5 = CreText('sp_5',685,303,104,94,"What do you think of Phu Quoc Island?\r\nIt’s more beautiful than I expected.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page6.add(Page6_Backrounnd);
var help2 = CreText('help2',157,245,394,25,"",'rgba(214, 214, 214, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(214, 214, 214, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(help2);
var title2 = CreText('title2',14,48,474,29,"3 .Rearrange the sentences",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(title2);
var dialogue = CreText('dialogue',220,281,484,218,"What’s your favourite season, Mai?\r\nI like summer.\r\nWhat’s summer like in your country?\r\nIt’s usually hot. There’s a lot of rain.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',3,'0.00','0','2',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,2.20);
dialogue.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;DownSwapLine();
  return;
}
 );
Page6.add(dialogue);
var hits = CreText('hits',499,187,301,36,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page6.add(hits);
var title1 = CreText('title1',0,0,798,43,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var unit = CreText('unit',0,1,146,42,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
  ClickButtonCheck4(4)
  return;
}
 );
Page6.add(bt_order_0);
var bt_order_1 = CreText('bt_order_1',185,309,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(4)
  return;
}
 );
Page6.add(bt_order_1);
var bt_order_2 = CreText('bt_order_2',185,337,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(4)
  return;
}
 );
Page6.add(bt_order_2);
var bt_order_3 = CreText('bt_order_3',185,365,29,25,"",'rgba(230, 230, 250, 1.00)','rgba(255, 255, 255, 1.00)','rgba(40, 40, 40, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',3,'0.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(192, 192, 192, 1.00)','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bt_order_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  ClickButtonCheck4(4)
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
stage.add(Page6);

 var Page7 = new Kinetic.Layer({name: 'Page7',callback:'Page7()'});
var Page7_Backrounnd = CreText('Page7_Backrounnd',0,0,800,420,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page7.add(Page7_Backrounnd);
var Text_2 = CreText('Text_2',51,178,487,28,"3. Tony thinks Nha Trang is more _________ than he expected.",'rgba(192, 192, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 1.00)','4','3','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_2);
var Text_1 = CreText('Text_1',51,128,487,28,"2. Phong thinks Dam Sen Park is more _________ than he expected.",'rgba(192, 192, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 1.00)','4','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_1);
var Text_8 = CreText('Text_8',51,83,487,28,"1. Tom thinks Phu Quoc is more _________ than he expected.",'rgba(192, 192, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 1.00)','4','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_8);
var Text_7 = CreText('Text_7',53,234,595,182,"Tom:  \r\nNam:  \r\nTom:  \r\nNam:  \r\n  \r\n \r\nTom:  \r\nNam:  ",'rgba(143, 204, 2, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',3,'0.00','19','0',3,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','4','3','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page7.add(Text_7);
var Text_5 = CreText('Text_5',518,171,165,39,"          a. attractive\r\n          b. exciting  ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'rgba(40, 40, 40, 255)','rgba(192, 192, 192, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_5);
var Text_4 = CreText('Text_4',518,122,165,39,"          a. interesting\r\n          b. exciting ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'rgba(40, 40, 40, 255)','rgba(192, 192, 192, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_4);
var Text_3 = CreText('Text_3',518,77,165,39,"          a. exciting\r\n          b. beautiful  ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',11,'0.00','10','0',1,'rgba(40, 40, 40, 255)','rgba(192, 192, 192, 1.00)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_3);
var title2 = CreText('title2',12,51,369,27,"3. Listen and circle a or b.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(title2);
var title1 = CreText('title1',1,1,796,49,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page7.add(title1);
var sp_1 = CreText('sp_1',753,55,34,34,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var unit = CreText('unit',2,0,145,50,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(unit);
var b0 = CreText('b0',527,97,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b0);
var a0 = CreText('a0',527,77,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a0);
var b1 = CreText('b1',527,142,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b1);
var a1 = CreText('a1',527,123,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}
 );
Page7.add(a1);
var b2 = CreText('b2',527,191,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Read9_Click();
  return;
}

 );
Page7.add(b2);
var a2 = CreText('a2',527,172,17,17,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var sp_7 = CreText('sp_7',699,56,37,36,"1.\r\nWhere did you go last month, Tom?\r\nI went to Phu Quoc.\r\nGreat! What do you think of it?\r\nWell, it was more beautiful than I expected. I liked the seafood. It was delicious. \r\nIt sounds great. I want to visit Phu Quoc one day.\r\n2.\r\nWhere were you last week, Phong?\r\nI was in Ho Chi Minh City.\r\nWhat did you do there? \r\nI visited Ben Thanh Market and Dam Sen Park. \r\nOh, what did you think of Dam Sen Park? \r\nIt was more exciting than I expected.\r\n3.\r\nWhat did you do last weekend, Tony? \r\nI went to Nha Trang.\r\nWhat do you think of it?\r\nIt’s more attractive than I expected. The food is cheap and the people are friendly. \r\nGreat. I’ll go to Nha Trang next year.",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
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
var Text_6 = CreText('Text_6',118,234,503,182,"What did you do last weekend? \r\nI went to\r\nWhat do you think of it?\r\nIt’s more                     than I expected.\r\nThe food was                    and the people were \r\n                    . I had a good time there.\r\nWill you go there                        ? \r\nYes, I will! ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page7.add(Text_6);
var Text_9 = CreText('Text_9',23,206,369,27,"4. Read and complete.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_9);
var Text_10 = CreText('Text_10',517,276,99,106,"friendly\r\nagain\r\ndelicious\r\nexciting\r\nCan Tho",'rgba(255, 255, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',3,'0.00','34','0',8,'rgba(255, 255, 255, 255)','rgba(255, 255, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page7.add(Text_10);
var t8_0 = CreText('t8_0',186,268,91,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_0);
var t8_1 = CreText('t8_1',188,308,83,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_1);
var t8_2 = CreText('t8_2',219,326,77,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_2);
var t8_3 = CreText('t8_3',132,348,82,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_3);
var t8_4 = CreText('t8_4',197,386,91,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page7.add(t8_4);
var sp_8 = CreText('sp_8',463,236,38,39,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(5);
  return;
}
 );
Page7.add(sp_8);
var hits = CreText('hits',541,50,255,364,"",'rgba(255, 255, 224, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',11,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page7.add(hits);
stage.add(Page7);

 var Page8 = new Kinetic.Layer({name: 'Page8',callback:'Page8()'});
var Page8_Backrounnd = CreText('Page8_Backrounnd',0,0,800,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page8.add(Page8_Backrounnd);
var Text_1 = CreText('Text_1',68,77,630,41,"1. Which place would you like to visit,\r\n   Thong Nhat Park     or the Museum of History?",'rgba(185, 238, 185, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','2',1,'rgba(255, 255, 255, 255)','rgba(185, 238, 185, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_1);
var title1 = CreText('title1',1,-1,797,45,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page8.add(title1);
var unit = CreText('unit',-1,-1,146,45,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(unit);
var title2 = CreText('title2',20,53,710,21,"5. Listen and mark the sentence intonation ( ↓  or ↑ ).",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(title2);
var sp_7 = CreText('sp_7',727,81,37,36,"1. Which place would you like to visit,  Thong Nhat Park  or the Museum of History?  \r\n   I’d like to visit the Museum of History. \r\n2. What do you think of the Museum of History?    \r\n   It’s more interesting than I expected. \r\n3. Which place would you like to visit,  Bai Dinh Pagoda   or Hoa Lu Temple?  \r\n   I’d like to visit Hoa Lu Temple. \r\n4. What do you think of Hoa Lu Temple?   \r\n   It’s more attractive than I expected.   ",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
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
var hits = CreText('hits',601,266,188,27,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 215, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
hits.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page8.add(hits);
var sp_8 = CreText('sp_8',727,120,38,39,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   CheckTrueFalse();
  return;
}
 );
Page8.add(sp_8);
var Text_3 = CreText('Text_3',647,45,151,31,"LESSON 3",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_3);
var sp_2 = CreText('sp_2',681,6,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',12,'Arial','Bold','center','middle',2,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Read9_Init();
a9da = ["a","b","a","a"];
  return;
}
 );
Page8.add(sp_2);
var Text_15 = CreText('Text_15',25,269,710,21,"6. Write about your last summer holiday.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_15);
var Text_16 = CreText('Text_16',67,293,616,181,"1. Where did you go last summer holiday?\r\n\r\n2. What places did you visit?\r\n\r\n3. What were they like?\r\n\r\n4. What did you think of them?\r\n\r\n\r\nKey: Answers vary",'rgba(192, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.50);
Page8.add(Text_16);
var t8_0 = CreText('t8_0',364,308,310,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_0);
var t8_1 = CreText('t8_1',272,340,402,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_1);
var t8_2 = CreText('t8_2',242,372,432,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_2);
var t8_3 = CreText('t8_3',294,404,380,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page8.add(t8_3);
var Text_2 = CreText('Text_2',515,77,159,43,"I’d like to visit the\r\nMuseum of History.",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_2);
var Text_4 = CreText('Text_4',68,124,630,41,"2. What do you think of the Museum of History?",'rgba(214, 254, 118, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','2',1,'rgba(255, 255, 255, 255)','rgba(214, 254, 118, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_4);
var Text_5 = CreText('Text_5',515,124,163,43,"It’s more interesting \r\nthan I expected.",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_5);
var Text_6 = CreText('Text_6',68,172,630,41,"3. Which place would you like to visit,\r\n    Bai Dinh Pagoda     or Hoa Lu Temple?",'rgba(185, 238, 185, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','2',1,'rgba(255, 255, 255, 255)','rgba(185, 238, 185, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_6);
var Text_7 = CreText('Text_7',515,172,163,43,"I’d like to visit\r\nHoa Lu Temple.",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_7);
var Text_8 = CreText('Text_8',68,219,630,41,"4. What do you think of Hoa Lu Temple?",'rgba(214, 254, 118, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','middle',12,'0.00','0','2',1,'rgba(255, 255, 255, 255)','rgba(214, 254, 118, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_8);
var Text_9 = CreText('Text_9',516,219,163,43,"It’s more attractive\r\nthan I expected.",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page8.add(Text_9);
var bt_0 = CreText('bt_0',352,78,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_0);
var bt_1 = CreText('bt_1',215,96,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_1);
var bt_2 = CreText('bt_2',434,98,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_2);
var bt_3 = CreText('bt_3',639,89,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_3);
var bt_4 = CreText('bt_4',431,132,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_4);
var bt_5 = CreText('bt_5',639,136,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_5);
var bt_6 = CreText('bt_6',349,172,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_6);
var bt_7 = CreText('bt_7',217,189,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_7);
var bt_8 = CreText('bt_8',384,192,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_8);
var bt_9 = CreText('bt_9',639,182,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_9);
var bt_10 = CreText('bt_10',374,230,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_10);
var bt_11 = CreText('bt_11',639,230,20,20,"↓",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickTrueFasle();
  return;
}
 );
Page8.add(bt_11);
stage.add(Page8);

 var Page9 = new Kinetic.Layer({name: 'Page9',callback:'Page9()'});
var Page9_Backrounnd = CreText('Page9_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page9.add(Page9_Backrounnd);
var Text_7 = CreText('Text_7',66,86,653,316,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',7,'rgba(255, 192, 203, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(Text_7);
var title1 = CreText('title1',0,-1,797,45,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page9.add(title1);
var unit = CreText('unit',-1,-1,145,45,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(unit);
var sp_1 = CreText('sp_1',668,3,37,36,"The weather song",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_LISTEN.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
sp_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_SING");
  return;
}

 );
Page9.add(sp_1);
var title2 = CreText('title2',11,47,226,24,"7. Let’s chant.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page9.add(title2);
var nextPage = CreText('nextPage',752,5,34,34,"»",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nextPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page9.add(nextPage);
var prevPage = CreText('prevPage',711,5,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
prevPage.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page9.add(prevPage);
stage.add(Page9);

 var Page11 = new Kinetic.Layer({name: 'Page11',callback:'Page11()'});
var Page11_Backrounnd = CreText('Page11_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page11.add(Page11_Backrounnd);
var title1 = CreText('title1',2,1,797,45,"Which place would you like to visit?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',0,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page11.add(title1);
var unit = CreText('unit',1,1,145,45,"Unit 19",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',12,'0.00','0','1',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(unit);
var sp_2 = CreText('sp_2',714,8,34,34,"new",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Listen7_Init(9);
  return;
}
 );
Page11.add(sp_2);
var title2 = CreText('title2',16,54,513,25,"8. Read and do the tasks.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','2',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(title2);
var Text_1 = CreText('Text_1',53,107,669,153,"My name’s Tom. Yesterday, I visited Tran Quoc(1)                            . It is on an island in the middle of West Lake and not far from the(2)                         of Ha Noi. I went there by bike. Tran Quoc Pagoda is very quiet. It is more(3)                       than I expected. There are(4)                 statues and trees in the yard. I met some(5)                    there. My friends and I learnt more about the history of Ha Noi after the visit.",'rgba(164, 164, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','4','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',15,2.00);
Page11.add(Text_1);
var Text_5 = CreText('Text_5',53,285,668,158,"1. When did Tom visit Tran Quoc Pagoda? \r\n2. Where is Tran Quoc Pagoda?\r\n3. What does Tom think of Tran Quoc Pagoda?\r\n4. What did Tom and his friends learn about?",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,2.50);
Page11.add(Text_5);
var t8_0 = CreText('t8_0',403,128,96,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_0);
var t8_1 = CreText('t8_1',369,151,78,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_1);
var t8_2 = CreText('t8_2',338,175,83,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_2);
var t8_3 = CreText('t8_3',619,176,81,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_3);
var t8_4 = CreText('t8_4',363,201,70,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_4);
var t8_5 = CreText('t8_5',346,300,347,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_5);
var t8_6 = CreText('t8_6',281,327,412,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_6);
var t8_7 = CreText('t8_7',379,354,314,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_7);
var sp_8 = CreText('sp_8',628,6,36,36,"",'rgba(128, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','ID_IMAGE4.JPG',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 255, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
sp_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Listen7_Check(10);
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
SetText("","hits",helpString);
SetShowObject("","hits",1);
InvalidateObj();
  return;
}
 );
Page11.add(sp_1);
var sp_3 = CreText('sp_3',756,8,34,34,"«",'rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
sp_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page11.add(sp_3);
var hits = CreText('hits',294,47,489,26,"",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',6,'0.00','3','0',1,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(hits);
var Text_2 = CreText('Text_2',132,93,489,26,"beautiful     friends     pagoda     centre     a lot of",'rgba(159, 207, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 94, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',3,'0.00','20','0',1,'rgba(255, 255, 255, 255)','rgba(159, 207, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_2);
var t8_8 = CreText('t8_8',364,381,326,19,"",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
t8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKetQuaListen7();
  return;
}
 );
Page11.add(t8_8);
var Text_3 = CreText('Text_3',19,254,283,33,"9. Answer the questions.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page11.add(Text_3);
stage.add(Page11);
InitLacVietScript();
};
