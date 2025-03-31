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

        // Плавный скролл
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
         // Темная тема
         function toggleTheme() {
            document.body.dataset.theme = 
                document.body.dataset.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', document.body.dataset.theme);
        }

        // Анимация диаграмм
        const skillBars = document.querySelectorAll('.skill-progress');
        const barObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.level + '%';
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => barObserver.observe(bar));

        // Параллакс эффект
        // document.addEventListener('mousemove', e => {
        //     const cards = document.querySelectorAll('.project-card');
        //     cards.forEach(card => {
        //         const speed = 5;
        //         const x = (window.innerWidth - e.pageX * speed)/100;
        //         const y = (window.innerHeight - e.pageY * speed)/100;
        //         card.style.transform = `translate(${x}px, ${y}px)`;
        //     });
        // });