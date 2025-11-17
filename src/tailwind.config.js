module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // Warna utama (biru)
        secondary: '#34D399',  // Warna sekunder (hijau)
        background: '#F9FAFB',  // Latar belakang terang
        darkBackground: '#1F2937', // Latar belakang gelap
      },
      fontSize: {
        base: '16px',
        lg: '20px',
        xl: '24px',
      },
      spacing: {
        18: '4.5rem', // Tambahan untuk margin dan padding
      },
    },
  },
  plugins: [],
}
