folder_Resource ='data/tinh_dien_tich_hinh_thoi';
var cntQst = 5;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _index = 1;
var lang = "VN";
 var arrayRes = ["","","",""];
var _bTestAndCreat = false;
var arrayKq = [""];
var letters =  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function  getRandomColor() {
   var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[ Random(16)];
  }
  return color;
}
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
            var w = Random(150)+32;
            var h = Random(150)+48;      
	while(w * h %2 !=0)
	{
		 w = Random(150)+32;
		 h = Random(150)+48;      
	}
           SetRect("","hinh_thoi",-1,-1,w,h);	
  
            SetText("","_h","\r\n"+h +" cm");
            SetRect("","_h",GetLeft("","hinh_thoi")+w/2,-1,-1,h);	

             SetText("","_w","     "+w +" cm");
            SetRect("","_w",-1,GetTop("","hinh_thoi")+h/2,w,-1);	

           arrayKq[0] = w * h/2;		
	SetColorEx("","hinh_thoi",getRandomColor());
	       AllowEditText("","in_0",1);
       SetShowObject("","in_0",1);
       SetText("","in_0","");
       SetFontColor("","in_0","#000000");         					
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
	if(_score<0)
		_score =0;
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
var title = CreText('title',0,0,598,64,"Tính diện tích hình thoi",'#804000','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',327,294,65,28,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',199,300,116,22,"Đáp số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',240,357,128,50,"Submit",'#804000','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',544,14,47,47,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var hinh_thoi = CreText('hinh_thoi',196,99,198,87,"",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',5,'0.00','36','0',2,'#0080c0','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _h = CreText('_h',294,99,62,86,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var _w = CreText('_w',196,143,202,50,"3cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','1','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var msg = CreText('msg',24,473,513,88,"good job",'rgba(0,128,192,1.02)','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',2,'#ffff00','rgba(0,128,192,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Text_9 = CreText('Text_9',5,403,590,39,"Ghi chú: Hình vẽ chỉ mang tính minh họa, không đúng với tỉ lệ thực tế.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,title,in_0,Text_4,check,score,hinh_thoi,_h,_w,msg,Text_9);
stage.add(Page_1);
InitLacVietScript();
};
