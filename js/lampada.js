function acesa() {
    document.querySelector('.lampada').style.background = '#FFEB3B'
    document.querySelector('.lampada').style.boxshadow = '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700'
    document.querySelector('.lampada').style.border = '#FFF8DC'
    document.querySelector('body').style.background = 'none'
    

}
function apagada() {
    document.querySelector('.lampada').style.background = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('body').style.background = 'gray'
    document.querySelector('.lampada').style.border = 'solid 1px'
}







