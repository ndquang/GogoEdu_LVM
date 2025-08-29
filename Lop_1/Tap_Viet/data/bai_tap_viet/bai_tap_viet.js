folder_Resource ='data/bai_tap_viet';
var dem= 0;
var maxBai = 83;
function OnClickTV()
{
    var text=GetText("","");
    SpeakVN("","",text);
     SetText("","Text_bai",text); 
     var ibh= StringtoNumber(text);
     SetRsc("","Flash_2","ID_FLASH_Bai_"+ibh);
                     SetRsc("","Image_2","ID_IMAGE_Bai_"+ibh);
 InvalidateObj("","Image_2");

}
function NextBT()
{
if(dem>maxBai)
{
return;
}
 PlayWave("","","ID_SOUND_DOWN");
var n = dem+1;
for(var i=1;i<=10;++i)
{  
  SetText("","Text_"+i,"Bài "+n);
  
   if(n > maxBai)
	SetShowObject("","Text_"+i,0);
   else SetShowObject("","Text_"+i,1);
   n++;
}
dem=dem+10;
  return;
}
function PreBT()
{

if(dem<=10)
{
	dem=10;
	return;
}
 PlayWave("","","ID_SOUND_DOWN");
var n = dem-10;
for(var i=10;i>0;--i)
{  
  SetText("","Text_"+i,"Bài "+n);
  SetShowObject("","Text_"+i,1);
  n--;
}
dem=dem-10;
  return;
}
function Page_6()
{
createFlashMarkup('Flash_2', 195, 40, 417 , 167 ,'ID_FLASH_Bai_12.swf','Page 6');
   PlayWave("","","ID_SOUND_BG");
NextBT();
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

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var Drawtext3 = CreText('Draw text 3',4,5,164,469,"gamechocon.com",'#cfe3ff','#ffffff','#000000','#ffffff','ID_IMAGE17.JPG',10,'Verdana','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#cfe3ff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var print = CreText('print',179,6,455,469,"\r\n\r\nhttps://gamechocon.com",'rgba(0,0,0,0)','#ff0000','#c0c0c0','#ffffff','',24,'Verdana','Normal','center','top',0,'0.00','0','0',2,'#ff6820','#ff0000','0','0','rgba(0,0,0,0)','1','1','4','1',1,1,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',214,207,383,263,'','rgba(0,0,0,0)','','','','ID_IMAGE_Bai_12.JPG',0,'','','','',0,'0.00','32','32',0,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Drawtext2 = CreText('Draw text 2',9,22,156,25,"Chọn bài viết",'rgba(0,0,0,0)','#ffffff','#ff00ff','#ffffff','',18,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','rgba(0,85,0,0.73)','0','0','rgba(0,0,0,0)','1','1','4','1',1,0,'rgba(0,0,0,0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  SpeakVN("","","cách cầm bút");
  return;
}
 );
var Text_1 = CreText('Text_1',14,166,63,27,"Bài 1",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_2 = CreText('Text_2',14,204,63,27,"Bài 2",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_3 = CreText('Text_3',14,242,63,27,"Bài 3",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_4 = CreText('Text_4',14,280,63,27,"Bài 4",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_5 = CreText('Text_5',14,320,63,27,"Bài 5",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_6 = CreText('Text_6',93,166,63,27,"Bài 6",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_7 = CreText('Text_7',93,204,63,27,"Bài 7",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_8 = CreText('Text_8',93,242,63,27,"Bài 8",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_9 = CreText('Text_9',93,280,63,27,"Bài 9",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var Text_10 = CreText('Text_10',93,320,63,27,"Bài 10",'#ffffff','#ffffff','#ffffff','#00ff00','ID_IMAGE25.GIF',14,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','1','1','4','1',2,2, '#7f7f7f',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;OnClickTV();}
 );
var next = CreText('next',115,361,33,33,"tiếp",'#ffffff','#000000','rgba(0,0,0,0)','#000000','ID_IMAGE13.PNG',18,'Verdana','Normal','center','middle',2,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;NextBT();}

 );
var pre = CreText('pre',26,360,33,33,"truoc",'#ffffff','#ffffff','rgba(0,0,0,0)','#000000','ID_IMAGE12.PNG',18,'Verdana','Normal','center','middle',2,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;PreBT();}


 );
var Image_1 = CreText('Image_1',62,396,59,59,'','rgba(0,0,0,0)','','','','ID_IMAGE11.PNG',0,'','','','',2,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Print("print");
  return;
}
 );
var Text_bai = CreText('Text_bai',41,72,87,65,"Bài 1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Page_6.add(Page6_Backrounnd,Drawtext3,print,Image_2,Drawtext2,Text_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_7,Text_8,Text_9,Text_10,next,pre,Image_1,Text_bai);
stage.add(Page_6);
InitLacVietScript();
};
