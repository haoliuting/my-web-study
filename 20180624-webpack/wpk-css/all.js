const one=require("./js/one.js");
const two=require("./js/two.js");
require("!style-loader!css-loader!./css/reset.css");
require("!style-loader!css-loader!./css/index.css")
window.onload=function(){
	var div=document.querySelector("div");
	div.innerHTML=one;
	div.onclick=two.click;
}
