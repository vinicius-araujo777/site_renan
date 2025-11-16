const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const smalls = document.querySelectorAll('.msgError');
const smallsValidade = document.querySelectorAll('.msgValidade')

function setError(index) {
    campos[index].style.border = '2px solid red';
    smalls[index].style.display = 'block';
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