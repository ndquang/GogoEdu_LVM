folder_Resource ='data/Tap_viet_chu_thuong';
function Clickabc()
{ 

      var text=GetText("","");
if(text=="p")
	SpeakVN("","","pờ");
else if(text=="q")
SpeakVN("","","cu");

else
	SpeakVN("","",text);	
	var textspeak="";
	var idsound="";	
 switch(text)
   {
    
     case "o": { 
                     SetRsc("","Flash 2","ID_FLASH_1");
                     SetRsc("","Image 2","ID_IMAGE_1");
			   textspeak= "Ò ó o";
			   idsound="ID_SOUND_1";
                     break;     
                }
    
   case "a": { 
                    SetRsc("","Flash 2","ID_FLASH_2");
                    SetRsc("","Image 2","ID_IMAGE_2");
			   textspeak= "cái ca";
                    break;     
                }
  case "ă" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_3");
                     SetRsc("","Image 2","ID_IMAGE_3");
			   textspeak= "măng tre";
                     break;     
               }
   case "â" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_4");
                     SetRsc("","Image 2","ID_IMAGE_4");
			   textspeak= "cái cân";
                     break;     
               }
    case "b" : 
             {

                      SetRsc("","Flash 2","ID_FLASH_5");
                      SetRsc("","Image 2","ID_IMAGE_5");
			   textspeak= "bế bé";
			   idsound="ID_SOUND_19";
                       break;     
               }
   case "c" : 
             {      
                    SetRsc("","Flash 2","ID_FLASH_6");
                     SetRsc("","Image 2","ID_IMAGE_6");
			  textspeak= "con cá";
			   idsound="ID_SOUND_2";
                     break;     
               }
   case "ô" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_7");
                     SetRsc("","Image 2","ID_IMAGE_7");
			   textspeak= "xe ô tô";
			   idsound="ID_SOUND_4";

                     break;     
               }
   case "ơ" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_8");
                      SetRsc("","Image 2","ID_IMAGE_8");
				 textspeak= "lá cờ";
			   idsound="ID_SOUND_18";
                      break;     
               }
  case "d" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_9");
                     SetRsc("","Image 2","ID_IMAGE_9");
			   idsound="ID_SOUND_6";
			   textspeak= "dế mèn";
                     break;     
               }
  case "đ" : 
             {        
                     SetRsc("","Flash 2","ID_FLASH_10");
                     SetRsc("","Image 2","ID_IMAGE_10");
			   textspeak= "đàn ghi ta";
			   idsound="ID_SOUND_5";

                     break;     
               }
  case "e" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_11");
                     SetRsc("","Image 2","ID_IMAGE_11");
			   textspeak= "ve sầu";
				idsound="ID_SOUND_7";

                      break;     
               }
  case "ê" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_12");
                      SetRsc("","Image 2","ID_IMAGE_12");
			   textspeak= "con ếch";
				idsound="ID_SOUND_3";

                       break;     
               }
 case "g" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_13");
                     SetRsc("","Image 2","ID_IMAGE_13");
			   textspeak= "con gấu";
				idsound="ID_SOUND_8";

                      break;     
               }
case "h" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_14");
                     SetRsc("","Image 2","ID_IMAGE_14");
			   textspeak= "huy hiệu";
                     break;     
               }
case "k" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_15");
                     SetRsc("","Image 2","ID_IMAGE_15");
			   textspeak= "con kiến";
                     break;     
               }
case "l" : 
             {  
                      SetRsc("","Flash 2","ID_FLASH_16");
                      SetRsc("","Image 2","ID_IMAGE_16");
  	     		 textspeak= "con lợn";
      		idsound="ID_SOUND_9";
                      break;     
               }
case "n" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_17");
                     SetRsc("","Image 2","ID_IMAGE_17");
				 textspeak= "quả na";
                     break;     
               }
case "m" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_18");
                      SetRsc("","Image 2","ID_IMAGE_18");
			   textspeak= "con mèo";
            		idsound="ID_SOUND_10";
                      break;     
               }
case "p" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_19");
                     SetRsc("","Image 2","ID_IMAGE_19");
     			  textspeak= "đèn pin";

                     break;     
               }
case "q" : 
             {      
                    SetRsc("","Flash 2","ID_FLASH_20");
                    SetRsc("","Image 2","ID_IMAGE_20");
			  textspeak= "vịt kêu quạt quạt";
			idsound="ID_SOUND_11";
                    break;     
               }
case "r" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_21");
                     SetRsc("","Image 2","ID_IMAGE_21");
			 textspeak= "con rùa";
  			idsound="ID_SOUND_20";
                     break;     
               }
case "s" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_22");
                      SetRsc("","Image 2","ID_IMAGE_22");
			    textspeak= "con sáo";
      			idsound="ID_SOUND_12";
                      break;     
               }
case "i" : 
             { 
                     SetRsc("","Flash 2","ID_FLASH_23");
                     SetRsc("","Image 2","ID_IMAGE_23");
			   textspeak= "hòn bi";
     			idsound="ID_SOUND_21";

                     break;     
               }
case "t" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_24");
                     SetRsc("","Image 2","ID_IMAGE_24");
			   textspeak= "tàu thuỷ";
     			idsound="ID_SOUND_13";

                     break;     
               }
case "u" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_25");
                     SetRsc("","Image 2","ID_IMAGE_25");
				textspeak= "tàu vũ trụ";
      			idsound="ID_SOUND_14";
                     break;     
               }
case "ư" : 
             {
                       SetRsc("","Flash 2","ID_FLASH_26");
                       SetRsc("","Image 2","ID_IMAGE_26");
				textspeak= "sư tử";       			idsound="ID_SOUND_15";

                       break;     
               }
case "v" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_27");
                      SetRsc("","Image 2","ID_IMAGE_27");
				textspeak= "con voi";
      			idsound="ID_SOUND_16";

                      break;     
               }
case "x" : 
             {
                      SetRsc("","Flash 2","ID_FLASH_28");
                      SetRsc("","Image 2","ID_IMAGE_28");
				textspeak= "xe máy";
      			idsound="ID_SOUND_17";

                      break;     
               }
case "y" : 
             {
                     SetRsc("","Flash 2","ID_FLASH_29");
                     SetRsc("","Image 2","ID_IMAGE_29");
			  textspeak= "y tá";
                     break;     
             }
  
}
      InvalidateObj("","Image 2");
      SetVar("m_speak",textspeak);
      SetVar("m_sound",idsound);
	SpeakVN("","",textspeak);
     	if(idsound!="")
	PlayWave("","",idsound);
	
 return;
}
function Page_1()
{
createFlashMarkup('Flash 2', 226, 10, 367 , 204 ,'ID_FLASH_1.swf','Page 1');
  SetVar("k",1);
 PlayWave("","","ID_SOUND_BG_TV");
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var print = CreText('print',169,5,460,469,"\r\n                                                 \r\n\r\n          Trường    :\r\n          Lớp         :\r\n          Họ và tên :",'rgba(0,0,0,0)','#ff0000','#0000ff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','0','0',2,'#32cd32','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext4 = CreText('Draw text 4',6,7,157,466,"\r\ngamechocon.com",'#8080ff','#ffffff','#000000','#ffffff','ID_IMAGE142.JPG',16,'Verdana','Normal','center','top',0,'0.00','0','0',1,'#32cd32','#8080ff','2','2','rgba(0,0,0,0)','0','0','4','1',-2,-2, 'rgba(0,0,0,0)',0,1.50);
var Image2 = CreText('Image 2',211,220,384,252,'','rgba(0,0,0,0)','','','','ID_IMAGE_1.JPG',0,'','','','',0,'0.00','32','32',0,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#ffffff');
var Text_1 = CreText('Text_1',20,156,20,20,"o",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE83.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_2 = CreText('Text_2',53,155,26,23,"a",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE81.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_3 = CreText('Text_3',92,151,23,26,"ă",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE85.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_4 = CreText('Text_4',133,150,21,24,"â",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE87.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_5 = CreText('Text_5',15,181,28,35,"b",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE89.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_6 = CreText('Text_6',58,193,20,23,"c",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE91.PNG',16,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_9 = CreText('Text_9',17,223,24,34,"d",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE93.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_10 = CreText('Text_10',57,224,23,35,"đ",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE95.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_11 = CreText('Text_11',91,233,25,24,"e",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE101.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_12 = CreText('Text_12',129,227,27,29,"ê",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE103.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_13 = CreText('Text_13',16,271,23,38,"g",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE105.PNG',16,'Verdana','Bold','left','bottom',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_14 = CreText('Text_14',58,266,26,37,"h",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE107.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_15 = CreText('Text_15',99,267,26,35,"k",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE109.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_16 = CreText('Text_16',137,266,21,33,"l",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE111.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_17 = CreText('Text_17',56,321,29,21,"n",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE115.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_18 = CreText('Text_18',14,321,35,21,"m",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE113.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_19 = CreText('Text_19',98,318,28,32,"p",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE117.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_20 = CreText('Text_20',135,319,21,30,"q",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE119.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_21 = CreText('Text_21',14,362,24,24,"r",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE121.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_22 = CreText('Text_22',56,359,21,24,"s",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE123.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_23 = CreText('Text_23',93,358,23,26,"i",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE125.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_24 = CreText('Text_24',133,356,23,26,"t",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE127.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_25 = CreText('Text_25',15,400,29,20,"u",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE129.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_26 = CreText('Text_26',52,398,27,22,"ư",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE131.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_27 = CreText('Text_27',92,398,25,22,"v",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE133.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_28 = CreText('Text_28',128,399,29,22,"x",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE135.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Drawtext31 = CreText('Draw text 31',13,432,30,38,"y",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE137.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext31.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_8 = CreText('Text_8',133,192,23,24,"ơ",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE99.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_7 = CreText('Text_7',93,190,19,26,"ô",'#ffffff','#ffffff','rgba(0,0,0,0)','#269d26','ID_IMAGE97.PNG',16,'Verdana','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','2',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this; Clickabc();}
 );
var Text_29 = CreText('Text_29',346,33,198,31,"https://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_30 = CreText('Text_30',52,81,61,56,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE139.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Print("print");
  return;
}
 );
Page_1.add(Page1_Backrounnd,print,Drawtext4,Image2,Text_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_9,Text_10,Text_11,Text_12,Text_13,Text_14,Text_15,Text_16,Text_17,Text_18,Text_19,Text_20,Text_21,Text_22,Text_23,Text_24,Text_25,Text_26,Text_27,Text_28,Drawtext31,Text_8,Text_7,Text_29,Text_30);
stage.add(Page_1);
InitLacVietScript();
};
