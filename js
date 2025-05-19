document.addEventListener('DOMContentLoaded', function() {
    // Controle dos depoimentos
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    // Função para mostrar depoimento específico
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Adiciona eventos aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Rotação automática dos depoimentos
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Efeitos de hover nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Botões de ação
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const cardType = this.classList.contains('rural-btn') ? 'rural' : 
                           this.classList.contains('urban-btn') ? 'urban' : 'harmony';
            
            alert(`Você clicou para saber mais sobre a vida ${cardType === 'rural' ? 'no campo' : 
                  cardType === 'urban' ? 'na cidade' : 'na harmonia entre campo e cidade'}`);
        });
    });
    
    // Filtro da galeria (exemplo de funcionalidade adicional)
    const galleryItems = document.querySelectorAll('.gallery-item');
    // Esta função poderia ser conectada a botões de filtro futuramente
    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Inicializa mostrando todos os itens
    filterGallery('all');
});
