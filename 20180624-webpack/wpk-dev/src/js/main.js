require("../css/reset.css");
require("../css/index.css");
var str=require("./one.js").str;
var ajax=require("./ajax.js").ajax;
var $=require("jquery");

window.onload=function(){
	var div=document.querySelector("div");
	div.innerHTML=str;
	$("div").click(function(){
		$(this).css({'background-color':'red'})
	})
	$("ul li").click(function(){
		ajax("./src/source/1.txt?_="+new Date().getTime()).then(function(v){
			console.log("oneoneone")
			console.log(v)
		}).catch(function(v){
			alert(v)
		})
	})
}
