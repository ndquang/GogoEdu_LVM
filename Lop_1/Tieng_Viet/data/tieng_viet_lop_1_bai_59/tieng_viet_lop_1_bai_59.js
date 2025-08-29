folder_Resource ='data/tieng_viet_lop_1_bai_59';
var akq="";
function CheckInput(){
   	for(var i=0;i<=11;i++)
	{
		if(GetText("","tb_"+i) == akq[i])
			SetFontColor("","tb_"+i,"#00ff00");
		else
			SetFontColor("","tb_"+i,"#ff0000");
	}
SetShowObject("","kiem_tra",0);
SetShowObject("","lam_lai",1);
InvalidateObj("","");
}
function Init()
{
akq = "ăng|âng|ong|ông|ung|ưng|iêng|uông|ương|eng|ênh|inh".split("|");
for(var i=0;i<=11;i++){
  AllowEditText("","tb_"+i,1);
  SetText("","tb_"+i,"...");
  SetFontColor("","tb_"+i,"#000000");
}
SetShowObject("","kiem_tra",1);
SetShowObject("","lam_lai",0);
  return;
}
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

            var tachchu = phuam.split("").join(" ");
	tachchu = tachchu.replace("n g","ng");
	tachchu = tachchu.replace("c h","ch");
	tachchu = tachchu.replace("n h","nh");
	var aphuam= tachchu.split(" ");
	for(var k=0;k<aphuam.length;k++)
	{
		var a = consonant.indexOf(aphuam[k]);
		if(a>=0)
			aphuam[k] =  doc_la[a];
	}
	tachchu = aphuam.join(" ");
	nguyenam = doc_la[j];
	var re="";
	if(dau=="")
	{
		if(phuam.length==1)
		 re = phuam + " "+ nguyenam +" "+phuam +" "+ko_dau;
		else  if(nguyenam !="")
		 re = tachchu +" "+ phuam + " "+ nguyenam +" "+phuam +" "+ko_dau;
		else 
		 re = tachchu +" "+ phuam;
	}
	else
	{
		if(phuam.length==1)
		 re = phuam + " "+ nguyenam +" "+phuam +" "+ko_dau +" "+ dau +" "+ word;
		else if(nguyenam !="")
		 re = tachchu +" "+ phuam + " "+ nguyenam +" "+phuam +" "+ko_dau +" "+ dau +" "+ word;
		else 
		 re = tachchu +" "+ phuam  +" " + dau +" "+ word;

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
function TapDoc()
{
	if(GetText("","") ==="...")
	SetText("","","");
	var n = StringtoNumber(GetName(""));
	if(GetText("","") == akq[n])
		{
			Speak(akq[n],"VN");
		}
InvalidateObj("","");	
}
function Page_1()
{
Init();
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
 width: 850,
 height: 580 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,850,580,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_4 = CreText('Image_4',56,512,281,51,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_4);
var Text_10 = CreText('Text_10',404,22,1,557,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_10);
var Image_2 = CreText('Image_2',427,6,393,542,'','rgba(0, 0, 0, 0)','','','','ID_3.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var lam_lai = CreText('lam_lai',363,548,81,29,"Làm Lại",'#ff6820','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Init();
  return;
}
 );
Page_1.add(lam_lai);
var Image_1 = CreText('Image_1',28,155,110,73,'','rgba(0, 0, 0, 0)','','','','ID_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,108,55,"BÀI 59",'#ffff6f','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#ffff6f','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_14 = CreText('Text_14',160,1,160,54,"Ôn tập",'rgba(0, 0, 0, 0)','#ffffff','#e14900','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',26,68,48,34,"a",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_17);
var tb_1 = CreText('tb_1',190,152,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_1);
var Text_4 = CreText('Text_4',72,68,48,34,"ng",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var tb_6 = CreText('tb_6',190,287,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_6);
var Text_33 = CreText('Text_33',190,71,47,27,"ng",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_33.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_33);
var Text_6 = CreText('Text_6',152,125,37,27,"ă",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_38 = CreText('Text_38',152,152,37,27,"â",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_38);
var Text_41 = CreText('Text_41',152,98,37,27,"a",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_41);
var Text_42 = CreText('Text_42',152,71,37,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_42.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_42);
var Text_5 = CreText('Text_5',25,463,112,30,"bình minh",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',142,463,115,30,"nhà rông",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_7);
var kiem_tra = CreText('kiem_tra',363,548,81,29,"Kiểm Tra",'#32cd32','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#32cd32','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CheckInput();
  return;
}
 );
Page_1.add(kiem_tra);
var Text_11 = CreText('Text_11',250,463,197,30,"nắng chang chang",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_2 = CreText('Text_2',460,181,379,97,"Trên trời mây trắng như bông\r\nỞ dưới cánh đồng bông trắng như mây\r\nMấy cô má đỏ hây hây\r\nĐội bông như thể đội mây về làng\r\n",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_8 = CreText('Text_8',560,282,151,27,"Quạ và Công",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_8);
var Image_3 = CreText('Image_3',8,406,55,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_3);
var Image_5 = CreText('Image_5',7,515,30,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_5);
var Text_3 = CreText('Text_3',26,68,94,69,"ang",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("a ngờ ang","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_15 = CreText('Text_15',390,7,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_15);
var tb_0 = CreText('tb_0',190,125,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_0);
var tb_2 = CreText('tb_2',190,179,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_2);
var tb_3 = CreText('tb_3',190,206,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_3);
var tb_4 = CreText('tb_4',190,233,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_4);
var tb_7 = CreText('tb_7',190,314,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_7);
var tb_8 = CreText('tb_8',190,341,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_8);
var Text_25 = CreText('Text_25',190,98,47,27,"ang",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_25.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_1.add(Text_25);
var Text_27 = CreText('Text_27',152,206,37,27,"ô",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_27);
var Text_28 = CreText('Text_28',152,233,37,27,"u",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_28);
var Text_29 = CreText('Text_29',152,179,37,27,"o",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_29);
var Text_32 = CreText('Text_32',152,260,37,27,"ư",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_32);
var tb_5 = CreText('tb_5',190,260,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_5);
var Text_13 = CreText('Text_13',152,287,37,27,"iê",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("i ê","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_16 = CreText('Text_16',152,314,37,27,"uô",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("u ô","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_19 = CreText('Text_19',152,368,37,27,"e",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_19);
var Text_20 = CreText('Text_20',152,395,37,27,"ê",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_20);
var Text_21 = CreText('Text_21',152,341,37,27,"ươ",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ư ơ","VN");
  return;
}
 );
Page_1.add(Text_21);
var Text_23 = CreText('Text_23',152,424,37,27,"i",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_23);
var tb_9 = CreText('tb_9',190,368,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_9);
var tb_10 = CreText('tb_10',238,395,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_10);
var tb_11 = CreText('tb_11',238,424,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_11);
var Text_12 = CreText('Text_12',295,73,48,34,"a",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_12);
var Text_22 = CreText('Text_22',341,73,48,34,"nh",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_22);
var Text_24 = CreText('Text_24',295,73,94,69,"anh",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("a nhờ anh","VN");
  return;
}
 );
Page_1.add(Text_24);
var Text_9 = CreText('Text_9',238,71,47,27,"nh",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_9);
var Text_18 = CreText('Text_18',239,125,46,270,"",'#8080ff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#8080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","ư ơ"),"VN");
  return;
}
 );
Page_1.add(Text_18);
var Text_26 = CreText('Text_26',190,396,46,55,"",'#8080ff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#8080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","ư ơ"),"VN");
  return;
}
 );
Page_1.add(Text_26);
var Text_30 = CreText('Text_30',238,98,47,27,"anh",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ff0080','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_30.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_1.add(Text_30);
var Image_6 = CreText('Image_6',301,148,111,72,'','rgba(0, 0, 0, 0)','','','','ID_2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_6);
stage.add(Page_1);
InitLacVietScript();
};
