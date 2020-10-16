var a=1;
function imageSelector(){
	if(a){
		document.getElementById("wtf").src="on.png";
		a=0;
	}
	else{
		document.getElementById("wtf").src="off1.png";
		a=1;
	}
}
