let sonuc;
let a=35, b=30, c=42;

//1- Aritmetik Operatörler
//Toplama çıkarma bölme çarpma, mod alma

/*
sonuc = a + b;
sonuc = a - b;
sonuc = a / b;
sonuc = a * b;
sonuc = c % 2; //bir sayıyı kalan 0 ise bu sayı çift sayıdır. kalan 1 ise tek sayıdır.

//sonuc = ++a; //sonuc = a+1 Bu işlemde önce a yı bir arttırır sonra sonucun içine atar
sonuc = a++;  // sonuc = a+1 Bu işlemde önce a yı sonuca atar, sonra a yı bir arttırır.
console.log(sonuc);
console.log(a);
*/
// 2- Atama Operatörleri

//sonuc = 88;

//sonuc += a; //sonuc = sonuc + a
//sonuc -= b; // sonuc = sonuc - b
//sonuc *= b; // sonuc = sonuc * b
//sonuc /= c;  // sonuc = sonuc / c
//sonuc %= c;  // sonuc = sonuc % c

//3- Karşılaştırma Operatörleri

//sonuc = (a==b);  // A B ye eşit eşit
//sonuc = (a!=b);  // A B ye değil eşit
//sonuc = (3 == "3"); // true değeri döner. tip ayrımına bakmaz.
//sonuc = (3 === "3"); // false değeri döner. tip ayrımına bakar.

//sonuc = (20==30);
//sonuc = (20!=30);
//sonuc = (20>30);
sonuc = (20<30);
console.log(sonuc);

//4- Mantıksal Operatörler

//and operatörü  ve anlamına geliyor
//&&
//true true = true;
//true false = false;
//false false = false;

//or operatörü   veya anlamıyo geliyor.
// ||
// true false = true;
//true true = true;
//false false = false;