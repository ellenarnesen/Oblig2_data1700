let kundene = [];
function kjopBill(){
    //henter data fra input-felt
    const bill = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        navn: document.getElementById("navn").value,
        etterNavn: document.getElementById("etterNavn").value,
        telefon: document.getElementById("telefon").value,
        epost: document.getElementById("epost").value
    }

    let utskrift;
    let error = false;

    if(bill.antall <= 0){
        utskrift = "Må skrive noe inn i antall";
        document.getElementById("feilmelAntall").innerHTML=utskrift;
        error = true;
    }
    else{
        document.getElementById("feilmelAntall").innerHTML = ""
    }
    if (bill.navn === ""){
        utskrift = "Må skrive noe inn i fornavn";
        document.getElementById("feilmelNavn").innerHTML=utskrift;
        error = true;
    }
    if (bill.etterNavn === ""){
        utskrift = "Må skrive noe inn i etternavn";
        document.getElementById("feilmelEtterNavn").innerHTML=utskrift;
        error = true;
    }
    if (bill.telefon.length != 8){
        utskrift = "Må skrive noe inn i telefon";
        document.getElementById("feilmelTel").innerHTML=utskrift;
        error = true;
    }

    if (bill.epost === ""){
        utskrift = "Må skrive noe inn i epost";
        document.getElementById("feilmelEpost").innerHTML=utskrift;
        error = true;
    }

    if(!error){
        document.getElementById("film").value= "";
        document.getElementById("antall").value= "";
        document.getElementById("navn").value= "";
        document.getElementById("etterNavn").value= "";
        document.getElementById("telefon").value= "";
        document.getElementById("epost").value= "";
        kundene.push(bill)
    }

    let billettUt = "<table>" +
        "<tr><th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th></tr>";

    for(let etKjop of kundene){
        billettUt += "<tr><td>" + etKjop.film + "</td><td>" + etKjop.antall +"</td><td>" + etKjop.navn +
            "</td><td>" + etKjop.etterNavn + "</td><td>" + etKjop.telefon + "</td><td>"
            + etKjop.epost + "</td></tr>"
    }

    document.getElementById("kjopet").innerHTML = billettUt;

}

function slettBill(){
    //sletter billettene (arrayet)
    kundene = [];
    document.getElementById("kjopet").innerHTML = " ";
}