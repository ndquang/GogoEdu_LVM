folder_Resource ='data/tinh_dien_tich_hinh_binh_hanh';
var cntQst = 5;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _index = 1;
var lang = "VN";
 var arrayRes = ["","","",""];
var _bTestAndCreat = false;
var arrayKq = [""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
       var strCh = GetTextFromID("ID_C"+_index);
       var so1 = Random(90)+1;
       var so2 = Random(90)+1;
       var _findChar = indexOf(strCh ,"|",0);
       if(_findChar>=0)
	{
	strCh = replaceStr(strCh ,"|",so1,0,1);
	strCh = replaceStr(strCh ,"|",so2,0,1);
	}
       SetText("","index","Bài "+_index);
        SetText("","_cauhoi",strCh);

       switch(_index)
       {
	case 1:
	{
		arrayKq[0] = so1 *so2;
		SetText("","_d",so1 + "cm");
		SetText("","_h",so2 + "cm");		
		SetText("","_s","S = ?");
		SetText("","_b","");
		break;
	}
	case 2:
	{
		arrayKq[0] = (so1 + so2)*2;
		SetText("","_d",so1 + "m");		
		SetText("","_b",so2  + "m");
		SetText("","_s","P = ?");
		SetText("","_h","");
		break;
	}
	case 3:
	{
		strCh = GetTextFromID("ID_C"+_index);
		var s= so1 *so2;
		strCh = replaceStr(strCh ,"|",s,0,1);
		strCh = replaceStr(strCh ,"|",so1,0,1);
		 SetText("","_cauhoi",strCh);

		arrayKq[0] = so2;	
	
		SetText("","_d",so1 + "dm");				
		SetText("","_s","S = "+s + "dm²");
		SetText("","_h","h=?");
		SetText("","_b","");
		break;
	}

		
	case 4:
	{
		strCh = GetTextFromID("ID_C"+_index);
		var s= so1 *so2;
		strCh = replaceStr(strCh ,"|",s,0,1);
		strCh = replaceStr(strCh ,"|",so1,0,1);
		 SetText("","_cauhoi",strCh);
		arrayKq[0] = so2;			
		SetText("","_h",so1 + "cm");				
		SetText("","_s","S = "+s+"cm²");
		SetText("","_d","?");			
		SetText("","_b","");

		break;
	}
	case 5:
	{
		strCh = GetTextFromID("ID_C"+_index);
		var cv = (so1 + so2)*2;
		strCh = replaceStr(strCh ,"|",cv,0,1);
		strCh = replaceStr(strCh ,"|",so2,0,1);
		 SetText("","_cauhoi",strCh);
		arrayKq[0] = cv/2-so2;

		SetText("","_s","P = "+cv +"cm");
		SetText("","_d",so2+"cm");	
		SetText("","_b","?");
		SetText("","_h","");		
		break;
	}

       }
               
       AllowEditText("","in_0",1);
       SetShowObject("","in_0",1);
       SetText("","in_0","");
       SetFontColor("","in_0","#000000");
         		_score =GetVer();					
		SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msg",0);	
             	InvalidateObj("","");		
	   
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
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		UpdateScore( _score);
	         }
	else{
		SetText("","msg","Không chính xác: "+arrayKq [0]);
		PlaySound("sound_not");		
		_score--;			
		}
	SetText("","score",_score);
	_index++;
                 if(_index>5)
		_index = Random(5)+1;
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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',0,0,598,64,"Hình bình hành",'#0080ff','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,111,569,88,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',436,225,65,28,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',308,231,116,22,"Đáp số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',245,341,128,50,"Submit",'#0080ff','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var index = CreText('index',17,81,89,29,"Bài 1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',544,14,47,47,"2",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','0','0',0,'#ffffff','#ffffff','0','0','#ffffff','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',79,211,198,87,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','17','0',2,'#0080c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _h = CreText('_h',92,232,87,45,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','top',0,'-90.00','1','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _d = CreText('_d',123,304,76,22,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _b = CreText('_b',237,251,76,22,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'-68.55','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _s = CreText('_s',108,234,160,42,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',91,187,37,29,"A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',271,188,37,29,"B",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',232,299,37,29,"C",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',44,293,37,29,"D",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',101,299,37,29,"H",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',114,287,11,11,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','1','10',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',59,169,513,88,"good job",'rgba(0,128,192,1.02)','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',2,'#ffff00','rgba(0,128,192,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Text_9 = CreText('Text_9',5,403,590,39,"Ghi chú: Hình vẽ chỉ mang tính minh họa, không đúng với tỉ lệ thực tế.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,title,_cauhoi,in_0,Text_4,check,index,score,Text_3,_h,_d,_b,_s,Text_1,Text_2,Text_5,Text_6,Text_7,Text_8,msg,Text_9);
stage.add(Page_1);
InitLacVietScript();
};
