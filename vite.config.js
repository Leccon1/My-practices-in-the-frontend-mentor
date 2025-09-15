import { defineConfig } from 'vite'
import path, { resolve } from 'path' // нужен для build rollup

export default defineConfig({
	base: 'URL REPOZITORY',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@sass': path.resolve(__dirname, './src/sass'),
			'@js': path.resolve(__dirname, './src/js'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@fonts': path.resolve(__dirname, './src/assets/fonts'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				// для страниц на сайте
			},
		},
	},
})
