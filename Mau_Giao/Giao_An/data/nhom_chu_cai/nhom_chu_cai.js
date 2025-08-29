folder_Resource ='data/nhom_chu_cai';
var a_cha="aă_âb_cd_đe_êg_hi_kl_mn_oô_ơq_pr_st_uư_vy";
var m_tal=0;
var count=0;
var adiem=[0,0,0,0,0,0,0,0,0,0,0,0];
var agroup=["o, ô, ơ","a, ă, â","c, e, ê","b, d, đ","i, l, t","m, n","p, q","u, ư","h, k","g, y", "s, x", "v, r"];
var index = 0;
function CreateNew( item)
{

	if(item>=12)
	{
	for(var h=0; h < 12; h++)
			if(adiem[h]==0)
			{
				item=h;
				break;
			}
	}
	
	var m_sele = agroup[item];
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
	index = item;	
	//GetVer();
}
function Check2(){
     var k= 0;
	var b= false;
	while(k<3 && !b){
		if(RectInRect("","bin_"+k,""))
		{
			if(GetText("","")==GetText("","bin_"+k))
				{
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
		adiem[index]=1;
		SetColor("","g_"+index,"#7CFC00");

		var diem=0;
		for(var j=0; j < 12; j++)
			if(adiem[j]==1)
			{
				diem++;
			}
		//UpdateScore(diem);
		index++;
		while(adiem[index]==1)
			index++;

		PlaySound("ID_SOUND_CLAP");
		if(diem>=12)
		{
			Message("Bạn đã hoàn thành bài học này.");
			return;
		}
		
		CreateNew(index);
	}
	InvalidateObj("","");
}
function MounDownSpeak()
{
	var txt = "Chữ " + GetText("","");
	Speak(txt ,"VN");
}
function Page_2()
{
CreateNew(0);
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
var Text_2 = CreText('Text_2',756,234,44,216,"",'#ff6820','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',1,285,758,165,"",'#ffad5b','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',693,48,92,36,"Làm Lại",'#ff0000','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
for(var h=0; h < 12; h++)
{
adiem[h]==0;
SetColor("","g_"+h,"-1");
}
CreateNew(0);
  return;
}
 );
var Text_4 = CreText('Text_4',-1,233,799,53,"",'#ffffff','#ffffff','#7f7f7f','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','5','75',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bin_0 = CreText('bin_0',64,90,190,206,"n",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var bin_2 = CreText('bin_2',561,90,190,206,"m",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var bin_1 = CreText('bin_1',318,89,190,206,"m",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE2.PNG',80,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','#ffffe0','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
var g_0 = CreText('g_0',4,5,66,36,"o, ô, ơ",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(0);
  return;
}
 );
g_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_1 = CreText('g_1',80,5,66,36,"a, ă, â",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(1);
  return;
}
 );
g_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_2 = CreText('g_2',156,5,66,36,"c, e, ê",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(2);
  return;
}
 );
g_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_7 = CreText('g_7',511,5,44,36,"u, ư",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(7);
  return;
}
 );
g_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_3 = CreText('g_3',232,5,66,36,"b, d, đ",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(3);
  return;
}
 );
g_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_5 = CreText('g_5',384,5,63,36,"m, n",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(5);
  return;
}
 );
g_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_6 = CreText('g_6',457,5,44,36,"p, q",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(6);
  return;
}
 );
g_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_8 = CreText('g_8',565,5,52,36,"h, k",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(8);
  return;
}
 );
g_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_10 = CreText('g_10',681,5,44,36,"s, x",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(10);
  return;
}
 );
g_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_11 = CreText('g_11',737,5,49,36,"v, r",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(11);
  return;
}
 );
g_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_9 = CreText('g_9',627,5,44,36,"g, y",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(9);
  return;
}
 );
g_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var g_4 = CreText('g_4',308,5,66,36,"i, l, t",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
g_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateNew(4);
  return;
}
 );
g_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_11 = CreText('ch_11',8,303,73,69,"i",'#804000','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_3 = CreText('ch_3',167,303,73,69,"l",'#ff8000','#ff8000','#ffff00','#ffffff','',48,'Arial','Bold','center','bottom',4,'0.00','50','0',2,'#ffffff','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_5 = CreText('ch_5',256,290,73,69,"i",'#ff0000','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_2 = CreText('ch_2',438,300,73,64,"l",'#480048','#ffffff','#ffff00','#ffffff','',48,'Arial','Bold','center','middle',7,'0.00','25','25',2,'#ffffff','#480048','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_8 = CreText('ch_8',514,303,73,69,"i",'#0000ff','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',5,'0.00','0','0',2,'#ffffff','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_10 = CreText('ch_10',677,296,73,69,"K",'#0080ff','#0080ff','#ffff00','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
MounDownSpeak();
  return;
}
 );
var ch_0 = CreText('ch_0',97,303,73,69,"K",'#4b0082','#ffffff','#ffff00','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#4b0082','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
MounDownSpeak();
  return;
}
 );
var ch_1 = CreText('ch_1',246,374,75,69,"i",'#ffff00','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',6,'0.00','21','0',2,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_14 = CreText('ch_14',357,303,73,69,"i",'#32cd32','#32cd32','#000000','#ffffff','',48,'Arial','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#32cd32','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_14.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_6 = CreText('ch_6',558,375,86,68,"i",'#ff00ff','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',11,'0.00','25','0',2,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_9 = CreText('ch_9',594,296,73,69,"i",'#8000ff','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',1,'0.00','0','0',2,'#ffffff','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_13 = CreText('ch_13',670,374,75,69,"l",'#8b0000','#ffffff','#ffff00','#ffffff','',48,'Arial','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_13.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_7 = CreText('ch_7',461,374,75,69,"i",'#7fffd4','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',3,'0.00','20','0',2,'#ffffff','#7fffd4','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_4 = CreText('ch_4',360,374,75,69,"l",'#8b0000','#ffffff','#ffff00','#ffffff','',48,'Arial','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_15 = CreText('ch_15',143,374,75,69,"i",'#ff00ff','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',5,'0.00','23','0',2,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_15.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
var ch_12 = CreText('ch_12',37,374,75,69,"l",'#005500','#ffffff','#ffff00','#ffffff','',48,'Arial','Bold','center','bottom',4,'0.00','50','0',2,'#ffffff','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;Check2();
  return;
}
 );
ch_12.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
MounDownSpeak();
  return;
}
 );
Page_2.add(Page_2_Backrounnd,Text_2,Text_3,Text_1,Text_4,bin_0,bin_2,bin_1,g_0,g_1,g_2,g_7,g_3,g_5,g_6,g_8,g_10,g_11,g_9,g_4,ch_11,ch_3,ch_5,ch_2,ch_8,ch_10,ch_0,ch_1,ch_14,ch_6,ch_9,ch_13,ch_7,ch_4,ch_15,ch_12);
stage.add(Page_2);
InitLacVietScript();
};
