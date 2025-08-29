folder_Resource ='data/Viet_So_theo_mau';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	SetShowObject("","check",1);
	InvalidateObj("",objectShowKey);
}

function   ShowKeyNum( namekey)
{
AddObjToCurentPage(name_keyboard);
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}
var kq=92823;
var chux="";
function  CreateGame()
{
	kq = Random(90000)+1000;
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	SetShowObject("","check",0);
	for(var i=0;i<6;i++)
	{
		SetText("","so"+i,"");
		SetFontColor("","so"+i,"#000000");
	}
	chux= docso(kq);
	Speak(chux,"VN");
	SetText("","so0",kq);
	if(kq<10000)
		{
			SetShowObject("","cong5",0);
			SetShowObject("","so5",0);
		}
	else	{
		SetShowObject("","cong5",1);
		SetShowObject("","so5",1);
		}
	InvalidateObj("","");
}
function  CheckKQ()
{
	var tem=0;
	var c = 10000;
	var n=6;
	var b = true;
	if(kq < 10000 ){
		c= 1000;
		n= 5 ;
	}
	var tempkq = kq;
	var textkq = kq + " = ";
	for(var i=1;i<n;i++)
	{
		tem = tempkq - tempkq %c;
		if(GetText("","so"+i) == tem)
			SetFontColor("","so"+i,"#99ff33");
		else 	{
			SetFontColor("","so"+i,"#ff8888");
			b = false;
			}
		tempkq =  tempkq %c;
		c= c /10;
		if(i!=n-1)
		textkq = textkq +  tem + " + ";
		else textkq = textkq +  tem;
	}
			
	if(b)
		{
			SetText("","m_diem","Đúng");
			SetColor("","m_diem","#99ff33");
			Speak("Đúng","VN");
		}
	else {
		SetText("","m_diem","Sai");
		SetText("","chu",textkq);
		SetColor("","m_diem","#ff9999");
		Speak("Sai." + textkq  ,"VN");
		}
		SetShowObject("","msg",1);
}
var mangso = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
function dochangchuc(so,daydu)
{
    var chuoi = "";
    chuc = Math.floor(so/10);
    donvi = so%10;
    if (chuc>1) {
        chuoi = " " + mangso[chuc] + " mươi";
        if (donvi==1) {
            chuoi += " mốt";
        }
    } else if (chuc==1) {
        chuoi = " mười";
        if (donvi==1) {
            chuoi += " một";
        }
    } else if (daydu && donvi>0) {
        chuoi = " lẻ";
    }
    if (donvi==5 && chuc>=1) {
        chuoi += " lăm";
    } else if (donvi>1||(donvi==1&&chuc==0)) {
        chuoi += " " + mangso[ donvi ];
    }
    return chuoi;
}
function docblock(so,daydu)
{
    var chuoi = "";
    tram = Math.floor(so/100);
    so = so%100;
    if (daydu || tram>0) {
        chuoi = " " + mangso[tram] + " trăm";
        chuoi += dochangchuc(so,true);
    } else {
        chuoi = dochangchuc(so,false);
    }
    return chuoi;
}
function dochangtrieu(so,daydu)
{
    var chuoi = "";
    trieu = Math.floor(so/1000000);
    so = so%1000000;
    if (trieu>0) {
        chuoi = docblock(trieu,daydu) + " triệu";
        daydu = true;
    }
    nghin = Math.floor(so/1000);
    so = so%1000;
    if (nghin>0) {
        chuoi += docblock(nghin,daydu) + " nghìn";
        daydu = true;
    }
    if (so>0) {
        chuoi += docblock(so,daydu);
    }
    return chuoi;
}
function docso(so)
{
        if (so==0) return mangso[0];
    var chuoi = "", hauto = "";
    do {
        ty = so%1000000000;
        so = Math.floor(so/1000000000);
        if (so>0) {
            chuoi = dochangtrieu(ty,true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty,false) + hauto + chuoi;
        }
        hauto = " tỷ";
    } while (so>0);
    return chuoi;
}  
function Page_1()
{
CreateGame();
SetMoveView("","msg",1);
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
 width: 680,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,680,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var chu = CreText('chu',188,59,339,27,"8723 = 8000 + 700 + 20 + 3",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(chu);
var title = CreText('title',69,59,149,27,"Viết số theo mẫu",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title);
var Text_1 = CreText('Text_1',128,10,396,38,"ÔN TẬP CÁC SỐ ĐẾN 100 000",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var so0 = CreText('so0',12,95,81,42,"",'#e6e6fa','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(so0);
var so1 = CreText('so1',127,94,81,42,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(so1);
var so2 = CreText('so2',242,94,81,42,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(so2);
var so3 = CreText('so3',357,94,81,42,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(so3);
var so4 = CreText('so4',472,94,81,42,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(so4);
var so5 = CreText('so5',591,94,81,42,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(so5);
var clear_one = CreText('clear_one',29,-1,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(clear_one);
var clear_all = CreText('clear_all',56,-1,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
Page_1.add(clear_all);
var ok = CreText('ok',38,85,45,22,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#88c4ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Page_1.add(ok);
var _0 = CreText('_0',-2,-1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_0);
var huy = CreText('huy',-2,85,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Page_1.add(huy);
var _9 = CreText('_9',56,65,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_9);
var _8 = CreText('_8',29,65,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_8);
var _7 = CreText('_7',-2,65,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_7);
var _6 = CreText('_6',56,43,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_6);
var _5 = CreText('_5',29,43,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_5);
var _4 = CreText('_4',-2,43,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_4);
var _3 = CreText('_3',56,21,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_3);
var _2 = CreText('_2',29,21,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_2);
var _1 = CreText('_1',-2,21,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:112});
Group_1.add(clear_one);
Group_1.add(clear_all);
Group_1.add(ok);
Group_1.add(_0);
Group_1.add(huy);
Group_1.add(_9);
Group_1.add(_8);
Group_1.add(_7);
Group_1.add(_6);
Group_1.add(_5);
Group_1.add(_4);
Group_1.add(_3);
Group_1.add(_2);
Group_1.add(_1);
Page_1.add(Group_1);
var m_diem = CreText('m_diem',201,137,308,146,"Sai.",'rgba(163,255,70,0.98)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var t_mess = CreText('t_mess',201,137,308,26,"https://gamechocon.com",'rgba(192,192,192,0.98)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(223,223,223,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',313,243,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
Page_1.add(bt_lam_lai);
var check = CreText('check',549,151,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
Page_1.add(check);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:312,height:150});
msg.add(m_diem);
msg.add(t_mess);
msg.add(bt_lam_lai);
Page_1.add(msg);
var Text_2 = CreText('Text_2',93,98,34,37,"=",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',208,97,34,37,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',323,98,34,37,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',438,99,34,37,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_5);
var cong5 = CreText('cong5',553,98,34,37,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(cong5);
stage.add(Page_1);
InitLacVietScript();
};
