folder_Resource ='data/bai_toan_chia_cho_so_co_mot_chu_so';
var lstQuestion = ["",""];
var kq = "";
var cntQst = 0;
var _score = 0;
var _cSubmit = 0;
var _textSpeak="";
var _index = 0;
var lang = "VN";

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
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm"	);
		SetColorEx("","score"+_cSubmit,"#009933");
		SetText("","score"+_cSubmit,_score);
		PlaySound("sound_good");		
 		autoCreateTimeout  = Delay("CreateQuestion()",3500);
		
		}
	else{
		SetFontColor("","msg","#ff3300");
		PlaySound("sound_not");
		SetText("","msg","Không chính xác: "+kq);
		_score--;	
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		 autoCreateTimeout  = Delay("CreateQuestion()",5000);
	}
	_index++;
	UpdateScore( _score);
		if(_cSubmit== 0 || _score<0){
		InitScore();
	}
	SetShowObject("","msg",1);
	InvalidateObj("","");
}
function CreateQuestion()
{
      if(_index==cntQst+1)
	{
		SetFontColor("","msg","#F7DC6F");		
		SetText("","msg","Bạn đã hoàn thành bài học này, "+ _score + " điểm.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}
       var strCh = lstQuestion[_index];
       var arrayRes = ["","",""];
       arrayRes = strCh .split("|");
       if( Length(arrayRes)>2)
	   {
		_score =GetVer();
		 var ch = arrayRes[0];
		 SetText("","_cauhoi",ch);
		 kq  = arrayRes[1];
		var dv = arrayRes[2];
		 SetText("","_dv",dv);
		 _textSpeak = ch;	
	 SetText("","_kq","");
	SetShowObject("","btSubmit",1);	
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	  clearTimeout(autoCreateTimeout);
             InvalidateObj("","");		
	   }	
}
function  GetDataText()
{
//var s_content = $("#idContent").text().trim();
 var s_content ="";
if(lang=="VN")
 s_content = GetTextFromID("ID_TEXT_VN");
else 
  s_content = GetTextFromID("ID_TEXT_EN");

lstQuestion = s_content.match(/[^\r\n]+/g);
cntQst = Length(lstQuestion );
SetDigitEditText("","_kq","number");
InitScore();
CreateQuestion();
  return;
}
function Page_1()
{
GetDataText();
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var _dv = CreText('_dv',355,207,185,41,"Quang wants to buy 30 ping-pong balls. If there are 3 balls in each pack, how many packs of ping-pong balls should Quang buy?|10|packs\r\nNgọc picked 8 carrots from her garden and divided them equally into 2 bunches to give to her neighbors. How many carrots are in each bunch?|4|carrots\r\nBình can walk around the park in 6 minutes. How many rounds can he go in an hour?|10|arounds\r\n35 people need to ride the elevator to the top of a skyscraper. The elevator can hold 9 people at a time. How many people will be in the elevator on the last trip to the top?|8|people\r\nHùng had 928 plastic cups. He arranged them on trays that can hold 6 cups. How many trays did Hùng need?|155|trays\r\nA shopping mall has $346 to spend on new tiles for the floor. If each tile costs $5, how many tiles can the mall buy?|69|tiles\r\nThe library has 345 magazines. Each bin holds 8 magazines. How many bins does the library need to hold all of its magazines?|43|bins\r\nA town needs to buy 516 hamburger buns for their big summer barbecue. The hamburger buns come in packages of 5. How many packages should the town buy?|104|packages\r\nA new science website has $572 to buy online ads. If each ad costs $3, how many ads can the website purchase?|190|ads\r\nA parking garage wants to collect $525 in parking fees. If the garage charges $4 for each car, how many cars will it take for the garage to meet the goal?|132|cars\r\nThere are 963 students going on a field trip to the zoo. If the students need to be in groups of 8 for a tour of the penguin exhibit, how many groups should they form?|121|groups\r\nA group of 990 people is going on a boat tour. If each boat holds 6 people, how many boats will the group need?|165|boats\r\nA group of 548 students gets to go on a helicopter ride. If each helicopter holds 3 students, how many helicopters should the group plan to use?|183|helicopters\r\nThe library has 853 books. If each shelf can hold 9 books, how many shelves will the library need to hold all of its books?|94|shelves\r\nA radio station has $256 to buy new CDs. Each CD costs $7. How many CDs can the radio station buy?36|CDs\r\nA farmer needs to ship 139 pumpkins to a grocery store. If each crate can hold 4 pumpkins, how many crates will the farmer need?35|crates\r\nThe Driver has $931 to pay for bridge tolls. If each toll is $3, how many tolls can the company pay?310|tolls\r\nA builder needs 898 nails to finish a project. If the nails come in packages of 9, how many packages should the builder purchase?100|packages",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,2,599,64,"Bài toán: Chia cho số có một chữ số",'#006464','#ffffff','#fcc82c','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#006464','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,89,564,117,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',175,208,172,42,"44",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffd700','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',117,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',154,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',191,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',228,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',265,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',302,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',339,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',376,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',413,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',454,51,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',194,261,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var msg = CreText('msg',28,159,513,88,"good job",'rgba(255,255,255,1.02)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(255,255,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var sound = CreText('sound',536,-2,65,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(_textSpeak,lang);
  return;
}
 );
var Text_2 = CreText('Text_2',503,330,84,50,"EN",'#ffff00','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN")
{
     lang = "EN";
     SetText("","","VN");
}
else
{
 lang = "VN";
     SetText("","","EN");
}
GetDataText();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,_dv,Text_1,_cauhoi,_kq,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,btSubmit,msg,sound,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
