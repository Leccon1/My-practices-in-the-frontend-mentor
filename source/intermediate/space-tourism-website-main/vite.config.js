import { defineConfig } from 'vite'
import path, { resolve } from 'path'

export default defineConfig({
	base: '/space-tourism-website-main-demo/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@style': path.resolve(__dirname, './src/style'),
			'@components': path.resolve(__dirname, './src/style/sass/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				destinations: resolve(__dirname, 'pages/destinations.html'),
				crew: resolve(__dirname, 'pages/crew.html'),
			},
		},
	},
})
