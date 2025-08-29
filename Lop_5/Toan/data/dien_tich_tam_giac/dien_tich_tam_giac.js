folder_Resource ='data/dien_tich_tam_giac';
var cntQst = 10;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
 var arrayRes = ["","","",""];
 var arrayImage = [0,0,0,0,0,1,1,0,1,1,1];

var _bTestAndCreat = false;
var arrayKq = ["",""];
var strFinshed ="";
 var ab=1;
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","gr_msg",0);
		InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	for(var i=0;i<=cntQst ;i++)
		SetShowObject("","h"+i,0);

	_index = 1;
	_bTestAndCreat = false;
               /*strFinshed = LoadLesson().SubmitContent;
	if(strFinshed == null)
		strFinshed ="";*/
	SetText("","txtFinish",strFinshed);
}

function  CreateQuestion()
{
     
/*
	if(strFinshed!=null)
	{
            var  aFinish =  strFinshed.split(" ");      
            while(aFinish.includes(trimStr(_index))==true && _index<=cntQst)
	{
	_index++;
	}
	}
*/
	
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

       var strCh = GetTextFromID("ID_C"+_index);       
       SetText("","index","Bài "+_index);
       SetShowObject("","Group_1",0);
        ab=1;
       //arrayRes = strCh.split("|");      
        var lenkq=  Length(arrayRes);         
         if(lenkq > 4)
	 ab=2;
	var preIndex  = _index-1;
          SetShowObject("","h"+preIndex ,0);
          if(arrayImage[_index]==1)	
		   SetShowObject("","h"+_index,1);

	for(var i=0;i<ab;i++)
	{
		 AllowEditText("","in_"+i,1);	
		 AllowEditText("","tt_"+i,1);		
		 SetText("","in_"+i,"");
		 SetText("","tt_"+i,"");
		 SetBorder("","in_"+i,"#000000");
		 SetBorder("","tt_"+i,"#000000");

	}
          		arrayKq[0] = arrayRes[2];
		 SetText("","_cauhoi",arrayRes[0]);
		 SetText("","lg_0",replaceStr(arrayRes[1],"\r\n",""));		
		SetText("","dv_0",arrayRes[3]);				
						           	   
	   if( lenkq > 4)
		{
			arrayKq[1] = arrayRes[5];
			 SetText("","lg_1",replaceStr(arrayRes[4],"\r\n",""));			
			SetText("","dv_1",arrayRes[6]);
			SetShowObject("","Group_1",1);
         			
		}
             _score =GetVer();
	_bTestAndCreat = false;
	SetText("","check","Submit");	
	SetShowObject("","check",1);	
            SetShowObject("","gr_msg",0);
	InvalidateObj("","");

}

function  ChamDiem()
{
	
	var kq = true;
	for(var i=0;i<ab;i++)
	{
		var tt = replaceStr(GetText("","tt_"+i),":","/");
		tt = replaceStr(tt,"x","*");

		if(GetText("","in_"+i)==arrayKq [i])	
		      {		
			SetBorder("","in_"+i,"#00ff00");				
		     }
		else {
			SetBorder("","in_"+i,"#ff0000");
			 kq = false;;
		       }
		 var re= ExecAsThread(tt);	
		/*	
		if(re!=false && typeof re != "undefined")
		{
		 if(re == arrayKq [i])
			{
				SetBorder("","tt_"+i,"#00ff00");
			}
			else
			{
				SetBorder("","tt_"+i,"#ff0000");			
				 kq = false;;
			}
		}
		else SetBorder("","tt_"+i,"#ff0000");	
		*/
		AllowEditText("","in_"+i,0);
		AllowEditText("","tt_"+i,0);
	}

	if(kq==true){					
		_score++;
		SetColorEx("","score"+_cSubmit,"#71dd13");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");	
		SetText( "", "msg", "\r\nBạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#33ff33");
		strFinshed = strFinshed + _index+" ";	
		SetText("","txtFinish",strFinshed);
		UpdateScore( _score);
		//SaveLesson(strFinshed);
	         }
	else       {
		PlaySound("sound_not");		
		_score--;		
		SetFontColor("","msg","#f05c5c");
		if(ab==1)
		SetText("","msg","\r\nKhông chính xác.\r\n" + arrayRes[2] + arrayRes[3]);
		else SetText("","msg","Không chính xác.\r\n Câu a: " + arrayRes[2] + arrayRes[3] + ".\r\n Câu b: " + arrayRes[5] +  arrayRes[6]);
		}

	_index++;	
	_bTestAndCreat= true;					
	SetShowObject("","check",0);	
	SetShowObject("","gr_msg",1);
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
 width: 800,
 height: 620 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,620,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var dv_0 = CreText('dv_0',450,395,58,37,"%",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-2,-8,803,64,"Hình tam giác, diện tích hình tam giác",'#0080c0','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',343,395,85,37,"",'rgba(213,234,255,0.22)','#ffffff','#282828','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','rgba(213,234,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',732,-10,68,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","_cauhoi"),"VN");
  return;
}
 );
var lg_0 = CreText('lg_0',26,344,690,50,"Tỉ số của diện tích trồng hoa hồng và diện tích vườn hoa là:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var index = CreText('index',30,60,62,25,"Bài 1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','1',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',30,266,85,30,"Bài giải",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt_0 = CreText('tt_0',103,395,183,37,"",'rgba(213,234,255,0.22)','#ffffff','#282828','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','rgba(213,234,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',306,395,47,37,"=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_1 = CreText('dv_1',450,506,47,37,"%",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',343,506,85,37,"",'rgba(213,234,255,0.22)','#ffffff','#282828','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','rgba(213,234,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lg_1 = CreText('lg_1',32,446,740,50,"Tỉ số của diện tích trồng hoa hồng và diện tích vườn hoa là:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt_1 = CreText('tt_1',103,506,183,37,"",'rgba(213,234,255,0.22)','#ffffff','#282828','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','rgba(213,234,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var db_1 = CreText('db_1',293,506,47,43,"=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',579,544,175,50,"Submit",'#0080ff','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',11,'0.00','10','0',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',358,64,164,30,"Các bài bạn đã làm:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txtFinish = CreText('txtFinish',526,64,251,30,"",'rgba(0,0,0,0)','#c0c0c0','#c0c0c0','#ffffff','',18,'Arial','Italic','left','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#7f7f7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var h5 = CreText('h5',453,155,200,147,'','rgba(0,0,0,0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var h6 = CreText('h6',469,150,171,168,'','rgba(0,0,0,0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var h8 = CreText('h8',465,152,199,151,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var h9 = CreText('h9',475,169,179,112,'','rgba(0,0,0,0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var h10 = CreText('h10',453,146,221,151,'','rgba(0,0,0,0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Group_0 = new Kinetic.Group({name:'Group_0',x:0,y:0,width:645,height:92});
Group_0.add(dv_0,in_0,lg_0,tt_0,Text_5);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:642,height:107});
Group_1.add(dv_1,in_1,lg_1,tt_1,db_1);
var msg = CreText('msg',205,251,373,135,"",'rgba(230,230,250,0.89)','#ccffff','#282828','#ffffff','',20,'Arial','Normal','center','top',11,'0.00','10','0',1,'#0080ff','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',16,82,782,98,"Theo kế hoạch năm vừa qua thôn Hò\r\n     a) Đến hết tháng 9 thôn Hòa An đã thực hiện được bao nhiê\r\n     b) Đến hết năm thôn Hòa An đã thực hiện vượt mức kế hoạc",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var next = CreText('next',343,345,100,35,"Câu tiếp",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
  return;
}
 );
var Text_4 = CreText('Text_4',224,223,336,26,"https://gogoedu.vn",'#0080ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr_msg = new Kinetic.Group({name:'gr_msg',x:0,y:0,width:377,height:167});
gr_msg.add(Text_4,msg,next);
Page_1.add(Page_1_Backrounnd,dv_0,Text_1,in_0,sound,lg_0,index,Text_2,tt_0,Text_5,dv_1,in_1,lg_1,tt_1,db_1,check,Text_3,txtFinish,h5,h6,h8,h9,h10,Group_0,Group_1,msg,_cauhoi,next,Text_4,gr_msg);
stage.add(Page_1);
InitLacVietScript();
};
