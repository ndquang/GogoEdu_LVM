folder_Resource ='/data/Giay_TheKy';
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
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + "Điểm");	
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");
 		Delay("CreateQuestion()",3500);
		}
	else{
		SetFontColor("","msg","#ff3300");
		PlaySound("sound_not");
		SetText("","msg","Xin lỗi, không chính xác: "+kq);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		 Delay("CreateQuestion()",5000);
	}
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	SetShowObject("","msg",1);
	InvalidateObj("","");
}

function CreateQuestion()
{
	   var _index = Random(cntQst);
       var _cauhoi = lstQuestion[_index];
       var _findChar = indexOf(_cauhoi,"#",0);
       if(_findChar>=0)
	   {
		   var _n = Random(10)+1;
		   var _h = lastIndexOf(_cauhoi,"?");
		   if(_h)
			{
				kq = _n* subString(_cauhoi,_h+1);
			}
			_cauhoi = subString(_cauhoi,0,_h+1);
			_cauhoi = replaceStr(_cauhoi,"#",_n);				
	   }
       else if(_index == 11) // Năm % thuộc thế kỷ thứ mấy?
	   {
		   var _n = Random(Year());
		   var _h = lastIndexOf(_cauhoi,"%");
		   if(_h)
			{
				kq = ceil(_n/100);
			}			
			_cauhoi = replaceStr(_cauhoi,"%",_n);	
	   }
	   else if(_index == 12)//Tháng % có bao nhiêu ngày?
	   {
		   var _n = Random(12)+1;
		    var _h = lastIndexOf(_cauhoi,"%");
		   if(_h)
			{
				switch(_n ){
					case 1:	
					case 3:	
					case 5:
					case 7:
					case 8:	
					case 10:
					case 12:					
						kq = 31;
						break;
					case 2:
						kq = 28;//hoặc 29
						break;
					case 4:
					case 6:
					case 9:	
					case 11:					
						kq = 30;
						break;
				}
			}	
		   _cauhoi = replaceStr(_cauhoi,"%",_n);	
	   }
	   else if(indexOf(_cauhoi,"@",0)>=0)
	   {
		   var _h = lastIndexOf(_cauhoi,"?");
		   if(_h)
			{
				var _cs = subString(_cauhoi,_h+1);
				var _n = Random(10)+1;
				var _m = Random(_cs)+1;	
				kq = _n*_cs + _m;
				_cauhoi = subString(_cauhoi,0,_h+1);
			    _cauhoi = replaceStr(_cauhoi,"@",_n,0,1);
				_cauhoi = replaceStr(_cauhoi,"@",_m,0,1);				
			}
	   }
	   else if(indexOf(_cauhoi,"&",0)>=0)
	   {
		   var _h = lastIndexOf(_cauhoi,"?");
		   if(_h)
			{
				var _cs = subString(_cauhoi,_h+1);				
				var _n = Random(5)+2;
				while(_cs%_n!=0)
					_n = Random(5)+2;
				kq = _cs/_n;
				_cauhoi = subString(_cauhoi,0,_h+1);
			    _cauhoi = replaceStr(_cauhoi,"&","1/"+_n);							
			}
	   }
	   else
	   {
		   var _h = lastIndexOf(_cauhoi,"?");
		   if(_h)
			{
				kq = subString(_cauhoi,_h+1);
			}
			_cauhoi = subString(_cauhoi,0,_h+1);
	   }
	   SetText("","_cauhoi", _cauhoi);
	Speak(_cauhoi,"VN");
	 _textSpeak = _cauhoi;
	 SetText("","_kq","");
	SetShowObject("","btSubmit",1);	
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
             InvalidateObj("","");
}
function Page_1()
{
//var s_content = $("#idContent").text().trim();
 var s_content = GetTextFromID("ID_TEXT_DATA");
lstQuestion = s_content.match(/[^\r\n|.]+/g);
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
var _cauhoi = CreText('_cauhoi',31,2,757,110,"1/4  ngày bằng bao nhiêu giờ\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_cauhoi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak( _textSpeak,"VN");
  return;
}
 );
var _kq = CreText('_kq',268,123,203,50,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',161,193,513,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
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
var btSubmit = CreText('btSubmit',488,121,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
Page_1.add(_cauhoi,_kq,msg,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit);
stage.add(Page_1);
InitLacVietScript();
};
