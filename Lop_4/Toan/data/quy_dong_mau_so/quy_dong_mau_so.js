folder_Resource ='data/quy_dong_mau_so';
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
	SetDigitEditText("","in_0","number");
	SetDigitEditText("","in_1","number");
	SetDigitEditText("","in_2","number");
	SetDigitEditText("","in_3","number");

	_index = 1;
	_bTestAndCreat = false;
	SetText("","score",_score);

}
function  BSCNN( a,  b)
{
var lcm;
var maxV = a*b;
var step = max(a, b);
 for(var  i = step; i <= maxV; i+= step){
        if(i % a == 0 && i % b == 0){
            lcm = i;
            break;
        }
    }
return lcm;
}

function  CreateQuestion()
{
       var tu0  = Random(20)+2;
       var mau0 = Random(20)+1; 
       var tu1  = Random(20)+2;
       var mau1 = Random(20)+1; 
       while(mau0 == mau1 )
	{
		mau0 = Random(20)+1; 
		mau1 = Random(20)+1; 
	}
          if(Random(2)==1)
	{
		while(mau1%mau0!=0)
		{
		mau0 = Random(100)+1; 
		mau1 = Random(100)+1; 
		}
	}
       SetText("","t0",tu0);
       SetText("","m0",mau0);
       SetText("","t1",tu1);
       SetText("","m1",mau1);

       SetText("","tu_0",tu0);
       SetText("","mau_0",mau0);
       SetText("","tu_1",tu1);
       SetText("","mau_1",mau1);
	
        SetText("","tt0",tu0);
       SetText("","mm0",mau0);
       SetText("","tt1",tu1);
       SetText("","mm1",mau1);

      var bsc = BSCNN(mau0,mau1);

      arrayKq[0] = bsc/mau0;	
      arrayKq[1] = bsc/mau0;
      arrayKq[2] = tu0* arrayKq[0] ;	
      arrayKq[3] = mau0*arrayKq[1];


      arrayKq[4] = bsc/mau1;	
      arrayKq[5] = bsc/mau1;
      arrayKq[6] = tu1* arrayKq[4] ;	
      arrayKq[7] = mau1*arrayKq[4];

        
      for(var i=0;i<8;i++)
      {
	 SetText("","in_"+ i, "");
	 SetFontColor("","in_"+i,"#000000");
	AllowEditText("","in_"+i,1);
      }
                  _score =GetVer();				
	SetText("","check","Submit");			
		_bTestAndCreat = false;
		SetShowObject("","msg",0);	
             	InvalidateObj("","");		
	   
}
function  ChamDiem()
{	
	var kq = true;	
	 for(var i=0;i<8;i++)
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
		SetText("","msg","Không chính xác.\r\n Mẩu số chung là: "+arrayKq [7]+"\r\n" +"Nhân phân số thứ nhất cho " + arrayKq [0] +"\r\n"+"Nhân phân số thứ hai cho: "+arrayKq [4]);
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
 width: 540,
 height: 630 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,540,630,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var kq_1 = CreText('kq_1',196,268,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',293,268,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',254,228,31,85,"x\r\n\r\nx",'rgba(0,0,0,0)','#ebebeb','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',0,0,540,58,"Quy đồng mẫu số hai phân số sau:",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',293,223,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',222,465,116,39,"Submit",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#7f7f7f','#0080ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var score = CreText('score',486,6,47,47,"2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_1 = CreText('in_1',293,275,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',8,171,466,37,"Điền số thích hợp vào ô trống:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_2 = CreText('in_2',401,223,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_3 = CreText('in_3',401,275,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',2,511,539,118,"good job",'rgba(166,226,255,0.89)','#ffffff','#000000','#000000','',18,'Arial','Normal','left','middle',0,'0.00','10','0',1,'#000000','rgba(166,226,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var Text_1 = CreText('Text_1',360,237,31,62,"=",'rgba(0,0,0,0)','#ebebeb','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',401,268,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tu_0 = CreText('tu_0',196,227,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var mau_0 = CreText('mau_0',196,273,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',195,396,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',292,396,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',253,355,31,85,"x\r\n\r\nx",'rgba(0,0,0,0)','#ebebeb','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_4 = CreText('in_4',292,350,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_5 = CreText('in_5',292,402,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_6 = CreText('in_6',400,350,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_7 = CreText('in_7',400,402,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',359,374,31,46,"=",'rgba(0,0,0,0)','#ebebeb','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(244,244,244,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',400,396,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tu_1 = CreText('tu_1',195,354,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var mau_1 = CreText('mau_1',195,400,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',179,111,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t0 = CreText('t0',179,70,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m0 = CreText('m0',179,116,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_20 = CreText('Text_20',302,110,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t1 = CreText('t1',302,69,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m1 = CreText('m1',302,115,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_23 = CreText('Text_23',242,89,52,43,"và",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',95,268,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt0 = CreText('tt0',95,226,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var mm0 = CreText('mm0',95,272,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',98,396,57,2,"",'#282828','#282828','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tt1 = CreText('tt1',98,353,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var mm1 = CreText('mm1',98,399,57,37,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',24,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',151,250,52,43,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_18 = CreText('Text_18',150,378,52,43,"=",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,kq_1,kq_0,Text_3,title,in_0,check,score,in_1,Text_2,in_2,in_3,msg,Text_1,Text_4,tu_0,mau_0,Text_5,Text_6,Text_7,in_4,in_5,in_6,in_7,Text_12,Text_13,tu_1,mau_1,Text_17,t0,m0,Text_20,t1,m1,Text_23,Text_8,tt0,mm0,Text_11,tt1,mm1,Text_16,Text_18);
stage.add(Page_1);
InitLacVietScript();
};
