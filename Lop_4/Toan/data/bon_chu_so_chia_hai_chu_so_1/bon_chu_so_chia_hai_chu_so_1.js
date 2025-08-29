folder_Resource ='data/bon_chu_so_chia_hai_chu_so_1';
var _diem =0;
var a_input=["","","","","","",""];
var i_input=0;
var _bTestAndCreat = false;
function  CreateGame()
{
	var sc = Random(90)+10;
	var sbc = (Random(100-sc )+sc )*100 + Random(9 )*10 + Random(9) ;
	
	SetText("","sbc",sbc);
	SetText("","sc",sc );

	var _2so = subString(sbc,0,2);

	 a_input[0] = floor( _2so/sc)*sc;
	 a_input[1]=  (_2so -  a_input[0])*10 +  subString(sbc,2,1);
	 a_input[2]=  floor( a_input[1]/sc)*sc;
	 a_input[3]=  (a_input[1]-  a_input[2])*10 +  subString(sbc,3,1);
	 a_input[4]= floor( a_input[3]/sc)*sc;
	 a_input[5]=a_input[3]-  a_input[4];
	 a_input[6]=floor(sbc/sc);

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	for(var i=0;i<7;i++)
	{
		SetFontColor("","in_"+i,"#FFFFFF");
		AllowEditText("","in_"+i,0);
		SetText("","in_"+i, a_input[i]);
	}
	 i_input = Random(7);
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
			SetText("","msg", GetText("","sbc") + " : " + GetText("","sc")+ " = "+  GetText("","in_4") + " dư "+ GetText("","in_3") + "\r\n Đúng "+_diem+" điểm");
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
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,400,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',1,324,448,75,"Sai.",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',164,302,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var in_5 = CreText('in_5',157,257,65,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var sc = CreText('sc',232,74,76,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_6 = CreText('in_6',232,103,76,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_3 = CreText('Text_3',7,37,275,26,"Điền số đúng vào dấu '?'",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',157,103,60,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var sbc = CreText('sbc',151,74,69,29,"1234",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,450,30,"Chia số có bốn chữ số cho hai chữ số",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',152,133,56,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_2 = CreText('in_2',152,163,56,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_3 = CreText('in_3',155,193,68,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_4 = CreText('in_4',171,223,53,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
Page_1.add(Page_1_Backrounnd,msg,check,in_5,sc,in_6,Text_3,in_0,sbc,Text_1,in_1,in_2,in_3,in_4);
stage.add(Page_1);
InitLacVietScript();
};
