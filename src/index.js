let contadorImagem1 = 0;
let contadorImagem2 = 0;
let floresta = document.getElementById("1")
let cachoeira = document.getElementById("2")

function handleMonitorarMouse(codigoImagem) {
    if(codigoImagem == 1){
        contadorImagem1++;
    } else if (codigoImagem = 2) {
        contadorImagem2++;
    }

    const contaPonteiroNaImagem = {
        imagem1: contadorImagem1,
        imagem2: contadorImagem2
    }

    return JSON.stringify(contaPonteiroNaImagem)
}

floresta.addEventListener("mouseover", () => handleMonitorarMouse(1))
cachoeira.addEventListener("mouseover", () => handleMonitorarMouse(2))
