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