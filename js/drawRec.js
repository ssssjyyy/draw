// canvas 矩形框集合
var rects = [];

function rectar(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isSelected = false;
}

function drawRect() {
    // 清除画布，准备绘制
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 遍历所有矩形框
    for (var i = 0; i < rects.length; i++) {
        var rect = rects[i];

        // 绘制矩形
        context.strokeStyle = "#FF0000";
        context.strokeRect(rect.x, rect.y, rect.width, rect.height, rect.color);

        if (rect.isSelected) {
            context.lineWidth = 50;
        } else {
            context.lineWidth = 10;
        }
    }
}

function addRandomRect() {
    var x = 10;
    var y = 10;
    var width = 100;
    var height = 100;
    // 创建一个新的矩形对象
    var rect = new rectar(x, y, width, height);

    // 把它保存在数组中
    rects.push(rect);
    // 重新绘制画布
    drawRect();
}

var SelectedRect;
var x1;
var y1;
var right = false;
var widthstart, widthend;
var heightstart, heightend;

function canvasClick(e) {
    // 取得画布上被单击的点
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    // 查找被单击的矩形框
    for (var i = rects.length - 1; i >= 0; i--) {
        var rect = rects[i];

        widthstart = rect.x;
        widthend = rect.x + rect.width;

        heightstart = rect.y;
        heightend = rect.y + rect.height;

        // 判断这个点是否在矩形框中
        if ((clickX >= widthstart && clickX < (widthend - 20)) && (clickY >= heightstart) && (clickY < (heightend - 20))) {
            console.log(clickX);
            // 清除之前选择的矩形框
            if (SelectedRect != null) SelectedRect.isSelected = false;
            SelectedRect = rect;
            x1 = clickX - SelectedRect.x;
            y1 = clickY - SelectedRect.y;
            //选择新圆圈
            rect.isSelected = true;

            // 使圆圈允许拖拽
            isDragging = true;

            //更新显示
            drawRect();
            //停止搜索
            return;
        };
        /*
         *设置拉伸的界限。
         */
        // if ((clickX>=(widthend-20))&&(clickY>=(heightend-20)))
        // {
        //   SelectedRect = rect;
        //  right=true;
        //  }   
        // if ((clickX >= (widthend - 20) && ((clickX <= (widthend + 20))) && (clickY >= (heightend - 20)) && (clickY >= (heightend + 20)))  {
        //     SelectedRect = rect;
        //     right = true;
        // }
    }
}


var isDragging = false;

function stopDragging() {
    isDragging = false;
    right = false;
}

function clearCanvas() {
    // 去除所有矩形
    rects = [];

    // 重新绘制画布.

    drawCircles();
}
window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragRect;
};

var drawju, drawsanId, xian, round, two, three, path, svg, qingchu, wen, tupian;
var type = '';
var x = 0;
var y = 0;
var t = 0.5; //透明度
var r = 0; //旋转角度
var sx = 1;
var sy = 1; //缩放
var xx = 1; //虚线
var xy = 1;
var xz = 1;
var w = 1; //线条宽度
var l = 0; //线条末端样式
var j = 0; //线条连接
function init() {
    drawju = document.getElementById("drawju")
    drawsanId = document.getElementById("drawsan");
    xian = document.getElementById("xian");
    round = document.getElementById("round");
    two = document.getElementById("two");
    three = document.getElementById("three");
    path = document.getElementById("path");
    svg = document.getElementById("svg");
    qingchu = document.getElementById("qingchu");
    wen = document.getElementById("wen");
    tupian = document.getElementById("tupian");
}
init()