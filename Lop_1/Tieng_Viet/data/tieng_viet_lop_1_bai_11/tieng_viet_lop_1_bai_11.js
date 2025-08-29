folder_Resource ='data/tieng_viet_lop_1_bai_11';
var akq="";
function CheckInput(){

   	for(var i=0;i<=22;i++)
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
akq = "ve|vê|vo|vô|vơ|le|lê|lo|lô|lơ|he|hê|ho|hô|hơ|co|cô|cơ|vò|vó|vỏ|võ|vọ".split("|");
for(var i=0;i<=22;i++){
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
 width: 840,
 height: 580 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,840,580,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_2 = CreText('Image_2',421,11,415,552,'','#00000000','','','','ID_IMAGE4.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_8 = CreText('Text_8',402,24,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_8);
var lam_lai = CreText('lam_lai',362,536,81,29,"Làm Lại",'#ff6820','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#ff6820','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Init();
  return;
}
 );
Page_1.add(lam_lai);
var Image_1 = CreText('Image_1',99,67,278,181,'','#00000000','','','','ID_IMAGE3.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,94,58,"BÀI 11",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_14 = CreText('Text_14',157,5,160,54,"ÔN TẬP",'#00000000','#ffffff','#ff6820','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ô cờ ô cô","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',248,51,48,34,"cỏ",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',1,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_17);
var tb_input0 = CreText('tb_input0',140,319,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_2 = CreText('Text_2',332,99,48,34,"cọ",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',1,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',209,227,48,34,"co",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',1,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',79,120,48,34,"cò",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',1,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_4);
var tb_input1 = CreText('tb_input1',184,319,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input2 = CreText('tb_input2',228,319,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input3 = CreText('tb_input3',272,319,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input4 = CreText('tb_input4',316,319,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input5 = CreText('tb_input5',140,346,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input6 = CreText('tb_input6',184,346,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input7 = CreText('tb_input7',228,346,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input8 = CreText('tb_input8',272,346,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input9 = CreText('tb_input9',316,346,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input10 = CreText('tb_input10',140,373,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input11 = CreText('tb_input11',184,373,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input12 = CreText('tb_input12',228,373,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input13 = CreText('tb_input13',272,373,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input14 = CreText('tb_input14',316,373,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_25 = CreText('Text_25',140,400,43,27,"",'#8080ff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#8080ff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_25.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_25);
var Text_26 = CreText('Text_26',184,400,43,27,"",'#8080ff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#8080ff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_26.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_26);
var tb_input15 = CreText('tb_input15',228,400,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input16 = CreText('tb_input16',272,400,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input17 = CreText('tb_input17',316,400,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_13 = CreText('Text_13',140,292,43,27,"be",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_16 = CreText('Text_16',184,292,43,27,"bê",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_30 = CreText('Text_30',228,292,43,27,"bo",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_31 = CreText('Text_31',272,292,43,27,"bô",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_32 = CreText('Text_32',316,292,43,27,"bơ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Text_32.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_32);
var Text_33 = CreText('Text_33',140,265,43,27,"e",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_34 = CreText('Text_34',184,265,43,27,"ê",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_35 = CreText('Text_35',228,265,43,27,"o",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_36 = CreText('Text_36',272,265,43,27,"ô",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_37 = CreText('Text_37',316,265,43,27,"ơ",'#ffffff','#ffffff','#ff00ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Text_37.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_37);
var Text_6 = CreText('Text_6',96,319,43,27,"v",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ","VN");
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
var Text_38 = CreText('Text_38',96,346,43,27,"l",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lờ","VN");
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
var Text_39 = CreText('Text_39',96,373,43,27,"h",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hờ","VN");
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
var Text_40 = CreText('Text_40',96,400,43,27,"c",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cờ","VN");
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
var Text_41 = CreText('Text_41',96,292,43,27,"b",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ","VN");
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
var Text_42 = CreText('Text_42',96,265,43,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_42.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_42);
var tb_input18 = CreText('tb_input18',141,494,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input19 = CreText('tb_input19',185,494,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input20 = CreText('tb_input20',229,494,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input21 = CreText('tb_input21',273,494,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var tb_input22 = CreText('tb_input22',317,494,43,27,"...",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_48 = CreText('Text_48',141,467,43,27,"bề",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_49 = CreText('Text_49',185,467,43,27,"bế",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_50 = CreText('Text_50',229,467,43,27,"bể",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_51 = CreText('Text_51',273,467,43,27,"bễ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_52 = CreText('Text_52',317,467,43,27,"bệ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_53 = CreText('Text_53',149,432,27,43,"̷\r\n",'#ffffff','#ffffff','#ff00ff','#ffffff','',28,'Arial','Bold','center','middle',0,'90.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_54 = CreText('Text_54',185,440,43,27,"̷\r\n",'#ffffff','#ffffff','#0080c0','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_55 = CreText('Text_55',229,440,43,27,"٬",'#ffffff','#ffffff','#009300','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_56 = CreText('Text_56',273,440,43,27,"~",'#ffffff','#ffffff','#00008b','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_57 = CreText('Text_57',317,440,43,27,"•",'#ffffff','#ffffff','#ff6820','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_58 = CreText('Text_58',97,494,43,27,"vo",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_59 = CreText('Text_59',97,467,43,27,"bê",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
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
var Text_60 = CreText('Text_60',97,440,43,27,"",'#ffffff','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_60.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
Page_1.add(Text_60);
var Text_5 = CreText('Text_5',133,536,71,24,"lò cò",'#00000000','#ffffff','#005984','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',237,535,73,24,"vơ cỏ",'#00000000','#ffffff','#005984','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_7);
var Text_9 = CreText('Text_9',388,9,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_9);
var kiem_tra = CreText('kiem_tra',361,536,81,29,"Kiểm Tra",'#32cd32','#ffffff','#ffffff','#000000','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#666666','#32cd32','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CheckInput();
  return;
}
 );
Page_1.add(kiem_tra);
var Text_10 = CreText('Text_10',520,232,251,37,"bé vẽ cô, bé vẽ cờ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',576,283,117,34,"hổ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DanhVan(GetText("",""));
  return;
}
 );
Page_1.add(Text_11);
stage.add(Page_1);
InitLacVietScript();
};
