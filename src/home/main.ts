import './style.css'

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    if (!particlesContainer) return;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Efecto de hover para las tarjetas
document.querySelectorAll<HTMLElement>('.game-card').forEach(card => {
    card.addEventListener('mouseenter', function(this: HTMLElement) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(this: HTMLElement) {
        if (!this.classList.contains('coming-soon')) {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Animación de entrada para las tarjetas
function animateCards() {
    const cards = document.querySelectorAll<HTMLElement>('.game-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateCards();
});

// Efecto de parallax suave
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector<HTMLElement>('.particles');
    const speed = scrolled * 0.5;
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});