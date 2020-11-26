
    var btn=document.getElementsByClassName ("btn");
    var inp=document.getElementsByClassName("inp")[0];
    var ac = document.getElementById('ac');
    var arr=[];  //定义一个数组存储输入的值
    var key=false;
    var len = btn.length;

    for(var i = 0; i < len; i++){
        btn[i].onclick = function(e){
        var event = e || window.event;
        var target = event.target ||event.srcElement;//遍历按钮，找寻事件源对象
        console.log(target.innerHTML);
        
        if(target.innerHTML == "AC"){//AC键清空
            inp.value = "0";
            arr = [];
        }else if(target.innerHTML == "="){
            try{
            inp.value = eval(inp.value);//利用eval函数做运算
            if(inp.value ==Infinity){
                alert("被除数不能为0！，请重新输入");
                inp.value = "0";
                arr = [];
            }else{
                arr = [];
            for(var i = 0; i<inp.value.length;i++){
                arr.push(inp.value[i]);//将运算结果拆分，挨个重新加入到arr数组中去
            }
            }
            
        }catch(p){
            console.log(e);
            alert("请正确输入算术表达式");
        }
        }else if(target.innerHTML == "⬅"){
            var start = arr.slice(0);
            arr.pop(start);
            
            inp.value = "";
            var med = arr.join("")
            inp.value += med;
        }else{
            if(inp.value == 0){
                inp.value = "";
                
            }
            arr.push(target.innerHTML);
            var end = arr.slice(-1);
            inp.value += end;
        }
    }
}  




    