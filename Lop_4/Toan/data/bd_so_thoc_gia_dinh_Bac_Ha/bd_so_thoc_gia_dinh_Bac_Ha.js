folder_Resource ='data/bd_so_thoc_gia_dinh_Bac_Ha';
/*
var objToSave = {_input0:""};
function GetResult()
{
    var strAllObjectJson = {};
    for ( x in objToSave) {        
                   strAllObjectJson[x] = GetText("",x);
    }     
    return JSON.stringify( strAllObjectJson );
}
*/
function Page_1()
{
SetMoveView("","msg",1);
    var myJSON = LoadLesson();
   var allowEdit = true;  
   var shMsg = true;
   if(myJSON !="" )
{
          var data = JSON.parse(myJSON.SubmitContent);       
        for (x in data) 
            SetText("", x, data[x]);   
  if (myJSON.Status != 0){
      allowEdit  = false;		
      SetShowObject("","Group_1",0);
      SetShowObject("","Group_2",0);
       if (myJSON.Status == 1)
      SetText("","thong_bao","Đã gởi đến giáo viên của bạn.");
     else    if (myJSON.Status == 2)
           SetText("","thong_bao","Kết quả: "+GetVer());
    }
    else  
    {
    SetText("","thong_bao","");
    shMsg = false;
    }
}
else  {
	SetText("","thong_bao","Bạn chưa đăng nhập.");  
	 shMsg = true;
}
 for ( x in objToSave) 
        AllowEditText("", x, allowEdit);
SetShowObject("","msg",shMsg);	
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
 height: 680 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,680,'','#d9ecff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d9ecff','0','0','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',126,33,387,162,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',2,'#000000','','2','2','','0','0','4','0',0,0, '#808080');
var Text_1 = CreText('Text_1',16,200,605,52,"2. Biểu đồ trên nói về số thóc gia đình bác Hà đã thu hoạch trong 3 năm 2000, 2001 và 2002.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',56,5,532,30,"SỐ THÓC GIA ĐÌNH BÁC HÀ ĐÃ THU HOẠCH",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',14,247,630,176,"Dựa vào biểu đồ bạn hãy trả lời các câu hỏi dưới đây:\r\n    a) Năm 2002 gia đình bác Hà đã thu hoạch được bao nhiêu tấn thóc?\r\n    b) Năm 2002 gia đình bác Hà đã thu hoạch nhiều hơn năm 2000 bao nhiêu tạ thóc?\r\n    c) Cả 3 năm gia đình bác Hà thu hoạch được bao nhiêu tấn thóc.?\r\n         - Năm nào thu hoạch được nhiều thóc nhất?\r\n         - Năm nào thu hoạch được ít thóc nhất?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.80);
var _input0 = CreText('_input0',55,392,517,200,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.80);
var btSave = CreText('btSave',150,608,159,44,"     Lưu bài làm",'#ffff80','#ffffff','#000000','#0080ff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#64b1ff','#ffff80','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSave.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(SaveLesson(GetResult())==false)
SetText("","thong_bao","Bạn chưa đăng nhập");
else
SetText("","thong_bao","Bạn đã lưu bài học");
SetShowObject("","msg",1);
  return;
}
 );
var btSend = CreText('btSend',357,608,148,44,"Gửi GV",'#ffbbbb','#ffffff','#000000','#0080ff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#64b1ff','#ffbbbb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSend.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(SubmitLesson(GetResult())==false)
SetText("","thong_bao","Bạn chưa đăng nhập");
else SetText("","thong_bao","Bạn đã giử bài");
SetShowObject("","msg",1);
  return;
}
 );
var Image_2 = CreText('Image_2',154,610,38,38,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_3 = CreText('Image_3',360,608,34,38,'','rgba(0,0,0,0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var thong_bao = CreText('thong_bao',135,269,293,144,"Đã gởi đến giáo viên của bạn.",'#e4e4e4','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4e4e4','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',135,269,293,24,"https://gogoedu.vn",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',240,370,96,33,"OK",'#e6e6fa','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:297,height:148});
msg.add(thong_bao,Text_4,Text_5);
var Image_4 = CreText('Image_4',544,47,66,66,'','rgba(0,0,0,0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','0','0',2,'#000000','','2','2','','0','0','4','0',0,0, '#808080');
var Text_6 = CreText('Text_6',523,126,121,71,"Chú ý: Mỗi thùng chỉ 10 tạ thóc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:163,height:56});
Group_1.add(btSave,Image_2);
var Group_2 = new Kinetic.Group({name:'Group_2',x:0,y:0,width:152,height:56});
Group_2.add(btSend,Image_3);
Page_1.add(Page_1_Backrounnd,Image_1,Text_1,Text_2,Text_3,_input0,msg,Image_4,Text_6,Group_1,Group_2);
stage.add(Page_1);
InitLacVietScript();
};
