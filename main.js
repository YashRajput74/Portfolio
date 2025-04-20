function animateText(){
    const textElement=document.querySelector(".animatedText");
    const words=["Developer.","Web Developer.","UI/UX Developer.","Javascript Developer.","HTML/CSS Developer."];
    let wordIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function startTyping(){
        const currentWord=words[wordIndex];
        const currentText=currentWord.substring(0,charIndex);
        textElement.textContent=currentText;

        if(!isDeleting && charIndex<currentWord.length){
            charIndex++;
            setTimeout(startTyping,700);
        }
        else if(isDeleting && charIndex>0){
            charIndex--;
            setTimeout(startTyping,400)
        }
        else{
            isDeleting=!isDeleting;
            if(!isDeleting) wordIndex++;
            if(wordIndex>=words.length) wordIndex=0;
            setTimeout(startTyping,2000)
        }
    }
    startTyping();
}

(function bindEvents(){
    document.addEventListener("DOMContentLoaded",()=>{
        setTimeout(animateText,1000);
    })
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector("nav").classList.toggle("show");
    })
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tabContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(c => c.classList.remove('active'));
            const target = document.getElementById(tab.dataset.tab);
            target.classList.add('active');
        });
    });

})();
