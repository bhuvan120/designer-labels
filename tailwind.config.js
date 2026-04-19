import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        charcoal: '#050505',
        ivory: '#f7f4ee',
        mist: '#d9e8e4',
        accent: '#4fd1c5',
        coral: '#ff6b6b',
        ink: '#111111',
        panel: '#161616',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(0, 0, 0, 0.32)',
        insetGlow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(79, 209, 197, 0.18), transparent 42%)',
      },
    },
  },
  plugins: [],
}
