folder_Resource ='data/may_tinh_bo_tui';
var bOF = false;
var bCal = false;
var strCal="";
var bSign = false;
var curKey= "";
function   GetKeyBoNumber(){
	if(!bOF)
	return;
	var curtext = GetText("","");
	var textScreen = "";

	var curObject = FindShape("","screen");
       	textScreen = curObject.getText();
	curKey = curtext;                  	
	if(textScreen == 0 || bSign == true)
		textScreen ="";
	if(bCal == true)
	{
		textScreen ="";
		SetText("","pheptoan","");
		strCal = "";
	}	
	var keyNewValue = trimStr(textScreen)  + trimStr(curtext );
	SetText("","screen",keyNewValue);	
	var strNew = strCal + keyNewValue;
	SetText("","pheptoan",strNew);

	bCal = false;
	bSign = false;
	InvalidateObj("","");
}
function  ClickSign()
{
	var curtext = GetText("","");
	var textScreen = GetText("","screen");
	var textChange = "";
	if(bCal == true)
	{
		textChange = textScreen+curtext  ;
	}
	else if(bSign==true)
	{
		var textSmall = GetText("","pheptoan");
		textChange = leftStr(textSmall ,length(textSmall)-1) + curtext ;		
	}
	else textChange = GetText("","pheptoan")+curtext ;

	SetText("","pheptoan",textChange);
	strCal = textChange;
	InvalidateObj("","");
	bSign = true;
	bCal  = false;

}

function  InitCalculatetor()
{
bOF = false;
SetText("","screen","");
SetText("","pheptoan","");
}
function  Calculator()
{
var textAll = GetText("","pheptoan") ;
textAll= replaceStr(textAll,"x","*");
textAll= replaceStr(textAll,"÷","/");
textAll= replaceStr(textAll,",",".");
var re = ExecAsThread(textAll);
SetText("","screen",re );
bCal = true;
InvalidateObj("","");
  return;
}
function  PercentCalculator()
{
	var textScreen = GetText("","screen");
	var re = textScreen/100;
	SetText("","screen",re);
	var strNew = strCal + re;
	SetText("","pheptoan",strNew);
	InvalidateObj("","");
}

/*-----------------End Canculator-----------------------*/
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
var aPhep = ["+","-","*","/"];
var arrayNumber = [0,0,0,0];
function  InitScore()
{	
	_score =GetVer();	
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("", "screen", "number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}
function  genRand( min,  max,  decimalPlaces) {  
    var rand = Math.random() * (max - min) + min;
    var power = pow(10, decimalPlaces);
    return floor(rand*power) / power;
}
function  CreateQuestion()
{
           var cnt  = Random(2)+2;
          var strText="1-2";  
       var re = ExecAsThread(strText );
      var dc1 =  Random(3);
       while(re <0)
	{
		strText="";  
		var persen = Random(5);			
        		for(var i=0;i<cnt-1 ;i++)
		{
			dc1 =  Random(3);
			arrayNumber[i] =  genRand(0 ,200, dc1);
			strText = strText + arrayNumber[i] +" "+ aPhep[Random(4)]  +" ";
		}
		if(persen==4)
		arrayNumber[cnt -1] = (Random(99)+1)+"%";
		else
		arrayNumber[cnt -1] = genRand(0 ,200, Random(3));	
	
		strText = strText  + arrayNumber[cnt -1];
		var strtem = replaceStr(strText ,"%","/100");
		re = ExecAsThread(strtem);
   	 }

	var decimal = trimStr(re).split(".");	
	 if(Length(decimal)>1)
	{
		if(Length(decimal[1])>5)
		 arrayKq[0]= parseFloat(re.toFixed(5));
		else arrayKq[0]= re;
	}
	else arrayKq[0]= re;
		
	strText = replaceStr(strText ,"*","x");
	strText = replaceStr(strText ,"/","÷");
	
	SetText("","so_0",strText + " = ");	
    	SetText("","in_0","");
	SetFontColor("","in_0","#000000");
	AllowEditText("","in_0",1);			
               SetText("","check","Submit");			
               _bTestAndCreat = false;	          
	SetText("","msg","");
	SetShowObject("","msg",0);
	SetShowObject("","score",0);
   	InvalidateObj("","");		
}


function  ChamDiem()
{	
   if(GetText("","in_0")==arrayKq [0])	
	{	
		SetFontColor("","in_0","#00ff00");	
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	}
	else 
	{
		SetFontColor("","in_0","#ff0000");
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.\r\n"+arrayKq[0]);
		PlaySound("sound_not");		
		_score--;	
	 }
	SetShowObject("","msg",1);
	SetShowObject("","score",1);
	AllowEditText("","in_0",0);	
	if(_score<0)
	_score = 0;
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	InvalidateObj("","");
}
function Page_1()
{
InitCalculatetor();
InitScore();
CreateQuestion();
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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',31,167,377,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#000000','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',9,45,452,30,"Sử dụng máy tính bỏ túi để tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',1,0,638,41,"Máy tính bỏ túi(Calculator)",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',474,79,116,28,"Submit",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var score = CreText('score',347,184,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',317,79,143,28,"",'#ddeeff','#ddeeff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ddeeff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',8,79,301,28,"4",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bg_key = CreText('bg_key',424,163,184,260,"0",'#0080c0','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',8,'#00ffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',466,391,29,25,"0",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_all = CreText('clear_all',432,391,29,25,"CE",'#eeeeee','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
	SetText("","screen","0");
SetText("","pheptoan","");
	InvalidateObj("","");;
  return;
}
 );
var _1 = CreText('_1',466,357,29,25,"1",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',500,357,29,25,"2",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',534,357,29,25,"3",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',466,325,29,25,"4",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',500,325,29,25,"5",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',534,325,29,25,"6",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',534,293,29,25,"9",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',500,293,29,25,"8",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',466,293,29,25,"7",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',570,391,29,25,"+",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickSign();
  return;
}
 );
var dau_bang = CreText('dau_bang',570,357,29,25,"-",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickSign();
  return;
}
 );
var dau_be = CreText('dau_be',570,325,29,25,"x",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickSign();
  return;
}
 );
var chia = CreText('chia',570,293,29,25,"÷",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
chia.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickSign();
  return;
}
 );
var bang = CreText('bang',534,391,29,25,"=",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Calculator();
}
 );
var cang = CreText('cang',432,357,29,25," √",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','bottom',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
var cham = CreText('cham',500,391,29,25,".",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
cham.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var phan_tram = CreText('phan_tram',432,325,29,25,"%",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
phan_tram.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PercentCalculator();
  return;
}
 );
var cong_tr = CreText('cong_tr',432,293,29,25,"±",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
cong_tr.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var cur = GetText("","screen")*-1;
SetText("","screen",cur);
InvalidateObj("","");
  return;
}
 );
var mm = CreText('mm',533,264,29,21,"M-",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
var ms = CreText('ms',499,264,29,21,"M+",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
var rcm = CreText('rcm',465,264,29,21,"R-CM",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
var off = CreText('off',569,264,29,21,"OFF",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
off.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bOF = false;
SetText("","screen","");
SetText("","pheptoan","");
InvalidateObj("","");
  return;
}
 );
var on = CreText('on',431,264,29,21,"ON/C",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
on.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bOF = true;
SetText("","screen","0");
InvalidateObj("","");
  return;
}
 );
var screen = CreText('screen',433,178,163,74,"0123456789",'#c0c0c0','#ffffff','#000000','#ffffff','',24,'Arial','Bold','right','bottom',3,'0.00','5','0',3,'#ffffff','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',3,1.50);
var pheptoan = CreText('pheptoan',437,178,153,20,"CASIO",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',8,'Arial','Bold','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',20,111,611,39,"Chú ý: Nếu chữ số thập phân lớn hơn 5 chữ số thì làm tròn đến 5 chữ số",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,msg,cau_hoi,title,check,score,in_0,so_0,bg_key,_0,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,chia,bang,cang,cham,phan_tram,cong_tr,mm,ms,rcm,off,on,screen,pheptoan,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
