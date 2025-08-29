folder_Resource ='data/tim_x_chia_cho_so_co_hai_chu_so';
var _diem =0;
var a_input=["","","","","","",""];
var i_input=0;
var _bTestAndCreat = false;
function  CreateGame()
{
	var sc = Random(90)+10;
	a_input[0] =  Random(90)+10; //x
	var sum = sc *  a_input[0] ;	
	var xxx = Random(2);
	if(xxx == 1)
	{
		a_input[0] =  Random(800)+100;
		sc = Random(99)+10;
		sum = sc *  a_input[0] ;
		while(sum>99999)
		{
			sc = Random(99)+10;
			a_input[0] =  Random(500)+100;
			sum = sc *  a_input[0] ;
		}
		
	}
	
	SetText("","sbc","y x " + sc  + " = " + sum + "\r\ny = " + sum + " : " + sc + "\r\ny = ");

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	for(var i=0;i<1;i++)
	{
		SetFontColor("","in_"+i,"#FFFFFF");
		AllowEditText("","in_"+i,0);
		SetText("","in_"+i, a_input[i]);
	}
	 i_input =0;
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
			SetText("","msg", "Đúng "+_diem+" điểm");
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
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,300,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var sbc = CreText('sbc',112,50,293,133,"1234 X x = 23\r\nx = 23213 : 23\r\nx = ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var msg = CreText('msg',1,216,448,85,"Sai.",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',173,195,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',7,37,275,26,"Tìm y:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',168,120,60,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_1 = CreText('Text_1',-1,0,450,30,"Chia cho số có hai chữ số:",'#005e5e','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#005e5e','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,sbc,msg,check,Text_3,in_0,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
