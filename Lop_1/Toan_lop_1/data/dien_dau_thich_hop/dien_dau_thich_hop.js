folder_Resource ='data/dien_dau_thich_hop';
var m_limit=11;
var arKq=[0,0,0,0,0];
var kq_tam=0;
function TaoPhepTinh(){
	var r = Random(2);
	if(r==0){
		kq_tam = Random(m_limit);
		return kq_tam;
		}
	else {
		var phep= Random(2);
		var a= Random(m_limit);
		var b= Random(m_limit);
		if(phep==0){ //+
			while(a+b>10)
			{
				a= Random(m_limit);
				b= Random(m_limit);
			}
			kq_tam=a+b;
			return a +" + "+ b;
			}
		else //-
			{
			if(a<b){
			var ta=a;
			a=b;
			b=ta;
			}
			kq_tam=a-b;
			return a +" - "+ b;
			}
	}
}
function TaoBai()
{
SetShowObject("","thong_bao_diem",0);
SetShowObject("","cham_diem",1);
GetVer();
PlaySound("ID_SOUND_HOME");
  for(var i=0;i<5;i++)	
	{
		SetText("","trai_"+i,TaoPhepTinh());
		var t= kq_tam;
		SetText("","phai_"+i,TaoPhepTinh());
		var p= kq_tam;
		if(t>p)arKq[i]=">";
		else if(t==p) arKq[i]="=";
		else arKq[i]="<";
		SetText("","dau_"+i,"");
		SetColor("","dau_"+i,"#ffffff");
	}
 InvalidateObj("","");
}
function CheckInObjBai3()
{
	var i=0; 
	var b_check= true;
	while(i<5 && b_check== true)
    {       
	if(RectInRect("","dau_"+i,""))
	   {
		var tt= GetText("","");
		SetText("","dau_"+i,tt);
		b_check= false;
		break;
	   }
	 i++;
    }
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Page_1()
{
PlaySound("ID_SOUND_HOME");
SetShowObject("","thong_bao_diem",0);
TaoBai();
for(var i=0;i<3;i++)
	SetMoveView("","t_"+i,1);
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Text_tieu_de = CreText('Text_tieu_de',37,43,589,405,"\r\nĐiền dấu thích hợp vào ô trống:\r\n    \r\n",'#ffffff','#ffffff','#000000','#ffffff','',24,'Verdana','Normal','left','top',0,'0.00','0','0',2,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_0 = CreText('dau_0',292,130,49,46,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',292,182,49,46,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',291,234,49,46,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',291,286,49,46,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_4 = CreText('dau_4',291,337,49,46,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var trai_0 = CreText('trai_0',116,130,160,46,"19",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var trai_1 = CreText('trai_1',116,182,160,46,"16",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var trai_2 = CreText('trai_2',116,234,160,46,"10",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var trai_3 = CreText('trai_3',116,286,160,46,"17",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var trai_4 = CreText('trai_4',116,337,160,46,"17",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var phai_0 = CreText('phai_0',358,130,160,46,"19",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var phai_1 = CreText('phai_1',357,182,160,46,"16",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var phai_2 = CreText('phai_2',355,234,160,46,"10",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var phai_3 = CreText('phai_3',355,286,160,46,"17",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var phai_4 = CreText('phai_4',355,337,160,46,"17",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',22,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_1 = CreText('t_1',79,110,49,46,">",'#dadada','#ffffe0','#000000','#ff00ff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#dadada','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
t_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckInObjBai3();
  return;
}
 );
var t_2 = CreText('t_2',79,167,49,46,"=",'#dadada','#ffffe0','#000000','#ff00ff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#dadada','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
t_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckInObjBai3();
  return;
}
 );
var t_0 = CreText('t_0',79,224,49,46,"<",'#dadada','#ffffe0','#000000','#ff00ff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#dadada','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
t_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckInObjBai3();
  return;
}
 );
var begin = CreText('begin',488,62,107,43,"Làm lại",'#009300','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai();
  return;
}
 );
var cham_diem = CreText('cham_diem',488,62,107,43,"Điểm",'#009300','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#009300','0','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 5; i++)
		{
		if(arKq[i]== GetText("","dau_"+i))
		{
		   	m_diem=m_diem+1;
			

		}
		else {
			SetColor("","dau_"+i,"#ff0000");
		}
	}
var diem = m_diem*10 / 5;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","thong_bao_diem",1);
SetShowObject("","begin",1);
SetShowObject("","",0);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_DUNG");
	}
else{
      PlayWave("","","ID_SOUND_SAI");
	}
UpdateScore(diem);
  return;
}

 );
var Drawtext_1 = CreText('Draw text_1',476,31,117,42,"   |          |",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bk_diem = CreText('bk_diem',401,209,217,236,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',421,204,181,56,"10 điểm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:221,height:245});
thong_bao_diem.add(bk_diem,m_diem);
Page_1.add(Page1_Backrounnd,Text_tieu_de,dau_0,dau_1,dau_2,dau_3,dau_4,trai_0,trai_1,trai_2,trai_3,trai_4,phai_0,phai_1,phai_2,phai_3,phai_4,t_1,t_2,t_0,begin,cham_diem,Drawtext_1,thong_bao_diem);
stage.add(Page_1);
InitLacVietScript();
};
