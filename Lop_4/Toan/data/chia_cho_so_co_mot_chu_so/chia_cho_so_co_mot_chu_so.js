folder_Resource ='data/chia_cho_so_co_mot_chu_so';
var _diem =0;
var a_input=["","","","","",""];
var i_input=0;
function  CreateGame()
{
	var sc = Random(7)+3;
	var sbc = (Random(sc-1)+1)*100000 + Random(9 )*10000+ Random(9 )*1000 + Random(9 )*100 + Random(9 )*10+Random(9 );
	
	SetText("","sbc",sbc);
	SetText("","sc",sc );

	 a_input[0] = subString(sbc,0,2)%sc +""+ subString(sbc,2,1);	
	 a_input[1]=  a_input[0] %sc +""+ subString(sbc,3,1);	
	 a_input[2]=  a_input[1]%sc +""+ subString(sbc,4,1);		
	 a_input[3]=  a_input[2]%sc +""+ subString(sbc,5,1);
	a_input[4]= a_input[3]%sc;
	a_input[5]= floor(sbc /sc);

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	for(var i=0;i<6;i++)
	{
		SetFontColor("","in_"+i,"#FFFFFF");
		AllowEditText("","in_"+i,0);
		SetText("","in_"+i, a_input[i]);
	}
	 i_input = Random(6);
	var len = Length(trimStr(a_input[i_input]));
	var tam = "";
	for(var k=0;k<len;k++)
	tam = tam + "?";	
	SetText("","in_"+ i_input,tam );
	SetFontColor("","in_"+i_input,"#FFF237");

	AllowEditText("","in_"+i_input,1);
	SetShowObject("","check",1);
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
			SetText("","m_diem", GetText("","sbc") + " : " + GetText("","sc")+ " = "+  GetText("","in_5") + " dư "+ GetText("","in_4") + "\r\n Đúng"+_diem+" điểm");
			SetColor("","m_diem","#99ff33");				
			Speak("Đúng","VN");
			}
		else {		
		_diem--;
		if(_diem<0) _diem=0;
		SetText("","m_diem","Sai, số đúng là: " +a_input[i_input] + "\r\n " +_diem+" điểm");
		SetColor("","m_diem","#ff9999");		
		}
		SetShowObject("","check",0);
		UpdateScore(_diem);
		SetShowObject("","msg",1);
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,350,'','#000080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000080','0','0','0','','0','0','0','0',0,0,'');
var sc = CreText('sc',200,86,100,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','1',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_5 = CreText('in_5',200,115,100,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','10','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_3 = CreText('Text_3',7,37,275,26,"Điền số còn thiếu vào dấu '?'",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',102,111,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var sbc = CreText('sbc',86,86,102,29,"193456",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,450,30,"Chia cho số có một chữ số",'#000080','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#000080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',181,298,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var in_1 = CreText('in_1',119,141,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_2 = CreText('in_2',135,171,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_3 = CreText('in_3',151,201,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var in_4 = CreText('in_4',151,231,42,30,"23",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var m_diem = CreText('m_diem',91,120,254,141,"Sai.",'#004080','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#004080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',91,120,254,24,"https://gogoedu.vn",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',171,225,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:145});
msg.add(m_diem,Text_2,bt_lam_lai);
Page_1.add(Page_1_Backrounnd,sc,in_5,Text_3,in_0,sbc,Text_1,check,in_1,in_2,in_3,in_4,msg);
stage.add(Page_1);
InitLacVietScript();
};
