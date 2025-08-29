folder_Resource ='data/tieng_viet_lop_1_bai_28';
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
    str=str.toLowerCase();
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
	var chu = "n g h|q u|g i|c h|n g|t h|g h|k h|n h|t r|p h|b|c|d|đ|g|h|l|m|n|p|q|r|s|t|v|x".split("|");
	var doc_la = "ngờ|quờ|dờ|chờ|ngờ|thờ|gờ|khờ|nhờ|trờ|phờ|bờ|cờ|dờ|đờ|gờ|hờ|lờ|mờ|nờ|pờ|quờ|rờ|sờ|tờ|vờ|xờ";
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,565,'','rgba(255, 255, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_2 = CreText('Image_2',402,5,391,560,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_2);
var Image_1 = CreText('Image_1',3,47,380,513,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',12,-1,87,45,"BÀI 28",'rgba(255, 249, 215, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0, 128, 255, 255)','rgba(255, 249, 215, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_10 = CreText('Text_10',406,258,393,36,"Bố mẹ cho bé và chị Kha đi nghỉ hè ở Sa Pa",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',527,315,159,33,"Ba Vì",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_7 = CreText('Text_7',386,20,3,543,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_6 = CreText('Text_6',372,5,29,13,"",'rgba(255, 0, 0, 1.00)','rgba(255, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
stage.add(Page_1);
InitLacVietScript();
};
