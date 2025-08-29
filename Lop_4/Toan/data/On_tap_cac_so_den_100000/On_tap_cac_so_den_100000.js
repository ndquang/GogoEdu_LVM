folder_Resource ='/data/On_tap_cac_so_den_100000';
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
	_cSubmit =0;
}
var kq=92823;
var chux="";
function  CreateGame()
{
	kq = Random(90000)+10000;
	SetShowObject("","msg",0);
	SetShowObject("","btSubmit",1);
	for(var i=0;i<6;i++)
	{
		SetText("","so"+i,"");
	}
	chux= docso(kq);
	Speak(chux,"VN");
	SetText("","chu",chux);
	InvalidateObj("","");
}
function  CheckKQ()
{
	SetShowObject("","btSubmit",0);
	var tem=0;
	var c= 10000;
	for(var i=1;i<6;i++)
	{
		tem=tem+GetText("","so"+i)*c;
		c=c/10;
	}
	if(tem==GetText("","so0") && tem==kq)
		{
			_cSubmit ++;
			_score++;
			SetText("","t_mess","https://gamechocon.com");
			SetText("","m_diem", _score + "Điểm");
			SetColor("","m_diem","#99ff33");
			Speak("Bạn làm tốt lắm.","VN");			
			SetColorEx("","score"+_cSubmit,"#80ff00");
			SetText("","score"+_cSubmit,_score);

		}
	else {
		_score--;
		SetText("","m_diem"," Không chính xác");
		SetText("","t_mess","Số đúng là: " +  kq);
		SetColor("","m_diem","#ff9999");
		Speak("Không chính xác","VN");
		SetColorEx("","score"+_cSubmit ,"#dddddd");
		SetText("","score"+_cSubmit ,"");
		_cSubmit --;
		}
		UpdateScore( _score);
		if(_cSubmit== 0 || _score<0)
		InitScore();
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
 InitScore();
SetMoveView("","msg",1);
for(var i=0;i<6;i++)
	{
		AllowEditText("","so"+i,1);
		SetDigitEditText("","so"+i,"number");
	}
CreateGame();
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
 height: 370 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,680,370,'','#005e5e','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005e5e','0','0','0','','0','0','0','0',0,0,'');
var chu = CreText('chu',16,55,605,36,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',614,54,36,35,"",'#ffff88','#80ff00','#ffe4e1','#ffffff','ID_IMAGE_IF_SOUND_LOW_64688.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff88','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(docso(kq),"VN");
  return;
}
 );
var title = CreText('title',10,32,249,27,"Nghe đọc và viết lại:",'rgba(0,0,0,0)','#ffffff','#e6e6fa','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(docso(kq),"VN");
  return;
}
 );
var Text_1 = CreText('Text_1',144,1,396,38,"ÔN TẬP CÁC SỐ ĐẾN 100 000",'rgba(0,0,0,0)','#ffffff','#e6e6fa','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',13,89,115,46,"Viết số\r\n56328",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',129,89,111,46,"Chục nghìn\r\n5",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',241,89,111,46,"Nghìn\r\n6",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',353,89,111,46,"Trăm\r\n3",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',465,89,111,46,"Chục\r\n2",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',577,89,98,46,"Đơn vị\r\n8",'rgba(255,255,255,0.44)','#ffffff','#dddddd','#c0c0c0','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so0 = CreText('so0',13,136,115,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',129,136,111,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',241,136,111,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so3 = CreText('so3',353,136,111,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so4 = CreText('so4',465,136,111,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so5 = CreText('so5',577,136,98,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',194,185,308,146,"Sai.",'rgba(163,255,70,0.89)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,0.89)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',193,185,308,26,"https://gamechocon.com",'rgba(192,192,192,1.11)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(223,223,223,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',305,291,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var btSubmit = CreText('btSubmit',563,182,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:312,height:150});
msg.add(m_diem,t_mess,bt_lam_lai);
var score1 = CreText('score1',170,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score2 = CreText('score2',207,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score3 = CreText('score3',244,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score4 = CreText('score4',281,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score5 = CreText('score5',318,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score6 = CreText('score6',355,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score7 = CreText('score7',392,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score8 = CreText('score8',429,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score9 = CreText('score9',466,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score10 = CreText('score10',507,339,25,26,"",'#c0c0c0','#c0c0c0','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,chu,Text_8,title,Text_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_7,so0,so1,so2,so3,so4,so5,btSubmit,msg,score1,score2,score3,score4,score5,score6,score7,score8,score9,score10);
stage.add(Page_1);
InitLacVietScript();
};
