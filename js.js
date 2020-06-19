let btn = document.querySelector('button');

let blockForAnswer = document.querySelector('.answer');

btn.addEventListener( 'click', function() {
    let number = prompt('Введите число');
    let frameBody = frames[0].document.querySelector('body');
    frameBody.innerText = number;
    blockForAnswer.innerText = +frameBody.innerText + 1;
} );

window.onbeforeunload = function() {
	return true;
};