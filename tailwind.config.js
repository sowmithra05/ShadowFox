module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4D3E", // deep-cricket-green
          50: "#F0F9F6", // light-cricket-green-50
          100: "#D1F2E8", // light-cricket-green-100
          200: "#A3E5D1", // light-cricket-green-200
          300: "#75D8BA", // light-cricket-green-300
          400: "#47CBA3", // light-cricket-green-400
          500: "#2E8B57", // cricket-green-500
          600: "#1B4D3E", // cricket-green-600
          700: "#164136", // dark-cricket-green-700
          800: "#11352E", // dark-cricket-green-800
          900: "#0C2926", // dark-cricket-green-900
        },
        secondary: {
          DEFAULT: "#FF6B35", // energetic-orange
          50: "#FFF4F0", // light-orange-50
          100: "#FFE4D6", // light-orange-100
          200: "#FFC9AD", // light-orange-200
          300: "#FFAE84", // light-orange-300
          400: "#FF935B", // light-orange-400
          500: "#FF6B35", // orange-500
          600: "#E55A2B", // orange-600
          700: "#CC4921", // dark-orange-700
          800: "#B23817", // dark-orange-800
          900: "#99270D", // dark-orange-900
        },
        accent: {
          DEFAULT: "#FFD23F", // vibrant-yellow
          50: "#FFFCF0", // light-yellow-50
          100: "#FFF8D6", // light-yellow-100
          200: "#FFF1AD", // light-yellow-200
          300: "#FFEA84", // light-yellow-300
          400: "#FFE35B", // light-yellow-400
          500: "#FFD23F", // yellow-500
          600: "#E5BD35", // yellow-600
          700: "#CCA82B", // dark-yellow-700
          800: "#B29321", // dark-yellow-800
          900: "#997E17", // dark-yellow-900
        },
        background: "#FAFBFC", // soft-neutral
        surface: "#FFFFFF", // pure-white
        text: {
          primary: "#1A202C", // rich-dark-gray
          secondary: "#4A5568", // medium-gray
        },
        success: {
          DEFAULT: "#38A169", // cricket-green-success
          50: "#F0FFF4", // light-success-50
          100: "#C6F6D5", // light-success-100
          200: "#9AE6B4", // light-success-200
          300: "#68D391", // light-success-300
          400: "#48BB78", // light-success-400
          500: "#38A169", // success-500
          600: "#2F855A", // success-600
          700: "#276749", // dark-success-700
          800: "#22543D", // dark-success-800
          900: "#1C4532", // dark-success-900
        },
        warning: {
          DEFAULT: "#D69E2E", // warm-amber
          50: "#FFFBEB", // light-warning-50
          100: "#FEF3C7", // light-warning-100
          200: "#FDE68A", // light-warning-200
          300: "#FCD34D", // light-warning-300
          400: "#FBBF24", // light-warning-400
          500: "#F59E0B", // warning-500
          600: "#D69E2E", // warning-600
          700: "#B45309", // dark-warning-700
          800: "#92400E", // dark-warning-800
          900: "#78350F", // dark-warning-900
        },
        error: {
          DEFAULT: "#E53E3E", // clear-red
          50: "#FEF2F2", // light-error-50
          100: "#FED7D7", // light-error-100
          200: "#FEB2B2", // light-error-200
          300: "#FC8181", // light-error-300
          400: "#F56565", // light-error-400
          500: "#E53E3E", // error-500
          600: "#C53030", // error-600
          700: "#9B2C2C", // dark-error-700
          800: "#822727", // dark-error-800
          900: "#63171B", // dark-error-900
        },
        border: {
          DEFAULT: "rgba(74, 85, 104, 0.2)", // subtle-border
          light: "rgba(74, 85, 104, 0.1)", // lighter-border
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // headings-font
        'source-sans': ['Source Sans Pro', 'sans-serif'], // body-font
        roboto: ['Roboto', 'sans-serif'], // captions-font
        mono: ['JetBrains Mono', 'monospace'], // data-font
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)', // subtle-elevation
        'medium': '0 4px 12px rgba(0, 0, 0, 0.15)', // medium-elevation
        'strong': '0 8px 24px rgba(0, 0, 0, 0.2)', // strong-elevation
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        'ipl': '8px', // ipl-standard-radius
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', // smooth-transition
      },
      transitionDuration: {
        '150': '150ms', // micro-interaction
        '200': '200ms', // standard-interaction
        '300': '300ms', // layout-change
      },
      animation: {
        'pulse-live': 'pulse-live 1.5s ease-in-out infinite', // live-indicator
        'fade-in': 'fade-in 150ms ease-out', // tooltip-fade
        'slide-up': 'slide-up 300ms cubic-bezier(0.4, 0, 0.2, 1)', // content-reveal
      },
      keyframes: {
        'pulse-live': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-up': {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}