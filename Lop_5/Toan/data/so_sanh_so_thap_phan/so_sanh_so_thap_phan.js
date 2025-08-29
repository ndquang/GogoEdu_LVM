folder_Resource ='/data/so_sanh_so_thap_phan';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
function  InitScore()
{	
	_score =GetVer();	
	InvalidateObj("","");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}
/*----------------------------------*/
function  Select( yn)
    {
        if(_bTestAndCreat)
return;
for (var k = 0; k < 3; k++) {
    SetColorEx("", "ch_" + k, "#f2f2f2");
}
SetText("","in_0",yn);
SetColorEx("", "", "#33ccff");
SetShowObject("", "check", 1);
_bTestAndCreat = false;
InvalidateObj("", "");
}
function  genRand( min,  max,  decimalPlaces) {     
    var rand = Math.random() * (max - min) + min;
    var power = pow(10, decimalPlaces);
    return floor(rand*power) / power;
}
/*----------------------------------*/
function  CreateQuestion()
{
      var num = Random(100);
      var so0  = genRand(num ,num +2,Random(3)+1);
      var so1  =genRand(num ,num +2,Random(3)+1);
           var th = Random(4);
      if(th==0) //dau bang
	so1  = so0.toFixed(3);
  if(so0  > so1  )
	arrayKq[0]=">";
  else  if(so0  < so1  )
	arrayKq[0]="<";
   else arrayKq[0]="=";
    for(var k=0;k<1  ;k++)
	{
	SetText("","in_"+k,"?");
	SetFontColor("","in_"+k,"#000000");
	}
	 for (k = 0; k < 3; k++) {
        SetColorEx("", "ch_" + k, "#f2f2f2");
    }

       SetText("","vt",so0);
       SetText("","vp",so1);
        
        SetText("","check","Submit");	
SetShowObject("", "check", 0);
	SetShowObject("", "msg", 0);
		
       _bTestAndCreat = false;
	          
	SetText("","msg","");
   	InvalidateObj("","");		
}


function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<1  ;i++)
	{
		if(GetText("","in_"+i)==trimStr(arrayKq [i]))			
		SetFontColor("","in_"+i,"#00ff00");	
	else {
		SetFontColor("","in_"+i,"#ff0000");
		kq = false;;
                         }
	}
	if(kq==true){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm." + _score + " Điểm");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	         }
	else{
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác. Kết quả là dấu: "+arrayKq[0] );
		PlaySound("sound_not");		
		_score--;			
		}
            if(_score<0)
		_score = 0;
	SetText("","score",_score);
	SetShowObject("", "msg", 1);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetShowObject("", "check", 1);
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
 width: 500,
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,300,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',0,0,502,47,"So sánh hai số thập phân",'#008040','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',456,4,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vt = CreText('vt',97,71,123,33,"V",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',236,71,36,33,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',22,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vp = CreText('vp',284,71,89,33,"dv2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',162,120,51,38,">",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(GetText("",""));
  return;
}
 );
var ch_1 = CreText('ch_1',229,119,51,38,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(GetText("",""));
  return;
}
 );
var ch_2 = CreText('ch_2',301,119,51,38,"<",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select(GetText("",""));
  return;
}
 );
var msg = CreText('msg',1,207,495,87,"good job",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#008040','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var check = CreText('check',200,189,116,39,"Submit",'#008040','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_1.add(Page_1_Backrounnd,title,score,vt,in_0,vp,ch_0,ch_1,ch_2,msg,check);
stage.add(Page_1);
InitLacVietScript();
};
