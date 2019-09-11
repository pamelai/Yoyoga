var  d=document, c=console.log, slideIndex = 1, aImg, aInput, aReme, aMono, aPant, vesti, aBar, aCar;

aInput=d.querySelectorAll('#formu input');
aReme=d.querySelectorAll('.reme');
aMono=d.querySelectorAll('.mono');
aPant=d.querySelectorAll('.pant');
vesti=d.querySelector('.vest');
aBar=d.querySelectorAll('.rang1');
aCar=d.querySelectorAll('.rang2');

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    aImg = document.getElementsByClassName("fotos");
    
    if (n > aImg.length){
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = aImg.length
    } ;
    for (var i= 0; i < aImg.length; i++) {
        aImg[i].style.display = "none"; 
        aImg[slideIndex-1].style.display = "block"; 
    }
    
}

for (var i=0; i<aInput.length; i++){
    
    aInput[i].onclick=function(){
        
        if(this.checked && this.id=='monos'){
        
            for (var j=0; j<aReme.length; j++){

                aReme[j].style.display='none';
            }

            for (var j=0; j<aMono.length; j++){

                aMono[j].style.display='grid';
            }

            for (var j=0; j<aPant.length; j++){

                aPant[j].style.display='none';
            }
            
            vesti.style.display='none';
        }else if(this.checked && this.id=='pant'){
            
            for (var j=0; j<aReme.length; j++){

                aReme[j].style.display='none';
            }

            for (var j=0; j<aMono.length; j++){

                aMono[j].style.display='none';
            }

            for (var j=0; j<aPant.length; j++){

                aPant[j].style.display='grid';
            }
            
            vesti.style.display='none';
        }else if(this.checked && this.id=='rem'){
            
            for (var j=0; j<aReme.length; j++){

                aReme[j].style.display='grid';
            }

            for (var j=0; j<aMono.length; j++){

                aMono[j].style.display='none';
            }

            for (var j=0; j<aPant.length; j++){

                aPant[j].style.display='none';
            }
            
            vesti.style.display='none';
        }else if(this.checked && this.id=='ves'){
            
            for (var j=0; j<aReme.length; j++){

                aReme[j].style.display='none';
            }

            for (var j=0; j<aMono.length; j++){

                aMono[j].style.display='none';
            }

            for (var j=0; j<aPant.length; j++){

                aPant[j].style.display='none';
            }
            
            vesti.style.display='grid';
        }else if (this.checked && this.id=='49'){
            
            for (var j=0; j<aBar.length; j++){

                aBar[j].style.display='grid';
            }

            for (var j=0; j<aCar.length; j++){

                aCar[j].style.display='none';
            }

        }else if(this.checked && this.id=='70'){
            
            for (var j=0; j<aBar.length; j++){

                aBar[j].style.display='none';
            }

            for (var j=0; j<aCar.length; j++){

                aCar[j].style.display='grid';
            }
        }else{
            
             for (var j=0; j<aReme.length; j++){

                aReme[j].style.display='grid';
            }

            for (var j=0; j<aMono.length; j++){

                aMono[j].style.display='grid';
            }

            for (var j=0; j<aPant.length; j++){

                aPant[j].style.display='grid';
            }
            
            vesti.style.display='grid';
        }
    }  
}