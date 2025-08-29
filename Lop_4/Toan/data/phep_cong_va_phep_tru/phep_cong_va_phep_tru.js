folder_Resource ='data/phep_cong_va_phep_tru';
var name_keyboard="Group_1";
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var dir = "ltr";//rtl
/*
function GetString(pageName, objName) {
     var curObject = FindShape(pageName, objName);
     if (curObject === null || typeof curObject === undefined) 	return null;
     return curObject.getText();
    }*/
function    GetKeyBoNumber(){
/*	if(dir =="rtl")
	keyNewValue =  GetString("","") + GetString("",objectShowKey);
	else keyNewValue =   GetString("",objectShowKey)+ GetString("","");*/
	SetText("",objectShowKey,keyNewValue);
	SetShowObject("","btSubmit",1);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( _dir)
{
AddObjToCurentPage(name_keyboard);
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",name_keyboard);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", name_keyboard) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",name_keyboard);
if (x_to<0) x_to=1;
MoveObjectTo("",name_keyboard,x_to,y_to);
SetShowObject("",name_keyboard,1);
InvalidateObj("",name_keyboard);
keyOldValue= GetText("","");
objectShowKey= GetName("");
dir = _dir;
}

var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _a,_b,_c;

var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);	
	_cSubmit =0;
	SetShowObject("","msg",0);	
	InvalidateObj("","");
}

function  CreateQuestion()
{	   
	    _a = Random(999999-1000)+1000;
                   _b = Random(999999-1000)+1000;
	   var _d = Random(2);
	   if( _d == 0) {
		  SetText("","_d", "+");
		  SetText("","_d1", "-");
		  while(_a+_b>999999)
		  {
			  _a = Random(999999-1000)+1000;
			  _b = Random(999999-1000)+1000;
		  }
		  _c = _a+_b;
	   }
	   else{
		   SetText("","_d", "-");
		   SetText("","_d1", "+");
		   if(_a<_b)
		   {
			   var _tem = _a;
			   _a = _b;
			   _b = _tem;
		   }
		   _c = _a-_b;
	   } 
	    SetText("","_a", _a);
		SetText("","_b", _b);
		SetText("","_a1", "");
		SetText("","_b1", "");
		SetText("","_c", "");
		SetText("","_c1", "");
					
		SetFontColor("","_c",_normalColor);
		SetFontColor("","_a1",_normalColor);
		SetFontColor("","_b1",_normalColor);
		SetFontColor("","_c1",_normalColor);
		
		SetText("","_kq","");
		SetShowObject("","msg",0);	
	       SetText("","btSubmit","Đồng ý");
	       _bTestAndCreat  = false;
                        InvalidateObj("","");
}


function  ChamDiem()
{	
	var _check = true;
	if(GetText("","_d")==0){ //phép cộng
	
		if(GetText("","_c")== _c)
			SetFontColor("","_c",_trueColor);
		else {
			SetFontColor("","_c",_falseColor);
			_check = false;
		}
		
		if(GetText("","_a1")== _c)
			SetFontColor("","_a1",_trueColor);
		else {
			SetFontColor("","_a1",_falseColor);
			_check = false;
		}
		
		if(GetText("","_b1")== _a || GetText("","_b1") == _b)		
			SetFontColor("","_b1",_trueColor);		
		else {
			SetFontColor("","_b1",_falseColor);
			_check = false;
		}
		
		if(GetText("","_c1") == GetText("","_a1") - GetText("","_b1"))
			SetFontColor("","_c1",_trueColor);
		else {
			SetFontColor("","_c1",_falseColor);
		}
		
		
	}
	else{//phép tru
		{
		if(GetText("","_c")== _c)
			SetFontColor("","_c",_trueColor);
		else {
			SetFontColor("","_c",_falseColor);
			_check = false;
		}
		if(GetText("","_a1")== _c)
			SetFontColor("","_a1",_trueColor);
		else {
			SetFontColor("","_a1",_falseColor);
			_check = false;
		}
		if(GetText("","_b1")== _b)
			SetFontColor("","_b1",_trueColor);
		else {
			SetFontColor("","_b1",_falseColor);
			_check = false;
		}
		if(GetText("","_c1")== _a)
			SetFontColor("","_c1",_trueColor);
		else {
			SetFontColor("","_c1",_falseColor);
			_check = false;
		}
		
		}
		
	if(_check == true)
		{	
			_cSubmit ++;
			SetFontColor("","msg",_trueColor);		
			_score++;
			SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
			SetColorEx("","score"+_cSubmit,_trueColor);
			SetText("","score"+_cSubmit,_score);
			PlaySound("sound_good");
					}
		else {//sai
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_not");
			SetText("","msg","Xin lỗi, không chính xác");
			_score--;	
			SetColorEx("","score"+_cSubmit ,"#dddddd");
			SetText("","score"+_cSubmit ,"");
			_cSubmit --;
		 }	
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	_bTestAndCreat  = true;
	SetText("","btSubmit","Câu tiếp...");	
	SetShowObject("","btSubmit",1);	
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
}
function Page_1()
{
SetShowObject("","Group_1",0);
SetShowObject("","btSubmit",0);	
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
 width: 560,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,560,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',2,2,558,50,"Tính rồi thử lại",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _c = CreText('_c',47,178,138,42,"44",'#ffffff','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum("rtl");
  return;
}
 );
var score1 = CreText('score1',111,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',148,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',185,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',222,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',259,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',296,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',333,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',370,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',407,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',448,40,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',214,237,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var _a = CreText('_a',47,93,138,39,"38726",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _b = CreText('_b',47,136,138,39,"40954",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _a1 = CreText('_a1',374,93,138,39,"999999",'#ffffff','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum();
  return;
}
 );
var _b1 = CreText('_b1',374,136,138,39,"40954",'#ffffff','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum();
  return;
}
 );
var _c1 = CreText('_c1',374,178,138,42,"44",'#ffffff','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum("rtl");
  return;
}
 );
var Text_5 = CreText('Text_5',214,91,125,29,"Thử lại:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _d = CreText('_d',14,113,35,39,"+",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _d1 = CreText('_d1',344,113,35,39,"-",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',29,297,496,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var clear_one = CreText('clear_one',33,2,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
	keyNewValue =leftStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
  return;
}
 );
var clear_all = CreText('clear_all',60,2,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var ok = CreText('ok',42,88,45,22,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#88c4ff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',2,2,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',2,88,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',60,68,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',33,68,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',2,68,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',60,46,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',33,46,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',2,46,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',60,24,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',33,24,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',2,24,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:112});
Group_1.add(clear_one,clear_all,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
Page_1.add(Page_1_Backrounnd,Text_1,_c,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,_a,_b,_a1,_b1,_c1,Text_5,_d,_d1,msg,clear_one,clear_all,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1,Group_1);
stage.add(Page_1);
InitLacVietScript();
};
