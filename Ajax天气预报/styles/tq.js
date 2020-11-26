
var obj ={};
var arr = [];
var inp = document.getElementsByTagName('input')[0];
var btn = document.getElementsByClassName('btn')[0];
function shuchu(){
        if(obj.status == 1002){
            alert("暂未查询到该城市相关天气信息")
        }else{
            var day = document.getElementsByClassName('day');
            var yesterday = document.getElementsByClassName('yesterday')[0];
            var top = document.getElementsByClassName('top')[0];
            for(var i = 0; i < 5; i++){
                    arr.push(obj.data.forecast[i])
            }
            console.log(obj);
            console.log(arr)
            var len1 = arr.length;
            for(var i = 1; i < len1; i++){
               day[i-1].innerHTML=arr[i].date.substring(0,3) + "</br>" 
                                    + arr[i].date.substring(3) + "</br>"
                                    + arr[i].type  + "</br>" 
                                    + "气温:" + arr[i].low.substring(2) + "~" + arr[i].high.substring(2) +"</br>" 
                                    + "风力:" + arr[i].fengli.substring(9,11) + "</br>" 
                                    + "风向:" + arr[i].fengxiang;
            }
            top.innerHTML = "<div class = city>" + obj.data.city + "</div>" 
                            + "<div class = top_0>" + "<div class = top_1>" + "<div class = rq>" + arr[0].date.substring(0,3) + "</div>" 
                            + "<div class = xq>"+ arr[0].date.substring(3) + "</div>"
                            +"<div class = type>" + arr[0].type  + "</div>" + "</div>" 
                            + "<div class = top_2>"+"<div class = qw>" + "气温:" + arr[0].low.substring(2) + "~"+ arr[0].high.substring(2) +  "</div>" 
                            +"<div class = fl>"+ "风力:" + arr[0].fengli.substring(9,11) + "</div>" 
                            +"<div class = fx>"+ "风向:" + arr[0].fengxiang +"</div>"  + "</div>"
                            +"<div class=top_3>" +"温馨小贴士:" + obj.data.ganmao + "</div>" + "</div>";
            yesterday.innerHTML ="昨天"+'&nbsp'+'&nbsp'+'&nbsp'+ obj.data.yesterday.date.substring(0,3) + "</br>" 
                                    + obj.data.yesterday.date.substring(3)  + "</br>" 
                                    + obj.data.yesterday.type  + "</br>" 
                                    + "气温:" + obj.data.yesterday.low.substring(2) + "~" + obj.data.yesterday.high.substring(2) + "</br>"
                                    + "风力:" + obj.data.yesterday.fl.substring(9,11) + "</br>" 
                                    + "风向:" + obj.data.yesterday.fx + "</br>";
            obj ={};
            arr = [];
        }
    }
function sedMsg(){
            //1.创建一个XMLHttpRequest对象
            var xhr = new XMLHttpRequest();
            //2.调用open方法打开连接
            //open三个参数
            //  1.请求的method
            //  2.请求的url
            // 3.是否异步，默认值turn（异步），一般这个参数可以不传
            xhr.open('get','http://wthrcdn.etouch.cn/weather_mini?city='+inp.value); 
            xhr.send();
            xhr.onreadystatechange = function(){
                //判断一个状态值 ，0-4 五种状态，4代表完成
                if(xhr.readyState === 4){
                    //判断状态码
                    if(xhr.status === 200){
                       var js = JSON.parse(xhr.responseText);
                       for(x in js){
                           obj[x] = js[x];
                       }
                    }
                }
            }
        }


