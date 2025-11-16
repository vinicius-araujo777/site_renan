const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const smalls = document.querySelectorAll('.msgError');
const smallsValidade = document.querySelectorAll('.msgValidade')
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    nameValidate();
    telefoneValidade();
    emailValidade()
    senhaValidade();
    compareSenha();
    const erros = document.querySelectorAll('.msgError[style*="block"]');
    if(erros.length > 0)
    {
         event.preventDefault();
    }
    else
    {

    }
});


function setError(index) {
    campos[index].style.border = '2px solid red';
    smalls[index].style.display = 'block';
    smallsValidade[index].style.display = 'none';
}
function removerError(index) {
    campos[index].style.border = '2px solid green';
    smalls[index].style.display = 'none';
    smallsValidade[index].style.display = 'block';
}


function nameValidate() {
    if (campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removerError(0);
    }
}

function telefoneValidade() {
    const numero = campos[1].value.replace(/\D/g, '');
    if (numero.length < 11)
    {
        setError(1);
    }
    else
    {
        removerError(1);
    }
}


function emailValidade(){
    if(regex.test(campos[2].value))
    {
        removerError(2)
    }
    else
    {
        setError(2)
    }
}

function senhaValidade(){
    if(campos[3].value.length < 6)
    {
        setError(3);
    }
    else
    {
        removerError(3);
        compareSenha();
    }
}


function compareSenha(){
    if(campos[3].value == campos[4].value && campos[4].value.length >= 6)
    {
        removerError(4);
    }
    else
    {
        setError(4);
    }
}