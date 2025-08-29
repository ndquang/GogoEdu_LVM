folder_Resource ='/data/luy_thua_voi_so_mu_tu_nhien';
var _score = 0;
var _cSubmit = 0;
var _reply = 0;
function  InitScore()
{
	_score =GetVer();
	SetText("","score",_score);
	_cSubmit =0;
}

var a_kq=[0,0,0,0,0,0];
function  CreateGame()
{
	for(var k = 0; k< 6;k++)
	{
	SetText("","input"+k,"");
	SetFontColor("","input"+k,"#0000ff");
	AllowEditText("","input"+k,1);
	}

	// bai 1
	var coso = Random(9)+1;
	var somu = Random(5)+1;
	var text1= coso;
	for(var i=1 ; i< somu;i++)
	         text1=text1+" . " + coso;
	SetText("","so_1",text1+ " =");
	a_kq[0] = coso;
	a_kq[1] = somu;


	// bai 2 phep x
	coso = Random(9)+1;
	somu = Random(10)+1;
	var somu_1 = Random(10)+1;
	while(somu+somu_1>9)
	{
	           somu = Random(9)+1;
	           somu_1 = Random(9)+1;
	}
	SetText("","c1",coso +" . "+coso + " =");
	SetText("","m1",somu +"    "+somu_1);
	a_kq[2] = coso;
	a_kq[3] = somu +somu_1 ;

	// bai 2 phep :
	coso = Random(9)+1;
	somu = Random(9)+1;
	somu_1 = Random(9)+1;
	if(somu<somu_1)
	{
		var tam = somu;
		somu = somu_1;
		somu_1 = tam;
	}
	SetText("","c2",coso +" : "+coso + " =");
	SetText("","m2",somu +"    "+somu_1);
	a_kq[4] = coso;
	a_kq[5] = somu - somu_1 ;
		
	SetText("","msg","");
	 _reply =0;
	SetText("","bt_check","OK");
	PlaySound("SND_CREATE");
}
function  CheckKQ()
{

    var kq = 0;
     var dung_het = true;
     for(var i=0 ; i<6 ; i++)
     { 
       kq = GetText("","input"+i);
	   if(kq === "")
	   {
		   SetText("","msg","⚠  Bạn chưa trả lời hết câu hỏi.");
		   InvalidateObj("","");
		   return;
	   }
	  if(kq==a_kq[i])
	  { 
		SetFontColor("","input"+i,"#00ff00");
      	 }
	  else
	  {
		SetFontColor("","input"+i,"#ff0000");
		dung_het = false;
	  }
     }
		 if(dung_het==true)
		{
			_score++;
			SetText("","msg", "✅ Bạn làm tốt lắm");
			PlaySound("SND_TRUE");		
			SetText("","score",_score);
			UpdateScore( _score);
		}
	           else{
		SetText("","msg","❌ Bạn cần xem lại các ô màu đỏ" );
		PlaySound("SND_FALSE");
		}
		 _reply =1;
		SetText("","bt_check","Câu Tiếp");

}
function Page_1()
{
 InitScore();
AllowEditText("","input",1);
CreateGame();
InvalidateObj("","");
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
 width: 480,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,480,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',45,0,435,41,"LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN",'#ff0000','#ffffff','#ffffff','#ffffff','',20,'Segoe UI Black','Bold','center','middle',0,'0.00','0','0',3,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',1,0,62,40,"  6",'#ffff00','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',12,'0.00','0','1',3,'#ffffff','#ffff00','0','0','#ff0000','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',2,213,475,103,"Sai.",'rgba(64,224,208,0.00)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','20','0',1,'#7f7f7f','rgba(64,224,208,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_check = CreText('bt_check',177,200,96,30,"OK",'#5eaeff','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#0060bf','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if( _reply==0)
CheckKQ();
else
CreateGame();
InvalidateObj("","");
  return;
}
 );
var so_1 = CreText('so_1',54,78,161,26,"2 . 2 . 2 . 2 =",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c1 = CreText('c1',31,153,87,26,"3 . 3 =",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m1 = CreText('m1',75,144,46,18,"2    5",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input0 = CreText('input0',218,78,25,26,"2",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',9,45,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',39,44,352,24,"Viết các tích sau dưới dạng một lũy thừa",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input1 = CreText('input1',243,73,18,17,"3",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',10,116,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',37,114,443,24,"Viết kết quả phép tính sau dưới dạng một lũy thừa",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input2 = CreText('input2',126,153,25,26,"2",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input3 = CreText('input3',151,144,18,17,"3",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',396,214,78,100,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',36,'Segoe UI Black','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c2 = CreText('c2',194,153,89,26,"3 : 3 =",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m2 = CreText('m2',242,144,43,18,"2    5",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input4 = CreText('input4',291,153,25,26,"2",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input5 = CreText('input5',316,144,18,17,"3",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#008080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',-1,6,36,26,"Bài",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,Text_7,msg,bt_check,so_1,c1,m1,input0,Text_2,Text_3,input1,Text_5,Text_6,input2,input3,score,c2,m2,input4,input5,Text_4);
stage.add(Page_1);
InitLacVietScript();
};
