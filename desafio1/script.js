var dolar = 5.63;

var euro = 6.61;

var iene = 0.051;

var libra = 7.77;

var anosLuz = 9460730777119.56;

var alternaDolar = 0;
var alternaEuro = 0;
var alternaIene = 0;
var alternaLibra = 0;
var alternaAnosLuz = 0;

function converterDolar() {
    var dolarToReal = document.querySelector(".dolarToReal");
    var realToDolar = document.querySelector(".realToDolar");

    if (alternaDolar == 0)
    {
    dolarToReal.value = parseFloat(dolarToReal.value);
    realToDolar.value = "R$ " + (dolarToReal.value * dolar).toFixed(2);
    }
    else
    {
        realToDolar.value = parseFloat(realToDolar.value);
        dolarToReal.value = "U$ " + (realToDolar.value / dolar).toFixed(2);
    }
}

function alternarDolar() {
    if (alternaDolar == 0)
    {
        alternaDolar = 1;
    }
    else
    {
        alternaDolar = 0;
    }
    alternar(".pDolarToReal", ".pRealToDolar");
}

function converterEuro() {
    var euroToReal = document.querySelector(".euroToReal");
    var realToEuro = document.querySelector(".realToEuro");
    
    if (alternaEuro == 0)
    {
        euroToReal.value = parseFloat(euroToReal.value);
        realToEuro.value = "R$ " + (euroToReal.value * euro).toFixed(2);
    }
    else
    {
        realToEuro.value = parseFloat(realToEuro.value);
        euroToReal.value = "€ " + (realToEuro.value / euro).toFixed(2);
    }
}

function alternarEuro() {
    if (alternaEuro == 0)
    {
        alternaEuro = 1;
    }
    else
    {
        alternaEuro = 0;
    }
    alternar(".pEuroToReal", ".pRealToEuro");
}

function converterIene() {
    var ieneToReal = document.querySelector(".ieneToReal");
    var realToIene = document.querySelector(".realToIene");

    if (alternaIene == 0)
    {
        ieneToReal.value = parseFloat(ieneToReal.value);
        realToIene.value = "R$ " + (ieneToReal.value * iene).toFixed(2);
    }
    else
    {
        realToIene.value = parseFloat(realToIene.value);
        ieneToReal.value = (realToIene.value / iene).toFixed(2) + " ¥";
    }
}

function alternarIene() {
    if (alternaIene == 0)
    {
        alternaIene = 1;
    }
    else
    {
        alternaIene = 0;
    }
    alternar(".pIeneToReal", ".pRealToIene");
}

function converterLibra() {
    var libraToReal = document.querySelector(".libraToReal");
    var realToLibra = document.querySelector(".realToLibra");
    
    if (alternaLibra == 0)
    {
        libraToReal.value = parseFloat(libraToReal.value);
        realToLibra.value = "R$ " + (libraToReal.value * libra).toFixed(2);
    }
    else
    {
        realToLibra.value = parseFloat(realToLibra.value);
        libraToReal.value = "£ " + (realToLibra.value / libra).toFixed(2);
    }
}

function alternarLibra() {
    if (alternaLibra == 0)
    {
        alternaLibra = 1;
    }
    else
    {
        alternaLibra = 0;
    }
    alternar(".pLibraToReal", ".pRealToLibra");
}

function alternar(p1, p2) {
    var invertP1 = document.querySelector(p1);
    var invertP2 = document.querySelector(p2);
    var invertPExtra = invertP1.innerHTML;
    invertP1.innerHTML = invertP2.innerHTML;
    invertP2.innerHTML = invertPExtra;
}

function converterAnosLuz() {
    var anosLuzToKm = document.querySelector(".anosLuzToKm");
    var kmToAnosLuz = document.querySelector(".kmToAnosLuz");

    if (alternaAnosLuz == 0)
    {
        anosLuzToKm.value = parseFloat(anosLuzToKm.value);
        kmToAnosLuz.value = (anosLuzToKm.value * anosLuz) + " km";
    }
    else
    {
        kmToAnosLuz.value = parseFloat(kmToAnosLuz.value);
        anosLuzToKm.value = (kmToAnosLuz.value / anosLuz) + " ly";
    }
}

function alternarAnosLuz() {
    if (alternaAnosLuz == 0)
    {
        alternaAnosLuz = 1;
    }
    else
    {
        alternaAnosLuz = 0;
    }
    alternar(".pAnosLuzToKm", ".pKmToAnosLuz");
}