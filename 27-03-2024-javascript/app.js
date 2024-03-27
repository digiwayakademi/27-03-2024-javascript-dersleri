/*

1- İki öğrencinin aşağıdaki bilgilerini değişkenler içinde saklayınız.
öğrenci 1:
    isim: ahmet polat
    doğum tarihi: 2000
    matematik notları: 70, 70, 80
 öğrenci 2:  
    isim : furkan is
    doğum tarihi: 1998
    matematik notları: 40, 40,50

2- öğrencilerin yaş bilgilerini değişkende tutunuz.
3- öğrencilerin ders ortalama notunu değişkende saklayınız.
4- öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1_ad = "Ahmet";
let ogr1_soyad = "Polat";
let ogr1_dogumTarihi = "2000";
let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;
let ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;

let ogr2_ad = "Furkan";
let ogr2_soyad = "İs"
let ogr2_dogumTarihi = "1998";
let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;
let ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;

let suankiYil = new Date().getFullYear();
let ogr1_yas = suankiYil - Number(ogr1_dogumTarihi);
console.log(ogr1_yas);
let ogr2_yas = suankiYil - Number(ogr2_dogumTarihi);
console.log(ogr2_yas);

console.log(parseFloat(ogr1_ortalama));
console.log(parseInt(ogr2_ortalama));

console.log(ogr1_ortalama >= 50);
console.log(ogr2_ortalama >= 50);