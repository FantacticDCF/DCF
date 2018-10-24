//obj要操作的对象
//josn:要改变的属性和目标值
//callback:回调函数；某件事件结束了，再调用我这个函数

//设置 宽    10 高 60
function move(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//代表每一个属性都到达目标值，不等于目标值不移除定时器
		for(var attr in json){
			var cur = 0;
			if(attr == "opacity"){
				cur = parseFloat(getStyle(obj,attr)) * 100;//因为getComputedStyle取出来是字符串；所以parseFloat
			}else{
				cur = parseInt(getStyle(obj,attr));//有单位 所以parseInt
			}
			
			var speed = (json[attr] - cur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur != json[attr]){
				flag = false;
			}
			if(attr == "opacity"){
				obj.style[attr] =  (cur + speed) / 100;
			}else{
				obj.style[attr] =  cur + speed + "px";
			}
		}
		
	// 宽    flag   true         高   flag  flase	
		if(flag){			
			clearInterval(obj.timer);//代表着上一件事已经做完了
			if(callback){
				callback();
			}
				
		}
	},30)
}

//获取非行内元素样式    实际值  
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}


