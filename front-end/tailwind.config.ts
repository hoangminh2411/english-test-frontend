import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          xs: '12px',
          '2xl': '120px'
        }
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1700px',
        print: { raw: 'print' }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--gradient-stops))'
      },
      colors: {
        neutral: {
          white: '#FFFFFF',
          lighter: '#F5F5F5',
          light: '#E8E8E8',
          dark: '#858585',
          darker: '#4A4A4A',
          black: '#222222'
        },
        primary: {
          light: '#D3F4EA',
          main: '#04A375',
          dark: '#007F5A'
        },
        secondary: {
          light: '#B8BED9',
          main: '#222848',
          dark: '#0A0D1E'
        },
        status: {
          yellow: '#FFB95D',
          red: '#E45160',
          green: '#04A375'
        }
      },
      fontSize: {
        caption2: [
          '10px',
          {
            fontWeight: '400',
            lineHeight: '14px'
          }
        ],
        caption2_strong: [
          '10px',
          {
            fontWeight: '500',
            lineHeight: '14px'
          }
        ],
        caption1: [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '16px'
          }
        ],
        caption1_strong: [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '16px'
          }
        ],
        caption3: [
          '13px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        caption4: [
          '11px',
          {
            fontWeight: '400',
            lineHeight: '17px'
          }
        ],
        subtitle1: [
          '20px',
          {
            fontWeight: '500',
            lineHeight: '28px'
          }
        ],
        subtitle2: [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '22px'
          }
        ],
        title1: [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '40px'
          }
        ],
        title2: [
          '40px',
          {
            fontWeight: '500',
            lineHeight: '52px'
          }
        ],
        title3: [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '32px'
          }
        ],
        title4: [
          '30px',
          {
            fontWeight: '500',
            lineHeight: '32px'
          }
        ],
        title5: [
          '15px',
          {
            fontWeight: '400',
            lineHeight: '16px'
          }
        ],
        title5_strong: [
          '15px',
          {
            fontWeight: '500',
            lineHeight: '16px'
          }
        ],
        title6_strong: [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '38px'
          }
        ],
        title7_strong: [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '28.8px'
          }
        ],
        title8_strong: [
          '30px',
          {
            fontWeight: '600',
            lineHeight: '36px'
          }
        ],
        body1: [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        body1_strong: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '20px'
          }
        ],
        body2: [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '22px'
          }
        ],
        body2_strong: [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '22px'
          }
        ],
        //version 2
        'heading-1': [
          '52px',
          {
            fontWeight: '500',
            lineHeight: '62.4px'
          }
        ],
        'heading-2': [
          '30px',
          {
            fontWeight: '500',
            lineHeight: '36px'
          }
        ],
        'heading-3': [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '38.4px'
          }
        ],
        'heading-4': [
          '18px',
          {
            fontWeight: '500',
            lineHeight: '28.8px'
          }
        ],
        'heading-5': [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '40px'
          }
        ],
        'heading-6': [
          '18px',
          {
            fontWeight: '500',
            lineHeight: '21.6px'
          }
        ],
        'title-1': [
          '15px',
          {
            fontWeight: '500',
            lineHeight: '18px'
          }
        ],
        'title-2': [
          '13px',
          {
            fontWeight: '500',
            lineHeight: '15.6px'
          }
        ],
        'title-3': [
          '11px',
          {
            fontWeight: '500',
            lineHeight: '13.2px'
          }
        ],
        'paragraph-1': [
          '15px',
          {
            fontWeight: '400',
            lineHeight: '24px'
          }
        ],
        'paragraph-2': [
          '13px',
          {
            fontWeight: '400',
            lineHeight: '20.8px'
          }
        ],
        'paragraph-3': [
          '11px',
          {
            fontWeight: '400',
            lineHeight: '17.6px'
          }
        ],
        'paragraph-4': [
          '15px',
          {
            fontWeight: '600',
            lineHeight: '18px'
          }
        ],
        body4: [
          '13px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        body4_strong: [
          '13px',
          {
            fontWeight: '500',
            lineHeight: '20px'
          }
        ],
        'card-h1': [
          '52px',
          {
            fontWeight: '600',
            lineHeight: '40px'
          }
        ],
        'card-sub': [
          '11px',
          {
            fontWeight: '600',
            lineHeight: '13.2px'
          }
        ],
        'web-title-2': [
          '28px',
          {
            fontWeight: '500',
            lineHeight: '36px'
          }
        ]
      }
    }
  },
  plugins: []
};
export default config;
