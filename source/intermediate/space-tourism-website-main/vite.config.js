import { defineConfig } from 'vite'
import path, { resolve } from 'path'
base: 'URL REPOZITORY'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@style': path.resolve(__dirname, './src/style'),
			'@components': path.resolve(__dirname, './src/style/sass/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},
})
