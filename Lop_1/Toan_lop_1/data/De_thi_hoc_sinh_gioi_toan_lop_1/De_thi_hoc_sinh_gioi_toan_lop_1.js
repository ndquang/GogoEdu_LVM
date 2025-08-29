folder_Resource ='data/De_thi_hoc_sinh_gioi_toan_lop_1'
styteView = 'Ver';
var m_limit=100;
function TaoBai1()
{
SetShowObject("","thong_bao_diem",0);
SetShowObject("","cham_diem",1);
SetShowObject("","begin",1);
GetVer();
for(var i=0;i<10;i++)	
	{
		var a= Random(m_limit);
		var b= Random(m_limit);
		var c= Random(m_limit);
		var phep1 = Random(2);
		var phep2 = Random(2);
		var kq=0;
		var ab=0;
		var k=0;
		if(phep1==0 && phep2==0){//++
			k= a%10 + b%10;
			while(a+b> m_limit || k>10 )
			{
				a= Random(m_limit);
				b= Random(m_limit);
			      k= a%10 + b%10;
			}
			ab=a+b;
			c= Random(m_limit-ab);
			k= ab%10 + c%10;
			while(k>10)
			{
			c= Random(m_limit-ab);
			k= ab%10 + c%10;
			}
			kq =ab+c;
		}
		if(phep1==0 && phep2 ==1){//+-
			k= a%10 + b%10;
			while(a+b> m_limit || k>10 )
			{
				a= Random(m_limit);
				b= Random(m_limit);
			      k= a%10 + b%10;
			}
			ab=a+b;
			c= Random(ab);
			var k= ab%10 - c%10;
			while(k<0)
				{
				c= Random(ab);
			      k= ab%10 - c%10;
				}
			kq =ab-c;
		}
		if(phep1==1 && phep2 ==0){//-+
			var k= a%10 - b%10;
			while(k<0 || a<b)
				{
				a= Random(m_limit);
				b= Random(m_limit);
			      k= a%10 - b%10;
				}
			ab=a-b;
			c= Random(m_limit-ab);
			k= ab%10 + c%10;
			while(k>10)
			{
			c= Random(m_limit-ab);
			k= ab%10 + c%10;
			}
			kq =ab+c;
		}
		if(phep1==1 && phep2 ==1){//--
			var k= a%10 - b%10;
			while(k<0 || a<b)
				{
				a= Random(m_limit);
				b= Random(m_limit);
			      k= a%10 - b%10;
				}
			ab=a-b;
			c= Random(ab);
			k= ab%10 - c%10;
			while(k<0)
				{
				c= Random(ab);
			      k= ab%10 - c%10;
				}
			kq =ab-c;
		}
		SetText("Bai_1","a_"+i,a);
		SetText("Bai_1","b_"+i,b);
		SetText("Bai_1","c_"+i,c);
		SetText("Bai_1","kq_"+i,"= "+ kq);
		SetText("Bai_1","d_"+i,"...");
		SetText("Bai_1","e_"+i,"...");
		SetFontColor("Bai_1","d_"+i,"#ffffff");
		SetFontColor("Bai_1","e_"+i,"#ffffff");
	}
}
function ChonSo(){
	var tt = GetText("","");
	if(tt=="..." || tt== "-")
		SetText("","","+");
	else SetText("","","-");
	InvalidateObj("","");
}
function DiemBai1()
{
var m_diem=0;
for(var i=0; i< 10; i++)
		{
		var _a= GetText("Bai_1","a_"+i);
		var _b= GetText("Bai_1","b_"+i);
		var _c= GetText("Bai_1","c_"+i);
		var _d= GetText("Bai_1","d_"+i);
		var _e= GetText("Bai_1","e_"+i);
		var ex= _a+_d+_b+_e+_c;
		var dapan= GetText("Bai_1","kq_"+i);
		dapan= replaceStr(dapan,"= ",'');
		try{
			var kq= eval(ex);
    			if(dapan == kq)
			{
		   	m_diem=m_diem+0.25;
			SetFontColor("Bai_1","d_"+i,"#00ff00");
			SetFontColor("Bai_1","e_"+i,"#00ff00");
			}
		else {			
			SetFontColor("Bai_1","d_"+i,"#ff0000");
			SetFontColor("Bai_1","e_"+i,"#ff0000");
			}
		}
		 catch(erro)//(var e=[])
		{
    			SetFontColor("Bai_1","d_"+i,"#ff0000");
			SetFontColor("Bai_1","e_"+i,"#ff0000");

		}
	}
  return m_diem;
}
var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
SetShowObject("Trang_1","Group_1",0);
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_3","Group_1",0);
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("Bai_2",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}

function Init1a(){
for(var i=0; i< 9; i++){
  SetText("Bai_2","bai1a_"+i,"");
  SetBorder("Bai_2","bai1a_"+i,"#ffffff",1);
 SetText("Bai_2","bai1b_"+i,"");
 SetBorder("Bai_2","bai1b_"+i,"#ffffff",1);

 }
SetShowObject("Bai_2","bang_diem",0);
SetShowObject("Bai_2","Group_1",0);
SetMoveView("Bai_2","Group_1",1);
SetShowObject("Bai_2","begin",1);
}
function  Diem1a()
{
 var diem=0;
 for(var i=0;i<9;i++){
	var kq = GetText("Bai_2","bai1a_"+i);
	var k=0;
	var check= false;
	while(k<i){
	   var ch = GetText("Bai_2","bai1a_"+k);	
	  if(ch==kq)
		check= true;
	  k++;
	}
	if(check== false)
	{
		if(leftStr(kq,1)-1 == rightStr(kq,1))
		{
		diem=diem+0.15;
		SetBorder("Bai_2","bai1a_"+i,"#00ff00",1);
		}
		else SetBorder("Bai_2","bai1a_"+i,"#ff0000",1);
	}
	else SetBorder("Bai_2","bai1a_"+i,"#ff0000",1);
	}
return diem;
}
function  Diem1b()
{
 var diem=0;
 for(var i=0;i<8;i++){
	var kq = GetText("Bai_2","bai1b_"+i);
	var k=0;
	var check= false;
	while(k<i){
	   var ch = GetText("Bai_2","bai1b_"+k);	
	  if(ch==kq)
		check= true;
	  k++;
	}
	if(check== false)
	{
		if(leftStr(kq,1)-rightStr(kq,1) == 2)
		{
		diem=diem+0.15;
		SetBorder("Bai_2","bai1b_"+i,"#00ff00",1);
		}
		else SetBorder("Bai_2","bai1b_"+i,"#ff0000",1);
	}
	else SetBorder("Bai_2","bai1b_"+i,"#ff0000",1);
	}
return diem;
}
var tong =0;
function InitBai3a(){
var debai= "Bài 3:  Điền các số 1, 2, 3, 4, 5 vào các ô trống (mỗi số chỉ điền một lần) để phép cộng các số trên mỗi hàng, mỗi cột đều bằng ";
tong= Random(3)+8 +".";
debai=debai+tong;
SetText("Bai_2","de_bai_3a",debai);
for(var i=0; i< 5; i++){
   SetText("Bai_2","bai3a_"+i,"");
  SetText("Bai_2","kq3_"+i,"");
  SetShowObject("Bai_2","kq3_"+i,0);
  SetBorder("Bai_2","bai3a_"+i,"#ffffff",1);
 }
}
function ShowKq()
{
      var kq ="";
	if(tong==8) kq = "21534";
	if(tong==9) kq = "23415";
	if(tong==10) kq = "25314";
	for(var i=0; i< 5; i++){
		SetText("Bai_2","kq3_"+i,subString(kq,i,1));
		SetShowObject("Bai_2","kq3_"+i,1);
		}
}

function  Diem3a(){
	for(var i=0; i< 5; i++)
	{
		var xx= GetText("Bai_2","bai3a_"+i);
		if(xx>5 || xx== ""){
			SetBorder("Bai_2","bai3a_"+i,"#ff0000",1);
			ShowKq();
			return 0;
		}
		var j=0;
		while(j<5)
		{
			if(i!=j){
			  var yy= GetText("Bai_2","bai3a_"+j);
				if(yy>5 || xx==yy || yy=="")
				{
				SetBorder("Bai_2","bai3a_"+j,"#ff0000",1);
				ShowKq();
					return 0;
				}
				}
			j++;
		}
	}
	var doc= GetText("Bai_2","bai3a_0")+ GetText("Bai_2","bai3a_1")+ GetText("Bai_2","bai3a_2");
	var ngang = GetText("Bai_2","bai3a_3")+ GetText("Bai_2","bai3a_1")+ GetText("Bai_2","bai3a_4");
	if(doc==ngang && tong==ngang){
		for(var i=0; i< 5; i++)
		SetBorder("Bai_2","bai3a_"+i,"#00ff00",1);
		return 2.5;
	}
	else{
	ShowKq();
	  return 0;
		}
}
var kq4=0;
function InitBai4()
{
	var tt= "Bài 4:  Bình có ba túi kẹo, túi thứ nhất nhiều hơn túi thứ hai xxx cây kẹo,  túi thứ hai nhiều hơn túi thứ ba yyy cây kẹo. Hỏi túi thứ nhất nhiều hơn túi thứ ba bao nhiêu cây kẹo?";
	var a= Random(9)+1;
	var b= Random(9)+1;
	kq4= a+b;
	while(kq4>10 || a==b)
			{
			a= Random(9)+1;
			b= Random(9)+1;
			kq4= a+b;
			}
	tt= replaceStr(tt,"xxx",a);
	tt= replaceStr(tt,"yyy",b);
	SetText("Bai_2","de_bai4",tt);
	SetText("Bai_2","bai4","");
	SetBorder("Bai_2","bai4","#ffffff",1);
      SetCursor("Bai_2","bai4","pointer");
 	SetCursor("Bai_2","bang_diem","pointer");
}
function  Diem4(){
	if(GetText("Bai_2","bai4")==kq4){
	SetBorder("Bai_2","bai4","#00ff00",1);
		return 2.5;
	}
	else
	{
	SetBorder("Bai_2","bai4","#ff0000",1);
		 return 0;
	}
}
function Bai_1()
{
PlaySound("ID_SOUND_HOME");
SetShowObject("","thong_bao_diem",0);
TaoBai1();
InvalidateObj("Bai_1","");
  return;
}

function Bai_2()
{
Init1a();
InitBai3a();
InitBai4();
SetShowObject("Bai_2","bang_diem",0);
SetMoveView("Bai_2","bang_diem",1);
SetShowObject("Bai_2","begin",1);
InvalidateObj("Bai_2","");
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
 width: 640,
 height: 960 
 });

 var Bai_1 = new Kinetic.Layer({name: 'Bai_1',callback:'Bai_1()',x:0,y:0});
var Bai_1_Backrounnd = CreText('Bai_1_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var de_bai = CreText('de_bai',25,53,508,25,"Bài 1: Điền dấu cộng(+) hay dấu trừ(-):(2.5 điểm)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','rgba(0,85,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',212,92,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_1 = CreText('a_1',212,128,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_2 = CreText('a_2',212,163,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_3 = CreText('a_3',212,198,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_4 = CreText('a_4',212,236,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_0 = CreText('b_0',284,92,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_1 = CreText('b_1',284,128,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_2 = CreText('b_2',284,163,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_3 = CreText('b_3',284,198,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_4 = CreText('b_4',284,236,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_0 = CreText('d_0',246,92,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_1 = CreText('d_1',246,128,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_2 = CreText('d_2',246,163,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_3 = CreText('d_3',246,198,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_4 = CreText('d_4',246,236,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_5 = CreText('d_5',246,275,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_6 = CreText('d_6',246,311,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_7 = CreText('d_7',246,346,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_8 = CreText('d_8',246,381,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d_9 = CreText('d_9',246,419,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c_0 = CreText('c_0',359,92,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_1 = CreText('c_1',359,128,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_2 = CreText('c_2',359,163,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_3 = CreText('c_3',359,198,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_4 = CreText('c_4',359,236,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_5 = CreText('a_5',212,275,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_6 = CreText('a_6',212,311,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_7 = CreText('a_7',212,346,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_8 = CreText('a_8',212,381,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_9 = CreText('a_9',212,419,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_5 = CreText('b_5',284,275,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_6 = CreText('b_6',284,311,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_7 = CreText('b_7',284,346,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_8 = CreText('b_8',284,381,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_9 = CreText('b_9',284,419,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var e_0 = CreText('e_0',322,92,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_1 = CreText('e_1',322,128,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_2 = CreText('e_2',322,163,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_3 = CreText('e_3',322,198,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_4 = CreText('e_4',322,236,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_5 = CreText('e_5',322,275,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_6 = CreText('e_6',322,311,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_7 = CreText('e_7',322,346,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_8 = CreText('e_8',322,381,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e_9 = CreText('e_9',322,419,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c_5 = CreText('c_5',359,275,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_6 = CreText('c_6',359,311,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_7 = CreText('c_7',359,346,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_8 = CreText('c_8',359,381,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_9 = CreText('c_9',359,419,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',390,92,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_1 = CreText('kq_1',390,128,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_2 = CreText('kq_2',390,163,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_3 = CreText('kq_3',390,198,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_4 = CreText('kq_4',390,236,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_5 = CreText('kq_5',390,275,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_6 = CreText('kq_6',390,311,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_7 = CreText('kq_7',390,346,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_8 = CreText('kq_8',390,381,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_9 = CreText('kq_9',390,419,47,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',65,8,533,39,"ĐỀ THI HỌC SINH GIỎI TOÁN LỚP 1",'rgba(0,0,0,0)','#ffffff','#7fffd4','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Bai_1.add(Bai_1_Backrounnd,de_bai,a_0,a_1,a_2,a_3,a_4,b_0,b_1,b_2,b_3,b_4,d_0,d_1,d_2,d_3,d_4,d_5,d_6,d_7,d_8,d_9,c_0,c_1,c_2,c_3,c_4,a_5,a_6,a_7,a_8,a_9,b_5,b_6,b_7,b_8,b_9,e_0,e_1,e_2,e_3,e_4,e_5,e_6,e_7,e_8,e_9,c_5,c_6,c_7,c_8,c_9,kq_0,kq_1,kq_2,kq_3,kq_4,kq_5,kq_6,kq_7,kq_8,kq_9,Drawtext_1);
stage.add(Bai_1);

 var Bai_2 = new Kinetic.Layer({name: 'Bai_2',callback:'Bai_2()',x:0,y:480});
var Bai_2_Backrounnd = CreText('Bai_2_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var DrawText_4 = CreText('DrawText_4',34,355,333,34,"Túi thứ nhất nhiều hơn túi thứ ba            cây kẹo.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4 = CreText('bai4',230,360,26,26,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_3 = CreText('DrawText_3',39,331,58,34,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_bai4 = CreText('de_bai4',18,300,552,34,"Bài 4:  Bình có ba túi kẹo, túi thứ nhất nhiều hơn túi thứ hai ... cây kẹo,  túi thứ hai nhiều hơn túi thứ ba ... cây kẹo. Hỏi túi thứ nhất nhiều hơn túi thứ ba bao nhiêu cây kẹo?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3_4 = CreText('kq3_4',437,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#00ff00','#00ff00','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3_3 = CreText('kq3_3',383,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#00ff00','#00ff00','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3_2 = CreText('kq3_2',410,258,26,26,"1",'rgba(0,0,0,0)','#ffffff','#00ff00','#00ff00','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3_1 = CreText('kq3_1',410,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#00ff00','#00ff00','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3_0 = CreText('kq3_0',410,204,26,26,"1",'rgba(0,0,0,0)','#ffffff','#00ff00','#00ff00','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_bai_3a = CreText('de_bai_3a',18,165,552,34,"Bài 3:  Điền các số 1, 2, 3, 4, 5 vào các ô trống (mỗi số chỉ điền một lần) để phép cộng các số trên mỗi hàng, mỗi cột đều bằng 8.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_2 = CreText('bai3a_2',272,258,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3a_4 = CreText('bai3a_4',299,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3a_1 = CreText('bai3a_1',272,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3a_3 = CreText('bai3a_3',246,231,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3a_0 = CreText('bai3a_0',272,205,26,26,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',57,26,574,24,"a.) Viết các số có hai chữ số mà chữ số hàng chục liền sau số hàng đơn vị:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',18,3,104,29,"Bài 2.(2.5 điểm)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1a_0 = CreText('bai1a_0',83,55,32,26,"21",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_1 = CreText('bai1a_1',127,55,32,26,"32",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_2 = CreText('bai1a_2',171,55,32,26,"43",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_3 = CreText('bai1a_3',215,55,32,26,"54",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_4 = CreText('bai1a_4',259,55,32,26,"65",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_5 = CreText('bai1a_5',303,55,32,26,"76",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_6 = CreText('bai1a_6',347,55,32,26,"87",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_7 = CreText('bai1a_7',394,55,32,26,"98",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1a_8 = CreText('bai1a_8',433,55,32,26,"10",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1a_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var begin = CreText('begin',289,424,120,37,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ Diem1a()+Diem1b()+Diem3a()+Diem4();
SetText("Bai_2","m_diem",ceil(diem));
SetShowObject("Bai_2","bang_diem",1);
SetShowObject("Bai_2","",0);
InvalidateObj("Bai_1","");
InvalidateObj("Bai_2","");
UpdateScore(diem);
  return;
}
 );
var DrawText_2 = CreText('DrawText_2',57,89,552,24,"b.) Viết các số có hai chữ số mà chữ số hàng chục trừ số số hàng đơn vị bằng 2:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1b_0 = CreText('bai1b_0',82,118,32,26,"21",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_1 = CreText('bai1b_1',126,118,32,26,"32",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_2 = CreText('bai1b_2',170,118,32,26,"43",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_3 = CreText('bai1b_3',214,118,32,26,"54",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_4 = CreText('bai1b_4',258,118,32,26,"65",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_5 = CreText('bai1b_5',302,118,32,26,"76",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_6 = CreText('bai1b_6',346,118,32,26,"87",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai1b_7 = CreText('bai1b_7',393,118,32,26,"98",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai1b_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var clear_one = CreText('clear_one',30,-5,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
   var tkeyNew = leftStr(keyNewValue ,Length(keyNewValue)-1);
	SetText("",objectShowKey,tkeyNew);
	InvalidateObj("",objectShowKey);
  return;
}
 );
var clear_all = CreText('clear_all',57,-5,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',30,83,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',57,83,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',-1,83,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',39,106,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',-1,-5,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-1,106,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',57,61,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,61,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-1,61,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',57,39,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,39,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-1,39,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',57,17,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',30,17,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',-1,17,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var m_diem = CreText('m_diem',194,140,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',194,140,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',255,239,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai1();
Init1a();
InitBai3a();
InitBai4();
SetShowObject("Bai_2","bang_diem",0);
SetShowObject("Bai_2","begin",1);
InvalidateObj("Bai_1","");
InvalidateObj("Bai_2","");
  return;
}
 );
var label = CreText('label',215,166,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(clear_one,clear_all,dau_bang,dau_be,dau_lon,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem,t_mess,label,bt_lam_lai);
Bai_2.add(Bai_2_Backrounnd,DrawText_4,bai4,DrawText_3,de_bai4,kq3_4,kq3_3,kq3_2,kq3_1,kq3_0,de_bai_3a,bai3a_2,bai3a_4,bai3a_1,bai3a_3,bai3a_0,Drawtext_1,DrawText_1,bai1a_0,bai1a_1,bai1a_2,bai1a_3,bai1a_4,bai1a_5,bai1a_6,bai1a_7,bai1a_8,begin,DrawText_2,bai1b_0,bai1b_1,bai1b_2,bai1b_3,bai1b_4,bai1b_5,bai1b_6,bai1b_7,Group_1,bang_diem);
stage.add(Bai_2);
InitLacVietScript();
};
