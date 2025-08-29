folder_Resource ='/data/Trung_Binh_Cong';
var lstQuestion = ["",""];
var kq = "";
var cntQst = 0;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";

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

function  ChamDiem()
{
	SetShowObject("","btSubmit",0);	
	AllowEditText("","_kq",0);
	if(GetText("","_kq")==kq){
		_cSubmit ++;
		SetFontColor("","msg","#009933");		
		_score++;
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");
				}
	else{
		SetFontColor("","msg","#ff3300");
		PlaySound("sound_not");
		SetText("","msg","Xin lỗi, không chính xác: "+kq);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
			}
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	SetShowObject("","msg",1);
	SetShowObject("","bt_next",1);	
	InvalidateObj("","");
}

function  CreateQuestion()
{
       var _index = Random(cntQst);
       var _cauhoi = lstQuestion[_index];
	   if(_index == 0)
	   {		 
		   var _n = Random(4)+2;
		   var _e = true;
		   var _str = "";
			var _sum = 0;
		   while(_e){
				_sum = 0;
				_str = "";
			   for(var i=0; i< _n ; i++){	
				var _xx = Random(200);
				_sum = _sum + _xx;
				_str = _str + _xx + "; ";
			   }
			_str = rtrimStr(_str);
			_str = rtrimStr(_str,";");
		       if(_sum%_n==0)
				   _e = false;
		   }	
			kq = _sum / _n;
			_cauhoi = replaceStr(_cauhoi,"%",_str);	
	   }
		else if(_index == 1)
	   {
		   var _x = Random(61)+20;
		   var _y = Random(61)+20;
		   var _z = Random(61)+20;
		    while((_x+_y+_z)%3 !=0){
		      _x = Random(61)+20;
			  _y = Random(61)+20;
			  _z = Random(61)+20;
		   }	
			kq = (_x+_y+_z)/3;
			_cauhoi = replaceStr(_cauhoi,"%",_x,0,1);
			_cauhoi = replaceStr(_cauhoi,"%",_y,0,1);
			_cauhoi = replaceStr(_cauhoi,"%",_z,0,1);				
	   }
	   else if(_index == 2)
	   {
		    var _n = Random(4)+2;
		  var _sum = Random(500);
		  while(_sum%_n!=0)
			_sum = Random(500);	
		  kq= _sum;
		  var _tbc = _sum/_n;
		  _cauhoi = replaceStr(_cauhoi,"%",_n,0,1);
		  _cauhoi = replaceStr(_cauhoi,"%",_tbc,0,1);
		  _cauhoi = replaceStr(_cauhoi,"%",_n,0,1);
		  
	   }
	   else if(_index == 3)
	   {
		  var _x = Random(61)+20;
		  var _y = Random(61)+20;
		  while((_x+_y)%2!=0)
		  {
			_x = Random(61)+20;
			_y = Random(61)+20;
		  }
		  kq= _y;
		  var _tbc = (_x+_y)/2;
		  _cauhoi = replaceStr(_cauhoi,"%",_tbc,0,1);
		  _cauhoi = replaceStr(_cauhoi,"%",_x,0,1);		 
	   }
	   else if(_index == 4)
	   {
		  var _i = Random(50)+1;
		  var _j = Random(10)+_i;
		  kq = (_i + _j)/2;		 
		  _cauhoi = replaceStr(_cauhoi,"%",_i,0,1);
		  _cauhoi = replaceStr(_cauhoi,"%",_j,0,1);		 
	   }	  
	  SetText("","_cauhoi", _cauhoi);
	  Speak(_cauhoi,"VN");
	  _textSpeak = _cauhoi;
	  SetText("","_kq","");
	  SetShowObject("","btSubmit",1);	
	  AllowEditText("","_kq",1);
	  SetShowObject("","msg",0);
	  SetShowObject("","bt_next",0);		
              InvalidateObj("","");
}
function Page_1()
{
//var s_content = $("#idContent").text().trim();
 var s_content = GetTextFromID("ID_TEXT_DATA");
 lstQuestion = s_content.match(/[^\r\n|0]+/g);
cntQst = Length(lstQuestion );
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
var _cauhoi = CreText('_cauhoi',31,2,757,110,"1/4  ngày bằng bao nhiêu giờ\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_cauhoi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak( _textSpeak,"VN");
  return;
}
 );
var _kq = CreText('_kq',268,123,203,50,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',135,191,513,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',12,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var btSubmit = CreText('btSubmit',488,121,128,50,"Kết quả",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var bt_next = CreText('bt_next',606,191,92,88,"»",'#80ff00','#ffffe0','#000000','#ffffff','',72,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#c0c0c0','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
Page_1.add(_cauhoi,_kq,msg,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,bt_next);
stage.add(Page_1);
InitLacVietScript();
};
