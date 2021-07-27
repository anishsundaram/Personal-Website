const Typewriter = function(txtElement, words, wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt ='';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new Typewriter(txtElement,words,wait);
}