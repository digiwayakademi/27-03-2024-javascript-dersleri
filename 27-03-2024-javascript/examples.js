//1- Bir sayının 10 ile 50 arasında olup olmadığını kontrol edelim.
/*
let sayi1= 35;
if(sayi1>10 && sayi1<50)
{
    console.log("Girdiğiniz sayı 10 ile 50 arasındadır.");
}else{
    console.log("Girdiğiniz sayı 10 ile 50 arasında değildir.")
}

*/

//2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
/*
let sayi = -21;
if(sayi % 2 == 1 && sayi>0)
{
    console.log("Girdiğiniz sayı pozitif tek sayıdır.")
}else{
    console.log("Girdiğiniz sayı pozitif tek sayı değildir.")
}

*/

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.
/*
let x=30, y=30, z=30;

if(x>y && x>z)
{
  console.log("x en büyük sayıdır.");
}else if(y>x && y>z)
{
    console.log("y en büyük sayıdır."); 
}else if(z>x && z>y)
{
    console.log("z en büyük sayıdır.");
}else{
    console.log("sayılar eşit");
}

*/ 

// 4- 2 vize (%40) ve 1 final (60%) notuna göre hesaplanan ortalama için;
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
// b- Geçmek için ortalama 50 olsa bile final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.

let vize1 = 80;      
let vize2 = 80;    
let final = 49;

let ortalama  = ((vize1 + vize2) / 2 * 0.4 ) + (final * 0.6) ;


//b koşulunu karşılıyor

if( ortalama >= 50 && final>=50)
{
    console.log("Geçti");
}else{
    console.log("Kaldı.");
}

//3 ünü birden karşılar.

if((ortalama >= 50 && final>=50) || final>=70)
{
    console.log("Geçti");
}else{
    console.log("Kaldı.");
}