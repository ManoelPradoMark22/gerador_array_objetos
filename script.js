function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var valorMin = -10;
var valorMax = 40;

alert("O objeto deve ser semelhante com o exemplo a seguir: { dia: 2, mes: 1, tempMaxima: 33.2, tempMinima: 2.66, choveu: false }");
alert("A seguir, você vai ter que inserir como vão ser chamadas as chaves do seu objeto. As chaves do exemplo anterior eram: dia, mes, tempMaxima, tempMinima, choveu");
const CHAVE_DIA = window.prompt("Digite como vai ser chamada a chave DIA do seu objeto: ");
const CHAVE_MES= window.prompt("Digite como vai ser chamada a chave MÊS do seu objeto: ");
const CHAVE_TEMP_MAX= window.prompt("Digite como vai ser chamada a chave TEMPERATURA MÁXIMA do seu objeto: ");
const CHAVE_TEMP_MIN= window.prompt("Digite como vai ser chamada a chave TEMPERATURA MÍNIMA do seu objeto: ");
const CHAVE_CHUVA= window.prompt("Digite como vai ser chamada a chave CHOVEU do seu objeto: ");

alert("ATENÇÃO! A seguir você terá que digitar o valor MÍNIMO e MÁXIMO do intervalo das temperaturas. Esses valores serão inclusos no resultado! Eles devem ser INTEIROS, mas não se preocupe! O array de temperaturas retornado vai ser composto por dados REAIS!");
valorMin = parseInt(window.prompt("Digite o valor mínimo INTEIRO do array de temperatura: "));

do {
  valorMax = parseInt(window.prompt("Digite o valor máximo INTEIRO do array de temperatura: "));
  if (valorMax<=valorMin) {
    alert("O valor máximo deve ser maior que o valor mínimo!");
  }
} while(valorMax<=valorMin);


document.write("-----------------------------------------------------<br><br>");
document.write("Temperaturas entre " + valorMin + " e " + valorMax + ": <br><br>");
document.write("-----------------------------------------------------<br><br>");
document.write("Copie o array de objetos abaixo: <br>");

function geradorStringNumeroReal() {
  let numAntesVirgula = getRandomIntInclusive(valorMin, valorMax);
  let numDepoisVirgula = 0;

  if (numAntesVirgula==valorMax) {
    numDepoisVirgula = 0;
  } else {
    numDepoisVirgula = getRandomIntInclusive(0, 99);
  }

  let stringNumero = (numAntesVirgula + '.' + numDepoisVirgula);

  return parseFloat(stringNumero);
}

function geradorBooleano() {
  let sorte = getRandomIntInclusive(0, 1);

  if ( sorte === 1) {
    return true 
  }
  else return false; 
}

const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let i=0; i<12; i++) {
  for (let j=0; j<diasPorMes[i]; j++) {

    let temp1 = geradorStringNumeroReal();
    let temp2 = geradorStringNumeroReal();

    let tempMaxima = (temp1>=temp2) ? temp1 : temp2;
    let tempMinima = (temp1<=temp2) ? temp1 : temp2;
    let numeroMes = i+1;
    let numeroDia = j+1;
    let choveu = geradorBooleano();
  
    document.write("<br>{<br>" + CHAVE_DIA + ": " + numeroDia + ",<br>" + CHAVE_MES + ": " + numeroMes + ",<br>" + CHAVE_TEMP_MAX + ": " + tempMaxima + ",<br>" + CHAVE_TEMP_MIN + ": " + tempMinima + ",<br>" + CHAVE_CHUVA + ": " + choveu + "<br>},");
  }
}


