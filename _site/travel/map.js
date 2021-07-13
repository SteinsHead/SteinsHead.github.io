// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));	  
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.disableDragging();
map.disableDoubleClickZoom()
var points = [
    {'lng': 88.311, 'lat': 43.364},
    {'lng': 94.662, 'lat': 40.142},
    {'lng': 88.887, 'lat': 29.270},
    {'lng': 120.212, 'lat': 30.208},
    {'lng': 120.396, 'lat': 36.307},
    {'lng': 109.753, 'lat': 18.400},
    {'lng': 113.883, 'lat': 22.553},
    {'lng': 100.268, 'lat': 25.606},
    {'lng': 112.986, 'lat': 28.256},
    {'lng': 114.029, 'lat': 30.582},
    {'lng': 121.526, 'lat': 38.952},
    {'lng': 139.44, 'lat': 35.41}
]
for (var point of points) {
    var marker = new BMap.Marker(new BMap.Point(point.lng, point.lat));
    map.addOverlay(marker);
}
//飞机坐标
var plant = null;
//动画名
var index = 0;
//定义一个控件类
function ZoomControl() {
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new BMap.Size(20, 20)
}
//通过JavaScript的prototype属性继承于BMap.Control
ZoomControl.prototype = new BMap.Control();

//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
ZoomControl.prototype.initialize = function(map) {
     //创建一个dom元素
    var div = document.createElement('div');
     //添加文字说明
    div.appendChild(document.createTextNode('起飞啦'));
      // 设置样式
    div.style.cursor = "pointer";
    div.style.padding = "7px 10px";
    div.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "white";
    // 绑定事件,点击一次放大两级
    div.onclick = function(e){
        //获取坐标
        var pos = []
        var cities = document.getElementsByClassName('BMap_Marker BMap_noprint')
        for(var city of cities){
            pos.push([city.offsetLeft,city.offsetTop])
        }
        console.log(pos)
        //获取飞机
        var a = document.getElementById('a');
        //
        if(plant == null){
            plant = pos[parseInt(Math.random()*pos.length)];
            a.style.left = plant[0]+'px';
            a.style.top = plant[1]+'px';
        }
        var to = cities[parseInt(Math.random()*pos.length)];
        while(to.offsetTop-a.offsetTop == 0 && to.offsetLeft-a.offsetLeft == 0){
            to = cities[parseInt(Math.random()*pos.length)];
        }
        var tan_value = (to.offsetTop-a.offsetTop)/(to.offsetLeft-a.offsetLeft);
        var deg = Math.round(Math.atan(tan_value) / (Math.PI / 180));
        if(to.offsetTop-a.offsetTop > 0 && to.offsetLeft-a.offsetLeft < 0){
            deg+=180;
        }
        if(to.offsetTop-a.offsetTop < 0 && to.offsetLeft-a.offsetLeft < 0){
            deg = deg-180;
        }
        console.log(to.offsetTop-a.offsetTop);
        console.log(to.offsetLeft-a.offsetLeft);
        console.log(deg);
        document.styleSheets[0].insertRule('@keyframes move'+String(index)+'{0%{left:'+a.style.left+';top:'+a.style.top+';}100%{left:'+to.style.left+';top:'+to.style.top+';}}',0)
        a.style.transform = 'rotate('+String(deg)+'deg)';
        a.style.animation = 'move'+String(index)+' 5s linear';
        a.style.left = to.style.left;
        a.style.top = to.style.top;
        index += 1;
    }
    // 添加DOM元素到地图中
    map.getContainer().appendChild(div);
    // 将DOM元素返回
    return div;
}
//创建控件元素
var myZoomCtrl = new ZoomControl();
//添加到地图中
map.addControl(myZoomCtrl);
