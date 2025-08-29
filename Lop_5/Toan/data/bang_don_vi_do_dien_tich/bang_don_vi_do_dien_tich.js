folder_Resource ='data/bang_don_vi_do_dien_tich';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
var arrayDV = ["km²", "hm²","dam²", "m²","dm²", "cm²","mm²" ];
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
var phanso = 0;
function  CreateQuestion()
{
       var dv1  = Random(7);
      var dv2  = Random(7);
       for(var i=0;i<3  ;i++)
	SetShowObject("","in_"+i,0);
     SetShowObject("","bg",0);
     phanso = 0;
      while(dv1  ==dv2  )
	{
	dv2  = Random(7);
	}
	var th = Random(2);
	if(dv1 < dv2   )
	{
	 var k = Random(20)+1;	
	if(th ==0)
	{
		SetText("","vt",k+ arrayDV[dv1] );
		SetText("","dv",arrayDV[dv2] );	
		var denta = dv2  - dv1;
		arrayKq[0] = k*pow(100,denta );
	}
	else if(th ==1)
	{
		var sole = Random(50);
		SetText("","vt",k+ arrayDV[dv1] +  sole + arrayDV[dv2]);
		SetText("","dv",arrayDV[dv2] );	
		var denta = dv2  - dv1;
		arrayKq[0] = k*pow(100,denta ) +sole  ;
	}
	SetShowObject("","in_0",1);
	SetText("","in_0","");
	SetFontColor("","in_0","#000000");
	AllowEditText("","in_0",1);
	}
   	else
	{
                      var k = Random(90)+1;
	      dv2= dv1-1;
	       SetText("","dv",arrayDV[dv2] );
	       if(th ==0)
		{
	        	var zero = Random(5)+2;
                         	for(var z =0;z<zero ;z++)                    	    
		k = k *10;             	                    
	              SetText("","vt",k+ arrayDV[dv1] );	
	              arrayKq[0]  = k /100;
		SetShowObject("","in_0",1);
		SetText("","in_0","");
		SetFontColor("","in_0","#000000");
		AllowEditText("","in_0",1);
		}
	     else // phân so
		{	
		 phanso = 1;
		  SetText("","vt",k+ arrayDV[dv1] );	
		 arrayKq[1]= k;
		 arrayKq[2]= 100;
		 for(var k=1;k<3  ;k++)
			{
			SetText("","in_"+k,"");
			SetFontColor("","in_"+k,"#000000");
			AllowEditText("","in_"+k,1);
			SetShowObject("","in_"+k,1);
			}
		  SetShowObject("","bg",1);
		SetShowObject("","in_0",0);
		}	
	}
               			
        SetText("","check","Submit");			
           _bTestAndCreat = false;	          
	SetText("","msg","");
   	InvalidateObj("","");		
}


function  ChamDiem()
{	
	var kq = true;	
	if( phanso == 1)
	{
	 for(var i=1;i<3  ;i++)
	{
		if(GetText("","in_"+i)==arrayKq [i])			
		SetFontColor("","in_"+i,"#00ff00");	
	else {
		SetFontColor("","in_"+i,"#ff0000");
		kq = false;;
                         }
	AllowEditText("","in_"+i,0);	
	}
	}
	else
	{
		if(GetText("","in_0")==arrayKq [0])			
		SetFontColor("","in_0","#00ff00");	
		else {
		SetFontColor("","in_0","#ff0000");
		kq = false;;
                       	  }
		AllowEditText("","in_0",0);	
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
		if( phanso == 1)
		SetText("","msg","Không chính xác.\r\n kết quả: "+arrayKq[1] + "/"+ arrayKq[2] );
		else SetText("","msg","Không chính xác.\r\n kết quả: "+arrayKq[0]);
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
 width: 500,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var msg = CreText('msg',1,247,497,76,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var cau_hoi = CreText('cau_hoi',20,100,452,29,"Nhập số thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',0,0,500,58,"Bảng đơn vị đo diện tích",'#008040','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',202,200,116,39,"Submit",'#008040','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',456,9,39,39,"2",'#ffad5b','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',232,145,154,32,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vt = CreText('vt',38,145,155,32,"4",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dv = CreText('dv',386,145,47,32,"3",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','1','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',199,151,33,24,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',1,59,496,42,"km²     hm²     dam²     m²     dm²      cm²      mm² ",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bg = CreText('bg',242,127,47,65,"",'#e2e2e2','#e2e2e2','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#e2e2e2','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',242,127,48,32,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_2 = CreText('in_2',242,159,48,32,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','1','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,msg,cau_hoi,title,check,score,in_0,vt,dv,dau,Text_2,bg,in_1,in_2);
stage.add(Page_1);
InitLacVietScript();
};
