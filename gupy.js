// RESPOSTA QUESTÃO 1 
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K++;
    SOMA += K;
}
console.log("O valor final de SOMA é:", SOMA);

// RESPOSTA QUESTÃO 2
function isFibonacci(num) {
    if (num < 0) return false; // Números negativos não estão na sequência

    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        // Atualiza os valores de a e b
        const temp = a + b;
        a = b;
        b = temp;
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numero = 21; // Substitua pelo número que deseja verificar
console.log(isFibonacci(numero));

// RESPOSTA QUESTÃO 3
const faturamentoDiario = [
    1200, 800, 0, 1500, 0, 1000, 2000, 
    800, 0, 1800, 1200, 1000, 0, 1700, 
    1500, 1900, 0, 1400, 1100, 900, 0, 
    2000, 1300, 800, 1500, 0, 1800, 1700, 
    1600, 1400
];

function calcularFaturamento(faturamento) {
    const diasUteis = faturamento.filter(valor => valor > 0); // Remove dias com faturamento 0

    const menorFaturamento = Math.min(...diasUteis);
    const maiorFaturamento = Math.max(...diasUteis);

    const mediaMensal = diasUteis.reduce((acc, valor) => acc + valor, 0) / diasUteis.length;

    const diasAcimaDaMedia = diasUteis.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Exemplo de uso

console.log("Menor valor de faturamento ocorrido:", (calcularFaturamento(faturamentoDiario)).menorFaturamento);
console.log("Maior valor de faturamento ocorrido:", (calcularFaturamento(faturamentoDiario)).maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal:", (calcularFaturamento(faturamentoDiario)).diasAcimaDaMedia);

// RESPOSTA QUESTÃO 4
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    // Calcula o valor total
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Calcula o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2); // Formata para 2 casas decimais
    }

    return { total, percentuais };
}

// Exemplo de uso
const resultado = calcularPercentual(faturamentoPorEstado);

console.log("Faturamento Total: R$", (calcularFaturamento(faturamentoDiario)).total.toFixed(2));
console.log("Percentual por estado:");
for (const estado in (calcularFaturamento(faturamentoDiario)).percentuais) {
    console.log(`${estado}: ${(calcularFaturamento(faturamentoDiario)).percentuais[estado]}%`);
}

// RESPOSTA QUESTÃO 5
function inverterString(str) {
    let stringInvertida = "";
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; // Adiciona o caractere na nova string
    }

    return stringInvertida;
}

// Exemplo de uso
const entrada = "Exemplo de string"; // Substitua por qualquer string
console.log("String original:", entrada);
console.log("String invertida:", inverterString(entrada));
