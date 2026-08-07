const temperatura = 380; //(temperatura do disco em ºC)
const freioPressionado = true; //(indica se o motorista está pisando no freio)
const AlertaPerigo = temperatura >= 400;
const UsoIntenso = (temperatura > 300 && freioPressionado);
const FreioSeguro = (temperatura < 400 && temperatura >= 50);
const AlertaPainel = (temperatura > 400 || temperatura < 0);
const EstadoInativo = (!(freioPressionado));

console.log(AlertaPerigo)
console.log(UsoIntenso)
console.log(FreioSeguro)
console.log(AlertaPainel)
console.log(EstadoInativo)