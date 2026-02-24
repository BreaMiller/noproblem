/**
 * Interactive Grid Background
 * Vanilla JavaScript implementation of interactive grid with mouse-tracking flashlight effect
 * Works with both dark and light themes
 */

class InteractiveGrid {
  constructor(containerSelector = '.hero') {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.warn(`Container "${containerSelector}" not found for interactive grid`);
      return;
    }

    this.gridSize = 40;
    this.mouseX = 0;
    this.mouseY = 0;
    this.gridOffsetX = 0;
    this.gridOffsetY = 0;
    this.speedX = 0.5;
    this.speedY = 0.5;
    this.animationId = null;
    this.isDarkMode = document.body.classList.contains('dark-mode');

    this.init();
  }

  init() {
    // Create grid container
    this.createGridLayers();
    
    // Setup event listeners
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    
    // Theme change observer
    this.observeThemeChanges();
    
    // Start animation loop
    this.animate();
  }

  createGridLayers() {
    // Remove any existing grid
    const existingGrid = this.container.querySelector('.interactive-grid-container');
    if (existingGrid) {
      existingGrid.remove();
    }

    // Create main grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'interactive-grid-container';
    gridContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    `;

    // Layer 1: Subtle background grid
    const bgLayer = document.createElement('div');
    bgLayer.className = 'grid-layer bg-grid';
    bgLayer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.05;
    `;

    // Layer 2: Highlighted grid (revealed by flashlight)
    const highlightLayer = document.createElement('div');
    highlightLayer.className = 'grid-layer highlight-grid';
    highlightLayer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      mask-image: radial-gradient(300px circle at 50% 50%, black, transparent);
      -webkit-mask-image: radial-gradient(300px circle at 50% 50%, black, transparent);
      transition: mask-image 0.05s linear, -webkit-mask-image 0.05s linear;
    `;

    gridContainer.appendChild(bgLayer);
    gridContainer.appendChild(highlightLayer);

    // Insert at the beginning of the container
    this.container.insertBefore(gridContainer, this.container.firstChild);

    this.gridContainer = gridContainer;
    this.bgLayer = bgLayer;
    this.highlightLayer = highlightLayer;

    // Draw grids
    this.drawGrid(this.bgLayer);
    this.drawGrid(this.highlightLayer);
  }

  drawGrid(layer) {
    layer.innerHTML = '';
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    pattern.setAttribute('id', `grid-pattern-${layer.className}`);
    pattern.setAttribute('width', this.gridSize);
    pattern.setAttribute('height', this.gridSize);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('x', this.gridOffsetX);
    pattern.setAttribute('y', this.gridOffsetY);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${this.gridSize} 0 L 0 0 0 ${this.gridSize}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-width', '1');
    
    // Use CSS variable for grid color (respects light/dark theme)
    const isDark = this.isDarkMode;
    path.setAttribute('stroke', isDark ? '#444444' : '#e0e0e0');

    pattern.appendChild(path);
    defs.appendChild(pattern);
    svg.appendChild(defs);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', `url(#grid-pattern-${layer.className})`);

    svg.appendChild(rect);
    layer.appendChild(svg);

    // Store SVG for updates
    if (layer === this.bgLayer) {
      this.bgSvg = svg;
      this.bgPattern = pattern;
    } else {
      this.highlightSvg = svg;
      this.highlightPattern = pattern;
    }
  }

  handleMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;

    // Update flashlight position
    const xPercent = (this.mouseX / rect.width) * 100;
    const yPercent = (this.mouseY / rect.height) * 100;

    this.highlightLayer.style.maskImage = 
      `radial-gradient(300px circle at ${xPercent}% ${yPercent}%, black, transparent)`;
    this.highlightLayer.style.webkitMaskImage = 
      `radial-gradient(300px circle at ${xPercent}% ${yPercent}%, black, transparent)`;
  }

  animate() {
    // Update grid offset for infinite scroll
    this.gridOffsetX = (this.gridOffsetX + this.speedX) % this.gridSize;
    this.gridOffsetY = (this.gridOffsetY + this.speedY) % this.gridSize;

    // Update pattern positions
    if (this.bgPattern) {
      this.bgPattern.setAttribute('x', this.gridOffsetX);
      this.bgPattern.setAttribute('y', this.gridOffsetY);
    }
    if (this.highlightPattern) {
      this.highlightPattern.setAttribute('x', this.gridOffsetX);
      this.highlightPattern.setAttribute('y', this.gridOffsetY);
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  observeThemeChanges() {
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const newIsDark = document.body.classList.contains('dark-mode');
      if (newIsDark !== this.isDarkMode) {
        this.isDarkMode = newIsDark;
        this.createGridLayers();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  setGridSize(size) {
    this.gridSize = size;
    this.drawGrid(this.bgLayer);
    this.drawGrid(this.highlightLayer);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.gridContainer) {
      this.gridContainer.remove();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize interactive grid on hero section
  window.interactiveGrid = new InteractiveGrid('.hero');
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  if (window.interactiveGrid) {
    window.interactiveGrid.destroy();
  }
});
