folder_Resource ='data/chia_cho_so_co_ba_chu_so_1';
var _diem =0;
var a_input=["","","",""];
var i_input=0;
var _bTestAndCreat = false;
function  CreateGame()
{
	var sc = (Random(9)+1)*100 +  (Random(9)+1)*10 +  (Random(9)+1);
	var sbc = (Random(sc-100 )+100 )*1000  +  Random(9 )*100+  Random(9 )*10+Random(9 ) ;
	
	SetText("","sbc",sbc);
	SetText("","sc",sc );

	var _4so = subString(sbc,0,4);

	 a_input[0] = (_4so - floor( _4so/sc)*sc) +  trimStr(subString(sbc,4,1));
	 a_input[1] = (a_input[0] - floor(  a_input[0]/sc)*sc) +  trimStr(subString(sbc,5,1));
	  a_input[2] = (a_input[1] - floor(  a_input[1]/sc)*sc);
	 a_input[3]=floor(sbc/sc);

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	for(var i=0;i<4;i++)
	{
		SetFontColor("","in_"+i,"#FFFFFF");
		AllowEditText("","in_"+i,0);
		SetText("","in_"+i, a_input[i]);
	}
	 i_input = Random(4);
	var len = Length(trimStr(a_input[i_input]));

	var tam = "";
	for(var k=0;k<len;k++)
	tam = tam + "?";
	
	SetText("","in_"+ i_input,tam );
	SetFontColor("","in_"+i_input,"#FFF237");
	AllowEditText("","in_"+i_input,1);	
	SetText("","check","Submit");	
	_bTestAndCreat = false;
	SetShowObject("","msg",0);		
	InvalidateObj("","");
}
function  CheckKQ()
{	
		
		var kq = true;
		if(GetText("","in_"+i_input)==a_input[i_input])			
			SetFontColor("","in_"+i_input,"#00ff00");	
		else {
			SetFontColor("","in_"+i_input,"#ff0000");
			 kq = false;;
		       }
		AllowEditText("","in_"+i_input,0);
				
		if(kq == true)
			{	
			_diem++;
			SetText("","msg", GetText("","sbc") + " : " + GetText("","sc")+ " = "+  GetText("","in_3") + " dư "+ GetText("","in_2") + "\r\n Đúng "+_diem+" điểm");
			SetFontColor("","msg","#ffffff");				
			PlaySound("sound_good");
			}
		else {		
		_diem--;
		if(_diem<0) _diem=0;
		SetText("","msg","Sai, số đúng là: " +a_input[i_input] + "\r\n " +_diem+" điểm");
		SetFontColor("","msg","#ff0000");	
		PlaySound("sound_bad");	
		}
		_bTestAndCreat= true;
		UpdateScore(_diem);
		SetShowObject("","msg",1);		
		SetText("","check","Next");
		InvalidateObj("","");

}
function Page_1()
{
SetDigitEditText("","so2","number");
SetDigitEditText("","so3","number");
SetDigitEditText("","so4","number");
for(var i=0;i<6;i++)
	{
		SetDigitEditText("","in_"+i,"number");
	}

CreateGame();
SetMoveView("","msg",1);
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
 width: 450,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,350,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',1,251,450,98,"Sai.",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',167,234,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateGame();
else
CheckKQ();
  return;
}
 );
var sc = CreText('sc',208,74,76,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','1',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_3 = CreText('in_3',208,103,76,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_3 = CreText('Text_3',7,37,275,26,"Điền số đúng vào dấu '?'",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',91,99,92,30,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var sbc = CreText('sbc',73,74,123,29,"134567",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,450,30,"Chia cho số có ba chữ số",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',126,129,70,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_2 = CreText('in_2',140,156,56,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
Page_1.add(Page_1_Backrounnd,msg,check,sc,in_3,Text_3,in_0,sbc,Text_1,in_1,in_2);
stage.add(Page_1);
InitLacVietScript();
};
