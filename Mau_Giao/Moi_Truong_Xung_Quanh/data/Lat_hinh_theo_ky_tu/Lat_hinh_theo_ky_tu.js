folder_Resource ='data/Lat_hinh_theo_ky_tu';
function RamdomSort1( a, so)
{
    InitRandom();
    a[0]=0;
    var i=1;
    while(i<=so)
      {
         var t= Random(so)+1;
         var k=1;
	   while(k<=i)
	     {
		   if(t==a[k])
		     {
		        t= Random(so)+1;
		        k=0;
		      }
		    k++;
	     }  
	       a[i]=t;	
	       i++;
         }
}
function RamdomSort( a, so)
{
   InitRandom();
   a[0]=0;
   var i=1;
   while(i<=so)
     {
        var t= Random(so)+1;
         var k=1;
	   while(k<=i)
	     {
		    var name1="Image_"+t;
		    if(GetRsc("",name1)==a[k])
		      {
		         t= Random(so)+1;
		         k=0;
		       }
		     k++;
	      }
	   var name="Image_"+t;
	   a[i]= GetRsc("",name);	
	   i++;
    }
}
//////////////////////////
function Hoan_Vi()
{
     var id;id[0]="";
    RamdomSort(id,16);
    for(var i=1;i<=16;i++)
    {
       var name="Image_"+i;
       SetRsc("",name,id[i]);
       InvalidateObj("",name);
     }
}
function Page_1()
{
      PlayWave("","","ID_SOUND_BG");
	SetVar("m_begin_rsc","");
      var imgArr=["","ID_IMAGE_1_1","ID_IMAGE_1_2","ID_IMAGE_1_3","ID_IMAGE_1_4","ID_IMAGE_1_5","ID_IMAGE_1_6","ID_IMAGE_1_7","ID_IMAGE_1_8","ID_IMAGE_TEXT_1_1","ID_IMAGE_TEXT_1_2","ID_IMAGE_TEXT_1_3","ID_IMAGE_TEXT_1_4","ID_IMAGE_TEXT_1_5","ID_IMAGE_TEXT_1_6","ID_IMAGE_TEXT_1_7","ID_IMAGE_TEXT_1_8"];
      var id=[17];
      RamdomSort1(id,16);
	    for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
     return;
}


//////////////////////////////////
function Page_2()
{
      PlayWave("","","ID_SOUND_BG");
      SetVar("m_begin_rsc","");
     // SetVar("m_begin_name","");
      var imgArr=["","ID_IMAGE_2_1","ID_IMAGE_2_2","ID_IMAGE_2_3","ID_IMAGE_2_4","ID_IMAGE_2_5","ID_IMAGE_2_6","ID_IMAGE_2_7","ID_IMAGE_2_8","ID_IMAGE_TEXT_2_1","ID_IMAGE_TEXT_2_2","ID_IMAGE_TEXT_2_3","ID_IMAGE_TEXT_2_4","ID_IMAGE_TEXT_2_5","ID_IMAGE_TEXT_2_6","ID_IMAGE_TEXT_2_7","ID_IMAGE_TEXT_2_8"];
      var id=[17];
      RamdomSort1(id,16);
	    for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
     return;
}



function Page_3()
{
      PlayWave("","","ID_SOUND_BG");
      SetVar("m_begin_rsc","");
     // SetVar("m_begin_name","");
      var imgArr=["","ID_IMAGE_3_1","ID_IMAGE_3_2","ID_IMAGE_3_3","ID_IMAGE_3_4","ID_IMAGE_3_5","ID_IMAGE_3_6","ID_IMAGE_3_7","ID_IMAGE_3_8","ID_IMAGE_TEXT_3_1","ID_IMAGE_TEXT_3_2","ID_IMAGE_TEXT_3_3","ID_IMAGE_TEXT_3_4","ID_IMAGE_TEXT_3_5","ID_IMAGE_TEXT_3_6","ID_IMAGE_TEXT_3_7","ID_IMAGE_TEXT_3_8"];
      var id=[17];
      RamdomSort1(id,16);
	    for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE7.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Image_1 = CreText('Image_1',178,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_1.on('mouseup touchend dragend',//////////////////////////////
function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   PlayWave("","","ID_SOUND1");
   var beginRsc = GetVar("m_begin_rsc");
   var curname= GetName("");
   if(GetRsc("",curname)!="ID_IMAGE_BG")
	return;
   SetRsc("",curname, GetVar(curname));
   InvalidateObj("",curname);
    if(beginRsc=="")
    {
           SetVar("m_begin_rsc",curname);
		return;            
    }
  else
	{
	    var Rsc_curname= GetRsc("",curname);
	    var Rsc_Begin= GetRsc("",beginRsc);
	if(curname==beginRsc)
	{
            SetVar("m_begin_rsc","");
		SetRsc("",curname);
		InvalidateObj("",curname);
		return;
	}
  	var new_Rsc_curname= rightStr(Rsc_curname,3);
    	var new_Rsc_Begin= rightStr(Rsc_Begin,3);
    	if(new_Rsc_curname==new_Rsc_Begin)
		{
                  PlayWave("","","ID_SOUND_TRUE");
                  //SetShowObject("",curname,0)	;
			//SetShowObject("",beginRsc,0);
		}   
	else
		{
			Delay(2000);
			SetRsc("",curname);
			SetRsc("",beginRsc);
			InvalidateObj("",curname);
			InvalidateObj("",beginRsc);
		}
		   SetVar("m_begin_rsc","");
	}
  if(GetRsc("","Image_1") != "ID_IMAGE_BG" && GetRsc("","Image_2") != "ID_IMAGE_BG" && GetRsc("","Image_3") != "ID_IMAGE_BG" && GetRsc("","Image_4") != "ID_IMAGE_BG" && GetRsc("","Image_5") != "ID_IMAGE_BG" && GetRsc("","Image_6") != "ID_IMAGE_BG" && GetRsc("","Image_7") != "ID_IMAGE_BG" && GetRsc("","Image_8") != "ID_IMAGE_BG" && GetRsc("","Image_9") != "ID_IMAGE_BG" && GetRsc("","Image_10") != "ID_IMAGE_BG" && GetRsc("","Image_11") != "ID_IMAGE_BG" && GetRsc("","Image_12") != "ID_IMAGE_BG" && GetRsc("","Image_13") != "ID_IMAGE_BG" && GetRsc("","Image_14") != "ID_IMAGE_BG" && GetRsc("","Image_15") != "ID_IMAGE_BG" && GetRsc("","Image_16") != "ID_IMAGE_BG")
      {
            Delay(1500);
            SetVar("m_begin_rsc","");
            for(var j=1;j<=16;j++) 
            {
                SetRsc("","Image_"+j,"ID_IMAGE_BG");
                InvalidateObj("","Image_"+j);
             }
        var imgArr=["","ID_IMAGE_1_1","ID_IMAGE_1_2","ID_IMAGE_1_3","ID_IMAGE_1_4","ID_IMAGE_1_5","ID_IMAGE_1_6","ID_IMAGE_1_7","ID_IMAGE_1_8","ID_IMAGE_TEXT_1_1","ID_IMAGE_TEXT_1_2","ID_IMAGE_TEXT_1_3","ID_IMAGE_TEXT_1_4","ID_IMAGE_TEXT_1_5","ID_IMAGE_TEXT_1_6","ID_IMAGE_TEXT_1_7","ID_IMAGE_TEXT_1_8"];
        var id=[17];
        RamdomSort1(id,16);
	   for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
       }
          return; 
   }

 );
Page_1.add(Image_1);
var Image_2 = CreText('Image_2',250,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_2);
var Image_3 = CreText('Image_3',322,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',393,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_4);
var Image_5 = CreText('Image_5',178,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_5);
var Image_6 = CreText('Image_6',250,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_6);
var Image_7 = CreText('Image_7',322,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_7);
var Image_8 = CreText('Image_8',393,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_8);
var Image_9 = CreText('Image_9',178,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_9);
var Image_10 = CreText('Image_10',250,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_10);
var Image_11 = CreText('Image_11',321,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_11);
var Image_12 = CreText('Image_12',393,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_12);
var Image_13 = CreText('Image_13',178,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_13);
var Image_14 = CreText('Image_14',250,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_14);
var Image_15 = CreText('Image_15',321,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_15);
var Image_16 = CreText('Image_16',393,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_1.add(Image_16);
var Next = CreText('Next',578,424,49,50,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
  return;
}
 );
Page_1.add(Next);
var Home = CreText('Home',16,421,49,50,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("\\Home.lvm","Page 2");
  return;
}
 );
Page_1.add(Home);
var Animategif_1 = CreText('Animate gif_1',591,4,47,50,'','rgba(0, 0, 0, 0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Animategif_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage(4);
  return;
}
 );
Page_1.add(Animategif_1);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE7.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var Image_1 = CreText('Image_1',178,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_1.on('mouseup touchend dragend',//////////////////////
function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   PlayWave("","","ID_SOUND1");
   var beginRsc = GetVar("m_begin_rsc");
   var curname= GetName("");
   if(GetRsc("",curname)!="ID_IMAGE_BG")
	return;
   SetRsc("",curname, GetVar(curname));
   InvalidateObj("",curname);
    if(beginRsc=="")
    {
           SetVar("m_begin_rsc",curname);
		return;            
    }
  else
	{
	    var Rsc_curname= GetRsc("",curname);
	    var Rsc_Begin= GetRsc("",beginRsc);
	if(curname==beginRsc)
	{
            SetVar("m_begin_rsc","");
		SetRsc("",curname);
		InvalidateObj("",curname);
		return;
	}
  	var new_Rsc_curname= rightStr(Rsc_curname,3);
    	var new_Rsc_Begin= rightStr(Rsc_Begin,3);
    	if(new_Rsc_curname==new_Rsc_Begin)
		{
                  PlayWave("","","ID_SOUND_TRUE");
                  //SetShowObject("",curname,0)	;
			//SetShowObject("",beginRsc,0);
		}   
	else
		{
			Delay(1500);
			SetRsc("",curname);
			SetRsc("",beginRsc);
			InvalidateObj("",curname);
			InvalidateObj("",beginRsc);
		}
		   SetVar("m_begin_rsc","");
	}
    if(GetRsc("","Image_1") != "ID_IMAGE_BG" && GetRsc("","Image_2") != "ID_IMAGE_BG" && GetRsc("","Image_3") != "ID_IMAGE_BG" && GetRsc("","Image_4") != "ID_IMAGE_BG" && GetRsc("","Image_5") != "ID_IMAGE_BG" && GetRsc("","Image_6") != "ID_IMAGE_BG" && GetRsc("","Image_7") != "ID_IMAGE_BG" && GetRsc("","Image_8") != "ID_IMAGE_BG" && GetRsc("","Image_9") != "ID_IMAGE_BG" && GetRsc("","Image_10") != "ID_IMAGE_BG" && GetRsc("","Image_11") != "ID_IMAGE_BG" && GetRsc("","Image_12") != "ID_IMAGE_BG" && GetRsc("","Image_13") != "ID_IMAGE_BG" && GetRsc("","Image_14") != "ID_IMAGE_BG" && GetRsc("","Image_15") != "ID_IMAGE_BG" && GetRsc("","Image_16") != "ID_IMAGE_BG")
      {
            Delay(1500);
            SetVar("m_begin_rsc","");
            for(var j=1;j<=16;j++) 
            {
                SetRsc("","Image_"+j,"ID_IMAGE_BG");
                InvalidateObj("","Image_"+j);
             }
        var imgArr=["","ID_IMAGE_2_1","ID_IMAGE_2_2","ID_IMAGE_2_3","ID_IMAGE_2_4","ID_IMAGE_2_5","ID_IMAGE_2_6","ID_IMAGE_2_7","ID_IMAGE_2_8","ID_IMAGE_TEXT_2_1","ID_IMAGE_TEXT_2_2","ID_IMAGE_TEXT_2_3","ID_IMAGE_TEXT_2_4","ID_IMAGE_TEXT_2_5","ID_IMAGE_TEXT_2_6","ID_IMAGE_TEXT_2_7","ID_IMAGE_TEXT_2_8"];

        var id=[17];
        RamdomSort1(id,16);
	   for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
       }

     return; 
}

 );
Page_2.add(Image_1);
var Image_2 = CreText('Image_2',250,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_2);
var Image_3 = CreText('Image_3',322,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_3);
var Image_4 = CreText('Image_4',393,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_4);
var Image_5 = CreText('Image_5',178,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_5);
var Image_6 = CreText('Image_6',250,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_6);
var Image_7 = CreText('Image_7',322,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_7);
var Image_8 = CreText('Image_8',393,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_8);
var Image_9 = CreText('Image_9',178,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_9);
var Image_10 = CreText('Image_10',250,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_10);
var Image_11 = CreText('Image_11',321,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_11);
var Image_12 = CreText('Image_12',393,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_12);
var Image_13 = CreText('Image_13',178,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_13);
var Image_14 = CreText('Image_14',250,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_14);
var Image_15 = CreText('Image_15',321,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_15);
var Image_16 = CreText('Image_16',393,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_2.add(Image_16);
var next = CreText('next',573,419,49,50,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.GIF',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
  return;
}
 );
Page_2.add(next);
var back = CreText('back',27,419,49,50,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//OpenFile("\\Home.lvm","Page 2");
PrevPage();
  return;
}
 );
Page_2.add(back);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE7.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var Image_1 = CreText('Image_1',178,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_1.on('mouseup touchend dragend',
////////////////////////////////
function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   PlayWave("","","ID_SOUND1");
   var beginRsc = GetVar("m_begin_rsc");
   var curname= GetName("");
   if(GetRsc("",curname)!="ID_IMAGE_BG")
	return;
   SetRsc("",curname, GetVar(curname));
   InvalidateObj("",curname);
    if(beginRsc=="")
    {
           SetVar("m_begin_rsc",curname);
		return;            
    }
  else
	{
	    var Rsc_curname= GetRsc("",curname);
	    var Rsc_Begin= GetRsc("",beginRsc);
	if(curname==beginRsc)
	{
            SetVar("m_begin_rsc","");
		SetRsc("",curname);
		InvalidateObj("",curname);
		return;
	}
  	var new_Rsc_curname= rightStr(Rsc_curname,3);
    	var new_Rsc_Begin= rightStr(Rsc_Begin,3);
    	if(new_Rsc_curname==new_Rsc_Begin)
		{
                  PlayWave("","","ID_SOUND_TRUE");
                  //SetShowObject("",curname,0)	;
			//SetShowObject("",beginRsc,0);
		}   
	else
		{
			Delay(500);
			SetRsc("",curname);
			SetRsc("",beginRsc);
			InvalidateObj("",curname);
			InvalidateObj("",beginRsc);
		}
		   SetVar("m_begin_rsc","");
	}
     if(GetRsc("","Image_1") != "ID_IMAGE_BG" && GetRsc("","Image_2") != "ID_IMAGE_BG" && GetRsc("","Image_3") != "ID_IMAGE_BG" && GetRsc("","Image_4") != "ID_IMAGE_BG" && GetRsc("","Image_5") != "ID_IMAGE_BG" && GetRsc("","Image_6") != "ID_IMAGE_BG" && GetRsc("","Image_7") != "ID_IMAGE_BG" && GetRsc("","Image_8") != "ID_IMAGE_BG" && GetRsc("","Image_9") != "ID_IMAGE_BG" && GetRsc("","Image_10") != "ID_IMAGE_BG" && GetRsc("","Image_11") != "ID_IMAGE_BG" && GetRsc("","Image_12") != "ID_IMAGE_BG" && GetRsc("","Image_13") != "ID_IMAGE_BG" && GetRsc("","Image_14") != "ID_IMAGE_BG" && GetRsc("","Image_15") != "ID_IMAGE_BG" && GetRsc("","Image_16") != "ID_IMAGE_BG")
      {
            Delay(1500);
            SetVar("m_begin_rsc","");
            for(var j=1;j<=16;j++) 
            {
                SetRsc("","Image_"+j,"ID_IMAGE_BG");
                InvalidateObj("","Image_"+j);
             }
        var imgArr=["","ID_IMAGE_3_1","ID_IMAGE_3_2","ID_IMAGE_3_3","ID_IMAGE_3_4","ID_IMAGE_3_5","ID_IMAGE_3_6","ID_IMAGE_3_7","ID_IMAGE_3_8","ID_IMAGE_TEXT_3_1","ID_IMAGE_TEXT_3_2","ID_IMAGE_TEXT_3_3","ID_IMAGE_TEXT_3_4","ID_IMAGE_TEXT_3_5","ID_IMAGE_TEXT_3_6","ID_IMAGE_TEXT_3_7","ID_IMAGE_TEXT_3_8"];
        var id=[17];
        RamdomSort1(id,16);
	   for (var i=1;i<=16;i++)
		{
		   	var strName = "Image_"+i;
			SetVar(strName,imgArr[id[i]]);
		}
       }


     return; 
}

 );
Page_3.add(Image_1);
var Image_2 = CreText('Image_2',250,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_2);
var Image_3 = CreText('Image_3',322,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_3);
var Image_4 = CreText('Image_4',393,76,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_4);
var Image_5 = CreText('Image_5',178,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_5);
var Image_6 = CreText('Image_6',250,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_6);
var Image_7 = CreText('Image_7',322,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_7);
var Image_8 = CreText('Image_8',393,158,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_8);
var Image_9 = CreText('Image_9',178,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_9);
var Image_10 = CreText('Image_10',250,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_10);
var Image_11 = CreText('Image_11',321,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_11);
var Image_12 = CreText('Image_12',393,241,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_12);
var Image_13 = CreText('Image_13',178,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_13);
var Image_14 = CreText('Image_14',250,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_14);
var Image_15 = CreText('Image_15',321,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_15);
var Image_16 = CreText('Image_16',393,325,72,84,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_BG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetScriptObj("","Image_1",0);
  return;
}
 );
Page_3.add(Image_16);
var back = CreText('back',28,417,49,50,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
//OpenFile("\\Home.lvm","Page 2");
PrevPage();
  return;
}
 );
Page_3.add(back);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_4.add(Page4_Backrounnd);
var close_OH = CreText('close_OH',17,434,31,31,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE11.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
close_OH.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage(1);
 // return;
}
 );
Page_4.add(close_OH);
var Drawtext_1 = CreText('Draw text_1',141,135,376,154,"- Nhắp chuột vào các ô để lật xem hình bên trong và tìm hai hình liên quan liên tiếp nhau.\r\n\r\n- Vào trang tiếp theo bằng cách nhắp chuột vào nút mũi tên sang phải.\r\n\r\n- Nhắp chuột vào nút mũi tên sang trái để về trang trước. \r\n",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',14,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Drawtext_1);
stage.add(Page_4);
InitLacVietScript();
};
