folder_Resource ='data/phan_so_lon_hon_1';
var _score = 0;
var _cSubmit = 0;
var _bTestAndCreat = false;
var arrayKq = ["",""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
       var so0 = Random(9)+2;
       var so1 = Random(so0)+1; 
      arrayKq[0] = so0;	
      arrayKq[1] = so1;	
     for(var i =1; i<=10;i++)
	{
		SetShowObject("","c"+i,1);	

		if(i<=so0){
			SetShowObject("","d"+i,1);
			SetShowObject("","c"+i,1);
			}	
		else	{
			SetShowObject("","d"+i,0);
			SetShowObject("","c"+i,0);
			}	
		if(i<=so1)
			SetColorEx("","d"+i,"#0080c0")	;
		else SetColorEx("","d"+i,"#ffffff")	;
                              
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
		SetText( "", "msgtext", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		UpdateScore( _score);
		SetFontColor("","msgtext","#61FF33");
		SetShowObject( "", "kq_0",0);	
		SetShowObject( "", "kq_1", 0);	

	         }
	else{
		SetShowObject( "", "kq_0",1);	
		SetShowObject( "", "kq_1", 1);	
		SetText("","msgtext","Không chính xác, kết quả là:");
		SetText( "", "kq_0",arrayKq[0]);	
		SetText( "", "kq_1", arrayKq[1]);	
		PlaySound("sound_not");
		SetFontColor("","msgtext","#FF5733");			
		_score--;			
		}
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
 width: 600,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',272,225,57,83,"",'rgba(244,244,244,0.89)','#ebebeb','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c6e2ff','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c1 = CreText('c1',38,100,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c2 = CreText('c2',86,100,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c3 = CreText('c3',38,144,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c4 = CreText('c4',86,144,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c5 = CreText('c5',134,100,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c6 = CreText('c6',134,144,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c7 = CreText('c7',182,100,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c8 = CreText('c8',182,144,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c9 = CreText('c9',228,100,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',0,0,598,58,"  Viết rồi đọc phân số đã tô màu trong hình dưới đây",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',273,232,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',249,330,116,39,"Submit",'#80ff00','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var in_1 = CreText('in_1',273,270,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c10 = CreText('c10',228,144,42,42,"",'#0080c0','#0080c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',71,253,184,32,"Viết phân số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',352,239,56,57,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(arrayKq[0]+ " phần "+ arrayKq[1],"VN");
  return;
}
 );
var d1 = CreText('d1',327,100,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d2 = CreText('d2',375,100,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d3 = CreText('d3',327,144,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d4 = CreText('d4',375,144,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d5 = CreText('d5',423,100,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d6 = CreText('d6',423,144,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d7 = CreText('d7',471,100,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d8 = CreText('d8',471,144,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d9 = CreText('d9',517,100,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d10 = CreText('d10',517,144,42,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msgtext = CreText('msgtext',103,151,394,69,"good job",'rgba(255,255,255,1.02)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080c0','rgba(255,255,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msgtext.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var kq_0 = CreText('kq_0',434,162,24,24,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_1 = CreText('kq_1',431,185,31,24,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','1','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:398,height:73});
msg.add(msgtext,kq_1,kq_0);
Page_1.add(Page_1_Backrounnd,Text_3,c1,c2,c3,c4,c5,c6,c7,c8,c9,title,in_0,check,score,in_1,c10,Text_2,sound,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,msg);
stage.add(Page_1);
InitLacVietScript();
};
