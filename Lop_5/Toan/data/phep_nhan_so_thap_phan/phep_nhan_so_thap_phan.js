folder_Resource ='data/phep_nhan_so_thap_phan';
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
function  genRand( min,  max,  decimalPlaces) {  
   // var rand =Random(max-min) + min;
    var rand = Math.random() * (max - min) + min;
    var power = pow(10, decimalPlaces);
    return floor(rand*power) / power;
}
function  CreateQuestion()
{
       var dc1 = Random(3)+1;
       var dc2 = Random(3)+1;

       var so_0  =  genRand(10 ,90,dc1 );
      var so_1 = genRand(1 ,10,dc2);
       var phep = Random(4);
    if (phep == 0) {  //nhan voi so tu nhien
	so_1 = Random(10)+1;                
    }
    else   if (phep == 1) { //nhan voi 10,100,1000
	 dc2 = Random(3)+1;
	 so_1 = pow(10,dc2 );   
	dc1 = dc1 -     dc2      ;
           }
    else if (phep == 2) 
	{
	 dc2 = Random(3)+1;
	so_0  =  genRand(0 ,10,dc1 );
	so_1  =  genRand(0 ,10,dc2 );
	dc1 = dc1 +   dc2    ;  

	}
       else if (phep == 3) // nhan voi 0.01
	{
	so_0  =  genRand(100 ,500,dc1 );
	so_1  =  1/pow(10, dc2);    
	dc1 = dc1 +   dc2      ;
	
	}
       arrayKq[0] = (so_0*so_1).toFixed(dc1);
       SetText("","so_0", so_0  + " x " + so_1  +  " = " );
     	SetText("","in_0","");
	SetFontColor("","in_0","#000000");
	AllowEditText("","in_0",1);
			
        SetText("","check","Submit");			
           _bTestAndCreat = false;	          
	SetText("","msg","");
	SetShowObject("","msg",0);
	SetShowObject("","score",0);

   	InvalidateObj("","");		
}


function  ChamDiem()
{	
              	if(GetText("","in_0")==arrayKq [0])	
	{	
		SetFontColor("","in_0","#00ff00");	
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	}
	else 
	{
		SetFontColor("","in_0","#ff0000");
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.\r\n"+arrayKq[0]);
		PlaySound("sound_not");		
		_score--;	
	 }
	SetShowObject("","msg",1);
	SetShowObject("","score",1);
	AllowEditText("","in_0",0);	
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
 width: 500,
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,300,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',19,215,467,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#008080','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',9,45,452,30,"Thực hiện phép tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',1,0,500,41,"Phép nhân số thập phân",'#008080','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',195,195,116,39,"Submit",'#008080','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',421,233,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',265,107,74,28,"",'#ddeeff','#ddeeff','#282828','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddeeff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',84,107,172,28,"4",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,msg,cau_hoi,title,check,score,in_0,so_0);
stage.add(Page_1);
InitLacVietScript();
};
