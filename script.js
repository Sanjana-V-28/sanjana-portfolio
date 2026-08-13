/* ===========================
   THREE.JS 3D BACKGROUND
   =========================== */

let scene, camera, renderer, objects = [];

function init3D() {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafbff);
    scene.fog = new THREE.Fog(0xfafbff, 1000, 3000);

    // Camera setup
    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x667eea, 1);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Create 3D objects
    createDodecahedron();
    createFloatingCubes();
    createParticles();

    // Handle window resize
    window.addEventListener('resize', () => {
        const newWidth = canvas.parentElement.clientWidth;
        const newHeight = canvas.parentElement.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });

    // Animation loop
    animate();
}

function createDodecahedron() {
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0x667eea,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x667eea,
        emissiveIntensity: 0.3
    });

    const dodecahedron = new THREE.Mesh(geometry, material);
    dodecahedron.position.set(0, 0, 0);
    dodecahedron.rotation.x = Math.random() * Math.PI;
    dodecahedron.rotation.y = Math.random() * Math.PI;
    dodecahedron.castShadow = true;
    scene.add(dodecahedron);

    objects.push({
        mesh: dodecahedron,
        rotationSpeed: {
            x: Math.random() * 0.005,
            y: Math.random() * 0.005,
            z: Math.random() * 0.005
        }
    });
}

function createFloatingCubes() {
    for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({
            color: Math.random() * 0xffffff,
            metalness: 0.6,
            roughness: 0.3,
            emissive: 0x764ba2,
            emissiveIntensity: 0.2
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 5
        );
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        cube.castShadow = true;
        scene.add(cube);

        objects.push({
            mesh: cube,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.001,
            floatAmplitude: Math.random() * 0.05
        });
    }
}

function createParticles() {
    const particleCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        size: 0.1,
        color: 0x667eea,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.5
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    objects.push({
        mesh: particles,
        isParticles: true,
        floatSpeed: 0.0005
    });
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate objects
    objects.forEach(obj => {
        if (obj.rotationSpeed) {
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
        }

        if (obj.floatSpeed && !obj.isParticles) {
            obj.mesh.position.y += Math.sin(Date.now() * obj.floatSpeed) * obj.floatAmplitude;
        }
    });

    // Add mouse interaction
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

        objects.forEach(obj => {
            if (obj.mesh.position) {
                obj.mesh.position.x += (mouseX - obj.mesh.position.x) * 0.0001;
                obj.mesh.position.y += (mouseY - obj.mesh.position.y) * 0.0001;
            }
        });
    });

    renderer.render(scene, camera);
}

/* ===========================
   HAMBURGER MENU
   =========================== */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

/* ===========================
   ACTIVE NAV LINK ON SCROLL
   =========================== */

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ===========================
   SCROLL ANIMATIONS
   =========================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animations
document.querySelectorAll('[class*="animate"]').forEach(el => {
    observer.observe(el);
});

/* ===========================
   SKILL BARS ANIMATION
   =========================== */

const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !skillsAnimated) {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        skillsAnimated = true;
    }
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

/* ===========================
   FORM HANDLING
   =========================== */

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);

        // Show success message
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        // Here you would send the form data to your backend
        console.log('Form submitted:', Object.fromEntries(formData));
    });
}

/* ===========================
   SMOOTH SCROLL
   =========================== */

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

/* ===========================
   PARALLAX EFFECT
   =========================== */

const heroSection = document.getElementById('hero');

window.addEventListener('scroll', () => {
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

/* ===========================
   COUNTER ANIMATION
   =========================== */

function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseFloat(target.textContent);
                let currentValue = 0;
                const increment = finalValue / 50;

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        target.textContent = currentValue.toFixed(2);
                    }
                }, 30);

                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => counterObserver.observe(stat));
}

animateCounters();

/* ===========================
   LAZY LOADING IMAGES
   =========================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ===========================
   THEME TOGGLE (Optional)
   =========================== */

// You can add dark mode toggle here if needed
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDark.matches) {
    // Detect dark mode preference
    document.documentElement.style.colorScheme = 'dark';
}

/* ===========================
   SCROLL TO TOP BUTTON
   =========================== */

function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.alignItems = 'center';
            scrollBtn.style.justifyContent = 'center';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.transform = 'scale(1.1)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
    });

    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.transform = 'scale(1)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });
}

createScrollToTop();

/* ===========================
   INITIALIZATION
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
    init3D();

    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let index = 0;

        function typeText() {
            if (index < text.length) {
                heroSubtitle.textContent += text[index];
                index++;
                setTimeout(typeText, 100);
            }
        }

        setTimeout(typeText, 500);
    }
});

/* ===========================
   PAGE LOAD ANIMATION
   =========================== */

window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.6s ease-in';
});

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
