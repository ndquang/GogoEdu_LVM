folder_Resource ='data/Sudoku';
var m_sudoku=[9]=[9];
//var m_sudoku= new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
var m_size=4;
var m_sudokuLock=[9]=[9];
//var m_sudokuLock= new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
var m_kq=[9]=[9];
//var m_kq= new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
var m_type="Image";
var m_subSquare[9] =	
//var m_subSquare= new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
			{
				{0,0,0,1,1,1,2,2,2},+
				{0,0,0,1,1,1,2,2,2},+
				{0,0,0,1,1,1,2,2,2},+
				{3,3,3,4,4,4,5,5,5},+
				{3,3,3,4,4,4,5,5,5},+
				{3,3,3,4,4,4,5,5,5},+
				{6,6,6,7,7,7,8,8,8},+
				{6,6,6,7,7,7,8,8,8},+
				{6,6,6,7,7,7,8,8,8}
			];
var m_subIndex[9] =
//var m_subIndex= new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
			{			
				{ "0,0","0,1","0,2","1,0","1,1","1,2","2,0","2,1","2,2"},+
				{ "0,3","0,4","0,5","1,3","1,4","1,5","2,3","2,4","2,5"},+
				{ "0,6","0,7","0,8","1,6","1,7","1,8","2,6","2,7","2,8"},+
				{ "3,0","3,1","3,2","4,0","4,1","4,2","5,0","5,1","5,2"},+
				{ "3,3","3,4","3,5","4,3","4,4","4,5","5,3","5,4","5,5"},+
				{ "3,6","3,7","3,8","4,6","4,7","4,8","5,6","5,7","5,8"},+
				{ "6,0","6,1","6,2","7,0","7,1","7,2","8,0","8,1","8,2"},+
				{ "6,3","6,4","6,5","7,3","7,4","7,5","8,3","8,4","8,5"},+
				{ "6,6","6,7","6,8","7,6","7,7","7,8","8,6","8,7","8,8"}
			];
var m_subSquare4[4] =	
//var m_subSquare4= new Array(new Array(),new Array(),new Array(),new Array());
			{
				{0,0,1,1},+
				{0,0,1,1},+
				{2,2,3,3},+
				{2,2,3,3}
				
			];
var m_subIndex4[4] =
//var m_subIndex4= new Array(new Array(),new Array(),new Array(),new Array());
			{			
				{ "0,0","0,1","1,0","1,1"},+
				{ "0,2","0,3","1,2","1,3"},+
				{ "2,0","2,1","3,0","3,1"},+
				{ "2,2","2,3","3,2","3,3"}
				];
function GetDaTa( A)
//GetDaTa(var &A= new Array);
{
	for(var y = 0; y <  m_size; y++)
				for(var x = 0; x <  m_size; x++)
				A[y][x]= m_sudoku[y][x];
			
}
function SetDaTa( A)
//SetDaTa(var &A= new Array);
{
	for(var y = 0; y <  m_size; y++)
				for(var x = 0; x <  m_size; x++)
				m_sudoku[y][x]= A[y][x];
			
}

function Init()
{
		for(var y = 0; y <  m_size; y++)
			
				for(var x = 0; x <  m_size; x++)
				{
						m_sudoku[y][x]=0;
						SetColorEx("",y+"_"+x);
						m_sudokuLock[y][x]=0;
				}
}
function GetValue()
{
			for(var y = 0; y <  m_size; y++)
				for(var x = 0; x <  m_size; x++)
				{
						SetText("",y+"_"+x,m_sudoku[y][x]);
				}

}
function  Solve()
		{
			var xp = 0;
			var yp = 0;
			var 	Mp=["","","","","","","","","","",""];
			var cMp =  m_size+1;
			for(var y = 0; y <  m_size; y++)
			{
				for(var x = 0; x <  m_size; x++)
				{
					if(m_sudoku[y][x] == 0)
					{
						var M = [0,1,2,3,4,5,6,7,8,9];
						for(var  a = 0; a <  m_size; a++)
							M[m_sudoku[a][x]] = 0;
						for(var b = 0; b <  m_size; b++)
							M[m_sudoku[y][b]] = 0;
						
						var	squareIndex = m_subSquare[y][x];
//						var	squareIndex = m_subSquare= new Array);
						if(m_size==4) squareIndex = m_subSquare4[y][x];

						for(var c = 0; c <  m_size; c++)
						{
							var p = m_subIndex[squareIndex][c];
//							var p = m_subIndex= new Array);
							if(m_size==4) p = m_subIndex4[squareIndex][c];
							M[m_sudoku[leftStr(p,1)][rightStr(p,1)]] = 0;
                         
						}
						var cM =0;
						for(var d = 1; d <  m_size+1; d++)
							{
							if(M[d]==0) 
							cM =cM; else cM =cM +1;							
							}
						if(cM < cMp)
						{
							cMp = cM;
							for(var h = 0; h <= m_size; h++)
							Mp[h]=M[h];
							xp = x;
							yp = y;
						}
					}
				}
			}
			
			if(cMp == m_size+1)
				return true;
			if(cMp == 0)
				return false;

			for(var i = 1; i <  m_size+1; i++)
			{
				if(Mp[i] != 0)
				{
					m_sudoku[yp][xp] = Mp[i];
					if(Solve())
						return true;
				}
			}

			m_sudoku[yp][xp] = 0;
			return false;
		}
function Gen( count)
{
		for(var i = 0;  i < count; i++)
			{
				
				var xRand,yRand;
				do
				{
					xRand = Random( m_size);
					yRand = Random( m_size);
				} while(m_sudoku[yRand][xRand] != 0);

				var 	M=[0,1,2,3,4,5,6,7,8,9];
				for(var a = 0; a <  m_size; a++)
					M[m_sudoku[a][xRand]] = 0;

				for(var b = 0; b <  m_size; b++)
					M[m_sudoku[yRand][b]] = 0;

				var	squareIndex = m_subSquare[yRand][xRand];
//				var	squareIndex = m_subSquare= new Array);
				if(m_size==4) squareIndex = m_subSquare4[yRand][xRand];
				for(var c = 0; c <  m_size; c++)
				{
					var p = m_subIndex[squareIndex][c];
//					var p = m_subIndex= new Array);
					if(m_size==4) p = m_subIndex4[squareIndex][c];
					M[m_sudoku[leftStr(p,1)][rightStr(p,1)]] = 0;
				}

				var cM = 0;
				for(var d = 1; d <  m_size+1; d++)
							{
							if(M[d]==0) 
							cM =cM; else cM =cM +1;							
							}

				if(cM > 0)
				{
					var e = 0;
					do
					{
						e =  Random( m_size)+1;
					} while(M[e] == 0);
					m_sudoku[yRand][xRand] = e;
				}
				else
				{
					return false;
				}
			}
			return true;
		}
function TestUniqueness()
		{
		
			var xp = 0;
			var yp = 0;
			var 	Mp=["","","","","","","","","","",""];
			var cMp =  m_size+1;
			for(var y = 0; y <  m_size; y++)
			{
				for(var x = 0; x <  m_size; x++)
				{
					if(m_sudoku[y][x] == 0)
					{
						
						var M = [0,1,2,3,4,5,6,7,8,9];

						for(var a = 0; a <  m_size; a++)
							M[m_sudoku[a][x]] = 0;

						for(var b = 0; b <  m_size; b++)
							M[m_sudoku[y][b]] = 0;

						var	squareIndex = m_subSquare[y][x];
//						var	squareIndex = m_subSquare= new Array);
						if(m_size==4) squareIndex = m_subSquare4[y][x];
						for(var c = 0; c <  m_size; c++)
						{
							var p = m_subIndex[squareIndex][c];
//							var p = m_subIndex= new Array);
							if(m_size==4) p = m_subIndex4[squareIndex][c];
							M[m_sudoku[leftStr(p,1)][rightStr(p,1)]] = 0;
						}

						var cM = 0;
						for(var d = 1; d <  m_size+1; d++)
							{
							if(M[d]==0) 
							cM =cM; else cM =cM +1;							
							}


						if(cM < cMp)
						{
							cMp = cM;
							Mp = M;
							xp = x;
							yp = y;
						}
					}
				}
			}

			if(cMp == m_size+1)
				{
				return true;
				}
			if(cMp == 0)
				return false;
			var success=0;
			for(var i = 1; i <  m_size+1; i++)
			{
				if(Mp[i] != 0)
				{
					m_sudoku[yp][xp] = Mp[i];
					if(TestUniqueness())
						success++;
					m_sudoku[yp][xp] = 0;
					if(success > 1)
						return false;
				}
			}
			return success == 1;
		}
function Feasible( M)
{
for(var d = 1; d < m_size+1; d++)
				if(M[d] > 1) 
					return false;
			else return true;
}
function IsSudokuFeasible()
		{
			for(var y = 0; y <  m_size; y++)
			{
				for(var x = 0; x <  m_size; x++)
				{
					var M = [0,0,0,0,0,0,0,0,0,0];

					for(var a = 0; a <  m_size; a++)
						M[m_sudoku[a][x]]++;
					if(!Feasible(M))
						return false;

					for(var b = 0; b <  m_size; b++)
						{
						M[b]=0;
						M[m_sudoku[y][b]]++;
						}
					if(!Feasible(M))
						return false;

					
					var	squareIndex = m_subSquare[y][x];
//					var	squareIndex = m_subSquare= new Array);
					if(m_size==4) squareIndex = m_subSquare4[y][x];

					for(var c = 0; c < m_size; c++)
					{
						var p = m_subIndex[squareIndex][c];
//						var p = m_subIndex= new Array);
						if(m_size==4)  p = m_subIndex4[squareIndex][c];
						if(leftStr(p,1) != rightStr(p,1) && rightStr(p,1) != x)
							M[m_sudoku[leftStr(p,1)][rightStr(p,1)]]++;
					}
					if(!Feasible(M))
						return false;
				}
			}

			return true;
		}
function MoveSelect( x,  y)
{
var w= GetWidth("","s1");
var h= GetHeight("","s1");
	if(m_size==4)
	{
	MoveObjectTo("","s1",x,y);
	MoveObjectTo("","s2",x+w,y);
	MoveObjectTo("","s3",x,y+h);
	MoveObjectTo("","s4",x+w,y+h);
	}
	else
	{	
	MoveObjectTo("","s1",x,y);
	MoveObjectTo("","s2",x+w,y);
	MoveObjectTo("","s3",x+2*w,y);

	MoveObjectTo("","s4",x,y+h);
	MoveObjectTo("","s5",x+w,y+h);
	MoveObjectTo("","s6",x+2*w,y+h);

	MoveObjectTo("","s7",x,y+2*h);
	MoveObjectTo("","s8",x+w,y+2*h);
	MoveObjectTo("","s9",x+2*w,y+2*h);
	}
}
function ShowS( s)
{
	for(var i=1;i<= m_size;i++)
		SetShowObject("","s"+i,s);
}
function ChangType()
{

	for(var i=1;i<= m_size;i++)
		{
		if(m_type=="Image")
			{
			SetFontColor("","s"+i,-1);
			SetColorEx("","s"+i);
			}
		else
		{
		SetFontColor("","s"+i,0);
		SetColorEx("","s"+i,-1);
		}
	}
}
var objectclick="";
function Click()
{
	var name= GetName("");
	var x= leftStr(name,1);
	var y = rightStr(name,1);
	PlayWave("","","ID_SOUND");
	if(m_sudokuLock[x][y]==1)
		{
			MoveSelect(GetLeft("",name),GetTop("",name));
			ShowS(1);
			objectclick=name;
		}

	
}
function GetSelect()
{
	ShowS(0);
	PlayWave("","","ID_SOUND1");
	var tt= GetText("","");
	var x= leftStr(objectclick,1);
	var y = rightStr(objectclick,1);
	if(m_type=="Image")
			SetColorEx("",objectclick,-1,"ID_"+tt);
			m_sudoku[x][y]=tt;
			SetText("",objectclick,tt);
	 
}
function Test()
{
var b= true;
var y=0;
var x=0;
while(x< m_size&& b)
	{
	y=0;
	while(y< m_size&& b)
		{
				if(m_sudoku[x][y]==0)
					{
						b= false;
						break;
					}
			y++;
		}
		x++;
	}
 if(b== true)
		{
			y=0,x=0;
			while(x< m_size&&b)
			{
			y=0;
			while(y< m_size&&b)
				{
				if(m_sudokuLock[y][x]==1)
				{
					
					for(var k = 0; k <  m_size; k++)
						{
							if(k!=y)
							if(m_sudoku[x][y]== m_sudoku[x][k])
								return  false;
							if(k!=x)
							if(m_sudoku[x][y]== m_sudoku[k][y])
								return false;

						}

				}
				y++;
			}
			x++;
			}

				
		}
	return b;
}
function Page_2()
{
m_size=4;
m_type="Image";
SetTimerPage(1000);
ChangType();
ShowS(0);
  return;
}
function Page_2_OnTimer()
{
KillTimerPage();
GetScriptObj("","new",0);
  return;
}

function Page_1()
{
m_size=9;
m_type="Image";
SetShowObject("","load",0);
SetTimerPage(1000);
ChangType();
ShowS(0);
  return;
}

function Page_1_OnTimer()
{
KillTimerPage();
GetScriptObj("","new",0);
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
 height: 480 
 });

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#32cd32','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005500','4','0','0','','0','0','0','0',0,0,'');
var bg = CreText('bg',114,39,344,312,"",'#ffffff','#ffffff','#009300','#ffffff','',22,'Verdana','Bold','center','top',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','#ffffff','1','1','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _6 = CreText('6',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5 = CreText('5',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _4 = CreText('4',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _3 = CreText('3',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _2 = CreText('2',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _1 = CreText('1',-100,391,78,62,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _0_1 = CreText('0_1',204,283,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
_0_1.on('dblclick',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var _0_2 = CreText('0_2',290,283,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_3 = CreText('0_3',371,283,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _1_0 = CreText('1_0',122,218,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _2_0 = CreText('2_0',122,148,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _3_0 = CreText('3_0',122,82,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _0_0 = CreText('0_0',122,283,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _1_1 = CreText('1_1',204,218,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}

 );
var _1_2 = CreText('1_2',290,218,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_3 = CreText('1_3',371,218,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_1 = CreText('2_1',204,148,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_2 = CreText('2_2',290,148,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_3 = CreText('2_3',371,148,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_1 = CreText('3_1',205,82,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_2 = CreText('3_2',290,82,78,62,"",'rgba(0,0,0,0)','#ffffe0','#000000','#000000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_3 = CreText('3_3',371,82,78,62,"",'rgba(0,0,0,0)','#ffffe0','#ff0000','#ff0000','',36,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',1,-2,'rgba(0,0,0,0)',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _new = CreText('new',466,75,113,28,"Tạo mới",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
_new.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var b= false;
var a_tem=[9]=[9];
var count=1;
while(!b)
{
	SetText("","kq","Game đang khởi tạo: "+count);
	Init();
	Gen(6);
	GetDaTa(a_tem);
	if(Solve()==1)
	{
	GetDaTa(m_kq);
	SetDaTa(a_tem);
	b= true;
	}
	count++;
	Delay(500);
}
if(b)
	{
		var tam=1;
		for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
			if(m_sudoku[y][x]!=0)
				{
				SetText("",y+"_"+x,m_sudoku[y][x]);
				if(m_type=="Image")
				{
				SetFontColor("",y+"_"+x,-1);
				SetColorEx("",y+"_"+x,-1,"ID_"+m_sudoku[y][x]);
				}
				else 	SetFontColor("",y+"_"+x,255);
				m_sudokuLock[y][x]=0;
				MoveObjectTo("",tam,GetLeft("",y+"_"+x), GetTop("",y+"_"+x));
				tam++;
				}
			else 
				{
				SetText("",y+"_"+x,"");
				SetColorEx("",y+"_"+x);
				if(m_type=="Image")
				SetFontColor("",y+"_"+x,-1);
				else
				SetFontColor("",y+"_"+x,RGB(0,0,0));
				m_sudokuLock[y][x]=1;
				}
			}
	SetText("","kq",GetTextFromID("ID_TEXT_HELP"));
	}
  return;
}
 );
var Drawtext_3 = CreText('Draw text_3',466,113,113,28,"Kiểm tra",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(Test()== true)
{
SetText("","kq","Chúc mừng bạn!");
return;
}

var d=0;
var count=0;
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
			if(m_sudokuLock[y][x]==1)
				{
				if(m_sudoku[y][x]==m_kq[y][x])
					{
						d++;
					}
				count++;
				}
			}
var kq="";
if(d==count) kq= "Chúc mừng bạn";
else kq= "Bạn làm đúng "+d+ " trong "+ count +" vị trí.";
SetText("","kq",kq);
Delay(2000);
SetText("","kq",GetTextFromID("ID_TEXT_HELP"));
}
 );
var Drawtext_4 = CreText('Draw text_4',466,151,113,28,"Đáp án",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
/*if(Solve()==0)
	{
	Message("Xin lỗi! Không có đáp án");
	return;
	}*/
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				SetText("",y+"_"+x,m_kq[y][x]);
				if(m_type=="Image")
				{
				SetFontColor("",y+"_"+x,-1);
				SetColorEx("",y+"_"+x,-1,"ID_"+m_kq[y][x]);
				}
				else
				{ 	
				if(m_sudokuLock[y][x]==0)
				SetFontColor("",y+"_"+x,255);
				else 	SetFontColor("",y+"_"+x,RGB(0,0,0));
				}
				}
			
  return;
}
 );
var kq = CreText('kq',112,356,482,112,"Cách chơi:\r\nBạn click vào những ô trống, để thay đổi những con vật mà bạn muốn, sao cho trên mỗi dòng, mỗi cột và ô vuông 2x2 không có con nào giống nhau.\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Verdana','Normal','left','top',0,'0.00','0','0',1,'#00ff00','#ffffff','0','0','rgba(0,0,0,0)','1','1','4','1',0,-1,'rgba(0,0,0,0)',0,1.50);
var Drawtext_6 = CreText('Draw text_6',606,5,30,17,"X",'#ff6820','#ff0000','#ffe4e1','#ffe4e1','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseFile();
  return;
}
 );
var www = CreText('www',380,461,174,15,"www.kidgrown.com",'#005500','#005500','#ffffff','#ffff00','',12,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#005500','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var chon_so = CreText('chon_so',465,187,115,28,"Chọn số",'#ffff00','#ffffe0','#000000','#ff0000','',14,'Verdana','Bold','right','middle',0,'0.00','32','32',2,'#000000','#ffff00','0','1','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
chon_so.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(m_type=="Number")
{
m_type="Image";
SetText("","","Chọn số");
var name="";
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				name=y+"_"+x;
				SetFontColor("",name,-1);
				SetColorEx("",name,-1,"ID_"+GetText("",name));
			}
}
else 
{
var name="";
m_type="Number";
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				name=y+"_"+x;
				if(m_sudokuLock[y][x]==0)
				SetFontColor("",name,255);
				else SetFontColor("",name,RGB(0,0,0));
				SetColorEx("",name);
			}
SetText("","","Chọn hình");
}
ChangType();
			
  return;
}
 );
var next = CreText('next',467,221,62,28,":::",'#ffff00','#ffffe0','#000000','#000000','',26,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var tttt = CreText('tttt',128,49,316,26,"Trò chơi Sudoku 4x4\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','#ff6820','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var s1 = CreText('s1',19,91,34,28,"1",'#ffffff','#ffffff','#000000','#000000','ID_1.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s2 = CreText('s2',53,91,34,28,"2",'#ffffff','#ffffff','#000000','#000000','ID_2.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s3 = CreText('s3',20,117,34,28,"3",'#ffffff','#ffffff','#000000','#000000','ID_3.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s4 = CreText('s4',54,117,34,28,"4",'#ffffff','#ffffff','#000000','#000000','ID_4.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var Image_1 = CreText('Image_1',471,190,20,21,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image_2 = CreText('Image_2',538,221,41,28,'','rgba(0,0,0,0)','','','','ID_IMAGE5.GIF',0,'','','','',0,'0.00','32','32',2,'#000000','','2','2','','0','0','4','1',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Print("bg");
  return;
}
 );
Page_2.add(Page2_Backrounnd,bg,_6,_5,_4,_3,_2,_1,_0_1,_0_2,_0_3,_1_0,_2_0,_3_0,_0_0,_1_1,_1_2,_1_3,_2_1,_2_2,_2_3,_3_1,_3_2,_3_3,_new,Drawtext_3,Drawtext_4,kq,Drawtext_6,www,chon_so,next,tttt,s1,s2,s3,s4,Image_1,Image_2);
stage.add(Page_2);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#32cd32','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005500','4','0','0','','0','0','0','0',0,0,'');
var bg = CreText('bg',33,37,482,432,"",'#ffffff','#ffffff','#ff6820','#ffffff','',24,'Verdana','Bold','center','top',0,'0.00','32','32',3,'#00008b','#ffffff','0','0','#ffffff','1','1','4','1',4,4,'#666666',0,1.50);
var _24 = CreText('24',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var Image_1 = CreText('Image_1',601,2,33,19,'','rgba(0,0,0,0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseFile();
  return;
}
 );
var _new = CreText('new',524,40,104,28,"Tạo mới",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
_new.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

var b= false;
var a_tem=[9]=[9];
var count=1;
for(count=1; count<30;count++)
MoveObjectTo("",count,-1,-1);
count=1;
SetShowObject("","load",1);
MoveObjectTo("","load",-1,-1);
SetText("","kq","Game đang khởi tạo...");
while(!b)
{
	Delay(100);
	Init();
	Gen(Random(20)+10);
	GetDaTa(a_tem);
	if(Solve()==1)
	{
	GetDaTa(m_kq);
	SetDaTa(a_tem);
	b= true;
	}
	count++;
	
}
if(b)
	{
		SetShowObject("","load",0);
		var tam=1;
		for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
			if(m_sudoku[y][x]!=0)
				{
				SetText("",y+"_"+x,m_sudoku[y][x]);
				if(m_type=="Image")
				{
				SetFontColor("",y+"_"+x,-1);
				SetColorEx("",y+"_"+x,-1,"ID_"+m_sudoku[y][x]);
				}
				else 	SetFontColor("",y+"_"+x,255);
				m_sudokuLock[y][x]=0;
				MoveObjectTo("",tam,GetLeft("",y+"_"+x), GetTop("",y+"_"+x));
				tam++;
				}
			else 
				{
				SetText("",y+"_"+x,"");
				SetColorEx("",y+"_"+x);
				if(m_type=="Image")
				SetFontColor("",y+"_"+x,-1);
				else
				SetFontColor("",y+"_"+x,RGB(0,0,0));
				m_sudokuLock[y][x]=1;
				}
			}
	SetText("","kq",GetTextFromID("ID_TEXT_HELP"));
	}
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',524,75,104,28,"Kiểm tra",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(Test()== true)
{
SetText("","kq","Chúc mừng bạn!");
return;
}

var d=0;
var count=0;
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
			if(m_sudokuLock[y][x]==1)
				{
				if(m_sudoku[y][x]==m_kq[y][x])
					{
						d++;
					}
				count++;
				}
			}
var kq="";
if(d==count) kq= "Chúc mừng bạn";
else kq= "Bạn làm đúng "+d+ " trong "+ count +" vị trí.";
SetText("","kq",kq);
Delay(2000);
SetText("","kq",GetTextFromID("ID_TEXT_HELP"));
}
 );
var Drawtext_2 = CreText('Draw text_2',524,110,104,28,"Đáp án",'#a52a00','#a52a00','#000000','#ffffff','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
/*if(Solve()==0)
	{
	Message("Xin lỗi! Không có đáp án");
	return;
	}*/
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				SetText("",y+"_"+x,m_kq[y][x]);
				if(m_type=="Image")
				{
				SetFontColor("",y+"_"+x,-1);
				SetColorEx("",y+"_"+x,-1,"ID_"+m_kq[y][x]);
				}
				else 		
				{
				if(m_sudokuLock[y][x]==0)
				SetFontColor("",y+"_"+x,255);
				else 				SetFontColor("",y+"_"+x,RGB(0,0,0));
				}
				}
			
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',524,145,104,28,"Chọn số",'#ffff00','#ffffe0','#000000','#000000','',14,'Verdana','Bold','right','middle',0,'0.00','32','32',2,'#000000','#ffff00','0','1','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(m_type=="Number")
{
m_type="Image";
SetText("","","Chọn số");
var name="";
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				name=y+"_"+x;
				SetFontColor("",name,-1);
				SetColorEx("",name,-1,"ID_"+GetText("",name));
			}
}
else 
{
var name="";
m_type="Number";
for(var y = 0; y < m_size; y++)
		for(var x = 0; x <  m_size; x++)
			{
				name=y+"_"+x;
				if(m_sudokuLock[y][x]==0)
				SetFontColor("",name,255);
				else SetFontColor("",name,RGB(0,0,0));
				SetColorEx("",name);
			}
SetText("","","Chọn hình");
}
ChangType();
  return;
}
 );
var kq = CreText('kq',521,227,111,222,"Cách chơi:\r\nBạn click vào những ô trống, để thay đổi những con vật(số) mà bạn muốn, sao cho trên mỗi dòng, mỗi cột và ô vuông 2x2(3x3) không có con(số) nào giống nhau.\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',12,'Verdana','Normal','left','top',0,'0.00','32','32',1,'#00ff00','#ffffff','0','0','rgba(0,0,0,0)','1','1','4','1',0,-1,'rgba(0,0,0,0)',0,1.50);
kq.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetVar("b",0);
  return;
}
 );
var Drawtext_8 = CreText('Draw text_8',522,454,107,15,"kidgrown.com",'#005500','#005500','#ffffff','#ffffff','',10,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'#00ff00','#005500','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _6 = CreText('6',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5 = CreText('5',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _4 = CreText('4',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _3 = CreText('3',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _2 = CreText('2',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _1 = CreText('1',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _7 = CreText('7',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8 = CreText('8',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _9 = CreText('9',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _10 = CreText('10',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _11 = CreText('11',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _12 = CreText('12',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _13 = CreText('13',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _14 = CreText('14',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _15 = CreText('15',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _16 = CreText('16',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _17 = CreText('17',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _18 = CreText('18',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _19 = CreText('19',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _20 = CreText('20',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _21 = CreText('21',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _22 = CreText('22',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _23 = CreText('23',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _27 = CreText('27',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _28 = CreText('28',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _29 = CreText('29',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _30 = CreText('30',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8_0 = CreText('8_0',38,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8_2 = CreText('8_2',138,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _8_1 = CreText('8_1',88,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetScriptObj("","1_1",0);
return;
}
 );
var _8_3 = CreText('8_3',198,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _8_4 = CreText('8_4',248,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _8_5 = CreText('8_5',298,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8_6 = CreText('8_6',363,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8_7 = CreText('8_7',413,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _8_8 = CreText('8_8',463,42,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_8_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _7_0 = CreText('7_0',38,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _7_1 = CreText('7_1',88,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_2 = CreText('7_2',138,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_3 = CreText('7_3',198,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_4 = CreText('7_4',248,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_5 = CreText('7_5',298,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_6 = CreText('7_6',363,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_7 = CreText('7_7',413,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _7_8 = CreText('7_8',463,87,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_7_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _6_0 = CreText('6_0',38,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _6_1 = CreText('6_1',88,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_2 = CreText('6_2',138,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_3 = CreText('6_3',198,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_4 = CreText('6_4',248,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_5 = CreText('6_5',298,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_6 = CreText('6_6',363,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_7 = CreText('6_7',413,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _6_8 = CreText('6_8',463,132,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_6_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5_0 = CreText('5_0',38,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5_1 = CreText('5_1',88,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _5_2 = CreText('5_2',138,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _5_3 = CreText('5_3',198,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _5_4 = CreText('5_4',248,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _5_5 = CreText('5_5',298,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _5_6 = CreText('5_6',363,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _25 = CreText('25',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _26 = CreText('26',-67,249,47,43,"",'#ffffe0','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#00ff00','3','1','rgba(0,0,0,0)','0','0','4','1',2,-2, 'rgba(0,0,0,0)',0,1.50);
_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _0_0 = CreText('0_0',38,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_1 = CreText('0_1',88,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
_0_1.on('dblclick',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var _0_2 = CreText('0_2',138,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_3 = CreText('0_3',198,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_4 = CreText('0_4',248,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_5 = CreText('0_5',298,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_6 = CreText('0_6',363,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_7 = CreText('0_7',413,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _0_8 = CreText('0_8',463,420,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_0_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}
 );
var _1_8 = CreText('1_8',463,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
}
 );
var _1_7 = CreText('1_7',413,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_6 = CreText('1_6',363,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_5 = CreText('1_5',298,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_4 = CreText('1_4',248,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_3 = CreText('1_3',198,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_2 = CreText('1_2',138,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _1_1 = CreText('1_1',88,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
  return;
}

 );
var _1_0 = CreText('1_0',38,374,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _2_0 = CreText('2_0',38,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _2_1 = CreText('2_1',88,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_2 = CreText('2_2',138,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_3 = CreText('2_3',198,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_4 = CreText('2_4',248,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_5 = CreText('2_5',298,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_6 = CreText('2_6',363,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_7 = CreText('2_7',413,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _2_8 = CreText('2_8',463,328,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}
 );
var _3_8 = CreText('3_8',463,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _3_7 = CreText('3_7',413,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_6 = CreText('3_6',363,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_5 = CreText('3_5',298,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_4 = CreText('3_4',248,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_3 = CreText('3_3',198,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_2 = CreText('3_2',138,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_1 = CreText('3_1',88,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _3_0 = CreText('3_0',38,275,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _4_0 = CreText('4_0',38,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _4_1 = CreText('4_1',88,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_2 = CreText('4_2',138,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_3 = CreText('4_3',198,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_4 = CreText('4_4',248,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_5 = CreText('4_5',298,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
_4_5.on('dblclick',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var _4_6 = CreText('4_6',363,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_7 = CreText('4_7',413,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var _4_8 = CreText('4_8',463,229,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_4_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5_8 = CreText('5_8',463,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click();
return;
}

 );
var _5_7 = CreText('5_7',413,183,47,43,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',14,'Verdana','Bold Italic','center','middle',0,'0.00','32','32',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#ccffff',0,1.50);
_5_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;GetScriptObj("","1_1",0);return;}
 );
var load = CreText('load',214,196,110,109,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF2.GIF',0,'','','','',0,'0.00','32','32',2,'#0000ff','','2','2','','0','0','4','1',0,0, '#808080');
var Drawtext_3 = CreText('Draw text_3',55,4,316,26,"Trò chơi Sudoku 9X9\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',24,'Verdana','Bold','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','#ff6820','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_5 = CreText('Draw text_5',525,183,40,27,"::",'#ffff00','#ffffe0','#000000','#ff0000','',28,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#000000','#ffff00','0','1','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
Drawtext_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var s1 = CreText('s1',-125,93,34,28,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_1.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s2 = CreText('s2',-95,93,34,28,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_2.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s3 = CreText('s3',-54,92,34,28,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_3.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s4 = CreText('s4',-126,122,34,28,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_4.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s5 = CreText('s5',-95,121,34,28,"5",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_5.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s6 = CreText('s6',-53,125,34,28,"6",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_6.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s7 = CreText('s7',-129,151,34,28,"7",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_7.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s8 = CreText('s8',-95,150,34,28,"8",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_8.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var s9 = CreText('s9',-53,150,34,28,"9",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_9.PNG',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'#ff0000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',1,0, '#fffe99',0,1.50);
s9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetSelect();
  return;
}
 );
var Image_2 = CreText('Image_2',526,149,20,21,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image_3 = CreText('Image_3',586,183,40,27,'','rgba(0,0,0,0)','','','','ID_IMAGE5.GIF',0,'','','','',0,'0.00','32','32',2,'#000000','','2','2','','0','0','4','1',0,0, '#808080');
Image_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Print("bg");
  return;
}
 );
Page_1.add(Page1_Backrounnd,bg,_24,Image_1,_new,Drawtext_1,Drawtext_2,Drawtext_7,kq,Drawtext_8,_6,_5,_4,_3,_2,_1,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_27,_28,_29,_30,_8_0,_8_2,_8_1,_8_3,_8_4,_8_5,_8_6,_8_7,_8_8,_7_0,_7_1,_7_2,_7_3,_7_4,_7_5,_7_6,_7_7,_7_8,_6_0,_6_1,_6_2,_6_3,_6_4,_6_5,_6_6,_6_7,_6_8,_5_0,_5_1,_5_2,_5_3,_5_4,_5_5,_5_6,_25,_26,_0_0,_0_1,_0_2,_0_3,_0_4,_0_5,_0_6,_0_7,_0_8,_1_8,_1_7,_1_6,_1_5,_1_4,_1_3,_1_2,_1_1,_1_0,_2_0,_2_1,_2_2,_2_3,_2_4,_2_5,_2_6,_2_7,_2_8,_3_8,_3_7,_3_6,_3_5,_3_4,_3_3,_3_2,_3_1,_3_0,_4_0,_4_1,_4_2,_4_3,_4_4,_4_5,_4_6,_4_7,_4_8,_5_8,_5_7,load,Drawtext_3,Drawtext_5,s1,s2,s3,s4,s5,s6,s7,s8,s9,Image_2,Image_3);
stage.add(Page_1);
InitLacVietScript();
};
