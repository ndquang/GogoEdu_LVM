/**
 * Floodfill - Linear Floodfill with tolerance in plain Javascript.
 * 
 * Autor: Markus Ritberger
 * Version: 1.0.1 (2012-04-16)
 *      
 * Examples at: http://demos.ritberger.at/floodfill
 * 
 * licensed under MIT license:
 * 
 * Copyright (c) 2012 Markus Ritberger
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
 * THE SOFTWARE.
 **/
var painting = false;
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

function floodFill(x,y,context,color,tolerance){
   pixelStack = [[x,y]];
   width = context.canvas.width;
   height = context.canvas.height;
   pixelPos = (y*width + x) * 4;
   imageData =  context.getImageData(0, 0, width, height);
   startR = imageData.data[pixelPos];
   startG = imageData.data[pixelPos+1];
   startB = imageData.data[pixelPos+2];
   while(pixelStack.length){
      newPos = pixelStack.pop();
      x = newPos[0];
      y = newPos[1];
      pixelPos = (y*width + x) * 4;
      while(y-- >= 0 && floodfill_matchTolerance(pixelPos,color,tolerance)){
        pixelPos -= width * 4;
      }
      pixelPos += width * 4;
      ++y;
      reachLeft = false;
      reachRight = false;
      while(y++ < height-1 && floodfill_matchTolerance(pixelPos,color,tolerance)){
        floodfill_colorPixel(pixelPos,color);
        if(x > 0){
          if(floodfill_matchTolerance(pixelPos - 4,color,tolerance)) {
            if(!reachLeft){
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          }
          else if(reachLeft){
            reachLeft = false;
          }
        }
        if(x < width-1){
          if(floodfill_matchTolerance(pixelPos + 4,color,tolerance)){
            if(!reachRight){
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          }
          else if(floodfill_matchTolerance(pixelPos + 4 -(width *4),color,tolerance)) {
            if(!reachLeft){
              pixelStack.push([x + 1, y - 1]);
              reachLeft = true;
            }
          } 
          else if(reachRight){
            reachRight = false;
          }
        }
        pixelPos += width * 4;
      }
    }
    context.putImageData(imageData, 0, 0);
}
///
function PaintDownObj(x, y, objectName, color, tolerance) {

    var object = FindShape("", objectName);
    if (object == null) return;
    if (object.getPaint() == false)
        return;
    x_obj = parseInt(object.getX() * m_dZoomScale);
    y_obj = parseInt(object.getY() * m_dZoomScale);
    width = parseInt(object.getWidth() * m_dZoomScale);
    height = parseInt(object.getHeight() * m_dZoomScale);
    var context = object.getContext();
    i_paintType = parseInt(object.paintType());
    switch (i_paintType) {
        case 10:
            {
                x = x - x_obj;
                y = y - y_obj;
                pixelStack = [[x, y]];
                pixelPos = (y * width + x) * 4;
                imageData = context.getImageData(x_obj, y_obj, width, height);
                startR = imageData.data[pixelPos];
                startG = imageData.data[pixelPos + 1];
                startB = imageData.data[pixelPos + 2];
                while (pixelStack.length) {
                    newPos = pixelStack.pop();
                    x = newPos[0];
                    y = newPos[1];
                    pixelPos = (y * width + x) * 4;
                    while (y >= 0 && floodfill_matchTolerance(pixelPos, color, tolerance)) {
                        y -= 1;
                        pixelPos -= width * 4;
                    }
                    pixelPos += width * 4;
                    ++y;
                    reachLeft = false;
                    reachRight = false;
                    while (y < height && floodfill_matchTolerance(pixelPos, color, tolerance)) {
                        y += 1;
                        floodfill_colorPixel(pixelPos, color);
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
                        if (x < width) {
                            if (floodfill_matchTolerance(pixelPos + 4, color, tolerance)) {
                                if (!reachRight) {
                                    pixelStack.push([x + 1, y]);
                                    reachRight = true;
                                }
                            }
                            /*  else if (floodfill_matchTolerance(pixelPos + 4 - (width * 4), color, tolerance)) {
                            if (!reachLeft) {
                            pixelStack.push([x + 1, y - 1]);
                            reachLeft = true;
                            }
                            }*/
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
        case 6: //pencile
            {
                painting = true;
                context.beginPath();
                context.moveTo(x, y);
                break;
            }
        case 3: //rect
        case 5: //line
        case 1: // elip
        case 4: // fill rect
        case 2: // fill elip
            {
                painting = true;
                startClick.x = x;
                startClick.y = y;
                imageData = context.getImageData(x_obj, y_obj, width, height);
                break;
            }
         
        default:
            break;
    }

}
////
function PaintMoveObj(x, y, objectName) { //goi trong move
    var object = FindShape("", objectName);
    if (object == null) return;
    if (object.getPaint() == false)
        return;
    var context = object.getContext();
    i_paintType = parseInt(object.paintType());
    switch (i_paintType) { //ve duong
        case 6: 
            {
                if (painting) {
                    context.lineTo(x, y);
                    context.stroke();
                }
                break;
            }
        case 5://line
            {
                if (painting) {
                    //
                    context.beginPath();
                    context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                    context.moveTo(startClick.x, startClick.y);
                    context.lineTo(x, y);
                    context.stroke();
                    context.closePath();
                }
                break;
            }
        case 4: // fill rect
            {
                if (painting) {
                    context.beginPath();
                    context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                    var x1 = Math.min(x, startClick.x),
                        y1 = Math.min(y, startClick.y),
                        w1 = Math.abs(x - startClick.x),
                        h1 = Math.abs(y - startClick.y);
                    context.fillRect(x1, y1, w1, h1);
                    context.strokeRect(x1, y1, w1, h1);
                    context.closePath();
                }
                break;
            }
        case 3: //rect
            {
                if (painting) {
                    //
                    context.beginPath();
                    context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                    var x1 = Math.min(x, startClick.x),
                        y1 = Math.min(y, startClick.y),
                        w1 = Math.abs(x - startClick.x),
                        h1 = Math.abs(y - startClick.y);
                    context.strokeRect(x1, y1, w1, h1);
                    context.closePath();
                }
                break;
            }
        case 1: //elip
            {
                if (painting) {
                    //
                    context.beginPath();
                    context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                    var x1 = Math.min(x, startClick.x),
                    y1 = Math.min(y, startClick.y),
                    w1 = Math.abs(x - startClick.x),
                    h1 = Math.abs(y - startClick.y);
                    drawEllipse(context, x1, y1, w1, h1);
                    context.stroke();
                    context.closePath();
                }
                break;
            }
        case 2: //elip
            {
                if (painting) {
                    //
                    context.beginPath();
                    context.putImageData(imageData, x_obj, y_obj, 0, 0, width, height);
                    var x1 = Math.min(x, startClick.x),
                    y1 = Math.min(y, startClick.y),
                    w1 = Math.abs(x - startClick.x),
                    h1 = Math.abs(y - startClick.y);
                    drawEllipse(context, x1, y1, w1, h1);
                    context.stroke();
                    context.closePath();
                    context.fill();
                }
                break;
            }
        default:
            break;     
    }
}

function PaintUpObj(x, y, objectName) { //goi trong up
    var object = FindShape("", objectName);
    if (object == null) return;
    if (object.getPaint() == false)
        return;
    var context = object.getContext();
    i_paintType = parseInt(object.paintType());
    switch (i_paintType) { //ve duong
        case 6:
            {
                if (painting) {
                    painting = false;
                    context.closePath();
                }
                break;
            }
        case 3: //rect
        case 5: //line
        case 1: //elip
        case 4: //fill rect
        case 2: //fill elip
            {
                if (painting) {
                    painting = false;
                }
                break;
            }
    
        default:
            break;
    }
}