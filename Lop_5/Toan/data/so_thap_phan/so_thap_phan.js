folder_Resource ='data/so_thap_phan';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
var arrayDD = ["km","hm","dam","m","dm","cm","mm"];
var arrayKL = ["tấn", "tạ", "yến", "kg", "hg", "dag", "g"];
var arrayTG  =["thế kỷ", "năm", "tháng","ngày", "giờ", "phút","giây"];
function  InitScore()
{	
	_score =GetVer();	
	InvalidateObj("","");
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	SetDigitEditText("","in_2","number");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
      var dv1  = Random(7);
      var dv2  = Random(7);

      while(dv1 >= dv2 )
	{
	 dv1  = Random(7);
	 dv2  = Random(7);
	}
 
    var so =  Random(9)+1;
   
   arrayKq[0] = so;
    var denta = dv2  - dv1;
    arrayKq[1] = pow(10,denta );
     arrayKq[2] =  arrayKq[0] /arrayKq[1] ;
arrayKq[3] = pow(10,denta );

  for(var k=0;k<3  ;k++)
{
SetText("","in_"+k,"");
SetFontColor("","in_"+k,"#000000");
AllowEditText("","in_"+k,1);
}

   var th = Random(2);
    var textDV1 = arrayDD[dv1];
    var textDV2 = arrayDD[dv2];
    if(th==1)
	{
	 textDV1 = arrayKL[dv1];
	textDV2 = arrayKL[dv2];
	}
   SetText("","vt",so + textDV2);
   SetText("","dv1",textDV1 );
   SetText("","dv2",textDV1 );
               			
        SetText("","check","Submit");			
_bTestAndCreat = false;
	          
	SetText("","msg","");
   	InvalidateObj("","");		
}


function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<3  ;i++)
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
		//UpdateScore( _score);
	         }
	else{
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.\r\n kết quả: "+arrayKq[0] + "/"+ arrayKq[1] + " và " +  arrayKq[2] );
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
 height: 380 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,380,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',156,129,71,65,"",'#e2e2e2','#e2e2e2','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#e2e2e2','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',4,258,500,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',12,68,499,29,"Theo mẫu:  7dm =        m = 0,7m",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',0,0,500,47,"Viết số thập phân thích hợp vào ô trống",'#8000ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',198,220,116,39,"Submit",'#8000ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var in_0 = CreText('in_0',156,129,65,32,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',156,161,71,32,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vt = CreText('vt',-9,147,117,33,"V",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',113,147,33,33,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',270,147,33,33,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_2 = CreText('in_2',298,147,106,33,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv1 = CreText('dv1',236,147,42,33,"dv1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv2 = CreText('dv2',403,146,60,33,"dv2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',190,54,26,31,"7",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',192,81,26,26,"10",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','1','0',2,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',11,337,499,52,"Đơn vị đo độ dài:        km, hm, dam, m, dm, cm, mm\r\nĐơn vị đo khối lượng: tấn, tạ, yến, kg, hg, dag, g",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Italic','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
Page_1.add(Page_1_Backrounnd,Text_1,msg,cau_hoi,title,check,score,in_0,in_1,vt,dau,Text_2,in_2,dv1,dv2,Text_3,Text_4,Text_5);
stage.add(Page_1);
InitLacVietScript();
};
