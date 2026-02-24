/**
 * Infinite Grid Component - Vanilla JavaScript
 * No dependencies required - Pure JS, CSS, and HTML
 */

class InfiniteGrid {
  constructor() {
    this.isDarkMode = this.checkDarkMode();
    this.interactCount = 0;
    this.gridSize = 40;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.init();
  }

  init() {
    this.setupElements();
    this.setupEventListeners();
    this.updateGridDensity();
    this.applyTheme();
  }

  setupElements() {
    this.container = document.getElementById('gridContainer');
    this.gridHighlight = document.getElementById('gridHighlight');
    this.themeToggle = document.getElementById('themeToggle');
    this.interactBtn = document.getElementById('interactBtn');
    this.learnBtn = document.getElementById('learnBtn');
    this.gridDensity = document.getElementById('gridDensity');
    this.densityValue = document.getElementById('densityValue');
    this.interactCount_el = document.getElementById('interactCount');
    this.gridSvg1 = document.getElementById('gridSvg1');
    this.gridSvg2 = document.getElementById('gridSvg2');
  }

  setupEventListeners() {
    // Mouse movement for grid highlight
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.container.addEventListener('mouseleave', () => this.handleMouseLeave());

    // Theme toggle
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Grid density control
    this.gridDensity.addEventListener('input', (e) => {
      this.gridSize = parseInt(e.target.value);
      this.updateGridDensity();
    });

    // Button interactions
    this.interactBtn.addEventListener('click', () => this.handleInteractClick());
    this.learnBtn.addEventListener('click', () => this.handleLearnClick());

    // Prevent text selection during interactions
    this.container.addEventListener('selectstart', (e) => e.preventDefault());
  }

  handleMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;

    // Update CSS variable for mask
    this.container.style.setProperty('--mouse-x', `${e.clientX}px`);
    this.container.style.setProperty('--mouse-y', `${e.clientY}px`);

    // Update grid highlight mask
    const maskRadius = '300px';
    const maskImage = `radial-gradient(${maskRadius} circle at ${e.clientX}px ${e.clientY}px, black, transparent)`;
    this.gridHighlight.style.maskImage = maskImage;
    this.gridHighlight.style.webkitMaskImage = maskImage;
  }

  handleMouseLeave() {
    this.gridHighlight.style.maskImage = 'radial-gradient(300px circle at 50% 50%, black, transparent)';
    this.gridHighlight.style.webkitMaskImage = 'radial-gradient(300px circle at 50% 50%, black, transparent)';
  }

  handleInteractClick() {
    this.interactCount++;
    this.interactCount_el.textContent = `(${this.interactCount})`;
    
    // Ripple effect feedback
    this.createRipple(this.interactBtn);
    
    // Button scale animation
    this.interactBtn.style.animation = 'none';
    setTimeout(() => {
      this.interactBtn.style.animation = 'buttonPulse 0.4s ease-out';
    }, 10);
  }

  handleLearnClick() {
    // You can update this to navigate or show more info
    console.log('Learn More clicked');
    alert('This is the infinite grid component made with vanilla JavaScript!\n\nNo frameworks, no dependencies - just pure CSS animations and JS.');
    this.createRipple(this.learnBtn);
  }

  updateGridDensity() {
    this.densityValue.textContent = `${this.gridSize}px`;

    // Update SVG pattern widths
    const patterns = document.querySelectorAll('pattern');
    patterns.forEach(pattern => {
      pattern.setAttribute('width', this.gridSize);
      pattern.setAttribute('height', this.gridSize);
    });

    // Update path in patterns
    const paths = document.querySelectorAll('pattern path');
    paths.forEach(path => {
      path.setAttribute('d', `M ${this.gridSize} 0 L 0 0 0 ${this.gridSize}`);
    });

    // Update animation duration based on grid size
    const animationDuration = (this.gridSize / 40) * 20;
    this.gridSvg1.style.animationDuration = `${animationDuration}s`;
    this.gridSvg2.style.animationDuration = `${animationDuration}s`;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme-preference', this.isDarkMode ? 'dark' : 'light');
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  checkDarkMode() {
    // Check localStorage first
    const stored = localStorage.getItem('theme-preference');
    if (stored) return stored === 'dark';

    // Then check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  createRipple(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = (rect.width - size) / 2;
    const y = (rect.height - size) / 2;

    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple-animation 0.6s ease-out;
    `;

    // Add ripple animation if not already in stylesheet
    if (!document.querySelector('style[data-ripple]')) {
      const style = document.createElement('style');
      style.setAttribute('data-ripple', 'true');
      style.textContent = `
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
}

// Add button pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes buttonPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new InfiniteGrid();
  });
} else {
  new InfiniteGrid();
}

// Handle system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const grid = window.gridInstance || new InfiniteGrid();
  grid.isDarkMode = e.matches;
  grid.applyTheme();
});
