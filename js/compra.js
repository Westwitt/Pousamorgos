function comprar(){
    var qtde, dias, refeicao, valorSuite, valorTotal, codSuite, nomeSuite;
    
    codSuite = document.frmOrcamento.slcSuite.selectedIndex;
    nomeSuite = document.frmOrcamento.slcSuite[codSuite].text;
    switch(codSuite){
        case 0:
            valorSuite = 200;
            break;
        case 1:
            valorSuite = 250;
            break;
        case 2:
            valorSuite = 380;
            break;
        case 3:
            valorSuite = 300;
            break;
        case 4:
            valorSuite = 666;
            break;
    }

    qtde = parseInt(document.getElementById('qtde').value);
    dias = parseInt(document.getElementById('dias').value);

    var i, refeicao, adicionais = 0;
    for(i=0;i<document.frmOrcamento.refeicao.length; i++){
        if(document.frmOrcamento.refeicao[i].checked)
        break;
    }

    if(parseInt(document.frmOrcamento.refeicao[i].value)==1){
        refeicao = 30;
    } else if(parseInt(document.frmOrcamento.refeicao[i].value)==2){
        refeicao = 50;
    } else{
        refeicao = 80;
    }
    
    if(document.getElementById('traslado').checked){
        adicionais +=100;
    }
    if(document.getElementById('tour').checked){
        adicionais +=150;
    }
    if(document.getElementById('passeio').checked){
        adicionais +=200;
    }
    valorTotal = valorSuite*qtde*dias;
    valorTotal += refeicao;
    valorTotal += adicionais;
    
    var eResumo = document.getElementById("resumoId");
    eResumo.classList.add("pagNome");
    document.getElementById('resumoId').innerHTML = "Resumo";
    
    var eFormulario = document.getElementById("eFormulario");
    eFormulario.classList.add("formulario");

    document.getElementById('nomeSuite').innerHTML = "Suíte: " + nomeSuite;
    document.getElementById('valorSuite').innerHTML = "Valor da Suíte: R$" + valorSuite;
    document.getElementById('refeicoes').innerHTML = "Valor da refeiçao: R$" + refeicao;
    document.getElementById('adicionais').innerHTML = "Adicionais: R$" + adicionais;
    document.getElementById('valorTotal').innerHTML = "Valor total: R$" + valorTotal;
}