folder_Resource ='data/nhan_mot_so_voi_mot_tong';
var kq = "";
var _score = 0;
var _cSubmit = 0;
function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);
	SetShowObject("","msg",0);
	InvalidateObj("","");
	SetDigitEditText("","_kq","number");
	_cSubmit =0;
}
var autoCreateTimeout ="";
function  ChamDiem()
{
	SetShowObject("","btSubmit",0);	
	AllowEditText("","_kq",0);
	if(GetText("","_kq")==kq){
		_cSubmit ++;
		SetFontColor("","msg","#009933");		
		_score++;
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + "Điểm");	
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");
 		autoCreateTimeout  = Delay("CreateQuestion()",3500);
		}
	else{
		SetFontColor("","msg","#ff3300");
		PlaySound("sound_not");
		SetText("","msg","Xin lỗi, không chính xác: "+kq);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		 autoCreateTimeout  = Delay("CreateQuestion()",5000);
	}
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
var  _cauhoi ="";
function CreateQuestion()
{
	var so1 = Random(990) +10;
	var so2 = Random(100)+1;         
	var so3 = 100 - so2;         

	var str2 =  so1 + " x " + so2 + " + " + so1 + " x " + so3 + " = ";
            kq = so1*100;
	   SetText("","_cauhoi", str2 );
	
	 SetText("","_kq","");
	SetShowObject("","btSubmit",1);	
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	 clearTimeout(autoCreateTimeout);
             InvalidateObj("","");
}
function Page_1()
{
SetDigitEditText("","_kq","number");
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
 height: 340 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,340,'','#ffe4e1','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffe4e1','0','0','0','','0','0','0','0',0,0,'');
var _cauhoi = CreText('_cauhoi',53,80,434,50,"145 x 2 + 145 x 98 = ",'rgba(0,0,0,0)','#ffffff','#804000','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',490,80,148,50,"44",'rgba(0,0,0,0)','#ffffff','#a52a00','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',238,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',275,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',312,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',349,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',386,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',423,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',460,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',497,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',534,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',575,299,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',308,151,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var Text_1 = CreText('Text_1',13,9,639,37,"Áp dụng tính chất nhân một số với một tổng để tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',117,137,513,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,_cauhoi,_kq,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,Text_1,msg);
stage.add(Page_1);
InitLacVietScript();
};
