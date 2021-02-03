canvas = document.getElementById("Canvas1")
ctx =canvas.getContext("2d")
var color = blue;
var width = 2;

mouseevent= [];


canvas.addeventListener(mousemove ,mousemove_1)
function mousemove_1(){

 
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if(mouseevent==mousedown){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x,last_position_of_y)
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
        ctx.stroke();
    }
    last_position_of_x =current_position_of_mouse_x
    last_position_of_y =current_position_of_mouse_y
}

canvas.addeventListener(touchmove ,touchmove)

function touchmove(e){

    current_position_of_touch_x=e.touches.clientX -canvas.offsetLeft
    current_position_of_touch_y =e.touches.clientY -canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y)
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y)
    ctx.stroke();
}

last_position_of_touch_x=last_position_of_touch_y;
current_position_of_touch_x,current_position_of_touch_y;