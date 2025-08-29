folder_Resource ='data/Sap_Xep_qua_trung';
var x,y;
var count=0;
var m_phep="";
function PlayPlus()
{
	x= Random(100);
	y= Random(100-x);
	if(m_phep=="+")
	SetText("","kq",x+y);
	else if(m_phep=="-")
	{
		if(x<y)
		{
		var tt=x;
		x= y;
		y= tt;
		}
		SetText("","kq",x-y);
	}
	else if(m_phep=="*")
		SetText("","kq",x*y);
	else if(m_phep=="/")
		{
		x= Random(10)+1;
		SetText("","kq",x);
		y= Random(10)+1;
		x=x*y;
		}
	count= length(x)+ length(y);
	var a=[4];
	var index=0;
	PlayWave("","","ID_SOUND_NEW");
	if(length(x)==1) 
	{
		SetShowObject("","x1",0);
		SetShowObject("","t1",0);
		SetShowObject("","n1",0);
		SetShowObject("","r1",0);

		a[index]=x;
	}
	else {
		a[index]= leftStr(x,1);
		index++;
		a[index]= rightStr(x,1);
		SetShowObject("","x1",1);
		SetShowObject("","t1",1);
		SetShowObject("","n1",1);
		SetShowObject("","r1",1);

		}
	if(length(y)==1)
		{
		index++;
		a[index]=y;
		 SetShowObject("","x3",0);
		SetShowObject("","t3",0);
		SetShowObject("","n3",0);
		SetShowObject("","r3",0);

		}
	else {
		index++;
		a[index]= leftStr(y,1);
		index++;
		a[index]=rightStr(y,1);
		SetShowObject("","x3",1);
		SetShowObject("","t3",1);
		SetShowObject("","n3",1);
		SetShowObject("","r3",1);

		}
	for(var i=0;i<10;i++)	
	{
		var m= Random(index);
		var n= Random(index);
		var tt= a[m];
		a[m]=a[n];
		a[n]=tt;
	}
	for(i=index;i<=3;i++)
	{
		SetShowObject("",i,0);
	}
	for(i=0; i<=index;i++)
	{
		SetText("",i,a[i]);
		SetShowObject("",i,1);
	}
	for(i=0;i<4;i++)
		SetText("","x"+i,"");

}
var c=["","","",""];
var k=0;
function Click()
{
	var so= GetText("","");
	var ht = false;
	PlayWave("","","ID_SOUND_CLICK");
	var namecurent= GetName("");
	for(var i=0;i<=3;i++)
	{
	var name= "x"+i;
	if(GetText("",name)=="" && GetShowObject("",name)==1)
		{
		MoveObjectToEx("","", GetLeft("",name), GetTop("",name), GetWidth("",""), GetHeight("",""),1000,0,1,1);
		PlayWave("","","ID_SOUND1");
		SetShowObject("",namecurent,0);	
		SetText("",name,so);
		MoveObjectToEx("",name, GetLeft("",name), GetTop("",name)+50, GetWidth("",name), GetHeight("",name),500,1,1,1);
		c[k]= namecurent;
		k++;
		break;
		}
	}	
	if(k==count)
		{
			var tf= false;
			var k1,k2;
			if(GetShowObject("","x1")==1)
				k1= GetText("","x0")*10+ GetText("","x1");
			else k1= GetText("","x0");
			if(GetShowObject("","x3")==1)
				k2= GetText("","x2")*10+ GetText("","x3");
			else k2= GetText("","x2");
			var xxxx="";
			if( m_phep=="+")
				xxxx= k1+k2;
			else if( m_phep=="-")
				xxxx= k1-k2;
			else if( m_phep=="*")
				xxxx= k1*k2;
			else if( m_phep=="/")
				xxxx= k1/k2;

			if(xxxx== GetText("","kq"))
				tf = true;
			for(var i=0;i<k;i++)
				{
				SetShowObject("",c[i],1);
				MoveObjectTo("",c[i],-1,-1);
				}
			var d= Random(3)+1 ;
			if(tf)
			{
			SetShowObject("","chuc_mung",1);
			PlayWave("","","ID_SOUND_DUNG"+d);
			Delay(4000);
			PlayPlus();
			SetShowObject("","chuc_mung",0);
			}
			else PlayWave("","","ID_SOUND_SAI"+d);
			k=0;
			for(i=0;i<4;i++)
				SetText("","x"+i,"");
		}
}
function ClickCCC()
{
	if(GetText("","")!="")
	{
		var n= GetName("");
		var j= rightStr(n,1);
		PlayWave("","","ID_SOUND_BACK");
		SetShowObject("",c[j],1);
		MoveObjectTo("",c[j],-1,-1);
		k--;
		c[k]="";
		SetText("","","");
		
	}
}
function SelectDau()
{	
	for(var i=1;i<=4;i++)
				MoveObjectTo("","d"+i,-1,-1);
	MoveObjectTo("","", GetLeft("","dau"), GetTop("","dau"));
	m_phep= GetText("","");
	if( m_phep=="+")
				SpeakVN("","","Phép cộng");
			else if( m_phep=="-")
				SpeakVN("","","Phép trừ");
			else if( m_phep=="*")
				SpeakVN("","","Phép nhân");
			else if( m_phep=="/")
				SpeakVN("","","Phép chia");
	for(i=0;i<k;i++)
				{
				SetShowObject("",c[i],1);
				MoveObjectTo("",c[i],-1,-1);
				}
			
	k=0;
	PlayPlus();
}
function Page_1()
{
MoveObjectTo("","d1", GetLeft("","dau"), GetTop("","dau"));
PlayWave("","","ID_SOUND_MIDI");
SetShowObject("","chuc_mung",0);
 m_phep="+";
PlayPlus();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#666666','','','','ID_IMAGE16.GIF',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0c0c0','2','1','0','','0','0','0','0',0,0,'');
var _12 = CreText('12',1,355,640,127,"https://www.gamechocon.com",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE15.PNG',14,'Verdana','Bold','left','bottom',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','2','2','#a52a00','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',89,25,500,361,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE14.PNG',18,'Verdana','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',334,67,2,92,"",'#ffffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',261,119,42,40,"+",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Verdana','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var x2 = CreText('x2',314,103,47,66,"",'#ff00ff','#ffffff','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',1,'0.00','30','30',1,'#000000','#ffb3ff','4','0','#800080','0','0','4','2',2,1,'#7f7f7f',0,1.50);
x2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCCC();
  return;
}
 );
var dau_bang = CreText('dau_bang',439,120,36,36,"=",'#ffff00','#ffffff','#ff9562','#ffffff','ID_IMAGE9.PNG',28,'Verdana','Bold','center','middle',0,'0.00','30','30',0,'#ff6820','#ffffe0','2','2','#000000','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var d1 = CreText('d1',595,233,42,40,"+",'#ffff00','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.ICO',28,'Verdana','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffe0','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
d1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SelectDau();
  return;
}
 );
var d2 = CreText('d2',595,268,42,40,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE2.ICO',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
d2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SelectDau();
  return;
}
 );
var d3 = CreText('d3',595,303,42,40,"*",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE3.ICO',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
d3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SelectDau();
  return;
}
 );
var d4 = CreText('d4',595,338,42,40,"/",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE4.ICO',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
d4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SelectDau();
  return;
}
 );
var r1 = CreText('r1',153,61,77,27,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var r3 = CreText('r3',334,61,77,27,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext_13 = CreText('Draw text_13',229,62,114,27,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',18,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Image_3 = CreText('Image_3',326,61,21,14,'','rgba(0,0,0,0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image_6 = CreText('Image_6',607,6,26,26,'','rgba(0,0,0,0)','','','','ID_IMAGE10.PNG',0,'','','','',0,'0.00','30','30',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseFile();
  return;
}
 );
var t3 = CreText('t3',407,66,2,92,"",'#ffffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',514,66,2,92,"",'#ffffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t1 = CreText('t1',228,65,2,92,"",'#ffffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t0 = CreText('t0',156,65,2,92,"",'#ffffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var x1 = CreText('x1',205,103,47,66,"",'#9bcdff','#ffffff','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',1,'0.00','30','30',1,'#000000','#0080ff','4','0','#800080','0','0','4','2',1,0,'#7f7f7f',0,1.50);
x1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCCC();
  return;
}
 );
var x3 = CreText('x3',386,101,47,66,"",'#88ff88','#ffffff','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',1,'0.00','30','30',1,'#000000','#00ff00','4','0','#800080','0','0','4','2',1,1,'#7f7f7f',0,1.50);
x3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCCC();
  return;
}
 );
var kq = CreText('kq',481,102,68,74,"kq\r\n",'#ffa8a8','#ffffff','#ffffff','#ffffff','',22,'Verdana','Bold','center','middle',1,'0.00','30','30',1,'#000000','#ff0000','4','0','#800080','0','0','4','2',2,2,'#000000',0,1.50);
var _1 = CreText('1',354,287,45,66,"",'#ffffff','#df00df','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',2,'0.00','33','75',2,'#c0c0c0','#282828','4','0','#000000','-2','-1','4','3',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var n1 = CreText('n1',219,60,21,14,'','rgba(0,0,0,0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image_1 = CreText('Image_1',146,60,21,14,'','rgba(0,0,0,0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var n3 = CreText('n3',398,61,21,14,'','rgba(0,0,0,0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image_5 = CreText('Image_5',503,60,21,14,'','rgba(0,0,0,0)','','','','ID_IMAGE17.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Animategif_2 = CreText('Animate gif_2',140,183,53,90,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF2.GIF',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Animategif_1 = CreText('Animate gif_1',482,187,78,127,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var chuc_mung = CreText('chuc_mung',222,170,234,112,"Đúng rồi, chúc mừng bạn.",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE8.JPG',28,'Verdana','Bold','center','middle',0,'0.00','30','30',3,'#ffff00','#000000','2','2','#000000','0','0','4','3',0,0, 'rgba(0,0,0,0)',0,1.50);
var x0 = CreText('x0',133,101,47,66,"",'#ffd3a8','#ffffff','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',1,'0.00','30','30',1,'#000000','#ffad5b','4','0','#800080','0','0','4','2',1,0,'#c0c0c0',0,1.50);
x0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCCC();
  return;
}
 );
var _0 = CreText('0',199,287,48,66,"",'#ffffff','#df00df','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',2,'0.00','33','75',2,'#c0c0c0','#282828','4','0','#000000','-2','-1','4','3',0,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _2 = CreText('2',273,287,47,65,"",'#ffffff','#df00df','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',2,'0.00','33','75',2,'#c0c0c0','#282828','4','0','#000000','-2','-1','4','3',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _3 = CreText('3',425,287,47,66,"",'#ffffff','#df00df','#ffffff','#ffffff','',36,'Verdana','Bold','center','middle',2,'0.00','33','75',2,'#c0c0c0','#282828','4','0','#000000','-2','-1','4','3',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
Page_1.add(Page1_Backrounnd,_12,Drawtext_1,Drawtext_8,dau,x2,dau_bang,d1,d2,d3,d4,r1,r3,Drawtext_13,Image_3,Image_6,t3,Drawtext_2,t1,t0,x1,x3,kq,_1,n1,Image_1,n3,Image_5,Animategif_2,Animategif_1,chuc_mung,x0,_0,_2,_3);
stage.add(Page_1);
InitLacVietScript();
};
