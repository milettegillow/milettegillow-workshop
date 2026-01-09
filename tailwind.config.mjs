/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'victorian-brown': '#8B6F47',
        'victorian-gold': '#D4AF37',
        'victorian-cream': '#F5F5DC',
        'victorian-dark': '#3D2817',
        'parchment': '#F4E4BC',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'display': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    // Uncomment after installing: npm install -D @tailwindcss/typography
    // require('@tailwindcss/typography'),
  ],
}

