function MM(tipo, valor) {
    let valorEmMm;

    valorEmMm = parseFloat(valorEmMm);

        if (tipo === "mm") {
            valorEmMm = valor;
        } else if (tipo === "cm") {
            valorEmMm = valor * 10;
        } else if (tipo === "m") {
            valorEmMm = valor * 1000;
        } else if (tipo === "km") {
            valorEmMm = valor * 100000;
        } else if (tipo === "polegadas") {
            valorEmMm.toFixed(5) = valor / 25.4;
        } else if (tipo === "pé") {
            valorEmMm.toFixed(5) = valor / 304.8;
        } else if (tipo === "jardas") {
            valorEmMm.toFixed(5) = valor / 914.4;
        } else if (tipo === "milha") {
            valorEmMm.toFixed(5) = valor * 1609344;
        } else if (tipo === "náuticas") {
            valorEmMm.toFixed(5) = valor * 1852000;
        }

    console.log(valorEmMm)
}


function CM(tipo, valor) {
    let valorEmCM;

    valorEmCM = parseFloat(valorEmCM);

        if (tipo === "mm") {
            valorEmCM = valor / 10;
        } else if (tipo === "cm") {
            valorEmCM = valor;
        } else if (tipo === "m") {
            valorEmCM = valor * 0.01;
        } else if (tipo === "km") {
            valorEmCM = valor * 100000;
        } else if (tipo === "polegadas") {
            valorEmCM.toFixed(5) = valor * 2.54;
        } else if (tipo === "pé") {
            valorEmCM.toFixed(5) = valor / 30.48;
        } else if (tipo === "jardas") {
            valorEmCM.toFixed(5) = valor / 91.44;
        } else if (tipo === "milha") {
            valorEmCM.toFixed(5) = valor * 1609344;
        } else if (tipo === "náuticas") {
            valorEmCM.toFixed(5) = valor * 185200;
        }

    console.log(valorEmCM)
}

function M(tipo, valor) {
    let valorEmM;

    valorEmM = parseFloat(valorEmM);

        if (tipo === "mm") {
            valorEmM = valor * 1000;
        } else if (tipo === "cm") {
            valorEmM = valor * 100;
        } else if (tipo === "m") {
            valorEmM = valor;
        } else if (tipo === "km") {
            valorEmM = valor / 1000;
        } else if (tipo === "polegadas") {
            valorEmM.toFixed(5) = valor * 39.37;
        } else if (tipo === "pé") {
            valorEmM.toFixed(5) = valor * 0.3048;
        } else if (tipo === "jardas") {
            valorEmM.toFixed(5) = valor * 0.9144;
        } else if (tipo === "milha") {
            valorEmM.toFixed(5) = valor * 1609.34;
        } else if (tipo === "náuticas") {
            valorEmM.toFixed(5) = valor * 1852;
        }

    console.log(valorEmM)
}

function KM(tipo, valor) {
    let valorEmKM;

    valorEmKM = parseFloat(valorEmKM);

        if (tipo === "mm") {
            valorEmKM = valor / 10;
        } else if (tipo === "cm") {
            valorEmKM = valor;
        } else if (tipo === "m") {
            valorEmKM = valor * 0.01;
        } else if (tipo === "km") {
            valorEmKM = valor * 100000;
        } else if (tipo === "polegadas") {
            valorEmKM.toFixed(5) = valor * 2.54;
        } else if (tipo === "pé") {
            valorEmKM.toFixed(5) = valor / 30.48;
        } else if (tipo === "jardas") {
            valorEmKM.toFixed(5) = valor / 91.44;
        } else if (tipo === "milha") {
            valorEmKM.toFixed(5) = valor * 1609344;
        } else if (tipo === "náuticas") {
            valorEmKM.toFixed(5) = valor * 185200;
        }

    console.log(valorEmKM)
}


function IN(tipo, valor) {

    if (tipo === "mm") {
        valorEmIN = valor * 25.4;
    } else if (tipo === "cm") {
        valorEmIN = valor * 2.54;
    } else if (tipo === "m") {
        valorEmIN = valor / 39.37;
    } else if (tipo === "km") {
        valorEmIN = valor / 39370;
    } else if (tipo === "polegadas") {
        valorEmIN = valor;
    } else if (tipo === "pé") {
        valorEmIN.toFixed(5) = valor / 12;
    } else if (tipo === "jardas") {
        valorEmIN.toFixed(5) = valor / 36;
    } else if (tipo === "milha") {
        valorEmIN.toFixed(5) = valor / 63360;
    } else if (tipo === "náuticas") {
        valorEmIN.toFixed(5) = valor / 72910;
    }

}

function FT(tipo, valor) {

    if (tipo === "mm") {
        valorEmFT = valor * 304.8;
    } else if (tipo === "cm") {
        valorEmFT = valor * 30.48;
    } else if (tipo === "m") {
        valorEmFT = valor / 3.281;
    } else if (tipo === "km") {
        valorEmFT = valor / 3281;
    } else if (tipo === "polegadas") {
        valorEmFT.toFixed(5) = valor * 12;
    } else if (tipo === "pé") {
        valorEmFT = valor;
    } else if (tipo === "jardas") {
        valorEmFT.toFixed(5) = valor / 3;
    } else if (tipo === "milha") {
        valorEmFT.toFixed(5) = valor / 5280;
    } else if (tipo === "náuticas") {
        valorEmFT.toFixed(5) = valor / 6076;
    }

}

function YD(tipo, valor) {

    if (tipo === "mm") {
        valorEmYD = valor * 914.4;
    } else if (tipo === "cm") {
        valorEmYD = valor * 91.44;
    } else if (tipo === "m") {
        valorEmYD = valor / 1.094;
    } else if (tipo === "km") {
        valorEmYD = valor / 1094;
    } else if (tipo === "polegadas") {
        valorEmYD = valor * 36;
    } else if (tipo === "pé") {
        valorEmYD.toFixed(5) = valor * 3;
    } else if (tipo === "jardas") {
        valorEmYD.toFixed(5) = valor / 3;
    } else if (tipo === "milha") {
        valorEmYD.toFixed(5) = valor / 5280;
    } else if (tipo === "náuticas") {
        valorEmYD.toFixed(5) = valor / 6076;
    }

}

function MI(tipo, valor) {

    if (tipo === "mm") {
        valorEmMI = valor * 1609344;
    } else if (tipo === "cm") {
        valorEmMI = valor * 160900;
    } else if (tipo === "m") {
        valorEmMI = valor / 1609.34;
    } else if (tipo === "km") {
        valorEmMI = valor / 1.609;
    } else if (tipo === "polegadas") {
        valorEmMI = valor * 63360;
    } else if (tipo === "pé") {
        valorEmMI.toFixed(5) = valor * 5280;
    } else if (tipo === "jardas") {
        valorEmMI.toFixed(5) = valor * 1760;
    } else if (tipo === "milha") {
        valorEmMI.toFixed(5) = valor / 1760;
    } else if (tipo === "náuticas") {
        valorEmMI.toFixed(5) = valor / 2025;
    }
}

function NMI(tipo, valor) {

    if (tipo === "mm") {
        valorEmMNI = valor * 1852000;
    } else if (tipo === "cm") {
        valorEmMNI = valor * 185200;
    } else if (tipo === "m") {
        valorEmMNI = valor / 1852;
    } else if (tipo === "km") {
        valorEmMNI = valor / 1.852;
    } else if (tipo === "polegadas") {
        valorEmMNI.toFixed(5) = valor * 72910;
    } else if (tipo === "pé") {
        valorEmF.toFixed(5) = valor * 6076.12;
    } else if (tipo === "jardas") {
        valorEmMNI.toFixed(5) = valor * 2025.37;
    } else if (tipo === "milha") {
        valorEmMNI.toFixed(5) = valor * 1.151;
    } else if (tipo === "náuticas") {
        valorEmMNI = valor;
    }

}
