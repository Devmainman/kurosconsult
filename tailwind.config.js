/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        kuros: {
          teal: '#2FA8C7',
          darkTeal: '#1B7F9E',
          deepTeal: '#135E73',
          // Secondary / Accent Colors
          lightGold: '#FAFAD2',
          yellow: '#F7E701',
          gold: '#FEC300',
          darkGold: '#D89A22',
        }
      },
      fontFamily: {
        // Typography Requirement: Clean, bold, corporate fonts
        sans: ['Poppins', 'Montserrat', 'sans-serif'], 
      },
      backgroundImage: {
         // Useful for the "Hero Section" requirement
        'hero-gradient': 'linear-gradient(to right, #135E73, #2FA8C7)',
      }
    },
  },
  plugins: [],
}