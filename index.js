let rsayi,sayac,hak=3;
    let baslat=document.querySelector("#baslat");
    let tahmin=document.querySelector("#tahmin");
    let sayi=document.querySelector("#sayi");
    
    baslat.onclick=function()
    {
        tahmin.disabled=false;
        rsayi=Math.round(Math.random()*100);
        sayac=0;
        
    }
    tahmin.onclick=function()
    {
        sayac++;
        if(rsayi!=sayi.value && sayac>=hak)
        {
            window.alert("Üzgünüm hakkınız bitti");
            tahmin.disabled=true;
        }
        
        if(rsayi==sayi.value)
        {
            window.alert("tebrikler kazandınız.");
        }
        else if(sayi.value>rsayi)
        {
            window.alert("Daha küçük sayı girin");
        }
        else
        {
            window.alert("Daha büyük sayı girin");
        }
    }


























  
  
  

  
  

  
  
  
  
  
  
  
