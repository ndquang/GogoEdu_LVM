folder_Resource ='data/hoc_dem';
var kq=0;
var diem=0;
var per =0;
function  InitPage()
{
     per  = GetWidth("","lb_proress")/10;
}
function  TaoSo()
{
	
	PlaySound("ID_START");
    	SetShowObject("","bang_diem",0);
    	for(var i=0; i< 10; i++)
	{
	   var le= GetLeft("","obj_"+i);
	   MoveObjectTo("","obj_"+i,le,-64);
	}
	InvalidateObj("","");
	kq= Random(10)+1;
	var id= Random(20)+1;
	for(i=0; i< 10; i++){
	if(i<kq)
	{
	SetRsc("","obj_"+i,"ID_OBJ_"+id);
	SetShowObject("","obj_"+i,1);
 	MoveObjectTo("","obj_"+i,-1,-1,500,2,2);
	}
	else SetShowObject("","obj_"+i,0);
	}
	if(diem==10)
	{
		// GetVer();
		SetRect("","lb_proress",-1,-1,0,-1,"draw");
		diem=0;
	}
	InvalidateObj("","");
}
var tMess=["Đúng rồi!","Giỏi quá!","Quá tuyệt!","Tốt quá!","Giỏi lắm!"];
function  Chonso()
{
if(GetText("","")==kq)
{
	diem++;
	if(diem==10)
	{
		//UpdateScore(10);
		PlaySound("ID_TRUE");
		SetText("","m_diem","ᴥᴥᴥ");
		SetText("","label","Bạn đã hoàn thành");		
		SetShowObject("","bang_diem",1);
	}
	else{
	PlaySound("ID_TRUE");
	SetText("","m_diem",kq);
	SetText("","label",tMess[Random(5)]);
	SetShowObject("","bang_diem",1);
	}
}
else
{
	PlaySound("ID_FALSE");
	SetText("","m_diem","");
	SetText("","label","Sai rồi!");
	SetShowObject("","bang_diem",1);
	diem--;
}
	if(diem<0) diem=0;
	SetRect("","lb_proress",-1,-1,diem*per,-1,"dra");
}
function Page_1()
{
InitPage();
TaoSo();
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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ffad5b','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffad5b','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var key_boar = CreText('key_boar',27,346,753,97,"",'#8000ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','8','8',1,'#ffffff','#8000ff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(key_boar);
var bg = CreText('bg',35,42,740,304,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',4,'#282828','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(bg);
var obj_0 = CreText('obj_0',119,83,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_0);
var obj_1 = CreText('obj_1',240,83,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_1);
var obj_2 = CreText('obj_2',366,83,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_2);
var obj_3 = CreText('obj_3',477,83,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_3);
var obj_4 = CreText('obj_4',606,83,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_4);
var obj_5 = CreText('obj_5',124,198,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_5);
var obj_6 = CreText('obj_6',245,198,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_6);
var obj_7 = CreText('obj_7',366,198,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_7);
var obj_8 = CreText('obj_8',487,198,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_8);
var obj_9 = CreText('obj_9',611,198,78,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_OBJ_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_1.add(obj_9);
var num_0 = CreText('num_0',61,370,52,52,"1",'#ff6820','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#ff6820','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_0);
var num_1 = CreText('num_1',130,370,52,52,"2",'#ffff00','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#ffff00','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_1);
var num_2 = CreText('num_2',202,370,52,52,"3",'#c0ffff','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#c0ffff','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_2);
var num_3 = CreText('num_3',272,370,52,52,"4",'#800080','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#800080','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_3);
var num_4 = CreText('num_4',415,370,52,52,"6",'#009300','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#009300','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_4);
var num_5 = CreText('num_5',482,370,52,52,"7",'#ff00ff','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#ff00ff','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_5);
var num_6 = CreText('num_6',552,370,52,52,"8",'#0080ff','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#0080ff','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_6);
var num_7 = CreText('num_7',622,370,52,52,"9",'#ff0080','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#ff0080','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_7);
var num_8 = CreText('num_8',692,370,52,52,"10",'#ff0000','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#ff0000','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_8);
var Drawtext_3 = CreText('Draw text_3',615,10,122,61,"|||",'#00000000','#ffffff','#ff6820','#ff6820','',48,'Arial','Bold Italic','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
Page_1.add(Drawtext_3);
var DrawText_1 = CreText('DrawText_1',120,10,122,61,"|||",'#00000000','#ffffff','#ff6820','#ff6820','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#000000','0','0','4','1',0,0,'#00000000',0,1.50);
Page_1.add(DrawText_1);
var num_9 = CreText('num_9',342,370,52,52,"5",'#80ff00','#ffffff','#000000','#000000','',28,'Arial','Bold','center','middle',3,'0.00','5','8',2,'#ffffff','#80ff00','0','2','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
num_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso();
  return;
}
 );
Page_1.add(num_9);
var m_diem = CreText('m_diem',259,113,252,141,"8",'#fffffffa','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#c0c0c0fa','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(m_diem);
var t_mess = CreText('t_mess',259,113,252,21,"Thông báo",'#0080c0fa','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','30','30',1,'#0080ff','#64cdfffa','4','1','#00000000','0','0','4','1',0,0,'#00000000',0,1.50);
Page_1.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',319,212,125,31,"Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#4fa7ff','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoSo();
  return;
}
 );
Page_1.add(bt_lam_lai);
var label = CreText('label',260,137,249,23,"Đúng rồi",'#00000000','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(label);
bang_diem.add(bt_lam_lai);
Page_1.add(bang_diem);
var lb_proress = CreText('lb_proress',199,33,458,17,"",'#00ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#00ff00','0','1','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(lb_proress);
stage.add(Page_1);
InitLacVietScript();
};
