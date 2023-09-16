/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/custom/*.{ts,tsx}",
    "./src/components/*.{ts,tsx}",
    "./src/pages/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid-s': '2px 2px #000000;;',
        'solid-m': '4px 4px #000000;',
        'solid-l': '8px 8px #000000;',
        'solid-xl': '16px 16px #000000;'
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

