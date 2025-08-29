folder_Resource ='/data/phep_nhan_va_phep_chia_so_tu_nhien';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
var _score = 0;
var _reply = 0;

var kq = ["","","",""];
var m_bien = "y";
function  CreateGame()
{
	/*------------------ nhan ---------------------*/	
	var a =  Random(10000)+100;
	var b =  Random(10)+1;
	var c = a*b;
	var ta= "1) " +  m_bien + " x " +  b + " = " + c;
	SetText("","a",ta);
	kq[0]= m_bien + " = " + c + " : " + b;
	kq[1]= m_bien + " = " + a;

	/*------------------ chia  ---------------------*/
	
	a =  Random(10000)+100;
	b =  Random(10)+1;
	while(a%b!=0)
	{
		a =  Random(10000)+100;
		b =  Random(10)+1;
	}
	c = a/b;
	ta= "2) " +  m_bien + " : " +  b + " = " + c;
	SetText("","b",ta);
	kq[2]= m_bien + " = " + c + " x " + b;
	kq[3]= m_bien + " = " + a;
	for(var i=0;i<4;i++)
	{
	SetText("","kq"+i,"");
	SetFontColor("","kq"+i,"#0000ff");
	}
	_reply=0;
	SetShowObject("","msg",0);
	InvalidateObj("","");
}

function  CheckKQ()
{
	var b = true;
	var m_diem=0;
	for(var i=0;i<4;i++)
	{
		var input= GetText("","kq"+i);
		if(input=="")
		{
			SetText("","m_diem","⚠ Bạn chưa làm hết các bài tập.");
			SetShowObject("","msg",1);
			InvalidateObj("","");
			return;
		}
		if(replaceStr(kq[i]," ",'') != replaceStr(input," ",''))
			{
			SetFontColor("","kq"+i,"#ff9999");
			 b = false;
			}
		else 	{
			SetFontColor("","kq"+i,"#80ff80");
			 m_diem= m_diem +0.5;
			}

	}
		if(b==true)
		{
			SetText("","m_diem","✅   Bạn được cộng "+m_diem+ " điểm");
		}
	  else {
		SetText("","m_diem", "❌ Cần xem lại lỗi sai "+ m_diem + " điểm");
		}
		_score=_score+m_diem;
		UpdateScore(round(_score));
		SetShowObject("","msg",1);
		_reply=1;
		InvalidateObj("","");
}
function Page_1()
{
CreateGame();
SetMoveView("","msg",1);
_score =GetVer();
for(var i=0;i<4;i++)
	{
		AllowEditText("","kq"+i,1);
}

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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#c0ffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',-1,-1,600,81,"PHÉP NHÂN VÀ PHÉP CHIA SỐ TỰ NHIÊN",'#ff0000','#ffffff','#ffffff','#ffffff','',24,'Segoe UI Black','Bold','right','middle',0,'0.00','0','0',1,'#000000','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',1,-1,85,80,"Bài",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','top',1,'0.00','0','0',4,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',3,1.50);
var u_1 = CreText('u_1',616,7,54,21,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a = CreText('a',25,106,279,27,"1)  y + 257 = 1982",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq0 = CreText('kq0',58,142,211,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',268,360,110,36,"Kiểm tra",'#40e0d0','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var kq1 = CreText('kq1',59,179,211,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2 = CreText('kq2',344,142,211,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3 = CreText('kq3',344,179,211,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',12,20,60,60,"5",'#ffd700','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','bottom',2,'0.00','0','0',4,'#ffffff','#ffd700','0','0','#ff0000','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var b = CreText('b',301,106,262,27,"2)  y - 257 = 1982",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',149,159,308,146,"Sai.",'rgba(192,255,255,1.11)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(175,238,238,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',260,267,96,30,"OK",'#c0ffff','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#40e0d0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if( _reply ==1)
CreateGame();
SetShowObject("","msg",0);
InvalidateObj("","");
  return;
}
 );
var t_mess = CreText('t_mess',149,160,308,26,"https://gogoedu.vn",'rgba(64,224,208,1.11)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(192,255,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:314,height:150});
msg.add(m_diem,bt_lam_lai,t_mess);
Page_1.add(Page_1_Backrounnd,Text_1,Text_6,u_1,a,kq0,check,kq1,kq2,kq3,Text_16,b,msg);
stage.add(Page_1);
InitLacVietScript();
};
