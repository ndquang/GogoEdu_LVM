folder_Resource ='//data/game_board_back';

//SKIN – mapping hiển thị (đổi tự do)

var SYMBOLS = {
  EMPTY: 0,
  A: 1,
  B: 2,
  C: 3
};
var EMPTY = SYMBOLS.EMPTY;

var SKIN_COLOR = {
  0: "#e0e0e0",
  1: "#ff0000",
  2: "#00ff00",
  3: "#0000ff",
};

var SKIN_IMAGE = {
  0: "empty.png",
  1: "apple.png",
  2: "banana.png",
  3: "cherry.png",
};

// Cấu hình LEVEL (độ khó)
var LEVEL_CONFIG = {
  columns: 3,
  rows: 5,
  symbols: [SYMBOLS.A, SYMBOLS.B, SYMBOLS.C],
  fillPerSymbol: 3,   // mỗi symbol bao nhiêu ô
};


var board = [];
var state = [];
let currentSkin = SKIN_COLOR;

function setupLevelConfig() {
  LEVEL_CONFIG.columns = 3;
  LEVEL_CONFIG.rows = 5;
  LEVEL_CONFIG.symbols = [SYMBOLS.A, SYMBOLS.B, SYMBOLS.C];
  LEVEL_CONFIG.fillPerSymbol = 3;
}

function initBoard() {
  board = [];
  state = [];

  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    board[c] = [];
    state[c] = [];
    for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
      board[c][r] = `_${c}_${r}`;
      state[c][r] = EMPTY;
    }
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function generateLevelByRow() {
  let pool = [];

  // tạo pool cân bằng
  LEVEL_CONFIG.symbols.forEach(s => {
    for (let i = 0; i < LEVEL_CONFIG.fillPerSymbol; i++) {
      pool.push(s);
    }
  });

  shuffle(pool);

  // ĐỔ THEO HÀNG
  for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
    for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
      state[c][r] = pool.length ? pool.pop() : EMPTY;
    }
  }
}

function renderBoard(skin) {
  for (let c = 0; c < board.length; c++) {
    for (let r = 0; r < board[c].length; r++) {
      SetColorEx("", board[c][r], skin[state[c][r]]);
    }
  }
  InvalidateObj();
}

function getGroup() {
	
	var pickedGroup = FindShape("","pickedGroup");
  /*
  pickedFrom = null;
  // 1. Lấy name object được click
  var objName = GetName("");   // ví dụ "_0_1"+
  if (!objName) return;
  // 2. Parse cột & hàng
  // "_0_1" -> ["", "0", "1"]
  var parts = objName.split("_");
  var col = parseInt(parts[1]);
  var row = parseInt(parts[2]);

  // 3. Nếu ô đó là EMPTY → không pick
  if (state[col][row] === EMPTY) return;

  pickedFrom = col;

  // 4. Lấy group từ vị trí click đi xuống
  for (let r = row; r < LEVEL_CONFIG.rows; r++) {
    let symbol = state[col][r];

    if (symbol === EMPTY) break;
	let nextName = "_"+col+"_"+r;
	let objNext =  FindShape("",nextName)
    // lưu lại group
    pickedGroup.add(objNext);
    // remove khỏi board (DOWN là nhấc lên)
    state[col][r] = EMPTY;
  }
  */
  InvalidateObj("","");
}

function UpItem()
{}

function Page_1_OnKeyDown()
{
  return;
}
function Page_1()
{
SetMoveView("","pickedGroup",1);
/*
 setupLevelConfig();
  initBoard();
  generateLevelByRow();
  renderBoard(currentSkin);
  */
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
 width: 800,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var _0_0 = CreText('_0_0',307,80,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_1 = CreText('_0_1',307,129,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_2 = CreText('_0_2',307,180,45,45,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_3 = CreText('_0_3',307,232,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_4 = CreText('_0_4',307,279,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_0 = CreText('_1_0',365,77,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_1 = CreText('_1_1',365,126,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_2 = CreText('_1_2',365,177,45,45,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_3 = CreText('_1_3',365,229,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_4 = CreText('_1_4',365,276,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_0 = CreText('_2_0',422,80,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_1 = CreText('_2_1',422,129,45,45,"",'#009300','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_2 = CreText('_2_2',422,180,45,45,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_3 = CreText('_2_3',422,232,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_4 = CreText('_2_4',422,279,45,45,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var pickedGroup = new Kinetic.Group({name:'pickedGroup',x:0,y:0,width:49,height:248});
pickedGroup.add(_0_0,_0_1,_0_2,_0_3,_0_4);
Page_1.add(Page_1_Backrounnd,_1_0,_1_1,_1_2,_1_3,_1_4,_2_0,_2_1,_2_4,pickedGroup);
stage.add(Page_1);
InitLacVietScript();
};
