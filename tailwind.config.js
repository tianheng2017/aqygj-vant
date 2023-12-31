/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
	  colors: {
		  white: '#ffffff',
		  black: '#000000',
		  main: '#333333',
		  content: '#666666',
		  muted: '#999999',
		  light: '#e5e5e5',
		  primary: {
			  DEFAULT: '#4173ff'
		  },
		  success: '#5ac725',
		  warning: '#f9ae3d',
		  error: '#f56c6c',
		  info: '#909399',
		  page: '#f6f6f6',
		  title2: '#a9a9a9',
		  red: '#ff0000',
	  },
	  fontSize: {
		  xs: '24rpx',
		  sm: '26rpx',
		  base: '28rpx',
		  lg: '30rpx',
		  xl: '32rpx',
		  '2xl': '34rpx',
		  '3xl': '38rpx',
		  '4xl': '40rpx',
		  '5xl': '44rpx'
	  }
  },
  plugins: [
	  require("tailwindcss"),
	  require("autoprefixer"),
      plugin(function ({ addUtilities }) {
          const newUtilities = {

          }
          addUtilities(newUtilities, ['responsive'])
      })
  ],
  corePlugins: {
	  preflight: false
  }
}
