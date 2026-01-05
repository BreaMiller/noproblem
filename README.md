# NP Services LLC - Website

Professional construction and remodeling website for NP Services LLC, designed for deployment on Wix.com through Bizee.com.

## 🏗️ About NP Services LLC

NP Services LLC specializes in premium residential and commercial remodeling, from bathroom renovations to complete home transformations. Serving discerning property owners with excellence and precision.

**Tagline:** *Perfection Pursued, Excellence Delivered*

## 📁 Project Structure

```
/workspaces/noproblem/
├── index.html              # Main website file
├── styles.css              # Complete styling and responsive design
├── script.js               # Interactive functionality
├── WIX_MIGRATION_GUIDE.md  # Detailed Wix recreation instructions
├── user uploads/           # 10 project images for gallery
│   ├── Screenshot 2026-01-04 225517.png
│   ├── Screenshot 2026-01-04 225644.png
│   └── ... (8 more images)
└── README.md               # This file
```

## 🚀 Quick Start

### View the Website Locally

1. **Open in Browser:**
   ```bash
   # Navigate to the project folder
   cd /workspaces/noproblem
   
   # Open index.html in your default browser
   open index.html
   # or on Linux:
   xdg-open index.html
   ```

2. **Using a Local Server (Recommended):**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

### Deploy to Wix.com

Since Wix doesn't accept direct HTML uploads, follow the comprehensive guide:
- **Read:** [WIX_MIGRATION_GUIDE.md](WIX_MIGRATION_GUIDE.md)
- **Use:** This HTML site as a design reference
- **Process:** Recreate in Wix's visual editor following the guide

## 🎨 Website Features

### Sections Included:
1. **Navigation Bar** - Sticky header with logo and menu
2. **Hero Section** - Full-screen introduction with CTAs
3. **Services** - 6 service cards showcasing expertise
4. **Our Process** - 5-step construction methodology
5. **Projects Gallery** - 10 featured project images
6. **Contact Form** - Consultation request form
7. **Footer** - Company info and quick links

### Key Features:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive hover effects
- ✅ Mobile hamburger menu
- ✅ Professional color scheme (black/gold)
- ✅ Modern typography (Montserrat + Playfair Display)
- ✅ Form validation ready
- ✅ SEO-optimized structure
- ✅ Fast loading performance
- ✅ Accessibility considerations

## 🎨 Design System

### Color Palette:
- **Primary Dark:** `#1a1a1a` (Black)
- **Secondary Gold:** `#d4a574` (Accent)
- **Text Gray:** `#666666`
- **Background Light:** `#f8f8f8`

### Typography:
- **Primary:** Montserrat (sans-serif)
- **Display:** Playfair Display (serif)
- **Sizes:** 16px base, 48-64px headings

### Spacing:
- **Sections:** 100px padding (desktop), 60px (mobile)
- **Container:** 1200px max-width

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Montserrat & Playfair Display
- **SVG Icons** - Scalable vector graphics

## 📋 Copy & Content

### Reworded Marketing Copy:
Original: *"Aim for perfection, consistently achieve excellence."*  
**New:** *"Perfection Pursued, Excellence Delivered"*

Original: *"We bridge the gap between architectural vision and structural reality..."*  
**New:** *"Transforming architectural vision into structural reality..."*

### Services Offered:
1. Complete Home Transformations
2. Kitchen Remodeling
3. Bathroom Renovations
4. Commercial Remodeling
5. Custom Millwork
6. Structural Additions

### 5-Step Process:
1. Comprehensive Consultation
2. Foundation & Preparation
3. Expert Construction
4. Premium Finishes
5. Flawless Delivery

## 📸 Images

10 project images located in `user uploads/` folder:
- All images are PNG format
- Ready for upload to Wix Media Manager
- Recommended: Rename and optimize before uploading

## 🌐 Deployment Options

### Option 1: Wix.com (Recommended)
- Follow [WIX_MIGRATION_GUIDE.md](WIX_MIGRATION_GUIDE.md)
- Use Bizee.com integration
- Professional hosting included

### Option 2: Alternative Hosting
If you prefer traditional hosting:
- Upload HTML/CSS/JS files to any web host
- Update image paths to absolute URLs
- Connect custom domain
- Hosts: Netlify, Vercel, GitHub Pages, etc.

## 📞 Contact Information

Update these placeholders in the code:
- **Phone:** (555) 123-4567 → *Your actual phone*
- **Email:** info@npservicesllc.com → *Your actual email*
- **Location:** Alabama & Surrounding Regions → *Your service area*

### Files to Update:
- `index.html` - Lines with contact information
- `WIX_MIGRATION_GUIDE.md` - Update contact details in guide

## ✅ Pre-Launch Checklist

- [ ] Review all text content for accuracy
- [ ] Update contact information (phone, email)
- [ ] Optimize and rename project images
- [ ] Test contact form functionality
- [ ] Review on mobile devices
- [ ] Check all links work correctly
- [ ] Proofread for typos
- [ ] Add Google Analytics code
- [ ] Set up business email
- [ ] Configure domain name

## 🔧 Customization

### Change Colors:
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #d4a574;
    /* Add your colors */
}
```

### Change Fonts:
Replace Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

### Add More Projects:
Duplicate project card structure in `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/image.png" alt="Description">
        ...
    </div>
</div>
```

## 📚 Documentation

- **Full Wix Guide:** [WIX_MIGRATION_GUIDE.md](WIX_MIGRATION_GUIDE.md)
- **Design Specs:** Included in migration guide
- **Code Comments:** Throughout HTML/CSS/JS files

## 🆘 Support & Help

### Need Assistance?
- **Wix Support:** https://support.wix.com
- **Hire a Designer:** Wix Marketplace
- **Use HTML Reference:** Share this folder with designer

### Common Issues:

**Q: Images not loading?**  
A: Check file paths - use relative paths like `user uploads/filename.png`

**Q: Mobile menu not working?**  
A: Ensure `script.js` is loaded at end of `index.html`

**Q: Want to add more pages?**  
A: In Wix, use the Pages panel. For HTML, create new HTML files and link them.

## 📄 License

This website design is custom-built for NP Services LLC.  
© 2026 NP Services LLC. All rights reserved.

---

## 🎯 Next Steps

1. **Preview Site:** Open `index.html` in browser
2. **Read Guide:** Review [WIX_MIGRATION_GUIDE.md](WIX_MIGRATION_GUIDE.md)
3. **Prepare Images:** Optimize files in `user uploads/`
4. **Create Wix Account:** Through Bizee.com
5. **Choose Template:** Select construction template
6. **Follow Guide:** Recreate design in Wix editor
7. **Test Thoroughly:** All devices and browsers
8. **Launch:** Publish to your domain

---

**Built with excellence for NP Services LLC** 🏗️✨