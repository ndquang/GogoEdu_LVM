folder_Resource ='data/lat_hinh_giong_nhau';
var arrValue =[];
var rangeImage = 105;
var numObject = 28;

function myRandom()
{
  var num  = numObject /2;
  var Count = 0;
  for (var ii = 0; ii < num ; ii++)
  {
    var bb = true;
    var iImagef ;
    while (bb)
    {
    	iImagef = Random(rangeImage);
	for (var itest = 0 ; itest < Count; itest++)
	{ 
      	if (arrValue[itest] == iImagef)
	      {
      	   	break;
	      }
      }
	if (itest >= Count)
      bb = false;
    }
    arrValue[Count] = iImagef;
    Count++;
   }

  for (var n = num ; n < numObject ; n++)
	arrValue[n] = arrValue[n-num] ;
//tron
  for (var g = 0 ; g < 30 ; g++)
	{
		var x = Random(numObject );
		var y = Random(numObject );
		while(x==y)
		    y = Random(numObject );
		
		var tam = arrValue[x];
		arrValue[x] = arrValue[y];
		 arrValue[y] = tam ;
	}
	//test
 for (var t = 0 ; t < numObject ; t++)
	SetText("","o_"+t,arrValue[t]);

}

var select="";
var b_finish=0;
function LatHinh()
{

var name = GetName("");
var txt = GetText("","");
if(select==name ||txt =="")
return;
PlayWave("","","ID_SOUND2");
SetColor("","",-1,-1,-1,"ID_IMAGE_"+txt );
	if(select=="")
	{
		select = name;
		return;
	}
	else
	{
		if(GetText("",name)== GetText("",select))
		{
			PlayWave("","","ID_SOUND_DUNG2");
			b_finish++;			
			if(b_finish == numObject/2)
			{
				Message("Finished");
				PlayWave("","","ID_SOUND_OK");
				KillTimerPage();
				return;
			}
			SetText("",name,"");
			SetText("",select,"");
		}
		else
		{
			PlayWave("","","ID_SOUND_SAI");			
			SetColor("",name,0,128,128);
			SetColor("",select,0,128,128);	
			InvalidateObj("","");		
		}
		select="";		
	}
InvalidateObj("","o_0");
  return;
}
function Page_1()
{
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Tieu_de = CreText('Tieu_de',55,16,322,30,"Lật 2 hình giống nhau",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',24,'Verdana','Bold','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','#ffff00','0','0','4','2',10,10,'rgba(0,0,0,0)',0,1.50);
Tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetRsc("","obxxx","ID_IMAGE_1");
  return;
}
 );
var Image = CreText('Image ',76,91,508,306,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
var o_0 = CreText('o_0',79,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'rgba(0,0,0,0)','#008080','0','0','#ffffff','2','4','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_1 = CreText('o_1',150,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_2 = CreText('o_2',221,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_3 = CreText('o_3',292,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_4 = CreText('o_4',363,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_5 = CreText('o_5',434,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_6 = CreText('o_6',505,319,73,73,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_7 = CreText('o_7',79,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_8 = CreText('o_8',150,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_9 = CreText('o_9',221,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_10 = CreText('o_10',292,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_11 = CreText('o_11',363,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_12 = CreText('o_12',434,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_13 = CreText('o_13',505,247,73,71,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_14 = CreText('o_14',79,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_15 = CreText('o_15',150,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_16 = CreText('o_16',221,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_17 = CreText('o_17',292,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_18 = CreText('o_18',363,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();  return;
}
 );
var o_19 = CreText('o_19',434,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_20 = CreText('o_20',505,170,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_21 = CreText('o_21',79,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_22 = CreText('o_22',150,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_23 = CreText('o_23',221,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_24 = CreText('o_24',292,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_25 = CreText('o_25',363,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_26 = CreText('o_26',434,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_27 = CreText('o_27',505,95,73,76,"",'#008080','#ffffff','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var Begin = CreText('Begin',392,16,110,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE2.PNG',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','1','2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
myRandom();
InvalidateObj("","");
}

 );
var Timer = CreText('Timer',532,2,98,57,"000",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE3.GIF',26,'Verdana','Bold','center','bottom',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Image1 = CreText('Image 1',580,424,48,48,'','rgba(0,0,0,0)','','','','ID_IMAGE6.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetColor("","o_0",-1,-1,-1,"ID_IMAGE_"+Random(100));
InvalidateObj("","o_0");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Tieu_de,Image,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,Begin,Timer,Image1);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Image = CreText('Image ',77,92,402,306,'','rgba(0,0,0,0)','','','','ID_IMAGE8.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
var _1_1 = CreText('1_1',46,392,29,27,"",'#008080','#ffffff','#00008b','#ffffff','',12,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'#282828','#008080','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Begin = CreText('Begin',485,96,99,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE2.PNG',14,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','1','2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
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
var Timer = CreText('Timer',483,167,98,59,"TIME",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE3.GIF',24,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext2 = CreText('Draw text 2',5,412,40,36,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE4.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
var Image1 = CreText('Image 1',587,409,39,39,'','rgba(0,0,0,0)','','','','ID_IMAGE6.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var _0 = CreText('0',76,357,49,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','2','4','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _45 = CreText('45',126,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _44 = CreText('44',176,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _3 = CreText('3',227,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _39 = CreText('39',277,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _37 = CreText('37',327,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _47 = CreText('47',377,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _49 = CreText('49',428,357,51,41,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _35 = CreText('35',76,312,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _8 = CreText('8',126,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _31 = CreText('31',176,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _38 = CreText('38',227,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _11 = CreText('11',277,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _40 = CreText('40',327,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _13 = CreText('13',377,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _50 = CreText('50',428,312,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _14 = CreText('14',76,267,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _15 = CreText('15',126,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _32 = CreText('32',176,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _17 = CreText('17',227,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _18 = CreText('18',277,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _43 = CreText('43',327,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _20 = CreText('20',377,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _51 = CreText('51',428,267,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _21 = CreText('21',76,223,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _22 = CreText('22',126,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _23 = CreText('23',176,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _29 = CreText('29',227,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _25 = CreText('25',277,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _26 = CreText('26',327,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _27 = CreText('27',377,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _52 = CreText('52',428,223,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _28 = CreText('28',76,179,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _24 = CreText('24',126,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _30 = CreText('30',176,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _9 = CreText('9',227,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _16 = CreText('16',277,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _33 = CreText('33',327,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _34 = CreText('34',377,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _53 = CreText('53',428,179,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _7 = CreText('7',76,135,49,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _36 = CreText('36',126,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _5 = CreText('5',176,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _10 = CreText('10',227,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _4 = CreText('4',277,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _12 = CreText('12',327,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _42 = CreText('42',76,92,49,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _19 = CreText('19',126,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _2 = CreText('2',176,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _1 = CreText('1',227,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _46 = CreText('46',277,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _6 = CreText('6',327,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _41 = CreText('41',377,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _54 = CreText('54',428,135,51,44,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _48 = CreText('48',377,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _55 = CreText('55',428,92,51,42,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(Page_2_Backrounnd,Image,_1_1,Begin,Timer,Drawtext2,Image1,_0,_45,_44,_3,_39,_37,_47,_49,_35,_8,_31,_38,_11,_40,_13,_50,_14,_15,_32,_17,_18,_43,_20,_51,_21,_22,_23,_29,_25,_26,_27,_52,_28,_24,_30,_9,_16,_33,_34,_53,_7,_36,_5,_10,_4,_12,_42,_19,_2,_1,_46,_6,_41,_54,_48,_55);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Image = CreText('Image ',60,78,530,338,'','rgba(0,0,0,0)','','','','ID_IMAGE9.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',2,2, '#000000');
var _0 = CreText('0',64,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','2','4','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _1 = CreText('1',117,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _2 = CreText('2',170,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _3 = CreText('3',223,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _4 = CreText('4',276,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _5 = CreText('5',329,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _6 = CreText('6',382,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _7 = CreText('7',64,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _8 = CreText('8',117,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _9 = CreText('9',170,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _10 = CreText('10',223,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _11 = CreText('11',276,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _12 = CreText('12',329,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _13 = CreText('13',382,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _14 = CreText('14',64,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _15 = CreText('15',117,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _16 = CreText('16',170,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _17 = CreText('17',223,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _18 = CreText('18',276,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _19 = CreText('19',329,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _20 = CreText('20',382,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _21 = CreText('21',64,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _22 = CreText('22',117,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _23 = CreText('23',170,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _24 = CreText('24',223,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _25 = CreText('25',276,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _26 = CreText('26',329,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _27 = CreText('27',382,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _28 = CreText('28',64,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _29 = CreText('29',117,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _30 = CreText('30',170,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _31 = CreText('31',223,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _32 = CreText('32',276,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _33 = CreText('33',329,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _34 = CreText('34',382,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _35 = CreText('35',64,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _36 = CreText('36',117,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _37 = CreText('37',170,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _38 = CreText('38',223,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _39 = CreText('39',276,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _40 = CreText('40',329,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _41 = CreText('41',382,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _42 = CreText('42',64,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _43 = CreText('43',117,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _44 = CreText('44',170,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','2','2','#ffffff','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _45 = CreText('45',223,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _46 = CreText('46',276,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _47 = CreText('47',329,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _48 = CreText('48',382,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _49 = CreText('49',435,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _50 = CreText('50',435,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _51 = CreText('51',435,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _52 = CreText('52',435,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _53 = CreText('53',435,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _54 = CreText('54',435,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _55 = CreText('55',435,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _1_1 = CreText('1_1',12,444,29,27,"",'#008080','#ffffff','#00008b','#ffffff','',12,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#008080','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Begin = CreText('Begin',266,14,110,36,"    Bắt Đầu",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE2.PNG',14,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','1','2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
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
var Timer = CreText('Timer',503,7,98,57,"TIME",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE3.GIF',26,'Verdana','Bold','center','bottom',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','#ffffff','-3','-2','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var _56 = CreText('56',488,366,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _57 = CreText('57',488,319,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _58 = CreText('58',488,272,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _59 = CreText('59',488,225,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _60 = CreText('60',488,179,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _61 = CreText('61',488,128,52,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _62 = CreText('62',488,81,52,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _63 = CreText('63',541,366,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _64 = CreText('64',541,319,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_64.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _65 = CreText('65',541,272,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_65.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _66 = CreText('66',541,225,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_66.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _67 = CreText('67',541,179,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_67.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _68 = CreText('68',541,128,48,50,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_68.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var _69 = CreText('69',541,81,48,46,"",'#008080','#008080','#ffff00','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#008080','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_69.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
var Drawtext2 = CreText('Draw text 2',5,398,40,36,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE4.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
Page_3.add(Page_3_Backrounnd,Image,_0,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27,_28,_29,_30,_31,_32,_33,_34,_35,_36,_37,_38,_39,_40,_41,_42,_43,_44,_45,_46,_47,_48,_49,_50,_51,_52,_53,_54,_55,_1_1,Begin,Timer,_56,_57,_58,_59,_60,_61,_62,_63,_64,_65,_66,_67,_68,_69,Drawtext2);
stage.add(Page_3);
InitLacVietScript();
};
