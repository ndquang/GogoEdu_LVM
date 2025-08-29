folder_Resource ='data/tieng_viet_lop_1_bai_15';
  function TachDau(strWord) {
			 huyen = "àầằèềùừỳìòồờ";
			 sac ="áấắéếúứýíóốớ";
			 nang = "ạậặẹệụựỵịọộợ";
			 hoi="ảẩẳẻểủửỷỉỏổở";
			 nga="ãẫẵẽễũữỹĩõỗỡ";
			 var charx = huyen.split("");
			 for(i=0;i<charx.length;i++)
			 if(strWord.indexOf(charx[i])>=0)
				return "huyền";
			 charx = sac.split("");
			 for(i=0;i<charx.length;i++)
			 if(strWord.indexOf(charx[i])>=0)
				return "sắc";
			 charx = nang.split("");
			 for(i=0;i<charx.length;i++)
			 if(strWord.indexOf(charx[i])>=0)
				return "nặng";
			 charx = hoi.split("");
			 for(i=0;i<charx.length;i++)
			 if(strWord.indexOf(charx[i])>=0)
				return "hỏi";
			 charx = nga.split("");
			 for(i=0;i<charx.length;i++)
			 if(strWord.indexOf(charx[i])>=0)
				return "ngã";
			return "";
         }
function DanhVan(str)
{
            var arra = str.split(" ");
	var reStr="";
	for(var i=0;i<arra.length;i++)
	{
	strWord= rtrimStr(arra[i],",");
	var dau = TachDau(strWord);
	ko_dau = LoaiBoDau(strWord)
	var kq ="";
	if( dau != "")
	kq = ko_dau.split("").join(" ") +" "+ko_dau +" "+ dau +" "+ strWord +", ";
	else kq = ko_dau.split("").join(" ") +" "+ko_dau+", ";
	
	var chu = "c h|n g|t h|g i|k h|t r|p h|b|c|d|đ|g|h|l|m|n|p|q|r|s|t|v|x";
	var doc_la = "chờ|ngờ|thờ|gờ|khờ|trờ|phờ|bờ|cờ|dờ|đờ|gờ|hờ|lờ|mờ|nờ|pờ|qờ|rờ|sờ|tờ|vờ|xờ";
	chu = chu.split("|");
	doc_la = doc_la.split("|");
 	for(var j=0;j<chu.length;j++)
	    if(kq.indexOf(chu[j])==0){
	     kq = kq.replace(chu[j],doc_la[j]);
	      break;
	}
	reStr=reStr + kq;
	}
	reStr.trim();
	if(arra.length>1)
	reStr = reStr +str
	Speak(reStr,"VN");
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
 width: 800,
 height: 565 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,565,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_1 = CreText('Image_1',14,108,344,226,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',12,-1,87,45,"BÀI 15",'#fff9d7','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#c0c0c0','#fff9d7','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_3 = CreText('Text_3',13,173,172,189,"tổ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var Text_9 = CreText('Text_9',217,450,91,24,"thợ mỏ",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_9);
var Text_8 = CreText('Text_8',117,450,76,24,"ti vi",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Text_5 = CreText('Text_5',105,391,282,26,"to             tơ             ta",'#ffffff','#ffffff','#ff0080','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("to tơ ta");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',107,418,285,24,"tho           thơ          tha",'#ffffff','#ffffff','#ff0080','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("tho thơ tha");
  return;
}
 );
Page_1.add(Text_6);
var Image_2 = CreText('Image_2',402,2,396,561,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_10 = CreText('Text_10',466,249,305,37,"bố thả cá mè, bé thả cá cờ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',575,332,144,27,"ổ, tổ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_13 = CreText('Text_13',118,47,26,28,"ổ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_13);
var Text_15 = CreText('Text_15',270,47,26,28,"ỏ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',216,149,156,213,"thỏ",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_16);
var Image_3 = CreText('Image_3',18,386,55,33,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',25,508,24,27,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE6.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_4);
var Text_17 = CreText('Text_17',99,509,189,32,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE10.JPG',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_17);
var Text_2 = CreText('Text_2',110,16,54,60,"t\r\nt",'rgba(0, 0, 0, 0)','#ffffff','#ff0080','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("tờ, tờ ô tô hỏi tổ","VN")
  return;
}
 );
Page_1.add(Text_2);
var Text_14 = CreText('Text_14',251,16,54,60,"th\r\nth",'rgba(0, 0, 0, 0)','#ffffff','#ff0080','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("thờ, thờ o tho hỏi thỏ","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_4 = CreText('Text_4',378,24,4,540,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_4);
var Text_24 = CreText('Text_24',366,8,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_24);
stage.add(Page_1);
InitLacVietScript();
};
