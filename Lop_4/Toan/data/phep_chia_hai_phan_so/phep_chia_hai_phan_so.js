folder_Resource ='data/phep_chia_hai_phan_so';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
       var tu0  = Random(10)+2;
       var mau0 = Random(10)+1; 
       var tu1  = Random(10)+2;
       var mau1 = Random(10)+1; 
        SetText("","t0",tu0);
       SetText("","m0",mau0);
       SetText("","t1",tu1);
       SetText("","m1",mau1);

      arrayKq[0] = tu0*mau1;	
      arrayKq[1] = mau0*tu1;
   
      SetShowObject("","kq_0",0);
        
      for(var i=0;i<2;i++)
      {
	 SetText("","in_"+ i, "");
	 SetFontColor("","in_"+i,"#000000");
	AllowEditText("","in_"+i,1);
      }
                  _score =GetVer();				
	SetText("","check","Submit");			
	_bTestAndCreat = false;
	SetShowObject("","msg",0);	
             	InvalidateObj("","");
}
function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<2;i++)
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
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	         }
	else{
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.");
		SetText("","kq_0", arrayKq[0] +"\r\n―\r\n"+arrayKq[1]);
			SetShowObject("","kq_0",1);
		PlaySound("sound_not");		
		_score--;			
		}
            if(_score<0)
		_score = 0;
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
 width: 540,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,540,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',0,0,540,58,"Phép chia hai phân số",'#afeeee','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',208,214,116,39,"Submit",'#33cccc','#33cccc','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#33cccc','#33cccc','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',486,6,47,47,"2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',13,71,466,37,"Tính",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',377,95,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',377,147,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',-1,261,541,91,"good job",'rgba(192,255,255,0.89)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','rgba(192,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Text_1 = CreText('Text_1',336,109,31,62,"=",'rgba(0,0,0,0)','#ebebeb','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',377,140,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',131,139,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t0 = CreText('t0',131,98,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m0 = CreText('m0',131,144,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_20 = CreText('Text_20',254,138,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t1 = CreText('t1',254,97,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m1 = CreText('m1',254,143,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_23 = CreText('Text_23',194,117,52,43,":",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',360,269,44,82,"3\r\n−\r\n3\r\n",'rgba(0,0,0,0)','#282828','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(175,238,238,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,title,check,score,Text_2,in_0,in_1,msg,Text_1,Text_4,Text_17,t0,m0,Text_20,t1,m1,Text_23,kq_0);
stage.add(Page_1);
InitLacVietScript();
};
