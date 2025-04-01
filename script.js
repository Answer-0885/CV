// Анимация иконки "Обо мне"
const astronautIcon = document.querySelector('.about-icon i');
if(astronautIcon) {
    let angle = 0;
    
    setInterval(() => {
        angle += 0.5;
        astronautIcon.style.transform = `rotate(${angle}deg)`;
    }, 50);
}
        // Анимация при скролле
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach((section) => {
            observer.observe(section);
        });

        // // Плавный скролл
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });
         // Темная тема
         function toggleTheme() {
            document.body.dataset.theme = 
                document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', document.body.dataset.theme);
        }
// Карусель аватарок
const carouselImages = document.querySelectorAll('.profile-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
    carouselImages.forEach(img => img.classList.remove('active'));
    carouselImages[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
});

// Автопрокрутка каждые 5 секунд (опционально)
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}, 5000);
// Динамический год в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();