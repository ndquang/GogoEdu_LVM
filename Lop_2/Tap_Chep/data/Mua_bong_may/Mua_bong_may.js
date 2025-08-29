folder_Resource ='data/Mua_bong_may';
var doan_van="";
var cau_van="";
var Startdot= 0;
var Enddot= 0;
var myString="";
var laplai=2;
var s_title = "";
var s_content = "";
var dem_doc=0;
var m_delay=1000;
var m_seconds=0;
var bStop = false;
function KhoiTao(){
	myString= s_title + s_content;
	dem_doc = 0;
	Startdot= 0;
 	Enddot= -1;
	m_seconds=0;
   	SetShowObject("","ketqua",0);
	SetMoveView("","ketqua",1);
	GetVer();
}
function  OnEndSpeak(){
	if(bStop)
	return;
     if(Enddot==-1){
	SetText("","content",s_content);	
      InvalidateObj("","");
      return;
	}
     if(dem_doc>laplai)
	{
               Startdot=Enddot+1;
	   dem_doc=0;
	}
     SetTimerPage(1000);
}

function DocViet(){
if(bStop)
	return;
if(dem_doc==0)
{
		Enddot = indexOf(myString,"\n",Startdot);
		var i1 = indexOf(myString,".",Startdot);
		if(i1>0)
		Enddot= min(Enddot ,i1);
		var i2 = indexOf(myString,"?",Startdot);
		if(i2>0)
		Enddot= min(Enddot,i2);

		if(Enddot==-1)
		{
		 cau_van=s_title + s_content;
		KillTimerPage();
		 Speak("Hết bài. Nghe và dò lại. "+cau_van,"VN");
		SetText("","xtimer","");
		SetText("","msg","");
		SetText("","content",s_content);
		//SetShowObject("","txtDiem",1);
		InvalidateObj("","");
		return;
		}
		cau_van= subString(myString,Startdot, Enddot-Startdot+1);
		cau_van= trimStr(cau_van);
		cau_van= trimStr(cau_van," ");
		cau_van= trimStr(cau_van,"\r");
		cau_van= trimStr(cau_van,"\n");
		if(Startdot==0) SetText("","content",""); //tieu de
		else
		SetText("","content",cau_van);
}
dem_doc++;
if(wordCountStr(cau_van)>0 && cau_van!="")
{
m_delay = wordCountStr(cau_van)*1500;	
Speak(cau_van,"VN","{pitch:1,rate: 0.8, volume: 1,onstart: OnStartSpeak, onend: OnEndSpeak}");
m_seconds = ceil(m_delay/1000);
SetText("","xtimer",m_seconds);
SetText("","msg","Đang đọc lần "+dem_doc);
}
else 
{
Startdot=Enddot+1;
dem_doc=0;
Delay("DocViet()",1);
}
InvalidateObj("","");
}
function  OnStartSpeak(){
	KillTimerPage();
}
function Page_1()
{
InvalidateObj("","");
s_title = GetText("","title");
s_content = GetText("","content");
AllowEditText("","txt_input",1);
AllowEditText("","txt_inputTitle",1);
KhoiTao();
  return;
}
function Page_1_OnTimer()
{
if(bStop )
return;
m_seconds--;
SetText("","xtimer",m_seconds);
if(m_seconds<0)
{
   KillTimerPage();
   DocViet();
}
InvalidateObj("","");
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
 width: 550,
 height: 430 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,550,430,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var content = CreText('content',11,54,270,321,"Có cơn mưa nào lạ thế \r\nThoáng mưa rồi tạnh ngay \r\nEm về nhà hỏi mẹ \r\nMẹ cười! Mưa bóng mây \r\n\r\nMẹ ơi! cơn mưa rơi nho nhỏ\r\nkhông làm ướt tóc ai\r\nTay em che trang vở\r\nMưa đừng ướt chữ em\r\n\r\nMưa ơi! mưa rơi trên sân nhỏ \r\nNhư em đang đùa vui\r\nMưa cũng làm nũng mẹ\r\nVừa khóc xong đã cười\r\nMưa cũng làm nũng mẹ\r\nVừa khóc xong đã cười.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var Text_3 = CreText('Text_3',264,394,144,24,"Nghe viết chính tả",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bStop = false;
KhoiTao();
DocViet();
  return;
}
 );
var msg = CreText('msg',400,1,97,24,"",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',12,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xtimer = CreText('xtimer',369,1,26,24,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',59,26,175,26,"Mưa bóng mây\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',146,394,106,24,"Nghe cả bài",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bStop = true;
KhoiTao();
SetText("","xtimer","");
SetText("","msg","");
SetText("","content",s_content);
KillTimerPage();
Speak(myString,"VN");
InvalidateObj("","");
  return;
}
 );
var txt_input = CreText('txt_input',275,57,266,321,"",'#004040','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#c0c0c0','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var txt_inputTitle = CreText('txt_inputTitle',320,26,175,25,"",'#004040','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txtDiem = CreText('txtDiem',421,394,69,24,"Điểm",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
txtDiem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var allText =  s_title +  s_content;
var countin = wordCountStr(allText);
var inputText = GetText("","txt_inputTitle") + " "+ GetText("","txt_input");
var countwrite = wordCountStr(inputText );
if(countwrite<countin)
{
	SetText("","ww_title","Bạn viết chưa hết bài");
	SetText("","wrong_word","Bạn viết chưa hết bài. Bạn kiểm tra lại.");
	SetText("","m_diem","");
}
else if(countwrite==countin)
{
	  var wrong_word="";
	  var diem = 10;
	  var countError=0;
	  for(var w=1;w<=countin;w++)
	{
           var wordorg = wordsStr(allText,w,1);
		   var worddes = wordsStr(inputText ,w,1);	
			if(worddes!=wordorg)
			{
			 wrong_word = wrong_word + wordorg + " # "+ worddes+" | ";
			 diem--;
			 countError++;
			}
	}	             
	 wrong_word = rtrimStr(wrong_word," ");	
	 wrong_word = rtrimStr(wrong_word,"|");	
	 wrong_word = rtrimStr(wrong_word," ");	
	 if(diem<0)
		 diem=0;
	 if(diem==10)
	 {
		 SetText("","ww_title","Bạn viết tốt lắm");
		 SetText("","wrong_word","Không sai chữ nào.");
	 }
		 else{
	 SetText("","ww_title","Bạn viết sai " + countError + " lỗi");
	 SetText("","wrong_word",wrong_word);
		 }
	 SetText("","m_diem",diem);
	 UpdateScore(diem);
}
else
{
	SetText("","ww_title","Bạn viết dư quá nhiều từ");
	SetText("","wrong_word","Bạn viết dư quá nhiều từ");
	SetText("","m_diem","");
}
SetShowObject("","ketqua",1);
  return;
}
 );
var wrong_word = CreText('wrong_word',133,157,306,133,"",'#ffffb0','#ffffff','#ff0000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#ffffff','#ffffb0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ww_title = CreText('ww_title',133,139,306,22,"Bạn sai các từ sau:",'#ffad5b','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btClose = CreText('btClose',402,139,37,22,"X",'#c0c0c0','#ffffff','#282828','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#666666','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btClose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","ketqua",0);
  return;
}
 );
var m_diem = CreText('m_diem',350,229,87,61,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ketqua = new Kinetic.Group({name:'ketqua',x:0,y:0,width:310,height:155});
ketqua.add(wrong_word,ww_title,m_diem,btClose);
Page_1.add(Page_1_Backrounnd,content,Text_3,msg,xtimer,title,Text_1,txt_input,txt_inputTitle,txtDiem,ketqua);
stage.add(Page_1);
InitLacVietScript();
};
