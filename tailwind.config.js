/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'section-bg': '#ffffff',
        'border-top': '#e1e4ea',
        'card-inactive': '#f5f7fa',
        'card-active-border': '#cbde8b',
        'icon-bg': '#ffffff',
        'icon-highlight': '#3C3CC9',
      },
      fontSize: {
        'title': '36px',
        'title-mobile': '32px',
        'subtitle': '16px',
        'progress-title': '28px',
        'progress-title-mobile': '16px',
      },
      lineHeight: {
        'title': '24px',
        'subtitle': '14px',
        'progress-title': '14px',
      },
      spacing: {
        '68': '68px',
        '80': '80px',
        '48': '48px',
        '24': '24px',
        '16': '16px',
        '12': '12px',
        '28': '28px',
        '32': '32px',
      },
      boxShadow: {
        'card-hover': '8px 2px 16px 8px rgba(3, 4, 5, 0.84)',
      },
    },
  },
  plugins: [],
}