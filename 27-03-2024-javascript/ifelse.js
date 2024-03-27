// Koşullu İfadeler
/*
let username="atakananilgenc";
let password="12345";


if(username=="atakananilgenc")
{
    if(password == "1234")
    {
        console.log("Uygulamaya giriş yapıldı.");  
    }else{
        console.log("Parolanız hatalı.")
    }   
    
}else{
    console.log("Kullanıcı adı yanlış.");
}

*/

// yas>=18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "lise";
let yas = 17;

if(yas>=18  && (mezuniyet == "lise" || mezuniyet=="üniversite"))
{
    console.log("Ehliyet alabilirsin.")
}else{
    console.log("Ehliyet alamazsın.")
}






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