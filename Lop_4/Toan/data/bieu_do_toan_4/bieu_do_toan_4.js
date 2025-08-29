folder_Resource ='/data/bieu_do_toan_4';

var objToSave = {_input0:"", _input1:"",_input2:"",_input3:"",_input4:"",_input5:"",_input6:"",_input7:"",_input8:"",_input9:""};
function GetResult()
{
    var strAllObjectJson = {};
    for ( x in objToSave) {        
                   strAllObjectJson[x] = GetText("",x);
    }     
    return JSON.stringify( strAllObjectJson );
}

function Page_1()
{
 
    var myJSON = LoadLesson();
   var allowEdit = true;  
   if(myJSON !="" )
{
          var data = JSON.parse(myJSON.SubmitContent);       
        for (x in data) 
            SetText("", x, data[x]);   
  if (myJSON.Status != 0){
      allowEdit  = false;		
      SetShowObject("","btSend",0);
      SetShowObject("","btSave",0);
       if (myJSON.Status == 1)
      SetText("","thong_bao","Bài tập này bạn đã gởi đến giáo viên của bạn.");
       else if (myJSON.Status == 2)
           SetText("","thong_bao","Kết quả: "+GetVer());
    }
else   SetText("","thong_bao","");
  }
else  SetText("","thong_bao","Để làm bài học này bạn phải đăng nhập.");

 for ( x in objToSave) 
        AllowEditText("", x, allowEdit);
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var thong_bao = CreText('thong_bao',1,386,797,63,"Bài tập này bạn đã gởi đến giáo viên của bạn.",'#388e8e','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#7f7f7f','#388e8e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_1 = CreText('Image_1',29,111,326,262,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',2,'#000000','','2','2','','0','0','4','0',0,0, '#808080');
var Text_1 = CreText('Text_1',11,7,671,42,"1. Dựa vào biểu đồ dưới đây hãy viết chữ hoặc số thích hợp vào chỗ chấm:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',69,53,289,34,"CÁC CON CỦA 5 GIA ĐÌNH",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',373,97,421,66,"a) Có          gia đình chỉ có một con, đó là các gia\r\n    đình:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_8 = CreText('Text_8',373,173,431,48,"b) Gia đình                               có 2 con gái \r\n    và gia đình                           có 2 con trai",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_4 = CreText('Text_4',373,234,434,18,"c) Gia đình cô Hồng có       con trai và       con gái",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var cau_d = CreText('cau_d',373,269,347,63,"d) Những gia đình có 1 con gái là :",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var Text_6 = CreText('Text_6',373,324,423,65,"e) Cả năm gia đình có        người con, trong đó có\r\n    con trai và      con gái",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var _input0 = CreText('_input0',419,97,32,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input1 = CreText('_input1',437,118,319,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input2 = CreText('_input2',466,170,132,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input3 = CreText('_input3',477,192,119,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input4 = CreText('_input4',546,234,32,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input5 = CreText('_input5',658,234,27,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input6 = CreText('_input6',394,293,391,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input8 = CreText('_input8',756,323,29,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input9 = CreText('_input9',471,345,28,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input7 = CreText('_input7',540,323,33,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSend = CreText('btSend',671,397,116,44,"Gửi GV",'#e6e6fa','#ffffff','#0080ff','#0080ff','',18,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#64b1ff','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSend.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(SubmitLesson(GetResult())==false)
SetText("","thong_bao","Bạn chưu đăng nhập");
else SetText("","thong_bao","Bạn đã giử bài");
  return;
}
 );
var btSave = CreText('btSave',540,397,120,44,"Lưu bài làm",'#e6e6fa','#ffffff','#0080ff','#0080ff','',18,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#64b1ff','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSave.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(SaveLesson(GetResult())==false)
SetText("","thong_bao","Bạn chưa đăng nhập");
else
SetText("","thong_bao","Bạn đã lưu bài học");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,thong_bao,Image_1,Text_1,Text_2,Text_3,Text_8,Text_4,cau_d,Text_6,_input0,_input1,_input2,_input3,_input4,_input5,_input6,_input8,_input9,_input7,btSend,btSave);
stage.add(Page_1);
InitLacVietScript();
};
