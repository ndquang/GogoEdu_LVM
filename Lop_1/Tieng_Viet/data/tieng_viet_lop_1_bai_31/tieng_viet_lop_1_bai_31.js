folder_Resource ='data/tieng_viet_lop_1_bai_31';
var akq="";
function CheckInput(){
   	for(var i=0;i<=36;i++)
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
akq = "tru|trua|trư|trưa|tri|tria|ngu|ngua|ngư|ngưa|nghi|nghia".split("|");
for(var i=0;i<=11;i++){
  AllowEditText("","tb_"+i,1);
  SetText("","tb_"+i,"...");
  SetFontColor("","tb_"+i,"#000000");
}
SetShowObject("","kiem_tra",1);
SetShowObject("","lam_lai",0);
  return;
}
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

function TapDoc()
{
	if(GetText("","") ==="...")
	SetText("","","");
	var n = StringtoNumber(GetName(""));
	if(GetText("","") == akq[n])
		{
			DanhVan(akq[n])
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
var Text_10 = CreText('Text_10',404,22,1,557,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_10);
var Image_2 = CreText('Image_2',427,6,401,560,'','rgba(0, 0, 0, 0)','','','','ID_3.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
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
var Image_1 = CreText('Image_1',80,172,284,125,'','rgba(0, 0, 0, 0)','','','','ID_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,108,55,"BÀI 31",'#ffd5aa','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#ffd5aa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_14 = CreText('Text_14',157,5,160,54,"Ôn tập",'rgba(0, 0, 0, 0)','#ffffff','#ff6820','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',32,85,48,34,"m",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_17);
var tb_6 = CreText('tb_6',90,359,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_4 = CreText('Text_4',78,85,48,34,"ia",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var tb_7 = CreText('tb_7',139,359,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_5 = CreText('tb_5',335,331,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_11 = CreText('tb_11',335,388,47,27,"nghia",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_0 = CreText('tb_0',90,331,47,27,"pho",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_1 = CreText('tb_1',139,331,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_2 = CreText('tb_2',188,331,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_3 = CreText('tb_3',236,331,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_33 = CreText('Text_33',90,305,47,27,"u",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_34 = CreText('Text_34',139,305,47,27,"ua",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_34.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_34);
var Text_35 = CreText('Text_35',188,305,47,27,"ư",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_35.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_35);
var Text_36 = CreText('Text_36',236,305,47,27,"ưa",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_36.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_36);
var Text_6 = CreText('Text_6',41,359,47,27,"ng",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ngờ","VN");
  return;
}
 );
Text_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_6);
var Text_38 = CreText('Text_38',41,388,47,27,"ngh",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("nghờ","VN");
  return;
}
 );
Text_38.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_38);
var Text_41 = CreText('Text_41',41,331,47,27,"tr",'#ffffff','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("trờ","VN");
  return;
}
 );
Text_41.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_41);
var Text_42 = CreText('Text_42',41,305,47,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_42.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_42);
var Text_5 = CreText('Text_5',112,439,111,24,"mua mía",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',244,439,111,24,"ngựa tía",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_11 = CreText('Text_11',112,466,111,24,"mùa dưa",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_19 = CreText('Text_19',244,466,111,24,"trỉa đỗ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_19);
var Text_2 = CreText('Text_2',446,121,161,116,"Gió lùa kẽ lá\r\nLá khẽ đu đưa\r\nGió qua cửa sổ\r\nBé vừa ngủ trưa\r\n",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_8 = CreText('Text_8',568,264,151,34,"Khỉ và Rùa",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
Page_1.add(Text_8);
var Image_3 = CreText('Image_3',27,438,55,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',76,503,272,49,'','rgba(0, 0, 0, 0)','','','','ID_2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_4);
var Image_5 = CreText('Image_5',27,489,30,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_5);
var Text_3 = CreText('Text_3',32,85,94,69,"mía",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var tb_10 = CreText('tb_10',285,388,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_4 = CreText('tb_4',285,331,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_21 = CreText('Text_21',285,305,47,27,"i",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_21.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_21);
var Text_26 = CreText('Text_26',285,360,97,27,"",'#8080ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#8080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_26);
var Text_15 = CreText('Text_15',390,7,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',296,85,48,34,"m",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_16);
var Text_18 = CreText('Text_18',342,85,48,34,"ua",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_18);
var Text_20 = CreText('Text_20',296,85,94,69,"múa",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_20);
var tb_8 = CreText('tb_8',188,359,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_9 = CreText('tb_9',236,359,47,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_22 = CreText('Text_22',90,388,192,27,"",'#8080ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#8080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_22);
var Text_23 = CreText('Text_23',335,305,47,27,"ia",'#ffffff','#ffffff','#ff00ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_23.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_23);
stage.add(Page_1);
InitLacVietScript();
};
