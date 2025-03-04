module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        Cyan: '#2BD0D0',
        CyanLight: 'hsl(180, 50%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        Red: 'hsl(0, 87%, 67%)',
        Gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        VeryDarkBlue: 'hsl(255, 11%, 22%)',
        VeryDarkViolet: 'hsl(260, 8%, 14%)'
      },
      fontFamily:{
        sans:['poppins', 'sans-serif']
      },
      spacing: {
        180:'32rem'
      }
    },
  },
  plugins: [],
}
