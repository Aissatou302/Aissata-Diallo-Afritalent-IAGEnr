const buttons = document .querySelectorAll('.filter-btn');
 const cards = document .querySelectorAll('.freelancer');

 buttons.forEach(button =>{
    button.addEventListener('click' , () => {
        const filter = button.dataset.filter;

        cards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)){
                card.style.display = 'block';
            } else{
                card.style.display = 'none';
            }
        });
    });
 });

 function animatevalue(id ,start,end,end,duration){
    let obj = ducument.getElementById(id);
    let range = end -start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTine = Math.abs(Math.floor(duration /range));

    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;

        if (current == end){
            clearInterval(timer);
        }
    },stepTime)
 }
 const counters = document.querySelectorAll('counter');

 counters.forEach(counter =>{
    const target = +counter.dataset.target;

    const  updatecounter = () => {
        const current = +counter.innerText;

        const increment = target /100;

        if (current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updatecounter, 20);
        } else{
            counter.innerText = target;
        }
    };
    updatecounter();
 });
 animatevalue("freelances",0, 2500, 2000)
 animatevalue("entreprises",0, 800, 2000)
 animatevalue("mission",0, 1200, 3000)


 const form = document.querySelector("form");
 form.addEventListener("submit" , function (e){
    e.preventDefault();

    const nom = document.getElementById("nom").Value.trim();
    const prenom = document.getElementById("prenom").Value.trim();
    const email= document.getElementById("email").Value.trim();
    const message = document.getElementById("message").Value.trim();

    if (nom === "" || prenom === "" || email === "" || message === "" ) {
        alert("Tous les champs sont obligatoire !");
        return;
    }
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)){
        alert("Veuillez saisir un email valide !")
        return;
    }
    if(message.length < 20) {
        alert("Le message doit contenir au moins 20 caractéres.");
        return;
    }
    alert("Message envoyé avec succés !");
    form.reset();

 });