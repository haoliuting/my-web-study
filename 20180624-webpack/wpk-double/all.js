const One=require("./js/1.js");
const Two=require("./js/2.js");

document.write(Two.str);
window.onload=function(){
	var btn=document.querySelector("button")
	btn.onclick=function(){
		One.btnClick();
	}
}
