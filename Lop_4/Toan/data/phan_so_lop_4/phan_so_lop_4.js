folder_Resource ='data/phan_so_lop_4';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["",""];
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
       var so1 = Random(9)+2;
       var so0 = Random(so1)+1; 
      arrayKq[0] = so0;	
      arrayKq[1] = so1;	
     for(var i =1; i<=10;i++)
	{
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
	start = start +radian ;
	end = start +radian;
	if(i<=so0)
		SetColorEx("","c"+i,"#0080ff")	;
	else SetColorEx("","c"+i,"#ffffff")	;

	}
        AllowEditText("","in_0",1);
        AllowEditText("","in_1",1);      
       SetText("","in_0","");
      SetText("","in_1","");
       SetFontColor("","in_0","#000000");
      SetFontColor("","in_1","#000000");
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',353,137,57,83,"",'rgba(244,244,244,0.89)','#ebebeb','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c6e2ff','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c1 = CreText('c1',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c2 = CreText('c2',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c3 = CreText('c3',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c4 = CreText('c4',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c5 = CreText('c5',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c6 = CreText('c6',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c7 = CreText('c7',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c8 = CreText('c8',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c9 = CreText('c9',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',0,0,598,58,"  Viết rồi đọc phân số đã tô màu trong hình dưới đây",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',354,144,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',322,243,116,39,"Submit",'#80ff00','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',545,6,47,47,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',354,182,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c10 = CreText('c10',63,84,162,170,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','360','90',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',286,83,184,32,"Viết phân số:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',115,141,394,69,"good job",'rgba(0,128,192,1.02)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold Italic','center','middle',11,'0.00','10','0',2,'#ffff00','rgba(0,128,192,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,c1,c2,c3,c4,c5,c6,c7,c8,c9,title,in_0,check,score,in_1,c10,Text_2,msg);
stage.add(Page_1);
InitLacVietScript();
};
