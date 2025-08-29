folder_Resource ='data/be_hoc_chu';
var a_chuVN=["a","ă","â","b","c","d","đ","e","ê","g","h","i","k","l","m","n","o","ô","ơ","p","q","r","s","t","u","ư","v","x","y"];
var a_spVN=["a","ă","â","bờ","cờ","dờ","đ","e","ê","gờ","hờ","i","k","l","m","n","o","ô","ơ","pờ","q","r","sờ","tờ","u","ư","v","xờ","y"];
var a_chuEN=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","","",""];
var lang="VN";
var m_index=0;
var m_count=29;
function  ReadKey( i)
{	
	var key ="";
	if(lang == "VN")
	{
		Speak(  a_spVN[i],"VN");
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
	SetMoveView("","Group_1",2);
	SetCursor("","Group_1","pointer");
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
		if(lang=="VN")
		{
		SetText("","text_chu",toUpperCase(a_chuVN[ar[k]])+ a_chuVN[ar[k]]);
		Speak( a_spVN[ar[k]],"VN");
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
		SetText("","cau_dung",m_caudung + " câu đúng");
		SetText("","cau_sai",m_causai + " câu sai");
		//UpdateScore(m_caudung);
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var _0 = CreText('_0',4,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_0);
var _1 = CreText('_1',61,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_1);
var _2 = CreText('_2',118,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_2);
var _3 = CreText('_3',175,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_3);
var _4 = CreText('_4',232,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_4);
var _5 = CreText('_5',289,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_5);
var _6 = CreText('_6',346,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_6);
var _7 = CreText('_7',403,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_7);
var _8 = CreText('_8',460,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_8);
var _9 = CreText('_9',517,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_9);
var _10 = CreText('_10',576,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_10);
var text_so = CreText('text_so',127,57,370,231,"Aa",'#00000000','#ffffff','#ffffff','#ffffff','',150,'Comic Sans MS','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#ffffff','0','0','4','4',0,0,'#00000000',0,1.50);
text_so.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN") Speak( a_spVN[m_index],"VN");
	else	Speak(a_chuEN[m_index],"EN");
}
 );
Page_1.add(text_so);
var _11 = CreText('_11',635,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_11);
var _12 = CreText('_12',692,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_12);
var _13 = CreText('_13',749,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_13);
var _14 = CreText('_14',806,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_14);
var _15 = CreText('_15',863,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_15);
var _16 = CreText('_16',920,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_16);
var _17 = CreText('_17',977,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_17);
var _18 = CreText('_18',1034,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_18);
var _19 = CreText('_19',1091,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_19);
var _20 = CreText('_20',1148,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_20);
var _21 = CreText('_21',1207,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_21);
var _22 = CreText('_22',1267,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_22);
var _23 = CreText('_23',1324,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_23);
var _24 = CreText('_24',1381,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_24);
var _25 = CreText('_25',1438,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_25);
var _26 = CreText('_26',1495,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_26);
var _27 = CreText('_27',1552,402,50,50,"0",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_27);
var _28 = CreText('_28',1609,402,50,50,"100",'#00000000','#ffffff','#ffff00','#ffffff','',36,'Comic Sans MS','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_28);
var Image_1 = CreText('Image_1',566,332,58,38,'','#00000000','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Image_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:1659,height:54});
Group_1.add(_0);
Group_1.add(_1);
Group_1.add(_2);
Group_1.add(_3);
Group_1.add(_4);
Group_1.add(_5);
Group_1.add(_6);
Group_1.add(_7);
Group_1.add(_8);
Group_1.add(_9);
Group_1.add(_10);
Group_1.add(_11);
Group_1.add(_12);
Group_1.add(_13);
Group_1.add(_14);
Group_1.add(_15);
Group_1.add(_16);
Group_1.add(_17);
Group_1.add(_18);
Group_1.add(_19);
Group_1.add(_20);
Group_1.add(_21);
Group_1.add(_22);
Group_1.add(_23);
Group_1.add(_24);
Group_1.add(_25);
Group_1.add(_26);
Group_1.add(_27);
Group_1.add(_28);
Page_1.add(Group_1);
var chang_lang = CreText('chang_lang',588,5,40,28,"VN",'#ff0000','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff0000','0','0','#ffffff','0','0','4','1',0,0,'#00000000',0,1.50);
chang_lang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(chang_lang);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var so_0 = CreText('so_0',169,71,155,101,"1",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_0);
var so_1 = CreText('so_1',335,73,155,93,"9",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_1);
var so_2 = CreText('so_2',169,181,155,93,"5",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_2);
var so_3 = CreText('so_3',335,176,155,99,"7",'#00000000','#ffffff','#ffffff','#ffffff','',72,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
Page_2.add(so_3);
var text_chu = CreText('text_chu',192,276,271,52,"one",'#00000000','#ffffff','#ffffff','#ffffff','',28,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlayWave("","","ID_S"+a_so[index]);
  return;
}
 );
Page_2.add(text_chu);
var so_cau = CreText('so_cau',266,15,92,27,"2/10",'#388e8e','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#388e8e','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(so_cau);
var back = CreText('back',19,412,66,41,'','#00000000','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(back);
var tong_ket = CreText('tong_ket',-6,1,240,22,"Tổng kết:",'#ffd700','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',3,'0.00','0','0',1,'#ffff00','#ffffe0','4','1','#00000000','0','0','4','0',2,2,'#000000',0,1.50);
Page_2.add(tong_ket);
var changLang = CreText('changLang',596,6,40,28,"VN",'#ff0000','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff0000','0','0','#ffffff','0','0','4','1',0,0,'#00000000',0,1.50);
changLang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
NewTest();
  return;
}
 );
Page_2.add(changLang);
var Text_1 = CreText('Text_1',-6,23,240,134,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffff00','#e6e6fa','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(Text_1);
var cau_dung = CreText('cau_dung',36,36,160,35,"6",'#00000000','#ffffff','#005500','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(cau_dung);
var cau_sai = CreText('cau_sai',36,79,158,35,"6",'#00000000','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(cau_sai);
var Text_2 = CreText('Text_2',77,119,87,29,"OK",'#388e8e','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#ffff00','#7fffd4','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewGame();
  return;
}
 );
Page_2.add(Text_2);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:244,height:160});
Group_1.add(Text_1);
Group_1.add(tong_ket);
Group_1.add(cau_dung);
Group_1.add(cau_sai);
Group_1.add(Text_2);
Page_2.add(Group_1);
stage.add(Page_2);
InitLacVietScript();
};
