folder_Resource ='data/lat_hinh_giong_nhau';
var arrValue =[];
var rangeImage = 105;
var numObject = 6;
var maxObject = 28;

var select1="";
var select2="";
var b_finish=0;
var nameObject="";

function myRandom()
{
  
  var num  = numObject /2;
  var Count = 0;
//GetVer();
b_finish=0;
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
	{
	SetText("","o_"+t,arrValue[t]);
	SetColor("", "o_" + t, -1, -1, -1, "ID_IMAGE_" + arrValue[t]);
	SetColor("","o_"+t,-1,-1,-1);
	SetShowObject("","o_"+t,1);	
	}
for (t = numObject ; t < maxObject ; t++)
	{
		SetShowObject("","o_"+t,0);
	}
SetShowObject("","msg",0);
}


function CloseRever( nameObj)
{
SetColor("",nameObj,-1,-1,-1);	
Reverse(nameObj);
select1="";
select2="";
}
function CloseObj( nameObj)
{
var l = GetLeft("",nameObj) + GetWidth("",nameObj)/2;
transitionTo("",nameObj,1000,l,-1,'{"x":0,"y":1}',0,1,10,"CloseRever('"+nameObj+"')");
  return;
}
function CheckClick()
{
	if(select2!="")
	if(GetText("",select1 )== GetText("",select2))
		{
			PlayWave("","","ID_SOUND_DUNG2");
			b_finish++;			
			SetText("",select1,"");
			SetText("",select2,"");
			select1="";
			select2="";
			if(b_finish == numObject/2)
			{
				for (var s = 0 ; s < 5 ; s++)
				{
					SetShowObject("","s_"+s,0);
				}
				var sao = 2;
				 if(numObject  == 12)
					sao = 3;
				else if(numObject  == 20)
					sao = 4;
				else if(numObject  == 28)
					sao = 5;
				for (s = 0 ; s < sao ; s++)
				{
					SetShowObject("","s_"+s,1);
				}
				SetShowObject("","msg",1);
				PlayWave("","","ID_SOUND_OK");
				UpdateScore(sao);
				return;
			}
		}
		else
		{
			PlayWave("","","ID_SOUND_SAI");	
			CloseObj(select1);	
			CloseObj(select2);	
		}
}

function OpenRever( nameObj,  idImage)
{
   SetColor("",nameObj,-1,-1,-1,idImage );
   Reverse(nameObj);
}
function OpenObj( nameObj,  idImage)
{
var l = GetLeft("",nameObj) + GetWidth("",nameObj)/2;
transitionTo("",nameObj,200,l,-1,'{"x":0,"y":1}',0,1,10,"OpenRever('"+nameObj+"','"+idImage+"')","CheckClick()");
return;
}


function LatHinh()
{
var name = GetName("");
var txt = GetText("","");
if(select1==name ||txt =="")
return;
PlayWave("","","ID_SOUND2");
	if(select1=="")
	{
		select1 = name;
	}
	else
	{
		select2 = name;	
	}
OpenObj(name,"ID_IMAGE_"+txt);
  return;
}
function SetLever()
{
    numObject  = GetText("","");
    myRandom();
}
function Page_1()
{
myRandom();
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
 width: 640,
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#b96c33','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#b96c33','2','2','0','','0','0','0','0',0,0,'');
var Tieu_de = CreText('Tieu_de',159,26,322,38,"Lật hình giống nhau",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ff8000','0','0','#ffff00','0','0','4','2',10,10,'rgba(0,0,0,0)',0,1.50);
Tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetRsc("","obxxx","ID_IMAGE_1");
  return;
}
 );
var o_0 = CreText('o_0',223,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','2','4','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_1 = CreText('o_1',296,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_2 = CreText('o_2',369,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_3 = CreText('o_3',223,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_4 = CreText('o_4',296,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_5 = CreText('o_5',369,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_6 = CreText('o_6',223,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_7 = CreText('o_7',296,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_8 = CreText('o_8',369,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_9 = CreText('o_9',223,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_10 = CreText('o_10',296,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_11 = CreText('o_11',369,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_12 = CreText('o_12',150,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_13 = CreText('o_13',150,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_14 = CreText('o_14',150,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_15 = CreText('o_15',150,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_16 = CreText('o_16',442,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_17 = CreText('o_17',442,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_18 = CreText('o_18',442,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();  return;
}
 );
var o_19 = CreText('o_19',442,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_20 = CreText('o_20',77,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_21 = CreText('o_21',77,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_22 = CreText('o_22',77,245,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_23 = CreText('o_23',77,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_24 = CreText('o_24',514,91,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_25 = CreText('o_25',514,168,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_26 = CreText('o_26',514,246,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var o_27 = CreText('o_27',514,323,71,75,"",'#008080','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','10','0',2,'#000000','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LatHinh();
  return;
}
 );
var Text_1 = CreText('Text_1',394,428,38,38,"6",'#ff6820','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',2,'0.00','0','0',4,'#ffff00','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetLever();
  return;
}
 );
var Text_2 = CreText('Text_2',448,428,38,38,"12",'#ff6820','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',2,'0.00','0','0',4,'#ffff00','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetLever();
  return;
}
 );
var Text_3 = CreText('Text_3',502,428,38,38,"20",'#ff6820','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',2,'0.00','0','0',4,'#ffff00','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetLever();
  return;
}
 );
var Text_4 = CreText('Text_4',556,428,38,38,"28",'#ff6820','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',2,'0.00','0','0',4,'#ffff00','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetLever();
  return;
}
 );
var Text_5 = CreText('Text_5',211,179,234,131,"\r\nBạn làm tốt lắm",'#8b0000','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','top',0,'0.00','0','0',3,'#ffffff','#ff0000','4','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var s_3 = CreText('s_3',235,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_1 = CreText('s_1',315,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_0 = CreText('s_0',275,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_2 = CreText('s_2',355,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_4 = CreText('s_4',396,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var playagain = CreText('playagain',286,270,86,31,"Chơi Lại",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','9','0',0,'rgba(0,0,0,0)','#58b000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
playagain.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(numObject == 0)
      numObject  =6;
else if(numObject == 6)
      numObject  =12;
else if(numObject == 12)
      numObject  =20;
else if(numObject == 20)
      numObject  =28;
myRandom();
  return;
}
 );
var title = CreText('title',244,164,169,28,"GAME CHO CON",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',0,'#ffff00','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:253,height:169});
msg.add(Text_5,playagain,s_3,s_0,s_1,s_2,s_4,title);
Page_1.add(Page_1_Backrounnd,Tieu_de,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,Text_1,Text_2,Text_3,Text_4,msg);
stage.add(Page_1);
InitLacVietScript();
};
