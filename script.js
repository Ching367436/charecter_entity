const text = document.querySelectorAll('textarea');

resize();
text[0].addEventListener('input', toCC);
text[1].addEventListener('input', toT);
function resize() {
    text[0].style.height = window.innerHeight * 0.39 + 'px';
    text[1].style.height = window.innerHeight * 0.39 + 'px';
    text[0].style.width= window.innerWidth * 0.9 + 'px';
    text[1].style.width= window.innerWidth * 0.9 + 'px';
    
}

function toCC() {
    const input = text[0].value;
    text[1].value = "";
    for (let i = 0; i < input.length; i++) {
        text[1].value += '&#' + input.charAt(i).charCodeAt() + ';';
    }
}

function toT() {
    text[0].innerHTML = text[1].value;
}
