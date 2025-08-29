folder_Resource ='data/Tap1';

 
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',115,10,422,31,"MẪU CHỮ VIẾT TRONG TRƯỜNG TIỂU HỌC",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',87,35,502,49,"(Theo Quyết định số 31/2012/QĐ-BGD & ĐT ngày 14/6/2012 của Bộ trưởng Bộ Giáo dục và Đào tạo)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',15,87,206,29,"CHỮ CÁI VIẾT THƯỜNG",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',20,221,206,29,"CHỮ CÁI VIẾT HOA",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_1 = CreText('Image_1',191,116,304,137,'','rgba(0,0,0,0)','','','','ID_IMAGE_CHU_THUONG.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_2 = CreText('Image_2',155,257,366,198,'','rgba(0,0,0,0)','','','','ID_IMAGE_CHU_HOA.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Page_1_Backrounnd,Text_1,Text_2,Text_3,Text_4,Image_1,Image_2);
stage.add(Page_1);
InitLacVietScript();
};
