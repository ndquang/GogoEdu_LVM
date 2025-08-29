folder_Resource ='data/tieng_viet_lop_1_bai_29';
 var consonant = "ngh|ch|gi|gh|kh|ng|nh|ph|qu|th|tr|b|c|d|đ|g|h|k|l|m|n|p|q|r|s|t|v|x".split("|");
var doc_la = "ngờ|chờ|dờ|ngờ|khờ|ngờ|nhờ|phờ|quờ|thờ|trờ|bờ|cờ|dờ|đờ|gờ|hờ|ca|lờ|mờ|nờ|pờ|quờ|rờ|sờ|tờ|vờ|xờ".split("|");
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
		else 
		 re = phuam.split("").join(" ")+" "+ phuam + " "+ nguyenam +" "+phuam +" "+ko_dau +" "+ dau +" "+ word;
	}
	return re ;
}
function DanhVan(words)
{
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
var Image_2 = CreText('Image_2',402,5,400,554,'','rgba(0, 0, 0, 0)','','','','ID_3.JPG',0,'','','','',0,'0.00','0','0',1,'#ffffff','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Image_1 = CreText('Image_1',117,90,175,250,'','rgba(0, 0, 0, 0)','','','','ID_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',12,-1,87,45,"BÀI 29",'#d7f9ff','#ffffff','#0','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ff8000','#d7f9ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_3 = CreText('Text_3',126,118,160,253,"lá tía tô",'rgba(0, 0, 0, 0)','#ffffff','#0','#ffffff','',26,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var Text_9 = CreText('Text_9',229,390,118,34,"vỉa hè",'#ffffff','#ffffff','#8b0000','#ffffff','',24,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_9);
var Text_8 = CreText('Text_8',92,392,118,34,"tờ bìa",'#ffffff','#ffffff','#8b0000','#ffffff','',24,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Text_10 = CreText('Text_10',456,225,285,41,"Bé Hà nhổ cỏ, chị Kha tỉa lá",'#ffffff','#ffffff','#0','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',521,290,164,33,"chia quà",'#ffffff','#ffffff','#0','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_15 = CreText('Text_15',158,59,38,36,"t",'rgba(0, 0, 0, 0)','#ffffff','#0','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_14 = CreText('Text_14',150,32,89,60,"ia\r\nía",'rgba(0, 0, 0, 0)','#ffffff','#8000ff','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("tía");
  return;
}
 );
Page_1.add(Text_14);
var Image_5 = CreText('Image_5',103,489,178,38,'','rgba(0, 0, 0, 0)','','','','ID_2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_5);
var Text_4 = CreText('Text_4',227,432,118,34,"tỉa lá",'#ffffff','#ffffff','#8b0000','#ffffff','',24,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',92,432,118,34,"lá mía",'#ffffff','#ffffff','#8b0000','#ffffff','',24,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',386,20,3,543,"",'rgba(0, 0, 0, 0)','#ffffff','#0','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_6 = CreText('Text_6',372,5,29,13,"",'#ff','#ff','#0','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#0','#ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
stage.add(Page_1);
InitLacVietScript();
};
