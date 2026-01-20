# NP Services LLC - Wix Migration Guide

## Overview
This guide explains how to recreate the NP Services LLC website in Wix.com using their visual editor. Since Wix doesn't accept direct HTML/CSS uploads, you'll use this standalone website as a design reference.

---

## Table of Contents
1. [Getting Started with Wix](#getting-started)
2. [Choosing a Template](#choosing-a-template)
3. [Site Structure](#site-structure)
4. [Page-by-Page Recreation](#page-by-page-recreation)
5. [Uploading Images](#uploading-images)
6. [Design Specifications](#design-specifications)
7. [Mobile Optimization](#mobile-optimization)
8. [SEO & Settings](#seo-settings)

---

## Getting Started

### Step 1: Create Your Wix Account
1. Go to [Wix.com](https://www.wix.com) or through [Bizee.com](https://www.bizee.com)
2. Sign up or log in to your account
3. Click "Create New Site"
4. Choose "Business & Services" category
5. Select "Construction & Contractors"

### Step 2: Template Selection
**Recommended Templates:**
- Search for "construction company" or "contractor" templates
- Look for templates with:
  - Full-width hero sections
  - Project gallery capabilities
  - Service showcases
  - Contact forms

**Alternative:** Start with a blank template for maximum control

---

## Choosing a Template

### Best Wix Templates for This Design:
1. **"Construction Pro"** - Clean, professional layout
2. **"Architect Portfolio"** - Emphasis on visual projects
3. **"Contractor Services"** - Service-focused with strong CTAs
4. **Blank Template** - Full creative control (recommended for experienced users)

---

## Site Structure

Create the following pages in Wix:

### Pages to Create:
1. **Home** (Main landing page) - Already exists
2. **Services** (Detailed service descriptions)
3. **Projects/Portfolio** (Gallery of completed work)
4. **About Us** (Company story and values)
5. **Contact** (Contact form and information)

### Navigation Menu:
- Home
- Services
- Our Process
- Projects
- Contact (as button/CTA)

---

## Page-by-Page Recreation

### 🏠 HOME PAGE

#### Section 1: Navigation Bar
**Wix Editor Steps:**
1. Click on the header area
2. Add elements:
   - **Text:** "NP Services LLC" (left side)
   - **Menu:** Horizontal menu (right side)
3. **Styling:**
   - Background: Black (#1a1a1a) with 95% opacity
   - Font: Montserrat or similar sans-serif
   - Logo size: 28px, color: white
   - "LLC" in gold (#d4a574)
   - Menu links: White, uppercase, 15px
   - Contact button: Gold background (#d4a574)
4. Set header to **"Sticky"** (stays fixed on scroll)

#### Section 2: Hero Section
**Wix Editor Steps:**
1. Add a **Strip/Section** (full width)
2. **Background:**
   - Gradient: Dark gray to lighter gray (#1a1a1a to #2d2d2d)
   - Height: 100vh (full viewport height)
   - Add a subtle overlay effect
3. Add **Text Elements:**
   - Small text: "PREMIUM CONSTRUCTION & REMODELING" (gold, 16px, uppercase)
   - Main heading: "Perfection Pursued, Excellence Delivered" (72px, white, Playfair Display or serif)
   - Description: "Transforming architectural vision..." (18px, white, max 700px width)
4. Add **Buttons:**
   - Primary: "Start Your Project" (gold background)
   - Secondary: "View Our Work" (white border, transparent)
5. **Alignment:** Center all content vertically and horizontally

#### Section 3: Services
**Wix Editor Steps:**
1. Add a new **Strip** section
2. Add **Heading:** "Our Expertise" (48px, center aligned)
3. Add **Subheading:** "Comprehensive remodeling solutions..." (18px, gray)
4. Create a **Grid Layout** (3 columns × 2 rows)
5. For each service card:
   - Add an **Icon** (Wix has built-in icons or upload SVG)
   - Add **Title** (22px, bold)
   - Add **Description** (15px, gray)
   - Add white border: 1px solid #e0e0e0
   - Add hover effect: Shadow + slight lift

**Services to Add:**
1. Complete Home Transformations
2. Kitchen Remodeling
3. Bathroom Renovations
4. Commercial Remodeling
5. Outdoor Transformations
6. Built-in Structures

#### Section 4: Our Process
**Wix Editor Steps:**
1. Add a **Strip** with light gray background (#f8f8f8)
2. Add section heading: "Our Process"
3. Create **5 Process Steps** using:
   - **Repeater** or **Multi-State Box** (recommended)
   - Or manually create 5 identical layouts

**For Each Step:**
- Circle with number (100px diameter, gold background, white text)
- Title (26px, bold)
- Description (16px, gray)
- Connect with vertical line (use a shape element, 2px wide, gold)

**Process Steps:**
1. Comprehensive Consultation
2. Foundation & Preparation
3. Expert Construction
4. Premium Finishes
5. Flawless Delivery

#### Section 5: Projects Gallery
**Wix Editor Steps:**
1. Add a new **Strip** section
2. Add heading: "Recent Projects"
3. Add **Pro Gallery** element (Wix has built-in gallery options)
4. **Gallery Settings:**
   - Layout: Grid or Masonry
   - Columns: 3 (desktop), 2 (tablet), 1 (mobile)
   - Hover effect: Darken with text overlay
   - Image ratio: 1:1 or 4:3 (consistent)
5. Upload all 10 project images from "user uploads" folder
6. For each image:
   - Add title: "Featured Project"
   - Add hover text: "View Details"

#### Section 6: Contact Form
**Wix Editor Steps:**
1. Add a **Strip** with dark gradient background (#1a1a1a)
2. Split into **2 columns**:
   
   **Left Column - Contact Info:**
   - Heading: "Start Your Transformation" (42px, white)
   - Description text
   - Add icons + text for:
     - Phone: 678-791-6902
     - Email: noproblem@npservices.info
     - Location: Alabama & Surrounding Regions
   
   **Right Column - Form:**
   - Add Wix **Contact Form** element
   - White background with shadow
   - Fields to include:
     - Name (text input)
     - Email (email input)
     - Phone (tel input)
     - Service Type (dropdown)
     - Message (textarea)
   - Submit button: Gold (#d4a574)

#### Section 7: Footer
**Wix Editor Steps:**
1. Add **Footer** section
2. Background: Very dark (#0d0d0d)
3. Create **3 columns**:
   - **Column 1:** Logo + tagline
   - **Column 2:** Quick links (Services, Process, Projects, Contact)
   - **Column 3:** Contact information
4. Add bottom bar:
   - Copyright text: "© 2026 NP Services LLC. All rights reserved."
   - Center aligned, gray text

---

## Uploading Images

### Prepare Your Images:
1. Go to **Media Manager** in Wix
2. Click **"Upload Media"**
3. Upload all 10 images from "user uploads" folder

### Image Optimization Tips:
- **Rename files** before uploading (e.g., "project-1.png", "bathroom-remodel.png")
- **Optimize file size:** Use tools like TinyPNG or ImageOptim
- **Recommended size:** 1920px width maximum
- **File format:** JPG for photos (better compression), PNG for logos
- **Max file size:** Keep under 5MB per image

### Using Images in Wix:
1. Click on image element
2. Select "Change Image"
3. Choose from Media Manager
4. Adjust: **Crop, Position, Filters** as needed
5. Add **Alt Text** for SEO (describe the image)

---

## Design Specifications

### Color Palette:
- **Primary Dark:** #1a1a1a (Black)
- **Secondary Gold:** #d4a574 (Gold accent)
- **Accent Gold:** #c89b5e (Lighter gold)
- **Text Dark:** #1a1a1a
- **Text Light:** #666666 (Gray)
- **Text White:** #ffffff
- **Background Light:** #f8f8f8
- **Border Color:** #e0e0e0

### Typography:
**Primary Font:** Montserrat (or similar: Helvetica, Arial)
- Body text: 16px
- Small text: 14-15px
- Links: 15px

**Display Font:** Playfair Display (or similar: Georgia, Serif)
- Main headings: 48-64px
- Section headings: 32-48px

**Font Weights:**
- Light: 300
- Regular: 400
- Semi-bold: 600
- Bold: 700

### Spacing & Layout:
- **Container width:** 1200px max
- **Section padding:** 100px top/bottom (desktop), 60px (mobile)
- **Element spacing:** 20-40px between elements
- **Button padding:** 16px vertical, 40px horizontal
- **Border radius:** 4-8px (subtle rounded corners)

### Button Styles:
**Primary Button:**
- Background: Gold (#d4a574)
- Text: White
- Padding: 16px 40px
- Hover: Darker gold (#c89b5e) + lift effect

**Secondary Button:**
- Background: Transparent
- Border: 2px white
- Hover: White background + dark text

---

## Mobile Optimization

### Wix Mobile Editor:
1. Click **"Mobile"** icon in top menu
2. Wix auto-converts, but review each section
3. **Adjust:**
   - Stack columns vertically
   - Reduce heading sizes (e.g., 48px → 32px)
   - Increase button sizes for touch
   - Simplify navigation (hamburger menu)
   - Reduce spacing (100px → 60px sections)

### Mobile Checklist:
- [ ] Navigation collapses to hamburger menu
- [ ] Hero text is readable (reduce from 64px to 40px)
- [ ] Services grid becomes single column
- [ ] Process timeline is simplified
- [ ] Projects gallery is 1 column
- [ ] Contact form is full width
- [ ] Footer stacks vertically
- [ ] All buttons are easily tappable (min 44px height)
- [ ] Images load quickly (use Wix's auto-optimization)

---

## SEO & Settings

### Site Settings in Wix:
1. Go to **Settings** → **SEO**
2. **Site Title:** "NP Services LLC | Premium Construction & Remodeling"
3. **Meta Description:** "NP Services LLC delivers excellence in residential and commercial remodeling - from bathroom renovations to complete home transformations. Serving discerning property owners in Alabama."
4. **Keywords:** construction, remodeling, renovation, bathroom, kitchen, commercial, residential, Alabama
5. **Favicon:** Upload NP Services logo (32×32px)

### Page-Specific SEO:
For each page, set:
- **Page Title**
- **Page Description**
- **URL Slug** (e.g., /services, /projects, /contact)

### Performance Settings:
1. **Enable lazy loading** for images (Wix default)
2. **Compress images** before uploading
3. **Use Wix Turbo** if available on your plan
4. **Connect custom domain** (npservicesllc.com)

### Google Integration:
1. Add **Google Analytics** code
2. Set up **Google Search Console**
3. Add **Google My Business** integration
4. Enable **Wix SEO Wiz** (guided setup)

---

## Additional Features to Consider

### Wix Apps to Install:
1. **Wix Chat** - Live chat support
2. **Wix Forms** - Advanced form builder
3. **Wix Bookings** - Schedule consultations
4. **Wix Video** - Add project videos
5. **Google Maps** - Show service area
6. **Instagram Feed** - Display social proof
7. **Testimonials** - Client reviews

### Advanced Customization:
If you want more control:
1. Use **Velo by Wix** (JavaScript API)
2. Add custom interactions
3. Create dynamic content
4. Connect to external databases

---

## Launch Checklist

### Before Publishing:
- [ ] All images uploaded and optimized
- [ ] All text content proofread
- [ ] Contact form tested (receives submissions)
- [ ] Phone numbers and email verified
- [ ] Mobile version reviewed and adjusted
- [ ] All links work (internal navigation)
- [ ] SEO settings configured
- [ ] Favicon uploaded
- [ ] Privacy policy added (if required)
- [ ] Terms of service added (if needed)
- [ ] Social media links added (if applicable)
- [ ] Google Analytics connected

### After Publishing:
- [ ] Test on multiple devices (phone, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form submissions
- [ ] Set up email notifications for form submissions
- [ ] Share with team for feedback
- [ ] Announce launch on social media

---

## Maintenance & Updates

### Regular Updates:
- **Monthly:** Add new project photos to gallery
- **Quarterly:** Update services or pricing
- **Annually:** Review and refresh content
- **As needed:** Update contact information

### Wix Support:
- **Help Center:** https://support.wix.com
- **Wix Forum:** Community assistance
- **Contact Support:** Available on paid plans
- **Video Tutorials:** Wix Learn platform

---

## Alternative: Direct HTML Preview

While you cannot upload this HTML directly to Wix, you can:
1. **Use it as a reference** for design and layout
2. **Open index.html** in a browser to show clients
3. **Host it temporarily** on GitHub Pages or Netlify for preview
4. **Use it for print mockups** or presentations

### To View the HTML Site Locally:
1. Open the `/workspaces/noproblem` folder
2. Double-click `index.html`
3. Site opens in your default browser
4. Share this with your Wix designer as reference

---

## Need Help?

### Resources:
- **Wix Help Center:** https://support.wix.com
- **Wix YouTube Channel:** Video tutorials
- **Hire a Wix Expert:** Wix Marketplace
- **This HTML Site:** Use as design specification document

### Contact Information:
If you're working with a web designer, share this entire folder with them. The HTML/CSS/JS files serve as a complete technical specification.

---

**Good luck with your NP Services LLC website launch! 🚀**
