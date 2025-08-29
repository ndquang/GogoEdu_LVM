folder_Resource ='/data/Viet_So_thanh_tong_cac_so';
var kq=92823;
var chux="";
var _diem =0;
function  CreateGame()
{
	kq = Random(90000)+1000;
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	SetShowObject("","check",0);
	for(var i=0;i<6;i++)
	{
		SetText("","so"+i,"");
		SetFontColor("","so"+i,"#000000");
	}
	chux= docso(kq);
	//Speak(chux,"VN");
	SetText("","so0",kq);
	if(kq<10000)
		{
			SetShowObject("","cong5",0);
			SetShowObject("","so5",0);
		}
	else	{
		SetShowObject("","cong5",1);
		SetShowObject("","so5",1);
		}
	_diem = GetVer();
	SetShowObject("","check",1);	
	InvalidateObj("","");
}
function  CheckKQ()
{
	var tem=0;
	var c = 10000;
	var n=6;
	var b = true;
	if(kq < 10000 ){
		c= 1000;
		n= 5 ;
	}
	var tempkq = kq;
	var textkq = kq + " = ";
	for(var i=1;i<n;i++)
	{
		tem = tempkq - tempkq %c;
		if(GetText("","so"+i) == tem)
			SetFontColor("","so"+i,"#99ff33");
		else 	{
			SetFontColor("","so"+i,"#ff8888");
			b = false;
			}
		tempkq =  tempkq %c;
		c= c /10;
		if(i!=n-1)
		textkq = textkq +  tem + " + ";
		else textkq = textkq +  tem;
	}
			
	if(b)
		{
			_diem++;			
			SetColor("","m_diem","#99ff33");						
			Speak("Đúng","VN");
		}
	else {		
		SetText("","chu",textkq);
		SetColor("","m_diem","#ff9999");
		//Speak("Sai." + textkq  ,"VN");
		_diem--;
	}
	if ( _diem < 0 ) _diem = 0;
		SetText("","m_diem",_diem+ " Điểm");
		UpdateScore(_diem);
		SetShowObject("","msg",1);
}
var mangso = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
function dochangchuc(so,daydu)
{
    var chuoi = "";
    chuc = Math.floor(so/10);
    donvi = so%10;
    if (chuc>1) {
        chuoi = " " + mangso[chuc] + " mươi";
        if (donvi==1) {
            chuoi += " mốt";
        }
    } else if (chuc==1) {
        chuoi = " mười";
        if (donvi==1) {
            chuoi += " một";
        }
    } else if (daydu && donvi>0) {
        chuoi = " lẻ";
    }
    if (donvi==5 && chuc>=1) {
        chuoi += " lăm";
    } else if (donvi>1||(donvi==1&&chuc==0)) {
        chuoi += " " + mangso[ donvi ];
    }
    return chuoi;
}
function docblock(so,daydu)
{
    var chuoi = "";
    tram = Math.floor(so/100);
    so = so%100;
    if (daydu || tram>0) {
        chuoi = " " + mangso[tram] + " trăm";
        chuoi += dochangchuc(so,true);
    } else {
        chuoi = dochangchuc(so,false);
    }
    return chuoi;
}
function dochangtrieu(so,daydu)
{
    var chuoi = "";
    trieu = Math.floor(so/1000000);
    so = so%1000000;
    if (trieu>0) {
        chuoi = docblock(trieu,daydu) + " triệu";
        daydu = true;
    }
    nghin = Math.floor(so/1000);
    so = so%1000;
    if (nghin>0) {
        chuoi += docblock(nghin,daydu) + " nghìn";
        daydu = true;
    }
    if (so>0) {
        chuoi += docblock(so,daydu);
    }
    return chuoi;
}
function docso(so)
{
        if (so==0) return mangso[0];
    var chuoi = "", hauto = "";
    do {
        ty = so%1000000000;
        so = Math.floor(so/1000000000);
        if (so>0) {
            chuoi = dochangtrieu(ty,true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty,false) + hauto + chuoi;
        }
        hauto = " tỷ";
    } while (so>0);
    return chuoi;
}  

function Page_1()
{
CreateGame();
SetMoveView( "", "msg", 1 );
for ( var i = 1; i <= 5; i++ )
    AllowEditText( "", "so" + i, 1 );
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
 width: 680,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var chu = CreText('chu',308,58,316,27,"8723 = 8000 + 700 + 20 + 3",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',69,58,247,27,"Viết số thành tổng các số theo mẫu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',128,10,396,38,"ÔN TẬP CÁC SỐ ĐẾN 100 000",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so0 = CreText('so0',13,95,81,42,"",'#e5e5e5','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',127,94,81,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',242,94,81,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so3 = CreText('so3',357,94,81,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so4 = CreText('so4',472,94,81,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so5 = CreText('so5',591,94,81,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',201,137,308,146,"Sai.",'rgba(163,255,70,1.11)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',201,137,308,26,"https://gamechocon.com",'rgba(192,192,192,1.11)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(223,223,223,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',313,243,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var check = CreText('check',549,151,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:312,height:150});
msg.add(m_diem,t_mess,bt_lam_lai);
var Text_2 = CreText('Text_2',93,98,34,37,"=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',208,97,34,37,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',323,98,34,37,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',438,99,34,37,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cong5 = CreText('cong5',553,98,34,37,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(chu,title,Text_1,so0,so1,so2,so3,so4,so5,check,msg,Text_2,Text_3,Text_4,Text_5,cong5);
stage.add(Page_1);
InitLacVietScript();
};
