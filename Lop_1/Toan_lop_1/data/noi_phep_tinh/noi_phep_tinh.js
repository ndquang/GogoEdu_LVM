folder_Resource ='data/noi_phep_tinh';
var m_limit=11;
var arTam=[0,0,0,0];
var arKq=[0,0,0,0,0];

function  CreateRam( m_size){
   var Count = 0;
   for (var i = 0; i < 5 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size);
    for (var j = 0 ; j < Count;j++)
    { 
      if (arTam[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arTam[Count] =iNN;
    Count++;
  } 
}
function TaoBai()
{
SetShowObject("","thong_bao_diem",0);
SetShowObject("","cham_diem",1);
SetShowObject("","begin",0);
SetOpacity("","obj_paint",0);
GetVer();
  for(var i=0;i<8;i++)	
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
			SetText("","bai_"+i,a+" + "+b);
			}
		else //-
			{
			if(a<b){
			var ta=a;
			a=b;
			b=ta;
			}
			da=a-b;
			SetText("","bai_"+i,a+" - "+b);
			}
		arKq[i]=da;
		SetColor("","bai_"+i,"#ffffff");
	}
  for(var t=0;t<4;t++)
	arTam[t]=arKq[t];
  for(var l=0;l<10;l++)
	{
		var a= Random(4);
		var b= Random(4);
		while(a==b)
		b= Random(4);
		var ta= arTam[a];
		arTam[a]=arTam[b];
		arTam[b]= ta;
	}
  for(var m=0;m<4;m++)
	SetText("","ds_"+m,arTam[m]);
//
 for(t=0;t<4;t++)
	arTam[t]=arKq[t+4];
  for(l=0;l<10;l++)
	{
		var a= Random(4);
		var b= Random(4);
		while(a==b)
		b= Random(4);
		var ta= arTam[a];
		arTam[a]=arTam[b];
		arTam[b]= ta;
	}
  for(m=0;m<4;m++){
	var ss= m+4;
	SetText("","ds_"+ss,arTam[m]);
	}
SetColor("","obj_paint",-1,-1,-1);
 InvalidateObj("","");
}
var arChon=[0,0,0,0,0];

var m_color="";
var i_start=0;
function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("bai_"+i))
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
	while(i<8 && b_e== false)
	{
		if(PosInObj("ds_"+i))
		{
			b_e= true;
			SaveObject("","obj_paint");
			arChon[i_start]= GetText("","ds_"+i);
		}
		i++;
	}
	if(b_e== false)
		InvalidateObj("","");
}
function Page_1()
{
PlaySound("ID_SOUND_HOME");
SetShowObject("","thong_bao_diem",0);
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#ff0000");
SetCursor("","obj_paint","ID_PEN");
SetOpacity("","obj_paint",0);

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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var Drawtext_1 = CreText('Draw text_1',81,73,456,356,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#7f7f7f',0,1.50);
var de_bai = CreText('de_bai',122,26,391,33,"Nối phép tính với kết quả đúng",'rgba(102,102,102,0.89)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
InvalidateObj("","");
  return;
}
 );
var bai_0 = CreText('bai_0',154,104,67,28,"1+2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',236,103,67,28,"4+5",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',318,103,67,28,"3 +9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',401,104,67,28,"4+1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',152,277,67,28,"44 +43",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',234,276,67,28,"9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_6 = CreText('bai_6',316,276,67,28,"6",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_7 = CreText('bai_7',398,276,67,28,"55",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_0 = CreText('ds_0',215,192,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_1 = CreText('ds_1',262,192,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_2 = CreText('ds_2',309,192,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_3 = CreText('ds_3',357,192,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_4 = CreText('ds_4',216,357,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_5 = CreText('ds_5',259,357,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_6 = CreText('ds_6',303,357,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_7 = CreText('ds_7',347,357,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var begin = CreText('begin',281,415,108,30,"Làm lại",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#460000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai();
  return;
}
 );
var bk_diem = CreText('bk_diem',419,184,223,244,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',433,180,187,64,"10 điểm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cham_diem = CreText('cham_diem',281,415,108,30,"Điểm",'#ff6820','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#a52a00','4','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 8; i++)
		{
		if(arKq[i]== arChon[i])
		{
		   	m_diem=m_diem+1;
			SetColor("","bai_"+i,"#00ff00");

		}
		else {
			SetColor("","bai_"+i,"#ff0000");
		}
	}
var diem = m_diem*10 / 8;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
UpdateScore(diem);
SetShowObject("","thong_bao_diem",1);
SetShowObject("","begin",1);
SetShowObject("","",0);
Transparent("","obj_paint",80);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_DUNG");
	}
else{
      PlayWave("","","ID_SOUND_SAI");
	}
  return;
}

 );
var obj_paint = CreText('obj_paint',143,89,338,313,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:227,height:252});
thong_bao_diem.add(bk_diem,m_diem);
Page_1.add(Page1_Backrounnd,Drawtext_1,de_bai,bai_0,bai_1,bai_2,bai_3,bai_4,bai_5,bai_6,bai_7,ds_0,ds_1,ds_2,ds_3,ds_4,ds_5,ds_6,ds_7,begin,cham_diem,obj_paint,thong_bao_diem);
stage.add(Page_1);
InitLacVietScript();
};
