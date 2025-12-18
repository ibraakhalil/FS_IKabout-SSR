
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


///////////////////////////////Active Navigation on Scroll///////////////////////////////////

(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (sections.length === 0) return;

    // Configuration for intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
    };

    // Track which section is currently active
    let currentActiveId = null;

    const setActiveLink = (id) => {
        if (currentActiveId === id) return;
        currentActiveId = id;

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        mobileNavLinks.forEach(link => link.classList.remove('active'));

        // Add active class to matching links
        if (id) {
            const selector = `[href="/#${id}"], [href="/${id}"]`;
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `/#${id}` || link.getAttribute('href') === `/${id}`) {
                    link.classList.add('active');
                }
            });
            mobileNavLinks.forEach(link => {
                if (link.getAttribute('href') === `/#${id}` || link.getAttribute('href') === `/${id}`) {
                    link.classList.add('active');
                }
            });
        } else {
            // If no section is active, activate Home link
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '/') {
                    link.classList.add('active');
                }
            });
            mobileNavLinks.forEach(link => {
                if (link.getAttribute('href') === '/') {
                    link.classList.add('active');
                }
            });
        }
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Handle initial state and scroll to top
    const handleScrollPosition = () => {
        if (window.scrollY < 100) {
            setActiveLink(null); // Activate Home
        }
    };

    window.addEventListener('scroll', handleScrollPosition);
    handleScrollPosition(); // Check initial position
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
