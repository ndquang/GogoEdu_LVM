folder_Resource ='data/xoay_so';
var n=3;
function KiemTra()
{
var i=1;var j=1;var k=1; var b=1;var name="";
while(i<=n && b==1)
{
	while(j<=n && b==1)
	{
	name = i+"_"+j;
	if(GetText("",name)!=k)
	b=0;
	j++;k++;	
	}	
i++;j=1;
}
if(b==1)
{
Delay("300");
PlayWave("","","ID_SOUND2");
SetShowObject("","Animate gif 2",1);
Delay("2000");
SetShowObject("","Animate gif 2",0);

}
}
/////////////////////////////////
function KiemTraPage2()
{
var m=5;
var n=4;
var i=1;var j=1;var k=1; var b=1;var name="";
while(i<=m && b==1)
{
	while(j<=n && b==1)
	{
	name = i+"_"+j;
	if(GetText("",name)!=k)
	b=0;
	j++;k++;	
	}	
i++;j=1;
}
if(b==1)
{
Delay("300");
PlayWave("","","ID_SOUND2");
SetShowObject("","Animate gif 2",1);
Delay("2000");
SetShowObject("","Animate gif 2",0);

}
}

////////////////////////////////
function HoanVi()
{
	var tam="";		
	var t= Random(3)+1;
	var s= Random(3)+1;
	tam =t+"_"+s;
	for(var i=1;i<=n;i++)			
		for(var j=1;j<=n;j++)	
		{
			var name= i+"_"+j;							
			var text = GetText("",name);
			if(text=="")
			{								
				var tex= GetText("",tam);
				var idrsc = GetColor("",tam,"red");
				SetColor("",name,-1,-1,-1,idrsc);					
				SetText("",name,tex);
				SetText("",tam,"");
				SetColor("",tam,128,128,128);
				break	;						
			}						
		}
}
function Page_2()
{
PlayWave("","","ID_SOUND3");
SetShowObject("","Animate gif 2",0);
GetScriptObj("","Image",0);
  return;
}

function Page_1()
{
PlayWave("","","ID_SOUND3");
SetShowObject("","Animate gif 2",0);
GetScriptObj("","Image",0);
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

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#afeeee','','','','ID_IMAGE29.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#afeeee','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var _1_1 = CreText('1_1',253,161,101,83,"2",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM1_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var name="";
var text= GetText("","");
if(text!="")
{
	var i= leftStr(GetName(""),1);
	var j= rightStr(GetName(""),1);
	var b=0;
	var tam=j+1;
	while(tam<= n && b==0)
	{
		name = i+"_"+tam;
		if(GetText("",name)=="")
		b=1;
		tam++;
	}
	tam=j-1;
	while(tam>= 0 && b==0)
	{
		name = i+"_"+ tam;
		if(GetText("",name)!=-1 && GetText("",name)=="")
		b=2;
		tam--;
	}
	tam=i+1;
	while(tam<= n && b==0)
	{
		name= tam+"_"+j;
		if(GetText("",name)=="")
		b=3;
		tam++;
	}
	tam=i-1;
	while(tam> 0 && b==0)
	{
		name= tam+"_"+j;
		if(GetText("",name)=="")
		b=4;
		tam--;
	}
	if(b!=0)
	{			
 	
		var i_name= leftStr(name,1);
		var j_name= rightStr(name,1);
		if(b==1)					
		{
			for(var xep=j_name;xep>j;xep--)
			{
				var tx=i+"_"+xep;
				var ta=xep-1;
				var tx1=i+"_"+ta;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==2)					
		{
			for(var xep=j_name;xep<j;xep++)
			{
				var tx=i+"_"+xep;
				var ta=xep+1;
				var tx1=i+"_"+ta;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==3)					
		{
			for(var xep=i_name;xep>i;xep--)
			{
				var tx=xep+"_"+j;
				var ta=xep-1;
				var tx1=ta+"_"+j;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==4)					
		{
			for(var xep=i_name;xep<i;xep++)
			{
				var tx=xep+"_"+j;
				var ta=xep+1;
				var tx1=ta+"_"+j;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		SetText("","","","aa");	
		SetColor("","",128,128,128);
		PlayWave("","","ID_SOUND1");
		//KiemTra();		
	}
}
  return;
}
 );
Page_2.add(_1_1);
var _3_2 = CreText('3_2',353,329,101,83,"",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM2_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_3_2);
var _1_0 = CreText('1_0',253,77,101,83,"1",'#ffffff','#ffffff','#7f7f7f','#ff0000','ID_CUSTOM1_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
KiemTra();
  return;
}
 );
Page_2.add(_1_0);
var _2_3 = CreText('2_3',456,245,101,83,"6",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM2_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_2_3);
var _new = CreText('new',334,40,116,23,"Trộn ảnh",'#008080','#008080','#ff0000','#00ff00','',18,'Verdana','Bold','center','middle',3,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#008080','0','0','#ffffff','0','0','4','1',5,3,'#282828',0,1.50);
_new.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

	SetText("","kq","xếp ảnh hoàn chỉnh");
	if(GetText("","1_0") =="")
	{
		var idrsc = GetColor("","1_1","red");
		SetColor("","1_0",-1,-1,-1,idrsc);					
		SetText("","1_0",GetText("","1_1"));
		SetText("","1_1","");
		SetColor("","1_1",-1,-1,-1);
	}
	
	for(var them=0;them<3;them++)
	{
	var arSet=[n*n];	
	for(var yy=0;yy<=n*n-1;yy++)
		arSet[yy]=0;var count=0;
	for(var tt=0;tt<=n*n;tt++)	
	{			
		var tam=0;	
		var t="";
		var i=1;var j=1;var kt=1;
		while(i<=n && kt==1)
		{			
			while(j<=n && kt==1)
			{
				var name= i+"_"+j;							
				var text = GetText("",name);
				if(text=="")
				{
					var k= Random(4);
					if(k==0)
					{
						t=j+1;
						tam=i+"_"+t;
					}
					if(k==2||GetText("",tam)==-1)
					{
						t=j-1;
						tam=i+"_"+t;
					}
					if(k==3||GetText("",tam)==-1||tam=="1_0")
					{
						t=i+1;
						tam=t+"_"+j;
					}
					if(k==1||GetText("",tam)==-1)
					{
						t=i-1;
						tam=t+"_"+j;
					}
					
					
					var tex= GetText("",tam);
					var b=1;var h=0;							
					while(b==1&& h<n*n)
					{				
						if(arSet[h]==tam)
							b=0;	
						h++;
					}
					if(tex!=-1&& b==1)
					{
						var idrsc = GetColor("",tam,"red");
						SetColor("",name,-1,-1,-1,idrsc);					
						SetText("",name,tex);
						SetText("",tam,"");
						SetColor("",tam,128,128,128);
						arSet[count]=tam;
						count++;
						kt=0;		
					}		
				}	
				j++;			
			}
			i++;j=1;
		}
	}
}
return;
}

 );
Page_2.add(_new);
var _2_2 = CreText('2_2',354,245,101,83,"7",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM3_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_2_2);
var _2_1 = CreText('2_1',253,245,101,83,"4",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM2_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_2_1);
var Image = CreText('Image',120,111,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE38.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',6,6, '#7f7f7f');
Image.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM2";
//DivideImage("","Image",n,n,id);
var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{

var rsc=id+i+"_"+j;
//Message(rsc);
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
//SetColor("",name,128,128,128,rsc);
SetText("",name,k);
k++;
}
GetScriptObj("","new",0);
  return;
}

 );
Page_2.add(Image);
var Image2 = CreText('Image 2',120,178,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE40.JPG',0,'','','','',0,'0.00','32','32',1,'#000000','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM4";
//DivideImage("","",n,n,id);
var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}

 );
Page_2.add(Image2);
var Image3 = CreText('Image 3',121,243,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE43.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM6";
//DivideImage("","",n,n,id);
var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;

}
  return;
}

 );
Page_2.add(Image3);
var Image4 = CreText('Image 4',59,111,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE37.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,5, '#7f7f7f');
Image4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var id ="ID_CUSTOM1";
//DivideImage("","",n,n,id);
SetText("","1_0","");
//SetColor("","1_0",-1,-1,-1);
SetColor("","1_0",128,128,128);

var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,128,128,128,rsc);
SetText("",name,k);
k++;
}
  return;
}

 );
Page_2.add(Image4);
var Image5 = CreText('Image 5',59,178,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE39.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var id ="ID_CUSTOM3";
//DivideImage("","",n,n,id);
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;

}
  return;
}

 );
Page_2.add(Image5);
var Image6 = CreText('Image 6',59,243,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE42.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
//var id ="ID_CUSTOM6";
//DivideImage("","",n,n,id);

var id ="ID_CUSTOM5";
//DivideImage("","",n,n,id);
SetText("","1_0","");
SetColor("","1_0",128,128,128);

var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;

}
  return;
}

 );
Page_2.add(Image6);
var Image1 = CreText('Image 1',90,367,52,46,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE15.ICO',0,'','','','',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var file=Browse();
if(file=="")
return;

SetText("","1_0","");
SetColor("","1_0",-1,-1,-1);
AddRsc("ID_IMAGE_FILE",file,"IMAGE_OBJ");
SetRsc("","","ID_IMAGE_FILE");
InvalidateObj("","");
var id ="ID_IMAGE_FILE";
DivideImage("","",n,n,id);
var name="";
var k=1;
for(var i=1;i<=n;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}


 );
Page_2.add(Image1);
var Drawtext1 = CreText('Draw text 1',67,81,105,22,"Chọn ảnh.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',18,'Arial','Bold','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'#282828',0,1.50);
Page_2.add(Drawtext1);
var Image8 = CreText('Image 8',19,435,28,28,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var dir= OpenFile("\\Home.lvm","Page 3");
//var dir1 = replaceStr(dir,"\\Games","");
//OpenFile(dir1);
  return;
}
 );
Page_2.add(Image8);
var Drawtext3 = CreText('Draw text 3',51,337,145,22,"Chọn ảnh từ đĩa",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'#ffffff',0,1.50);
Page_2.add(Drawtext3);
var _1_3 = CreText('1_3',456,161,101,83,"3",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM1_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_1_3);
var _1_2 = CreText('1_2',355,161,101,83,"",'#666666','#99ccff','#666666','#ffffff','',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#32cd32','#666666','0','0','rgba(0, 0, 0, 0)','0','0','4','1',-1,0,'#ffffff',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_1_2);
var Animategif2 = CreText('Animate gif 2',310,210,210,93,'','rgba(0, 0, 0, 0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(Animategif2);
var Drawtext2 = CreText('Draw text 2',532,438,71,22,"Mức 2",'#009300','#ffffff','#ffffff','#ffffff','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','1',3,3,'#000000',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Drawtext2);
var _3_1 = CreText('3_1',253,329,101,83,"",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM3_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_3_1);
var _3_3 = CreText('3_3',456,329,101,83,"9",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM3_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_2.add(_3_3);
var gif_1 = CreText('gif_1',588,8,47,48,'','rgba(0, 0, 0, 0)','','','','ID_ANIMATE_GIF2.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
gif_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage(3);
  return;
}
 );
Page_2.add(gif_1);
stage.add(Page_2);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#afeeee','','','','ID_IMAGE29.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#afeeee','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var _1_1 = CreText('1_1',249,135,63,54,"2",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE21_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var name="";
var text= GetText("","");
var m=5;
var n=4;
if(text!="")
{
	var i= leftStr(GetName(""),1);
	var j= rightStr(GetName(""),1);
	var b=0;
	var tam=j+1;
	while(tam<= n && b==0)
	{
		name = i+"_"+tam;
		if(GetText("",name)=="")
		b=1;
		tam++;
	}
	
	tam=j-1;
	while(tam>= 0 && b==0)
	{
		name = i+"_"+ tam;
		if(GetText("",name)!=-1 && GetText("",name)=="")
		b=2;
		tam--;
	}
	tam=i+1;
	while(tam<= m && b==0)
	{
		name= tam+"_"+j;
		if(GetText("",name)=="")
		b=3;
		tam++;
	}
	tam=i-1;
	while(tam> 0 && b==0)
	{
		name= tam+"_"+j;
		if(GetText("",name)=="")
		b=4;
		tam--;
	}
	if(b!=0)
	{			
		//var idrsc = GetColor("","","red");	 	
		var i_name= leftStr(name,1);
		var j_name= rightStr(name,1);
		if(b==1)					
		{
			for(var xep=j_name;xep>j;xep--)
			{
				var tx=i+"_"+xep;
				var ta=xep-1;
				var tx1=i+"_"+ta;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==2)					
		{
			for(var xep=j_name;xep<j;xep++)
			{
				var tx=i+"_"+xep;
				var ta=xep+1;
				var tx1=i+"_"+ta;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==3)					
		{
			for(var xep=i_name;xep>i;xep--)
			{
				var tx=xep+"_"+j;
				var ta=xep-1;
				var tx1=ta+"_"+j;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		else if(b==4)					
		{
			for(var xep=i_name;xep<i;xep++)
			{
				var tx=xep+"_"+j;
				var ta=xep+1;
				var tx1=ta+"_"+j;
				var idrsc = GetColor("",tx1,"red");	 
				var textt = GetText("",tx1);
				SetColor("",tx,-1,-1,-1,idrsc);
				SetText("",tx,textt);	
			}
		}
		SetText("","","","aa");	
		SetColor("","",128,128,128);
		PlayWave("","","ID_SOUND1");
		//KiemTra();		
	}
}
  return;
}
 );
Page_1.add(_1_1);
var _1_2 = CreText('1_2',313,135,63,54,"",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE21_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_1_2);
var _1_3 = CreText('1_3',377,135,63,54,"3",'#ffffff','#ffffff','#7f7f7f','#ffffff','ID_CUSTOM_PAGE21_4.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_1_3);
var _2_1 = CreText('2_1',249,190,63,54,"5",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE22_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_2_1);
var _2_2 = CreText('2_2',313,190,63,54,"6",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE22_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_2_2);
var _2_3 = CreText('2_3',377,190,63,54,"7",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE22_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_2_3);
var _3_1 = CreText('3_1',249,245,63,54,"9",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE23_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_3_1);
var _3_2 = CreText('3_2',313,245,63,54,"10",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE23_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_3_2);
var _3_3 = CreText('3_3',377,245,63,54,"11",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE23_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_3_3);
var _new = CreText('new',335,41,116,23,"Trộn ảnh",'#008080','#008080','#ff0000','#00ff00','',18,'Verdana','Bold','center','middle',3,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#008080','0','0','#ffffff','0','0','4','1',5,3,'#282828',0,1.50);
_new.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
	//

	var m=5,n=4;
	if(GetText("","1_0") =="")
	{
		var idrsc = GetColor("","1_1","red");
		SetColor("","1_0",-1,-1,-1,idrsc);					
		SetText("","1_0",GetText("","1_1"));
		SetText("","1_1","");
		SetColor("","1_1",-1,-1,-1);
	}
	//	
	for(var them=0;them<3;them++)
	{
	var arSet=[m*n];	
	for(var yy=0;yy<=m*n-1;yy++)
		arSet[yy]=0;var count=0;
	for(var tt=0;tt<=m*n;tt++)	
	{			
		var tam=0;	
		var t="";
		var i=1;var j=1;var kt=1;
		while(i<=m && kt==1)
		{			
			while(j<=n && kt==1)
			{
				var name= i+"_"+j;							
				var text = GetText("",name);
				if(text=="")//kiem tra OBj!NULL,va text=""+
				{
					var k= Random(4);
					if(k==0)
					{
						t=j+1;
						tam=i+"_"+t;
					}
					if(k==2||GetText("",tam)==-1)
					{
						t=j-1;
						tam=i+"_"+t;
					}
					if(k==3||GetText("",tam)==-1||tam=="1_0")
					{
						t=i+1;
						tam=t+"_"+j;
					}
					if(k==1||GetText("",tam)==-1)
					{
						t=i-1;
						tam=t+"_"+j;
					}//tinh Obj xung quanh
					
					//
					var tex= GetText("",tam);
					var b=1;var h=0;							
					while(b==1&& h<n*n)
					{				
						if(arSet[h]==tam)
							b=0;	
						h++;
					}
					if(tex!=-1&& b==1)
					{
						var idrsc = GetColor("",tam,"red");
						SetColor("",name,-1,-1,-1,idrsc);					
						SetText("",name,tex);
						SetText("",tam,"");
						SetColor("",tam,128,128,128);
						arSet[count]=tam;
						count++;
						kt=0;		
					//	Delay(50)		;
					}		
				}	
				j++;			
			}
			i++;j=1;
		}
	}
}
return;
}

 );
Page_1.add(_new);
var _1_0 = CreText('1_0',249,80,63,54,"1",'#808080','#808080','#7f7f7f','#ff0000','ID_CUSTOM_PAGE21_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
KiemTraPage2();
  return;
}
 );
Page_1.add(_1_0);
var Image = CreText('Image',121,104,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE18.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',6,6, '#7f7f7f');
Image.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM_PAGE2";
//DivideImage("","Image",4,5,id);
var name="";
var k=1;
for(var i=1;i<=5;i++)
	for(var j=1;j<=4;j++)
	{
	var rsc=id+i+"_"+j;
	name = i+"_"+j;
	SetColor("",name,-1,-1,-1,rsc);
	SetText("",name,k);
	k++;
	}
GetScriptObj("","new",0);
  return;
}

 );
Page_1.add(Image);
var Image2 = CreText('Image 2',121,172,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE46.JPG',0,'','','','',0,'0.00','32','32',1,'#000000','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var m=5,n=4;
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM2_PAGE2";
//DivideImage("","",4,5,id);
var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}

 );
Page_1.add(Image2);
var Image3 = CreText('Image 3',122,237,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE48.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
SetText("","1_0","");
SetColor("","1_0",128,128,128);
var id ="ID_CUSTOM3_PAGE2";
var m=5,n=4;
//DivideImage("","",4,5,id);

var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}

 );
Page_1.add(Image3);
var Image4 = CreText('Image 4',60,105,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE44.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,5, '#7f7f7f');
Image4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var m=5,n=4;
var id ="ID_CUSTOM4_PAGE2";
//DivideImage("","",4,5,id);

SetText("","1_0","");
SetColor("","1_0",128,128,128);
var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}

 );
Page_1.add(Image4);
var Image5 = CreText('Image 5',60,172,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE45.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var m=5,n=4;
var id ="ID_CUSTOM5_PAGE2";
//DivideImage("","",4,5,id);

SetText("","1_0","");
SetColor("","1_0",128,128,128);
var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;

}
  return;
}

 );
Page_1.add(Image5);
var Image6 = CreText('Image 6',60,237,51,47,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE47.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',4,4, '#7f7f7f');
Image6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//var file=Browse();
//AddRsc("ID_IMAGE41",file,"IMAGE_OBJ");
//SetRsc("","Image","ID_IMAGE41");
//InvalidateObj("","Image");
var m=5,n=4;
var id ="ID_CUSTOM6_PAGE2";
//DivideImage("","",4,5,id);
SetText("","1_0","");
SetColor("","1_0",128,128,128);

var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;

}
  return;
}

 );
Page_1.add(Image6);
var Image1 = CreText('Image 1',91,361,52,46,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE15.ICO',0,'','','','',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m=5,n=4;
SetText("","1_0","");
SetColor("","1_0",-1,-1,-1);
var file=Browse();
if(file=="")
return;
AddRsc("ID_IMAGE_FILE",file,"IMAGE_OBJ");
SetRsc("","","ID_IMAGE_FILE");
InvalidateObj("","");
var id ="ID_IMAGE_FILE";
DivideImage("","",n,m,id);
var name="";
var k=1;
for(var i=1;i<=m;i++)
for(var j=1;j<=n;j++)
{
var rsc=id+i+"_"+j;
name = i+"_"+j;
SetColor("",name,-1,-1,-1,rsc);
SetText("",name,k);
k++;
}
  return;
}


 );
Page_1.add(Image1);
var Drawtext1 = CreText('Draw text 1',68,75,105,22,"Chọn ảnh.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',18,'Arial','Bold','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'#282828',0,1.50);
Page_1.add(Drawtext1);
var Image8 = CreText('Image 8',20,430,28,28,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var dir= OpenFile("\\Home.lvm","Page 3");
  return;
}
 );
Page_1.add(Image8);
var Drawtext3 = CreText('Draw text 3',52,331,145,22,"Chọn ảnh từ đĩa",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'#ffffff',0,1.50);
Page_1.add(Drawtext3);
var Animategif2 = CreText('Animate gif 2',311,241,132,53,'','rgba(0, 0, 0, 0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',1,'#ffffff','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(Animategif2);
var _4_1 = CreText('4_1',249,300,63,54,"13",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE25_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_4_1);
var _4_2 = CreText('4_2',313,300,63,54,"14",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE24_2.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_4_2);
var _4_3 = CreText('4_3',377,300,63,54,"15",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE24_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_4_3);
var _5_1 = CreText('5_1',249,355,63,54,"17",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE24_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_5_1);
var _5_2 = CreText('5_2',313,355,63,54,"18",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE25_3.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_5_2);
var _5_3 = CreText('5_3',377,355,63,54,"19",'#808080','#808080','#7f7f7f','#ffffff','',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','0','0','rgba(0, 0, 0, 0)','0','0','4','1',-1,0,'#ffffff',0,1.50);
_5_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_5_3);
var _1_4 = CreText('1_4',441,135,63,54,"4",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE22_4.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_1_4);
var _2_4 = CreText('2_4',441,190,63,54,"8",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE25_1.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_2_4);
var _3_4 = CreText('3_4',441,245,63,54,"12",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE23_4.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_3_4);
var _4_4 = CreText('4_4',441,300,63,54,"16",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE24_4.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_4_4);
var _5_4 = CreText('5_4',441,355,63,54,"20",'#808080','#808080','#7f7f7f','#ffffff','ID_CUSTOM_PAGE25_4.PNG',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#808080','2','2','rgba(0, 0, 0, 0)','0','0','4','1',-1,0, '#ffffff',0,1.50);
_5_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
  return;
}
 );
Page_1.add(_5_4);
stage.add(Page_1);

 var Page_3 = new Kinetic.Layer({name: 'Page_3'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE21.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var close_OH = CreText('close_OH',17,433,31,31,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE19.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
close_OH.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage(1); 
 return;
}
 );
Page_3.add(close_OH);
var Drawtext_1 = CreText('Draw text_1',163,83,343,296,"- Bé nhấn nút “Trộn ảnh”  để bắt đầu chơi.\r\n\r\n- Mỗi ô hình có số thứ tự, bé dùng chuột di chuyển ô hình vào đúng vị trí theo thứ tự.\r\n\r\n- Bé có thể chọn hình khác để chơi ở khung chọn ảnh hoặc bạn có thể chọn ảnh từ thư mục bên ngoài vào máy cho bé bằng cách nhấn vào nút “Chọn ảnh từ đĩa”.\r\n\r\n- Để chơi mức độ khó hơn, bé hãy nhấn vào nút “Mức 2”.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Drawtext_1);
stage.add(Page_3);
InitLacVietScript();
};
