folder_Resource ='data/Chuong_trinh_truc_xanh';
var count =56;
function myRandom2( range, a, num)
{
  var Count = 0;
  for (var ii = 0; ii < num ; ii++)
  {
    var bb = true;
    var iImagef ;
    while (bb)
    {
    	iImagef = Random(range);
	for (var itest = 0 ; itest < Count; itest++)
	{ 
      	if (a[itest] == iImagef)
	      {
      	   break;
	      }
      }
	if (itest >= Count)
      bb = false;
    }
    a[Count] = iImagef;
    Count++;
   }
}
function XaoTronMang( Mang, sophantu)
{
	var a=[sophantu];
	myRandom2(sophantu,a,sophantu);
	for(var i=0;i<sophantu;i++)
	{
		var stt=a[i];
		var tem=Mang[i];
		Mang[i]=Mang[stt];
		Mang[stt]=tem;
	}
}
function Page()
{
SetVar("m_select","");
GetScriptObj("","Begin",0);

  return;
}

function Page_OnTimer()
{
var time= GetText("","Timer");
if(time==0)
{
KillTimerPage();
PlayWave("","","ID_SOUND_HET_GIO");
Message("Hết giờ hi hi hi !!!!");
GetScriptObj("","Begin",0);
return;
}
time--;
SetText("","Timer",time);
  return;
}


function Page_1()
{
SetVar("m_select","");
GetScriptObj("","Begin",0);
  return;
}
function Page_1_OnTimer()
{
var time= GetText("","Timer");
if(time<=0)
{
KillTimerPage();
PlayWave("","","ID_SOUND_HET_GIO");
Message("Hết giờ hi hi hi !!!!");
GetScriptObj("","Begin",0);
return;
}
time--;
SetText("","Timer",time);
  return;
}

function Page_2()
{
SetVar("m_select","");
GetScriptObj("","Begin",0);

  return;
}
function Page_2_OnTimer()
{
var time= GetText("","Timer");
if(time<=0)
{
KillTimerPage();
PlayWave("","","ID_SOUND_HET_GIO");
Message("Hết giờ hi hi hi !!!!");
GetScriptObj("","Begin",0);
return;
}
time--;
//PlayWave("","","ID_SOUND_NHAC_PHUT");
SetText("","Timer",time);
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

 var Page = new Kinetic.Layer({name: 'Page',callback:'Page()'});
var Page_Backrounnd = CreText('Page_Backrounnd',0,0,640,480,'','#c0ffff','','','','ID_IMAGE27.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
Page.add(Page_Backrounnd);
var Tieu_de = CreText('Tieu_de',46,19,322,30,"Lật 2 hình giống nhau",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',24,'Verdana','Bold','right','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','#ffff00','0','0','4','2',10,10,'rgba(0, 0, 0, 0)',0,1.50);
Page.add(Tieu_de);
var Image = CreText('Image ',80,95,502,299,'','rgba(0, 0, 0, 0)','','','','ID_BK_25.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
Page.add(Image);
var _0 = CreText('0',81,319,73,73,"",'#005500','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#005500','0','0','#ffffff','2','4','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_0);
var _1 = CreText('1',152,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_1);
var _2 = CreText('2',223,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_2);
var _3 = CreText('3',294,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_3);
var _4 = CreText('4',365,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_4);
var _5 = CreText('5',436,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_5);
var _6 = CreText('6',507,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_6);
var _7 = CreText('7',81,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_7);
var _8 = CreText('8',152,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_8);
var _9 = CreText('9',223,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_9);
var _10 = CreText('10',294,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_10);
var _11 = CreText('11',365,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_11);
var _12 = CreText('12',436,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_12);
var _13 = CreText('13',507,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_13);
var _14 = CreText('14',81,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_14);
var _15 = CreText('15',152,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_15);
var _16 = CreText('16',223,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_16);
var _17 = CreText('17',294,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_17);
var _18 = CreText('18',365,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_18);
var _19 = CreText('19',436,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_19);
var _20 = CreText('20',507,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_20);
var _21 = CreText('21',81,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_21);
var _22 = CreText('22',152,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_22);
var _23 = CreText('23',223,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_23);
var _24 = CreText('24',294,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_24);
var _25 = CreText('25',365,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_25);
var _26 = CreText('26',436,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_26);
var _27 = CreText('27',507,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page.add(_27);
var _1_1 = CreText('1_1',-43,464,29,27,"",'#008080','#ffffff','#00008b','#ffffff','',12,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'#282828','#008080','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var count =28;
var select= GetVar("m_select");
var name = GetName("");
if(select==name)
return;
PlayWave("","","ID_SOUND2");
SetColor("","",-1,-1,-1,GetVar(name));
InvalidateObj("","");
var tem =GetRsc("","");
	if(select=="")
	{
		SetVar("m_select",name);
		return;
	}
	else
	{
		if(GetVar(name)==GetVar(select))
		{
			PlayWave("","","ID_SOUND_DUNG2");
			AnimationMagic("",name,10,5,22);
			SetShowObject("",name,0);
			Delay(100);
			AnimationMagic("",select,10,5,22);			
			SetShowObject("",select,0);
			var k=0,b=0;
			while(k<count&&b==0)
			{
				if(GetShowObject("",k)==1)
				b=1;
				k++;
			}
			if(b==0)
			{
				AnimationFly("","Image ",30,5,13);
				PlayWave("","","ID_SOUND_OK");
				KillTimerPage();
				return;
			}
		}
		else
		{
			PlayWave("","","ID_SOUND_SAI");
			Delay(500);
			SetColor("",name,0,128,128);
			SetColor("",select,0,128,128);
			SetVar("m_select",name);
		}
		SetVar("m_select","");		
	}
  return;
}
 );
Page.add(_1_1);
var Begin = CreText('Begin',377,31,110,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE21.PNG',14,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','1','2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var count =28;
//____________________________________________________
var tem= count/2;
var a=[count];
for(var k=0;k<count;k++)
{
a[k]=0;
SetColor("",k,0,128,128);
SetShowObject("",k,1);
}
var i=0;
var Count = 0;
//myRandom2(var range,var &a[],var num)
myRandom2(136,a,count);
var b=[tem];
myRandom2(tem,b,tem);
for(i=0;i<tem;i++)
{
	var tem2=b[i];
	a[tem+tem2]=a[i];
}
XaoTronMang(a,count);
for(i=0;i<count;i++)
{
	var id="ID_IMAGE_"+ a[i];
	a[i]=id;
}
for(i =0;i<count;i++)
{
	SetVar(i,a[i]);
}
KillTimerPage();
SetText("","Timer",75);
SetTimerPage(2000);
SetRsc("","Image ","ID_BK_"+ Random(28));
}

 );
Page.add(Begin);
var Timer = CreText('Timer',493,2,98,63,"TIME",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE11.GIF',26,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page.add(Timer);
var back = CreText('back',19,432,40,36,"",'#ffffff','#ffffff','#000000','#000000','ID_BUT3.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
Page.add(back);
var Image1 = CreText('Image 1',588,431,39,39,'','rgba(0, 0, 0, 0)','','','','ID_BUT1.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page.add(Image1);
stage.add(Page);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#c0ffff','','','','ID_IMAGE27.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Image = CreText('Image ',78,92,402,306,'','rgba(0, 0, 0, 0)','','','','ID_BK_28.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
Page_1.add(Image);
var _1_1 = CreText('1_1',-38,450,29,27,"",'#008080','#ffffff','#00008b','#ffffff','',12,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'#282828','#008080','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var select= GetVar("m_select");
var name = GetName("");
if(select==name)
return;
PlayWave("","","ID_SOUND2");
SetColor("","",-1,-1,-1,GetVar(name));
InvalidateObj("","");
	if(select=="")
	{
		SetVar("m_select",name);
		return;
	}
	else
	{
		if(GetVar(name)==GetVar(select))
		{
			PlayWave("","","ID_SOUND_DUNG2");
			AnimationMagic("",name,10,5,20);			
			SetShowObject("",name,0);
			Delay(300);
			AnimationMagic("",select,10,5,20);
			SetShowObject("",select,0);
			var k=0,b=0;
			while(k<count&&b==0)
			{
				if(GetShowObject("",k)==1)
				b=1;
				k++;
			}
			if(b==0)
			{
				AnimationFly("","Image ",30,5,13);
				PlayWave("","","ID_SOUND_OK");
				KillTimerPage();
				return;
			}
		}
		else
		{
			
			PlayWave("","","ID_SOUND_SAI");
			Delay(500);
			SetColor("",name,0,128,128);
			SetColor("",select,0,128,128);
			SetVar("m_select",name);

		}
		SetVar("m_select","");		
	}
  return;
}
 );
Page_1.add(_1_1);
var Begin = CreText('Begin',487,96,99,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE21.PNG',14,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','1','2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
/*____________________________________________________*/
var count=56;
var tem= count/2;
var a=[count];
for(var k=0;k<count;k++)
{
a[k]=0;
SetColor("",k,0,128,128);
SetShowObject("",k,1);
}
var i=0;
var Count = 0;
for(i=0;i<tem;i++)
{
	var bb = true;
	var iImagef ;
	while (bb)
	{
	    iImagef = Random(136)+ 1;
	    for (var itest = 0 ; itest < Count; itest++)
	    { 
      	if (a[itest] == iImagef)
      	{
	         break;
      	}
	    }
	    if (itest >= Count)
      	 bb = false;
	}
	a[Count]=iImagef;
Count++;
}
var b=[tem];
  Count = 0;
  for (var ii = 0; ii < tem ; ii++)
  {
    var bb = true;
    var iImagef ;
    while (bb)
    {
    iImagef = Random(tem);
    for (var itest = 0 ; itest < Count; itest++)
    { 
      if (b[itest] == iImagef)
       {
         break;
       }
     }
    if (itest >= Count)
       bb = false;
    }
   b[Count] = iImagef;
    Count++;
  }
for(i=0;i<tem;i++)
{
	var tem2=b[i];
	a[tem+tem2]=a[i];
}
for(i=0;i<count;i++)
{
	var id="ID_IMAGE_"+ a[i];
	a[i]=id;
}
for(i =0;i<count;i++)
{
	SetVar(i,a[i]);
}
KillTimerPage();
SetText("","Timer",180);
SetTimerPage(2000);
SetRsc("","Image ","ID_BK_"+ Random(29));
  return;

}

 );
Page_1.add(Begin);
var Timer = CreText('Timer',491,140,98,59,"TIME",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE11.GIF',24,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Timer);
var Drawtext2 = CreText('Draw text 2',12,434,40,36,"",'#ffffff','#ffffff','#000000','#000000','ID_BUT3.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
Page_1.add(Drawtext2);
var Image1 = CreText('Image 1',583,434,39,39,'','rgba(0, 0, 0, 0)','','','','ID_BUT1.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Image1);
var _0 = CreText('0',77,357,49,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','2','4','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_0);
var _45 = CreText('45',127,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_45);
var _44 = CreText('44',177,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_44);
var _3 = CreText('3',228,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_3);
var _39 = CreText('39',278,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_39);
var _37 = CreText('37',328,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_37);
var _47 = CreText('47',378,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_47);
var _49 = CreText('49',429,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_49);
var _35 = CreText('35',77,312,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_35);
var _8 = CreText('8',127,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_8);
var _31 = CreText('31',177,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_31);
var _38 = CreText('38',228,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_38);
var _11 = CreText('11',278,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_11);
var _40 = CreText('40',328,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_40);
var _13 = CreText('13',378,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_13);
var _50 = CreText('50',429,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_50);
var _14 = CreText('14',77,267,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_14);
var _15 = CreText('15',127,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_15);
var _32 = CreText('32',177,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_32);
var _17 = CreText('17',228,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_17);
var _18 = CreText('18',278,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_18);
var _43 = CreText('43',328,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_43);
var _20 = CreText('20',378,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_20);
var _51 = CreText('51',429,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_51);
var _21 = CreText('21',77,223,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_21);
var _22 = CreText('22',127,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_22);
var _23 = CreText('23',177,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_23);
var _29 = CreText('29',228,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_29);
var _25 = CreText('25',278,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_25);
var _26 = CreText('26',328,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_26);
var _27 = CreText('27',378,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_27);
var _52 = CreText('52',429,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_52);
var _28 = CreText('28',77,179,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_28);
var _24 = CreText('24',127,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_24);
var _30 = CreText('30',177,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_30);
var _9 = CreText('9',228,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_9);
var _16 = CreText('16',278,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_16);
var _33 = CreText('33',328,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_33);
var _34 = CreText('34',378,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_34);
var _53 = CreText('53',429,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_53);
var _7 = CreText('7',77,135,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_7);
var _36 = CreText('36',127,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_36);
var _5 = CreText('5',177,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_5);
var _10 = CreText('10',228,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_10);
var _4 = CreText('4',278,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_4);
var _12 = CreText('12',328,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_12);
var _42 = CreText('42',77,92,49,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_42);
var _19 = CreText('19',127,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_19);
var _2 = CreText('2',177,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_2);
var _1 = CreText('1',228,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_1);
var _46 = CreText('46',278,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_46);
var _6 = CreText('6',328,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_6);
var _41 = CreText('41',378,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_41);
var _54 = CreText('54',429,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_54);
var _48 = CreText('48',378,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_48);
var _55 = CreText('55',429,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_55);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#c0ffff','','','','ID_IMAGE27.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var Image = CreText('Image ',66,74,530,338,'','rgba(0, 0, 0, 0)','','','','ID_BK_13.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
Page_2.add(Image);
var _0 = CreText('0',70,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','2','4','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_0);
var _1 = CreText('1',123,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_1);
var _2 = CreText('2',176,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_2);
var _3 = CreText('3',229,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_3);
var _4 = CreText('4',282,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_4);
var _5 = CreText('5',335,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_5);
var _6 = CreText('6',388,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_6);
var _7 = CreText('7',70,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_7);
var _8 = CreText('8',123,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_8);
var _9 = CreText('9',176,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_9);
var _10 = CreText('10',229,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_10);
var _11 = CreText('11',282,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_11);
var _12 = CreText('12',335,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_12);
var _13 = CreText('13',388,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_13);
var _14 = CreText('14',70,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_14);
var _15 = CreText('15',123,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_15);
var _16 = CreText('16',176,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_16);
var _17 = CreText('17',229,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_17);
var _18 = CreText('18',282,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_18);
var _19 = CreText('19',335,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_19);
var _20 = CreText('20',388,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_20);
var _21 = CreText('21',70,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_21);
var _22 = CreText('22',123,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_22);
var _23 = CreText('23',176,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_23);
var _24 = CreText('24',229,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_24);
var _25 = CreText('25',282,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_25);
var _26 = CreText('26',335,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_26);
var _27 = CreText('27',388,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_27);
var _28 = CreText('28',70,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_28);
var _29 = CreText('29',123,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_29);
var _30 = CreText('30',176,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_30);
var _31 = CreText('31',229,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_31);
var _32 = CreText('32',282,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_32);
var _33 = CreText('33',335,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_33);
var _34 = CreText('34',388,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_34);
var _35 = CreText('35',70,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_35);
var _36 = CreText('36',123,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_36);
var _37 = CreText('37',176,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_37);
var _38 = CreText('38',229,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_38);
var _39 = CreText('39',282,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_39);
var _40 = CreText('40',335,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_40);
var _41 = CreText('41',388,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_41);
var _42 = CreText('42',70,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_42);
var _43 = CreText('43',123,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_43);
var _44 = CreText('44',176,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','ID_IMAGE_42.JPG',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','2','2','#ffffff','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_44);
var _45 = CreText('45',229,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_45);
var _46 = CreText('46',282,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_46);
var _47 = CreText('47',335,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_47);
var _48 = CreText('48',388,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_48);
var _49 = CreText('49',441,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_49);
var _50 = CreText('50',441,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_50);
var _51 = CreText('51',441,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_51);
var _52 = CreText('52',441,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_52);
var _53 = CreText('53',441,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_53);
var _54 = CreText('54',441,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_54);
var _55 = CreText('55',441,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_55);
var _1_1 = CreText('1_1',-44,467,29,27,"",'#008080','#ffffff','#00008b','#ffffff','',12,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#008080','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var count =70;
var select= GetVar("m_select");
var name = GetName("");

if(select==name)
	return;
PlayWave("","","ID_SOUND2");
SetColor("","",-1,-1,-1,GetVar(name));
InvalidateObj("","");
	if(select=="")
	{
		SetVar("m_select",name);
		return;
	}
	else
	{
		if(GetVar(name)==GetVar(select))
		{
			PlayWave("","","ID_SOUND_DUNG2");
	
			AnimationMagic("","",10,5,22);
			Delay(200);
			AnimationMagic("",select,10,5,22);
			SetShowObject("",name,0);
			SetShowObject("",select,0);
			var k=0,b=0;
			while(k<count&&b==0)
			{
				if(GetShowObject("",k)==1)
				b=1;
				k++;
			}
			if(b==0)
			{
				AnimationFly("","Image ",30,5,13);
				PlayWave("","","ID_SOUND_OK");
				for(var k=10;k<26;k++)
				{
				AnimationMagic("","Image",50,3,k);
				Delay(200);
				}
				KillTimerPage();
				return;
			}
		}
		else
		{
			PlayWave("","","ID_SOUND_SAI");		
			Delay(500);
			SetColor("",name,0,128,128);
			SetColor("",select,0,128,128);
			SetVar("m_select",name);
		}
		SetVar("m_select","");		
	}
  return;
}
 );
Page_2.add(_1_1);
var Begin = CreText('Begin',140,24,110,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE21.PNG',14,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','1','2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//____________________________________________________
var count=70;
var tem= count/2;
var a=[count];
for(var k=0;k<count;k++)
{
a[k]=0;
SetColor("",k,0,128,128);
SetShowObject("",k,1);
}
var i=0;
myRandom2(136,a,count);
var b=[tem];
myRandom2(tem,b,tem);
for(i=0;i<tem;i++)
{
	var tem2=b[i];
	a[tem+tem2]=a[i];
}
XaoTronMang(a,count);
for(i=0;i<count;i++)
{
	var id="ID_IMAGE_"+ a[i];
	a[i]=id;
}
for(i =0;i<count;i++)
{
	SetVar(i,a[i]);
}
KillTimerPage();
SetText("","Timer",300);
SetTimerPage(2000);
SetRsc("","Image ","ID_BK_"+ Random(28));
  return;

}

 );
Page_2.add(Begin);
var Timer = CreText('Timer',254,7,98,57,"TIME",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE11.GIF',26,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Timer);
var _56 = CreText('56',494,362,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_56);
var _57 = CreText('57',494,315,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_57);
var _58 = CreText('58',494,268,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_58);
var _59 = CreText('59',494,221,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_59);
var _60 = CreText('60',494,175,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_60);
var _61 = CreText('61',494,124,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_61);
var _62 = CreText('62',494,77,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_62);
var _63 = CreText('63',547,362,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_63);
var _64 = CreText('64',547,315,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_64.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_64);
var _65 = CreText('65',547,268,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_65.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_65);
var _66 = CreText('66',547,221,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_66.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_66);
var _67 = CreText('67',547,175,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_67.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_67);
var _68 = CreText('68',547,124,48,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_68.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_68);
var _69 = CreText('69',547,77,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
_69.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_69);
var Drawtext2 = CreText('Draw text 2',14,430,40,36,"",'#ffffff','#ffffff','#000000','#000000','ID_BUT3.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
Page_2.add(Drawtext2);
stage.add(Page_2);
InitLacVietScript();
};
