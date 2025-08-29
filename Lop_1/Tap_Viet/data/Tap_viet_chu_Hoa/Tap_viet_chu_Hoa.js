folder_Resource ='data/Tap_viet_chu_Hoa';
var dem= 1;
var textspeak="";
var text="";
var idsound="";	
var idchar="";
function ClickPlay()
{ 

text=GetText("","");
idchar=	text;
 switch(text)
   {
    
  case "a": {             
                    textspeak= "cái ca";
                    break;     
                }
  case "ă" : 
             {
                     idchar="aw";
                     textspeak= "măng tre";
                     break;     
               }
   case "â" : 
             {
                    idchar="aa";
                     textspeak= "cái cân";
                     break;     
               }
    case "b" : 
             {
				 textspeak= "bế bé";
					 idsound="ID_SOUND_19";
                      break;     
               }
   case "c" : 
             {                 
                     textspeak= "con cá";
	           idsound="ID_SOUND_2";
                     break;     
               }
 case "d" : 
             {               
                     idsound="ID_SOUND_6";
	           textspeak= "dế mèn";
                     break;     
               }
  case "đ" : 
             {        
             	 idchar="dd";
                     textspeak= "đàn ghi ta";
	     idsound="ID_SOUND_5";
                     break;     
               }
  case "e" : 
             {
         
                     textspeak= "ve sầu";
			   idsound="ID_SOUND_7";
                     break;     
               }
  case "ê" : 
             {
           	 idchar="ee";
                      textspeak= "con ếch";
			    idsound="ID_SOUND_3";
                      break;     
               }
 case "g" : 
             {
          
                     textspeak= "con gấu";
			   idsound="ID_SOUND_8";
                     break;     
               }
case "h" : 
             {
                
                     textspeak= "huy hiệu";
                     break;     
               }
case "i" : 
             {             
                     textspeak= "hòn bi";
     			   idsound="ID_SOUND_21";
                     break;     
               }
case "k" : 
             {               
                     textspeak= "con kiến";
                     break;     
               }
case "l" : 
             {             
                textspeak= "con lợn";
      		    idsound="ID_SOUND_9";
                      break;     
               }
case "m" : 
             {         
                      textspeak= "con mèo";
            	    idsound="ID_SOUND_10";
                      break;     
               }
case "n" : 
             {             
                     textspeak= "quả na";
                     break;     
               }
case "o": {          
                     textspeak= "Ò ó o";
			   idsound="ID_SOUND_1";
                     break;     
                }
   case "ô" : 
             {
               	 idchar="oo";
                     textspeak= "ô tô";
			   idsound="ID_SOUND_4";
                     break;     
               }
   case "ơ" : 
             {
           	 idchar="ow";
                     textspeak= "lá cờ";
			    idsound="ID_SOUND_18";
                      break;     
               }
   
case "p" : 
             {      
                     textspeak= "đèn pin";
                     break;     
               }
case "q" : 
             {      
              textspeak= "vịt kêu quạt quạt";
			  idsound="ID_SOUND_11";
                    break;     
               }
case "r" : 
             {
          
                     textspeak= "con rùa";
  			         idsound="ID_SOUND_20";
                     break;     
               }
case "s" : 
             {
           
                      textspeak= "con sáo";
      		          idsound="ID_SOUND_12";
                      break;     
               }
case "t" : 
             {
        
                     textspeak= "tàu thuỷ";
     			   idsound="ID_SOUND_13";
                     break;     
               }
case "u" : 
             {
              
                     textspeak= "tàu vũ trụ";
      		   idsound="ID_SOUND_14";
                     break;     
               }
case "ư" : 
             {
                 	 idchar="uw";

                       textspeak= "sư tử";  
                       break;     
               }
case "v" : 
             {
              
                      textspeak= "con voi";
      		    idsound="ID_SOUND_16";
                      break;     
               }
case "x" : 
             {
          
	                textspeak= "xe máy";
      		    idsound="ID_SOUND_17";
                      break;     
               }
case "y" : 
             {
               
                     textspeak= "y tá";
                     break;     
             }
  
}
	
	  idchar = toUpperCase(idchar);
	  SetRsc("","Flash 2","ID_FLASH_"+idchar+"_H");
      SetRsc("","Image 2","ID_IMAGE_"+idchar+"_H");
	  if(idsound!="")
	   PlayWave("","",idsound);

if(text=="p")
	text = "pờ";
else if(text=="q")
text = "quờ";

      SpeakVN("","",textspeak);
      InvalidateObj("","Image 2");		
 return;
}
function Tap_viet_chu_hoa()
{
createFlashMarkup('Flash 2', 192, 16, 408 , 193 ,'ID_FLASH_A_H.swf','Tap_viet_chu_hoa');
  SetVar("k",1);
    PlayWave("","","ID_SOUND_BG");
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

 var Tap_viet_chu_hoa = new Kinetic.Layer({name: 'Tap_viet_chu_hoa',callback:'Tap_viet_chu_hoa()'});
var Tap_viet_chu_hoa_Backrounnd = CreText('Tap_viet_chu_hoa_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var print = CreText('print',171,7,447,469,"\r\n                              \r\n\r\n          Trường    :\r\n          Lớp         :\r\n          Họ và tên :",'rgba(0,0,0,0)','#ff0000','#0000ff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','0','0',2,'#32cd32','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Image2 = CreText('Image 2',212,208,363,263,'','rgba(0,0,0,0)','','','','ID_IMAGE_A_H.JPG',0,'','','','',0,'0.00','32','32',0,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#ffffff');
var Drawtext4 = CreText('Draw text 4',39,55,116,126,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext3 = CreText('Draw text 3',11,5,151,469,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE43.JPG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#32cd32','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext2 = CreText('Draw text 2',24,2,109,27,"cách cầm bút",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  SpeakVN("","","cách cầm bút");
  return;
}
 );
var Text_1 = CreText('Text_1',42,180,21,22,"o",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE51.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}


 );
var Text_2 = CreText('Text_2',73,179,25,24,"a",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE52.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_3 = CreText('Text_3',107,178,25,24,"ă",'#ff6820','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE54.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ff6820','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_4 = CreText('Text_4',43,205,23,22,"â",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE55.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_5 = CreText('Text_5',75,207,24,23,"b",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE53.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_6 = CreText('Text_6',108,207,24,23,"c",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE56.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_7 = CreText('Text_7',41,236,24,23,"ô",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE57.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_8 = CreText('Text_8',72,236,24,23,"ơ",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE58.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_9 = CreText('Text_9',106,236,24,23,"d",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE59.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_10 = CreText('Text_10',42,262,24,23,"đ",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE60.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_11 = CreText('Text_11',71,265,24,23,"e",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE61.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_12 = CreText('Text_12',106,265,24,23,"ê",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE62.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_13 = CreText('Text_13',40,291,24,23,"g",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE64.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_14 = CreText('Text_14',74,295,21,22,"h",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE65.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_15 = CreText('Text_15',107,293,24,23,"k",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE66.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_16 = CreText('Text_16',41,318,24,23,"l",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE67.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_17 = CreText('Text_17',75,320,21,22,"n",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE68.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_18 = CreText('Text_18',107,320,21,22,"m",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE69.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_19 = CreText('Text_19',45,347,24,23,"p",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE70.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_20 = CreText('Text_20',77,346,25,24,"q",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE63.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_21 = CreText('Text_21',109,348,21,22,"r",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE71.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_22 = CreText('Text_22',45,379,21,22,"s",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE72.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_23 = CreText('Text_23',75,379,21,22,"i",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE73.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_24 = CreText('Text_24',110,379,21,22,"t",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE74.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_25 = CreText('Text_25',45,403,21,22,"u",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE75.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_26 = CreText('Text_26',76,403,21,22,"ư",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE76.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_27 = CreText('Text_27',110,407,21,22,"v",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE77.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Text_28 = CreText('Text_28',45,430,24,23,"x",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE79.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Drawtext31 = CreText('Draw text 31',77,430,24,23,"y",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE78.JPG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this; 
ClickPlay();
 return;
}

 );
var Image3 = CreText('Image 3',110,426,51,45,'','rgba(0,0,0,0)','','','','ID_IMAGE3.JPG',0,'','','','',3,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Print("print");
  return;
}
 );
var Text_29 = CreText('Text_29',386,22,198,31,"https://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Tap_viet_chu_hoa.add(Tap_viet_chu_hoa_Backrounnd,print,Image2,Drawtext4,Drawtext3,Drawtext2,Text_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_7,Text_8,Text_9,Text_10,Text_11,Text_12,Text_13,Text_14,Text_15,Text_16,Text_17,Text_18,Text_19,Text_20,Text_21,Text_22,Text_23,Text_24,Text_25,Text_26,Text_27,Text_28,Drawtext31,Image3,Text_29);
stage.add(Tap_viet_chu_hoa);
InitLacVietScript();
};
