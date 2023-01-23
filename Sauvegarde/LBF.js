
    // variable


    // function

var carteBIndex = 1;
var carteMIndex = 1;
console.log("lalalalal");


showBoissons(carteBIndex);
showMenues(carteMIndex);
    


function currentBoissons(n) {
  showBoissons(carteBIndex = n);
}
function currentMenues(n) {
  showMenues(carteMIndex = n);
}

function showBoissons(n)
{
  let i;
  let carte = document.getElementsByClassName("carteB");
  let nav = document.getElementsByClassName("navB");

  if (n > carte.length) {carteBIndex = 1}
  if (n < 1) {carteBIndex = carte.length}
  for (i = 0; i < carte.length; i++) {
    carte[i].style.display = "none";
  }
  for (i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");
  }
  carte[carteBIndex-1].style.display = "block";
  nav[carteBIndex-1].className += " active";

      
}


function showMenues(n)
{
  let i;
  let carte = document.getElementsByClassName("carteM");
  let nav = document.getElementsByClassName("navM");

  if (n > carte.length) {carteMIndex = 1}
  if (n < 1) {carteMIndex = carte.length}
  for (i = 0; i < carte.length; i++) {
    carte[i].style.display = "none";
  }
  for (i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");
  }
  carte[carteMIndex-1].style.display = "block";
  nav[carteMIndex-1].className += " active";

      
}

function grande(event){
    console.log(event);
    if(event == 1){
        document.getElementById("section2-h4-P").style.opacity = "0";
        document.getElementById("section2-h4-G").style.fontSize = "1.5em";
        document.getElementById("section2-inner-petite").style.width = "70%";
        document.getElementById("section2-inner-grande").style.width = "30%";
        document.getElementById("section2-inner-iconesP").style.opacity = "0";
        document.getElementById("section2-inner-iconesP").style.display = "none";
        document.getElementById("section2-inner-iconesG").style.opacity = "0";
        document.getElementById("section2-inner-iconesG").style.display = "none";
        document.getElementById("section2-inner-retourG").style.display = "block";
        document.getElementById("section2-inner-retourG").style.opacity = "1";
        document.getElementById("section2-inner-retourG").style.cursor = "pointer";
        document.getElementById("section2-inner-grande").style.cursor = "default";
        document.getElementById("section2-inner-iconesP").style.cursor = "default";
        document.getElementById("section2-inner-petite").style.backgroundImage = "url('Ressources/Images/SalleG.jpg')";

    }

    if(event ==0){
        document.getElementById("section2-h4-P").style.opacity = "1";
        document.getElementById("section2-h4-G").style.fontSize = "2.7em";
        document.getElementById("section2-inner-petite").style.width = "50%";
        document.getElementById("section2-inner-grande").style.width = "50%";
        document.getElementById("section2-inner-iconesP").style.display = "block";
        document.getElementById("section2-inner-iconesP").style.opacity = "1";
        document.getElementById("section2-inner-iconesG").style.display = "block";
        document.getElementById("section2-inner-iconesG").style.opacity = "1";
        document.getElementById("section2-inner-retourG").style.opacity = "0";
        document.getElementById("section2-inner-retourG").style.display = "none";
        document.getElementById("section2-inner-retourG").style.cursor = "default";
        document.getElementById("section2-inner-iconesG").style.cursor = "pointer";
        document.getElementById("section2-inner-iconesP").style.cursor = "pointer";
        document.getElementById("section2-inner-petite").style.backgroundImage = "";
    }

}


function petite(event){
    
    if(event == 1){
        document.getElementById("section2-h4-G").style.opacity = "0";
        document.getElementById("section2-h4-P").style.fontSize = "1.5em";
        document.getElementById("section2-inner-grande").style.width = "70%";
        document.getElementById("section2-inner-petite").style.width = "30%";
        document.getElementById("section2-inner-iconesP").style.opacity = "0";
        document.getElementById("section2-inner-iconesP").style.display = "none";
        document.getElementById("section2-inner-iconesG").style.opacity = "0";
        document.getElementById("section2-inner-iconesG").style.display = "none";
        document.getElementById("section2-inner-retourP").style.display = "block";
        document.getElementById("section2-inner-retourP").style.opacity = "1";
        document.getElementById("section2-inner-retourP").style.cursor = "pointer";
        console.log("je suis la ");
        document.getElementById("section2-inner-grande").style.cursor = "default";
        document.getElementById("section2-inner-iconesP").style.cursor = "default";
        document.getElementById("section2-inner-grande").style.backgroundImage = "url('Ressources/Images/SalleP.jpg')";

    }

    if(event ==0){
        document.getElementById("section2-h4-G").style.opacity = "1";
        document.getElementById("section2-h4-P").style.fontSize = "2.7em";
        document.getElementById("section2-inner-petite").style.width = "50%";
        document.getElementById("section2-inner-grande").style.width = "50%";
        document.getElementById("section2-inner-iconesP").style.display = "block";
        document.getElementById("section2-inner-iconesP").style.opacity = "1";
        document.getElementById("section2-inner-iconesG").style.display = "block";
        document.getElementById("section2-inner-iconesG").style.opacity = "1";
        document.getElementById("section2-inner-retourP").style.opacity = "0";
        document.getElementById("section2-inner-retourP").style.display = "none";
        document.getElementById("section2-inner-retourP").style.cursor = "default";
        document.getElementById("section2-inner-iconesG").style.cursor = "pointer";
        document.getElementById("section2-inner-iconesP").style.cursor = "pointer";
        document.getElementById("section2-inner-grande").style.backgroundImage = "";
    }

}
    


window.addEventListener('scroll', function() {
    if(window.pageYOffset<4){
        document.getElementById('header').style.backgroundColor = "rgb(27, 14, 7,0)";
        document.getElementById('header').style.height = "150px";
        document.getElementById('header').style.boxShadow ="0px 0px 0px black ";

        document.getElementById('header-logo-t0').style.opacity ="1";
        document.getElementById('header-logo-tn').style.marginTop = "50px";         

        document.getElementById('nav').style.marginTop = "40px";
        document.getElementById('header-ul-network').style.marginTop = "40px";
        

    }
    else{
        document.getElementById('header').style.backgroundColor = "rgb(27, 14, 7)";
        document.getElementById('header').style.height = "80px";
        document.getElementById('header').style.boxShadow ="0px 3px 6px black ";

        document.getElementById('header-logo-t0').style.opacity ="0";
        document.getElementById('header-logo-tn').style.marginTop = "0px";
        document.getElementById('header-logo-tn').style.width = "80px";
        document.getElementById('header-logo-tn').style.height = "80px";

        document.getElementById('nav').style.marginTop = "20px";
        document.getElementById('header-ul-network').style.marginTop = "20px";

        
        

    }

        


        
    });

    window.addEventListener('scroll', function() {

        if(window.pageYOffset<400){
            document.getElementById('nav-home').style.color = "#78694a";

            

        }
        else{
            document.getElementById('nav-home').style.color = "#ffffff";


            
            

        }


        if(400<window.pageYOffset && window.pageYOffset<800){
            document.getElementById('nav-espace').style.color = "#78694a";

            

        }
        else{
            document.getElementById('nav-espace').style.color = "#ffffff";


            
            

        }

        if(800<=window.pageYOffset && window.pageYOffset<1300){
            document.getElementById('nav-boisson').style.color = "#78694a";
            document.getElementById('section3-inner-banner-carre').style.animationPlayState = "running";
            document.getElementById('section3-inner-banner-cercle').style.animationPlayState = "running";
            document.getElementById('section3-inner-banner-img1').style.animationPlayState = "running";
            document.getElementById('section3-inner-banner-img2').style.animationPlayState = "running";
            document.getElementById('section3-trait').style.animationPlayState = "running";
            document.getElementById('section3-titre').style.animationPlayState = "running";
            document.getElementById('section3-cache').style.animationPlayState = "running";

            

        }
        else{
            document.getElementById('nav-boisson').style.color = "#ffffff";



            
            

        }

        if (1300 <= window.pageYOffset && window.pageYOffset < 1800) {
            document.getElementById('nav-menus').style.color = "#78694a";
            document.getElementById('section4-inner-banner-carre').style.animationPlayState = "running";
            document.getElementById('section4-inner-banner-cercle').style.animationPlayState = "running";
            document.getElementById('section4-inner-banner-img1').style.animationPlayState = "running";
            document.getElementById('section4-inner-banner-img2').style.animationPlayState = "running";
            document.getElementById('section4-trait').style.animationPlayState = "running";
            document.getElementById('section4-titre').style.animationPlayState = "running";
            document.getElementById('section4-cache').style.animationPlayState = "running";



        }
        else {
            document.getElementById('nav-menus').style.color = "#ffffff";






        }







    });