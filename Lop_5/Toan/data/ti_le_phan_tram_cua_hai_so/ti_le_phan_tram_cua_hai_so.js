folder_Resource ='data/ti_le_phan_tram_cua_hai_so';
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
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}

function  CreateQuestion()
{
       var so0  = Random(99)+1;
       var so1  = Random(99)+1; 
       var xxx = so0 /so1;
      /*
       if(trimStr(xxx).split(".")[1].length > 4)
	xxx  = parseFloat(xxx).toFixed(4);
             arrayKq[0] = xxx*100;       

	var arrayNumber = arrayKq[0].toString().split(".");
    	 if(arrayNumber[1].length > 4)
                  {
		var tp = subString(arrayNumber[1],0,4);
		arrayKq[0] = parseFloat(arrayNumber[0]+tp/10000);
                  }	  
        */
       SetText("","so0",so0  + " và " + so1);

     for(var k=0;k<1  ;k++)
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
	 for(var i=0;i<1  ;i++)
	{
		if(GetText("","in_"+i)==arrayKq [i])			
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
		SetText("","msg","Không chính xác.\r\n kết quả: " + arrayKq[0] + "%" );
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

 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 540,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,540,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',1,247,538,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var so0 = CreText('so0',80,129,143,32,"3",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi = CreText('cau_hoi',11,52,515,74,"Tính tỷ lệ phần trăm của hai số(theo mẫu)\r\n   Mẫu : 19 : 30 = 0.6333...x 100 = 63.33%",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var title = CreText('title',0,0,540,47,"Tỉ số phần trăm",'#a52a00','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#a52a00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',222,176,116,39,"Submit",'#a52a00','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#a52a00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',492,4,39,39,"2",'#ff6820','#ffffff','#ffff00','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',330,128,31,31,"%",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',228,129,93,32,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',21,232,527,39,"Chú ý: Nếu phần thập phân của thương lớn hơn 4 chữ số thì chỉ lấy đến 4 chữ số",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,msg,so0,cau_hoi,title,check,score,Text_3,in_0,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
