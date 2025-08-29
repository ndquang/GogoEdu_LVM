folder_Resource ='data/nhom_chu_cai';
var a_cha="aă_âb_cd_đe_êg_hi_kl_mn_oô_ơq_pr_st_uư_vy";
var m_tal=0;
var count=0;
var m_sele="o, ô, ơ";
function CreateNew()
{
	var xxx= replaceStr(m_sele,", ","");
      var len_char = length(xxx);
	for(var j=0; j < len_char; j++)
	{
		var k= subString(xxx,j,1);
		SetText("","bin_"+j,k);
		 SetShowObject("","bin_"+j,1);
	}
      SetShowObject("","bin_"+j,0);
	var b_char= replaceStr(a_cha,"_",xxx);
	var len =  length(b_char);
	count=0;
	m_tal=0;
	for(var i=0; i< 16; i++)
	{
	var x= Random(len);
	var ck = subString(b_char,x,1);
	for(var h=0;h<len_char;h++)
	   if(ck == subString(xxx,h,1))
	      m_tal++;
	SetText("","ch_"+i,ck);
	SetMoveView("","ch_"+i,1);
	SetShowObject("","ch_"+i,1);
	MoveObjectTo("","ch_"+i,-1,-1,20,2, Random(10));
	}
	InvalidateObj("","");

}
function Check2(){
     var k= 0;
	var b= false;
	while(k<3 && !b){
		if(RectInRect("","bin_"+k,""))
		{
			if(GetText("","")==GetText("","bin_"+k))
				{
				//  var le = GetLeft("","bin_"+k);
				//  var to = GetTop("","bin_"+k);
				//  MoveObjectTo("","",le,to);
				  PlaySound("ID_SOUND_CLICK")	;
				  SetShowObject("","",0);
				  b= true;
				  count++;
				}
		}
		k++;
	}
	if(!b){
	MoveObjectTo("","",-1,-1,20,2, Random(10));
		PlaySound("ID_SOUND_WRONG");
	}
	else if(count == m_tal)
	{
		PlaySound("ID_SOUND_CLAP");
		CreateNew();
	}
	InvalidateObj("","");

}
function NhomChu()
{
	var tex= GetText("","");
      m_sele=tex;
	CreateNew();

}
function Page_2()
{
CreateNew();
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
 height: 450 
 });

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,800,450,'','#b0d8ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#b0d8ff','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_2 = CreText('Text_2',756,234,44,216,"",'#ff6820','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_2);
var Text_3 = CreText('Text_3',1,285,758,165,"",'#ffad5b','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_3);
var Text_1 = CreText('Text_1',703,5,92,26,"Làm Lại",'#ffd700','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew();
  return;
}
 );
Page_2.add(Text_1);
var Text_4 = CreText('Text_4',-1,233,799,53,"",'#ffffff','#ffffff','#7f7f7f','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','5','75',2,'#c0c0c0','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var bin_0 = CreText('bin_0',64,90,190,206,"n",'#ffffff','#ffffff','#282828','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(bin_0);
var bin_2 = CreText('bin_2',561,90,190,206,"m",'#ffffff','#ffffff','#282828','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(bin_2);
var bin_1 = CreText('bin_1',318,89,190,206,"m",'#ffffff','#ffffff','#282828','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(bin_1);
var nhom_0 = CreText('nhom_0',4,5,66,26,"o, ô, ơ",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_0);
var nhom_1 = CreText('nhom_1',75,5,66,26,"a, ă, â",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_1);
var nhom_2 = CreText('nhom_2',146,5,66,26,"c, e, ê",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_2);
var nhom_3 = CreText('nhom_3',457,5,44,26,"u, ư",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_3);
var nhom_4 = CreText('nhom_4',217,5,66,26,"b, d, đ",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_4);
var nhom_5 = CreText('nhom_5',359,5,44,26,"m, n",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_5);
var nhom_6 = CreText('nhom_6',408,5,44,26,"p, q",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_6);
var nhom_7 = CreText('nhom_7',506,5,44,26,"h, k",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_7);
var nhom_8 = CreText('nhom_8',604,5,44,26,"s, x",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_8);
var nhom_9 = CreText('nhom_9',653,5,44,26,"v, r",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_9);
var nhom_10 = CreText('nhom_10',555,5,44,26,"g, y",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_10);
var nhom_11 = CreText('nhom_11',288,5,66,26,"i, l, t",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nhom_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NhomChu();
  return;
}
 );
Page_2.add(nhom_11);
var ch_11 = CreText('ch_11',8,303,66,66,"i",'#804000','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#000000','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_11);
var ch_3 = CreText('ch_3',167,303,73,67,"l",'#ff8000','#ff8000','#ffff00','#ffffff','',36,'Arial','Normal','center','bottom',4,'0.00','50','0',1,'#000000','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_3);
var ch_5 = CreText('ch_5',254,303,72,65,"i",'#ff0000','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#000000','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_5);
var ch_2 = CreText('ch_2',438,318,66,49,"l",'#480048','#ffffff','#ffff00','#ffffff','',36,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0, 0, 0, 0)','#480048','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_2);
var ch_8 = CreText('ch_8',514,303,68,71,"i",'#0000ff','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',5,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_8);
var ch_10 = CreText('ch_10',692,303,59,60,"K",'#0080ff','#0080ff','#ffff00','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check2();
  return;
}
 );
ch_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_10);
var ch_0 = CreText('ch_0',97,303,59,60,"K",'#4b0082','#ffffff','#ffff00','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#4b0082','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Check2();
  return;
}
 );
ch_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_0);
var ch_1 = CreText('ch_1',246,374,83,57,"i",'#ffff00','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',6,'0.00','21','0',1,'#000000','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_1);
var ch_14 = CreText('ch_14',357,303,62,58,"i",'#32cd32','#32cd32','#000000','#ffffff','',36,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#000000','#32cd32','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_14.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_14);
var ch_6 = CreText('ch_6',558,374,79,51,"i",'#ff00ff','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',11,'0.00','25','0',1,'#000000','#ff00ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_6);
var ch_9 = CreText('ch_9',613,303,73,69,"i",'#8000ff','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',1,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#8000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_9);
var ch_13 = CreText('ch_13',670,374,71,68,"l",'#8b0000','#ffffff','#ffff00','#ffffff','',36,'Arial','Normal','center','middle',8,'0.00','33','75',0,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_13.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_13);
var ch_7 = CreText('ch_7',461,374,66,58,"i",'#7fffd4','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',3,'0.00','20','0',1,'#000000','#7fffd4','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_7);
var ch_4 = CreText('ch_4',360,374,70,62,"l",'#8b0000','#ffffff','#ffff00','#ffffff','',36,'Arial','Normal','center','middle',8,'0.00','33','75',0,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_4);
var ch_15 = CreText('ch_15',143,374,72,72,"i",'#ff00ff','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',5,'0.00','23','0',0,'rgba(0, 0, 0, 0)','#ff00ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_15.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_15);
var ch_12 = CreText('ch_12',37,374,75,69,"l",'#005500','#ffffff','#ffff00','#ffffff','',36,'Arial','Normal','center','bottom',4,'0.00','50','0',1,'#ffffff','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ch_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_12.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(ch_12);
stage.add(Page_2);
InitLacVietScript();
};
