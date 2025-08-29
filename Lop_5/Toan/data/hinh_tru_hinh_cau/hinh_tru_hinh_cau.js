folder_Resource ='data/hinh_tru_hinh_cau';
var cntQst = 10;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["",""];
var strFinshed ="";
 var cntQue=1;
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","gr_msg",0);
	SetMoveView("","gr_msg",1);	
	_index = 1;
	_bTestAndCreat = false;
	InvalidateObj("","");
}
function  ChonAnh()
{
	for(var i=0;i<2;i++)
	{
		SetBorder("","i"+i,"#ffffff");		
	}
	SetBorder("","","#00ff00");
	arrayKq[1] = rightStr(GetName(""),1);
	SetShowObject("","check",1);	
	PlaySound("CLICK");
	InvalidateObj("","");
}
function  CreateQuestion()
{
	
 if(_index>=cntQst+1)
	{			
		if(_score ==cntQst )
		{
		SetText("","msg","Bạn đã hoàn thành bài học này, "+ _score + " điểm.");
		SetShowObject("","msg",1);				
		}
		else
		{
			InitScore();
			CreateQuestion();
		}
		
		InvalidateObj("","");
		return;
	}

       var index = Random(2);
       var  ct = Random(5);
        var leftright = Random(2);
	arrayKq[0]=leftright;
	arrayKq[1]  ="";
       if(index == 0 )
	{
       	SetText("","ch","Vật nào sau đây có dạng hình cầu?");
	SetColorEx("","i"+leftright,"#","C"+ct);
		
	}
       else 
	{
		SetText("","ch","Vật nào sau đây có dạng hình trụ?");
		SetColorEx("","i"+leftright,"#","T"+ct);
	}
       if(leftright==0)
	SetColorEx("","i"+1,"#","K"+Random(5));
        else SetColorEx("","i"+0,"#","K"+Random(5));
        
	SetBorder("","i0","#ffffff");	
	SetBorder("","i1","#ffffff");	
             _score =GetVer();
	_bTestAndCreat = false;
	SetText("","check","Submit");	
	SetShowObject("","check",0);	
            SetShowObject("","gr_msg",0);
	InvalidateObj("","");

}

function  ChamDiem()
{
	var strResult= "";
	var kq = true;
			if(arrayKq [0]==arrayKq [1])	
		      {		
			SetBorder("","i"+arrayKq [0],"#00ff00");				
		     }
		else {
			SetBorder("","i"+arrayKq [1],"#ff0000");
			 kq = false;
		       }

	if(kq==true){					
		_score++;
		SetColorEx("","score"+_cSubmit,"#71dd13");
		SetText("","score",_score);
		PlaySound("sound_good");	
		SetText( "", "msg", "\r\nBạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#33ff33");
		
		UpdateScore( _score);
		PlaySound("GOOD");
		         }
	else       {
		PlaySound("sound_not");		
		_score--;		
		SetFontColor("","msg","#f05c5c");
		strResult= trimStr(strResult,"\r\n");
		SetText("","msg","\r\nKhông chính xác.\r\n" +strResult);
		PlaySound("NOTGOOD");
		}
	SetShowObject("","check",0);	
	_index++;	
	_bTestAndCreat= true;					
	SetShowObject("","check",0);	
	SetText( "", "next", "Câu " + _index);
	SetShowObject("","gr_msg",1);
	InvalidateObj("","");
}
function Page_1()
{
InitScore();
CreateQuestion();
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
 width: 600,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var i0 = CreText('i0',77,99,180,180,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'#80ff00','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
i0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonAnh();
  return;
}
 );
var i1 = CreText('i1',347,97,180,180,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'#80ff00','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
i1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonAnh();
  return;
}
 );
var ch = CreText('ch',0,1,599,54,"Vật nào sau đây có dạng hình cầu",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',141,185,373,135,"",'#ffffff','#ccffff','#282828','#ffffff','',20,'Arial','Normal','center','top',11,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var next = CreText('next',260,273,138,41,"Câu tiếp",'#80ff00','#0080ff','#000000','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',1,'#c0c0c0','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
  return;
}
 );
var Text_4 = CreText('Text_4',160,161,336,26,"https://gogoedu.vn",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',549,5,51,48,"0",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',225,324,171,47,"Submit",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',11,'0.00','10','0',1,'#c0c0c0','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var gr_msg = new Kinetic.Group({name:'gr_msg',x:0,y:0,width:377,height:163});
gr_msg.add(msg,Text_4,next);
Page_1.add(Page_1_Backrounnd,i0,i1,ch,score,check,gr_msg);
stage.add(Page_1);
InitLacVietScript();
};
