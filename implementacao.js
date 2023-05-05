
window.onload = function () 
{ 
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(states => {
        const ufSelect = document.getElementById('uf');
        const optionVazia = document.createElement('option');
        optionVazia.value = '';
        optionVazia.text = 'Selecione';
        ufSelect.appendChild(optionVazia);

        states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.sigla;
        option.text = state.nome;
        ufSelect.appendChild(option);
        });
    });
 } 

function CarregarCidade() {
    $("#cidade").val("");
    $("#bairro").val("");
    const selectedUf = $("#uf").val();
    const citySelect = document.getElementById('cidade');
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => response.json())
        .then(cities => {
        citySelect.innerHTML = '';
        const optionVazia = document.createElement('option');
        optionVazia.value = '';
        optionVazia.text = 'Selecione';
        citySelect.appendChild(optionVazia);
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.id;
            option.text = city.nome;
            citySelect.appendChild(option);
        });
    });
} 

function CarregarDistrito() {
    $("#bairro").val("");
    const selectedCity = $("#cidade").val();
    const neighborhoodSelect = document.getElementById('bairro');
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${selectedCity}/distritos`)
        .then(response => response.json())
        .then(neighborhoods => {
        neighborhoodSelect.innerHTML = '';
        const optionVazia = document.createElement('option');
        optionVazia.value = '';
        optionVazia.text = 'Selecione';
        neighborhoodSelect.appendChild(optionVazia);
        neighborhoods.forEach(neighborhood => {
            const option = document.createElement('option');
            option.value = neighborhood.nome;
            option.text = neighborhood.nome;
            neighborhoodSelect.appendChild(option);
        });
    });
}

function Salvar() {
    var nome = $("#nome").val();
    var ultimo_nome = $("#ultimo_nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();
    var endereco = $("#endereco").val();
    var numero = $("#numero").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var bairro = $("#bairro").val();

    if(nome == "") {
        $("#valid_nome").show();
    }

    if(ultimo_nome == "") {
        $("#valid_ultimo_nome").show();
    }

    if(email == "") {
        $("#valid_email").show();
    }

    if(senha == "") {
        $("#valid_senha").show();
    }

    if(endereco == "") {
        $("#valid_endereco").show();
    }

    if(numero == "") {
        $("#valid_numero").show();
    }

    if(uf == "" || uf == "null" || uf == null) {
        $("#valid_uf").show();
    }

    if(cidade == "" || cidade == "null" || cidade == null) {
        $("#valid_cidade").show();
    }

    if(bairro == "" || bairro == "null" || bairro == null) {
        $("#valid_bairro").show();
    }
}

function ValidarCampos(event) {
    const idCampo = event.target.id;
    const valueCampo = $("#"+idCampo).val();
    if(valueCampo != "") {
        $("#valid_"+idCampo).hide();
    }
}