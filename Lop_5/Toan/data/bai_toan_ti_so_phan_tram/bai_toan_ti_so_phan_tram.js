folder_Resource ='data/bai_toan_ti_so_phan_tram';
var cntQst = 10;
var _score = 0;
var _cSubmit = 0;
var _index = 1;
 var arrayRes = ["","","",""];
var _bTestAndCreat = false;
var arrayKq = ["",""];
var strFinshed ="";
 var ab=1;
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	SetMoveView("","msg",1);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
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

	for(var i=0;i<ab;i++)
	{
		 AllowEditText("","in_"+i,1);	
		 AllowEditText("","tt_"+i,1);		
		 SetText("","in_"+i,"");
		 SetText("","tt_"+i,"");
		 SetFontColor("","in_"+i,"#ffffff");
		 SetFontColor("","tt_"+i,"#ffffff");

	}
          		arrayKq[0] = arrayRes[2];
		 SetText("","_cauhoi",arrayRes[0]);
		 SetText("","lg_0",replaceStr(arrayRes[1],"\r\n",""));		
		SetText("","_dv",arrayRes[3]);				
		SetText("","check","Submit");			
		
           	   
	   if( lenkq > 4)
		{
			arrayKq[1] = arrayRes[5];
			 SetText("","lg_1",replaceStr(arrayRes[4],"\r\n",""));			
			SetText("","dv_1",arrayRes[6]);
			SetShowObject("","Group_1",1);
         			
		}
             _score =GetVer();
	_bTestAndCreat = false;
            SetShowObject("","msg",0);
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
			SetFontColor("","in_"+i,"#00ff00");				
		     }
		else {
			SetFontColor("","in_"+i,"#ff0000");
			 kq = false;;
		       }
		 if(ExecAsThread(tt) == arrayKq [i])
			{
				SetFontColor("","tt_"+i,"#00ff00");
			}
			else
			{
				SetFontColor("","tt_"+i,"#ff0000");
				 kq = false;;
			}
		AllowEditText("","in_"+i,0);
		AllowEditText("","tt_"+i,0);
	}

	if(kq==true){					
		_score++;
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#33ff33");
		strFinshed = strFinshed + _index+" ";	
		SetText("","txtFinish",strFinshed);
		UpdateScore( _score);
		//SaveLesson(strFinshed);
	         }
	else       {
		PlaySound("sound_not");		
		_score--;		
		SetFontColor("","msg","#ff3333");
		if(ab==1)
		SetText("","msg","Không chính xác.\r\n" + arrayRes[2] + arrayRes[3]);
		else SetText("","msg","Không chính xác.\r\n Câu a: " + arrayRes[2] + arrayRes[3] + ".\r\n Câu b: " + arrayRes[5] +  arrayRes[6]);
		}

	_index++;	
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
 width: 680,
 height: 680 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,680,680,'','#008040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008040','0','0','0','','0','0','0','0',0,0,'');
var dv_0 = CreText('dv_0',450,355,47,37,"%",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,0,682,64,"Các bài toán về tỉ lệ phần trăm",'#006633','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#006633','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',7,68,667,195,"Theo kế hoạch năm vừa qua thôn Hòa An phải trồng 20ha ngô, đến hết tháng 9 thôn đã trồng được 18ha ngô và hết năm thôn đã trồng được 23,5ha Ngô. Hỏi:\r\n     a) Đến hết tháng 9 thôn Hòa An đã thực hiện được bao nhiêu phần trăm kế hoạch của cả năm.\r\n     b) Đến hết năm thôn Hòa An đã thực hiện vượt mức kế hoạch cả năm là bao nhiêu phần trăm?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',343,355,85,37,"",'rgba(255,255,255,0.22)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',609,1,68,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","_cauhoi"),"VN");
  return;
}
 );
var lg_0 = CreText('lg_0',28,287,641,50,"Tỉ số của diện tích trồng hoa hồng và diện tích vườn hoa là:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var index = CreText('index',313,51,62,25,"Bài 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',296,256,85,30,"Bài giải",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt_0 = CreText('tt_0',103,355,183,37,"",'rgba(255,255,255,0.22)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',306,355,47,37,"=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv_1 = CreText('dv_1',450,466,47,37,"%",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',343,466,85,37,"",'rgba(255,255,255,0.22)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lg_1 = CreText('lg_1',32,406,638,50,"Tỉ số của diện tích trồng hoa hồng và diện tích vườn hoa là:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt_1 = CreText('tt_1',103,466,183,37,"",'rgba(255,255,255,0.22)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.22)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var db_1 = CreText('db_1',293,466,47,43,"=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',46,550,596,121,"",'rgba(0,0,0,0)','#fffe99','#282828','#ffffff','',20,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.50);
var check = CreText('check',252,529,175,50,"Submit",'#005b2e','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#ffffff','#005b2e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',81,644,164,30,"Các bài bạn đã làm:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txtFinish = CreText('txtFinish',249,644,251,30,"",'rgba(0,0,0,0)','#c0c0c0','#ffffff','#ffffff','',18,'Arial','Italic','left','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#00b95c','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:642,height:107});
Group_1.add(dv_1,in_1,lg_1,tt_1,db_1);
var Group_0 = new Kinetic.Group({name:'Group_0',x:0,y:0,width:645,height:109});
Group_0.add(dv_0,in_0,lg_0,tt_0,Text_5);
Page_1.add(Page_1_Backrounnd,Text_1,_cauhoi,sound,index,Text_2,msg,check,Text_3,txtFinish,Group_1,Group_0);
stage.add(Page_1);
InitLacVietScript();
};
