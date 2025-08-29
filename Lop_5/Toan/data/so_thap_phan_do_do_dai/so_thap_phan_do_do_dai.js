folder_Resource ='data/so_thap_phan_do_do_dai';
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
 
    var so1 =  Random(99)+1;
    var denta = dv2  - dv1;
    var so2 =  Random( pow(10,denta ));
    
    for(var k=0;k<1  ;k++)
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
    var xxx = Random(2);
   if(xxx==0)
   {
   	 arrayKq[0] = so1 + so2/pow(10,denta);
  	 SetText("","vt",so1 + textDV1 +" "+ so2 + textDV2 );
 	 SetText("","dv",textDV1 );     			
}
    else
{
	var sothapphan = so1 + so2/pow(10,denta);
	 SetText("","vt",sothapphan + textDV1 );
	 SetText("","dv",textDV2);     
	 arrayKq[0] = sothapphan*pow(10,denta);	
}
        SetText("","check","Submit");			
_bTestAndCreat = false;
	          
	SetText("","msg","");
   	InvalidateObj("","");		
}


function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<1  ;i++)
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
		SetText("","msg","Không chính xác.\r\n kết quả: "+arrayKq[0] + GetText("","dv") );
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
 width: 550,
 height: 380 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,550,380,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',4,258,500,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',14,58,499,29,"Viết số thập phân thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',0,0,549,47,"Viết các số đo độ dài hoặc khối lượng dưới dạng số thập phân",'#000000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',222,220,116,39,"Submit",'#000000','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',509,1,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vt = CreText('vt',26,123,241,33,"V",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',271,123,33,33,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',304,121,106,30,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',20,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv = CreText('dv',410,123,60,33,"dv2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',11,337,499,52,"Đơn vị đo độ dài:        km, hm, dam, m, dm, cm, mm\r\nĐơn vị đo khối lượng: tấn, tạ, yến, kg, hg, dag, g",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_1 = CreText('Text_1',4,168,546,33,"Chú ý: Bạn nhập phần nguyên và phần thập phân cách nhau dấu chấm(.) ",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
Page_1.add(Page_1_Backrounnd,msg,cau_hoi,title,check,score,vt,Text_2,in_0,dv,Text_5,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
