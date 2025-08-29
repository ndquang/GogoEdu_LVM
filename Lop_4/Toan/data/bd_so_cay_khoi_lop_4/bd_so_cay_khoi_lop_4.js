folder_Resource ='data/bd_so_cay_khoi_lop_4';
var objResult= {a:1,b:2,c:1};
var objAnswer= {a:"",b:"",c:""};
function GetResult()
{
    var mr = 0;
       for ( x in objResult) {  
               if(objResult[x]==objAnswer[x])
	{
          mr = mr +1;
	}
	SetFontColor("",x+"_"+objResult[x],"#00FF00");
    }     
   return mr*3+1;
 }

function chooseAnswer()
{
         var _name = GetName("");
    var _key = leftStr(_name, 1);
    var _value = rightStr(_name, 1);
    objAnswer[_key] = _value;
    for (var i = 0; i < 4; i++) {       
        SetFontColor("", _key + "_" + i, -1);
    }
    SetFontColor("",_name,"#0000FF");
 InvalidateObj("","");
}
function InitColor()
{
    for ( x in objResult) {        
	for(var i =0 ;i< 4 ;i++)
	SetFontColor("",x+"_"+i,-1)
    }
objAnswer= {a:"",b:"",c:""};
 InvalidateObj("","");
   GetVer();
}

function Page_1()
{
SetMoveView("","msg",1);
SetShowObject("","msg",0);	
 InitColor();
  return;
}
function Page_1_OnTimer()
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
 width: 640,
 height: 600 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,600,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',28,376,631,176,"Dựa vào biểu đồ bạn hãy viết chữ hoặc số thích hợp vào chỗ trống\r\n    a) Lớp trồng được nhiều cây nhất là:\r\n	\r\n    b) Số cây lớp 5A trồng nhiều hơn lớp 4A là:\r\n\r\n    c) Số cây cả khối lớp Bốn và khối lớp Năm trồng được là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,2.00);
var Image_1 = CreText('Image_1',64,41,410,335,'','rgba(0,0,0,0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',0,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var a_0 = CreText('a_0',89,430,71,16,"○  A. 4A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','rgba(128,255,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var thong_bao = CreText('thong_bao',183,105,293,144,"Đã gởi đến giáo viên của bạn.",'#e4e4e4','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4e4e4','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',183,105,293,24,"https://gogoedu.vn",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',288,206,96,33,"OK",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);	
 InitColor();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:297,height:148});
msg.add(thong_bao,Text_4,Text_5);
var b_0 = CreText('b_0',89,475,71,16,"○ A. 2 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var a_1 = CreText('a_1',215,430,71,16,"○ B. 5A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffff80','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var a_2 = CreText('a_2',341,430,71,16,"○ C. 5B",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var b_1 = CreText('b_1',215,475,94,16,"○ B. 5 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var a_3 = CreText('a_3',467,430,71,16,"○ D. 4B",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var b_3 = CreText('b_3',467,475,94,16,"○ D .17 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var Text_1 = CreText('Text_1',3,4,623,44,"BIỂU ĐỒ SỐ CÂY KHỐI LỚP BỐN VÀ KHỐI LỚP NĂM ĐÃ TRỒNG ĐƯỢC",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_2 = CreText('b_2',341,475,94,16,"○ C .10 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var c_0 = CreText('c_0',89,520,94,16,"○ A. 63 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var c_1 = CreText('c_1',215,520,94,16,"○ B. 171 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var c_3 = CreText('c_3',467,520,94,16,"○ D .45 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var c_2 = CreText('c_2',341,520,94,16,"○ C .108 cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
chooseAnswer();
  return;
}
 );
var Text_2 = CreText('Text_2',241,559,148,36,"Nộp Bài",'#80ff00','#ffffff','#000000','#0080ff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#64b1ff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var _point =  GetResult();
SetText("","thong_bao","Kết quả của bạn: " + _point);
SetShowObject("","msg",1);
UpdateScore(_point);
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,Image_1,a_0,msg,b_0,a_1,a_2,b_1,a_3,b_3,Text_1,b_2,c_0,c_1,c_3,c_2,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
