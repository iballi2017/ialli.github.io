x=0;
function openOmenu(){
    if(x==0){
    document.getElementById("mobileMenu").style.display="block"; x=1;
    }
    else if(x==1){
    document.getElementById("mobileMenu").style.display="none"; x=0;
    }
 }