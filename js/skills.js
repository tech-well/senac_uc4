let containerFilho__0 = document.querySelector('.container__filho__0');
let containerFilho__1 = document.querySelector('.container__filho__1');
let containerFilho__2 = document.querySelector('.container__filho__2');

containerFilho__0.addEventListener('click', baixa__0);
containerFilho__0.addEventListener('dblclick', sobe__0);

containerFilho__1.addEventListener('click', baixa__1);
containerFilho__1.addEventListener('dblclick', sobe__1);

containerFilho__2.addEventListener('click', baixa__2);
containerFilho__2.addEventListener('dblclick', sobe__2);


function baixa__0() {
    const skills__0 = document.querySelector('.skills__0');
    const subir__skills__1 = document.querySelector('.skills__1');
    skills__0.style.height = '300px';
    subir__skills__1.style.height = '20px'
    containerFilho__0.style.height = '300px';
    containerFilho__1.style.height = '20px';
    containerFilho__2.style.height = '20px'
}


function sobe__0() {
    document.querySelector('.container__filho__0').style.height = '20px';
    document.querySelector('.skills__0').style.height = '20px'
   

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function baixa__1() {
    const skills__1 = document.querySelector('.skills__1')
    containerFilho__1.style.height = '300px'
    skills__1.style.height = '300px'
    containerFilho__0.style.height = '20px'
    containerFilho__2.style.height = '20px'
}


function sobe__1() {
    const sobe__1 = document.querySelector('.container__filho__1')
    sobe__1.style.height = '20px'
    containerFilho__1.style.height = '20px';
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


function baixa__2(){
    const skills__2 = document.querySelector('.skills__2')
    skills__2.style.height = '300px'
    containerFilho__2.style.height = '300px'
    containerFilho__1.style.height = '20px'
    containerFilho__0.style.height = '20px'
}


function sobe__2(){
     containerFilho__2.style.height = '20px'
}


