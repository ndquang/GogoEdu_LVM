folder_Resource ='data/Don_vi_do_khoi_luong';
var a_DV =["tấn","tạ","yến","kg","hg","dag","g"];
var b_ =[1,10,100,1000,10000,100000,1000000];
var _result = 0;
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
function  ramdomNew(){
var _x = Random(100);
var a= Random(7);
var b= Random(7);
SetShowObject("","msg",0);
while(a==b)
	b= Random(7);
if(a<b)
	_result = _x * b_[b-a];
else {
	_result = _x;
	_x = _x * b_[a-b];
}
SetText("","_vt", _x +a_DV[a] + " = ");
SetText("","_vp",a_DV[b]);
SetText("","_kq","");
SetShowObject("","btSubmit",1);	
PlaySound("sNewGame");
InvalidateObj("","");
}
function  Submit()
{
	SetShowObject("","btSubmit",0);	
	
	if(GetText("","_kq")==_result  ){
		_cSubmit ++;
		SetFontColor("","msg","#80ff00");
		SetText("","msg","Bạn làm tốt lắm.");
		Speak("Bạn làm tốt lắm.","VN");
		_score++;
		SetColorEx("","score"+_cSubmit,"#80ff00");
		SetText("","score"+_cSubmit,_score);
		Delay("ramdomNew()",3500);
		}
	else{
		SetFontColor("","msg","#ff3300");
		SetText("","msg","Xin lỗi, không chính xác: "+_result );
		Speak("Xin lỗi, không chính xác","VN");
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
	InvalidateObj("","");
	

}
function Page_1()
{
AllowEditText("","_kq",1);
InitScore();
ramdomNew();
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,350,'','#005b5b','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005b5b','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',1,2,797,45,"Thực hành đơn vị đo khối lượng",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',30,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _vt = CreText('_vt',45,185,283,41,"30 ta =",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',330,185,139,41,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _vp = CreText('_vp',472,185,104,41,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',23,92,108,40,"1tấn = 10tạ",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',131,92,108,40,"1tạ = 10yến",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',239,92,108,40,"1yến = 10kg",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',347,92,108,40,"1kg = 10hg",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',455,92,108,40,"1hg = 10dag",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',563,92,108,40,"1dag = 10g",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',671,92,108,40,"1000g = 1kg",'#005e5e','#005e5e','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',580,194,128,32,"Submit",'#80ff00','#ffffff','#ffffff','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',2,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Submit();
  return;
}
 );
var Text_10 = CreText('Text_10',26,136,616,42,"Nhập số thích hợp vào ô trống.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score1 = CreText('score1',234,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',271,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',308,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',345,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',382,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',419,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',456,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',493,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',530,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',571,319,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',61,242,685,66,"good work",'#ffffff','#ffffff','#80ff00','#ffffff','',36,'Arial','Bold Italic','center','middle',12,'0.00','4','4',1,'#000000','#ffffff','0','0','#7f7f7f','0','0','4','1',3,3,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ramdomNew();
  return;
}
 );
var Text_9 = CreText('Text_9',23,58,756,35,"tấn        tạ        yến       kg         hg        dag        g",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,title,_vt,_kq,_vp,Text_2,Text_3,Text_4,Text_5,Text_6,Text_7,Text_8,btSubmit,Text_10,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10,msg,Text_9);
stage.add(Page_1);
InitLacVietScript();
};
