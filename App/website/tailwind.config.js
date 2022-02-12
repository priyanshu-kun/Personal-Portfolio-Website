const colors = require('tailwindcss/colors')

module.exports = { 
  darkMode: 'class',
  content: [
      './src/**/*.{js,jsx,ts,tsx}',  
  ],  
  theme: {    
     maxWidth: {
          '10rem':'10rem',
          '16rem':'16rem',
          '128': '36rem',
          '168': '42rem',
          '178': '52rem',
     },
     minWidth: {
        '80': '20rem',
     },
     minHeight: {
         '20rem':'20rem'
     },
       fontSize: {
         'super-tiny': '.6rem',
         'tiny': '.8rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.3rem',
         '2xl': '1.5rem',
         '3xl': '2rem',
         '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '4rem',
         '7xl': '4.6rem',
         '8xl': '6rem',
         'fulid': '7vw'
       },
     colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background-primary-dark-color':'#121212',
        'background-secondary-dark-color':'#141414',
        'background-primary-light-color':'#FFFDDE',
        'background-secondary-light-color':'#D9D7F1',
        'background-primary-accent-color':'#3500d3',
        'background-secondary-accent-color':'#FF6D42',
        'txt-primary-dark-bg': colors.white,
        'txt-secondary-dark-bg':'#d0d0d0',
        'txt-primary-light-bg': colors.black,
        'txt-secondary-light-bg':'#474747',
        'red': colors.red,
        'success':'#22C55E'
     },
     screens: {
      'tiny':'260px',
      'normal':'360px',
      '400':'400px',
      'fit':'400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
       lineHeight: {
          '12': '2.8rem',
          '16': '3.6rem',
          '18': '4.2rem',
       },
       transitionDelay: {
          '350': '350ms',
          '800': '800ms',
       },
       fontFamily: {
        bodyText: ['HelveticaNowDisplay-Medium', 'sans-serif'],
        primaryHeading: ['HelveticaNowDisplay-Black', 'sans-serif'],
        secondaryHeading: ['HelveticaNowDisplay-Bold', 'sans-serif'],
        accentFont: ['Nunito','sans-serif'],
      },
       zIndex: {        
          'nv-1':'-1',
          '99999999': '99999999',
       },
       height: {
          '128': '32rem',
       },
       width: {
          '28rem': '30rem',
          '128': '32rem',
          '168': '42rem',
       },
       transitionTimingFunction: {
        'bounce': 'cubic-bezier(.8, .5, .2, 1.4)',
      },
      boxShadow: {
        'activeShadow': '0 0 0 3px rgba(255,255,255, 0.3)',
      },
       opacity: {
          'op-primary-60': '.60',
          'op-secondary-30': '.30',
       }
    },  
  },  
  plugins: [],
}
