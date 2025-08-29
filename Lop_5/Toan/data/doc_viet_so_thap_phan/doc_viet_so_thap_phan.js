folder_Resource ='data/doc_viet_so_thap_phan';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
function  InitScore()
{	
	_score =GetVer();	
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}
var chuso="";

function  CreateQuestion()
{
     var sizeN = 10;
      var sizeM = 10;
      var th = Random(3);
      if(th == 1)
	sizeN = 100;
      else if(th == 2)
	sizeN = 1000;

        th = Random(3);
          if(th == 1)
	sizeM = 100;
      else if(th == 2)
	sizeM = 1000;

      var dv1  = Random(sizeN);
      var dv2  = Random(sizeM);      

   arrayKq[0] = dv1;
   arrayKq[1] = dv2;
chuso = docso(dv1) + " phẩy" +  docso(dv2);
Speak(chuso,"VN");
SetText("","cau_hoi",chuso );
      for(var k=0;k<2  ;k++)
{
SetText("","in_"+k,"");
SetFontColor("","in_"+k,"#000000");
AllowEditText("","in_"+k,1);
}              			
        SetText("","check","Submit");			
        _bTestAndCreat = false;	          
        SetText("","msg","");
         InvalidateObj("","");		
}


function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<2  ;i++)
	{
		if(GetText("","in_"+i)==trimStr(arrayKq [i]))			
		SetFontColor("","in_"+i,"#00ff00");	
	else {
		SetFontColor("","in_"+i,"#ff0000");
		kq = false;;
                         }
	AllowEditText("","in_"+i,0);	
	}
	if(kq==true){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	         }
	else{
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.\r\n kết quả: "+arrayKq[0] + ","+ arrayKq[1]);
		PlaySound("sound_not");		
		_score--;			
		}
            if(_score<0)
		_score = 0;
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	InvalidateObj("","");
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
CreateQuestion();
  return;
}

function Page_1_OnTimer()
{
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
 width: 500,
 height: 360 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,360,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_2 = CreText('Text_2',222,144,33,33,",",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',4,258,500,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',7,54,447,62,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',0,0,500,47,"Đọc viết số thập phân",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',180,220,116,39,"Submit",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var score = CreText('score',449,5,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',178,133,56,41,"",'#eaeaea','#eaeaea','#282828','#ffffff','',24,'Arial','Normal','right','bottom',0,'0.00','0','0',1,'#0080ff','#eaeaea','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',3,1.50);
var in_1 = CreText('in_1',244,133,57,41,"",'#eaeaea','#eaeaea','#282828','#ffffff','',24,'Arial','Normal','left','bottom',0,'0.00','0','0',1,'#0080ff','#eaeaea','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',3,1.50);
var Text_8 = CreText('Text_8',451,68,36,35,"",'#ffff88','#80ff00','#ffe4e1','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff88','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(chuso,"VN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_2,msg,cau_hoi,title,check,score,in_0,in_1,Text_8);
stage.add(Page_1);
InitLacVietScript();
};
