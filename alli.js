x=0;
function openMenu(){
    if(x==0){
    document.getElementById("mobileMenu").style.display="block"; x=1;
    document.getElementById("menu-icon").style.display="none"; x=1;
    document.getElementById("close-icon").style.display="block"; x=1;
    }
 }

 function closeMenu(){
    if(x==1){
        document.getElementById("mobileMenu").style.display="none"; x=0;
        document.getElementById("menu-icon").style.display="block"; x=0;
        document.getElementById("close-icon").style.display="none"; x=0;
        }
 }