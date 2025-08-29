folder_Resource ='data/tieng_viet_lop_1_bai_16';
var akq="";
function CheckInput(){

   	for(var i=0;i<=24;i++)
	{
		if(GetText("","tb_input"+i) == akq[i])
			SetFontColor("","tb_input"+i,"#00ff00");
		else
			SetFontColor("","tb_input"+i,"#ff0000");
	}
SetShowObject("","kiem_tra",0);
SetShowObject("","lam_lai",1);
InvalidateObj("","");
}
function Init()
{
akq = "mô|mơ|mi|ma|dô|dơ|di|da|đô|đơ|đi|đa|tô|tơ|ti|ta|thô|thơ|thi|tha|tà|tá|tả|tã|tạ".split("|");
for(var i=0;i<=24;i++){
  AllowEditText("","tb_input"+i,1);
  SetText("","tb_input"+i,"...");
  SetFontColor("","tb_input"+i,"#000000");
}
SetShowObject("","kiem_tra",1);
SetShowObject("","lam_lai",0);
  return;
}
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

function TapDoc()
{
	if(GetText("","") =="...")
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
var Text_9 = CreText('Text_9',409,27,4,540,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_9);
var Image_2 = CreText('Image_2',427,7,400,568,'','#00000000','','','','ID_IMAGE4.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var lam_lai = CreText('lam_lai',373,546,81,29,"Làm Lại",'#ff6820','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#ff6820','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Init();
  return;
}
 );
Page_1.add(lam_lai);
var Image_1 = CreText('Image_1',189,62,205,131,'','#00000000','','','','ID_IMAGE3.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,94,56,"BÀI 16",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_14 = CreText('Text_14',157,5,160,54,"ÔN TẬP",'#00000000','#ffffff','#ff6820','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',70,93,48,34,"đ",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#f000f0','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_17);
var tb_input0 = CreText('tb_input0',135,259,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input0);
var Text_4 = CreText('Text_4',116,93,48,34,"a",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#f000f0','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var tb_input1 = CreText('tb_input1',189,259,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input1);
var tb_input2 = CreText('tb_input2',243,259,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input2);
var tb_input3 = CreText('tb_input3',298,259,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input3);
var tb_input4 = CreText('tb_input4',135,286,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input4);
var tb_input5 = CreText('tb_input5',189,286,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input5);
var tb_input6 = CreText('tb_input6',243,286,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input6);
var tb_input7 = CreText('tb_input7',298,286,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input7);
var tb_input8 = CreText('tb_input8',135,313,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input8);
var tb_input9 = CreText('tb_input9',189,313,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input9);
var tb_input10 = CreText('tb_input10',243,313,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input10);
var tb_input11 = CreText('tb_input11',298,313,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input11);
var tb_input14 = CreText('tb_input14',243,341,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input14.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input14);
var tb_input15 = CreText('tb_input15',298,341,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input15.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input15);
var Text_13 = CreText('Text_13',135,232,54,27,"nô",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_13.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_13);
var Text_16 = CreText('Text_16',189,232,54,27,"nơ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_16.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_16);
var Text_30 = CreText('Text_30',243,232,54,27,"ni",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_30.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',298,232,54,27,"na",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_31.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_31);
var Text_33 = CreText('Text_33',135,205,54,27,"ô",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_34 = CreText('Text_34',189,205,54,27,"ơ",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_35 = CreText('Text_35',243,205,54,27,"i",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_36 = CreText('Text_36',298,205,54,27,"a",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_6 = CreText('Text_6',81,259,54,27,"m",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("mờ","VN");
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
var Text_38 = CreText('Text_38',81,286,54,27,"d",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dờ","VN");
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
var Text_39 = CreText('Text_39',81,313,54,27,"đ",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("đờ","VN");
  return;
}
 );
Text_39.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_39);
var Text_40 = CreText('Text_40',81,341,54,27,"t",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("tờ","VN");
  return;
}
 );
Text_40.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_40);
var Text_41 = CreText('Text_41',81,232,54,27,"n",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("nờ","VN");
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
var Text_42 = CreText('Text_42',81,205,54,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_42.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_42);
var tb_input20 = CreText('tb_input20',126,458,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input20.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input20);
var tb_input21 = CreText('tb_input21',170,458,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input21.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input21);
var tb_input22 = CreText('tb_input22',216,458,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input22.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input22);
var tb_input23 = CreText('tb_input23',261,458,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input23.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input23);
var tb_input24 = CreText('tb_input24',304,458,46,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input24.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input24);
var Text_48 = CreText('Text_48',126,431,43,27,"mờ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_48.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_48);
var Text_49 = CreText('Text_49',170,431,43,27,"mớ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_49.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_49);
var Text_50 = CreText('Text_50',216,431,43,27,"mở",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_50.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_50);
var Text_51 = CreText('Text_51',261,431,43,27,"mỡ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_51.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_51);
var Text_52 = CreText('Text_52',304,431,46,27,"mợ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_52.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_52);
var Text_53 = CreText('Text_53',136,395,27,45,"̷\r\n",'#ffffff','#ffffff','#ff00ff','#ffffff','',28,'Arial','Bold','center','middle',0,'90.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu huyền","VN");
  return;
}
 );
Text_53.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_53);
var Text_54 = CreText('Text_54',170,404,43,27,"̷\r\n",'#ffffff','#ffffff','#0080c0','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu sắc","VN");
  return;
}
 );
Text_54.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_54);
var Text_55 = CreText('Text_55',216,404,43,27,"٬",'#ffffff','#ffffff','#009300','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu hỏi","VN");
  return;
}
 );
Text_55.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_55);
var Text_56 = CreText('Text_56',261,404,43,27,"~",'#ffffff','#ffffff','#00008b','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu ngã","VN");
  return;
}
 );
Text_56.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_56);
var Text_57 = CreText('Text_57',304,404,46,27,"•",'#ffffff','#ffffff','#ff6820','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu nặng","VN");
  return;
}
 );
Text_57.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_57);
var Text_58 = CreText('Text_58',82,458,43,27,"ta",'#ffffff','#ffffff','#00ffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_58.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_58);
var Text_59 = CreText('Text_59',82,431,43,27,"mơ",'#ffffff','#ffffff','#00ffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_59.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_59);
var Text_60 = CreText('Text_60',82,404,43,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_60.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_60);
var Text_5 = CreText('Text_5',112,492,71,24,"tổ cò",'#00000000','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',216,491,73,24,"da thỏ",'#00000000','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_7);
var kiem_tra = CreText('kiem_tra',373,546,81,29,"Kiểm Tra",'#32cd32','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#32cd32','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CheckInput();
  return;
}
 );
Page_1.add(kiem_tra);
var tb_input18 = CreText('tb_input18',243,368,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input18.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input18);
var tb_input19 = CreText('tb_input19',298,368,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input19.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input19);
var Text_12 = CreText('Text_12',81,368,54,27,"th",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("thờ","VN");
  return;
}
 );
Text_12.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_12);
var tb_input12 = CreText('tb_input12',135,341,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input12.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input12);
var tb_input13 = CreText('tb_input13',189,341,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input13.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input13);
var tb_input16 = CreText('tb_input16',135,368,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input16.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input16);
var tb_input17 = CreText('tb_input17',189,368,54,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
tb_input17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input17.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input17);
var Text_11 = CreText('Text_11',112,511,71,24,"lá mạ",'#00000000','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_19 = CreText('Text_19',216,510,73,24,"thợ nề",'#00000000','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_19);
var Text_2 = CreText('Text_2',508,26,251,51,"cò bố mò cá.\r\ncò mẹ tha cá về tổ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan("cò bố mò cá, cò mẹ tha cá về tổ");
  return;
}
 );
Page_1.add(Text_2);
var Text_8 = CreText('Text_8',568,275,151,34,"cò đi lò dò",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Image_3 = CreText('Image_3',26,494,55,32,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',112,538,199,37,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_4);
var Image_5 = CreText('Image_5',34,542,30,32,'','#00000000','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_5);
var Text_3 = CreText('Text_3',70,93,94,69,"đa",'#00000000','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#f000f0','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("đờ a, đờ a đa","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_24 = CreText('Text_24',397,11,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_24);
stage.add(Page_1);
InitLacVietScript();
};
