var iscaidan=false;

function Caidan() {
	var dd=document.getElementById("dd");
	var main=document.getElementById("main");
	var menu=document.getElementById("menu1");
	if (iscaidan==false) {
		main.style.position="relative";
		main.style.left="50%";
		main.style.transform="scale(0.6)";
		menu.style.display="flex";
		dd.style.transform="rotate(90deg)"
		iscaidan=true;
	} else{
		main.style.left="0%";
		main.style.transform="scale(1)";
		menu.style.display="none";
		dd.style.transform="rotate(0deg)"
		iscaidan=false;
	}
}

window.onload=function asd () {
	var sec1=document.getElementById("section1");
	var s1=document.getElementById("navs1");
	var sec2=document.getElementById("section2");
	var s2=document.getElementById("navs2");
	var sec3=document.getElementById("section3");
	var s3=document.getElementById("navs3");
	s1.style.color="black";
	sec2.style.display="none";
	sec3.style.display="none";
}
function P1Page () {
	var sec1=document.getElementById("section1");
	var s1=document.getElementById("navs1");
	var sec2=document.getElementById("section2");
	var s2=document.getElementById("navs2");
	var sec3=document.getElementById("section3");
	var s3=document.getElementById("navs3");
	s1.style.color="black";
	s2.style.color="#DDDDDD"
	s3.style.color="#DDDDDD"
	sec1.style.display="flex";
	sec2.style.display="none";
	sec3.style.display="none";
}
function P2Page () {
	var sec1=document.getElementById("section1");
	var s1=document.getElementById("navs1");
	var sec2=document.getElementById("section2");
	var s2=document.getElementById("navs2");
	var sec3=document.getElementById("section3");
	var s3=document.getElementById("navs3");
	s2.style.color="black";
	s1.style.color="#DDDDDD"
	s3.style.color="#DDDDDD"
	sec2.style.display="flex";
	sec1.style.display="none";
	sec3.style.display="none";
}
function P3Page () {
	var sec1=document.getElementById("section1");
	var s1=document.getElementById("navs1");
	var sec2=document.getElementById("section2");
	var s2=document.getElementById("navs2");
	var sec3=document.getElementById("section3");
	var s3=document.getElementById("navs3");
	s3.style.color="black";
	s2.style.color="#DDDDDD"
	s1.style.color="#DDDDDD"
	sec3.style.display="flex";
	sec1.style.display="none";
	sec2.style.display="none";
}