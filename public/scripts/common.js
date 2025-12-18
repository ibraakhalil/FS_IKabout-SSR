
//////////////////////////////Header Scroll Effect////////////////////////////////

(function () {
    const header = document.querySelector('.site-header');

    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
})();


//////////////////////////////Mobile Menu Toggle////////////////////////////////

(function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileCta = document.querySelector('.mobile-cta');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        if (mobileCta) {
            mobileCta.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }
})();


///////////////////////////////Flash Message Timeout///////////////////////////////////

(function () {
    const flashMessage = document.querySelector(".flash-message");

    if (flashMessage) {
        const closeBtn = flashMessage.querySelector('.times');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                flashMessage.style.display = 'none';
            });
        }

        setTimeout(() => {
            flashMessage.style.display = "none";
        }, 4900);
    }
})();
