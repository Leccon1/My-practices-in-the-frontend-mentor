import { defineConfig } from 'vite'
import path, { resolve } from 'path'
base: 'My-practices-in-the-frontend-mentor/demo/intermediate/space-tourism-website-main-demo/'

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
