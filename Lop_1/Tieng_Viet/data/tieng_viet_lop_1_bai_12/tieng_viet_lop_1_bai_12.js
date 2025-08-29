folder_Resource ='data/tieng_viet_lop_1_bai_12';
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
	var chu = "bcdđghlmnpqrstvx";
	var doc_la = "bờ|cờ|dờ|đờ|gờ|hờ|lờ|mờ|nờ|pờ|qờ|rờ|sờ|tờ|vờ|xờ";
	chu = chu.split("");
	doc_la = doc_la.split("|");
 	for(var j=0;j<chu.length;j++)
	    if(kq[0] == chu[j]){
	     kq = kq.replace( chu[j],doc_la[j] );
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
 width: 840,
 height: 580 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,840,580,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_1 = CreText('Image_1',28,38,420,530,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_4 = CreText('Text_4',133,48,52,67,"i\r\ni",'#00000000','#ffffff','#00000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("i bờ i bi","VN");
  return;
}
 );
Page_1.add(Text_4);
var Text_1 = CreText('Text_1',10,0,94,57,"BÀI 12",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',118,347,62,32,"bi",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',326,345,48,34,"cá",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var Text_7 = CreText('Text_7',316,36,73,78,"a cá",'#00000000','#ffffff','#00000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("a cờ a ca sắc cá","VN");
  return;
}
 );
Page_1.add(Text_7);
var Text_9 = CreText('Text_9',261,455,67,24,"ba lô",'#ffffff','#ffffff','#004080','#ffffff','',20,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_9);
var Text_8 = CreText('Text_8',118,455,76,24,"bi ve",'#ffffff','#ffffff','#004080','#ffffff','',20,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Text_5 = CreText('Text_5',129,407,184,26,"bi      vi      li",'#ffffff','#ffffff','#ff0080','#ffffff','',20,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',134,432,186,24,"ba      va      la",'#ffffff','#ffffff','#ff0080','#ffffff','',20,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_6);
var Text_10 = CreText('Text_10',413,23,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_10);
var Image_2 = CreText('Image_2',422,8,423,566,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_11 = CreText('Text_11',532,272,251,37,"bé hà có vở ô li",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_12 = CreText('Text_12',584,320,117,34,"lá cờ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_12);
var Text_31 = CreText('Text_31',401,10,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
stage.add(Page_1);
InitLacVietScript();
};
