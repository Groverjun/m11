window.onload = function(){
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}
let html=document.getElementById("h1").innerHTML;
let span='';
for(let i=0;i<=html.length-1;i++){
	span+='<span>'+html[i]+'</span>'
};
document.getElementById("h1").innerHTML=span;
var innStyle='<style type="text/css">.modulePC_content .head h1 span{background: none;color: #fff;}</style>'
if (!!window.ActiveXObject || "ActiveXObject" in window){
	$("head").append(innStyle)
}
window.sr = ScrollReveal({
	easing: 'ease-in-out'
});
sr.reveal('#h1')
sr.reveal('.col-md-6')
sr.reveal('.col-md-4')
sr.reveal('.col-md-3')
