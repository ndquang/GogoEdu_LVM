folder_Resource ='data/game_board';
/*
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
var LEVELS = [  { c:3, r:4, e:2 },  { c:3, r:5, e:2 },  { c:3, r:5, e:1 },  { c:4, r:5, e:2 },  { c:4, r:6, e:2 },  { c:4, r:6, e:1 },  { c:5, r:6, e:2 },  { c:5, r:7, e:2 },  { c:5, r:7, e:1 },{ c:5, r:7, e:1 }];
var LEVEL_NAMES = [ "1. Làm quen",  "2. Biết chơi rồi",  "3. Khéo tay",  "4. Tinh mắt",  "5. Nhanh trí",  "6. Rất thông minh",  "7. Linh hoạt",  "8. Rất giỏi",  "9. Cao thủ",  "10. Huyền thoại"];

function setupLevel(level) {
  let cfg = LEVELS[level - 1];

  LEVEL_CONFIG.columns = cfg.c;
  LEVEL_CONFIG.rows = cfg.r;
  LEVEL_CONFIG.emptyRows = cfg.e;

  LEVEL_CONFIG.symbolCount = cfg.c;
  LEVEL_CONFIG.fillPerSymbol = cfg.r - cfg.e;
  SetText("","level",LEVEL_NAMES[level]);
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
  let maxRow = 7;
  for (let c = 0; c < maxCol; c++) {
	{
		if (c >= LEVEL_CONFIG.columns)
		SetShowObject("", "col_"+c, 0);			
		for (let r = 0; r < maxRow; r++) {
		  // nếu ô này không thuộc level hiện tại → ẩn
		  if (c >= LEVEL_CONFIG.columns || r >= LEVEL_CONFIG.rows) {
			let name = `_${c}_${r}`;
			SetShowObject("", name, 0);
		  }
		}
	}
  }
  CELL_WIDTH = calcCellHeight();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function generateLevelByRow() {
  let pool = [];
  var usedSymbols = LEVEL_CONFIG.symbols.slice(0,LEVEL_CONFIG.columns);
  // tạo pool cân bằng
  usedSymbols.forEach(s => {
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
	ghostObj.position({x: 0,y: objectNext.y() - firstObj.y()});
	ghostObj.listening(true); 
	//SetColorEx("",_name, currentSkin[EMPTY]);
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
	 let txt_msg = "🏆" + LEVEL_NAMES[i_level-1]+"\r\n";
	for(i =0 ;i< i_level;i++)
		txt_msg=txt_msg+"⭐";
	return txt_msg;
}
function UpItem(){
  if (!pickedGroup || groupObjects.length === 0) return;
  let targetCol = getColByX();
  
  let emptyCount = targetCol >= 0 ? countEmpty(targetCol) : 0;

  if (targetCol < 0 || emptyCount < groupObjects.length) {
	console.log("Khong du cho...");
    return cancelDrop();
  }
   // 🔁 THẢ CÙNG CỘT → KHÔNG LÀM GÌ
  if (targetCol === pickedCol) {
    console.log("Drop same column → cancel");
    return cancelDrop();
  }
  // 👉 hợp lệ, bước sau: snap + commit
  commitDrop(targetCol);
  console.log("Drop OK at col", targetCol);
  if (isCompleted()) {
  console.log("🎉 HOÀN THÀNH!");
  UpdateScore(i_level,LEVEL_NAMES[i_level-1]);
  SetText("","msg", genTextMessage());
  SetShowObject("","msg",1);
  }
  return cancelDrop();
}
function isCompleted() {
  for (let c = 0; c < LEVEL_CONFIG.columns; c++) {
    let colValue = null;
    let seenEmpty = false;

    for (let r = 0; r < LEVEL_CONFIG.rows; r++) {
      let v = state[c][r];

      if (v === EMPTY) {
        // gặp EMPTY → từ đây trở xuống phải là EMPTY hết
        seenEmpty = true;
        continue;
      }

      // gặp giá trị nhưng phía trên đã có EMPTY → sai (EMPTY không ở dưới cùng)
      if (seenEmpty) {
        return false;
      }

      // xác định giá trị của cột
      if (colValue === null) {
        colValue = v;
      }
      // khác giá trị trong cùng cột → sai
      else if (v !== colValue) {
        return false;
      }
    }
  }
  return true;
}

function StartGame()
{
SetShowObject("","",0);
  randomSkin();
  setupLevel(i_level);
  initBoard();
  generateLevelByRow();
  renderBoard();
}

window.callBackGetVer = function callBackGetVer(_score, _note)
{
	if ( typeof _score != "undefined")
	{
		i_level = _score;
	}
	StartGame();
}
*/
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
 width: 350,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,350,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var col_2 = CreText('col_2',148,92,52,344,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var col_1 = CreText('col_1',84,92,52,344,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var col_0 = CreText('col_0',25,92,52,344,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0_0 = CreText('_0_0',29,386,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_1 = CreText('_0_1',29,336,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_2 = CreText('_0_2',29,288,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_3 = CreText('_0_3',29,240,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_4 = CreText('_0_4',29,192,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_0 = CreText('_1_0',88,386,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_1 = CreText('_1_1',88,336,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_2 = CreText('_1_2',88,288,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_3 = CreText('_1_3',88,240,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_4 = CreText('_1_4',88,192,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_0 = CreText('_2_0',152,386,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_1 = CreText('_2_1',152,336,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_2 = CreText('_2_2',152,288,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_3 = CreText('_2_3',152,240,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_4 = CreText('_2_4',152,192,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var col_3 = CreText('col_3',210,92,52,344,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3_0 = CreText('_3_0',214,387,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_1 = CreText('_3_1',214,337,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_2 = CreText('_3_2',214,289,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_3 = CreText('_3_3',214,241,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_4 = CreText('_3_4',214,193,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var col_4 = CreText('col_4',275,92,52,344,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',2,'#ff6820','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _4_0 = CreText('_4_0',279,386,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_1 = CreText('_4_1',279,336,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_2 = CreText('_4_2',279,288,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_3 = CreText('_4_3',279,240,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_4 = CreText('_4_4',279,192,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_5 = CreText('_0_5',29,144,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_5 = CreText('_1_5',88,144,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_5 = CreText('_2_5',152,144,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_5 = CreText('_3_5',214,145,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_5 = CreText('_4_5',279,144,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _0_6 = CreText('_0_6',29,96,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _1_6 = CreText('_1_6',88,96,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _2_6 = CreText('_2_6',152,96,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _3_6 = CreText('_3_6',214,97,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _4_6 = CreText('_4_6',279,96,45,45,"",'#efefef','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#c0c0c0','#efefef','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var level = CreText('level',1,0,348,44,"",'#0080ff','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',53,217,276,70,"\r\n🏆 1. Làm quen\r\n⭐",'#ff0000','#ff0000','#ffff00','#ffffff','',26,'Arial','Normal','center','middle',12,'0.00','2','2',5,'#ffff00','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_level++;
StartGame();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,col_2,col_1,col_0,_0_0,_0_1,_0_2,_0_3,_0_4,_1_0,_1_1,_1_2,_1_3,_1_4,_2_0,_2_1,_2_2,_2_3,_2_4,col_3,_3_0,_3_1,_3_2,_3_3,_3_4,col_4,_4_0,_4_1,_4_2,_4_3,_4_4,_0_5,_1_5,_2_5,_3_5,_4_5,_0_6,_1_6,_2_6,_3_6,_4_6,level,msg);
stage.add(Page_1);
InitLacVietScript();
};
