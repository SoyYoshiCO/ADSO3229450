function fnGeo() {

    let datoVariable = "";

    datoVariable = document.getElementById("txtDato").value;

    console.log("Dato:", datoVariable);

    fnSalidaParrafo(datoVariable);
    fnAlerta(datoVariable);

}

function fnSalidaParrafo(datoVariable) {

    document.getElementById("pfoSalida").innerHTML =
        "El dato ingresado fue: " + datoVariable;

}

function fnAlerta(datoVariable) {

    alert(`El dato ingresado en caja fue: ${datoVariable}`);

}

function fnCalculaRider() {

    let numero1 = 0;
    let numero2 = 0;

    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    let resultadoSuma = parseInt(numero1) + parseInt(numero2);
    let resultadoResta = parseInt(numero1) - parseInt(numero2);

    console.log(
        "Suma de datos:",
        numero1,
        "+",
        numero2,
        "es:",
        resultadoSuma
    );

    console.log(
        `Resta de datos con comilla inversa: ${numero1} - ${numero2} es: ${resultadoResta}`
    );

    fnSalidaContenedorDivSuma(resultadoSuma);

    fnSalidaContenedorDivResta(
        numero1,
        numero2,
        resultadoResta
    );

    fnSalidaContenedorDivMultiplica(
        numero1,
        numero2
    );

    fnSalidaContenedorDivDivision(
        numero1,
        numero2
    );
    
    fnSalidaContenedorDivSeno(
        numero1,
        numero2
    );

}
function fnSalidaContenedorDivSuma(resultadoSuma) {

    document.getElementById("divSalidaSuma").textContent =
        "Resultado de la suma es: " + resultadoSuma;

}

function fnSalidaContenedorDivResta(numero1, numero2, resultadoResta) {

    document.querySelector(".divSalidaResta").textContent =
        `Al restar: ${numero1} - ${numero2} = ${resultadoResta}`;

}

function fnSalidaContenedorDivMultiplica(numero1, numero2) {

    let resultadoMultiplica = numero1 * numero2;

    document.getElementsByClassName("divSalidaMultiplica")[0].textContent =
        `Al multiplicar los números: ${numero1} * ${numero2} = ${resultadoMultiplica}`;

}

function fnSalidaContenedorDivDivision(numero1, numero2) {
    let resultadoDivision = numero1 / numero2;

    document.getElementsByClassName("divSalidaDivide")[0].textContent =
        `Al dividir los números: ${numero1} / ${numero2} = ${resultadoDivision}`;
}

function fnSalidaContenedorDivSeno(numero1, numero2) {
    let resultadoSeno = Math.sin(parseInt(numero1));

    document.getElementsByClassName("divSalidaSeno")[0].textContent =
        `El seno del número: ${numero1} = ${resultadoSeno}`;
}