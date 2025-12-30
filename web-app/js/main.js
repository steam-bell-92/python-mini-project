// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    themeToggle.innerHTML = newTheme === 'light' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'light' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';

// Category Filtering
const tabs = document.querySelectorAll('.tab');
const projectCards = document.querySelectorAll('.project-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        
        // Filter projects
        projectCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.6s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal Management
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Close modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    // Clean up any intervals/animations
    const iframe = modalBody.querySelector('iframe');
    if (iframe) {
        iframe.remove();
    }
});

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Open Project Modal
projectCards.forEach(card => {
    const playButton = card.querySelector('.btn-play');
    
    playButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectName = card.getAttribute('data-project');
        openProject(projectName);
    });
    
    card.addEventListener('click', () => {
        const projectName = card.getAttribute('data-project');
        openProject(projectName);
    });
});

function openProject(projectName) {
    modal.classList.add('active');
    loadProjectContent(projectName);
}

function loadProjectContent(projectName) {
    // This will be populated by projects.js
    const projectContent = getProjectHTML(projectName);
    modalBody.innerHTML = projectContent;
    
    // Initialize project-specific JavaScript
    initializeProject(projectName);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add entrance animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease';
        }
    });
}, observerOptions);

projectCards.forEach(card => observer.observe(card));
