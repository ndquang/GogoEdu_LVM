folder_Resource ='/data/Pronounce';
var _score = 0;
var _index = 0;
var _bTestAndCreat = false;
var strFinshed ="";
var cntQst =0;
var s_Select = "";
var chon_da = "";
let curObject = null;
var aMsg = ["Good job!","Well done!","Excellent work!","Great effort!","Fantastic!","You're doing great!","Keep up the good work!","I'm proud of you!","That's the way to do it!","You've nailed it!"];
window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if(_note != null)
	{
	strFinshed = _note;
	_score = _score
	SetText("","txtFinish",strFinshed);
	InvalidateObj("","");
	}
	CreateQuestion();
}
function  InitScore()
{	
	GetVer("callBackGetVer");	
	_index = 0;
	_bTestAndCreat = false;
	cntQst = length(questions);
	InvalidateObj("","");
}

function   splitWords( text) {
  
    text = text.replace(/[,.!?]/g, '');
    let words = text.split(/\s+/);
    return words;

}

function  ClickWord(){
	for(var k=1;k<5;k++)
	{
		SetColorEx("","w_"+k,"#ffffff");
	}
	SetColorEx("","","#fff5eb ");
	var sTraLoi = GetText("","");
	s_Select = sTraLoi;
	chon_da = rightStr(GetName(""),1);
	SetShowObject("","bt_Create",1);
	SpeakEN("","");
	InvalidateObj("","");
}

function  CreateQuestion()
{
	
    if(strFinshed!=null)
	{
        var  aFinish =  splitWords(strFinshed);
		var indexPlus = _index+1;
        while(aFinish.includes(trimStr(indexPlus))==true && indexPlus<=cntQst)
		indexPlus++;
	}

 if(indexPlus>cntQst)
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
	_index = indexPlus-1;
    curObject = questions[_index];
	SetText("","help",curObject.que);
	for(var i= 1; i< 5;i++)
	{
		SetText("","w_"+i,curObject.opt[i-1]);
		SetColorEx("","w_"+i,"#ffffff");
	}
	s_Select = "";
	chon_da ="";
	_bTestAndCreat = false;
	SetText("","msg","");
	SetText( "", "bt_Create", "Submit");
	SetShowObject("","bt_Create",0);
	var _cau = _index+1;
	SetText("","cau", _cau + ".");
	SetText("","w_5",curObject.exp);
	SetShowObject("","w_5",0);
	InvalidateObj("","");;
}
function  ChamDiem()
{
	if(s_Select == "")
	{
		return;
	}
		if( chon_da==curObject.ans)
        {					
		_score++;
		PlaySound("sound_good");
		var _rep = _index+1;
		strFinshed = strFinshed + _rep+" ";	
		SetText("","txtFinish",strFinshed);
		SetColorEx("","w_"+chon_da,"#d3f091");
		var txtMsg = aMsg[Random(10)];
		UpdateScore(_score,strFinshed);
		SetFontColor("","msg","#6EC207");
		SetText("","msg",txtMsg);
	    }
	else       
	{
		PlaySound("sound_not");				
		SetColorEx("","w_"+chon_da,"#f4cccc");
		SetColorEx("","w_"+curObject.ans,"#d3f091");
		SetFontColor("","msg","#e74c3c");
		SetText("","msg","Sorry, incorrect...");
		_index++;
	}	
	 SetShowObject("","w_5",1);
	_bTestAndCreat= true;					
	SetText( "", "bt_Create", "Next...");
	InvalidateObj("","");
}
function Page4()
{
 var sTitle = GetTextFromID("ID_TEXT_TITLE") ;
SetText("","title",sTitle );
 var sUnit = GetTextFromID("ID_TEXT_UNIT") ;
SetText("","unit",sUnit );
InitScore();
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
 height: 650 
 });

 var Page4 = new Kinetic.Layer({name: 'Page4',callback:'Page4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,800,650,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var help = CreText('help',71,91,718,95,"abc\r\n111",'#ffffff','#ccffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',3,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NextPage();
}
 );
var msg = CreText('msg',74,402,668,87,"Sorry, incorrect...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',40,'Times New Roman','Bold Italic','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',-1,-1,802,86,"Phân biệt âm /ɪ/ và /i:/",'#009300','#ffffff','#ffffff','#ffffff','',36,'Arial Unicode MS','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',2,24,93,47,"Bài",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var w_1 = CreText('w_1',119,192,226,46,"",'rgba(0,0,0,0)','#f7f7f7','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#009300','#f7f7f7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
var w_2 = CreText('w_2',120,259,226,46,"",'rgba(0,0,0,0)','#f7f7f7','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#009300','#f7f7f7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
var w_3 = CreText('w_3',495,192,226,46,"",'rgba(0,0,0,0)','#f7f7f7','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#009300','#f7f7f7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
var unit = CreText('unit',92,27,41,41,"1",'#ffffff','#ffffff','#009300','#ffffff','',28,'Impact','Normal','center','middle',2,'0.00','0','0',3,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txtFinish = CreText('txtFinish',-1,609,801,41,"",'rgba(152,251,152,0.67)','#c0c0c0','#666666','#ffffff','',18,'Bahnschrift SemiBold','Italic','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(152,251,152,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Create = CreText('bt_Create',299,336,204,51,"Tiếp Tục",'#009300','#ffffff','#000000','#ffffff','',26,'Arial Unicode MS','Normal','center','middle',3,'0.00','5','0',3,'#c0c0c0','#98fb98','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Create.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}

 );
var Text_1 = CreText('Text_1',59,192,61,46,"a)",'rgba(0,0,0,0)','#ffffff','#009300','#009300','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',60,259,61,46,"b)",'rgba(0,0,0,0)','#ffffff','#009300','#009300','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',434,192,61,46,"c)",'rgba(0,0,0,0)','#ffffff','#009300','#009300','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau = CreText('cau',8,108,60,60,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Impact','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',435,259,61,46,"d)",'rgba(0,0,0,0)','#ffffff','#009300','#009300','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var w_4 = CreText('w_4',495,259,226,46,"",'rgba(0,0,0,0)','#f7f7f7','#000000','#000000','',18,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#009300','#f7f7f7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickWord();
  return;
}
 );
var w_5 = CreText('w_5',98,493,657,75,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page4.add(Page4_Backrounnd,help,msg,title,Text_3,w_1,w_2,w_3,unit,txtFinish,bt_Create,Text_1,Text_2,Text_4,cau,Text_5,w_4,w_5);
stage.add(Page4);
InitLacVietScript();
};
