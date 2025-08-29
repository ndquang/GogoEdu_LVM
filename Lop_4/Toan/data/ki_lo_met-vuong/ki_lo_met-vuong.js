folder_Resource ='data/ki_lo_met-vuong';
var _diem =0;
var kq =0;
function  CreateGame()
{
	
	var so0 = Random(90)+1;
              	var x = Random(4);
	var y = Random(2);
	var co_le = Random(2);
	if(x==0) // km=>m
		{		
		if(y==0)
		{
			if(co_le==0)
			{
			SetText("","so0",so0 + "km² " );
			SetText("","so1", "m² ");
			kq=so0*1000000;
			}
			else if(co_le==1)
			{
			var sole = Random(99999);
			SetText("","so0",so0 + "km² " +sole +  "m²" );
			SetText("","so1", "m² ");
			kq=so0*1000000 + sole;
			}
		}
		else
		{
			kq=so0;
			so0=so0*1000000;
			SetText("","so0",so0 + "m² ");
			SetText("","so1", "km² ");
		}
	}
	else if(x==1) //dm => cm

		{
			if(y==0)
			{
				if(co_le==0)
				{
				SetText("","so0",so0 + "dm² ");
				SetText("","so1", "cm² ");
				kq=so0*100;
				}
				else 
				{
				var sole = Random(99)+1;
				SetText("","so0",so0 + "dm² " + sole +"cm²");
				SetText("","so1", "cm² ");
				kq=so0*100 + sole;
				}
			}
			else
			{
				kq=so0;
				so0=so0*100;
				SetText("","so0",so0 + "cm² ");
				SetText("","so1", "dm² ");			
			}

		}
	else if(x==2) // m = dm
	{
		if(y==0)
		{
			if(co_le==0)
			{
			SetText("","so0",so0 + "m² ");
			SetText("","so1", "dm² ");
			kq=so0*100;
			}
			else
			{
			var sole = Random(99)+1;
			SetText("","so0",so0 + "m² " + sole + "dm² " );
			SetText("","so1", "dm² ");
			kq=so0*100+sole ;
			}
		}
		else
		{
		  	kq=so0;
			so0=so0*100;
			SetText("","so0",so0 + "dm² ");
			SetText("","so1", "m² ");	
		}
	}
	else if(x==3) // m = cm
	{
		if(y==0)
		{
			if(co_le==0)
			{
			SetText("","so0",so0 + "m² ");
			SetText("","so1", "cm² ");
			kq=so0*10000;
			}
			else
			{
			var sole = Random(999)+1;
			SetText("","so0",so0 + "m² " + sole + "cm² " );
			SetText("","so1", "m² ");
			kq=so0*10000+sole ;
			}
		}
		else
		{
		  	kq=so0;
			so0=so0*10000;
			SetText("","so0",so0 + "cm² ");
			SetText("","so1", "m² ");	
		}
	}
	SetText("","so2","");
	AllowEditText("","so2",1);
	_diem = GetVer();	
	SetShowObject("","msg",0);
	SetFontColor("","so2","#0000FF");
	InvalidateObj("","");
}
function  CheckKQ()
{	
		if(GetText("","so2")==kq)
			{	
			_diem++;
			SetText("","m_diem",_diem+" điểm, Đúng");
			SetColor("","m_diem","#99ff33");
			SetFontColor("","so2","#00ff00");		
			//Speak("Đúng","VN");
		}
	else {
		_diem--;
		if(_diem<0) _diem=0;
		SetText("","m_diem","Bạn bị trừ 1 điểm: "+ _diem + "\r\nKết quả là: " +kq);
		SetColor("","m_diem","#ff9999");
		SetFontColor("","so2","#ff0000");		
		}
		UpdateScore(_diem);
		SetShowObject("","msg",1);
		AllowEditText("","so2",0);
		InvalidateObj("","");
}
function Page_1()
{
SetDigitEditText("","so2","number");
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
 height: 250 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,250,'','#ffb7ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffb7ff','0','0','0','','0','0','0','0',0,0,'');
var so0 = CreText('so0',16,64,191,28,"123456",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',348,64,49,28,"4",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',204,64,32,28,"=",'rgba(0,0,0,0)','#ffffff','#0000ff','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',236,64,109,28,"99000000",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',10,32,306,27,"Nhập số thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,452,30,"Ki-lô-mét vuông(km²)",'#ff00ff','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',238,106,89,35,"Kiểm tra",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#ff0000','#a52a00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var m_diem = CreText('m_diem',94,96,254,141,"Sai.",'rgba(255,0,255,1.02)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','rgba(255,0,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',176,200,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var Text_2 = CreText('Text_2',94,96,254,24,"https://gogedu.vn",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:146});
msg.add(m_diem,Text_2,bt_lam_lai);
Page_1.add(Page_1_Backrounnd,so0,so1,dau,so2,title,Text_1,check,msg);
stage.add(Page_1);
InitLacVietScript();
};
