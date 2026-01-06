    //DOM
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const themeToggle = document.getElementById('themeToggle');
    const languageToggle = document.getElementById('languageToggle');
    const languageTooltip = document.getElementById('languageTooltip');
    const navButtons = document.querySelectorAll('.nav-button[data-section]');
    const body = document.body;
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    let currentLanguage = 'pt-br';

    // Traduções
    const translations = {
        'pt-br': {
            greeting: 'Olá, sou',
            title: 'Desenvolvedor Web Full-Stack',
            quote: '"Às vezes, uma vírgula muda tudo."',
            aboutTitle: 'Sobre Mim',
            aboutSubtitle: 'Conheça um pouco mais sobre minha jornada',
            aboutHeading: 'Com esforço e criatividade, podemos alcançar tudo',
            aboutText1: 'Sou um desenvolvedor Full-Stack dedicado a transformar suas ideias em realidade por meio de código. Com foco em criar interfaces intuitivas, responsivas e de qualidade, busco sempre entregar a melhor experiência para o usuário.',
            aboutText2: 'Especialização em linguagens de código modernas com React, JavaScript e CSS, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.',
            aboutText3: 'Acredito que cada código feito é uma oportunidade para melhorar e facilitar a vida de alguém.',
            projectsCompleted: 'Projetos Concluídos',
            projectsTitle: 'Meus Projetos',
            projectsSubtitle: 'Alguns dos meus trabalhos',
            skillsTitle: 'Skills & Tecnologias',
            skillsSubtitle: 'Ferramentas e tecnologias que domino',
            home: 'Início',
            about: 'Sobre Mim',
            projects: 'Projetos',
            skills: 'Skills',
            language: 'Português',
            theme: 'Trocar tema',
            footerRights: '© 2026 Michel - Desenvolvedor Frontend. Todos os direitos reservados.',
        },
        'en': {
            greeting: 'Hello, I\'m',
            title: 'Full-Stack Web Developer',
            quote: '"Sometimes a comma changes everything."',
            aboutTitle: 'About Me',
            aboutSubtitle: 'Learn more about my journey',
            aboutHeading: 'With effort and creativity, we can achieve anything',
            aboutText1: 'I am a Full-Stack developer dedicated to transforming your ideas into reality through code. Focused on creating intuitive, responsive, and high-quality interfaces, I always strive to deliver the best user experience.',
            aboutText2: 'Specializing in modern coding languages ​​such as React, JavaScript, and CSS, I am always looking for new challenges and opportunities to grow professionally.',
            aboutText3: 'I believe that every piece of code written is an opportunity to improve and make someone\'s life easier.',
            projectsCompleted: 'Projects Completed',
            projectsTitle: 'My Projects',
            projectsSubtitle: 'Some of my works',
            skillsTitle: 'Skills & Technologies',
            skillsSubtitle: 'Tools and technologies I master',
            home: 'Home',
            about: 'About Me',
            projects: 'Projects',
            skills: 'Skills',
            language: 'English',
            theme: 'Toggle theme',
            footerRights: '© 2026 Michel - Frontend Developer. All rights reserved.',
        }
    };

    // Atualiza idioma
    function updateLanguage() {
        const texts = translations[currentLanguage];
        
        // Hero - com verificação
        const heroName = document.querySelector('.hero-name');
        const heroTitle = document.querySelector('.hero-title');
        const heroQuote = document.querySelector('.hero-quote');
        
        if (heroName) heroName.innerHTML = `${texts.greeting} <span class="highlight">Michel</span>`;
        if (heroTitle) heroTitle.textContent = texts.title;
        if (heroQuote) heroQuote.textContent = texts.quote;
        
        // About
        const sectionTitles = document.querySelectorAll('.section-title h2');
        const sectionSubtitles = document.querySelectorAll('.section-title p');
        const aboutTextH3 = document.querySelector('.about-text h3');
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        
        if (sectionTitles[0]) sectionTitles[0].textContent = texts.aboutTitle;
        if (sectionSubtitles[0]) sectionSubtitles[0].textContent = texts.aboutSubtitle;
        if (aboutTextH3) aboutTextH3.textContent = texts.aboutHeading;
        if (aboutParagraphs[0]) aboutParagraphs[0].textContent = texts.aboutText1;
        if (aboutParagraphs[1]) aboutParagraphs[1].textContent = texts.aboutText2;
        if (aboutParagraphs[2]) aboutParagraphs[2].textContent = texts.aboutText3;
        
        // Projects
        if (sectionTitles[1]) sectionTitles[1].textContent = texts.projectsTitle;
        if (sectionSubtitles[1]) sectionSubtitles[1].textContent = texts.projectsSubtitle;
        
        // Skills
        if (sectionTitles[2]) sectionTitles[2].textContent = texts.skillsTitle;
        if (sectionSubtitles[2]) sectionSubtitles[2].textContent = texts.skillsSubtitle;
        
        // Footer
        const footerText = document.querySelector('.footer-text p');
        if (footerText) footerText.textContent = texts.footerRights;
        
        // Tooltips da navegação
        const homeTooltip = document.querySelector('.nav-button[data-section="home"] .tooltip');
        const aboutTooltip = document.querySelector('.nav-button[data-section="about"] .tooltip');
        const projectsTooltip = document.querySelector('.nav-button[data-section="projects"] .tooltip');
        const skillsTooltip = document.querySelector('.nav-button[data-section="skills"] .tooltip');
        const themeTooltip = document.querySelector('#themeToggle .tooltip');
        
        if (homeTooltip) homeTooltip.textContent = texts.home;
        if (aboutTooltip) aboutTooltip.textContent = texts.about;
        if (projectsTooltip) projectsTooltip.textContent = texts.projects;
        if (skillsTooltip) skillsTooltip.textContent = texts.skills;
        if (languageTooltip) languageTooltip.textContent = texts.language;
        if (themeTooltip) themeTooltip.textContent = texts.theme;
    }

    // Carrega tema salvo ANTES de qualquer interação
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        if (iconSun) iconSun.style.display = 'none';
        if (iconMoon) iconMoon.style.display = 'block';
    } else {
        body.classList.remove('dark');
        if (iconSun) iconSun.style.display = 'block';
        if (iconMoon) iconMoon.style.display = 'none';
    }

    // Carrega idioma salvo ANTES de qualquer interação
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    updateLanguage();

    // Toggle de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            
            if (body.classList.contains('dark')) {
                if (iconSun) iconSun.style.display = 'none';
                if (iconMoon) iconMoon.style.display = 'block';
            } else {
                if (iconSun) iconSun.style.display = 'block';
                if (iconMoon) iconMoon.style.display = 'none';
            }
            
            localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Toggle de idioma
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
            updateLanguage();
            localStorage.setItem('language', currentLanguage);
        });
    }

    // Navegação com scroll suave
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const section = button.dataset.section;
            const targetSection = document.getElementById(section);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Atualiza botão ativo baseado no scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.section === current) {
                button.classList.add('active');
            }
        });
    });

    // CARROSSEL DE PROJETOS
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    const cards = document.querySelectorAll('.project-card');

    if (track && cards.length > 0) {
        let currentIndex = 0;
        let autoPlayInterval;
        let cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        let totalSlides = Math.ceil(cards.length / cardsPerView);

        function createIndicators() {
            if (!indicatorsContainer) return;
            indicatorsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (i === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(i));
                indicatorsContainer.appendChild(indicator);
            }
        }

        function updateIndicators() {
            if (!indicatorsContainer) return;
            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            const cardWidth = cards[0].offsetWidth;
            const gap = 30;
            const offset = -(currentIndex * cardsPerView * (cardWidth + gap));
            track.style.transform = `translateX(${offset}px)`;
            updateIndicators();
            resetAutoPlay();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            goToSlide(currentIndex);
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 10000);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const link = card.dataset.link;
                if (link && link !== '#') {
                    window.open(link, '_blank');
                }
            });
        });

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        track.addEventListener('mouseleave', startAutoPlay);

        window.addEventListener('resize', () => {
            const newCardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                totalSlides = Math.ceil(cards.length / cardsPerView);
                currentIndex = 0;
                createIndicators();
                goToSlide(0);
            }
        });

        createIndicators();
        startAutoPlay();
    }

    // SISTEMA DE PARTÍCULAS COM CONEXÕES
    class ParticleNetwork {
        constructor() {
            this.canvas = document.getElementById('particlesCanvas');
            if (!this.canvas) return;
            
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.mouse = { x: null, y: null, radius: 150 };
            this.connectDistance = 120;
            this.maxConnections = 5;
            
            this.resize();
            this.init();
            this.animate();
            
            window.addEventListener('resize', () => this.resize());
            window.addEventListener('mousemove', (e) => this.handleMouse(e));
        }
        
        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        
        init() {
            const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
            
            for (let i = 0; i < particleCount; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    connections: 0
                });
            }
        }
        
        handleMouse(e) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        }
        
        isNearElement(x, y) {
            return false;
        }
        
        drawParticle(particle) {
            if (this.isNearElement(particle.x, particle.y)) return;
            
            const isDark = document.body.classList.contains('dark');
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)';
            this.ctx.fill();
        }
        
        drawLine(p1, p2, distance) {
            if (this.isNearElement(p1.x, p1.y) || this.isNearElement(p2.x, p2.y)) return;
            
            const dx = this.mouse.x - p1.x;
            const dy = this.mouse.y - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < this.mouse.radius) return;
            
            const isDark = document.body.classList.contains('dark');
            const opacity = (1 - distance / this.connectDistance) * 0.9;
            
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = isDark 
                ? `rgba(96, 165, 250, ${opacity})` 
                : `rgba(59, 130, 246, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        update() {
            this.particles.forEach(particle => {
                particle.connections = 0;
                
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            });
        }
        
        connect() {
            for (let i = 0; i < this.particles.length; i++) {
                if (this.particles[i].connections >= this.maxConnections) continue;
                
                for (let j = i + 1; j < this.particles.length; j++) {
                    if (this.particles[j].connections >= this.maxConnections) continue;
                    
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < this.connectDistance) {
                        this.drawLine(this.particles[i], this.particles[j], distance);
                        this.particles[i].connections++;
                        this.particles[j].connections++;
                        
                        if (this.particles[i].connections >= this.maxConnections) break;
                    }
                }
            }
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.update();
            this.particles.forEach(p => this.drawParticle(p));
            this.connect();
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // Inicializar partículas
    new ParticleNetwork();
});