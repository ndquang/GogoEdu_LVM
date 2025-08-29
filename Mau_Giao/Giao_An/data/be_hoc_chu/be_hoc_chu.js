folder_Resource ='data/be_hoc_chu';
var a_chuVN=["a","ă","â","b","c","d","đ","e","ê","g","h","i","k","l","m","n","o","ô","ơ","p","q","r","s","t","u","ư","v","x","y"];
var a_spVN=["a","á","ớ","bờ","cờ","dờ","đờ","e","ê","gờ","hờ","i","k","l","mờ","nờ","o","ô","ơ","pờ","q","rờ","sờ","tờ","u","ư","vờ","xờ","y dài"];
var a_chuEN=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","","",""];
var lang="VN";
var m_index=0;
var m_count=29;
function  ReadKey( i)
{	
	var key ="";
	if(lang == "VN")
	{
		Speak( "Chữ " +a_spVN[i],"VN");
		key =  a_chuVN[i];
	}
	else
	{ 
		Speak(a_chuEN[i],"EN");
		key = a_chuEN[i];

	}
	SetText("","text_so",toUpperCase(key)+key);
	m_index= i;
	InvalidateObj("","");
}
function  ClickNumber(){
	
	var name= GetName("");
            name= replaceStr(name,"_",'');
	ReadKey(name);

}
function  InitGame(){
	PlayWave("","","ID_START");
	for(var i=0;i< 29;i++)
	{
	if(lang=="VN")
	SetText("","_"+i,a_chuVN[i]);
	else 
	SetText("","_"+i,a_chuEN[i]);
	}		
	ReadKey(m_index);
}
function  ChangeLang(){
		PlayWave("","","ID_CLICK");
	if(lang=="VN")
	{
      	lang	= "EN";
		SetText("","","EN");
 		m_count=26;
	}
	else {
		lang	= "VN";
		SetText("","","VN");
 		m_count=29;
	}
	InitGame();
}
/*---------------Page 2 Text-------------------------*/
var index= 0;
var object_true="";
var m_caudung=0;
var m_causai=0;
var m_ban= false;
var kqIndex = 0; 
function  NewTest(){

   var ar=[0,0,0,0];
   var Count = 0;
   for (var i = 0; i < 4 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_count);
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
	var kq= Random(4);
	for(var k=0;k<4;k++)
		{
	   if(lang=="VN")
	   SetText("","so_"+k, a_chuVN[ar[k]]);
	   else SetText("","so_"+k,a_chuEN[ar[k]]);
	   SetColor("","so_"+k,-1,-1,-1);
	   if(k==kq){
		 object_true= "so_"+k;
		 kqIndex = ar[k];
		if(lang=="VN")
		{
		SetText("","text_chu",toUpperCase(a_chuVN[ar[k]])+ a_chuVN[ar[k]]);
		Speak( "Chữ "+ a_spVN[ar[k]],"VN");
		}
		else
		{
		SetText("","text_chu", toUpperCase(a_chuEN[ar[k]])+a_chuEN[ar[k]]);
		Speak(a_chuEN[ar[k]],"EN");
		}
		}
	}
	m_ban=false;
	InvalidateObj("","");
}
function  NewGame(){
	
	MoveObjectTo("","Group_1",0,0,100,20,7);
	SetShowObject("","Group_1",0);
	m_caudung=0;
	m_causai=0;
	SetText("","so_cau","0/10");
	GetVer();
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
		SetText("","cau_dung",m_caudung + " câu đúng");
		SetText("","cau_sai",m_causai + " câu sai");
		UpdateScore(m_caudung);
		SetShowObject("","Group_1",1);
		InvalidateObj("","");
		MoveObjectTo("","Group_1",200,150,50,2,7);
	}
	else Delay("NewTest()",3000);

}
function  ClickCheck(){

	if(m_ban==false){
		var tt= GetName("");
	SetColor("","",0,0,0,"ID_IMAGE_FALSE");
	Delay("KiemTra('"+tt+"')",1000);
	m_ban=true;
	}

}
function Page_1()
{
InitGame();
  return;
}
function Page_1_OnTimer()
{
  return;
}

function Page_2()
{
 NewGame();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var _0 = CreText('_0',15,49,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _1 = CreText('_1',72,49,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _2 = CreText('_2',16,108,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _3 = CreText('_3',72,108,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _4 = CreText('_4',15,167,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _5 = CreText('_5',72,167,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _6 = CreText('_6',15,226,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _7 = CreText('_7',72,226,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _8 = CreText('_8',15,286,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _9 = CreText('_9',72,286,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _10 = CreText('_10',520,53,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var text_so = CreText('text_so',133,88,370,254,"Aa",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',150,'Comic Sans MS','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','4',0,0,'rgba(0,0,0,0)',0,1.50);
text_so.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN") Speak("Chữ " +a_spVN[m_index],"VN");
	else	Speak(a_chuEN[m_index],"EN");
}
 );
var _11 = CreText('_11',581,53,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _12 = CreText('_12',520,112,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _13 = CreText('_13',581,112,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _14 = CreText('_14',520,171,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _15 = CreText('_15',581,171,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _16 = CreText('_16',520,230,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','0','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _17 = CreText('_17',581,230,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _18 = CreText('_18',520,290,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _19 = CreText('_19',581,290,50,50,"a",'rgba(255,255,255,0.67)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _20 = CreText('_20',74,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _21 = CreText('_21',133,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _22 = CreText('_22',192,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _23 = CreText('_23',251,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _24 = CreText('_24',310,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _25 = CreText('_25',369,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _26 = CreText('_26',428,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _27 = CreText('_27',487,398,44,50,"a",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var _28 = CreText('_28',547,397,44,50,"100",'rgba(255,255,255,0.89)','#ffffff','#008080','#ffffff','',36,'Comic Sans MS','Normal','center','middle',3,'0.00','5','0',1,'#008080','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
var Image_1 = CreText('Image_1',542,4,58,38,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var chang_lang = CreText('chang_lang',285,7,72,28,"VN",'#ff0000','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff0000','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
chang_lang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(Page1_Backrounnd,_0,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,text_so,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27,_28,Image_1,chang_lang);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var so_0 = CreText('so_0',169,71,155,101,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var so_1 = CreText('so_1',335,73,155,93,"9",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var so_2 = CreText('so_2',169,181,155,93,"5",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var so_3 = CreText('so_3',335,176,155,99,"7",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var text_chu = CreText('text_chu',192,276,271,52,"one",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN")
		{
  		  Speak( "Chữ "+ a_spVN[kqIndex],"VN");
		}
		else
		{
		Speak(a_chuEN[kqIndex],"EN");
		}

  return;
}
 );
var so_cau = CreText('so_cau',266,15,92,27,"2/10",'#388e8e','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#388e8e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var back = CreText('back',19,412,66,41,'','rgba(0,0,0,0)','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var tong_ket = CreText('tong_ket',0,-3,240,22,"Tổng kết:",'#ffd700','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',3,'0.00','0','0',1,'#ffff00','#ffffe0','4','1','rgba(0,0,0,0)','0','0','4','0',2,2,'#000000',0,1.50);
var changLang = CreText('changLang',596,6,40,28,"VN",'#ff0000','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff0000','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
changLang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
NewTest();
  return;
}
 );
var Text_1 = CreText('Text_1',0,19,240,134,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffff00','#e6e6fa','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',42,32,160,35,"6",'rgba(0,0,0,0)','#ffffff','#005500','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',42,75,158,35,"6",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_ok = CreText('bt_ok',83,115,87,29,"OK",'#388e8e','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#ffff00','#7fffd4','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewGame();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:244,height:160});
Group_1.add(Text_1,cau_sai,cau_dung,tong_ket,bt_ok);
Page_2.add(Page2_Backrounnd,so_0,so_1,so_2,so_3,text_chu,so_cau,back,changLang,Group_1);
stage.add(Page_2);
InitLacVietScript();
};
