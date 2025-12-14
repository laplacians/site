document.addEventListener('DOMContentLoaded', () => {

    const lottieContainers = [
        { id: 'lottie-logo', path: 'assets/lottie/logo.json' },
        { id: 'lottie-logo-desktop', path: 'assets/lottie/logo.json' },
        { id: 'lottie-logo-mobile', path: 'assets/lottie/logo.json' }
    ];

    lottieContainers.forEach(item => {
        const container = document.getElementById(item.id);
        if (container) {
            try {
                lottie.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: item.path
                });
            } catch (e) {
                console.error(`Could not load Lottie animation for ${item.id}. Is the file at ${item.path} missing?`, e);
            }
        }
    });

    const heroContainer = document.getElementById('lottie-hero');
    const currentPage = document.body.dataset.page;

    if (heroContainer && currentPage) {
        const loopingHeroPath = `assets/lottie/hero-${currentPage}.json`;
        try {
            lottie.loadAnimation({
                container: heroContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: loopingHeroPath
            });
        } catch (e) {
            console.error(`Could not load Lottie animation for hero. Is the file at ${loopingHeroPath} missing?`, e);
        }
    }

    // Handle floating navigation bar on scroll for desktop
    const overlayNav = document.querySelector('.overlay-nav');
    if (overlayNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                overlayNav.classList.add('floating');
            } else {
                overlayNav.classList.remove('floating');
            }
        });
    }
});
