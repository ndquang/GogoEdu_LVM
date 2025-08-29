folder_Resource ='data/toan_dung_sai';
var m_limit=11;
var arTam=[0,0,0,0,0];
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
GetVer();
  for(var i=0;i<10;i++)	
	{
		var a= Random(m_limit);
		var b= Random(m_limit);
		var phep= Random(2);
		var d_s= Random(3);
		SetText("","ds_"+i,"");
		if(phep==0){ //+
			while(a+b>10)
			{
				a= Random(m_limit);
				b= Random(m_limit);
			}
			if(d_s<2){
			var da=a+b;
			SetText("","bai_"+i,a+" + "+b+" = " + da);
			}
			else {
				var x= Random(m_limit);
				while(x==a+b)
					x= Random(m_limit);
				SetText("","bai_"+i,a+" + "+b+" = " + x);
			      }
			}
		else //-
			{
				if(a<b){
				  var ta=a;
				  a=b;
				  b=ta;
				  }
			
				if(d_s<2){
			var da=a-b;
			SetText("","bai_"+i,a+" - "+b+" = " + da);
				}
			else {
				var x= Random(m_limit);
				while(x==a-b)
					x= Random(m_limit);
				SetText("","bai_"+i,a+" - "+b+" = " + x);
			      }

			}
			if(d_s<2)arKq[i]="Đ";
			else arKq[i]="S";
		SetBorder("","ds_"+i,"#0000ff",1);
	}
  InvalidateObj("","");
}
var arChon=[0,0,0,0,0];
function ChonSo(){
	var tt = GetText("","");
	if(tt=="" || tt== "S")
		SetText("","","Đ");
	else SetText("","","S");
	InvalidateObj("","");
}
function Page_1()
{
PlaySound("ID_SOUND_HOME");
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',3,441,637,37,"? Nhấn vào lần 2 để thay đổi chữ Đ thành chữ S.         http://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',16,'Arial','Bold Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(128,255,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_bai = CreText('de_bai',-1,1,639,39,"Đúng ghi Đ sai ghi S",'rgba(0,128,255,0.89)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_0 = CreText('bai_0',-9,63,215,48,"Khoanh tròn số lớn nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',-9,138,215,48,"Khoanh tròn số bé nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',-9,213,215,48,"Khoanh tròn số lớn nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',-9,288,215,48,"Khoanh tròn số bé nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',-9,364,215,48,"Khoanh tròn số lớn nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',275,63,181,48,"Khoanh tròn số bé nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_6 = CreText('bai_6',275,138,181,48,"Khoanh tròn số lớn nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_7 = CreText('bai_7',275,213,181,48,"Khoanh tròn số bé nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_8 = CreText('bai_8',275,288,181,48,"Khoanh tròn số lớn nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_9 = CreText('bai_9',275,364,181,48,"Khoanh tròn số bé nhất:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_0 = CreText('ds_0',219,63,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_1 = CreText('ds_1',219,138,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_2 = CreText('ds_2',219,213,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_3 = CreText('ds_3',219,288,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_4 = CreText('ds_4',219,364,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_5 = CreText('ds_5',478,63,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_6 = CreText('ds_6',478,138,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_7 = CreText('ds_7',478,213,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_8 = CreText('ds_8',478,288,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var ds_9 = CreText('ds_9',478,364,54,48,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ds_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var begin = CreText('begin',522,1,119,39,"Làm lại",'#80ff00','#8aff15','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai();
  return;
}
 );
var bk_diem = CreText('bk_diem',185,199,223,244,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',202,195,187,64,"10 điểm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cham_diem = CreText('cham_diem',523,1,119,39,"Điểm",'#e6e6fa','#8aff15','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e9e9e9','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 10; i++)
		{
		if(arKq[i]== GetText("","ds_"+i))
		{
		   	m_diem=m_diem+1;
			SetBorder("","ds_"+i,"#00ff00",1);
		}
		else {
			SetBorder("","ds_"+i,"#ff0000",1);
		}
	}
var diem = m_diem*10 / 10;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","thong_bao_diem",1);
UpdateScore(diem);
SetShowObject("","begin",1);
SetShowObject("","",0);
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
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:227,height:252});
thong_bao_diem.add(bk_diem,m_diem);
Page_1.add(Page1_Backrounnd,Text_1,de_bai,bai_0,bai_1,bai_2,bai_3,bai_4,bai_5,bai_6,bai_7,bai_8,bai_9,ds_0,ds_1,ds_2,ds_3,ds_4,ds_5,ds_6,ds_7,ds_8,ds_9,begin,cham_diem,thong_bao_diem);
stage.add(Page_1);
InitLacVietScript();
};
