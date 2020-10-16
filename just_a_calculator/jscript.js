var a,b,sign=0,ans=0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 106) {
        a=document.getElementById("calculator").value;
        document.getElementById("calculator").value="";
        sign=1;
    }
    else if(event.keyCode == 111) {
        a=document.getElementById("calculator").value;
        document.getElementById("calculator").value="";
        sign=2;
    }
    else if(event.keyCode == 107) {
        a=document.getElementById("calculator").value;
        document.getElementById("calculator").value="";
        sign=3;
    }
    else if(event.keyCode == 109) {
        a=document.getElementById("calculator").value;
        document.getElementById("calculator").value="";
        sign=4;
    }
    else if(event.keyCode == 13) {
        b=document.getElementById("calculator").value;
        document.getElementById("calculator").value="";
        if(sign==1){
	    ans=parseFloat(a)*parseFloat(b);
	    }
        else if(sign==2){
	    ans=parseFloat(a)/parseFloat(b);
	    }
        else if(sign==3){
	    ans=parseFloat(a)+parseFloat(b);
	    }
        else if(sign==4){
	    ans=parseFloat(a)+parseFloat(b);
	    if(parseFloat(b)<0){
	        ans=parseFloat(a)+parseFloat(b);
	    }
            else{
	        ans=parseFloat(a)-parseFloat(b);
	    }
	    }
	document.getElementById("in").innerHTML=ans;
    }
});