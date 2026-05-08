function checarNulo(valores) {
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] == null || valores[i] == undefined) {
            console.log(`Valor inválido: ${valores[i]}`);
            return false;
        }
    }
    return true;
}

function checarTipo(valores) {
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i] !== "number") {
            console.log(`Esperado número, recebido: ${typeof valores[i]}`);
            return false;
        }
    }
    return true;
}

function validar(valores) {
    return checarNulo(valores) && checarTipo(valores);
}

function somar(n1, n2) {
    if (!validar([n1, n2])) return;
    return n1 + n2;
}

function calcularDistancia(x1, y1, x2, y2) {
    if (!validar([x1, y1, x2, y2])) return;
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

function converterParaHoraMinutoSegundo(segundos) {
    if (!validar([segundos])) return;
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let seg = segundos % 60;
    return `${horas}:${minutos}:${seg}`;
}

function ePrimo(numero) {
    if (!validar([numero])) return;
    if (numero <= 1) return false;
    for (let i = 2; i <= numero ** 0.5; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function calcularFatorial(numero) {
    if (!validar([numero])) return;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularMedia(numeros) {
    if (!validar(numeros)) return;
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total / numeros.length;
}

function calcularMediaPonderada(valores, pesos) {
    if (!validar(valores) || !validar(pesos)) return;
    let somatorio = 0;
    let totalPesos = 0;
    for (let i = 0; i < valores.length; i++) {
        somatorio += valores[i] * pesos[i];
        totalPesos += pesos[i];
    }
    return somatorio / totalPesos;
}
