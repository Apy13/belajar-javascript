let aritmatikaAngka1, operatorAritmatika, aritmatikaAngka2, hasilOperatorAritmatika;

document.getElementById("buttonAritmatika").onclick = function () {
    // input
    aritmatikaAngka1 = document.getElementById("aritmatikaAngka1").value;
    aritmatikaAngka2 = document.getElementById("aritmatikaAngka2").valueAsNumber;
    operatorAritmatika = document.getElementById("operatorAritmatika").value;
    // operasi
    hasilOperatorAritmatika = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);
    
    // hasil
    document.getElementById("hasilOperatorAritmatika").textContent = hasilOperatorAritmatika;
}

let boolean1, operatorLogika, boolean2, hasilOperatorLogika;

document.getElementById("buttonLogika").onclick = function () {
    // input
    boolean1 = document.getElementById("boolean1").value;
    boolean2 = document.getElementById("boolean2").valueAsNumber;
    operatorLogika = document.getElementById("operatorLogika").value;
    // operasi
    hasilOperatorLogika = eval(boolean1 + operatorLogika + boolean2);
    
    // hasil
    document.getElementById("hasilOperatorLogika").textContent = hasilOperatorLogika;
}