folder_Resource ='data/so_sanh_hai_phan_so';
var _score = 0;
var _cSubmit = 0;
var _index = 1;
var _bTestAndCreat = false;
var arrayKq = ["","","",""];
function  InitScore()
{	
	_score =GetVer();	
	SetShowObject("","msg",0);
	InvalidateObj("","");
	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}
function  Select()
{     
          SetText("","in_0",GetText("",""));
          InvalidateObj("","");		
}
function  CreateQuestion()
{
       var tu0 = Random(30)+2;
       var mau0 = Random(30)+1; 
       var tu1 = Random(30)+1;
      var  mau1 = Random(30)+1;
           
        var kkk = Random(4);
         if( kkk ==0)
	{
	          var xx = Random(9)+1;
		if(xx%2==0)
		{
			 tu0 = tu1*xx ;
  			mau0= mau1*xx;		
		}
		else
		{
			 tu1 = tu0*xx ;
  			mau1= mau0*xx;		
		}
		 arrayKq[0] = "=";
	}
          else if(kkk ==1)
	{
		tu0=tu1;
		if(mau0>mau1)
		 arrayKq[0] = "<";
		else  arrayKq[0] = ">";
	}
     else	{
		if(tu0/mau0 > tu1/mau1)
		 arrayKq[0] = ">";
		else if(tu0/mau0 < tu1/mau1)
		 arrayKq[0] = "<";
		else  arrayKq[0] = "=";             
	}
         SetText("","kq_0", tu0 +"\r\n―\r\n"+mau0);
         SetText("","kq_1", tu1 +"\r\n―\r\n"+mau1);
         SetColorEx("","in_0","#ffffff");
          SetText("","in_0","");
         AllowEditText("","in_0",1);
               _score =GetVer();				
	SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msg",0);	
             	InvalidateObj("","");		
	   
}
function  ChamDiem()
{	
	if(arrayKq [0]==GetText("","in_0")){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	         }
	else   {
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác. Kết quả là dấu\""+arrayKq [0] +"\"");
		PlaySound("sound_not");		
		_score--;			
		}
	AllowEditText("","in_0",0);
	SetText("","score",_score);
	_bTestAndCreat= true;					
	SetText("","check","Next");
	SetShowObject("","msg",1);
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
 width: 450,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',0,0,451,58,"So sách hai phân số",'#ffc0cb','#ffffff','#000000','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#009300','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var check = CreText('check',163,215,116,39,"Submit",'#ff80c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ff80c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var msg = CreText('msg',1,294,448,58,"good job",'rgba(255,192,203,0.89)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','rgba(255,192,203,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var kq_1 = CreText('kq_1',270,103,44,82,"1\r\n—\r\n2",'rgba(255,174,255,0.44)','#282828','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','rgba(255,174,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',391,8,39,40,"2",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',26,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',149,102,44,82,"3\r\n−\r\n3\r\n",'rgba(255,170,255,0.44)','#282828','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','rgba(255,170,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',215,126,37,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',12,65,318,26,"Điền dấu thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d0 = CreText('d0',51,101,35,39,">",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var d1 = CreText('d1',51,187,35,39,"=",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var d2 = CreText('d2',51,144,35,39,"<",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,title,check,msg,kq_1,score,kq_0,in_0,Text_1,d0,d1,d2);
stage.add(Page_1);
InitLacVietScript();
};
