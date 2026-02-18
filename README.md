# Verto Next - Corporate Website

A modern, responsive corporate website for Verto Next, a technology consulting and service provider company. The website showcases various digital transformation services including AI, Data & Analytics, Cloud & Migration, and industry-specific solutions. **Bilingual**: English (root) and Turkish (`tr/`).

## Project Overview

Verto Next is a full-featured corporate website built with Bootstrap, featuring:
- Multiple service and industry solution pages
- Dark/Light theme switching
- Responsive design for all devices
- Modern UI components and animations
- SEO-optimized structure

## Bilingual Development Guidelines

**Important:** This site is bilingual—English pages are at the project root, Turkish pages under `tr/`. When you change the layout or markup of a page, you **must** apply the same change to both language versions:

- **English:** e.g. `about-us/index.html`, `ai/index.html`
- **Turkish:** e.g. `tr/about-us/index.html`, `tr/ai/index.html`

Only the content text differs between languages; structure, CSS classes, asset paths, and layout markup must stay in sync. This keeps both versions consistent and avoids maintenance drift.

## Directory Structure

```
bootstrap/
├── index.html                    # Home page (English)
├── tr/                           # Turkish version
│   ├── index.html               # Turkish home page
│   └── [same structure as root]
├── about-us/
│   └── index.html               # About Us page
├── team/
│   └── index.html               # Team page
├── career/
│   └── index.html               # Career page
├── newsroom/
│   └── index.html               # Newsroom page
├── contact/
│   └── index.html               # Contact page
├── ai/
│   └── index.html               # Artificial Intelligence solutions
├── data-and-analytics/
│   └── index.html               # Data & Analytics solutions
├── cloud-and-migration/
│   └── index.html               # Cloud & Migration solutions
├── digital-transformation/
│   └── index.html               # Digital Transformation solutions
├── banking/
│   └── index.html               # Banking industry solutions
├── telco/
│   └── index.html               # Telecommunications industry solutions
├── insurance/
│   └── index.html               # Insurance industry solutions
├── healthcare/
│   └── index.html               # Healthcare industry solutions
├── public/
│   └── index.html               # Public sector solutions
├── server-hosting/
│   └── index.html               # Server Hosting solutions
├── assets/
│   ├── css/
│   │   ├── style.css            # Main compiled CSS file
│   │   ├── bootstrap-icons.css  # Bootstrap icons
│   │   ├── Font Awesome 5 Brands.css
│   │   ├── Font Awesome 5 Free.css
│   │   ├── Font Awesome 6 Brands.css
│   │   ├── Font Awesome 6 Free.css
│   │   ├── FontAwesome.css
│   │   └── swiper-icons.css
│   ├── js/
│   │   ├── functions.js         # Main JavaScript file with theme, animations
│   │   └── bs-init.js           # Bootstrap initialization
│   └── scss/
│       ├── style.scss           # Main SCSS file
│       ├── _variables.scss      # Light theme variables
│       ├── _variables-dark.scss # Dark theme variables
│       ├── _dark-mode.scss      # Dark mode styles
│       ├── _user.scss           # Custom user styles
│       ├── _user-variables.scss # Custom user variables
│       ├── components/          # Component styles
│       │   ├── _general.scss
│       │   ├── _avatar.scss
│       │   ├── _mockup.scss
│       │   └── _utilities.scss
│       └── custom/              # Custom Bootstrap overrides
│           ├── forms/
│           │   ├── _floating-labels.scss
│           │   ├── _form-check.scss
│           │   └── _form-control.scss
│           ├── _accordion.scss
│           ├── _badge.scss
│           ├── _breadcrumb.scss
│           ├── _buttons.scss
│           ├── _card.scss
│           ├── _dropdowns.scss
│           ├── _list-group.scss
│           ├── _nav.scss
│           ├── _navbar.scss
│           ├── _pagination.scss
│           ├── _progress.scss
│           ├── _reboot.scss
│           ├── _tables.scss
│           ├── _type.scss
│           └── _utilities.scss
└── README.md                    # This file
```

## Technology Stack

### Frontend Framework
- **Bootstrap 5.3.3** - Responsive grid system and components
- **HTML5** - Semantic markup
- **CSS3** - Styling with compiled SCSS

### Fonts & Icons
- **Inter** - Primary font family
- **Instrument Sans** - Alternative font
- **Bootstrap Icons** - Icon library
- **Font Awesome 5 & 6** - Additional iconography
- **Google Fonts** - Web fonts

### JavaScript Libraries
- **Bootstrap JavaScript** - Component interactivity
- **Swiper** - Slider/carousel functionality
- **PureCounter** - Number animation counters
- **Jarallax** - Parallax scrolling effects
- **AOS** - Animate on scroll effects
- **GLightbox** - Lightbox gallery
- **Isotope** - Grid filtering and sorting

### Styling
- **SCSS** - Modular styling system
- **CSS Custom Properties** - Theme variables for light/dark mode
- **Bootstrap Grid System** - Responsive layout

## Features

### Core Features
1. **Dark/Light Mode Toggle** - User-selectable theme with localStorage persistence
2. **Responsive Design** - Mobile-first approach with breakpoints for all devices
3. **Sticky Navigation** - Persistent header while scrolling
4. **Dynamic Dropdowns** - Hover interactions on desktop, touch-friendly on mobile
5. **Theme Switching** - Seamless dark/light theme transitions
6. **Icon Integration** - Multiple icon libraries (Bootstrap Icons, Font Awesome)

### Interactive Components
- **Swiper Sliders** - Full-screen carousel on homepage
- **Counter Animations** - Animated statistics using PureCounter
- **Parallax Effects** - Background parallax and mouse-move parallax
- **Form Validation** - Bootstrap native form validation
- **Sticky Elements** - Elements that stick during scroll
- **Tooltip & Popover** - Bootstrap tooltip and popover components

### Navigation Integration
The website features a mega-menu structure with:
- **Company**: About Us, Team, Career, Newsroom
- **Solutions by Category**: AI, Data & Analytics, Cloud & Migration, Digital Transformation
- **Solutions by Industry**: Banking, Telco, Insurance, Healthcare, Public
- **Products**: External product links (Lyncfirm)
- **Contact Us**: Direct contact page link

## JavaScript Functions

The main JavaScript file (`assets/js/functions.js`) includes:

### Key Functions
| Function | Purpose |
|----------|---------|
| `preLoader()` | Shows/hides preloader animation on page load |
| `dropdownHover()` | Enables dropdown menus on hover (desktop) |
| `stickyHeader()` | Makes header sticky after scroll threshold |
| `toolTipFunc()` | Initializes Bootstrap tooltips |
| `popOverFunc()` | Initializes Bootstrap popovers |
| `backTotop()` | Back to top button functionality |
| `lightBox()` | GLightbox gallery initialization |
| `aosFunc()` | Animate on Scroll initialization |
| `stepper()` | Multi-step form stepper |
| `pricing()` | Dynamic pricing toggle (monthly/annual) |
| `swiperSlider()` | Swiper slider initialization |
| `mouseMove()` | Mouse move parallax effects |
| `pCounter()` | PureCounter number animations |
| `bootstrapValidation()` | Form validation handler |

## Dark Mode Implementation

### Theme Switching
- User preference stored in `localStorage`
- Automatic detection of system preference
- Implemented via `data-bs-theme` attribute on `<html>`
- CSS custom properties for theme variables

### Color Variables
**Light Theme:**
- Primary: #2a32ea (Blue)
- Dark: #202124 (Charcoal)
- Light: #f8f8f8 (Off-white)

**Dark Theme:**
- Background: #212529
- Text: #dee2e6
- Maintains all color contrast ratios for accessibility

## CSS Editing Workflow

**Important:** The project contains SCSS source files but lacks an automated build system. All CSS modifications **must be made directly in `assets/css/style.css`** to take effect. Editing SCSS files alone will have no impact.

### CSS File Information
- **Compiled CSS**: `assets/css/style.css` (28,001 lines)
- **Source SCSS**: `assets/scss/` (modular structure)
- **Editing Note**: Direct modifications to style.css are required for changes to be visible

## Customization Options

### Color Customization
Edit the CSS custom properties in `assets/css/style.css`:
```css
:root, [data-bs-theme=light] {
  --bs-primary: #2a32ea;
  --bs-dark: #202124;
  --bs-secondary: #85878a;
  /* ... other variables ... */
}
```

### Font Customization
Modify `--bs-body-font-family` and other font variables in the CSS root.

### Spacing & Layout
Bootstrap utility classes are used throughout. Customize via CSS custom properties or by modifying custom SCSS.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Web server for local testing (optional)

### Installation
1. Clone or download the repository
2. Open `index.html` in a web browser
3. Navigate through the site using the main menu

### Local Development
To serve locally with Python:
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

Or with Node.js:
```bash
npx http-server
```

## Navigation Guide

### Main Menu Structure
- **Company** (Dropdown)
  - About Us
  - Team
  - Career
  - Newsroom
  
- **Solutions** (Mega-menu)
  - By Category: AI, Data & Analytics, Cloud & Migration, Digital Transformation
  - By Industry: Banking, Telco, Insurance, Healthcare, Public

- **Products** (Dropdown)
  - Lyncfirm

- **Contact Us** (Direct link)

- **Theme Toggle** (Top right)

## Footer Navigation
The footer contains quick links to all major sections:
- Company pages
- Solution categories
- Industry solutions
- Contact information

## Performance Considerations

### Optimizations Included
- Lazy loading support
- CSS minification (compiled style.css)
- Font preconnection
- Icon sprite/font optimization
- Bootstrap's optimized JavaScript

### Image Assets
- Background images optimized for web
- Responsive image srcsets recommended for `<img>` tags
- Parallax images should be optimized for performance

## SEO Features

- Semantic HTML5 markup
- Meta tags for viewport and character encoding
- Title tags with brand name
- Structured link hierarchy
- Bootstrap Icons for semantic iconography
- Proper heading hierarchy

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Form validation feedback
- Tooltips and popovers with ARIA attributes

## External Resources

- **Bootstrap**: https://getbootstrap.com/
- **Bootstrap Icons**: https://icons.getbootstrap.com/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/
- **Swiper**: https://swiperjs.com/
- **PureCounter**: https://github.com/srexi/purecounterjs
- **Jarallax**: https://jarallax.com/
- **AOS (Animate on Scroll)**: https://michalsnik.github.io/aos/
- **GLightbox**: https://biati-digital.github.io/glightbox/
- **Isotope**: https://isotope.metafizzy.co/

## Support & Maintenance

For questions or issues:
- Email: info@vertonext.com
- Location: Istanbul, Turkey
- LinkedIn: https://www.linkedin.com/company/verto-next

## Copyright

© 2025 Verto Next. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: November 2025
