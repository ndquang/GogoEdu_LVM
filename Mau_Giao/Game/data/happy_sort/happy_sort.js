folder_Resource ='/data/happy_sort';
var SYMBOLS = {EMPTY: 0,A: 1,B: 2,C: 3, D:4,E:5,F:6};
var EMPTY = SYMBOLS.EMPTY;

var SKIN_COLOR = {0: " ",1: "🔴",2: "🟡",3: "🔵",4: "🟢",5: "🟠",6: "🟣"};
var SKIN_ANIMAL = {0: " ",1: "🐶",2: "🐱",3: "🐸",4: "🐰",5: "🐷",6: "🐼"};
var SKIN_FRUIT = {0: " ",1: "🍌",2: "🍇",3: "🍎",4: "🍍",5: "🍊",6: "🍓"};
var SKIN_TRANSPORT = {0: " ",1: "🚕",2: "✈️",3: "🚲",4: "🚀",5: "🚁",6: "🚚"};
var SKINS = [SKIN_COLOR, SKIN_ANIMAL,SKIN_FRUIT,SKIN_TRANSPORT];
// Cấu hình LEVEL (độ khó)
var LEVEL_CONFIG = {columns: 3,rows: 5, fillPerSymbol: 3, emptyRows: 2, symbols: [SYMBOLS.A, SYMBOLS.B, SYMBOLS.C, SYMBOLS.D, SYMBOLS.E, SYMBOLS.F]};

var board = [];
var state = [];
let currentSkin = SKIN_FRUIT; // default skin
var i_level = 1;
var LEVELS = [ { c:3, r:5, e:2 },    { c:3, r:6, e:2 },    { c:3, r:7, e:2 },    { c:4, r:6, e:2 },   { c:4, r:7, e:2 },    { c:4, r:8, e:2 },  { c:5, r:7, e:2 },  { c:5, r:8, e:2 },  { c:5, r:8, e:2 },  { c:5, r:8, e:2 } ];
var LEVEL_NAMES = [ "1. Làm quen",  "2. Biết chơi rồi",  "3. Khéo tay",  "4. Tinh mắt",  "5. Nhanh trí",  "6. Rất thông minh",  "7. Linh hoạt",  "8. Rất giỏi",  "9. Cao thủ",  "10. Huyền thoại"];

function setupLevel(level) {
  let cfg = LEVELS[level-1];

  LEVEL_CONFIG.columns = cfg.c;
  LEVEL_CONFIG.rows = cfg.r;
  LEVEL_CONFIG.emptyRows = cfg.e;
  LEVEL_CONFIG.fillPerSymbol = cfg.r - cfg.e;
  SetText("","level","🔒 Cấp "+LEVEL_NAMES[level-1] + " 🌀");
}

function randomSkin() {
  let idx = Math.floor(Math.random() * SKINS.length);
  currentSkin = SKINS[idx];
}

function calcCellHeight() {
  let first = FindShape("", "_0_0");
  let second = FindShape("", "_0_1");
  if (!first || !second) return 0;
  return  Math.abs(first.y() - second.y());
}

function initBoard() {
CELL_WIDTH = calcCellHeight();
  board = [];
  state = [];
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    board[c] = [];
    state[c] = [];
    for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
      let name = `_${c}_${r}`;
      board[c][r] = name;
      state[c][r] = EMPTY;
      SetShowObject("", name, 1);
    }
  }
  // Ẩn những ô vượt quá columns / rows (layout tối đa 5x7)
  let maxCol = 5;
  let maxRow = 8;

  for (let c = 0; c < maxCol; c++) {
	{
		for (let r = 0; r < maxRow; r++) {
		  // nếu ô này không thuộc level hiện tại → ẩn
		  if (c >= LEVEL_CONFIG.columns || r >= LEVEL_CONFIG.rows) {
			let name = `_${c}_${r}`;
			SetShowObject("", name, 0);
		  }
		}
	}
  }
  
}

function getBottomEmptyCount(col) {
  let rows = LEVEL_CONFIG.rows;
  let count = 0;
  for (let r = rows - 1; r >= 0; r--) {
    if (state[col][r] === EMPTY)
      count++;
    else
      break;
  }
  return count;
}

function shuffleByMoves(times) {
  for (let i = 0; i < times; i++) {
    randomValidMove();
  }
}


function getNonEmptyColumns() {
  let result = [];
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
      if (state[c][r] !== EMPTY) {
        result.push(c);
        break;
      }
    }
  }
  return result;
}

function randomValidMove() {

  let cols = LEVEL_CONFIG.columns;
  let rows = LEVEL_CONFIG.rows;

  let nonEmptyCols = getNonEmptyColumns();
  if (nonEmptyCols.length === 0) return false;

  let from = nonEmptyCols[Math.floor(Math.random() * nonEmptyCols.length)];

  // chọn row đầu tiên có block (không random vô ích)
  let startRow = Math.floor(Math.random() * rows);

  if (state[from][startRow] === EMPTY)
  return false;


  let group = [];
  for (let r = startRow; r < rows; r++) {
    if (state[from][r] !== EMPTY)
      group.push(state[from][r]);
    else
      break;
  }

  let groupSize = group.length;

  // tìm các cột có đủ chỗ
  let validTargets = [];
  for (let c = 0; c < cols; c++) {
    if (c === from) continue;
    if (getBottomEmptyCount(c) >= groupSize)
      validTargets.push(c);
  }

  if (validTargets.length === 0) return false;

  let to = validTargets[Math.floor(Math.random() * validTargets.length)];

  // xóa from
  for (let r = startRow; r < startRow + groupSize; r++) {
    state[from][r] = EMPTY;
  }
  // chèn to
  let emptySlots = getBottomEmptyCount(to);
  let insertStart = rows - emptySlots;

  for (let i = 0; i < groupSize; i++) {
    state[to][insertStart + i] = group[i];
  }
  return true;
}


function generateSolvableLevel() {

  let cols = LEVEL_CONFIG.columns;
  let rows = LEVEL_CONFIG.rows;
  let fillHeight = rows - LEVEL_CONFIG.emptyRows;

  state = Array.from({ length: cols }, (_, c) =>
    Array.from({ length: rows }, (_, r) =>
      r < fillHeight ? c + 1 : EMPTY
    )
  );
  shuffleByMoves(i_level*30);
}


function renderBoard() {
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
	  let objName = "_" + c + "_" + r;
	  let value = currentSkin[state[c][r]];
	  SetText("", objName, value);
    }
  }
  InvalidateObj("","");
}

var CELL_WIDTH = 0;
var pickedGroup = null; // là object temp di chuyển
var pickedCol = null;
var groupObjects = []; // là object thật ko di chuyển
function getGroup() {
  groupObjects = [];
  pickedCol = null;
  var objName = GetName("");
  if (!objName) return;
  let firstObj = FindShape(objName);
  let startX = firstObj.x();
  let startY = firstObj.y();
  var parts = objName.split("_");
  var col = parseInt(parts[1]);
  var row = parseInt(parts[2]);
  PlaySound("SND_CLICK");
  if (state[col][row] === EMPTY) return;

  pickedCol = col;

  if (!pickedGroup) {
    pickedGroup = new Kinetic.Group({name: "pickedGroup",x:startX,y:startY,width:49,height:248, draggable: true});
  }
  pickedGroup.removeChildren();
  pickedGroup.listening(true);

  for (let r = row; r < LEVEL_CONFIG.rows; r++) {
    let symbol = state[col][r];
    if (symbol === EMPTY) break;
	let _name = "_" + col + "_" + r;
    let objectNext = FindShape("", _name);
	let ghostObj = objectNext.clone();
	ghostObj.setStrokeWidth(0.0001);
	ghostObj.position({x: 0,y: objectNext.y() - firstObj.y()});
	ghostObj.listening(true); 
	SetText("",_name, currentSkin[EMPTY]);
    pickedGroup.add(ghostObj);
	groupObjects.push(objectNext);
  }
  var Page_1 = FindPage("Page_1");
  Page_1.add(pickedGroup);
  pickedGroup.moveToTop();
  pickedGroup.startDrag();
  InvalidateObj("","");
}

function getColByX() {
  if (!pickedGroup) return -1;
  var groupCenterX =
    pickedGroup.x() + pickedGroup.width() / 2;
  // lấy object đầu tiên của mỗi cột (row nào cũng được)
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    var cell = FindShape("", `_${c}_0`);
    if (!cell) continue;
    var left = cell.x();
    var right = left + CELL_WIDTH;
    if (groupCenterX >= left && groupCenterX < right) {
      return c;
    }
  }
  return -1;
}

function cancelDrop() {
	
  renderBoard();
  InvalidateObj("","");
  groupObjects.length = 0;
  if(pickedGroup)
  {
  DeleteObj("","pickedGroup");
  pickedGroup = null;
  }
 
}

function countEmpty(col) {
  let count = 0;
  for (let r = LEVEL_CONFIG.rows - 1; r >= 0; r--) {
    if (state[col][r] === EMPTY) count++;
    else break;
  }
  return count;
}

function getColRowFromObj(obj){
  let name = obj.name();        // "_1_3"+
  if (!name) return null;

  let parts = name.split("_");
  if (parts.length < 3) return null;
  return {col: parseInt(parts[1], 10),row: parseInt(parts[2], 10)};
}

function commitDrop(targetCol){
  // tìm row trống đầu tiên từ trên xuống
  let insertRow = -1;
  for (let r = 0; r < LEVEL_CONFIG.rows; r++){
    if (state[targetCol][r] === EMPTY){
      insertRow = r;
      break;
    }
  }

  if (insertRow < 0){
    return cancelDrop();
  }
  // duyệt group từ trên xuống hay dưới lên đều OK
  // vì state đang xếp liên tục, không có lỗ
  for (let i = 0; i < groupObjects.length; i++){
    let obj = groupObjects[i];
    let pos = getColRowFromObj(obj);
    let value = state[pos.col][pos.row];
    state[pos.col][pos.row] = EMPTY;
    state[targetCol][insertRow] = value;
    insertRow++;
  }
}

function genTextMessage()
{
	let txt_msg = "";
	for(i =0 ;i< i_level;i++)
		txt_msg=txt_msg+"⭐";
	txt_msg = txt_msg  + "\r\n🏆 Cấp " + LEVEL_NAMES[i_level-1]+ " 🏆\r\n";
	txt_msg = txt_msg + "Tiếp ➜";
	return txt_msg;
}

function UpItem(){
  if (!pickedGroup || groupObjects.length === 0) return;
  let targetCol = getColByX();
  
  let emptyCount = targetCol >= 0 ? countEmpty(targetCol) : 0;

  if (targetCol < 0 || emptyCount < groupObjects.length) {
  PlaySound("SND_ERROR");
	console.log("Khong du cho...");
    return cancelDrop();
  }
   // 🔁 THẢ CÙNG CỘT → KHÔNG LÀM GÌ
  if (targetCol === pickedCol) {
    console.log("Drop same column → cancel");
    PlaySound("SND_ERROR");
    return cancelDrop();
  }
  // 👉 hợp lệ, bước sau: snap + commit
  commitDrop(targetCol);
  console.log("Drop OK at col", targetCol);
  if (isCompleted()) {
 
 PlaySound("SND_LEVEL");
  console.log("🎉 HOÀN THÀNH!");
  UpdateScore(i_level,LEVEL_NAMES[i_level-1]);
  SetText("","msg", genTextMessage());
  SetShowObject("","msg",1);
  }
   PlaySound("SND_OK");
  return cancelDrop();
}

function isCompleted() {
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {

    let colValue = state[c][0];
    if (colValue === EMPTY) continue;

    for (let r = 1; r < LEVEL_CONFIG.rows; r++) {

      if (state[c][r] === EMPTY)
        break;

      if (state[c][r] !== colValue)
        return false;
    }
  }
  return true;
}

function StartGame()
{
 if (i_level > LEVELS.length)
{
	SetText("","msg","🏁 ĐẾN ĐÍCH!");
	 PlaySound("SND_WIN");
	SetShowObject("","bt_Start",1);
	SetShowObject("","msg",1);
	  InvalidateObj("","");
	return;
}
 SetShowObject("","msg",0);
  PlaySound("SND_START");
  randomSkin();
  setupLevel(i_level);
  initBoard();
  generateSolvableLevel();
  renderBoard();
}

window.callBackGetVer = function callBackGetVer(_score, _note)
{
	if ( typeof _score != "undefined" && _score!=0)
	{
		i_level = _score+1;
	}
	StartGame();
}

function Page_1_OnKeyDown()
{
  return;
}
function Page_1()
{
GetVer("callBackGetVer");
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
 width: 300,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var _0_0 = CreText('_0_0',80,47,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_1 = CreText('_0_1',80,86,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_2 = CreText('_0_2',80,125,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_3 = CreText('_0_3',80,164,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_4 = CreText('_0_4',80,203,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_0 = CreText('_1_0',122,47,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_1 = CreText('_1_1',122,86,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_2 = CreText('_1_2',122,125,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_3 = CreText('_1_3',122,164,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_4 = CreText('_1_4',122,203,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_0 = CreText('_2_0',164,47,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_1 = CreText('_2_1',164,86,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_2 = CreText('_2_2',164,125,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_3 = CreText('_2_3',164,164,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_4 = CreText('_2_4',164,203,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_0 = CreText('_3_0',202,47,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_1 = CreText('_3_1',202,86,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_2 = CreText('_3_2',202,125,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_3 = CreText('_3_3',202,164,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_4 = CreText('_3_4',202,203,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_0 = CreText('_4_0',38,47,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_1 = CreText('_4_1',38,86,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','10','10',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_2 = CreText('_4_2',38,125,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_3 = CreText('_4_3',38,164,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_4 = CreText('_4_4',38,203,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_5 = CreText('_0_5',80,242,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_5 = CreText('_1_5',122,242,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_5 = CreText('_2_5',164,242,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_5 = CreText('_3_5',202,242,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_5 = CreText('_4_5',38,242,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _0_6 = CreText('_0_6',80,281,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_6 = CreText('_1_6',122,281,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_6 = CreText('_2_6',164,281,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_6 = CreText('_3_6',202,281,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_6 = CreText('_4_6',38,281,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var level = CreText('level',3,2,295,39,"1. Làm quen",'#62c400','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',3,'#3f7d00','#cbff97','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
level.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StartGame();
  return;
}
 );
var _0_7 = CreText('_0_7',79,321,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_0_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _1_7 = CreText('_1_7',120,321,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_1_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _2_7 = CreText('_2_7',161,321,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_2_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _3_7 = CreText('_3_7',202,322,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_3_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var _4_7 = CreText('_4_7',38,321,39,39,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#c0c0c0','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpItem();
  return;
}
 );
_4_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
getGroup();
  return;
}
 );
var msg = CreText('msg',5,127,287,67,"1. Làm quen",'#62c400','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','4','0',4,'#3f7d00','#cbff97','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 if (i_level > LEVELS.length)
i_level--;
else
i_level++;
StartGame();
  return;
}
 );
Page_1.add(_0_0,_0_1,_0_2,_0_3,_0_4,_1_0,_1_1,_1_2,_1_3,_1_4,_2_0,_2_1,_2_2,_2_3,_2_4,_3_0,_3_1,_3_2,_3_3,_3_4,_4_0,_4_1,_4_2,_4_3,_4_4,_0_5,_1_5,_2_5,_3_5,_4_5,_0_6,_1_6,_2_6,_3_6,_4_6,level,_0_7,_1_7,_2_7,_3_7,_4_7,msg);
stage.add(Page_1);
InitLacVietScript();
};
