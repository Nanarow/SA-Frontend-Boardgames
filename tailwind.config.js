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
        'solid-s': '2px 2px rgba(0,0,0,1);',
        'solid-m': '4px 4px rgba(0,0,0,1);',
        'solid-l': '8px 8px rgba(0,0,0,1);',
        'solid-xl': '12px 12px rgba(0,0,0,1);',
        'solid-2xl': '16px 16px rgba(0,0,0,1);'
      },
      maxWidth: {
        'm-1': 'calc(100% - 0.5rem);',
        'm-2': 'calc(100% - 1.0rem);'
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
        scaleUp: {
          from: { scale: 0, },
          to: { scale: 1, },
        }
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        spin: 'spin 2s linear infinite;',
        'scale-up': 'scaleUp 150ms cubic-bezier(0, 0, 0.2, 1)',
        'show-up': 'overlayShow 2s cubic-bezier(0, 0, 0.2, 1)'
      },
    },
  },
  plugins: [],
}

