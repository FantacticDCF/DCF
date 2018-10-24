//联想词
var ip1 = document.getElementsByClassName("ip1")[0];
	var box = $id("box");
	ip1.onkeyup = function(){
		var str = this.value;
		var oScript = document.createElement("script");
		document.body.appendChild(oScript);
		oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
	}
	function fn(msg){
		console.log(msg);
		var arr = msg.s;
        var str = "";
        for(var i = 0; i < arr.length; i++){
            str += `<li>${arr[i]}</li>`;
        }
       box.innerHTML = str; 
    }
    box.onmouseover = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			target.style.background = "yellow";
		}
	}
	
	box.onmouseout = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			target.style.background = "";
		}
	}
	
	box.onclick = function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "LI"){
			ip1.value = target.innerHTML;
			box.innerHTML = "";
		}
	}
	
	//轮播图
	var imgUl = $id("imgUl");
	var imgLi = imgUl.children;
	var dotUl = $id("dotUl");
	var dot = dotUl.children;
	var index = 0;
	var timer = null;
	timer = setInterval(function(){
		index++;
		autoPlay();
	},1500)
	function autoPlay(){
		if(index==8){
			index = 0;
		}
		if(index == -1){
			index = 7
		}
		for(var i=0;i<dot.length;i++){
			dot[i].className = "";
			move(imgLi[i],{"opacity":0})
		}
		dot[index].className = "show";
		move(imgLi[index],{"opacity":100})
	}
	imgUl.onmouseover = function(){
		clearInterval(timer);
	}
	imgUl.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			autoPlay();
		},1500)
	}
	for(let i=0;i<dot.length;i++){
		dot[i].onmouseover=function(){
			index=i;
			autoPlay();
		}
	}
	$id("toLeft").onclick=function(){
		index--;
		autoPlay();
	}
	$id("toRight").onclick=function(){
		index++;
		autoPlay()
	}
	
	//tab切换
	$(".container a").mouseover(function(){
		$(".container a").removeClass("on");
		$(".con .content").removeClass("tab");
		$(this).addClass("on");
		$(".con .content").eq($(this).index()).addClass("tab");
	})
	
	//tab切换复杂
	$(".mainFly li a:lt(4)").mouseenter(function(){
		$(".mainFly ul").css("top","0");
		$(".mainFly .tabMain").css("top","20px");
	})
	
	
	
	//计时器
	var box2 = document.getElementsByClassName("box2")[0];
	var box1 = document.getElementsByClassName("box1");
	var d = new Date("2018/11/11");
	var timer1 = setInterval(showDate,1000)
	function showDate(){
	    var data = new Date();
	    var s = parseInt((d.getTime() - data.getTime())/1000) ;
		var day = parseInt(s / 60 / 60 / 24);
		var hour = parseInt(s/60/60 - day *24);
		var minutes = parseInt(s / 60 - day *24 *60 - hour * 60);
		var second = s - day*24*60*60 - hour*60*60 -minutes*60;
		hour = hour < 10 ? "0" + hour : hour;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		second = second < 10 ? "0" + second : second;
		box1[0].innerHTML = hour ;
		box1[1].innerHTML = minutes;
		box1[2].innerHTML = second;
	}
	showDate();
	
	//ajax获取数据
	var bc = document.getElementsByClassName("bc")[0];
	var pro = new promiseAjax("data.json");
	pro.then(function(msg){
		var res = JSON.parse(msg);
		var str = "";
		var str1 = "";
		var str2 = "";
		for(var j=0;j<4;j++){
			str1 += `
			    <li>
					<img src="${res[j].src}">
					<p>${res[j].title}</p>
					<div class="oldPrice">${res[j].oldPrice}</div>
					<div class="newPrice">${res[j].newPrice}</div>
				</li>
			`
		}
		for(var i=0;i<res.length;i++){
		   cur = res[i];
			str += `
			    <li>
					<img src="${cur.src}">
					<p>${cur.title}</p>
					<div class="oldPrice">${cur.oldPrice}</div>
					<div class="newPrice">${cur.newPrice}</div>
				</li>
			`
		}
		
		for(var m=res.length-4;m<res.length;m++){
			str2 += `
			    <li>
					<img src="${res[m].src}">
					<p>${res[m].title}</p>
					<div class="oldPrice">${res[m].oldPrice}</div>
					<div class="newPrice">${res[m].newPrice}</div>
				</li>
			`
		}
		bc.innerHTML = str2 +str + str1;
	})
	
	bc.style.left = -800+"px";
	(function(){
		var index1 = 1
		var timer2 = null;
		function aautoPlay(){
			if(index1==6){
				index1=2;
				bc.style.left = -800+"px";
			}
			if(index1==-1){
				index1=4;
				bc.style.left = -5*800+"px";
			}
			move(bc,{"left":-800*index1});
		}
		
	   	$id("zuo").onclick = function(){
	   		index1--;
	   		aautoPlay();
	   	}
	   	$id("you").onclick = function(){
	   		index1++;
	   		aautoPlay();
	   	}
	})()
//bannerL

	var liUl = document.getElementsByClassName("liUl")[0];
	var list = liUl.children;
	var dian = $id("dian");
	var dots = dian.children;
	var timer3 = null;
	var index2 = 1;
	timer3 = setInterval(function(){
		index2++;
		auto();
	},4000)

	function auto(){
		if(index2 == 4){
			index2 = 2;
			liUl.style.left = -200 + "px";
		}
		
		for(var i =0;i<dots.length;i++){
			dots[i].className = "";
		}
		if(index2==3){
			focusIndex=0;
		}else if(index2==0){
			focusIndex=1
		}else{
			focusIndex=index2-1
		}
		
		
		dots[focusIndex].className = "hs";
		move(liUl,{"left":-200*index2});
	}
    for(let i=0;i<dots.length;i++){
    	dots[i].onmouseover = function(){
    		index2 = i+1;
    		auto();
    	}
    }







