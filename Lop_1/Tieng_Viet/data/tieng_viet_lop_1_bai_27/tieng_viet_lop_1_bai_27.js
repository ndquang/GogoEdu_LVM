folder_Resource ='data/tieng_viet_lop_1_bai_27';
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
akq = "phô|pha|phe|phê|nho|nhô|nha|nhe|nhê|gio|giô|gia|gie|gie|giê|tro|trô|tra|tre|trê|go|gô|ga|ngo|ngô|nga|ghe|ghê|nghe|nghê|qua|que|quê|ì|ỉ|ĩ|ị|ỳ".split("|");
for(var i=0;i<=36;i++){
  AllowEditText("","tb_"+i,1);
  SetText("","tb_"+i,"...");
  SetFontColor("","tb_"+i,"#000000");
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
 height: 680 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,850,680,'','rgba(255, 255, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_10 = CreText('Text_10',404,22,1,660,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_10);
var Image_2 = CreText('Image_2',427,6,395,553,'','rgba(0, 0, 0, 0)','','','','ID_3.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_2);
var lam_lai = CreText('lam_lai',360,562,81,29,"Làm Lại",'rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'rgba(102, 102, 102, 255)','rgba(255, 104, 32, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Init();
  return;
}
 );
Page_1.add(lam_lai);
var Image_1 = CreText('Image_1',132,66,163,98,'','rgba(0, 0, 0, 0)','','','','ID_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,108,55,"BÀI 27",'rgba(255, 249, 215, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0, 128, 255, 255)','rgba(255, 249, 215, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_14 = CreText('Text_14',157,5,160,54,"ÔN TẬP",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',32,85,48,34,"ph",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_17);
var tb_4 = CreText('tb_4',118,220,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_4 = CreText('Text_4',78,85,48,34,"ô",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var tb_5 = CreText('tb_5',167,220,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_no = CreText('tb_no',119,363,143,59,"",'rgba(128, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(128, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(tb_no);
var tb_9 = CreText('tb_9',118,249,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_10 = CreText('tb_10',167,249,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_11 = CreText('tb_11',216,249,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_12 = CreText('tb_12',264,249,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_12.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_12);
var tb_14 = CreText('tb_14',118,276,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_14.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_14);
var tb_15 = CreText('tb_15',167,276,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_15.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_15);
var tb_16 = CreText('tb_16',216,276,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_16.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_16);
var tb_17 = CreText('tb_17',264,276,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_17.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_17);
var tb_21 = CreText('tb_21',216,305,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_21.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_21);
var Text_13 = CreText('Text_13',118,192,47,27,"pho",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_0 = CreText('tb_0',167,192,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_1 = CreText('tb_1',216,192,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_2 = CreText('tb_2',264,192,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_33 = CreText('Text_33',118,169,47,27,"o",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_34 = CreText('Text_34',167,169,47,27,"ô",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_35 = CreText('Text_35',216,169,47,27,"a",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_36 = CreText('Text_36',264,169,47,27,"e",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_6 = CreText('Text_6',69,220,47,27,"nh",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("nhờ","VN");
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
var Text_38 = CreText('Text_38',69,249,47,27,"gi",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("giờ","VN");
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
var Text_39 = CreText('Text_39',69,276,47,27,"tr",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("trờ","VN");
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
var Text_40 = CreText('Text_40',69,305,47,27,"g",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("gờ","VN");
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
var Text_41 = CreText('Text_41',69,192,47,27,"ph",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("phờ","VN");
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
var Text_42 = CreText('Text_42',69,169,47,27,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_42.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_42);
var tb_input29 = CreText('tb_input29',118,523,47,27,"ý",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_input29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_input29.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_input29);
var tb_36 = CreText('tb_36',167,523,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_36.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_36);
var tb_35 = CreText('tb_35',314,494,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_35.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_35);
var Text_48 = CreText('Text_48',118,494,47,27,"í",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_54 = CreText('Text_54',167,466,47,27,"̷\r\n",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_55 = CreText('Text_55',216,466,47,27,"٬",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_56 = CreText('Text_56',265,466,47,27,"~",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 139, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_57 = CreText('Text_57',314,466,47,27,"•",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_58 = CreText('Text_58',69,523,47,27,"y",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
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
var Text_59 = CreText('Text_59',69,494,47,27,"i",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
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
var Text_60 = CreText('Text_60',69,466,47,27,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_60.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_60);
var Text_5 = CreText('Text_5',112,567,71,24,"nhà ga",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',216,567,73,24,"tre ngà",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_7);
var kiem_tra = CreText('kiem_tra',360,562,81,29,"Kiểm Tra",'rgba(50, 205, 50, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'rgba(102, 102, 102, 255)','rgba(50, 205, 50, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CheckInput();
  return;
}
 );
Page_1.add(kiem_tra);
var tb_24 = CreText('tb_24',216,334,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_24.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_24);
var Text_12 = CreText('Text_12',69,334,47,27,"ng",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ngờ","VN");
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
var tb_19 = CreText('tb_19',118,305,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_19.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_19);
var tb_20 = CreText('tb_20',167,305,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_20.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_20);
var tb_22 = CreText('tb_22',118,334,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_22.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_22);
var tb_23 = CreText('tb_23',167,334,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_23.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_23);
var Text_11 = CreText('Text_11',112,590,71,24,"quả nho",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
var Text_19 = CreText('Text_19',216,590,73,24,"ý nghĩ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_19);
var Text_2 = CreText('Text_2',506,202,266,56,"quê bé hà có nghề xẻ gỗ, phố bé nga có nghề giã giò",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_2);
var Text_8 = CreText('Text_8',568,264,151,34,"tre ngà",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_8);
var Image_3 = CreText('Image_3',27,562,55,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_3);
var Image_4 = CreText('Image_4',112,626,242,47,'','rgba(0, 0, 0, 0)','','','','ID_2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_4);
var Image_5 = CreText('Image_5',27,613,30,32,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Page_1.add(Image_5);
var Text_3 = CreText('Text_3',32,85,94,69,"phố",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var tb_13 = CreText('tb_13',313,249,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_13.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_13);
var tb_18 = CreText('tb_18',313,276,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_18.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_18);
var tb_3 = CreText('tb_3',313,192,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var Text_21 = CreText('Text_21',313,169,47,27,"ê",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_32 = CreText('tb_32',167,494,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_32.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_32);
var tb_33 = CreText('tb_33',216,494,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_33.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_33);
var tb_34 = CreText('tb_34',265,494,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_34.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_34);
var Text_26 = CreText('Text_26',217,523,144,27,"",'rgba(128, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(128, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_26);
var Text_15 = CreText('Text_15',390,7,29,13,"",'rgba(255, 0, 0, 1.00)','rgba(255, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'rgba(0, 0, 0, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',296,85,48,34,"qu",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_16);
var Text_18 = CreText('Text_18',342,85,48,34,"ê",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_18);
var Text_20 = CreText('Text_20',296,85,94,69,"quê",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'rgba(240, 0, 240, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_20);
var tb_25 = CreText('tb_25',264,363,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_25.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_25);
var Text_24 = CreText('Text_24',69,363,47,27,"gh",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ngờ","VN");
  return;
}
 );
Text_24.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_24);
var tb_26 = CreText('tb_26',313,363,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_26.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_26);
var Text_29 = CreText('Text_29',118,466,47,27,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu sắc","VN");
  return;
}
 );
Text_29.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_29);
var Text_53 = CreText('Text_53',128,462,28,37,"̷\r\n",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',0,'90.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_6 = CreText('tb_6',216,220,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_7 = CreText('tb_7',264,220,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_8 = CreText('tb_8',313,220,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var tb_27 = CreText('tb_27',264,393,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_27.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_27);
var Text_44 = CreText('Text_44',69,393,47,27,"ngh",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ngờ","VN");
  return;
}
 );
Text_44.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_44);
var tb_28 = CreText('tb_28',313,393,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_28.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_28);
var tb_29 = CreText('tb_29',215,422,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_29.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_29);
var tb_30 = CreText('tb_30',264,422,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_30.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_30);
var Text_51 = CreText('Text_51',69,422,47,27,"qu",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("quờ","VN");
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
var tb_31 = CreText('tb_31',313,422,47,27,"...",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tb_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TapDoc();
  return;
}
 );
tb_31.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(tb_31);
var Text_9 = CreText('Text_9',119,422,93,27,"",'rgba(128, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(128, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_9);
var Text_22 = CreText('Text_22',265,305,95,56,"",'rgba(128, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 0, 255, 255)','rgba(128, 128, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_22);
stage.add(Page_1);
InitLacVietScript();
};
