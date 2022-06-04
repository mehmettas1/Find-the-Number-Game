let baslat = document.querySelector("#baslat");
let tahmin = document.querySelector("#baslat");
let sayi = document.querySelector("#baslat");

let rsayi,sayac,hak =3;

baslat.onclick = function() {
  tahmin.disabled = false;

  rsayi= Math.round(Math.random()*100);

  sayac=0;
}

tahmin.onclick = function() {
  if(rsayi !=sayi.value && sayac>hak){
    window.alert("Üzgünüz hakkınız bitti")
    tahmin.disabled =true
  }

  if(rsayi==sayi.value) {
    window.alert("Tebrikler kazandınız");

  }
  else if(sayi.value>rsayi) {
   window.alert("Daha kücük bir sayı giriniz");
  }
  else (rsayi>sayi.value)
  window.alert("Daha büyük bir sayı giriniz")
}