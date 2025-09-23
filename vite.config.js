import { defineConfig } from 'vite'
import path, { resolve } from 'path' // нужен для build rollup

export default defineConfig({
	base: 'My-practices-in-the-frontend-mentor/demo/junior/news-homepage-main',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, './src/sass'),
			'@js': path.resolve(__dirname, './src/js'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@fonts': path.resolve(__dirname, './src/assets/fonts'),
		},
	},
})
