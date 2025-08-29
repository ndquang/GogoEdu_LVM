folder_Resource ='data/cac_vat_xung_quanh';
var arChon=[0,1,2,3,4];
var ar1=[0,1,2,3,4];
var ar2=[0,1,2,3,4];
function TaoBaiHoc(){
 
 for(var i=0;i<15;i++){
	var x= Random(5);
	var y= Random(5);
	while(x==y)
		y= Random(5);
	var t  = ar1[x];
	ar1[x] = ar1[y];
	ar1[y] = t;

	x= Random(5);
	y= Random(5);
	while(x==y)
		y= Random(5);
	t  = ar2[x];
	ar2[x] = ar2[y];
	ar2[y] = t;
 }
 for(var j=0;j<5;j++){
	SetColor("","t_"+j,1,2,3,"P_"+ar1[j]);
	SetColor("","d_"+j,1,2,3,"T_"+ar2[j]);
	arChon[j]="";
	}
	SetShowObject("","cham_diem",1);
	SetShowObject("","thong_bao_diem",0);
	SetColor("","obj_paint",-1,-1,-1);
	InvalidateObj("","");
}
var i_start=0;

function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<5 && b_e== false)
	{
		if(PosInObj("t_"+i))
		{
			b_e= true;
			i_start=i;
		}
		i=i+1;
	}
}
function EndObj()
{
	var i=0;
	var b_e= false;
	while(i<5 && b_e== false)
	{
		if(PosInObj("d_"+i))
		{
			b_e= true;
			SaveObject("","obj_paint");
			arChon[i_start]= i;
		}
		i++;
	}
	if(b_e== false)
		InvalidateObj("","");
}
function Page_1()
{
SetShowObject("","thong_bao_diem",0);
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#0000ff");
TaoBaiHoc();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','rgba(255, 228, 225, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 228, 225, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var title = CreText('title',12,-5,598,33,"Bài 3: Nối hình vẽ ở cột 1 với cột 2 sao cho phù hợp",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBaiHoc();
  return;
}
 );
Page_1.add(title);
var begin = CreText('begin',523,45,96,30,"Làm lại",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(70, 0, 0, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBaiHoc();
SetShowObject("","",0);
  return;
}
 );
Page_1.add(begin);
var cham_diem = CreText('cham_diem',523,45,96,39,"Điểm",'rgba(255, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 0, 255)','rgba(255, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 5; i++)
		{
			if(rightStr(GetColor("","t_"+i),1) == rightStr(GetColor("","d_"+arChon[i]),1))
		   	m_diem=m_diem+1;
		
	}
var diem = m_diem*10 / 5;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","thong_bao_diem",1);
Transparent("","obj_paint",50);
SetShowObject("","begin",1);
SetShowObject("","",0);
InvalidateObj("","");
  return;
}

 );
Page_1.add(cham_diem);
var t_0 = CreText('t_0',63,45,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_0);
var t_1 = CreText('t_1',63,130,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_1);
var t_2 = CreText('t_2',63,215,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_2);
var t_3 = CreText('t_3',63,300,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_3);
var t_4 = CreText('t_4',63,387,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_4);
var d_0 = CreText('d_0',407,44,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_0);
var d_1 = CreText('d_1',407,129,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_1);
var d_2 = CreText('d_2',407,214,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_2);
var d_3 = CreText('d_3',407,299,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_3);
var d_4 = CreText('d_4',407,386,95,83,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','P_0.PNG',22,'Arial','Normal','left','top',0,'0.00','30','30',1,'rgba(0, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_4);
var obj_paint = CreText('obj_paint',44,24,473,444,"        Cột 1                                                                   Cột 2",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(127, 127, 127, 255)',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndObj();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  StartObj();
  return;
}
 );
Page_1.add(obj_paint);
var bk_diem = CreText('bk_diem',174,100,223,244,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE1.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(bk_diem);
var m_diem = CreText('m_diem',188,96,187,64,"10 điểm",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:227,height:252});
thong_bao_diem.add(bk_diem);
thong_bao_diem.add(m_diem);
Page_1.add(thong_bao_diem);
stage.add(Page_1);
InitLacVietScript();
};
