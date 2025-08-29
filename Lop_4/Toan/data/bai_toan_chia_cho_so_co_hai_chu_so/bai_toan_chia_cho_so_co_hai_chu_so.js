folder_Resource ='/data/bai_toan_chia_cho_so_co_hai_chu_so';
var cntQst = 25;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _index = 1;
var lang = "VN";
 var arrayRes = ["","","",""];
var _bTestAndCreat = false;
var arrayKq = ["",""];
var strFinshed ="";
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	_index = 1;
	_bTestAndCreat = false;
    strFinshed = LoadLesson().SubmitContent;
	if(strFinshed == null)
		strFinshed ="";
	SetText("","txtFinish",strFinshed);
}

function  CreateQuestion()
{     
	if(strFinshed!=null)
	{
            var  aFinish =  strFinshed.split(" ");      
            while(aFinish.includes(trimStr(_index))==true && _index<=cntQst)
	{
	_index++;
	}
	}
	
 if(_index==cntQst+1)
	{			
		SetText("","msg","Bạn đã hoàn thành bài học này, "+ _score + " điểm.");
		SetShowObject("","msg",1);
		InitScore();
		InvalidateObj("","");
		return;
	}

       var strCh = GetTextFromID("ID_C"+_index);
       SetShowObject("","in_"+1,0);
       SetText("","index","Bài "+_index);
	
      arrayRes = strCh .split("|");      
       arrayKq = arrayRes[2].split(" ");
        var lenkq=  Length(arrayKq);
	for(var i=0;i<lenkq;i++)
	{
		 AllowEditText("","in_"+i,1);
		SetShowObject("","in_"+i,1);
		 SetText("","in_"+i,"");
		 SetFontColor("","in_"+i,"#000000");
	}
             if( Length(arrayRes)>3)
	   {
		_score =GetVer();
		 var ch = arrayRes[0];
		 SetText("","_cauhoi",ch);
		var dv = arrayRes[3];
		 SetText("","_dv",dv);
		 _textSpeak = ch;			
		SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msg",0);	
             	InvalidateObj("","");		
	   }	
}

function  ChamDiem()
{
	
	var kq = true;
	var lenkq=  Length(arrayKq);
	for(var i=0;i<lenkq;i++)
	{
		if(GetText("","in_"+i)==arrayKq [i])			
			SetFontColor("","in_"+i,"#00ff00");	
		else {
			SetFontColor("","in_"+i,"#ff0000");
			 kq = false;;
		       }
		AllowEditText("","in_"+i,0);
	}

	if(kq==true){					
		_score++;
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");	
		strFinshed = strFinshed + _index+" ";	
		SetText("","txtFinish",strFinshed);
		UpdateScore( _score);
		SaveLesson(strFinshed);
	         }
	else{
		PlaySound("sound_not");		
		_score--;			
		}

	_index++;	
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetText("","msg",arrayRes[1]);
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
 height: 500 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,500,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var _dv = CreText('_dv',340,216,66,25,"đơn vị",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,0,598,64,"Bài toán: Chia cho số có hai chữ số",'#0080ff','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,111,572,85,"Một người thợ trong 11 ngày đầu làm được 132 cái khóa, trong 12 ngày tiếp làm được 213 cái khóa. Hỏi trung bình mỗi ngày người đó làm được bao nhiêu cái khóa?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',264,213,65,28,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txtFinish = CreText('txtFinish',76,49,459,26,"",'#ffffff','#c0c0c0','#0080ff','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',7,293,589,201,"",'rgba(255,255,224,1.02)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','10','0',1,'#ffffff','rgba(255,255,224,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.50);
var sound = CreText('sound',536,-4,68,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(_textSpeak,lang);
  return;
}
 );
var Text_4 = CreText('Text_4',136,219,116,22,"Đáp số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',244,262,128,50,"Submit",'#0080ff','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var in_1 = CreText('in_1',411,212,69,28,"số dư",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var index = CreText('index',17,81,89,29,"Bài 1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,_dv,Text_1,_cauhoi,in_0,txtFinish,msg,sound,Text_4,check,in_1,index);
stage.add(Page_1);
InitLacVietScript();
};
