folder_Resource ='data/tieng_viet_lop_1_bai_39';
 var consonant = "ngh|ch|gi|gh|kh|ng|nh|ph|qu|th|tr|b|c|d|đ|g|h|k|l|m|n|p|q|r|s|t|v|x|".split("|");
var doc_la = "ngờ|chờ|dờ|ngờ|khờ|ngờ|nhờ|phờ|quờ|thờ|trờ|bờ|cờ|dờ|đờ|gờ|hờ|ca|lờ|mờ|nờ|pờ|quờ|rờ|sờ|tờ|vờ|xờ|".split("|");
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
function SpellWord(word)
{
	word=word.toLowerCase();
	word=word.replace(',','');
	word=word.replace('.','');
	word=word.replace('!','');
	var dau = TachDau(word);
	var ko_dau = LoaiBoDau(word);
	var nguyenam="";
	for(var j=0;j<consonant.length;j++)
	    if(word.indexOf(consonant[j])==0){
	     nguyenam = consonant [j]
	      break;
	}
	var phuam= ko_dau.replace(nguyenam,'');
	nguyenam = doc_la[j];
	var re="";
	if(dau=="")
	{
		if(phuam.length==1)
		 re = phuam + " "+ nguyenam +" "+phuam +" "+ko_dau;
		else 
		 re = phuam.split("").join(" ")+" "+ phuam + " "+ nguyenam +" "+phuam +" "+ko_dau;
	}
	else
	{
		if(phuam.length==1)
		 re = phuam + " "+ nguyenam +" "+phuam +" "+ko_dau +" "+ dau +" "+ word;
		else if(nguyenam !="")
		 re = phuam.split("").join(" ")+" "+ phuam + " "+ nguyenam +" "+phuam +" "+ko_dau +" "+ dau +" "+ word;
		else 
		 re = phuam.split("").join(" ")+" "+ phuam  +" " + dau +" "+ word;

	}
	return re ;
}
function DanhVan(words)
{
	words = words.replace(/\n/g, " ");	
	var a_words = words.split(" ");
	var kq = "";
	for(var i=0;i<a_words.length;i++)
		kq = kq + SpellWord(a_words[i])+", ";
	kq = kq + words;
	Speak(kq,"VN");
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
var Image_2 = CreText('Image_2',402,8,389,543,'','rgba(0, 0, 0, 0)','','','','ID_3.JPG',0,'','','','',0,'0.00','0','0',1,'#ffffff','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Image_1 = CreText('Image_1',22,106,361,214,'','rgba(0, 0, 0, 0)','','','','ID_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,-1,87,51,"BÀI 39",'#ffc58a','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#ffc58a','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_9 = CreText('Text_9',229,390,149,34,"châu chấu",'#ffffff','#ffffff','#0080c0','#ffffff','',22,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_9);
var Text_8 = CreText('Text_8',92,390,118,34,"rau cải",'#ffffff','#ffffff','#0080c0','#ffffff','',22,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Text_10 = CreText('Text_10',408,224,386,46,"Chào mào có áo màu nâu\r\nCứ mùa ổi chín từ đâu bay về",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',499,289,229,36,"Bà cháu",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_15 = CreText('Text_15',71,76,52,36,"c",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_15);
var Image_3 = CreText('Image_3',18,386,55,33,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',25,492,24,27,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE6.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_4);
var Text_14 = CreText('Text_14',73,48,89,60,"au\r\nau",'rgba(0, 0, 0, 0)','#ffffff','#ff0080','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("cau","VN");
  return;
}
 );
Page_1.add(Text_14);
var Image_5 = CreText('Image_5',64,486,306,55,'','rgba(0, 0, 0, 0)','','','','ID_2.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_5);
var Text_4 = CreText('Text_4',227,432,161,34,"sáo sậu",'#ffffff','#ffffff','#0080c0','#ffffff','',22,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',92,432,118,34,"lau sậy",'#ffffff','#ffffff','#0080c0','#ffffff','',22,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',398,20,3,543,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_6 = CreText('Text_6',384,5,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
var Text_2 = CreText('Text_2',268,79,51,36,"c",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_2);
var Text_12 = CreText('Text_12',243,52,89,60,"âu\r\nầu",'rgba(0, 0, 0, 0)','#ffffff','#ff0080','#ffffff','',24,'Arial','Bold','right','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("cầu");
  return;
}
 );
Page_1.add(Text_12);
var Text_13 = CreText('Text_13',216,179,160,176,"cái cầu",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_13);
var Text_3 = CreText('Text_3',26,182,138,169,"cây cau",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
stage.add(Page_1);
InitLacVietScript();
};
