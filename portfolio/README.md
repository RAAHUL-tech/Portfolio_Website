# Portfolio Website - Enhanced Version

A modern, responsive portfolio website built with React, TypeScript, Bootstrap, and advanced theming capabilities.

## ✨ Features

### 🎨 **Advanced Theme System**
- **Time-based Theme Switching**: Automatically switches between light and dark themes based on time of day
  - Light theme: 6 AM - 6 PM
  - Dark theme: 6 PM - 6 AM
- **Manual Theme Toggle**: Users can override automatic theme with manual toggle
- **Persistent Theme**: Remembers user's theme preference in localStorage
- **Smooth Transitions**: All theme changes are animated with smooth transitions

### 🚀 **Modern UI/UX**
- **Bootstrap 5.3.2 Integration**: Professional, responsive design system
- **Custom CSS Variables**: Consistent theming across all components
- **Interactive Animations**: Smooth hover effects, loading states, and scroll animations
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Accessibility**: Focus states, ARIA labels, and keyboard navigation

### 🎭 **Animation System**
- **Intersection Observer**: Efficient scroll-triggered animations
- **Loading States**: Professional loading spinners and transitions
- **Hover Effects**: Interactive elements with smooth transitions
- **Gradient Animations**: Dynamic color shifts and shimmer effects
- **Scroll Animations**: Elements fade in as they enter viewport

### 🛠 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **React Hooks**: Custom hooks for intersection observer and theme management
- **Component Architecture**: Modular, reusable components
- **Performance Optimized**: Lazy loading and efficient re-renders
- **SEO Ready**: Semantic HTML and meta tags

## 🏗 **Project Structure**

```
src/
├── components/
│   ├── AnimatedSection.tsx    # Scroll-triggered animations
│   └── LoadingSpinner.tsx     # Loading states
├── contexts/
│   └── ThemeContext.tsx       # Theme management
├── hooks/
│   └── useIntersectionObserver.ts  # Scroll animations
├── App.tsx                    # Main application
├── main.tsx                   # Entry point
└── index.css                  # Global styles and themes
```

## 🎨 **Theme System**

### Light Theme
- Clean, professional appearance
- High contrast for readability
- Optimized for daytime use
- Blue and purple gradient accents

### Dark Theme
- Modern, sleek appearance
- Easy on the eyes for night use
- Consistent with popular dark mode designs
- Enhanced focus on content

### Automatic Theme Switching
```typescript
// Automatically switches based on time
const getTimeBasedTheme = (): 'light' | 'dark' => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
};
```

## 🎯 **Key Components**

### ThemeProvider
- Manages theme state globally
- Handles automatic time-based switching
- Persists user preferences
- Provides theme context to all components

### AnimatedSection
- Intersection Observer integration
- Multiple animation types (fade, slide, scale)
- Configurable delays and triggers
- Performance optimized

### ThemeToggle
- Clean, accessible toggle button
- Visual feedback for current theme
- Smooth icon transitions
- Keyboard accessible

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
```bash
# Run with linting
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## 🎨 **Customization**

### Adding New Themes
1. Define CSS variables in `index.css`
2. Add theme logic in `ThemeContext.tsx`
3. Update theme toggle component

### Custom Animations
1. Add animation classes in `index.css`
2. Use `AnimatedSection` with custom animation types
3. Configure intersection observer options

### Styling Components
- Use Bootstrap classes for layout
- Custom CSS variables for theming
- CSS-in-JS for dynamic styles
- Responsive design utilities

## 📱 **Responsive Design**

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Bootstrap's responsive grid system
- **Touch Friendly**: Large touch targets and gestures
- **Performance**: Optimized for mobile networks

## ♿ **Accessibility**

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant color schemes
- **Reduced Motion**: Respects user preferences

## 🔧 **Performance Optimizations**

- **Lazy Loading**: Components load as needed
- **Efficient Animations**: Hardware accelerated CSS
- **Minimal Re-renders**: Optimized React patterns
- **Bundle Size**: Tree-shaking and code splitting
- **Caching**: LocalStorage for theme persistence

## 🌟 **Future Enhancements**

- [ ] PWA capabilities
- [ ] Advanced animations library
- [ ] Multi-language support
- [ ] Blog integration
- [ ] Contact form backend
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] A/B testing framework

## 📄 **License**

This project is licensed under the Apache License 2.0 - see the [LICENSE](../LICENSE) file for details.

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 **Contact**

- **Email**: rahulkrish28@gmail.com
- **LinkedIn**: [Raahul Krishna](https://www.linkedin.com/in/raahulkrishna/)
- **GitHub**: [RAAHUL-tech](https://github.com/RAAHUL-tech)

---

Built with ❤️ by Raahul Krishna Durairaju