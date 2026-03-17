// FILE: js/script.js

// Smooth scroll untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect dengan warna
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(139, 92, 246, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.1)';
    }
});

// Animasi muncul saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply ke semua card
document.querySelectorAll('.benefit-card, .step-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter animation untuk harga
const priceElement = document.querySelector('.pricing-price .price');
if (priceElement) {
    let count = 0;
    const target = 2500000;
    const increment = target / 50;
    
    const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(counter);
        }
        priceElement.textContent = 'Rp ' + Math.round(count).toLocaleString('id-ID');
    }, 30);
}

// Hover effect tambahan untuk tombol
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('btn-primary') 
            ? 'translateY(-3px) scale(1.05)' 
            : 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console greeting yang colorful
console.log('%c✨ Super Hello Website ✨', 'color: #8B5CF6; font-size: 16px; font-weight: bold');
console.log('%cTugas Praktikum Pemrograman Web', 'color: #EC4899; font-size: 14px');
console.log('%cNIM: 2403015046', 'color: #F59E0B; font-size: 14px');

// Easter egg: klik logo 3x
let logoClick = 0;
document.querySelector('.logo').addEventListener('click', () => {
    logoClick++;
    if (logoClick === 3) {
        alert('🎉 SUPER HELLO! 🎉\nTerima kasih sudah mengunjungi website ini!');
        logoClick = 0;
    }
});