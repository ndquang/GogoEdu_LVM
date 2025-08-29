folder_Resource ='data/tinh_bang_cach_thuan_tien_nhat';
var name_keyboard="Group_1";
var keyOldValue="";
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _a,_b,_c,_d;
var _result = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);	
	_cSubmit =0;
	SetShowObject("","msg",0);	
	InvalidateObj("","");
}

function  CreateQuestion()
{	   
	    _a = Random(500-1)+1;
                    _b =  Random(500-1)+1;
  	   _c =  Random(500-1)+1;
 	   _d =  Random(500-1)+1;
                    while((_a+_c)%10!=0)
		  {
			    _a = Random(250-1)+1;
                 		   _c =  Random(250-1)+1;
		  }
 		 while((_b+_d)%10!=0)
		  {
			    _b = Random(250-1)+1;
                 		   _d =  Random(250-1)+1;
		  }
	   var _textView = "";	
	   var _type = Random(3);
	   if( _type == 0) {
		_textView = _a + " + " + _b + " + " + _c + " + " + _d + " =";
	   }
                   if( _type == 1) {
		_textView = _a + " + " + _b + " + " + _d + " + " + _c + " =";
		 	   }
  	  if( _type == 2) {
		_textView = _a + " + " + _c + " + " + _b + " + " + _d + " =";
	   }
		_result  = _a+_b+_c+_d;
		SetText("","_textView",  _textView);
		SetText("","_input1", "");
		SetText("","_input2", "");
		SetText("","_input3", "");

		SetFontColor("","_input1",_normalColor);
		SetFontColor("","_input2",_normalColor);
		SetFontColor("","_input3",_normalColor);

		 AllowEditText("","_input1",1);
		 AllowEditText("","_input2",1);
 		AllowEditText("","_input3",1);

		SetShowObject("","msg",0);	
	                SetText("","btSubmit","Đồng ý");
	             _bTestAndCreat  = false;
                        InvalidateObj("","");
}


function  ChamDiem()
{	
	var _check = true;
		
		for(var k =1 ; k<=3;k++)
		{
		var _i = "_input"+k;
		if(ExecAsThread(GetText("",_i))== _result)
			SetFontColor("",_i,_trueColor);
		else {
			SetFontColor("",_i,_falseColor);
			_check = false;
		}
		}
									
	if(_check == true)
		{	
			_cSubmit ++;
			SetFontColor("","msg",_trueColor);		
			_score++;
			SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");	
			SetColorEx("","score"+_cSubmit,_trueColor);
			SetText("","score"+_cSubmit,_score);
			PlaySound("sound_good");
					}
		else {//sai
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_not");
			SetText("","msg","Xin lỗi, không chính xác");
			_score--;	
			SetColorEx("","score"+_cSubmit ,"#dddddd");
			SetText("","score"+_cSubmit ,"");
			_cSubmit --;
		 }	
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	 AllowEditText("","_input1",0);
	AllowEditText("","_input2",0);
 	AllowEditText("","_input3",0);
	_bTestAndCreat  = true;
	SetText("","btSubmit","Câu tiếp...");	
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
function Page_1()
{
InitScore();
CreateQuestion();
SetDigitEditText("","_input3","number");
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
 width: 560,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,560,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',2,2,558,50,"Tính bằng cách thuận tiện nhất",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',93,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',130,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',167,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',204,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',241,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',278,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',315,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',352,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',389,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',430,232,25,26,"",'rgba(192,192,192,0.89)','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','rgba(192,192,192,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',212,169,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var _textView = CreText('_textView',11,69,274,24,"38726 =",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',29,271,496,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var _input3 = CreText('_input3',290,122,250,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input1 = CreText('_input1',290,69,250,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _input2 = CreText('_input2',290,95,250,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',11,122,274,24,"=",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',11,95,274,24,"=",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,_textView,msg,_input3,_input1,_input2,Text_2,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
