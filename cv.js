function test() {

    var B5= document.f.B5.value;
    var B4 = document.f.B4.value;
    var B3= document.f.B3.value;
    var B2= document.f.B2.value;
    var B1= document.f.B1.value;
    var a = "@";
    var pt = ".";
    if (B1.length == 0 ) {
        alert("verifier votre nom !");
    }
    else if (B2.length == 0){
        alert("verifier votre prenom!");
    }
    else if (B3.length == 0){
        alert("verifier votre mail!");
    }
    else if (B4.length == 0){
        alert("verifier votre  numero!");
    }
    else if (B5.length == 0){
        alert("verifier votre  message!");
    }
    else {
        if (B4.length < 8) {
            alert("votre numero manque des chiffres ");
        }
        else if (isNaN( B4 ) ){ alert("num invalide 1"); } 
        else {
            if (B3.substring(B3.indexOf(a)) =='@esprit.tn') {
                alert("votre message est bien envoyee");
            } else {
                alert("verifier votre mail (@esprit.tn)");
            }
		
        }
    }

}


