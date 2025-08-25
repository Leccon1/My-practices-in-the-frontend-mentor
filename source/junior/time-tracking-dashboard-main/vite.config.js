import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: 'My-practices-in-the-frontend-mentor/junior/time-tracking-dashboard-main/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@sass': path.resolve(__dirname, './src/styles/sass'),
			'@helpers': path.resolve(__dirname, './src/styles/sass/helpers'),
			'@images': path.resolve(__dirname, './src/assets/images'),
		},
	},
})
