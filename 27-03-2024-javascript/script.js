var maasAhmet = 20000; 
var maasEnes = 30000;
var zam = 0.5;

console.log(maasAhmet + (maasAhmet * zam)) //maaş Ahmet
console.log(maasEnes + (maasEnes * zam)) // maaş Enes

//Değişken tanımlarken dikkat etmemiz gerekenler

//Küçük harfle başlamalı
//Türkçe karakter kullanılmamalı
// _ kullanılabilir.
// - kullanılmaz.
// boşluk kullanılmaz
// değişken isimlerinde en başta rakam kullanılmaz, ortada veya sonda kullanılabilir.


var urunAdi = "iphone 15"; //string
let urunFiyat = 75000;  //number

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

let number1 = 15;
let number2 = 25;

console.log(number1.toString() + number2.toString());

let name = "atakan";
let surname = "genç";

console.log(name + " " + surname);

//boolean true false

let examNote = 53;

let basarilimi = (examNote>=50);
console.log(basarilimi);
console.log(typeof basarilimi);

let yas;
console.log(yas);
console.log(typeof yas);

