folder_Resource ='data/tim_hai_so_khi_biet_tong_va_ti';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
function  InitScore()
{	
	_score =GetVer();	
	//SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}


function  CreateQuestion()
{
       var tu  = Random(9)+1;
       var mau  = Random(9)+1; 
       var sum = (Random(20)+1)*(tu  + mau);
  SetText("","cau_hoi","Tìm hai số khi biết tổng của chúng bằng "+sum +" và tỉ \r\n số của hai số đó là");
   SetText("","tu", tu);
SetText("","mau", mau);
arrayKq[0] = sum / (tu  +mau) * tu  ;
arrayKq[1] = sum  -  arrayKq[0];       
      for(var i=0;i<2;i++)
      {
	 SetText("","in_"+ i, "");
	 SetFontColor("","in_"+i,"#000000");
	AllowEditText("","in_"+i,1);
      }
              			
	SetText("","check","Submit");			
		_bTestAndCreat = false;
	          
	   SetText("","msg","");
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
		SetText("","msg","Không chính xác.\r\n hai số đó là "+arrayKq[0]  +","+ arrayKq[1] );
		PlaySound("sound_not");		
		_score--;			
		}
            if(_score<0)
		_score = 0;
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	//SetShowObject("","msg",1);
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
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,540,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',1,232,538,91,"good job",'rgba(0,255,128,0.67)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,255,128,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Text_1 = CreText('Text_1',90,136,173,113," Số thứ nhất\r\n\r\n Số thứ hai",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi = CreText('cau_hoi',13,66,498,69,"Tìm hai số khi biết tổng của chúng bằng 100  và tỉ số của hai số đó là",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',0,0,540,58,"TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ CỦA HAI SỐ ĐÓ",'#008040','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',323,149,116,39,"Submit",'#008040','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',487,258,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',216,131,45,30,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',207,176,45,30,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tu = CreText('tu',203,86,18,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var mau = CreText('mau',203,106,18,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','1','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,msg,Text_1,cau_hoi,title,check,score,in_0,in_1,tu,mau);
stage.add(Page_1);
InitLacVietScript();
};
