folder_Resource ='data/so_sanh_hai_phan_so_cung_mau_so';
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
         SetColorEx("","kq_0","#ffffff");
         SetColorEx("","kq_1","#ffffff");
         SetColorEx("","","#9BDBDD");
         arrayKq[1] = rightStr(GetName(""),1);
         InvalidateObj("","");		
}
function  CreateQuestion()
{
       var tu0 = Random(20)+2;
       var tu1 = Random(20)+1; 
       var mau = Random(30)+1;
       while(tu0 == tu1 ) 
	{
	      tu0 = Random(20)+2;
	}
           
        var kkk = Random(4);
         if( kkk ==0)
	{
		SetText("","ch","Phân số nào lớn hơn?");
		if(tu0>tu1)
		     arrayKq[0] = 0;
		else  arrayKq[0] = 1;	
	}
          else if(kkk ==1)
	{
		SetText("","ch","Phân số nào nhỏ hơn?");
		if(tu0>tu1)
		     arrayKq[0] = 1;
		else  arrayKq[0] = 0;
	}
     else if(kkk ==2)
	{
		SetText("","ch","Phân số nào lớn hơn 1?");
		var xx = Random(2);
		if(xx==0)
		{
			 tu0 = Random(20)+1+mau;
			tu1=  Random(mau);
			 arrayKq[0] = 0;

		}
		else
		{
			 tu1 = Random(20)+1+mau;
			tu0=  Random(mau);
			 arrayKq[0] = 1;

		}
	}
   else if(kkk ==3)
	{
		SetText("","ch","Phân số nào bé hơn 1?");
		var xx = Random(2);
		if(xx==0)
		{
			tu0 = Random(20)+1+mau;
			tu1=  Random(mau);
			 arrayKq[0] = 1;

		}
		else
		{
			 tu1 = Random(20)+1+mau;
			tu0=  Random(mau);
			 arrayKq[0] = 0;
		}
	}
         SetText("","kq_0", tu0 +"\r\n―\r\n"+mau);
         SetText("","kq_1", tu1 +"\r\n―\r\n"+mau);
         SetColorEx("","kq_0","#ffffff");
         SetColorEx("","kq_1","#ffffff");
	 Speak(GetText("","ch"),"VN");
                      _score =GetVer();				
	SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msg",0);	
             	InvalidateObj("","");		
	   
}
function  ChamDiem()
{	
	if(arrayKq [0]==arrayKq [1]){					
		_score++;		
		PlaySound("sound_good");	
		SetText( "", "msg", "Bạn làm tốt lắm.\r\n" + _score + " Điểm");
		SetFontColor("","msg","#00ff00");		
		UpdateScore( _score);
	         }
	else   {
		SetFontColor("","msg","#ff0000");
		SetText("","msg","Không chính xác.");
		PlaySound("sound_not");		
		_score--;			
		}
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
 width: 500,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,350,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',0,0,501,58,"So sách hai phân số cùng mẫu số",'#00b300','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00b300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',187,225,116,39,"Submit",'#80ff00','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var ch = CreText('ch',9,68,372,32,"Phân số nào lớn hơn?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',1,283,498,69,"good job",'rgba(152,251,152,0.89)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','rgba(152,251,152,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var kq_1 = CreText('kq_1',264,117,44,82,"1\r\n—\r\n2",'rgba(175,238,238,0.44)','#282828','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','rgba(175,238,238,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var score = CreText('score',444,9,39,40,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',155,117,44,82,"3\r\n−\r\n3\r\n",'rgba(175,238,238,0.44)','#282828','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','rgba(175,238,238,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Select();
  return;
}
 );
var sound = CreText('sound',303,49,56,57,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(GetText("","ch"),"VN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,title,check,ch,msg,kq_1,score,kq_0,sound);
stage.add(Page_1);
InitLacVietScript();
};
