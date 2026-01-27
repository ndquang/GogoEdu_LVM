folder_Resource ='/data/viet_doc_phan_so';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["",""];


function  CreateQuestion()
{
       var so1 = Random(9)+2;
       var so0 = Random(so1)+1; 
      arrayKq[0] = so0;	
      arrayKq[1] = so1;	
     for(var i =1; i<=10;i++)
	{
		PosX("","c"+i,0 );
		PosY("","c"+i,0);	
		if(i<=so1)
			SetShowObject("","c"+i,1);	
		else
			SetShowObject("","c"+i,0);	
	}
       var radian = 360/so1;
        var start = 0;
        var end = radian;

          for(i =1; i<=so1;i++)
	{
	PosX("","c"+i,start );	
	PosY("","c"+i,end);	
	start = end;
    	end = end + radian;
	if(i<=so0)
		SetColorEx("","c"+i,"#0080ff")	;
	else SetColorEx("","c"+i,"#ffffff")	;
	}
   
       SetText("","in_0","");
      SetText("","in_1","");
       SetFontColor("","in_0","#000000");
      SetFontColor("","in_1","#000000");		
SetText("","check","OK");			
SetShowObject("","msg",0);	
  AllowEditText("","in_0",1);//    	InvalidateObj("","");	
_bTestAndCreat = false;
         	
	   
}

function  ChamDiem()
{	
	if(_bTestAndCreat)
{
CreateQuestion();
return;
}
if(GetText("","in_0")=="" || GetText("","in_1")=="")
{
	SetText("", "msgtext", "🔔 Bạn chưa nhập kết quả.");
	SetText( "", "kq_0","");	
	SetText( "", "kq_1","");	
	SetShowObject("","msg",1);
	return;
}

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
	}

	if(kq==true){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msgtext", "✔️ Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		UpdateScore( _score);
	         }
	else{
		SetText("","msgtext","❌ Sai, kết quả là:");
		PlaySound("sound_not");		
		_score--;			
		}
	SetText("","score",_score);
	SetText( "", "kq_0",arrayKq[0]);	
	SetText( "", "kq_1", arrayKq[1]);	
	_index++;
                 if(_index>5)
		_index = Random(5)+1;
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetShowObject("","msg",1);
	InvalidateObj("","");
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if ( typeof _score != "undefined")
	{
		_score = _score;
	}
	SetDigitEditText("","in_1","number");
	SetDigitEditText("","in_0","number");
	AllowEditText("","in_1",1);      
	 AllowEditText("","in_0",1);
	_index = 1;
	SetShowObject("","msg",0);
	CreateQuestion();
}

function Page_1_OnKeyDown()
{
var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","in_1",textarea.value);	 
		}
		ChamDiem();
	}
  return;
}
function Page_1()
{
GetVer("callBackGetVer");
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var c1 = CreText('c1',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',266,121,68,76,"",'rgba(244,244,244,0.89)','#ebebeb','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c6e2ff','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',0,0,598,58,"  Viết rồi đọc phân số đã tô màu trong hình dưới đây",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',266,121,68,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',22,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',235,226,116,39,"Submit",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#7f7f7f','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
}
 );
var score = CreText('score',546,11,44,44,"2",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',24,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','#ffffff','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',266,158,68,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',22,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',8,65,184,32,"Viết phân số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',178,56,52,47,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(arrayKq[0]+ " phần "+ arrayKq[1],"VN")
  return;
}
 );
var msgtext = CreText('msgtext',83,265,394,69,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',11,'0.00','14','0',0,'rgba(0,0,0,0)','rgba(192,192,192,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msgtext.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
InvalidateObj("","");
  return;
}
 );
var kq_0 = CreText('kq_0',423,276,31,24,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_1 = CreText('kq_1',423,299,31,24,"1",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','1','0',2,'#0000ff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c2 = CreText('c2',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c3 = CreText('c3',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c4 = CreText('c4',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c5 = CreText('c5',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c6 = CreText('c6',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c7 = CreText('c7',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c8 = CreText('c8',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c9 = CreText('c9',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c10 = CreText('c10',103,112,102,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#ff6820','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:398,height:73});
msg.add(msgtext,kq_0,kq_1);
Page_1.add(Page_1_Backrounnd,c1,Text_3,title,in_0,check,score,in_1,Text_2,sound,c2,c3,c4,c5,c6,c7,c8,c9,c10,msg);
stage.add(Page_1);
InitLacVietScript();
};
