const btn = document.querySelector('.btn');

let semana = [
    'Domingo',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado'
];

let meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
];

btn.addEventListener('click', e => {
    e.preventDefault();

    let hoje = new Date();
    let hora = hoje.getHours();
    let min = hoje.getMinutes();
    let sec = hoje.getSeconds();

    let dia = hoje.getDate();
    let mes = hoje.getMonth();
    let ano = hoje.getFullYear();

    let diaS = hoje.getDay();
    let mesS = hoje.getMonth();

    if(dia < 10 && mes < 10) {
        dia = "0" + dia;
        mes = "0" + mes;

        document.querySelector('.dia').value = dia;
        document.querySelector('.mes').value = mes;
        document.querySelector('.ano').value = ano;

        document.querySelector('.diaS').value = semana[diaS];
        document.querySelector('.mesS').value = meses[mesS];
    }
    
    let relogio = setInterval(() => {
        document.querySelector('.hora').value = hora;
        document.querySelector('.min').value = min;
        document.querySelector('.sec').value = sec;
    }, 1000);

    const stop = document.querySelector('.stop');
    stop.addEventListener('click', e => {
        e.preventDefault();
        clearInterval(relogio);
    });
});



document.querySelector('.trash').addEventListener('click', e => {
    e.preventDefault();
    
    document.querySelector('.dia').value = "";
    document.querySelector('.mes').value = "";
    document.querySelector('.ano').value = "";
    document.querySelector('.diaS').value = "";
    document.querySelector('.hora').value = "";
    document.querySelector('.min').value = "";
    document.querySelector('.sec').value = "";
    document.querySelector('.mesS').value = "";
});

document.querySelector('.bg').onclick = () => {
    document.querySelector('.alert').classList.remove('show');
    document.querySelector('.bg').classList.remove('show-bg');
};
document.querySelector('.x').onclick = () => {
    document.querySelector('.alert').classList.remove('show');
    document.querySelector('.bg').classList.remove('show-bg');
};