folder_Resource ='/data/tim_2_so_khi_biet_tong_va_hieu';
var kq = "";
var cntQst = 0;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	_score = _score
	SetText("","score1",_score);
	SetShowObject("","msg",0);
	SetDigitEditText("","_kq","number");
	_cSubmit =0;
	CreateQuestion();
	InvalidateObj("","");
}

function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	GetVer("callBackGetVer");
}

var soTong, soHieu;
var i0,i1,i2,i3,i4;
var aAnswer = ["","","","",""];
var aAnswer1 = ["","","","",""];
var aAnswer2 = ["","","","",""];
var _bTestAndCreat = false;
function  ChamDiem()
{
	
	var _check = true;	
	var ipValue="";	
		for(var k =0 ; k<=4;k++)
		{
		var _i = "i_"+k;		
		ipValue = replaceStr(GetText("",_i)," ",'');
		if(ipValue=="")
		{
		SetFontColor("","msg", _normalColor);
		SetText("","msg","Bạn chưa trả lời hết.");
		SetShowObject("","msg",1);
		return;
		}
		if(ipValue == aAnswer[k] || ipValue == aAnswer1[k] || ipValue == aAnswer2[k])
			SetFontColor("",_i,_trueColor);
		else {
			SetFontColor("",_i,_falseColor);
			_check = false;
		}
		AllowEditText("",_i,0);
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
			SetText("","msg","Không chính xác");
			_score--;	
			SetColorEx("","score"+_cSubmit ,"#dddddd");
			SetText("","score"+_cSubmit ,"");
			_cSubmit --;
		 }	
		if(_cSubmit== 0 || _score<0){
		_score = 0; 
		_cSubmit= 0;
	} else UpdateScore( _score);
	_bTestAndCreat  = true;
	SetText("","btSubmit","Câu tiếp »");	
	SetShowObject("","btSubmit",1);	
	SetShowObject("","msg",1);
	InvalidateObj("","");

}

function  CreateQuestion()
{
        var _index = Random(2);
       var _cauhoi = "Tổng của hai số là %. Hiệu của hai số là %. Tìm hai số đó?";
       soTong= Random(1000);
       soHieu= Random(soTong);
       PlaySound("sound_start");
       while((soTong- soHieu)%2!=0)
	{
		   soTong= Random(1000);
       		   soHieu= Random(soTong);
            }
      _cauhoi = replaceStr(_cauhoi,"%",soTong,0,1);	
      _cauhoi = replaceStr(_cauhoi,"%",soHieu,0,1);	
       SetText("","_cauhoi", _cauhoi);
	for(var i= 0; i<=4;i++){
	SetFontColor("","i_"+i,_normalColor );
	SetText("","i_"+i,"");
	AllowEditText("","i_"+i,1);
	}

	   if(_index == 0)
	   {
		SetText("","c_0","Hai lần số bé là:");
		SetText("","c_1","Số bé là:");
		SetText("","c_2","Số lớn là:");	
		var tem = soTong - soHieu;
		aAnswer[4]=  tem/2; //so be
		aAnswer[3] = aAnswer[4]+ soHieu; // so lon
		aAnswer[0]= soTong + "-" + soHieu + "="+tem;
		aAnswer[1]= tem+ ":" + "2" + "="+aAnswer[4];
		aAnswer[2]= aAnswer[4]+ "+" + soHieu + "="+aAnswer[3];
		aAnswer1[2]= soTong + "-" + aAnswer[4]+ "="+aAnswer[3];
		aAnswer2[2]= soHieu + "+" + aAnswer[4]+ "="+aAnswer[3];


	   }
		else if(_index == 1)
	   {
		SetText("","c_0","Hai lần số lớn là:");
		SetText("","c_1","Số lớn là:");
		SetText("","c_2","Số bé là:");	

		var tem = soTong + soHieu;
		aAnswer[3]=  tem/2; //so lon
		aAnswer[4] = aAnswer[3]- soHieu; // so be
		aAnswer[0]= soTong + "+" + soHieu + "="+tem;
		aAnswer[1]= tem+ ":" + "2" + "="+aAnswer[3];
		aAnswer[2]= aAnswer[3]+ "-" + soHieu + "="+aAnswer[4];	
		aAnswer1[2]= soTong + "-" + aAnswer[3]+ "="+aAnswer[4];		
	   }
	   Speak(_cauhoi,"VN");
          	SetShowObject("","msg",0);	
	       SetText("","btSubmit","Kết quả");
	       _bTestAndCreat  = false;
                        InvalidateObj("","");

}
function Page_1()
{
InitScore();
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
 height: 550 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,550,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var _cauhoi = CreText('_cauhoi',0,29,600,74,"Tổng của hai số là %. Hiệu của hai số là %. Tìm hai số đó?",'#bbddff','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#bbddff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
_cauhoi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak( _textSpeak,"VN");
  return;
}
 );
var i_0 = CreText('i_0',295,154,203,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',61,410,505,79,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',12,'0.00','2','2',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',123,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',160,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',197,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',234,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',271,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',308,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',345,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',382,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',419,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',460,500,22,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',217,345,168,50,"Kết quả",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_1 = CreText('Text_1',254,116,94,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold Italic','center','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_0 = CreText('c_0',85,154,200,24,"Hai lần số bé là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_1 = CreText('c_1',137,185,148,24,"Số bé là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_2 = CreText('c_2',137,216,148,24,"Số lớn là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_3 = CreText('c_3',91,247,194,24,"Đáp số: Số lớn:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_4 = CreText('c_4',137,281,148,24,"Số bé:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_1 = CreText('i_1',295,185,203,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_2 = CreText('i_2',295,216,203,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_3 = CreText('i_3',295,247,203,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var i_4 = CreText('i_4',295,281,203,24,"44",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',0,-4,117,33,"Bài toán:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','left','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#9bdeff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,_cauhoi,i_0,msg,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,Text_1,c_0,c_1,c_2,c_3,c_4,i_1,i_2,i_3,i_4,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
