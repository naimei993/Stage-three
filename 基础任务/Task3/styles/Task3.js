/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
      var city = document.getElementById("aqi-city-input").value;
      var num = document.getElementById("aqi-value-input").value;
      aqiData[city] = num;  
}

// /**
//  * 渲染aqi-table表格
//  */
function renderAqiList() {
      var tab = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
      for(var i in aqiData){
        tab = tab +"<tr><td>"+ i +"</td><td>" + aqiData[i] +"</td><td><button>" + "删除" +"</td></tr>";

      }
      document.getElementById("aqi-table").innerHTML = tab;
}

// /**
//  * 点击add-btn时的处理逻辑
//  * 获取用户输入，更新数据，并进行页面呈现的更新
//  */
function addBtnHandle() {
      addAqiData();
      renderAqiList();
}

// /**
//  * 点击各个删除按钮的时候的处理逻辑
//  * 获取哪个城市数据被删，删除数据，更新表格显示
//  */
function delBtnHandle(target) {
  // do sth.
    var tr = target.parentElement.parentElement;   
    var strCity = tr.children[0].innerHTML;    
    delete aqiData[strCity];
    renderAqiList();   //更新表格显示
}

 function init() {

   // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   document.getElementById("add-btn").addEventListener("click",function (){
    addAqiData();
    renderAqiList();
})

   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
   var tab = document.getElementById("aqi-table");
   
   tab.addEventListener("click", function(a)       
   {
           delBtnHandle(a.target);   
   })
 }

init();