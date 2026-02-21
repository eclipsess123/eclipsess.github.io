// 1. Sayfa aşağı kaydırıldığında Menü Çubuğunu (Header) belirginleştir
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 5, 5, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(5, 5, 5, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// 2. Proje kartlarına tıklandığında konsola bir selam gönder (Test için)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log("Eclipsess: Proje detayları yakında eklenecek!");
    });
});

// 3. Sayfa yüklendiğinde yumuşak bir giriş efekti yap
document.addEventListener('DOMContentLoaded', () => {
    console.log("Eclipsess sitesi hazır!");
});
