const TypeWriter = function(txtElement, words, wait=2000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt ='';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type= function(){
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];
    
    if(this.isDeleting){
        this.txt= fullTxt.substring(0, this.txt.length - 1);
    }

    else{
        this.txt= fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;
    if(this.isDeleting){
        typeSpeed /= 3;
    }

    if(!this.isDeleting && fullTxt === this.txt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }

    else if(this.isDeleting && this.txt=== ''){
        this.isDeleting = false;
        this.wordIndex++;

        typeSpeed = 400;
    }
    
    setTimeout(() => this.type(), typeSpeed)
}


document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);
}