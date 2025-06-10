        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Set initial state for icons
        gsap.set('.icon', {
            scale: 0,
            rotation: 0,
            opacity: 0
        });
        
        // Animate icons when phone comes into view
        ScrollTrigger.create({
            trigger: '.phone-container',
            start: 'top 80%',
            onEnter: () => {
                // Animate each icon to its designated position with stagger
                gsap.to('.icon-1', {
                    scale: 1,
                    rotation: -12,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'back.out(1.7)',
                    onComplete: () => {
                        // Start floating animation
                        gsap.to('.icon-1', {
                            animation: 'floatIcon 3s ease-in-out infinite',
                            animationDelay: '0s'
                        });
                    }
                });
                
                gsap.to('.icon-2', {
                    scale: 1,
                    rotation: 15,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,
                    ease: 'back.out(1.7)',
                    onComplete: () => {
                        // Start floating animation
                        gsap.to('.icon-2', {
                            animation: 'floatIcon 3s ease-in-out infinite',
                            animationDelay: '1s'
                        });
                    }
                });
                
                gsap.to('.icon-3', {
                    scale: 1,
                    rotation: -8,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.9,
                    ease: 'back.out(1.7)',
                    onComplete: () => {
                        // Start floating animation
                        gsap.to('.icon-3', {
                            animation: 'floatIcon 3s ease-in-out infinite',
                            animationDelay: '2s'
                        });
                    }
                });
            }
        });
        
        // Animate why-choose items
        gsap.set('.why-choose-list li', {
            x: -50,
            opacity: 0
        });
        
        ScrollTrigger.create({
            trigger: '.why-choose-list',
            start: 'top 80%',
            onEnter: () => {
                gsap.to('.why-choose-list li', {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            }
        });
        
        // Floating animation for phone with subtle movement
        gsap.to('.phone-img', {
            y: -8,
            duration: 2.5,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
        
        // Add continuous floating animation to icons after initial animation
        setTimeout(() => {
            gsap.to('.icon-1', {
                y: -6,
                duration: 2,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1,
                delay: 0
            });
            
            gsap.to('.icon-2', {
                y: -6,
                duration: 2.5,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1,
                delay: 0.5
            });
            
            gsap.to('.icon-3', {
                y: -6,
                duration: 2.2,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1,
                delay: 1
            });
        }, 2000);
        
        // Smooth scroll behavior
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

        function toggleCategory(element) {
            // Close all other sections
            document.querySelectorAll('.category-section').forEach(section => {
                if (section !== element.parentElement) {
                    section.classList.add('collapsed');
                    let rows = section.querySelector('.feature-rows');
                    if (rows) {
                        rows.style.maxHeight = '0';
                        rows.style.opacity = '0';
                    }
                }
            });

            // Toggle current section
            const section = element.parentElement;
            const rows = section.querySelector('.feature-rows');
            
            if (section.classList.contains('collapsed')) {
                section.classList.remove('collapsed');
                rows.style.maxHeight = rows.scrollHeight + 'px';
                rows.style.opacity = '1';
            } else {
                section.classList.add('collapsed');
                rows.style.maxHeight = '0';
                rows.style.opacity = '0';
            }
        }

        // Initialize: Only open first section
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.category-section').forEach((section, idx) => {
                const rows = section.querySelector('.feature-rows');
                if (idx === 0) {
                    section.classList.remove('collapsed');
                    rows.style.maxHeight = rows.scrollHeight + 'px';
                    rows.style.opacity = '1';
                } else {
                    section.classList.add('collapsed');
                    rows.style.maxHeight = '0';
                    rows.style.opacity = '0';
                }
            });
        });

        document.querySelectorAll('.faq-item').forEach(function(item) {
      item.querySelector('.faq-question-row').onclick = function(e) {
        if(item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          document.querySelectorAll('.faq-item.active').forEach(e=>e.classList.remove('active'));
          item.classList.add('active');
        }
      }
    });