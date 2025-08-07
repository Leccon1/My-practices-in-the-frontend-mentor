import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: 'My-practices-in-the-frontend-mentor/junior/tip-calculator-app-main/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@style': path.resolve(__dirname, './src/style'),
			'@image': path.resolve(__dirname, './src/assets/images'),
		},
	},
})
