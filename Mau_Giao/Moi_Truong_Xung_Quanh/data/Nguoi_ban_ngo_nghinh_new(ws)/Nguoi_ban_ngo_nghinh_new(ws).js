folder_Resource ='data/Nguoi_ban_ngo_nghinh_new(ws)';
var aobj=["xanh_lam","xanh_la","do","vang","tim","hong","nau","den"];
var a_dung=["tốt lắm","rất giỏi","thật tuyệt","Đúng rồi"];
function showw( i)
{ for(var k=0;k<8;k++)
SetShowObject("",aobj[k],i);
}
function ShowSomeObj()
{ 
SetShowObject("","",0);
var name=aobj[Random(7)];
var i=0;

while(i<3)
	{
		if(GetShowObject("",name)!=0 && GetVar("m_sacmau")!= GetText("",name))
		{
		SetShowObject("",name,0);
		i++;
		}
		name=aobj[Random(7)];
	}
}
function ShowAll()
{
for(var k=0;k<8;k++)
{ if(GetVar("m_sacmau")!= GetText("",aobj[k]))
SetShowObject("",aobj[k],0);
}
}

function _PlaySound()
{
PlayWave("","","ID_SOUND1");
Delay(1000);

var tt= GetText("","");
return tt;
}
var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var bp=["tóc ","đôi tay ","cái mũi ","cái miệng ","đôi chân "];
var color=["#0066CC","#00FF00","#FF0000","#FFFF00","#6600CC","#FF00FF","#663300","#000000"];

var h_texttoc=["dài","ngắn","thẳng"];
var arr_objtoc=["dai","ngan","thang"];

var h_taychan=["to","nhỏ","dài","ngắn","thẳng"];
var a_objtaychan=["to","nho","dai","ngan","thang"];

var h_miengmui=["to","nhỏ","tròn","nhọn"];
var a_objmiengmui=["to","nho","tron","nhon"];
var objname="";
var tayfai="";
function CauHoi( i)
{
SetShowObject("","bang_diem",0);
var st="Bạn tôi có ";
var i_hd,i_ms;
switch(i)
{
	case 1:
		{
		i_hd = GetVar("idx_hinhdang");
		i_ms = GetVar("idx_color");
		st=st+bp[i]+h_taychan[i_hd];
		objname="taytrai_"+a_objtaychan[i_hd];
		tayfai ="tayphai_"+a_objtaychan[i_hd];
		 break;	
		}
	case 0:
		{
		i_hd = GetVar("idx_hd_toc");
		i_ms = GetVar("idx_color_toc");
		st=st+bp[i]+ h_texttoc[i_hd] ;
		objname="toc_"+arr_objtoc[i_hd];
		tayfai="";
		 break;	
		}
	case 2:
		{
		i_hd = GetVar("idx_hd_mui");
		i_ms = GetVar("idx_color_mui");
		st=st+bp[i]+ h_miengmui[i_hd] ;
		objname="mui_"+a_objmiengmui[i_hd];
		tayfai="";

		 break;	
		}
	case 3:
		{
		i_hd = GetVar("idx_hd_mieng");
		i_ms = GetVar("idx_color_mieng");
		st=st+bp[i]+ h_miengmui[i_hd];
		objname="mieng_"+a_objmiengmui[i_hd];
		tayfai="";
		 break;	
		
		}
	case 4:
		{
		i_hd = GetVar("idx_hd_chan");
		i_ms = GetVar("idx_color_chan");
		st=st+bp[i]+ h_taychan[i_hd] ;
		objname="chan_"+a_objtaychan[i_hd];
		tayfai="";
		 break;	
		}
} 
		SetVar("m_sacmau",a[i_ms]);
		SetText("","cau_hoi",st+" màu__________.");
		st = st+" màu " +a[i_ms];
		SetVar("dap_an",st);
		SetVar("m_count",0);
		SetVar("m_objname",objname);
		SetVar("m_objtayfai",tayfai);
            InvalidateObj("","");

}
function CauHoi1( i)
{
var st="";
var i_hd,i_ms;
SetShowObject("","bang_diem",0);
switch(i)
{
	case 1:
		{
		i_hd = GetVar("idx_hinhdang");
		i_ms = GetVar("idx_color");
		st=h_taychan[i_hd];
		objname="taytrai_"+a_objtaychan[i_hd];
		tayfai ="tayphai_"+a_objtaychan[i_hd];
		 break;	
		}
	case 0:
		{
		i_hd = GetVar("idx_hd_toc");
		i_ms = GetVar("idx_color_toc");
		st=h_texttoc[i_hd] ;
		objname="toc_"+arr_objtoc[i_hd];
		tayfai ="";
		 break;	
		}
	case 2:
		{
		i_hd = GetVar("idx_hd_mui");
		i_ms = GetVar("idx_color_mui");
		st=h_miengmui[i_hd] ;
		objname="mui_"+a_objmiengmui[i_hd];

		tayfai ="";
		 break;	
		}
	case 3:
		{
		i_hd = GetVar("idx_hd_mieng");
		i_ms = GetVar("idx_color_mieng");
		st=h_miengmui[i_hd];
		objname="mieng_"+a_objmiengmui[i_hd];
		tayfai ="";
		 break;	
		
		}
	case 4:
		{
		i_hd = GetVar("idx_hd_chan");
		i_ms = GetVar("idx_color_chan");
		st=h_taychan[i_hd] ;
		objname="chan_"+a_objtaychan[i_hd];
		tayfai ="";
		 break;	
		}
	} 
		SetVar("m_hinhdang",st);
		st="Bạn tôi có "+ bp[i];
		SetText("","cau_hoi",st+"__________ màu "+a[i_ms]);
		st=st+ GetVar("m_hinhdang")+" màu "+a[i_ms];
		SetVar("dap_an",st);
		SetVar("m_count",0);
		SetVar("m_objname",objname);
		SetVar("m_objtayfai",tayfai);
		InvalidateObj("","");
}
function Page_1()
{
var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];

SetVar("idx_color",1);
SetVar("idx_hinhdang",0);

//
// tay
var h_text=["to","nhỏ","dài","ngắn","thẳng"];
var h_id=["to","nho","dai","ngan","thang"];
for(var q=1;q<5;q++)
{
var nameshow="taytrai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
nameshow="tayphai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}
//chan
var t= Random(5);
var hh = Random(8);
SetText("","color_chan",a[hh]);
SetColor("","mau_chan",color[hh]);
for(q=0;q<5;q++)
{
var namechan="chan_"+h_id[q];
SetShowObject("",namechan,0);
} SetShowObject("","chan_"+h_id[t],1);
SetText("","hd_chan",h_text[t]);
var hdang = h_id[t];
var idx = "CHAN_"+id[hh]+"_"+toUpperCase(hdang);
SetRsc("","chan_"+h_id[t],idx);
SetVar("idx_color_chan",hh+1);
SetVar("idx_hd_chan",t);
//
 // toc
var h_idtoc=["dai","ngan","thang"];
var h_texttoc=["dài","ngắn","thẳng"];
var k= Random(3);
var tt= Random(8);
SetText("","color_toc",a[tt]);
SetColor("","mau_toc",color[tt]);
for(q=0;q<3;q++)
{
var nametoc="toc_"+h_idtoc[q];
SetShowObject("",nametoc,0);
}
var hd_toc = h_idtoc[k];
SetText("","hd_toc",h_texttoc[k]);
var idx_t = "TOC_"+id[tt]+"_"+toUpperCase(hd_toc);
SetRsc("","toc_"+h_idtoc[k],idx_t);
SetShowObject("","toc_"+h_idtoc[k],1);
SetVar("idx_hd_toc",k);
SetVar("idx_color_toc",tt+1);
  var h_idmui=["to","nho","tron","nhon"];
var h_textmui=["to","nhỏ","tròn","nhọn"];
for(q=0;q<4;q++)
{
var namemui="mui_"+h_idmui[q];
SetShowObject("",namemui,0);
}
var i_mui= Random(4);
SetText("","hd_mui",h_textmui[i_mui]);
var clor_mui= Random(8);
SetText("","color_mui",a[clor_mui]);
SetColor("","mau_mui",color[clor_mui]);
var hd_mui = h_idmui[i_mui];
var idx_m = "MUI_"+id[clor_mui]+"_"+toUpperCase(hd_mui);
SetRsc("","mui_"+h_idmui[i_mui],idx_m);
SetShowObject("","mui_"+h_idmui[i_mui],1);
SetVar("idx_hd_mui",i_mui);
SetVar("idx_color_mui",clor_mui+1);
for(q=0;q<4;q++)
{
var namemieng="mieng_"+h_idmui[q];
SetShowObject("",namemieng,0);
}
var i_mieng= Random(4);
SetText("","hd_mieng",h_textmui[i_mieng]);
var clor_mieng= Random(8);
SetText("","color_mieng",a[clor_mieng]);
SetColor("","mau_mieng",color[clor_mieng]);
var hd_mieng = h_idmui[i_mieng];
var idx_mi = "MIENG_"+id[clor_mieng]+"_"+toUpperCase(hd_mieng);
SetRsc("","mieng_"+h_idmui[i_mieng],idx_mi);
SetShowObject("","mieng_"+h_idmui[i_mieng],1);
SetVar("idx_hd_mieng",i_mieng);
SetVar("idx_color_mieng",clor_mieng+1);
//
  return;
}

function Page_2()
{
PlayWave("","","ID_SOUND2");
var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
// tay
var i_hdangtay= Random(5);
var i_colortay = Random(8);
var h_text=["to","nhỏ","dài","ngắn","thẳng"];
var h_id=["to","nho","dai","ngan","thang"];
for(var m=0;m<8;m++)
{ SetColor("","mau_"+m,color[m]);
}
for(var q=0;q<5;q++)
{
var nameshow="taytrai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
nameshow="tayphai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}
var hdangtay = h_id[i_hdangtay];
SetShowObject("","taytrai_"+hdangtay,1);
SetShowObject("","tayphai_"+hdangtay,1);
//SetText("","hd_tay",h_text[i_hdangtay]);
var idxtay = "TAYTRAI_"+id[i_colortay]+"_"+toUpperCase(hdangtay );
SetRsc("","taytrai_"+h_id[i_hdangtay],idxtay);
idxtay = "TAYPHAI_"+id[i_colortay]+"_"+toUpperCase(hdangtay );
SetRsc("","tayphai_"+h_id[i_hdangtay],idxtay);
SetVar("idx_color",i_colortay);
SetVar("idx_hinhdang",i_hdangtay);

//
//chan
var t= Random(5);
var hh = Random(8);
SetText("","color_chan",a[hh]);
for(q=0;q<5;q++)
{
var namechan="chan_"+h_id[q];
SetShowObject("",namechan,0);
}
 SetShowObject("","chan_"+h_id[t],1);
SetText("","hd_chan",h_text[t]);
var hdang = h_id[t];
var idx = "CHAN_"+id[hh]+"_"+toUpperCase(hdang);
SetRsc("","chan_"+h_id[t],idx);
SetVar("idx_color_chan",hh);
SetVar("idx_hd_chan",t);

// toc
var h_idtoc=["dai","ngan","thang"];
var h_texttoc=["dài","ngắn","thẳng"];
var k= Random(3);
var tt= Random(8);
SetText("","color_toc",a[tt]);
for(q=0;q<3;q++)
{
var nametoc="toc_"+h_idtoc[q];
SetShowObject("",nametoc,0);
}
var hd_toc = h_idtoc[k];
SetText("","hd_toc",h_texttoc[k]);
var idx_t = "TOC_"+id[tt]+"_"+toUpperCase(hd_toc);
SetRsc("","toc_"+h_idtoc[k],idx_t);
SetShowObject("","toc_"+h_idtoc[k],1);
SetVar("idx_hd_toc",k);
SetVar("idx_color_toc",tt);

 var h_idmui=["to","nho","tron","nhon"];
var h_textmui=["to","nhỏ","tròn","nhọn"];
for(q=0;q<4;q++)
{
var namemui="mui_"+h_idmui[q];
SetShowObject("",namemui,0);
}
var i_mui= Random(4);
SetText("","hd_mui",h_textmui[i_mui]);
var clor_mui= Random(8);
SetText("","color_mui",a[clor_mui]);
var hd_mui = h_idmui[i_mui];
var idx_m = "MUI_"+id[clor_mui]+"_"+toUpperCase(hd_mui);
SetRsc("","mui_"+h_idmui[i_mui],idx_m);
SetShowObject("","mui_"+h_idmui[i_mui],1);
SetVar("idx_hd_mui",i_mui);
SetVar("idx_color_mui",clor_mui);
//mieng
 for(q=0;q<4;q++)
{
var namemieng="mieng_"+h_idmui[q];
SetShowObject("",namemieng,0);
}
var i_mieng= Random(4);
SetText("","hd_mieng",h_textmui[i_mieng]);
var clor_mieng= Random(8);
SetText("","color_mieng",a[clor_mieng]);
var hd_mieng = h_idmui[i_mieng];
var idx_mi = "MIENG_"+id[clor_mieng]+"_"+toUpperCase(hd_mieng);

SetRsc("","mieng_"+h_idmui[i_mieng],idx_mi);
SetShowObject("","mieng_"+h_idmui[i_mieng],1);
SetVar("idx_hd_mieng",i_mieng);
SetVar("idx_color_mieng",clor_mieng);
SetVar("cau_hoi",0);
CauHoi(0);
var sttt = GetVar("dap_an");
SpeakVN("","",sttt,"đ","đ");
  return;
}


function Page_3()
{
PlayWave("","","ID_SOUND2");
var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
// tay
var i_hdangtay= Random(5);
var i_colortay = Random(8);
var h_text=["to","nhỏ","dài","ngắn","thẳng"];
var h_id=["to","nho","dai","ngan","thang"];
for(var q=0;q<5;q++)
{
var nameshow="taytrai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
nameshow="tayphai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}
var hdangtay = h_id[i_hdangtay];
SetShowObject("","taytrai_"+hdangtay,1);
SetShowObject("","tayphai_"+hdangtay,1);
//SetText("","hd_tay",h_text[i_hdangtay]);
var idxtay = "TAYTRAI_"+id[i_colortay]+"_"+toUpperCase(hdangtay );
SetRsc("","taytrai_"+h_id[i_hdangtay],idxtay);
idxtay = "TAYPHAI_"+id[i_colortay]+"_"+toUpperCase(hdangtay );
SetRsc("","tayphai_"+h_id[i_hdangtay],idxtay);
SetVar("idx_color",i_colortay);
SetVar("idx_hinhdang",i_hdangtay);

//
//chan
var t= Random(5);
var hh = Random(8);
SetText("","color_chan",a[hh]);
for(q=0;q<5;q++)
{
var namechan="chan_"+h_id[q];
SetShowObject("",namechan,0);
}
 SetShowObject("","chan_"+h_id[t],1);
SetText("","hd_chan",h_text[t]);
var hdang = h_id[t];
var idx = "CHAN_"+id[hh]+"_"+toUpperCase(hdang);
SetRsc("","chan_"+h_id[t],idx);
SetVar("idx_color_chan",hh);
SetVar("idx_hd_chan",t);

// toc
var h_idtoc=["dai","ngan","thang"];
var h_texttoc=["dài","ngắn","thẳng"];
var k= Random(3);
var tt= Random(8);
SetText("","color_toc",a[tt]);
for(q=0;q<3;q++)
{
var nametoc="toc_"+h_idtoc[q];
SetShowObject("",nametoc,0);
}
var hd_toc = h_idtoc[k];
SetText("","hd_toc",h_texttoc[k]);
var idx_t = "TOC_"+id[tt]+"_"+toUpperCase(hd_toc);
SetRsc("","toc_"+h_idtoc[k],idx_t);
SetShowObject("","toc_"+h_idtoc[k],1);
SetVar("idx_hd_toc",k);
SetVar("idx_color_toc",tt);

 var h_idmui=["to","nho","tron","nhon"];
var h_textmui=["to","nhỏ","tròn","nhọn"];
for(q=0;q<4;q++)
{
var namemui="mui_"+h_idmui[q];
SetShowObject("",namemui,0);
}
var i_mui= Random(4);
SetText("","hd_mui",h_textmui[i_mui]);
var clor_mui= Random(8);
SetText("","color_mui",a[clor_mui]);
var hd_mui = h_idmui[i_mui];
var idx_m = "MUI_"+id[clor_mui]+"_"+toUpperCase(hd_mui);
SetRsc("","mui_"+h_idmui[i_mui],idx_m);
SetShowObject("","mui_"+h_idmui[i_mui],1);
SetVar("idx_hd_mui",i_mui);
SetVar("idx_color_mui",clor_mui);
//mieng
 for(q=0;q<4;q++)
{
var namemieng="mieng_"+h_idmui[q];
SetShowObject("",namemieng,0);
}
var i_mieng= Random(4);
SetText("","hd_mieng",h_textmui[i_mieng]);
var clor_mieng= Random(8);
SetText("","color_mieng",a[clor_mieng]);
var hd_mieng = h_idmui[i_mieng];
var idx_mi = "MIENG_"+id[clor_mieng]+"_"+toUpperCase(hd_mieng);

SetRsc("","mieng_"+h_idmui[i_mieng],idx_mi);
SetShowObject("","mieng_"+h_idmui[i_mieng],1);
SetVar("idx_hd_mieng",i_mieng);
SetVar("idx_color_mieng",clor_mieng);
SetVar("cau_hoi",0);
CauHoi1(0);
var sttt = GetVar("dap_an");
SpeakVN("","",sttt,"đ","đ");
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,800,450,'','#c1c1e1','','','','ID_IMAGE_BG_1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c1c1e1','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var toc_thang = CreText('toc_thang',349,70,92,81,'','rgba(0, 0, 0, 0)','','','','TOC_XANHLA_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(toc_thang);
var toc_dai = CreText('toc_dai',276,87,242,219,'','rgba(0, 0, 0, 0)','','','','TOC_VANG_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(toc_dai);
var chan_thang = CreText('chan_thang',354,259,84,82,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(chan_thang);
var chan_nho = CreText('chan_nho',371,265,52,37,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(chan_nho);
var chan_ngan = CreText('chan_ngan',366,264,62,46,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(chan_ngan);
var Image2 = CreText('Image 2',270,55,253,325,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(Image2);
var color_tay = CreText('color_tay',598,112,99,24,"xanh lam",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','3','2','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
color_tay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var h_id=["to","nho","dai","ngan","thang"];

var i = GetVar("idx_color");
SetText("","",a[i]);
SetColor("","mau_tay",color[i]);
var hdang = h_id[GetVar("idx_hinhdang")];
var tspeak= _PlaySound();
tspeak ="Bạn tôi có tay màu "+tspeak;
 var nameleft = "taytrai_"+h_id[GetVar("idx_hinhdang")];
var idx = "TAYTRAI_"+id[i]+"_"+toUpperCase(hdang);
SetRsc("",nameleft,idx);

var nameright = "tayphai_"+h_id[GetVar("idx_hinhdang")];
idx = "TAYPHAI_"+id[i]+"_"+toUpperCase(hdang);
SetRsc("",nameright,idx);
AnimationMagic("",nameleft,10,3,3);
AnimationMagic("",nameright,10,3,2);

//InvalidateObj("",nameleft);
//InvalidateObj("",nameright);
SpeakVN("","",tspeak); 
i++;
if(i>7)i=0;
SetVar("idx_color",i);
  return;
}
 );
Page_1.add(color_tay);
var color_chan = CreText('color_chan',598,165,99,24,"đen",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
color_chan.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var h_id=["to","nho","dai","ngan","thang"];
var i = GetVar("idx_color_chan");
var j= GetVar("idx_hd_chan");
SetText("","",a[i]);
SetColor("","mau_chan",color[i]);
var tspeak= _PlaySound();
tspeak ="Bạn tôi có chân màu "+tspeak;

var hdang = h_id[j];
 var nameleft = "chan_"+hdang;
var idx = "CHAN_"+id[i]+"_"+toUpperCase(hdang);
SetRsc("",nameleft,idx);
AnimationMagic("",nameleft,10,4,16);
InvalidateObj("","Image 2");

i++;
if(i>7)i=0;
SpeakVN("","",tspeak); 
SetVar("idx_color_chan",i);
  return;
}

 );
Page_1.add(color_chan);
var color_toc = CreText('color_toc',599,216,99,24,"vàng",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
color_toc.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var h_id=["dai","ngan","thang"];
var i = GetVar("idx_color_toc");
var j = GetVar("idx_hd_toc");
SetText("","",a[i]);
SetColor("","mau_toc",color[i]);
var tspeak= _PlaySound();
tspeak ="Bạn tôi có tóc màu "+tspeak;
//SpeakVN("","",tspeak); 

var hdang = h_id[j];
 var nameleft = "toc_"+hdang;
var idx = "TOC_"+id[i]+"_"+toUpperCase(hdang);
SetRsc("",nameleft,idx);
InvalidateObj("","Image 2");
i++;
if(i>7)i=0;
SetVar("idx_color_toc",i);
SpeakVN("","",tspeak); 
  return;
}


 );
Page_1.add(color_toc);
var color_mui = CreText('color_mui',599,267,99,24,"đỏ",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
color_mui.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var h_id=["to","nho","tron","nhon"];
var i = GetVar("idx_color_mui");
var j = GetVar("idx_hd_mui");
SetText("","",a[i]);
SetColor("","mau_mui",color[i]);
var tspeak= _PlaySound();
tspeak ="Bạn tôi có mũi màu "+tspeak;
var hdang = h_id[j];
 var nameleft = "mui_"+hdang;
var idx = "MUI_"+id[i]+"_"+toUpperCase(hdang);
SetRsc("",nameleft,idx);
AnimationMagic("",nameleft,50,3,23);
InvalidateObj("",nameleft);
i++;
SpeakVN("","",tspeak); 
if(i>7)i=0;
SetVar("idx_color_mui",i);
  return;
}

 );
Page_1.add(color_mui);
var color_mieng = CreText('color_mieng',599,320,99,24,"tím",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
color_mieng.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var a=["xanh lam","xanh lá","đỏ","vàng","tím","hồng","nâu","đen"];
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var h_id=["to","nho","tron","nhon"];
var i = GetVar("idx_color_mieng");
var j = GetVar("idx_hd_mieng");
SetText("","",a[i]);
SetColor("","mau_mieng",color[i]);

var tspeak= _PlaySound();
tspeak ="Bạn tôi có miệng màu "+tspeak;
//SpeakVN("","",tspeak); 

var hdang = h_id[j];
var nameleft = "mieng_"+hdang;
var idx = "MIENG_"+id[i]+"_"+toUpperCase(hdang);
//
SetRsc("",nameleft,idx);
//AnimationMagic("",nameleft,10,3,25);
AnimationMagic("",nameleft,50,3,23);
InvalidateObj("","Image 2");

i++;
if(i>7)i=0;
SetVar("idx_color_mieng",i);
SpeakVN("","",tspeak); 
  return;
}


 );
Page_1.add(color_mieng);
var hd_tay = CreText('hd_tay',130,112,99,24,"to",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','3','2','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
hd_tay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var h_text=["to","nhỏ","dài","ngắn","thẳng"];
var h_id=["to","nho","dai","ngan","thang"];
var i = GetVar("idx_hinhdang");
i++;
if(i>4)i=0;

SetText("","",h_text[i]);
for(var q=0;q<5;q++)
{ var nameshow="taytrai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
nameshow="tayphai_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}

//
var tspeak= _PlaySound();
tspeak ="Bạn tôi có tay "+tspeak; 
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var i_color = GetVar("idx_color")-1;
if(i_color<0)i_color=7;
var nameleft = "taytrai_"+h_id[i];
var hdang = h_id[i];
var idx = "TAYTRAI_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",nameleft,idx);
SetShowObject("",nameleft,1);

var nameright = "tayphai_"+h_id[i];
idx = "TAYPHAI_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",nameright,idx);
SetShowObject("",nameright,1);
SpeakVN("","",tspeak);
//
SetVar("idx_hinhdang",i);
  return;
}
 );
Page_1.add(hd_tay);
var hd_chan = CreText('hd_chan',130,165,99,24,"ngắn",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hd_chan.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var h_text=["to","nhỏ","dài","ngắn","thẳng"];
var h_id=["to","nho","dai","ngan","thang"];
var i = GetVar("idx_hd_chan");
i++;
if(i>4)i=0;
SetText("","",h_text[i]);
var tspeak= _PlaySound();
tspeak ="Bạn tôi có chân "+tspeak;

for(var q=0;q<5;q++)
{
var nameshow="chan_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}

 var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var i_color = GetVar("idx_color_chan")-1;
if(i_color<0)i_color=7;
var namechan = "chan_"+h_id[i];
var hdang = h_id[i];
var idx = "CHAN_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",namechan,idx);
SetShowObject("",namechan,1);
SpeakVN("","",tspeak);
//
SetVar("idx_hd_chan",i);
  return;
}

 );
Page_1.add(hd_chan);
var hd_toc = CreText('hd_toc',130,216,99,24,"to",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hd_toc.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var h_text=["dài","ngắn","thẳng"];
var h_id=["dai","ngan","thang"];
var i = GetVar("idx_hd_toc");
i++;
if(i>2)i=0;
SetText("","",h_text[i]);
for(var q=0;q<3;q++)
{
var nameshow="toc_"+h_id[q];
if(GetShowObject("",nameshow)==1)
SetShowObject("",nameshow,0);
}
var tspeak= _PlaySound();
tspeak ="Bạn tôi có tóc "+tspeak;

var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var i_color = GetVar("idx_color_toc")-1;
if(i_color<0)i_color=7;
var nametoc = "toc_"+h_id[i];
var hdang = h_id[i];
var idx = "TOC_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",nametoc,idx);
SetShowObject("",nametoc,1);
//
SpeakVN("","",tspeak); 
SetVar("idx_hd_toc",i);
  return;
}


 );
Page_1.add(hd_toc);
var hd_mui = CreText('hd_mui',130,267,99,24,"nhỏ",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hd_mui.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var h_text=["To","nhỏ","tròn","nhọn"];
var h_id=["to","nho","tron","nhon"];
var i = GetVar("idx_hd_mui");
i++;
if(i>3)i=0;
SetText("","",h_text[i]);
for (var q=0;q<4;q++)
{
var nameshow ="mui_"+ h_id[q];
if( GetShowObject("",nameshow)==1)
 SetShowObject("",nameshow,0);
}
var tspeak= _PlaySound();
tspeak ="Bạn tôi có mũi "+tspeak;
var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var i_color = GetVar("idx_color_mui")-1;
if(i_color<0)i_color=7;
var namemui = "mui_"+h_id[i];
var hdang = h_id[i];
var idx = "MUI_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",namemui,idx);
SetShowObject("",namemui,1);
//
SpeakVN("","",tspeak); 
SetVar("idx_hd_mui",i);
  return;
}



 );
Page_1.add(hd_mui);
var hd_mieng = CreText('hd_mieng',130,320,99,24,"nhọn",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hd_mieng.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var h_text=["To","nhỏ","tròn","nhọn"];
var h_id=["to","nho","tron","nhon"];
var i = GetVar("idx_hd_mieng");
i++;
if(i>3)i=0;
SetText("","",h_text[i]);
for (var q=0;q<4;q++)
{
var nameshow ="mieng_"+ h_id[q];
if( GetShowObject("",nameshow)==1)
 SetShowObject("",nameshow,0);
}
var tspeak= _PlaySound();
tspeak ="Bạn tôi có miệng "+tspeak;

var id=["XANHLAM","XANHLA","DO","VANG","TIM","HONG","NAU","DEN"];
var i_color = GetVar("idx_color_mieng")-1;
if(i_color<0)i_color=7;
var namemui = "mieng_"+h_id[i];
var hdang = h_id[i];
var idx = "MIENG_"+id[i_color]+"_"+toUpperCase(hdang);
SetRsc("",namemui,idx);
SetShowObject("",namemui,1);
//
SpeakVN("","",tspeak); 
SetVar("idx_hd_mieng",i);
  return;
}




 );
Page_1.add(hd_mieng);
var Drawtext2 = CreText('Draw text 2',27,410,33,30,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE_MAUSAC.JPG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, '#666666',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Drawtext2);
var Image4 = CreText('Image 4',111,410,33,30,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_HINHDANG.JPG',0,'','','','',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#282828');
Image4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 3");
  return;
}
 );
Page_1.add(Image4);
var chan_dai = CreText('chan_dai',358,263,77,120,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(chan_dai);
var chan_to = CreText('chan_to',335,269,133,82,'','rgba(0, 0, 0, 0)','','','','CHAN_VANG_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(chan_to);
var toc_ngan = CreText('toc_ngan',334,81,118,38,'','rgba(0, 0, 0, 0)','','','','TOC_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(toc_ngan);
var mat = CreText('mat',319,95,158,181,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mat);
var mieng_to = CreText('mieng_to',342,219,110,45,'','rgba(0, 0, 0, 0)','','','','MIENG_XANHLA_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mieng_to);
var mieng_nho = CreText('mieng_nho',378,216,36,19,'','rgba(0, 0, 0, 0)','','','','MIENG_DEN_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mieng_nho);
var mieng_tron = CreText('mieng_tron',379,216,35,34,'','rgba(0, 0, 0, 0)','','','','MIENG_NAU_TRON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mieng_tron);
var mieng_nhon = CreText('mieng_nhon',370,224,54,35,'','rgba(0, 0, 0, 0)','','','','MIENG_VANG_NHON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mieng_nhon);
var taytrai_ngan = CreText('taytrai_ngan',312,149,38,40,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(taytrai_ngan);
var tayphai_ngan = CreText('tayphai_ngan',445,149,38,40,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(tayphai_ngan);
var tayphai_nho = CreText('tayphai_nho',446,148,34,35,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(tayphai_nho);
var taytrai_nho = CreText('taytrai_nho',313,146,39,31,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(taytrai_nho);
var taytrai_dai = CreText('taytrai_dai',287,145,65,136,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(taytrai_dai);
var taytrai_thang = CreText('taytrai_thang',274,146,77,18,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(taytrai_thang);
var tayphai_dai = CreText('tayphai_dai',440,144,65,136,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(tayphai_dai);
var tayphai_thang = CreText('tayphai_thang',442,148,77,18,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(tayphai_thang);
var tayphai_to = CreText('tayphai_to',442,153,57,68,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(tayphai_to);
var taytrai_to = CreText('taytrai_to',291,155,62,65,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(taytrai_to);
var mui_tron = CreText('mui_tron',374,174,40,42,'','rgba(0, 0, 0, 0)','','','','MUI_DEN_TRON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mui_tron);
var mui_to = CreText('mui_to',365,176,55,36,'','rgba(0, 0, 0, 0)','','','','MUI_DEN_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mui_to);
var mui_nhon = CreText('mui_nhon',361,179,48,35,'','rgba(0, 0, 0, 0)','','','','MUI_DEN_NHON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mui_nhon);
var mui_nho = CreText('mui_nho',384,178,21,30,'','rgba(0, 0, 0, 0)','','','','MUI_TIM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_1.add(mui_nho);
var mau_tay = CreText('mau_tay',577,117,18,15,"",'#0000ff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',4,4,'#282828',0,1.50);
Page_1.add(mau_tay);
var mau_chan = CreText('mau_chan',577,170,18,15,"",'#0000ff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',4,4,'#282828',0,1.50);
Page_1.add(mau_chan);
var mau_toc = CreText('mau_toc',577,221,18,15,"",'#0000ff','#ffffff','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',4,4,'#282828',0,1.50);
Page_1.add(mau_toc);
var mau_mui = CreText('mau_mui',577,272,18,15,"",'#0000ff','#ffffff','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',4,4,'#282828',0,1.50);
Page_1.add(mau_mui);
var mau_mieng = CreText('mau_mieng',577,325,18,15,"",'#0000ff','#ffffff','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',4,4,'#282828',0,1.50);
Page_1.add(mau_mieng);
var mui_ten_2 = CreText('mui_ten_2',745,168,55,62,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
mui_ten_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}

 );
Page_1.add(mui_ten_2);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,800,450,'','#c1c1e1','','','','ID_IMAGE_BG_2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c1c1e1','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var cau_hoi = CreText('cau_hoi',173,396,487,48,"Bạn của tôi có________màu_________",'rgba(0, 0, 0, 0)','#ffffff','#4b0082','#ffffff','',14,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','1','1','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_hoi);
var toc_ngan = CreText('toc_ngan',342,91,110,41,'','rgba(0, 0, 0, 0)','','','','TOC_VANG_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(toc_ngan);
var toc_thang = CreText('toc_thang',358,77,77,49,'','rgba(0, 0, 0, 0)','','','','TOC_XANHLA_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(toc_thang);
var chan_to = CreText('chan_to',331,278,135,79,'','rgba(0, 0, 0, 0)','','','','CHAN_XANHLA_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(chan_to);
var chan_dai = CreText('chan_dai',362,283,77,83,'','rgba(0, 0, 0, 0)','','','','CHAN_HONG_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(chan_dai);
var chan_nho = CreText('chan_nho',378,281,43,26,'','rgba(0, 0, 0, 0)','','','','CHAN_DO_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(chan_nho);
var chan_thang = CreText('chan_thang',373,284,41,81,'','rgba(0, 0, 0, 0)','','','','CHAN_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(chan_thang);
var chan_ngan = CreText('chan_ngan',377,283,51,32,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(chan_ngan);
var Image2 = CreText('Image 2',263,69,271,310,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',1,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,1, '#ffffff');
Page_2.add(Image2);
var toc_dai = CreText('toc_dai',282,100,232,222,'','rgba(0, 0, 0, 0)','','','','TOC_DO_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(toc_dai);
var mat = CreText('mat',318,114,158,181,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mat);
var tayphai_to = CreText('tayphai_to',435,193,57,68,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_NAU_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(tayphai_to);
var tayphai_nho = CreText('tayphai_nho',432,193,29,26,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_HONG_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(tayphai_nho);
var taytrai_dai = CreText('taytrai_dai',283,195,71,122,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(taytrai_dai);
var tayphai_dai = CreText('tayphai_dai',439,193,71,122,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(tayphai_dai);
var tayphai_ngan = CreText('tayphai_ngan',443,193,32,34,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_VANG_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(tayphai_ngan);
var taytrai_thang = CreText('taytrai_thang',277,195,77,21,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(taytrai_thang);
var tayphai_thang = CreText('tayphai_thang',439,187,77,21,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(tayphai_thang);
var mui_tron = CreText('mui_tron',372,198,40,42,'','rgba(0, 0, 0, 0)','','','','MUI_HONG_TRON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mui_tron);
var mieng_to = CreText('mieng_to',352,247,80,37,'','rgba(0, 0, 0, 0)','','','','MIENG_VANG_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mieng_to);
var mieng_tron = CreText('mieng_tron',373,247,39,34,'','rgba(0, 0, 0, 0)','','','','MIENG_HONG_TRON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mieng_tron);
var mieng_nhon = CreText('mieng_nhon',366,248,54,33,'','rgba(0, 0, 0, 0)','','','','MIENG_NAU_NHON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mieng_nhon);
var taytrai_to = CreText('taytrai_to',303,191,62,65,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_NAU_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(taytrai_to);
var taytrai_nho = CreText('taytrai_nho',321,190,31,28,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_HONG_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(taytrai_nho);
var Image4 = CreText('Image 4',20,405,38,34,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE_HINHDANG.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#282828');
Image4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Image4);
var xanh_lam = CreText('xanh_lam',122,132,99,20,"xanh lam",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','right','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','3','2','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
xanh_lam.on('mouseup touchend dragend',
function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var i= GetVar("cau_hoi");
i++;
var st= GetVar("dap_an");
if(GetVar("m_sacmau")== GetText("",""))
{
	showw(0)	; 	
	SpeakVN("","",a_dung[Random(4)]);
	SetText("","cau_hoi",st);	
	AnimationFly("",GetVar("m_objname"),10,3,13);
	var tay_fai= GetVar("m_objtayfai");
	if(tay_fai!="")
	AnimationFly("",tay_fai,10,3,13);
	InvalidateObj("","Image 2");
//      SpeakVN("","",st);	
	PlayWave("","","ID_SOUND4");
       setTimeoutFunction("SpeakVN('','','" + st + "')", 3500);


	SetShowObject("","bang_diem",1);
	if(i>4)
	{
	showw(1);
	GetScriptObj("","",3);
	return;
	}
	//CauHoi(i);
	setTimeoutFunction("CauHoi("+i+")",5000);
	SetVar("cau_hoi",i);
	SetVar("m_count",0);
	showw(1);
	st= GetVar("dap_an");
	SpeakVN("","",st);
 //
}
else
{
var count = GetVar("m_count");
count++;
if(count==3)
ShowSomeObj();
if(count==5) ShowAll();
SpeakVN("","", GetText("",""));
//SpeakVN("","",st);
PlaySound("ID_SOUND3");
setTimeoutFunction("SpeakVN('','','"+st+"')",1500);
//SpeakVN("","","Sai rồi, chọn lại.");
SetVar("m_count",count);
//sai
}

}
 );
Page_2.add(xanh_lam);
var xanh_la = CreText('xanh_la',122,184,99,20,"xanh lá",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
xanh_la.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_2.add(xanh_la);
var vang = CreText('vang',122,285,99,24,"vàng",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
vang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_2.add(vang);
var red_do = CreText('red_do',122,233,99,24,"đỏ",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
red_do.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}

 );
Page_2.add(red_do);
var tim = CreText('tim',578,133,99,19,"tím",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
tim.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}


 );
Page_2.add(tim);
var den = CreText('den',578,288,99,21,"đen",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
den.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_2.add(den);
var hong = CreText('hong',578,184,99,21,"hồng",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hong.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}
 );
Page_2.add(hong);
var nau = CreText('nau',578,236,99,20,"nâu",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
nau.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}

 );
Page_2.add(nau);
var mui_to = CreText('mui_to',364,198,57,43,'','rgba(0, 0, 0, 0)','','','','MUI_DO_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mui_to);
var mui_nhon = CreText('mui_nhon',360,198,48,39,'','rgba(0, 0, 0, 0)','','','','MUI_VANG_NHON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mui_nhon);
var mui_nho = CreText('mui_nho',379,198,23,28,'','rgba(0, 0, 0, 0)','','','','MUI_VANG_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mui_nho);
var mieng_nho = CreText('mieng_nho',375,252,36,26,'','rgba(0, 0, 0, 0)','','','','MIENG_DO_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(mieng_nho);
var taytrai_ngan = CreText('taytrai_ngan',327,197,32,34,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_VANG_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_2.add(taytrai_ngan);
var mau_0 = CreText('mau_0',99,128,27,29,"",'#0000ff','#0000ff','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#0000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_0);
var mau_1 = CreText('mau_1',99,180,27,29,"",'#00d200','#00d200','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#00d200','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_1);
var mau_2 = CreText('mau_2',99,231,27,29,"",'#ff0000','#ff0000','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_2);
var mau_3 = CreText('mau_3',101,283,27,29,"",'#ffff00','#ffff00','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_3);
var mau_4 = CreText('mau_4',668,128,27,29,"",'#a600a6','#a600a6','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#a600a6','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_4);
var mau_5 = CreText('mau_5',668,180,27,29,"",'#ff00ff','#ff00ff','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#ff00ff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_5);
var mau_6 = CreText('mau_6',668,232,27,29,"",'#804000','#804000','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_6);
var mau_7 = CreText('mau_7',668,284,27,29,"",'#282828','#282828','#0000ff','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#282828','0','0','rgba(0, 0, 0, 0)','0','0','4','1',2,2,'#282828',0,1.50);
Page_2.add(mau_7);
var bang_diem = CreText('bang_diem',305,129,215,128,"",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE1.GIF',26,'Arial','Bold Italic','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bang_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","bang_diem",0);
  return;
}
 );
Page_2.add(bang_diem);
var mui_ten_1 = CreText('mui_ten_1',1,161,55,62,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
mui_ten_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}



 );
Page_2.add(mui_ten_1);
var mui_ten_2 = CreText('mui_ten_2',748,161,55,62,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
mui_ten_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}

 );
Page_2.add(mui_ten_2);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,800,450,'','#c1c1e1','','','','ID_IMAGE_BG_3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c1c1e1','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var Image2 = CreText('Image 2',190,94,271,308,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',1,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,1, '#ffffff');
Page_3.add(Image2);
var chan_thang = CreText('chan_thang',382,284,35,79,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(chan_thang);
var chan_nho = CreText('chan_nho',372,291,52,31,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(chan_nho);
var chan_dai = CreText('chan_dai',278,305,96,113,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(chan_dai);
var toc_thang = CreText('toc_thang',358,84,77,55,'','rgba(0, 0, 0, 0)','','','','TOC_XANHLA_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(toc_thang);
var chan_to = CreText('chan_to',343,284,113,76,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(chan_to);
var toc_ngan = CreText('toc_ngan',349,111,94,21,'','rgba(0, 0, 0, 0)','','','','TOC_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(toc_ngan);
var toc_dai = CreText('toc_dai',277,108,244,196,'','rgba(0, 0, 0, 0)','','','','TOC_VANG_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(toc_dai);
var mat = CreText('mat',318,121,158,181,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mat);
var chan_ngan = CreText('chan_ngan',377,297,42,14,'','rgba(0, 0, 0, 0)','','','','CHAN_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(chan_ngan);
var taytrai_dai = CreText('taytrai_dai',287,203,71,122,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(taytrai_dai);
var tayphai_dai = CreText('tayphai_dai',439,202,71,122,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_DAI.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(tayphai_dai);
var taytrai_thang = CreText('taytrai_thang',277,202,77,15,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(taytrai_thang);
var tayphai_thang = CreText('tayphai_thang',439,200,77,15,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_THANG.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(tayphai_thang);
var mieng_to = CreText('mieng_to',359,256,80,37,'','rgba(0, 0, 0, 0)','','','','MIENG_DO_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mieng_to);
var mieng_tron = CreText('mieng_tron',379,261,39,34,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mieng_tron);
var mieng_nhon = CreText('mieng_nhon',374,260,46,27,'','rgba(0, 0, 0, 0)','','','','MIENG_DO_NHON.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mieng_nhon);
var xanh_lam = CreText('xanh_lam',110,113,99,24,"to",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','3','2','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
xanh_lam.on('mouseup touchend dragend',
function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var i= GetVar("cau_hoi");
i++;
var st= GetVar("dap_an");
if(GetVar("m_hinhdang")== GetText("",""))
{
//
	showw(0)	; 	
	SpeakVN("","",a_dung[Random(4)]);
	SetText("","cau_hoi",st);
	 InvalidateObj("","");
	AnimationFly("",GetVar("m_objname"),10,3,13);
	var tay_fai= GetVar("m_objtayfai");
	if(tay_fai!="")
	AnimationFly("",tay_fai,10,3,13);
	InvalidateObj("","Image 2");
//      SpeakVN("","",st);		
	PlayWave("","","ID_SOUND4");
	setTimeoutFunction("SpeakVN('','','"+st+"')",3500);

	SetShowObject("","bang_diem",1)	;
	
	if(i>4)
	{
	showw(1)	;
	GetScriptObj("","",3);
	return;
	}
	setTimeoutFunction("CauHoi1("+i+")",5000);
	SetVar("cau_hoi",i);
	SetVar("m_count",0);
	showw(1)	;
	st= GetVar("dap_an");
	SpeakVN("","",st);		
	

//
}
else
{
var count = GetVar("m_count");
count++;
if(count==3)
ShowSomeObj();
if(count==5) ShowAll();
SpeakVN("","", GetText("",""));
PlaySound("ID_SOUND3");
//SpeakVN("","",st);
setTimeoutFunction("SpeakVN('','',"+st+"')",1500);
//SpeakVN("","","Sai rồi, chọn lại.");
SetVar("m_count",count);
//sai
}

}
 );
Page_3.add(xanh_lam);
var xanh_la = CreText('xanh_la',110,165,99,24,"nhỏ",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
xanh_la.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_3.add(xanh_la);
var vang = CreText('vang',110,216,99,24,"dài",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
vang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_3.add(vang);
var mau_do = CreText('mau_do',110,267,99,24,"ngắn",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
mau_do.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}

 );
Page_3.add(mau_do);
var tim = CreText('tim',575,150,99,24,"thẳng",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
tim.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}


 );
Page_3.add(tim);
var den = CreText('den',575,203,99,24,"tròn",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
den.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}



 );
Page_3.add(den);
var hong = CreText('hong',575,254,99,24,"nhọn",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#00ff00','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','2','1','4','1',0,0,'#000000',0,1.50);
hong.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","xanh_lam",0)	;
  return;
}
 );
Page_3.add(hong);
var cau_hoi = CreText('cau_hoi',195,403,475,43,"Bạn của tôi có________màu_________",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','left','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','1','1','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(cau_hoi);
var tayphai_to = CreText('tayphai_to',435,200,57,68,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_DO_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(tayphai_to);
var tayphai_ngan = CreText('tayphai_ngan',446,200,32,34,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(tayphai_ngan);
var taytrai_ngan = CreText('taytrai_ngan',313,206,32,34,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_DEN_NGAN.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(taytrai_ngan);
var taytrai_to = CreText('taytrai_to',303,202,62,65,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_DO_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(taytrai_to);
var mui_nhon = CreText('mui_nhon',365,214,48,39,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mui_nhon);
var mieng_nho = CreText('mieng_nho',383,260,30,23,'','rgba(0, 0, 0, 0)','','','','MIENG_TIM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mieng_nho);
var taytrai_nho = CreText('taytrai_nho',311,198,31,28,'','rgba(0, 0, 0, 0)','','','','TAYTRAI_XANHLAM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(taytrai_nho);
var tayphai_nho = CreText('tayphai_nho',454,201,29,26,'','rgba(0, 0, 0, 0)','','','','TAYPHAI_XANHLAM_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(tayphai_nho);
var mui_to = CreText('mui_to',367,209,57,42,'','rgba(0, 0, 0, 0)','','','','MUI_XANHLA_TO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mui_to);
var mui_nho = CreText('mui_nho',385,212,19,27,'','rgba(0, 0, 0, 0)','','','','MUI_DEN_NHO.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mui_nho);
var mui_tron = CreText('mui_tron',374,209,40,42,'','rgba(0, 0, 0, 0)','','','','',0,'','','','',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
Page_3.add(mui_tron);
var bang_diem = CreText('bang_diem',308,125,215,128,"",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE1.GIF',26,'Arial','Bold Italic','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
bang_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","bang_diem",0);
  return;
}
 );
Page_3.add(bang_diem);
var mui_ten_1 = CreText('mui_ten_1',2,169,55,62,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','1',0,0, '#808080');
mui_ten_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}



 );
Page_3.add(mui_ten_1);
var Drawtext2 = CreText('Draw text 2',26,409,33,30,"",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE_MAUSAC.JPG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','1',0,0, '#666666',0,1.50);
Drawtext2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Drawtext2);
stage.add(Page_3);
InitLacVietScript();
};
