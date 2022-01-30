
// VYTIAHNUTIE ELEMENTOV

var prvee1= document.getElementById("prve1");
var prvyy1= document.getElementById("prvy1");

var prvee2= document.getElementById("prve2");
var prvyy2= document.getElementById("prvy2");

var prvee3= document.getElementById("prve3");
var prvyy3= document.getElementById("prvy3");

var prvee4= document.getElementById("prve4");
var prvyy4= document.getElementById("prvy4");

var prvee5= document.getElementById("prve5");
var prvyy5= document.getElementById("prvy5");

var prvee6= document.getElementById("prve6");
var prvyy6= document.getElementById("prvy6");

var prvee7= document.getElementById("prve7");
var prvyy7= document.getElementById("prvy7");

var prvee8= document.getElementById("prve8");
var prvyy8= document.getElementById("prvy8");

var prvee9= document.getElementById("prve9");
var prvyy9= document.getElementById("prvy9");


//AKTIVACIA PO KLIKNUTI

prvyy1.addEventListener("click",napis1);
prvyy2.addEventListener("click",napis2);
prvyy3.addEventListener("click",napis3);
prvyy4.addEventListener("click",napis4);
prvyy5.addEventListener("click",napis5);
prvyy6.addEventListener("click",napis6);
prvyy7.addEventListener("click",napis7);
prvyy8.addEventListener("click",napis8);
prvyy9.addEventListener("click",napis9);


var pocitadlo;



// VYHODNOTENIE VYHERCU
function moje(){
   
   var win = [];
   win[1]=prvee1.textContent;
   win[2]=prvee2.textContent;
   win[3]=prvee3.textContent;
   win[4]=prvee4.textContent;
   win[5]=prvee5.textContent;
   win[6]=prvee6.textContent;
   win[7]=prvee7.textContent;
   win[8]=prvee8.textContent;
   win[9]=prvee9.textContent;
 

  // console.log(mojepole[1]);


   if(win[1]==win[2] && win[2]==win[3] && win[1] !=""){
      
      var postupne = setInterval(fun2,400);
      var postupne1 = setInterval(fun3,1900);
     

      prvee4.textContent="";
      prvee4.style.color="";
      prvee5.textContent="";
      prvee5.style.color="";
      prvee6.textContent="";
      prvee6.style.color="";
      prvee7.textContent="";
      prvee7.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";
      prvee9.textContent="";
      prvee9.style.color="";


      if(prvee1.style.color == "red"){
        pridatcerveny = document.getElementById("skore2").innerHTML;
        pridatcerveny++;
        document.getElementById("skore2").textContent = pridatcerveny;

      }else{
         pridatmodry = document.getElementById("skore1").innerHTML;
         pridatmodry++;
         document.getElementById("skore1").textContent = pridatmodry;
      }


     function fun2(){
       
      prvee1.style.color="#FEC260";
      prvee2.style.color="#FEC260";
      prvee3.style.color="#FEC260";
      prvee1.textContent="W";
      prvee2.textContent="I";
      prvee3.textContent="N";

      clearInterval(postupne);
     }
     function fun3(){
       
      prvee1.style.color="";
      prvee2.style.color="";
      prvee3.style.color="";
      prvee1.textContent="";
      prvee2.textContent="";
      prvee3.textContent="";

      clearInterval(postupne1);
     }

   
}else{

   //AK JE REMIZA... PROCES..
   var remiza = "";
   switch(remiza) {
            case win[1]:
            
            break;
            case win[2]:
            
            break;
            case win[3]:
           
            break;
            case win[4]:
          
            break;
            case win[5]:
           
            break;
            case win[6]:
          
            break;
            case win[7]:
         
            break;
            case win[8]:
         
            break;
            case win[9]:
          
            break;
      default:
     
     var postupne = setInterval(fun2,900);
     var postupne1 = setInterval(fun3,1900);

   
      function fun2(){
         prvee1.textContent="";
         prvee1.style.color="";
         prvee2.textContent="";
         prvee2.style.color="";
         prvee3.textContent="";
         prvee3.style.color="";
         prvee7.textContent="";
         prvee7.style.color="";
         prvee8.textContent="";
         prvee8.style.color="";
         prvee9.textContent="";
         prvee9.style.color="";
         prvee4.style.color="#7B6CF6";
         prvee5.style.color="#03C4A1";
         prvee6.style.color="#FEC260";
         prvee4.textContent="X";
         prvee5.textContent="=";
         prvee6.textContent="O";
   
         clearInterval(postupne);
        }
        function fun3(){
          
         prvee4.style.color="";
         prvee5.style.color="";
         prvee6.style.color="";
         prvee4.textContent="";
         prvee5.textContent="";
         prvee6.textContent="";
   
         clearInterval(postupne1);
        }

   }
   
}

   if(prvee4.textContent==prvee5.textContent && prvee5.textContent==prvee6.textContent && prvee4.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee1.textContent="";
      prvee1.style.color="";
      prvee2.textContent="";
      prvee2.style.color="";
      prvee3.textContent="";
      prvee3.style.color="";
      prvee7.textContent="";
      prvee7.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";
      prvee9.textContent="";
      prvee9.style.color="";

      if(prvee4.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee4.style.color="#FEC260";
      prvee5.style.color="#FEC260";
      prvee6.style.color="#FEC260";
      prvee4.textContent="W";
      prvee5.textContent="I";
      prvee6.textContent="N";
      clearInterval(postupne);

     }
     function fun3(){
       
      prvee4.style.color="";
      prvee5.style.color="";
      prvee6.style.color="";
      prvee4.textContent="";
      prvee5.textContent="";
      prvee6.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee7.textContent==prvee8.textContent && prvee8.textContent==prvee9.textContent && prvee7.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee1.textContent="";
      prvee1.style.color="";
      prvee2.textContent="";
      prvee2.style.color="";
      prvee3.textContent="";
      prvee3.style.color="";
      prvee4.textContent="";
      prvee4.style.color="";
      prvee5.textContent="";
      prvee5.style.color="";
      prvee6.textContent="";
      prvee6.style.color="";

      if(prvee7.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee7.style.color="#FEC260";
      prvee8.style.color="#FEC260";
      prvee9.style.color="#FEC260";
      prvee7.textContent="W";
      prvee8.textContent="I";
      prvee9.textContent="N";
      clearInterval(postupne);
      
     }
     function fun3(){
       
      prvee7.style.color="";
      prvee8.style.color="";
      prvee9.style.color="";
      prvee7.textContent="";
      prvee8.textContent="";
      prvee9.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee1.textContent==prvee4.textContent && prvee4.textContent==prvee7.textContent && prvee1.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee2.textContent="";
      prvee2.style.color="";
      prvee3.textContent="";
      prvee3.style.color="";
      prvee5.textContent="";
      prvee5.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";
      prvee9.textContent="";
      prvee9.style.color="";

      if(prvee1.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee1.style.color="#FEC260";
      prvee4.style.color="#FEC260";
      prvee7.style.color="#FEC260";
      prvee1.textContent="W";
      prvee4.textContent="I";
      prvee7.textContent="N";
      clearInterval(postupne);
     }

     function fun3(){
       
      prvee1.style.color="";
      prvee4.style.color="";
      prvee7.style.color="";
      prvee1.textContent="";
      prvee4.textContent="";
      prvee7.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee2.textContent==prvee5.textContent && prvee5.textContent==prvee8.textContent && prvee2.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee1.textContent="";
      prvee1.style.color="";
      prvee3.textContent="";
      prvee3.style.color="";
      prvee4.textContent="";
      prvee4.style.color="";
      prvee6.textContent="";
      prvee6.style.color="";
      prvee7.textContent="";
      prvee7.style.color="";
      prvee9.textContent="";
      prvee9.style.color="";
      

      if(prvee5.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee2.style.color="#FEC260";
      prvee5.style.color="#FEC260";
      prvee8.style.color="#FEC260";
      prvee2.textContent="W";
      prvee5.textContent="I";
      prvee8.textContent="N";
      clearInterval(postupne);
     }
     function fun3(){
       
      prvee2.style.color="";
      prvee5.style.color="";
      prvee8.style.color="";
      prvee2.textContent="";
      prvee5.textContent="";
      prvee8.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee3.textContent==prvee6.textContent && prvee6.textContent==prvee9.textContent && prvee3.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee1.textContent="";
      prvee1.style.color="";
      prvee2.textContent="";
      prvee2.style.color="";  
      prvee4.textContent="";
      prvee4.style.color="";
      prvee5.textContent="";
      prvee5.style.color="";
      prvee7.textContent="";
      prvee7.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";

      if(prvee3.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee3.style.color="#FEC260";
      prvee6.style.color="#FEC260";
      prvee9.style.color="#FEC260";
      prvee3.textContent="W";
      prvee6.textContent="I";
      prvee9.textContent="N";
      clearInterval(postupne);
     }
     function fun3(){
       
      prvee3.style.color="";
      prvee6.style.color="";
      prvee9.style.color="";
      prvee3.textContent="";
      prvee6.textContent="";
      prvee9.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee1.textContent==prvee5.textContent && prvee5.textContent==prvee9.textContent && prvee1.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee2.textContent="";
      prvee2.style.color="";
      prvee3.textContent="";
      prvee3.style.color="";
      prvee4.textContent="";
      prvee4.style.color="";
      prvee6.textContent="";
      prvee6.style.color="";
      prvee7.textContent="";
      prvee7.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";

      if(prvee1.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee1.style.color="#FEC260";
      prvee5.style.color="#FEC260";
      prvee9.style.color="#FEC260";
      prvee1.textContent="W";
      prvee5.textContent="I";
      prvee9.textContent="N";
      clearInterval(postupne);
     }
     function fun3(){
       
      prvee1.style.color="";
      prvee5.style.color="";
      prvee9.style.color="";
      prvee1.textContent="";
      prvee5.textContent="";
      prvee9.textContent="";

      clearInterval(postupne1);
     }
   }
   if(prvee3.textContent==prvee5.textContent && prvee5.textContent==prvee7.textContent && prvee3.textContent !=""){
      var postupne = setInterval(fun2,900);
      var postupne1 = setInterval(fun3,1900);
      prvee1.textContent="";
      prvee1.style.color="";
      prvee2.textContent="";
      prvee2.style.color="";
      prvee4.textContent="";
      prvee4.style.color="";
      prvee6.textContent="";
      prvee6.style.color="";
      prvee8.textContent="";
      prvee8.style.color="";
      prvee9.textContent="";
      prvee9.style.color="";

      if(prvee3.style.color == "red"){
         pridatcerveny = document.getElementById("skore2").innerHTML;
         pridatcerveny++;
         document.getElementById("skore2").textContent = pridatcerveny;
 
       }else{
          pridatmodry = document.getElementById("skore1").innerHTML;
          pridatmodry++;
          document.getElementById("skore1").textContent = pridatmodry;
       }

      function fun2(){
      prvee7.style.color="#FEC260";
      prvee5.style.color="#FEC260";
      prvee3.style.color="#FEC260";
      prvee7.textContent="W";
      prvee5.textContent="I";
      prvee3.textContent="N";
      clearInterval(postupne);
     }
     function fun3(){
       
      prvee7.style.color="";
      prvee5.style.color="";
      prvee3.style.color="";
      prvee7.textContent="";
      prvee5.textContent="";
      prvee3.textContent="";

      clearInterval(postupne1);
     }
   }

   
} 


// EFEKT PISMENA
function spolu(nastavit){
var spomalenie= setInterval(fun,1);
   var velkost=0;
   var po=nastavit;
   function fun(po){
      if(velkost<150){
         velkost++;
         nastavit.style.fontSize=velkost+"px";
      }else{
         clearInterval(spomalenie);
      }
   }
}


// HLAVNE NASTAVENIA ELEMENTOV
function napis1(){
   var skus=prvee1;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
      //spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
      //spolu(skus);
    }   
moje();
}


function napis2(){
   var skus=prvee2;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
      //spolu(skus);
    }   
moje();
}


function napis3(){
   var skus=prvee3;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}

function napis4(){
   var skus=prvee4;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}


function napis5(){
   var skus=prvee5;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}

function napis6(){
   var skus=prvee6;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
    //  spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}

function napis7(){
   var skus=prvee7;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}

function napis8(){
   var skus=prvee8;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
   //   spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
   //   spolu(skus);
    }   
moje();
}


function napis9(){
   var skus=prvee9;
   if(pocitadlo==false){
      skus.textContent="X";
      skus.style.color="red";
      pocitadlo=true;
     // spolu(skus);
    }else{
      skus.textContent="O";
      skus.style.color="#7B6CF6";
      pocitadlo=false;
     // spolu(skus);
    }   
moje();
}


//HRAT ZNOVA - VYNULOVAT ELEMENTY

function odznova(){
   prvee1.textContent="";
   prvee1.style.color="";
   prvee2.textContent="";
   prvee2.style.color="";
   prvee3.textContent="";
   prvee3.style.color="";
   prvee4.textContent="";
   prvee4.style.color="";
   prvee5.textContent="";
   prvee5.style.color="";
   prvee6.textContent="";
   prvee6.style.color="";
   prvee7.textContent="";
   prvee7.style.color="";
   prvee8.textContent="";
   prvee8.style.color="";
   prvee9.textContent="";
   prvee9.style.color="";
   document.getElementById("skore1").innerHTML="0";
   document.getElementById("skore2").innerHTML="0";

}
////////////////////////////////
var skuska=document.getElementById("potvrdit");
skuska.addEventListener("click",playeris);


function playeris(){
 
var hrac1=document.getElementById("formplayer1").value;
var hrac2=document.getElementById("formplayer2").value;
document.getElementById("hra1").style.display="none";

document.getElementById("menohraca1").textContent=hrac1;
document.getElementById("menohraca2").textContent=hrac2;

}

