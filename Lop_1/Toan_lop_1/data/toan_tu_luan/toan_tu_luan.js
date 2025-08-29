folder_Resource ='data/toan_tu_luan';
var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
var arKq=[0,0,0,0,0];
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}
var m_limit=11;
function TaoBai1B()
{
	 for(var i=5;i<11;i++)	
	{
		var a= Random(m_limit);
		var b= Random(m_limit);
		var c= Random(m_limit);
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			while(a+b>10)
			{
				a= Random(m_limit);
				b= Random(m_limit);
			}
			da=a+b;
			phep= Random(2);
			if(phep==0){
				c= Random(m_limit-da);
				SetText("","bai_"+i,a+" + "+b + " + "+ c+" = ");
				arKq[i]=da+c;
			}
			else{
		 	c= Random(da);
			SetText("","bai_"+i,a+" + "+b + " - "+ c + " = ");
			arKq[i]=da-c;
			}
			}
		else //-
			{
			if(a<b){
			var ta=a;
			a=b;
			b=ta;
			}
			da=a-b;
			phep= Random(2);
			if(phep==0){
				c= Random(m_limit-da);
				SetText("","bai_"+i,a+" - "+b + " + "+ c+" = ");
				arKq[i]=da+c;
			}
			else{
		 	c= Random(da);
			SetText("","bai_"+i,a+" - "+b + " - "+ c + " = ");
			arKq[i]=da-c;
			}
			}
		SetText("","kq_"+i,"");
		SetColor("","kq_"+i,-1,-1,-1);

	}
}
function TaoBai()
{
SetShowObject("","thong_bao_diem",0);
SetShowObject("","cham_diem",1);
SetShowObject("","begin",0);
GetVer();
  for(var i=0;i<5;i++)	
	{
		var a= Random(m_limit);
		var b= Random(m_limit);
		var phep= Random(2);
		SetText("","ds_"+i,"");
		var da=0;
		if(phep==0){ //+
			while(a+b>10)
			{
				a= Random(m_limit);
				b= Random(m_limit);
			}
			da=a+b;
			SetText("","bai_"+i,a+"\n"+b);
			SetText("","dau_"+i,"+");

			}
		else //-
			{
			if(a<b){
			var ta=a;
			a=b;
			b=ta;
			}
			da=a-b;
			SetText("","bai_"+i,a+"\n"+b);
			SetText("","dau_"+i,"-");
			}
		SetText("","kq_"+i,"");
		SetColor("","kq_"+i,-1,-1,-1);
		arKq[i]=da;
	}
//
TaoBai1B();
 InvalidateObj("","");
}
function ChamDiemClick()
{
var m_diem=0;
for(var i=0; i< 11; i++)
		{
		if(arKq[i] == GetText("","kq_"+i))
		{
		   	m_diem=m_diem+1;
		}
		else {
			SetColor("","kq_"+i,"#ff0000");
		}
	}
var diem = m_diem*10 / 11;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","thong_bao_diem",1);
SetShowObject("","begin",1);
SetShowObject("","",0);
InvalidateObj("","");
UpdateScore(diem);
if(diem==10){
	 PlayWave("","","ID_SOUND_DUNG");
	}
else{
      PlayWave("","","ID_SOUND_SAI");
	}
  return;
}
function Page_4()
{
SetCursor("","Group_1","pointer");
PlaySound("ID_SOUND_HOME");
SetShowObject("","thong_bao_diem",0);
SetShowObject("","Group_1",0);
TaoBai();
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

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,640,480,'','#8080ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8080ff','0','0','0','','0','0','0','0',0,0,'');
var Drawtext_2 = CreText('Draw text_2',41,31,562,376,"",'#004040','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_0 = CreText('bai_0',117,89,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',205,89,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',300,89,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',387,89,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',480,89,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',117,165,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_1 = CreText('kq_1',205,165,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_2 = CreText('kq_2',300,165,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_3 = CreText('kq_3',387,165,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_4 = CreText('kq_4',480,165,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Text_tieu_de = CreText('Text_tieu_de',65,40,235,49,"1. Tính :\r\na).",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Text_tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  var name= GetText("","Text_tieu_de");
  if(name=="1. Tính :")
      PlayWave("","","ID_SOUND_Cau_1","");
  else if(name=="2. Tính nhẩm :")
     PlayWave("","","ID_SOUND_Cau_2","");
  else if(name=="3. Bài toán :")
     PlayWave("","","ID_SOUND_Cau_3","");
  else if(name=="4. Điền dấu thích hợp vào ô trống :")
     PlayWave("","","ID_SOUND_Cau_4","");
  return;
}



 );
var dau_0 = CreText('dau_0',101,105,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',197,105,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',296,105,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',381,105,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_4 = CreText('dau_4',476,105,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',119,154,48,3,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_6 = CreText('DrawText_6',214,154,48,3,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_7 = CreText('DrawText_7',301,154,48,3,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_8 = CreText('DrawText_8',388,154,48,3,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_9 = CreText('DrawText_9',483,154,48,3,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',3,404,635,44,"",'rgba(128,0,255,0.89)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','12','11',1,'#ffffff','rgba(128,0,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_3 = CreText('DrawText_3',1,449,635,30,"Gamechocon.com",'#400080','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','9','11',1,'#ffffff','#400080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',49,235,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_6 = CreText('bai_6',49,272,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_7 = CreText('bai_7',49,310,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_8 = CreText('bai_8',302,235,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_9 = CreText('bai_9',302,272,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_10 = CreText('bai_10',302,310,172,33,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_15 = CreText('DrawText_15',66,209,44,30,"b).",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  var name= GetText("","Text_tieu_de");
  if(name=="1. Tính :")
      PlayWave("","","ID_SOUND_Cau_1","");
  else if(name=="2. Tính nhẩm :")
     PlayWave("","","ID_SOUND_Cau_2","");
  else if(name=="3. Bài toán :")
     PlayWave("","","ID_SOUND_Cau_3","");
  else if(name=="4. Điền dấu thích hợp vào ô trống :")
     PlayWave("","","ID_SOUND_Cau_4","");
  return;
}



 );
var kq_5 = CreText('kq_5',231,229,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_6 = CreText('kq_6',231,270,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_7 = CreText('kq_7',231,310,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_8 = CreText('kq_8',487,228,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_9 = CreText('kq_9',487,267,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_10 = CreText('kq_10',487,309,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',26,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var clear_one = CreText('clear_one',32,0,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',59,0,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',32,88,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',59,88,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',1,88,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',41,111,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',1,0,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',1,111,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',59,66,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',32,66,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',1,66,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',59,44,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',32,44,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',1,44,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',59,22,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',32,22,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',1,22,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var bk_diem = CreText('bk_diem',375,210,223,244,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',389,206,187,64,"10 điểm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:227,height:252});
thong_bao_diem.add(bk_diem,m_diem);
var begin = CreText('begin',272,374,120,36,"Làm lại",'#ffff00','#ffffff','#000000','#000000','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#000000','#ffff00','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai();
  return;
}
 );
var cham_diem = CreText('cham_diem',272,374,120,36,"Điểm",'#ffff00','#ffffff','#000000','#000000','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#000000','#ffff00','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiemClick();
  return;
}
 );
Page_4.add(Page4_Backrounnd,Drawtext_2,bai_0,bai_1,bai_2,bai_3,bai_4,kq_0,kq_1,kq_2,kq_3,kq_4,Text_tieu_de,dau_0,dau_1,dau_2,dau_3,dau_4,Drawtext_1,DrawText_6,DrawText_7,DrawText_8,DrawText_9,DrawText_2,DrawText_3,bai_5,bai_6,bai_7,bai_8,bai_9,bai_10,DrawText_15,kq_5,kq_6,kq_7,kq_8,kq_9,kq_10,Group_1,thong_bao_diem,begin,cham_diem);
stage.add(Page_4);
InitLacVietScript();
};
