
var startClick = {};
function floodfill_hexToR(h) {
    return parseInt((floodfill_cutHex(h)).substring(0,2),16)
}
function floodfill_hexToG(h) {
    return parseInt((floodfill_cutHex(h)).substring(2,4),16)
}
function floodfill_hexToB(h) {
    return parseInt((floodfill_cutHex(h)).substring(4,6),16)
}
function floodfill_cutHex(h) {
    return (h.charAt(0)=="#") ? h.substring(1,7):h
}

function floodfill_matchTolerance(pixelPos,color,tolerance){
    var rMax = startR + (startR * (tolerance / 100));
    var gMax = startG + (startG * (tolerance / 100));
    var bMax = startB + (startB * (tolerance / 100));

    var rMin = startR - (startR * (tolerance / 100));
    var gMin = startG - (startG * (tolerance / 100));
    var bMin = startB - (startB * (tolerance / 100));
    
    var r = imageData.data[pixelPos];	
    var g = imageData.data[pixelPos+1];	
    var b = imageData.data[pixelPos+2];
    //
    // If the current pixel matches the clicked color
    if (r === startR && g === startG && b === startB) {
        return true;
    }

    return ((
        (r >= rMin && r <= rMax) 
        && (g >= gMin && g <= gMax) 
        && (b >= bMin && b <= bMax)
        )
        && !(r == floodfill_hexToR(color) 
        && g == floodfill_hexToG(color) 
        && b == floodfill_hexToB(color))
        );
   
}

function floodfill_colorPixel(pixelPos,color){
  imageData.data[pixelPos] = floodfill_hexToR(color);
  imageData.data[pixelPos+1] = floodfill_hexToG(color);
  imageData.data[pixelPos+2] = floodfill_hexToB(color);
  imageData.data[pixelPos+3] = 255;
}
function getImageData(pageName, objectName) {
    update();
    var object = FindShape(pageName, objectName);
    if (object == null) return;
    var context_obj = object.getContext();
    x_obj = object.x() * m_dZoomScale;
    y_obj = object.y() * m_dZoomScale;
    width = object.width() * m_dZoomScale;
    height = object.height() * m_dZoomScale;
    imageData = context_obj.getImageData(x_obj, y_obj + curentPage.y() * m_dZoomScale, width, height);
}
function putImageData(pageName, objectName) {
    var object = FindShape(pageName, objectName);
    if (object == null) return;
    var context = object.getContext();
    x_obj = object.x() * m_dZoomScale;
    y_obj = object.y() * m_dZoomScale;
    width = object.width() * m_dZoomScale;
    height = object.height() * m_dZoomScale;
    context.putImageData(imageData, x_obj, y_obj + curentPage.y() * m_dZoomScale, 0, 0, width, height);
    //phien ban cu co parseInt
}
// update 29/6/2015 by Nguyen Dinh Quang
function PaintDownObj(x, y, objectName, tolerance) {
    var object = FindShape("", objectName);
    if (object == null) return;
    if (object.getPaint() == false)
        return;
    x_obj = parseInt(object.x() * m_dZoomScale); //  + (wclient- stage.getWidth() / 2); khong the bo parseInt
    y_obj = parseInt(object.y() * m_dZoomScale); //   + (hclient- stage.getHeight() / 2 ); khong the bo parseInt
    width = parseInt(object.width() * m_dZoomScale); //khong the bo parseInt
    height = parseInt(object.height() * m_dZoomScale); //khong the bo parseInt
    var context = object.getContext();
    i_paintType = parseInt(object.paintType());
    switch (i_paintType){
        case 10:
            {
                //color = context.strokeStyle;
                color = context.fillStyle;
                var c = context.getImageData(x, y, 1, 1).data;
                if (floodfill_hexToR(color) == c[0] && floodfill_hexToG(color) == c[1] && floodfill_hexToB(color) == c[2])
                    return;
                if (x < x_obj) x = x_obj + 10; // diem o ngoai object
                if (y < y_obj) y = y_obj + 10; //diem o ngoai object
                x = parseInt(x - x_obj);
                y = parseInt(y - y_obj);

                pixelStack = [[x, y]];
                pixelPos = (y * width + x) * 4;
                imageData = context.getImageData(x_obj, y_obj, width, height);

                startR = imageData.data[pixelPos];
                startG = imageData.data[pixelPos + 1];
                startB = imageData.data[pixelPos + 2];
                while (pixelStack.length) {
                    m_flooding = true;
                    newPos = pixelStack.pop();
                    x = newPos[0];
                    y = newPos[1];
                    pixelPos = (y * width + x) * 4;
                    while (y-- >= 0 && floodfill_matchTolerance(pixelPos, color, tolerance)) {
                        if (y == 0) return;
                        pixelPos -= width * 4;
                    }
                    pixelPos += width * 4;
                    ++y;
                    reachLeft = false;
                    reachRight = false;
                    while (y++ < height && floodfill_matchTolerance(pixelPos, color, tolerance)) {
                        floodfill_colorPixel(pixelPos, color);
                        if (y >= height) return;
                        if (x > 0) {
                            if (floodfill_matchTolerance(pixelPos - 4, color, tolerance)) {
                                if (!reachLeft) {
                                    pixelStack.push([x - 1, y]);
                                    reachLeft = true;
                                }
                            }
                            else if (reachLeft) {
                                reachLeft = false;
                            }
                        }
                        if (x < width - 1) {
                            if (floodfill_matchTolerance(pixelPos + 4, color, tolerance)) {
                                if (!reachRight) {
                                    pixelStack.push([x + 1, y]);
                                    reachRight = true;
                                }
                            }
                            else if (floodfill_matchTolerance(pixelPos + 4 - (width * 4), color, tolerance)) {
                                if (!reachLeft) {
                                    pixelStack.push([x + 1, y - 1]);
                                    reachLeft = true;
                                }
                            }
                            else if (reachRight) {
                                reachRight = false;
                            }
                        }
                        pixelPos += width * 4;
                    }
                }
                context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                break;
            }
    }
}
/// 6/12/2015
var started = false;
var x, y, startx, starty, cx, cy, b_fill = true,linearrow_start = 0; linearrow_end = 0; ;
var data = [];
var ppts = []; //for pen
// draw grid
var curentCanvas = null;
function initdrawsmooth(pageName, objectName) {
    var object = FindShape(pageName, objectName);
    if (object == null) return;
//    canvasp = object.getCanvas();
//    contextp = canvasp.getContext('2d');
    canvas = document.createElement('canvas');
/*    x_obj = parseInt(object.x() * m_dZoomScale);
    y_obj = parseInt(object.y() * m_dZoomScale);
    width = parseInt(object.width() * m_dZoomScale); //khong the bo parseInt
    height = parseInt(object.height() * m_dZoomScale); //khong the bo parseInt
    //
    var rads = object.getRotation();
    if (rads!=0){
    var c = Math.abs(Math.cos(rads));
    var s = Math.abs(Math.sin(rads));
    var newWidth = height * s + width * c;
    var newHeight = height * c + width * s;
    var centerX = x_obj;
    var centerY = y_obj;
    x_obj = centerX - newWidth / 2;
    y_obj = centerY - newHeight / 2;    
    canvas.width = newWidth;
    canvas.height = newHeight;
    }
    else {
        canvas.width = curentPage.hitCanvas.width;
        canvas.height = curentPage.hitCanvas.height; 
    }*/
    canvas.width = curentPage.hitCanvas.width;
    canvas.height = curentPage.hitCanvas.height; 
    object.tempCanvas = canvas;
    canvas.setAttribute("style", "position: absolute; left: 0px; top: 0px;");
    object.on('mousedown touchstart dragstart', function (e) {
        m_pgObjCaller = this;
        if (curentCanvas)
          stage.content.removeChild(curentCanvas);

        stage.content.appendChild(m_pgObjCaller.tempCanvas);
        curentCanvas = m_pgObjCaller.tempCanvas;
        context = curentCanvas.getContext('2d');

        canvasp = m_pgObjCaller.getCanvas();
        contextp = canvasp.getContext('2d');

        context.fillStyle = contextp.fillStyle;
        context.lineWidth = contextp.lineWidth;
        context.strokeStyle = contextp.strokeStyle;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        x_obj = parseInt(m_pgObjCaller.x() * m_dZoomScale);
        y_obj = parseInt(m_pgObjCaller.y() * m_dZoomScale);
        var rads = m_pgObjCaller.getRotation();
        if (rads != 0) {
            var c = Math.abs(Math.cos(rads));
            var s = Math.abs(Math.sin(rads));
            var newWidth = height * s + width * c;
            var newHeight = height * c + width * s;
            var centerX = x_obj;
            var centerY = y_obj;
            x_obj = centerX - newWidth / 2;
            y_obj = centerY - newHeight / 2;
        }
        Mousedown(stage.getPointerPosition());
    }, false);

    object.on('mousemove touchmove dragmove', function (evt) {
        m_pgObjCaller = this;
        Mousemove(stage.getPointerPosition());
    }, false);

    object.on('mouseup touchend dragend', function (evt) {
        m_pgObjCaller = this;
        Mouseup(stage.getPointerPosition());
    }, false);

 //   drawcanvas();
}
function MousePos(e) {
    x = e.x; //  - x_obj;
    y = e.y; //  - y_obj;   
   }
function update() {
    started = false;
    contextp.drawImage(curentCanvas, 0, 0);
    context.clearRect(0, 0, curentCanvas.width, curentCanvas.height);
}
function drawcanvas() {
    var obj = {}, i = 0;
    while (data.length != i) {
        obj = data[i];
        drawobject(obj, canvasp);
        i++
    }
}
function drawobject(object, drawcanvas) 
{
    if (typeof object == 'undefined')
        return;
    var ctx = drawcanvas.getContext("2d");
    ctx.save();
    ctx.strokeStyle = object.color;
    ctx.fillStyle = object.fillColor;
    ctx.lineWidth = object.lineWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
     switch (object.type) {
        case 0:
            {
                ctx.beginPath();
                ctx.moveTo(object.ppts[0].x, object.ppts[0].y);
                for (var i = 1; i < object.ppts.length; i++) {
                    ctx.lineTo(object.ppts[i].x, object.ppts[i].y);
                }
                ctx.stroke();
                break;
            }
        case 1:
            {
                w = Math.abs(object.x1 - object.x2);
                h = Math.abs(object.y1 - object.y2);
                x = Math.min(object.x1, object.x2);
                y = Math.min(object.y1, object.y2);
                var kappa = .5522848,
                ox = (w / 2) * kappa, 
                oy = (h / 2) * kappa, 
                xe = x + w,           
                ye = y + h,           
                xm = x + w / 2,       
                ym = y + h / 2;
                ctx.beginPath();
                ctx.moveTo(x, ym);
                ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
                ctx.closePath(); // not used correctly, see comments (use to close off open path)
                ctx.stroke();
                if (object.b_fill)
                    ctx.fill();
                break;
            }
            
        case 2://elip fill
            {
     
                break;
            }
        case 3:
            {
                var w, h, x, y;
                w = Math.abs(object.x1 - object.x2);
                h = Math.abs(object.y1 - object.y2);
                x = Math.min(object.x1, object.x2);
                y = Math.min(object.y1, object.y2);
                ctx.strokeRect(x, y, w, h);
                if (object.b_fill)
                    ctx.fillRect(x, y, w, h);
                break;
            }
        case 5:
            {
                var headlen = object.headlen;
                ctx.beginPath();
                var angle = Math.atan2(object.y2 - object.y1, object.x2 - object.x1);
                if (object.arrow_fr == 1) {//draw >
                    ctx.moveTo(object.x1 + headlen * Math.cos(angle - Math.PI / 6), object.y1 + headlen * Math.sin(angle - Math.PI / 6));
                    ctx.lineTo(object.x1, object.y1);
                    ctx.lineTo(object.x1 + headlen * Math.cos(angle + Math.PI / 6), object.y1 + headlen * Math.sin(angle + Math.PI / 6));
                }
                if (object.arrow_fr == 2) {//draw |
                    ctx.moveTo(object.x1 + headlen / 2 * Math.cos(angle - Math.PI / 2), object.y1 + headlen / 2 * Math.sin(angle - Math.PI / 2));
                    ctx.lineTo(object.x1 + headlen / 2 * Math.cos(angle + Math.PI / 2), object.y1 + headlen / 2 * Math.sin(angle + Math.PI / 2));
                    
                }
                if (object.arrow_fr == 3) {//draw o
                    ctx.arc(object.x1, object.y1, headlen / 3, 0, 2 * Math.PI);
                    ctx.fill();
                }

                ctx.moveTo(object.x1, object.y1);
                ctx.lineTo(object.x2, object.y2);
                if (object.arrow_to == 1) {
                    ctx.lineTo(object.x2 - headlen * Math.cos(angle - Math.PI / 6), object.y2 - headlen * Math.sin(angle - Math.PI / 6));
                    ctx.moveTo(object.x2, object.y2);
                    ctx.lineTo(object.x2 - headlen * Math.cos(angle + Math.PI / 6), object.y2 - headlen * Math.sin(angle + Math.PI / 6));
                }
                if (object.arrow_to == 2) {
                    ctx.lineTo(object.x2 - headlen / 2 * Math.cos(angle - Math.PI / 2), object.y2 - headlen / 2 * Math.sin(angle - Math.PI / 2));
                    ctx.lineTo(object.x2 - headlen / 2 * Math.cos(angle + Math.PI / 2), object.y2 - headlen / 2 * Math.sin(angle + Math.PI / 2));
                    ctx.moveTo(object.x2, object.y2);
                }
                if (object.arrow_to == 3) {
                    ctx.moveTo(object.x2 + headlen / 3, object.y2);
                    ctx.arc(object.x2, object.y2, headlen / 3, 0, 2 * Math.PI);
                    ctx.fill();
                }
                ctx.stroke();
                ctx.closePath();
                break;
            }
        case 6:
            {
                ctx.beginPath();
                ctx.moveTo(object.ppts[0].x, object.ppts[0].y);
                for (var i = 1; i < object.ppts.length - 2; i++) {
                    var c = object.ppts[i].x + (object.ppts[i + 1].x - object.ppts[i].x) / 2;
                    var d = object.ppts[i].y + (object.ppts[i + 1].y - object.ppts[i].y) / 2;
                    ctx.quadraticCurveTo(object.ppts[i].x, object.ppts[i].y, c, d);
                }
                // For the last 2 points
                ctx.quadraticCurveTo(object.ppts[i].x, object.ppts[i].y, object.ppts[i + 1].x, object.ppts[i + 1].y);
                ctx.stroke();
                break;
            }
        case 7: // hinh thoi
            {
                var w, h, x, y;
                w = Math.abs(object.x1 - object.x2);
                h = Math.abs(object.y1 - object.y2);
                x = Math.min(object.x1, object.x2);
                y = Math.min(object.y1, object.y2);
                ctx.beginPath();
                ctx.moveTo(x, y + h / 2);
                ctx.lineTo(x + w / 2, y);
                ctx.lineTo(x + w, y + h / 2);
                ctx.lineTo(x + w / 2, y + h);
                ctx.closePath();
                ctx.stroke();
                if (object.b_fill)
                    ctx.fill();
                break;
            }
        case 9:
            {
                ctx.fillStyle = m_pgObjCaller.getFill();
                ctx.fillRect(0, 0, width, height);
             
                break;
            }
        case 10:
            {
                floodfill(object.x2, object.y2, rgb2hex(object.fillColor), 40);
                break;
            }
    }
     ctx.restore();
}

function Mousedown(e) {
    MousePos(e);    
    startx = x;
    starty = y;
    started = true;
    i_paintType = parseInt(m_pgObjCaller.paintType());
    if (i_paintType == 0) {
        ppts.push({ x: startx, y: starty });
        context.save();
        context.strokeStyle = m_pgObjCaller.getFill();
        erase();
    }
}
function Mouseup(e) {
    started = false;
    MousePos(e);  
    var obj = {};
    i_paintType = parseInt(m_pgObjCaller.paintType());
    obj.type = i_paintType;
    obj.color = context.strokeStyle;
    obj.lineWidth = context.lineWidth;
    obj.fillColor = context.fillStyle;
    obj.b_fill = b_fill;
    switch (i_paintType) {
        case 0: //erase    
            {
                obj.x1 = startx;
                obj.y1 = starty;
                obj.x2 = x;
                obj.y2 = y;
                obj.color = context.strokeStyle;
                obj.ppts = ppts;
                ppts = [];
                context.restore();
                break;
            }    
        case 1: // elip
        case 3:// rect
        case 2: // elip
        case 7:
            {
                obj.x1 = startx;
                obj.y1 = starty;
                obj.x2 = x;
                obj.y2 = y;
                break;
            }
        case 5: // line
            {
                obj.x1 = startx;
                obj.y1 = starty;
                obj.x2 = x;
                obj.y2 = y;
                obj.arrow_fr = linearrow_start;
                obj.arrow_to = linearrow_end;
                obj.headlen = context.lineWidth * 2 + 10;
                break;
            }
    
        case 6: //pen
            {
                obj.x1 = startx;
                obj.y1 = starty;
                obj.x2 = x;
                obj.y2 = y;
                obj.ppts = ppts;
                ppts = [];
                break;
            }
        case 9: //clear
            {
                obj.x1 = startx;
                obj.y1 = starty;
                obj.x2 = x;
                obj.y2 = y;
                contextp.fillStyle = m_pgObjCaller.getFill();
                contextp.fillRect(0, 0, width, height);
                break;
            }
        case 10: 
            { 		
                  obj.x1 = startx;
                  obj.y1 = starty;
                  obj.x2 = x;
                  obj.y2 = y;
                m_color = rgb2hex(contextp.fillStyle);    
		//Quang add 18/01/2021
                if (detectmob()) {
                    x = x * ZoomScaleMobileDevice;
                    y = y * ZoomScaleMobileDevice;
                }             
                floodfill(x, y, m_color, 30);
                  break;
             }
    }
    data.push(obj);
    update();
}

function Mousemove(e) {
    if (!started)
        return;
    MousePos(e);    
    i_paintType = parseInt(m_pgObjCaller.paintType());
    if (i_paintType == 0) { //Erase
            erase(startx, starty, x, y);
        }
    else if (i_paintType == 1) {//"elip"
            drawellipse(startx, starty, x, y, b_fill);
        }
    else if (i_paintType == 2) {//"elip"
            drawellipse(startx, starty, x, y, true);
        }
    else if (i_paintType == 3) { //rect
          drawrect(startx, starty, x, y,b_fill);
      }
    else if (i_paintType == 4) {//" fill rect"
          drawrect(startx, starty, x, y, true);
      }
    else if (i_paintType == 5) { //line
        drawline(startx, starty, x, y, linearrow_start, linearrow_end);
    }
    else if (i_paintType == 6) {//pen
        pen(startx, starty, x, y);
    }
    else if (i_paintType == 7) {//hinh thoi
        drawrombe(startx, starty, x, y, b_fill);
    }
    else if (i_paintType == 11) {// Image
        contextp.drawImage(m_imagePaint, x - m_imagePaint.naturalWidth / 2, y - m_imagePaint.naturalHeight / 2);
    }
    else if (i_paintType == 12){ // draw image fill rect
        context.clearRect(0, 0, canvas.width, canvas.height);
        var x1 = Math.min(x, startx),
                    y1 = Math.min(y, starty),
                    w = Math.abs(x - startx),
                    h = Math.abs(y - starty);
        context.drawImage(m_imagePaint, x1, y1, w, h);
    }
    else if (i_paintType == 13) { //start
        drawStart(startx, starty, x, y, b_fill);
    }
    else if (i_paintType == 14) { //heart
        drawHeart(startx, starty, x, y, b_fill);
    }
}
function drawrect(x1, y1, x2, y2, b_fill) {
    var w, h, x, y;
    context.clearRect(0, 0, canvas.width, canvas.height);
    w = Math.abs(x1 - x2);
    h = Math.abs(y1 - y2);
    x = Math.min(x1, x2);
    y = Math.min(y1, y2);
    context.strokeRect(x, y, w, h);
    if (b_fill)
        context.fillRect(x, y, w, h);
}
function drawrombe(x1, y1, x2, y2, b_fill) {
    var w, h, x, y;
    context.clearRect(0, 0, canvas.width, canvas.height);
    w = Math.abs(x1 - x2);
    h = Math.abs(y1 - y2);
    x = Math.min(x1, x2);
    y = Math.min(y1, y2);
    context.beginPath();
    context.moveTo(x,y + h / 2);
    context.lineTo(x + w / 2, y);
    context.lineTo(x + w, y + h / 2);
    context.lineTo(x + w/2, y + h);
    context.closePath();
    context.stroke();
    if (b_fill)
        context.fill();
}
function drawline(x1, y1, x2, y2, arrow_fr, arrow_to, headlen) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (typeof arrow_fr == 'undefined') arrow_fr = 0;
    if (typeof arrow_to == 'undefined') arrow_to = 0;
    if (typeof headlen == 'undefined') headlen = context.lineWidth*2 + 10;
    context.beginPath();
    var angle = Math.atan2(y2 - y1, x2 - x1);
    if (arrow_fr == 1) {//draw >
        context.moveTo(x1 + headlen * Math.cos(angle - Math.PI / 6), y1 + headlen * Math.sin(angle - Math.PI / 6));
        context.lineTo(x1, y1);
        context.lineTo(x1 + headlen * Math.cos(angle + Math.PI / 6), y1 + headlen * Math.sin(angle + Math.PI / 6));
    }
    if (arrow_fr == 2) {//draw |
        context.moveTo(x1 + headlen/2 * Math.cos(angle - Math.PI / 2), y1 + headlen/2 * Math.sin(angle - Math.PI / 2));
        context.lineTo(x1 + headlen / 2 * Math.cos(angle + Math.PI / 2), y1 + headlen / 2 * Math.sin(angle + Math.PI / 2));
    }
    if (arrow_fr == 3) {//draw o
        context.arc(x1, y1, headlen / 3, 0, 2 * Math.PI);
        context.fill();
    }
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    if (arrow_to == 1) {
        context.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(x2, y2);
        context.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
    }
    if (arrow_to == 2) {
        context.lineTo(x2 - headlen/2 * Math.cos(angle - Math.PI / 2), y2 - headlen/2 * Math.sin(angle - Math.PI / 2));
        context.lineTo(x2 - headlen / 2 * Math.cos(angle + Math.PI / 2), y2 - headlen / 2 * Math.sin(angle + Math.PI / 2));
        context.moveTo(x2, y2);
    }
    if (arrow_to == 3) {
        context.moveTo(x2 + headlen/3, y2);
        context.arc(x2, y2, headlen / 3, 0, 2 * Math.PI);
        context.fill();
    }
    context.closePath();
    context.stroke();
    
}
function drawcircle(x, y, r) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.stroke()
    context.closePath();
}
function drawellipse(x1, y1, x2, y2, b_fill, posX, posY) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (typeof posX == 'undefined') { posX = 0; posY = 0; }
    if (posY <= 0) posY = 360;
    if (typeof b_fill == 'undefined') b_fill = false;
    w = Math.abs(x1 - x2);
    h = Math.abs(y1 - y2);
    x = Math.min(x1, x2);
    y = Math.min(y1, y2);
    var kappa = .5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle
    context.beginPath();
    context.moveTo(x, ym);
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    context.closePath(); // not used correctly, see comments (use to close off open path)
    context.stroke();
    if (b_fill)
    context.fill();
}
function pen(x1, y1, x2, y2) {
        ppts.push({ x: x2, y: y2 });
		if (ppts.length < 3) {
			var b = ppts[0];
			context.beginPath();
			context.arc(b.x, b.y, context.lineWidth / 2, 0, Math.PI * 2, !0);
			context.closePath();
			return;
            }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(x1, y1);
        for (var i = 1; i < ppts.length - 2; i++) {
            var c = ppts[i].x + (ppts[i + 1].x - ppts[i].x) / 2;
            var d = ppts[i].y + (ppts[i + 1].y - ppts[i].y) / 2;
            context.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
        }
        // For the last 2 points
        context.quadraticCurveTo(ppts[i].x, ppts[i].y, ppts[i + 1].x, ppts[i + 1].y);
        context.stroke();
}
function erase(x1, y1, x2, y2) {
    ppts.push({ x: x2, y: y2 });
    if (ppts.length < 3) {
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.moveTo(ppts[0].x, ppts[0].y);
        return;
    } 
    context.lineTo(x2, y2);
    context.stroke();
}
function drawStart(x1, y1, x2, y2, b_fill) {//13
    var w, h, x, y;
    context.clearRect(0, 0, canvas.width, canvas.height);
    w = Math.abs(x1 - x2);
    h = Math.abs(y1 - y2);
    x = Math.min(x1, x2);
    y = Math.min(y1, y2);
    
    outerRadius = Math.max(w, h);
    innerRadius = Math.min(w, h);
    numPoints = 7;
    context.beginPath();
    context.moveTo(x1, y1 - outerRadius);
    for (var n = 1; n < numPoints * 2; n++) {
        var radius = n % 2 === 0 ? outerRadius : innerRadius;
        var x = x1 + radius * Math.sin(n * Math.PI / numPoints);
        var y = y1 - radius * Math.cos(n * Math.PI / numPoints);
        context.lineTo(x, y);
    }
    context.closePath();
    context.stroke();
    if (b_fill) context.fill();
}
function drawHeart(x1, y1, x2, y2, b_fill) {//14 heart
    w = Math.abs(x1 - x2);
    h = Math.abs(y1 - y2);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(x1 + w / 2, y1 + h);
    context.bezierCurveTo(x1 + w / 2, y1 + h, x1 + w + w / 2, y1, x1 + w / 2, y1 + h / 3);
    context.bezierCurveTo(x1 + w / 2, y1 + h / 3, x1 - w / 2, y1, x1 + w / 2, y1 + h);
    context.closePath();
    context.stroke();
    if (b_fill) context.fill();
}
function floodfill(x, y, color, tolerance) {
    var object = m_pgObjCaller;
    if (object == null) return;
    if (object.getPaint() == false)
        return;
    x_obj = parseInt(object.x() * m_dZoomScale); //  + (wclient- stage.getWidth() / 2); khong the bo parseInt
    y_obj = parseInt(object.y() * m_dZoomScale); //   + (hclient- stage.getHeight() / 2 ); khong the bo parseInt
    width = parseInt(object.width() * m_dZoomScale); //khong the bo parseInt
    height = parseInt(object.height() * m_dZoomScale); //khong the bo parseInt
    var c = contextp.getImageData(x, y, 1, 1).data;
    if (floodfill_hexToR(color) == c[0] && floodfill_hexToG(color) == c[1] && floodfill_hexToB(color) == c[2])
        return;
    if (x < x_obj) x = x_obj + 10; // diem o ngoai object
    if (y < y_obj) y = y_obj + 10; //diem o ngoai object
    x = parseInt(x - x_obj);
    y = parseInt(y - y_obj);

    pixelStack = [[x, y]];
    pixelPos = (y * width + x) * 4;
    imageData = contextp.getImageData(x_obj, y_obj, width, height);

    startR = imageData.data[pixelPos];
    startG = imageData.data[pixelPos + 1];
    startB = imageData.data[pixelPos + 2];
    while (pixelStack.length) {
        m_flooding = true;
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];
        pixelPos = (y * width + x) * 4;
        while (y-- >= 0 && floodfill_matchTolerance(pixelPos, color, tolerance)) {
            if (y == 0) return;
            pixelPos -= width * 4;
        }
        pixelPos += width * 4;
        ++y;
        reachLeft = false;
        reachRight = false;
        while (y++ < height && floodfill_matchTolerance(pixelPos, color, tolerance)) {
            floodfill_colorPixel(pixelPos, color);
            if (y >= height) return;
            if (x > 0) {
                if (floodfill_matchTolerance(pixelPos - 4, color, tolerance)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                }
                else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < width - 1) {
                if (floodfill_matchTolerance(pixelPos + 4, color, tolerance)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                }
                else if (floodfill_matchTolerance(pixelPos + 4 - (width * 4), color, tolerance)) {
                    if (!reachLeft) {
                        pixelStack.push([x + 1, y - 1]);
                        reachLeft = true;
                    }
                }
                else if (reachRight) {
                    reachRight = false;
                }
            }
            pixelPos += width * 4;
        }
    }
    contextp.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
}