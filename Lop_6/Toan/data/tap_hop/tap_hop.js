folder_Resource ='/data/tap_hop';
var A = [];
var DA = [];
var abcd = ["_a","_b","_c","_d"];
var _diem =0;
var _bTestAndCreat= false;
function  createBai1()
{
     var tapA = "Cho tập hợp A = { ";
     for(var i=0 ; i<4 ; i++)
     {
       A[i] = Random(99);
	   SetText("","obj_in"+i,A[i]);
       tapA = tapA +  A[i];
		if(i<3)
		 tapA = tapA +  '; ';
      }
      tapA = tapA +" }";
      SetText("","Text_1",tapA);
}
function  RandomValueNotInArray()
{
    var e = Random(99);
	var i=0;
    while (i<4)
    {
		if(e!=A[i])
			i++;
		else
		{
			i=0;
			e = Random(99);
		}
    } 
    return e;
}
function  cauHoi1()
{
     var kq = 0;
     for(var i=0 ; i<4 ; i++)
     {
      kq = Random(2);
	  if(kq==0)
	  { 
		 DA[i] = "∈";
		 SetText("",abcd[i],A[i] +"          A");
		 SetText("","obj_out"+i,"");
      }
	  else
	  {
		var out = RandomValueNotInArray();
		SetText("","obj_out"+i,out);
		DA[i] = "∉";
		SetText("",abcd[i],out +"          A");
	  }
	  SetText("","_"+i,"?");
	  SetColor("","_"+i,"#ffffff");
	 }
	  SetText("","msg","");
	  SetText("","bt_Click","Chấm Điểm");
	  _bTestAndCreat = true;
	  InvalidateObj("","");
}
function  dapAn1()
{
	 var kq = 0;
	 var temp_point = 0;
     for(var i=0 ; i<4 ; i++)
     { 
       kq = GetText("","_"+i);
	   if(kq == "?")
	   {
		   SetText("","msg","⚠ Bạn chưa trả lời hết câu hỏi.");
		   InvalidateObj("","");
		   return;
	   }
	  if(kq==DA[i])
	  { 
		SetColor("","_"+i,"#00ff00");
		temp_point++;
      }
	  else
	  {
		SetColor("","_"+i,"#ff0000");
		temp_point--;
	  }
	 }
	 if(temp_point>0)
	 {
		 SetText("","msg","✅  Bạn được cộng "+ temp_point  + " điểm");
		 PlaySound("ID_SND_TRUE");
	 }
	 else {
		 SetText("","msg","❌ Bạn bị trừ "+ temp_point + " điểm");
		  PlaySound("ID_SND_FALSE");
	 }
	 _diem = _diem+temp_point;
	 UpdateScore(_diem);
	 _bTestAndCreat= false;
	 SetText("","bt_Click","Làm Lại");
	  InvalidateObj("","");

}
function  clickCau1()
{
  var txt = GetText("","");
  if(txt!="∈")
   SetText("","","∈");
   else SetText("","","∉");
  InvalidateObj("","");
  return;
}
function Page_1()
{
_diem = GetVer();
createBai1();
cauHoi1();
InvalidateObj("","");
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
 width: 640,
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffe0','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffe0','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',39,62,295,38,"Cho tập hợp A ={11; 13; 17; 19}",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _a = CreText('_a',48,295,122,37,"11          A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _b = CreText('_b',197,295,122,37,"12          A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _c = CreText('_c',350,295,115,37,"14          A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _d = CreText('_d',497,295,122,37,"19          A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',92,295,34,37,"?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
clickCau1();
  return;
}
 );
var _1 = CreText('_1',241,295,34,37,"?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
clickCau1();
  return;
}
 );
var _2 = CreText('_2',390,295,34,37,"?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
clickCau1();
  return;
}
 );
var _3 = CreText('_3',541,295,34,37,"?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
clickCau1();
  return;
}
 );
var Text_10 = CreText('Text_10',38,250,400,30,"Chọn ký hiệu ∈ hoặc ∉ thích hợp cho ô vuông?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',30,295,46,37,"a)",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',187,295,46,37,"b)",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',317,295,46,37,"c)",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',475,295,46,37,"d)",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',0,1,640,53,"TẬP HỢP",'#ffd700','#ffffff','#0000ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffad5b','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',-2,387,640,91,"Sai.",'#ffff8c','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffff8c','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Click = CreText('bt_Click',227,367,161,36,"Ðáp Án",'#00ff40','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#000000','#80ff80','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Click.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
 dapAn1();
else
{
createBai1();
cauHoi1();
}
  return;
}
 );
var Text_2 = CreText('Text_2',191,115,188,96,"A",'#afeeee','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',1,'0.00','0','0',1,'#000000','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_in0 = CreText('obj_in0',219,153,29,25,"43",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_in3 = CreText('obj_in3',243,177,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_in2 = CreText('obj_in2',319,147,29,25,"15",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_in1 = CreText('obj_in1',268,127,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_out3 = CreText('obj_out3',388,118,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_out0 = CreText('obj_out0',150,124,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_out2 = CreText('obj_out2',388,179,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_out1 = CreText('obj_out1',151,170,29,25,"28",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,_a,_b,_c,_d,_0,_1,_2,_3,Text_10,Text_4,Text_5,Text_6,Text_7,Text_8,msg,bt_Click,Text_2,obj_in0,obj_in3,obj_in2,obj_in1,obj_out3,obj_out0,obj_out2,obj_out1);
stage.add(Page_1);
InitLacVietScript();
};
