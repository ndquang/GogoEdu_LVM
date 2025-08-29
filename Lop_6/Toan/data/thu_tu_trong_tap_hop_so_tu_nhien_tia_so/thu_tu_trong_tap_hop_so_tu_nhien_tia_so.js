folder_Resource ='/data/thu_tu_trong_tap_hop_so_tu_nhien_tia_so';
var _score = 0;
var _cSubmit = 0;
var _reply = 0;
function  InitScore()
{
	for(var i= 1; i<=10;i++){
	SetColorEx("","score"+i,"#dddddd");
	SetText("","score"+i,"");
	}
	_score =GetVer();
	SetText("","score1",_score);
	_cSubmit =0;
}

var kq=92823;
var chux="";
function  CreateGame()
{
	var _a = Random(87);
	for(var i= 0; i<=13;i++){
	SetText("","so_"+i,_a);
	_a++;
	}
	SetText("","input","");
	var index = Random(13);
	kq = GetText("","so_"+index );
	var th = Random(3);
	var tr= kq -1;
	var sa = kq +1;
	if(th==0)
	{
		SetText("","ch","Số liền trước số " +sa+ " là:");
	}
	else if(th==1)
	{
		SetText("","ch","Số liền sau số " +tr+ " là:");
	}
	else if(th==2)
	{
		SetText("","ch","Số ở giữa số " + tr+ " và "+  sa+ " là");
	}

	SetText("","msg","");
	 _reply =0;
	SetText("","bt_check","OK");
	PlaySound("SND_CREATE");
}
function  CheckKQ()
{
	var temp = GetText("","input");
	if(temp==""){
		SetText("","msg","⚠ Bạn chưa nhập số");
		return;
	}
		 if(temp == kq)
		{
			_cSubmit ++;
			_score++;
			SetText("","msg", "✅ Bạn làm tốt lắm\r\n"+_score + " Điểm");
			PlaySound("SND_TRUE");		
			SetColorEx("","score"+_cSubmit,"#80ff00");
			SetText("","score"+_cSubmit,_score);

		}
	else{
		_score--;
		SetText("","msg","❌ Không chính xác \r\n Số đúng là: " + kq );
		PlaySound("SND_FALSE");
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		}
	
		UpdateScore( _score);
		if(_cSubmit== 0 || _score<0)
		InitScore();
		 _reply =1;
		SetText("","bt_check","NEXT");

}
function Page_1()
{
 InitScore();
AllowEditText("","input",1);
CreateGame();
InvalidateObj("","");
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
 width: 640,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',85,54,490,24,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var msg = CreText('msg',82,160,475,139,"Sai.",'rgba(64,224,208,0.00)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','20','0',1,'#7f7f7f','rgba(64,224,208,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',66,4,492,38,"THỨ TỰ TRONG TẬP HỢP SỐ TỰ NHIÊN",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',104,68,31,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',141,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',178,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',215,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',252,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',289,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',326,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',363,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',400,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',437,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',478,286,25,26,"",'#c0c0c0','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_check = CreText('bt_check',265,145,96,30,"OK",'#afeeee','#ffffff','#000000','#ffffff','',14,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if( _reply==0)
CheckKQ();
else
CreateGame();
InvalidateObj("","");
  return;
}
 );
var so_1 = CreText('so_1',139,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_2 = CreText('so_2',174,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_3 = CreText('so_3',209,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_4 = CreText('so_4',244,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_5 = CreText('so_5',279,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_6 = CreText('so_6',314,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_7 = CreText('so_7',349,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_8 = CreText('so_8',384,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_9 = CreText('so_9',419,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_10 = CreText('so_10',454,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_11 = CreText('so_11',489,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_12 = CreText('so_12',525,68,31,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input = CreText('input',368,98,58,30,"",'#afeeee','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch = CreText('ch',93,97,266,30,"Số liền trước số xxx là:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Image_1,msg,Text_1,so_0,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,bt_check,so_1,so_2,so_3,so_4,so_5,so_6,so_7,so_8,so_9,so_10,so_11,so_12,input,ch);
stage.add(Page_1);
InitLacVietScript();
};
