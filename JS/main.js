const btnAddFormulario = document.querySelector("#btn-add");
const formulario = document.querySelector(".formulario"); 
const btnFecharFormulario = document.querySelector(".btn-fechar");
const btnConfirmarFormulario = document.querySelector(".btn-confirmar");
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const diag = document.querySelector("#texto-diag");


btnAddFormulario.addEventListener("click", function(e) {
  e.preventDefault();
  
  diag.textContent = '';
  diag.style.color = 'black';
  formulario.classList.add('show');
});

btnFecharFormulario.addEventListener("click", function(e) {
    e.preventDefault();

    formulario.classList.remove('show');
});

btnConfirmarFormulario.addEventListener("click", function(e){
    e.preventDefault();
    if(titulo.value == '' || descricao.value == '' || data.value == ''){
        diag.textContent = "Todos os campos devem ser preenchidos!";
        diag.style.color = 'red';
        diag.style.visibility = 'visible';
    }else {
        const listaToDo = document.querySelector('#TO-DO');
        const item = criarCard(titulo.value,descricao.value,data.value);
        listaToDo.appendChild(item);
        formulario.classList.remove('show');
        titulo.value = '';
        descricao.value = '';
        data.value = '';
    }

});

function criarCard(textoTitulo, textoDescricao, textoData){
    const itemLista = document.createElement('li');
    const areaTitulo = document.createElement('div');
    const titulo = document.createElement('h3');
    const descricao = document.createElement('p');
    const data = document.createElement('p');

    const areaControle = document.createElement('div');

    const btnExcluir = document.createElement('button');
    const iconExcluir = document.createElement('i');

    const btnDireita = document.createElement('button');
    const iconDireita = document.createElement('i');

    const btnEsquerda = document.createElement('button');
    const iconEsquerda = document.createElement('i');

    const btnAcima = document.createElement('button');
    const iconAcima = document.createElement('i');

    const btnAbaixo = document.createElement('button');
    const iconAbaixo = document.createElement('i');

    itemLista.className = 'card';

    areaTitulo.className = 'card-head';
    titulo.className = 'card-titulo';
    titulo.textContent = textoTitulo;
    areaTitulo.appendChild(titulo);

    descricao.textContent = textoDescricao;
    data.textContent = 'Data: ' + textoData;

    areaControle.className = 'card-controle';

    btnExcluir.className = 'card-btn';
    btnExcluir.style.left = "0px";
    btnExcluir.addEventListener('click',clickExcluir);
    iconExcluir.className = 'material-icons';
    iconExcluir.textContent = 'delete';
    btnExcluir.appendChild(iconExcluir);

    btnDireita.className = 'card-btn';
    btnDireita.style.right = "0px";
    btnDireita.addEventListener('click',clickDireita);
    iconDireita.className = 'material-icons';
    iconDireita.textContent = 'arrow_forward';
    btnDireita.appendChild(iconDireita);

    btnEsquerda.className = 'card-btn';
    btnEsquerda.style.right = '25px';
    btnEsquerda.addEventListener('click',clickEsquerda);
    iconEsquerda.className = 'material-icons';
    iconEsquerda.textContent = 'arrow_back';
    btnEsquerda.appendChild(iconEsquerda);

    btnAcima.className = 'card-btn';
    btnAcima.style.right = '75px';
    iconAcima.className = 'material-icons';
    iconAcima.textContent = 'arrow_upward';
    btnAcima.appendChild(iconAcima);

    btnAbaixo.className = 'card-btn';
    btnAbaixo.style.right = '100px';
    iconAbaixo.className = 'material-icons';
    iconAbaixo.textContent = 'arrow_downward';
    btnAbaixo.appendChild(iconAbaixo);

    areaControle.appendChild(btnExcluir);
    areaControle.appendChild(btnDireita);
    areaControle.appendChild(btnEsquerda);
    areaControle.appendChild(btnAcima);
    areaControle.appendChild(btnAbaixo);

    itemLista.appendChild(areaTitulo);
    itemLista.appendChild(descricao);
    itemLista.appendChild(data);
    itemLista.appendChild(areaControle);

    return itemLista;

}

function clickExcluir(e){
    const card = e.target.parentElement.parentElement.parentElement;
    const lista = card.parentElement;
    lista.removeChild(card);
}

function clickDireita(e){
    const card = e.target.parentElement.parentElement.parentElement;
    const listaAtual = card.parentElement;
  
    switch(listaAtual.id){
        case 'TO-DO':
            const listaDoing = document.querySelector('#DOING');
            listaDoing.appendChild(card);
        break;
        case 'DOING':
            const listaDone = document.querySelector('#DONE');
            listaDone.appendChild(card);
        break;

    }
}

function clickEsquerda(e){
    const card = e.target.parentElement.parentElement.parentElement;
    const listaAtual = card.parentElement;
  
    switch(listaAtual.id){
        case 'DONE':
            const listaDoing = document.querySelector('#DOING');
            listaDoing.appendChild(card);
        break;
        case 'DOING':
            const listaToDo = document.querySelector('#TO-DO');
            listaToDo.appendChild(card);
        break;
              
    }
}








