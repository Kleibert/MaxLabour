window.onscroll = function() {myFunction()};
/* navbar animation*/
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        
        document.getElementById("myNav").className="navbar navbar-default navbar-fixed-top navbar-custom-js";
         document.getElementById("myImage").style.display="none";
         document.getElementById("navCustom").className = "nav navbar-nav navbar-right navbar-right-custom-js";
         document.getElementById("demo").innerHTML = "LABOUR MAX";
    } else {
        
        document.getElementById("myNav").className="navbar navbar-default navbar-fixed-top navbar-custom";
        var elem =document.getElementById("myImage"); 
        function fadeIn(el, display){
            el.style.opacity = 0;
            el.style.display = display || "block";
          
            (function fade() {
              var val = parseFloat(el.style.opacity);
              if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
              }
            })();
          }
        fadeIn(elem,"inline-block");
    
         document.getElementById("navCustom").className = "nav navbar-nav navbar-right navbar-right-custom";
         document.getElementById("demo").innerHTML = "";
    }
}
/* navbar animation*/
/*menu link*/
function myMenu(x){
    if(x==0){
	document.getElementById("link0").className="active active-custom";
    document.getElementById("about").className="glyphicon glyphicon-chevron-right marge";
	document.getElementById("link1").className="";
    document.getElementById("experience").className="";
    document.getElementById("link2").className="";document.getElementById("services").className="";
    document.getElementById("link3").className="";document.getElementById("secteur").className="";}
    if(x==1){
        document.getElementById("link0").className="";document.getElementById("about").className="";
    document.getElementById("link1").className="active active-custom";document.getElementById("experience").className="glyphicon glyphicon-chevron-right marge";
    document.getElementById("link2").className="";document.getElementById("services").className="";
    document.getElementById("link3").className="";document.getElementById("secteur").className="";}
     if(x==2){
        document.getElementById("link0").className="";document.getElementById("about").className="";
    document.getElementById("link1").className="";document.getElementById("experience").className="";
    document.getElementById("link2").className="active active-custom";document.getElementById("services").className="glyphicon glyphicon-chevron-right marge";
    document.getElementById("link3").className="";document.getElementById("secteur").className="";}
     if(x==3){
        document.getElementById("link0").className="";document.getElementById("about").className="";
    document.getElementById("link1").className="";document.getElementById("experience").className="";
    document.getElementById("link2").className="";document.getElementById("services").className="";
    document.getElementById("link3").className="active active-custom";document.getElementById("secteur").className="glyphicon glyphicon-chevron-right marge";}
if(x==10){
        document.getElementById("link0").className="";document.getElementById("about").className="";
    document.getElementById("link1").className="";document.getElementById("experience").className="";
    document.getElementById("link2").className="";document.getElementById("services").className="";
    document.getElementById("link3").className="";document.getElementById("secteur").className="";}

}
