// Motrando a hora e a data formatada
function mostrarDataHora(hora, diaSemana, dia, mes, ano){
    retorno = "" + hora + ""
    retorno += "" + diaSemana + ", " + dia + " de " + mes + " de " + ano;
    document.getElementById("datahora").innerHTML = retorno;
}

// Mostrando data e hora atualizada
function atualizarDataHora() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var diaSemana = getDiaExtenso(dataAtual.getDay());
    var mes = getMesExtenso(data.getMonth());
    var ano = dataAtual.getYear();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();
    var segundo = dataAtual.getSeconds();
 
    var horaImprimivel = hora + ":" + minuto + ":" + segundo;
    mostrarDataHora(horaImprimivel, diaSemana, dia, mes, ano);
    setTimeOut("atualizarDataHora()", 1000);
}

// obtendo dia e mês
function getMesExtenso(mes){
    return this.arrayMes[mes];
}
 
function getDiaExtenso(dia){
    return this.arrayDia[dia];
}

// iniciando arrays com os dias e meses por extenso
var arrayDia = new Array(7);
arrayDia[0] = "Domingo";
arrayDia[1] = "Segunda";
arrayDia[2] = "Terça";
arrayDia[3] = "Quarta";
arrayDia[4] = "Quinta";
arrayDia[5] = "Sexta";
arrayDia[6] = "Sábado";
 
var arrayMes = new Array(12);
arrayMes[0] = "Janeiro";
arrayMes[1] = "Fevereiro";
arrayMes[2] = "Março";
arrayMes[3] = "Abril";
arrayMes[4] = "Maio";
arrayMes[5] = "Junho";
arrayMes[6] = "Julho";
arrayMes[7] = "Agosto";
arrayMes[8] = "Setembro";
arrayMes[9] = "Outubro";
arrayMes[10] = "Novembro";
arrayMes[11] = "Dezembro";

// retornando dia e mês
const currentYaer = date.getFullYear();
console.log(currentYaer);

// retorna dia e mês
const today = date.getDate();
const currentMonth = date.getMonth() + 1;
