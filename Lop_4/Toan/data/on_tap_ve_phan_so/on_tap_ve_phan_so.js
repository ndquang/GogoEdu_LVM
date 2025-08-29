folder_Resource ='data/on_tap_ve_phan_so';
var _score = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = [""];
var arayResult=[""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	_index =0;
	_bTestAndCreat = false;
	SetText("","score",_score);
	
	var strResult = LoadLesson().SubmitContent;
	if(typeof strResult  !== 'undefined')
	{
		arayResult = strResult.split(",");
	}
	else
         		arayResult = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0".split(",");

	
}

function  CreateQuestion()
{
          var index = 0;
          if(_index>=20)
	_index =0;
          index  = arayResult.indexOf("0",_index);
          if(index ==-1)
	{
		SetText("","msg","Bạn đã hoàn thành bài học này.");
		  SetShowObject("","msg",1);	
      		  InvalidateObj("","");		
		return;	
	}	
	_index = index+1;
        var strCh = GetTextFromID("ID_C"+_index);

        arrayKq= strCh.split("|");      
  
       SetText("","index","Bài "+_index);
       SetText("","_cauhoi",arrayKq[0]);
       SetText("","don_vi",arrayKq[2]);
               
       AllowEditText("","in_0",1);
       SetShowObject("","in_0",1);
       SetText("","in_0","");
       SetFontColor("","in_0","#000000");				
        SetText("","check","Submit");			
       _bTestAndCreat = false;
         SetShowObject("","msg",0);	
        InvalidateObj("","");		
	   
}

function  ChamDiem()
{	
	var kq = true;
			if(GetText("","in_0")==arrayKq [1])		
			SetFontColor("","in_0","#00ff00");	
		else {
			SetFontColor("","in_i","#ff0000");
			 kq = false;;
		       }
		AllowEditText("","in_0",0);
	

	if(kq==true){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");				
		UpdateScore( _score);
		arayResult[_index-1] = 1;
		SaveLesson(arayResult.toString());
	         }
	         else{
		SetText("","msg","Không chính xác: "+arrayKq [1]);
		PlaySound("sound_not");				
		}
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
function Page_1()
{
InitScore();
CreateQuestion();
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
 width: 600,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var don_vi = CreText('don_vi',304,226,136,44,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',0,0,599,64,"Các bài toán về ôn tập phân số",'#00aaaa','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00aaaa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,97,569,113,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',214,230,87,35,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#00aaaa','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',86,226,116,44,"Đáp số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',439,226,118,44,"Submit",'#008080','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#7f7f7f','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var index = CreText('index',22,68,89,29,"Bài 1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',0,330,600,71,"good job",'rgba(0,170,170,1.02)','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold Italic','center','middle',0,'0.00','0','0',1,'#000000','rgba(0,170,170,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Image_1 = CreText('Image_1',534,0,65,65,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","_cauhoi"),"VN");
  return;
}
 );
var Text_1 = CreText('Text_1',14,279,578,28,"Nếu kết quả là phân số thì các em ghi đấu / Ví dụ: 2/5 vào ô đáp số",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',540,344,47,47,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,don_vi,title,_cauhoi,in_0,Text_4,check,index,msg,Image_1,Text_1,score);
stage.add(Page_1);
InitLacVietScript();
};
