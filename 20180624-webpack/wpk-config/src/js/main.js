require("../css/reset.css");
require("../css/index.css");
const one=require("./one.js");
const two=require("./two.js");
const $=require("jquery");
window.onload=function(){
	var div=document.querySelector("div");
	div.innerHTML=one.str;
	div.onclick=two.click;
	$("li").click(function(){
		$(this).css({"background":"blue"});
	})
}
