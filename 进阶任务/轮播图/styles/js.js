



var box = document.getElementsByClassName('box')[0];
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var all =document.getElementsByClassName('all')[0];
box.style.left = 0 +"px";
var btn =document.getElementsByClassName('btn')[0];
    right.onclick = function(){
        right_pc();
    }
    left.onclick = function(){
        left_pc();
    }
function right_pc(){
    var newRight; 
    if(box.style.left == "-2400px"){
        box.style.left = 0 +"px";
    }else{
    newRight = parseInt(box.style.left)-600;
    }
    box.style.left = newRight + "px";

}
function left_pc(){
    var newLeft;
    if(box.style.left === "0px"){
        newLeft = -2400;
        box.style.left = newLeft + "px";
    }else{
        newLeft = parseInt(box.style.left) + 600;
}
box.style.left = newLeft + "px";
}
var timer1 = null;
    function autoPlay () {
        timer1 = setInterval(function () {
            left_pc();
        },1000);
    }
    box.onmouseleave = function(){
        autoPlay();
    }
    box.onmouseenter = function(){
       clearInterval(timer1);
    }
    btn.onmouseenter = function(){
        clearInterval(timer1);
     }

btn.onclick = function(e){
    var span =document.getElementsByTagName('span');
    var event = e || window.event;
    var target = event.target ||event.srcElement;//事件源对象处理
    for(var i = 0;i<span.length;i++){
        if(span[i].innerHTML == target.innerHTML){
            var size = (i)*(-600);
            box.style.left = size + "px";
        }
    }
    
}