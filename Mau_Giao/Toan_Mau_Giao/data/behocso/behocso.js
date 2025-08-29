folder_Resource ='data/behocso';
var a_chuVN=["Số Không","Số Một","Số Hai","Số Ba","Số Bốn","Số Năm","Số Sáu","Số Bảy","Số Tám","Số Chín","Số Mười","Mười một","Mười hai","Mười ba","Mười bốn","Mười lăm","Mười sáu","Mười bảy","Mười tám","Mười chín","Hai mươi","Ba mươi","Bốn mươi","Năm mươi","Sáu mươi","Bảy mươi","Tám mươi","Chín mươi","Một trăm","Một nghìn","Một triệu"];
var a_so=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000,1000000];
var a_chuEN=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","One hundred","One thousand","One million"];
var lang="VN";
var m_index=0;
function  DocSo( index)
{
	var m_text = "";
            SetText("","text_so",a_so[index]);
	if(lang=="VN"){
	m_text=a_chuVN[index];
	SetText("","text_chu",m_text);
	PlayWave("","","ID_S"+a_so[index]);
	}
	else {
	m_text= a_chuEN[index];
	SetText("","text_chu",m_text);
	PlayWave("","","ID_"+a_so[index]);
	}
	InvalidateObj("","");
}
function  ClickNumber(){
	
	var name= GetName("");
             name= replaceStr(name,"_",'');
	DocSo(name);
	m_index= Number(name);
}

function  InitGame(){
	PlayWave("","","ID_START");
	for(var i=0;i<31;i++){
	SetText("","_"+i,a_so[i]);
		}
	SetMoveView("","Group_1",2);
	SetCursor("","Group_1","pointer");
}
function  ChangeLang(){
	PlayWave("","","ID_CLICK");
	if(lang=="VN")
	{
      	lang	= "EN";
		SetRsc("","lang_vn","ID_VN_OFF");
		SetRsc("","lang_en","ID_EN_ON");
		SetText("","text_chu",a_chuEN[m_index]);

	}
	else {
		lang	= "VN";
		SetRsc("","lang_vn","ID_VN_ON");
		SetRsc("","lang_en","ID_EN_OFF");
		SetText("","text_chu",a_chuVN[m_index]);
	}
	InvalidateObj("","");
}
/*---------------Page 2 Text-------------------------*/

var index= 0;
var object_true="";
var m_caudung=0;
var m_causai=0;
var m_ban= false;
function  NewTest(){
       var ar=[0,0,0,0];
   var Count = 0;
   for (var i = 0; i < 4 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(31);
    for (var j = 0 ; j < Count;j++)
    { 
      if (ar[j] == iNN)
       {
         break;
       }
     }
    if (j >= Count)
       bb = false;
    }
    ar[Count] =iNN;
    Count++;
  } // tao so ngau nhien khong trung
	SetShowObject("","Group_1",0);
	var kq=  Random(4);
	for(var k=0;k<4;k++){
	   SetText("","so_"+k, a_so[ar[k]]);
	   SetColor("","so_"+k,-1,-1,-1);
	   if(k==kq){
		 kq= a_so[ar[k]];
		 index=ar[k];
		 object_true= "so_"+k;
		}
	}
	if(lang=="VN"){
	SetText("","text_chu", a_chuVN[index]);
	PlayWave("","","ID_S"+a_so[index]);
	}
	else 	{
		SetText("","text_chu", a_chuEN[index]);
		PlayWave("","","ID_"+a_so[index]);
	}
	InvalidateObj("","");
	m_ban= false;

}
function  NewGame(){
	
	MoveObjectTo("","Group_1",0,0,100,20,7);
	SetShowObject("","Group_1",0);
	m_caudung=0;
	m_causai=0;
	SetText("","so_cau","0/10");
	//GetVer();
	NewTest();
}
function  KiemTra( text){
	if(text==object_true){
		PlayWave("","","ID_TEST_TRUE");
		SetColor("","","#","#","#","ID_IMAGE_TRUE");
		m_caudung++;
		}
	else {
		PlayWave("","","ID_TEST_FALSE");
		SetColor("",object_true,"#","#","#","ID_IMAGE_TRUE");
		m_causai++;
	}
	var tong_so= m_caudung+m_causai;
	SetText("","so_cau", tong_so +"/"+10 );
	InvalidateObj("","");
	
	if(tong_so==10)
	{
		//UpdateScore(m_caudung);
		SetText("","cau_dung",m_caudung);
		SetText("","cau_sai",m_causai);
		SetShowObject("","Group_1",1);
		MoveObjectTo("","Group_1",200,150,50,2,7);
	}
	else Delay("NewTest()",3000);
}
function  ClickCheck(){
	if(m_ban==false){
	var tt= GetName("");
	SetColor("","",0,0,0,"ID_IMAGE_FALSE");
	Delay("KiemTra('"+tt+"')",1000);
	m_ban= true;
	}
}
function Page_1()
{
InitGame();
  return;
}

function Page_2()
{
for(var i=0;i<4;i++)
NewTest();
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var _0 = CreText('_0',11,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_0);
var _1 = CreText('_1',56,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_1);
var _2 = CreText('_2',101,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_2);
var _3 = CreText('_3',146,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_3);
var _4 = CreText('_4',191,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_4);
var _5 = CreText('_5',236,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_5);
var _6 = CreText('_6',281,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_6);
var _7 = CreText('_7',326,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_7);
var _8 = CreText('_8',371,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_8);
var _9 = CreText('_9',416,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_9);
var _10 = CreText('_10',461,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_10);
var text_so = CreText('text_so',45,19,544,305,"0",'#00000000','#ffffff','#ffffff','#ffffff','',200,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','1','1','4','1',0,0,'#00000000',0,1.50);
text_so.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var n= GetText("","text_chu");
var so = GetText("","");
if(lang=="VN")
PlayWave("","","ID_S"+so);
else SpeakEN("","",n);
  return;
}
 );
Page_1.add(text_so);
var _11 = CreText('_11',506,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_11);
var _12 = CreText('_12',551,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_12);
var _13 = CreText('_13',603,379,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_13);
var _14 = CreText('_14',11,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_14);
var _15 = CreText('_15',56,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_15);
var _16 = CreText('_16',101,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_16);
var _17 = CreText('_17',146,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_17);
var _18 = CreText('_18',191,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_18);
var _19 = CreText('_19',236,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_19);
var _20 = CreText('_20',281,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_20);
var _21 = CreText('_21',326,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_21);
var _22 = CreText('_22',371,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_22);
var _23 = CreText('_23',416,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_23);
var _24 = CreText('_24',461,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_24);
var _25 = CreText('_25',506,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_25);
var _26 = CreText('_26',551,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_26);
var _27 = CreText('_27',602,411,34,25,"0",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_27);
var _28 = CreText('_28',154,445,78,25,"100",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_28);
var _29 = CreText('_29',243,445,111,25,"1000",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_29);
var _30 = CreText('_30',363,445,119,25,"1000000",'#00000000','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_30);
var text_chu = CreText('text_chu',111,280,392,40,"Số 0",'#00000000','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var n= GetText("","text_chu");
var so= GetText("","text_so");
if(lang=="VN")
PlayWave("","","ID_S"+so);
else PlayWave("","","ID_"+so);
  return;
}

 );
Page_1.add(text_chu);
var lang_vn = CreText('lang_vn',528,14,35,35,'','#00000000','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(lang_vn);
var lang_en = CreText('lang_en',575,16,35,35,'','#00000000','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(lang_en);
var Image_1 = CreText('Image_1',550,311,75,54,'','#00000000','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','30','30',0,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Image_1);
var doctiep = CreText('doctiep',435,58,67,53,"►",'#00000000','#ffffff','#ffffff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#00000000','#008080','0','1','#c0c0c0','0','0','4','1',0,0,'#00000000',0,1.50);
doctiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
m_index = m_index+1;
if(m_index>30) m_index=30;
DocSo(m_index);
  return;
}
 );
Page_1.add(doctiep);
var doclui = CreText('doclui',139,52,55,66,"◄",'#00000000','#ffffff','#ffffff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#00000000','#008080','0','0','#008080','0','0','4','1',0,0,'#00000000',0,1.50);
doclui.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
m_index=m_index-1;
if(m_index<0) m_index=0;
DocSo(m_index);
  return;
}
 );
Page_1.add(doclui);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var lang_vn = CreText('lang_vn',524,22,35,35,'','#00000000','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_2.add(lang_vn);
var lang_en = CreText('lang_en',571,22,35,35,'','#00000000','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_2.add(lang_en);
var so_0 = CreText('so_0',169,71,155,93,"1",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_0);
var so_1 = CreText('so_1',335,73,155,93,"9",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_1);
var so_2 = CreText('so_2',169,181,155,93,"5",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_2);
var so_3 = CreText('so_3',335,182,155,93,"7",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_3);
var text_chu = CreText('text_chu',192,281,271,38,"one",'#00000000','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN")
PlayWave("","","ID_S"+a_so[index]);
else PlayWave("","","ID_"+a_so[index]);
  return;
}
 );
Page_2.add(text_chu);
var so_cau = CreText('so_cau',266,15,92,27,"2/10",'#388e8e','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#388e8e','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(so_cau);
var tong_ket = CreText('tong_ket',25,1,218,134,"Tổng kết:",'#ffff95','#ffffff','#000000','#ffffff','',24,'Arial','Underline','center','top',3,'0.00','12','0',2,'#282828','#ffff95','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tong_ket.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page_2.add(tong_ket);
var cau_sai = CreText('cau_sai',69,77,53,48,"6",'#00000000','#ffffff','#ff0000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(cau_sai);
var cau_dung = CreText('cau_dung',63,30,63,46,"6",'#00000000','#ffffff','#005500','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(cau_dung);
var Image_2 = CreText('Image_2',24,412,60,36,'','#00000000','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Image_2);
var Image_3 = CreText('Image_3',146,26,43,41,'','#00000000','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_3);
var Image_4 = CreText('Image_4',147,77,40,38,'','#00000000','','','','ID_IMAGE7.PNG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_4);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:222,height:138});
Group_1.add(tong_ket);
Group_1.add(cau_sai);
Group_1.add(cau_dung);
Group_1.add(Image_3);
Group_1.add(Image_4);
Page_2.add(Group_1);
stage.add(Page_2);
InitLacVietScript();
};
